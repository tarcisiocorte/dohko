import {Injectable} from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { getRepository } from '@nestjs/typeorm'
import {async} from 'rxjs'
import { Repository  } from 'typeorm'

@Injectable()
export class Repository<Event> {

}


describe('EventRepository', () => {
  let repository: Repository<Event>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Repository<Event>],
    }).compile();

    repository = module.get<Repository<Event>>(Repository<Event>);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  })
})
