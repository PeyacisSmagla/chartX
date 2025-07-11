// chart.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { ChartService } from './chart.service';
// import { ChartController } from './chart.controller';
import { chartSchema } from './chart.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Chart', schema: chartSchema }]),
  ],
  //   providers: [ChartService],
  //   controllers: [ChartController],
})
export class ChartModule {}
