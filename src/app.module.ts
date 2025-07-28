import { Module } from '@nestjs/common';
import { OrderModule } from './domain/order/order.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { StreamingModule } from './infrastructure/streaming/streaming.module';

@Module({
  imports: [OrderModule, DatabaseModule, StreamingModule],
})
export class AppModule {}
