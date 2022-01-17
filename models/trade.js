const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    item: { type: String, required: true },
    unit: { type: String, required: true },
    rate: { type: Number, required: true },
  },
  { timestamps: true }
);
const scopeSectionSchema = new Schema(
  {
    name: { type: String, required: true },
    scopeItems: [itemSchema]
  },
  { timestamps: true }
);
const tradeSchema = new Schema(
  {
    name: { type: String, required: true },
    scopeSections: [scopeSectionSchema], 
    userId: { type: Number, required: true },
    laborRate: { type: Number},
  },
  { timestamps: true }
);



const trade = model("trade", tradeSchema);

module.exports = trade;
