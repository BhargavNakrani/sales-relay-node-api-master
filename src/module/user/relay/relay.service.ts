import { BadRequestException, Injectable } from '@nestjs/common';
import {
  AddDemoContentDto,
  CreateRelayDto,
  FeatureValueDto,
  ToggleFeatureDto,
} from './dto/relay.dto';
import { UserCoreService } from 'src/core/user-core/user-core.service';
import { TemplateCoreService } from 'src/core/template-core/template-core.service';
import {
  relayMessages,
  templateMssages,
  userMessage,
} from 'src/shared/keys/user.key';
import { RelayCoreService } from 'src/core/relay-core/relay-core.service';
import { PasswordCoreService } from 'src/core/password-core/password-core.service';
import { TEMPLATE_TYPE } from '@prisma/client';
import { InformationDetailsCoreService } from 'src/core/information-details-core/information-details-core.service';
import { DemoDetailsCoreService } from 'src/core/demo-details-core/demo-details-core.service';
import { CoreIncludesDto } from 'src/core/base-query-core/dto/base-query-core.dto';

@Injectable()
export class RelayService {
  constructor(
    private userCoreService: UserCoreService,
    private templateCoreService: TemplateCoreService,
    private relayCoreService: RelayCoreService,
    private passwordCoreService: PasswordCoreService,
    private informationDetailsCoreService: InformationDetailsCoreService,
    private demoDetailsCoreService: DemoDetailsCoreService,
  ) {}
  async createRelay(createRelayDto: CreateRelayDto) {
    const { userId, templateId } = createRelayDto;

    const user = await this.userCoreService.findUnique({
      where: { id: userId, isDeleted: false },
    });

    if (!user) {
      throw new BadRequestException(userMessage.USER_NOT_FOUND);
    }

    const template = await this.templateCoreService.findUnique({
      where: { id: templateId, isDeleted: false },
    });

    if (!template) {
      throw new BadRequestException(templateMssages.TEMPLATE_NOT_FOUND);
    }

    const relay = await this.relayCoreService.create({
      data: { userId, templateId },
    });

    return relay;
  }

  async toggleFeature(toggleFeatureDto: ToggleFeatureDto) {
    const { relayId, logo, clientLogo, leadCapture } = toggleFeatureDto;

    const relay = await this.relayCoreService.findFirst({
      where: { id: relayId, isDeleted: false },
    });

    if (!relay) {
      throw new BadRequestException(relayMessages.RELAY_NOT_FOUND);
    }

    const updatedRelay = await this.relayCoreService.update({
      where: { id: relay.id },
      data: { logo: Boolean(logo), clientLogo, leadCapture },
    });

    return updatedRelay;
  }

  async featureValue(featureValueDto: FeatureValueDto) {
    const {
      relayId,
      password,
      logo,
      clientLogo,
      leadCaptureForm,
      leadCaptureText,
    } = featureValueDto;

    const relay: any = await this.relayCoreService.findFirst({
      where: { id: relayId, isDeleted: false },
      include: { template: true },
    });

    if (!relay) {
      throw new BadRequestException(relayMessages.RELAY_NOT_FOUND);
    }

    if (password) {
      const passwordExist = await this.passwordCoreService.findUnique({
        where: { relayId: relay.id },
      });

      if (!passwordExist) {
        await this.passwordCoreService.create({
          data: { relayId: relay.id, password },
        });
      } else {
        await this.passwordCoreService.update({
          where: { id: passwordExist.id },
          data: { password },
        });
      }
    }

    if (relay.template.templateType === TEMPLATE_TYPE.INFORMATION) {
      const detailExist = await this.informationDetailsCoreService.findUnique({
        where: { relayId: relay.id },
      });

      if (!detailExist) {
        await this.informationDetailsCoreService.create({
          data: { logo, clientLogo, relayId: relay.id },
        });
      } else {
        await this.informationDetailsCoreService.update({
          where: { id: detailExist.id },
          data: { logo, clientLogo, relayId: relay.id },
        });
      }

      const updatedRelay = await this.relayCoreService.findFirst({
        where: { id: relay.id },
        include: { informationDetails: true },
      });

      return updatedRelay;
    } else if (relay.template.templateType === TEMPLATE_TYPE.DEMO) {
      const detailExist = await this.demoDetailsCoreService.findUnique({
        where: { relayId: relay.id },
      });

      if (!detailExist) {
        await this.demoDetailsCoreService.create({
          data: {
            logo,
            clientLogo,
            leadCaptureForm,
            leadCaptureText,
            relayId: relay.id,
          },
        });
      } else {
        await this.demoDetailsCoreService.update({
          where: { id: detailExist.id },
          data: {
            logo,
            clientLogo,
            leadCaptureForm,
            leadCaptureText,
            relayId: relay.id,
          },
        });
      }

      const updatedRelay = await this.relayCoreService.findFirst({
        where: { id: relay.id },
        include: { demoDetails: true },
      });

      return updatedRelay;
    }
  }

  async addDemoContent(addDemoContentDto: AddDemoContentDto) {
    const { relayId, content } = addDemoContentDto;

    const relay: any = await this.relayCoreService.findUnique({
      where: { id: relayId, isDeleted: false },
      include: { template: true },
    });

    if (!relay) {
      throw new BadRequestException(relayMessages.RELAY_NOT_FOUND);
    }

    if (relay.template.templateType !== TEMPLATE_TYPE.DEMO) {
      throw new BadRequestException(templateMssages.TEMPLATE_TYPE_IS_NOT_DEMO);
    }

    const demoInfo = await this.demoDetailsCoreService.update({
      where: { relayId: relay.id },
      data: { videos: content },
    });

    return demoInfo;
  }

  async getRelay(relayId: string, coreIncludesDto: CoreIncludesDto) {
    const relay = await this.relayCoreService.findUniqueIncludes(
      {
        where: { id: relayId, isDeleted: false },
      },
      coreIncludesDto,
    );

    return relay;
  }
}
