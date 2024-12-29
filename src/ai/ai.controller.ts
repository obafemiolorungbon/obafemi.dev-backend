import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';

// Types
import type { Role } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('generate-text')
  async generateText(
    @Body() body: { role: Role; context: { first: string; second: string } },
  ): Promise<string> {
    return this.aiService.generateText(body);
  }
}
