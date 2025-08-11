import { Module } from '@nestjs/common';
import { TarefasModule } from './tarefas/tarefas.module';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [TarefasModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule { }
