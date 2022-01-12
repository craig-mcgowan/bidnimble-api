const { Schema, model } = require("mongoose");

const scopeItemSchema = new Schema(
  {
    tradeName: { type: String, required: true },
    scopeItem: { type: String, required: true },
    userId: { type: String, required: true },
    unit: { type: String, required: true },
    rate: { type: Number, required: true },
    
  },
  { timestamps: true }
);

const scopeItem = model("scopeItem", scopeItemSchema);

module.exports = scopeItem;
