// import {IsString, IsNumber} from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'
import { CreateMovieDto } from './create-movie.dto'

// export class UpdateMovieDto{

//     @IsString()
//     readonly title?: string;
//     @IsNumber()
//     readonly year?: number;
//     @IsString({each:true})
//     readonly genres?:string[];
// }
// DTO를 새로 만드는 대신 createMovieDto를 가져와서 partialtype이용

export class UpdateMovieDto extends PartialType(CreateMovieDto){}