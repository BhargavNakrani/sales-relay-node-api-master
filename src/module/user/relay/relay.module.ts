import { Module } from '@nestjs/common';
import { RelayService } from './relay.service';
import { RelayController } from './relay.controller';
import { UserCoreModule } from 'src/core/user-core/user-core.module';
import { TemplateCoreModule } from 'src/core/template-core/template-core.module';
import { RelayCoreModule } from 'src/core/relay-core/relay-core.module';
import { PasswordCoreModule } from 'src/core/password-core/password-core.module';
import { InformationDetailsCoreModule } from 'src/core/information-details-core/information-details-core.module';
import { DemoDetailsCoreModule } from 'src/core/demo-details-core/demo-details-core.module';

@Module({
  imports: [
    UserCoreModule,
    TemplateCoreModule,
    RelayCoreModule,
    PasswordCoreModule,
    InformationDetailsCoreModule,
    DemoDetailsCoreModule,
  ],
  controllers: [RelayController],
  providers: [RelayService],
})
export class RelayModule {}
