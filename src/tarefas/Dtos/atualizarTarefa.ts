import { IsNotEmpty } from "class-validator";

export class AtualizarTarefaDto {
    @IsNotEmpty()
    titulo: string;

    @IsNotEmpty()
    descricao: string;

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