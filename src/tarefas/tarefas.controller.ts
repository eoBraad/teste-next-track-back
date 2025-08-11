import { Body, Controller, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { CriarTarefaDto } from './Dtos/criarTarefaDto';
import { criarTarefaService } from './criarTarefa/criarTarefa.service';
import { ListarTarefasService } from './listar-tarefas/listar-tarefas.service';
import { AtualizarSubTarefaDto, AtualizarTarefaDto } from './Dtos/atualizarTarefa';
import { AtualizarTarefaService } from './atualizar-tarefa/atualizar-tarefa.service';

@Controller('tarefas')
export class TarefasController {

    constructor(private readonly criarTarefaService: criarTarefaService,
        private readonly listarTarefasService: ListarTarefasService,
        private readonly atualizarTarefasService: AtualizarTarefaService) { }

    @Get()
    async listarTarefas(@Res() res) {
        const tarefas = await this.listarTarefasService.listarTarefas();
        return res.status(200).json(tarefas);
    }

    @Post()
    async criarTarefa(@Body() criarTarefaDto: CriarTarefaDto, @Res() res) {
        const tarefa = await this.criarTarefaService.criarTarefa(criarTarefaDto);
        return res.status(201).json({
            message: 'Tarefa criada com sucesso',
            tarefa
        });
    }

    @Patch(':id')
    async atualizarTarefa(@Param() id: number, @Body() atualizarTarefaDto: AtualizarTarefaDto, @Res() res) {
        var tarefa = await this.atualizarTarefasService.atualizarTarefa(id, atualizarTarefaDto);
        return res.status(200).json({
            message: 'Tarefa atualizada com sucesso',
            tarefa
        });
    }
}
