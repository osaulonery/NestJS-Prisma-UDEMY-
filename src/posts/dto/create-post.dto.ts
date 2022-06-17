import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ description: 'Título do post' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Conteúdo do post' })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({ description: 'Email do autor do post' })
  @IsEmail()
  authorEmail: string;
}
