import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './module/user/auth/auth.module';
import { TemplateModule } from './module/user/template/template.module';
import { RelayModule } from './module/user/relay/relay.module';

@Module({
  imports: [AuthModule, TemplateModule, RelayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
