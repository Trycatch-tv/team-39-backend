import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Review } from './entities/review.entity';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
  imports: [MikroOrmModule.forFeature([Review])],
})
export class ReviewModule {}
