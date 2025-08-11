import { Module } from '@nestjs/common';
import { criarTarefaService } from './criarTarefa/criarTarefa.service';
import { TarefasController } from './tarefas.controller';
import { ListarTarefasService } from './listar-tarefas/listar-tarefas.service';
import { AtualizarTarefaService } from './atualizar-tarefa/atualizar-tarefa.service';

@Module({
  providers: [criarTarefaService, ListarTarefasService, AtualizarTarefaService],
  controllers: [TarefasController]
})
export class TarefasModule { }
