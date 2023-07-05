const mongoose = require("mongoose");

const GiftSchema = new mongoose.Schema(
  {
    ProductName: {
      type: String,
    },
    Age: {
      type: String,
      require: true,
    },
    Gender: {
      type: String,
      require: true,
    },
    OccasionType: {
      type: String,
      require: true,
    },
    Relation: {
      type: String,
      require: true,
    },
    Budget: {
      type: String,
      require: true,
    },
    AffiliateLink: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gift", GiftSchema);
