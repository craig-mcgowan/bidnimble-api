const { Schema, model } = require("mongoose");
const lineItemSchema = new Schema(
  {
    item: { type: String, required: true },
    unit: { type: String, required: true },
    rate: { type: String, required: true },
    quantity: { type: String, required: true },
    fluff: {type:String, required: true},
    total: {type: String}
  },
  { timestamps: true }
);

const sectionSchema = new Schema(
  {
      name: { type: String, required: true },
      scopeItems: [lineItemSchema],
      total: {type: String, required: true}
  },
  { timestamps: true }
);
const estimateTradeSchema = new Schema(
  {
    name: { type: String, required: true },
    total: { type: String, required: true },
    estimateSections: [sectionSchema], 
  },
  { timestamps: true }
);

const estimateSchema = new Schema(
  {
    userId: {type: Number},
    name: { type: String, required: true },
    location: {type: String},
    trades: [estimateTradeSchema],
    subtotal: { type: String, required: true },
    fees: [lineItemSchema],
    total: {type: String, required: true}

  },
  { timestamps: true }
);

const estimate = model("estimate", estimateSchema);

module.exports = estimate;

