import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { AppConfig } from './configuration';

@Module({
  imports: [NestConfigModule.forRoot({ isGlobal: true, load: [AppConfig] })],
})
export class ConfigModule {}
