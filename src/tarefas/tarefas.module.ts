import { forwardRef, Module } from '@nestjs/common';
import { criarTarefaService } from './services/criarTarefa/criarTarefa.service';
import { TarefasController } from './tarefas.controller';
import { ListarTarefasService } from './services/listar-tarefas/listar-tarefas.service';
import { AtualizarTarefaService } from './services/atualizar-tarefa/atualizar-tarefa.service';
import { PrismaService } from 'src/services/prisma.service';
import { AppModule } from 'src/app.module';
import { DeletarTarefaService } from './services/deletar-tarefa/deletar-tarefa.service';

@Module({
  providers: [
    criarTarefaService,
    ListarTarefasService,
    AtualizarTarefaService,
    DeletarTarefaService,
  ],
  controllers: [TarefasController],
  exports: [
    criarTarefaService,
    ListarTarefasService,
    AtualizarTarefaService,
    DeletarTarefaService,
  ],
  imports: [forwardRef(() => AppModule)],
})
export class TarefasModule {}
