import { Schema } from 'mongoose';

export const chartSchema = new Schema({
  type: { type: String },
  chartType: { type: String },
  xData: { type: [Schema.Types.Mixed] },
  yData: { type: [Schema.Types.Mixed] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
