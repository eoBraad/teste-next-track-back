import { Injectable, NotFoundException } from '@nestjs/common';
import { Tarefa } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';
import { AtualizarTarefaDto } from '../../Dtos/atualizarTarefa';

@Injectable()
export class AtualizarTarefaService {
  constructor(private readonly prismaService: PrismaService) {}

  async atualizarTarefa(id: number, data: AtualizarTarefaDto): Promise<Tarefa> {
    const tarefaExistente = await this.prismaService.tarefa.count({
      where: { id: id },
    });

    if (tarefaExistente === 0) {
      throw new NotFoundException('Tarefa não encontrada');
    }

    return this.prismaService.tarefa.update({
      where: { id: id },
      data: {
        titulo: data.titulo,
        descricao: data.descricao,
        subtarefas: {
          update:
            data.subtarefas?.map((subtarefa) => ({
              where: { id: subtarefa.id },
              data: {
                titulo: subtarefa.titulo,
                concluida: subtarefa.concluida,
              },
            })) || [],
        },
      },
      include: {
        subtarefas: true,
      },
    });
  }
}
