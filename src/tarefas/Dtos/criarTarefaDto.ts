import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';

export class CriarTarefaDto {
  @ApiProperty({
    description: 'Título da tarefa',
    example: 'Estudar NestJS',
  })
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({
    description: 'Descrição da tarefa',
    example:
      'Estudar os conceitos básicos do NestJS e como integrá-lo com o Prisma',
  })
  @IsNotEmpty()
  descricao: string;

  @ApiProperty({
    description: 'Lista de subtarefas associadas à tarefa',
    type: [Object],
    example: [
      { titulo: 'Ler a documentação', concluida: false },
      { titulo: 'Criar um projeto exemplo', concluida: false },
    ],
  })
  @ValidateNested({ each: true })
  @Type(() => CriarSubTarefaDto)
  subtarefas?: CriarSubTarefaDto[];
}

export class CriarSubTarefaDto {
  @IsNotEmpty()
  titulo: string;
  @IsNotEmpty()
  concluida: boolean;
}
