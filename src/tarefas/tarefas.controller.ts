import { Body, Controller, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { CriarTarefaDto } from './Dtos/criarTarefaDto';
import { criarTarefaService } from './services/criarTarefa/criarTarefa.service';
import { ListarTarefasService } from './services/listar-tarefas/listar-tarefas.service';
import { AtualizarSubTarefaDto, AtualizarTarefaDto } from './Dtos/atualizarTarefa';
import { AtualizarTarefaService } from './services/atualizar-tarefa/atualizar-tarefa.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('tarefas')
@Controller('tarefas')
export class TarefasController {

    constructor(private readonly criarTarefaService: criarTarefaService,
        private readonly listarTarefasService: ListarTarefasService,
        private readonly atualizarTarefasService: AtualizarTarefaService) { }


    @ApiOperation({ summary: 'Listar todas as tarefas' })
    @Get()
    async listarTarefas(@Res() res) {
        const tarefas = await this.listarTarefasService.listarTarefas();
        return res.status(200).json(tarefas);
    }


    @ApiOperation({ summary: 'Criar uma nova tarefa' })
    @Post()
    async criarTarefa(@Body() criarTarefaDto: CriarTarefaDto, @Res() res) {
        const tarefa = await this.criarTarefaService.criarTarefa(criarTarefaDto);
        return res.status(201).json({
            message: 'Tarefa criada com sucesso',
            tarefa
        });
    }

    @ApiOperation({ summary: 'Atualizar uma tarefa existente e suas subtarefas' })
    @Patch(':id')
    async atualizarTarefa(@Param() id: number, @Body() atualizarTarefaDto: AtualizarTarefaDto, @Res() res) {
        var tarefa = await this.atualizarTarefasService.atualizarTarefa(id, atualizarTarefaDto);
        return res.status(200).json({
            message: 'Tarefa atualizada com sucesso',
            tarefa
        });
    }
}
