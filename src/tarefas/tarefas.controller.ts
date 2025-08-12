import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CriarTarefaDto } from './Dtos/criarTarefaDto';
import { criarTarefaService } from './services/criarTarefa/criarTarefa.service';
import { ListarTarefasService } from './services/listar-tarefas/listar-tarefas.service';
import { AtualizarTarefaDto } from './Dtos/atualizarTarefa';
import { AtualizarTarefaService } from './services/atualizar-tarefa/atualizar-tarefa.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeletarTarefaService } from './services/deletar-tarefa/deletar-tarefa.service';

@ApiTags('tarefas')
@Controller('tarefas')
export class TarefasController {
  constructor(
    private readonly criarTarefaService: criarTarefaService,
    private readonly listarTarefasService: ListarTarefasService,
    private readonly atualizarTarefasService: AtualizarTarefaService,
    private readonly deletarTarefaService: DeletarTarefaService,
  ) {}

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
      tarefa,
    });
  }

  @ApiOperation({ summary: 'Atualizar uma tarefa existente e suas subtarefas' })
  @Patch(':id')
  async atualizarTarefa(
    @Param('id') id: string,
    @Body() atualizarTarefaDto: AtualizarTarefaDto,
    @Res() res,
  ) {
    const tarefa = await this.atualizarTarefasService.atualizarTarefa(
      parseInt(id),
      atualizarTarefaDto,
    );
    return res.status(200).json({
      message: 'Tarefa atualizada com sucesso',
      tarefa,
    });
  }

  @ApiOperation({ summary: 'Deletar uma tarefa' })
  @Delete('/:id')
  async deletarTarefa(@Param('id') id: string, @Res() res) {
    await this.deletarTarefaService.deletar(parseInt(id));
    return res.status(200).json({ message: 'Tarefa deletada com sucesso' });
  }
}
