import { IsNumber, IsOptional, IsPositive, isNumber } from "class-validator";

export class PaginationQueryDto{
    
    @IsNumber()
    @IsPositive()
    @IsOptional()
    limit: number;
    
    @IsNumber()
    @IsPositive()
    @IsOptional()
    offset: number
}