import { Module } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorController } from './director.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Director } from './entities/director.entity';

@Module({
  controllers: [DirectorController],
  providers: [DirectorService],
  imports: [MikroOrmModule.forFeature([Director])],
})
export class DirectorModule {}
