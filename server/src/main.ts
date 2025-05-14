/*
 * @Author: huangzhendong huangzhendong@dingtalk.com
 * @Date: 2025-05-13 16:37:52
 * @LastEditors: huangzhendong huangzhendong@dingtalk.com
 * @LastEditTime: 2025-05-14 17:32:57
 * @FilePath: \type_cro_nest\server\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './db';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error));
