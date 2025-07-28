import { Test, TestingModule } from '@nestjs/testing';
import { CreateOrderHandler } from './create-order.handler';

describe('CreateOrderHandler', () => {
  let provider: CreateOrderHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateOrderHandler],
    }).compile();

    provider = module.get<CreateOrderHandler>(CreateOrderHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
