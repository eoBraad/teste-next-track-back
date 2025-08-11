import { IsNotEmpty } from "class-validator";

export class CriarTarefaDto {
    @IsNotEmpty()
    titulo: string;

    @IsNotEmpty()
    descricao: string;

    subtarefas?: CriarSubTarefaDto[];
}

export class CriarSubTarefaDto {
    @IsNotEmpty()
    titulo: string;
    @IsNotEmpty()
    concluida: boolean;
}