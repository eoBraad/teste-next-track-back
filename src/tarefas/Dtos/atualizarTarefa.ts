import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class AtualizarTarefaDto {
    @ApiProperty({
        description: 'Título da tarefa',
        example: 'Estudar NestJS',
    })
    @IsNotEmpty()
    titulo: string;

    @ApiProperty({
        description: 'Descrição da tarefa',
        example: 'Estudar os conceitos básicos do NestJS e como integrá-lo com o Prisma',
    })
    @IsNotEmpty()
    descricao: string;

    @ApiProperty({
        description: 'Lista de subtarefas associadas à tarefa',
        type: [Object],
        example: [
            { id: 1, titulo: 'Ler a documentação', concluida: false },
            { id: 2, titulo: 'Criar um projeto exemplo', concluida: false }
        ],
    })
    subtarefas?: AtualizarSubTarefaDto[];
}

export class AtualizarSubTarefaDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    titulo: string;

    @IsNotEmpty()
    concluida: boolean;
}