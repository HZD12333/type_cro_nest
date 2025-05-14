/*
 * @Author: huangzhendong huangzhendong@dingtalk.com
 * @Date: 2025-05-13 16:58:55
 * @LastEditors: huangzhendong huangzhendong@dingtalk.com
 * @LastEditTime: 2025-05-13 17:02:28
 * @FilePath: \type_cro_nest\server\src\db\model\User.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('double')
  views: number;

  @Column()
  isPublished: boolean;
}
