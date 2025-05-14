/*
 * @Author: huangzhendong huangzhendong@dingtalk.com
 * @Date: 2025-05-13 17:03:05
 * @LastEditors: huangzhendong huangzhendong@dingtalk.com
 * @LastEditTime: 2025-05-13 17:34:11
 * @FilePath: \type_cro_nest\server\src\db\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Photo } from './model/Photo';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '172.16.1.241',
  port: 3306,
  username: 'qianduan',
  password: 'df6c8c407adbeefa',
  database: 'db_test',
  entities: [Photo],
  synchronize: true,
  logging: false,
});
