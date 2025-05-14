/*
 * @Author: huangzhendong huangzhendong@dingtalk.com
 * @Date: 2025-05-13 16:51:18
 * @LastEditors: huangzhendong huangzhendong@dingtalk.com
 * @LastEditTime: 2025-05-14 18:19:42
 * @FilePath: \type_cro_nest\server\src\cats\cats.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Photo } from 'src/db/model/Photo';

@Injectable()
export class CatsService {
  create(createCatDto: CreateCatDto) {
    if (createCatDto) {
      return {
        code: 200,
        message: '创建成功',
        data: createCatDto,
      };
    }
    return {
      code: 400,
      message: '创建失败',
      data: [],
    };
  }

  findAll(res: Photo[]) {
    if (res && res.length > 0) {
      return {
        code: 200,
        message: '查询成功',
        data: res,
      };
    }
    return {
      code: 400,
      message: '查询失败',
      data: [],
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    console.log(updateCatDto);
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
