import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AiService } from './ai/ai.service';
import { AiModule } from './ai/ai.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AiModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService, AiService],
})
export class AppModule {}
