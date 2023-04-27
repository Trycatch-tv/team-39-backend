import { EntityManager, EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private _reviewModel: EntityRepository<Review>,
    private _em: EntityManager,
  ) {}
  async create(createReviewDto: CreateReviewDto) {
    try {
      const review = this._em.create(Review, createReviewDto);
      return await this._reviewModel.persistAndFlush(review);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this._reviewModel.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this._reviewModel.findOne({ id });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    try {
      return await this._reviewModel.nativeUpdate({ id }, updateReviewDto);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this._reviewModel.nativeDelete({ id });
    } catch (error) {
      console.log(error);
    }
  }
}
