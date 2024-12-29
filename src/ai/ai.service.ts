import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// Packages
import { GoogleGenerativeAI } from '@google/generative-ai';
import { prompts } from './ai.constant';

// Types
export type Role = 'RECRUITER' | 'COLLEAGUE' | 'VISITOR' | 'FRIEND';

@Injectable()
export class AiService {
  private readonly azureOpenaiApiKey: string;
  private readonly googleGenerativeAi: GoogleGenerativeAI;
  private readonly model: any;

  constructor(private readonly configService: ConfigService) {
    this.azureOpenaiApiKey = this.configService.get('app.azureOpenaiApiKey');
    this.googleGenerativeAi = new GoogleGenerativeAI(this.azureOpenaiApiKey);
    this.model = this.googleGenerativeAi.getGenerativeModel({
      model: 'gemini-1.5-flash',
    });
  }

  async generateText({
    role,
    context,
  }: {
    role: Role;
    context: { first: string; second: string };
  }): Promise<{ text: string }> {
    const functionPrompt = prompts[role];

    const prompt = functionPrompt(context);

    const result = await this.model.generateContent(prompt);
    return {
      text: result.response.text(),
    };
  }
}
