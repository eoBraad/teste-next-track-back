import { Injectable } from '@nestjs/common';
import { Tarefa } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class ListarTarefasService {
    constructor(private readonly prismaService: PrismaService) { }

    async listarTarefas(): Promise<Tarefa[]> {
        return this.prismaService.tarefa.findMany({
            include: {
                subtarefas: true
            }
        });
    }
}
