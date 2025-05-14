/*
 * @Author: huangzhendong huangzhendong@dingtalk.com
 * @Date: 2025-05-13 16:51:18
 * @LastEditors: huangzhendong huangzhendong@dingtalk.com
 * @LastEditTime: 2025-05-14 18:13:21
 * @FilePath: \type_cro_nest\server\src\cats\cats.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { AppDataSource } from 'src/db';
import { Photo } from 'src/db/model/Photo';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  private readonly photoRepository = AppDataSource.getRepository(Photo);

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    const res = await this.photoRepository.save(createCatDto);
    console.log('createCatDtores1111', res);
    if (res) {
      return this.catsService.create(res);
    }
    return false;
  }

  @Get()
  async findAll() {
    const res = await this.photoRepository.find()
    console.log('res', res);
    if (res) {
      return this.catsService.findAll(res);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
