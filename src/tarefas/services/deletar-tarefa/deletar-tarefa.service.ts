import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CriarTarefaDto } from '../../Dtos/criarTarefaDto';
import { Tarefa } from '@prisma/client';

@Injectable()
export class DeletarTarefaService {
  constructor(private readonly prismaService: PrismaService) {}

  async criarTarefa(id: number): Promise<void> {
    await this.prismaService.tarefa.delete({
      where: { id: id },
    });
  }
}
