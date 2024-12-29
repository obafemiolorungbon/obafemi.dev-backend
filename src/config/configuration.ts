import { registerAs } from '@nestjs/config';

export const AppConfig = registerAs('app', () => ({
  port: parseInt(process.env.PORT, 10) || 4300,
  azureOpenaiApiKey: process.env.AZURE_OPENAI_API_KEY,
  env: process.env.NODE_ENV,
}));
