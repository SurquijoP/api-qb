import { Type } from 'class-transformer';
import {
    IsArray,
    IsIn,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
    Min, ValidateNested,
} from 'class-validator';

export class FilterRule {
    @IsString()
    @IsNotEmpty()
    key: string;

    @IsNotEmpty()
    value: any;

    label: string;

    @IsString()
    @IsIn(['number', 'text', 'arr', 'searchValue'])
    type: string;
}

export class Pagination {
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page: number;
    @Type(() => Number)
    @IsInt()
    @Min(1)
    pageSize: number;
}

export class FilterInputPaginationDto {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => FilterRule)
    filters?: FilterRule[];
    @ValidateNested()
    @Type(() => Pagination)
    pagination: Pagination;
}