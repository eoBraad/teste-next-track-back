import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CriarTarefaDto } from '../Dtos/criarTarefaDto';
import { Tarefa } from '@prisma/client';

@Injectable()
export class criarTarefaService {

    constructor(private readonly prismaService: PrismaService) { }

    async criarTarefa(criarTarefaDto: CriarTarefaDto): Promise<Tarefa> {
        const { titulo, descricao, subtarefas } = criarTarefaDto;

        const tarefa = await this.prismaService.tarefa.create({
            data: {
                titulo,
                descricao,
                subtarefas: {
                    create: subtarefas?.map(subtarefa => ({
                        titulo: subtarefa.titulo,
                        concluida: subtarefa.concluida
                    })) || []
                }
            },
            include: {
                subtarefas: true
            }
        });

        return tarefa;
    }
}
