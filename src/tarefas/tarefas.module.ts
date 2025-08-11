import { forwardRef, Module } from '@nestjs/common';
import { criarTarefaService } from './services/criarTarefa/criarTarefa.service';
import { TarefasController } from './tarefas.controller';
import { ListarTarefasService } from './services/listar-tarefas/listar-tarefas.service';
import { AtualizarTarefaService } from './services/atualizar-tarefa/atualizar-tarefa.service';
import { PrismaService } from 'src/services/prisma.service';
import { AppModule } from 'src/app.module';

@Module({
  providers: [criarTarefaService, ListarTarefasService, AtualizarTarefaService],
  controllers: [TarefasController],
  exports: [criarTarefaService, ListarTarefasService, AtualizarTarefaService],
  imports: [forwardRef(() => AppModule)],
})
export class TarefasModule { }
