import { Min,MinLength, IsString, IsPositive, IsInt } from 'class-validator';
export class CreatePokemonDto {

    @Min(1)
    @IsPositive()
    @IsInt()
    no: number;

    @IsString()
    @MinLength(1)
    name: string;


}
