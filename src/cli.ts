import { NestFactory } from '@nestjs/core';
import { CommandModule, CommandService } from 'nestjs-command';
import { CommandAppModule } from './command.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(CommandAppModule, {
    logger: ['error'], // only errors
  });
  try {
    await app.select(CommandModule).get(CommandService).exec();
    await app.close();
    process.exit(0);
  } catch (error) {
    console.error(error);
    await app.close();
    process.exit(1);
  }
}
bootstrap();
