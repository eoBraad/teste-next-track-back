import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class DeletarTarefaService {
  constructor(private readonly prismaService: PrismaService) {}

  async deletar(id: number): Promise<void> {
    const tarefaExistente = await this.prismaService.tarefa.count({
      where: { id: id },
    });

    if (tarefaExistente === 0) {
      throw new NotFoundException('Tarefa não encontrada');
    }
    await this.prismaService.tarefa.delete({
      where: { id: id },
    });
  }
}
