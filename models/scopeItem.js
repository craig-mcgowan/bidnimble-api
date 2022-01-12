const { Schema, model } = require("mongoose");

const scopeItemSchema = new Schema(
  {
    tradeName: { type: String, required: true },
    scopeSection: { type: String, required: true },
    scopeItem: { type: String, required: true },
    userId: { type: Number, required: true },
    unit: { type: String, required: true },
    rate: { type: Number, required: true },
  },
  { timestamps: true }
);

const ScopeItem = model("scopeItem", scopeItemSchema);

module.exports = ScopeItem;
