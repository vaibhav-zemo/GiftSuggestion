const Gift = require("../models/gift");

module.exports.Home = async (req, res) => {
  try {
    const { Age, Gender, OccasionType, Relation, Budget } = req.body;
    if(!Age || !Gender || !OccasionType || !Relation || !Budget){
        const err = "All Answers Required"
        res.status(500).json(err);
        return;
    }
    const gift = await Gift.find({Age: Age, Gender: Gender, "Occasion Type": OccasionType, Relation: Relation, Budget: Budget});
    res.status(200).json(gift);
  } catch (error) {
    console.log(error);
  }
};

module.exports.Data = async (req, res) => {
  try {
    const gift = await Gift.find({});
    res.status(200).json(gift);
  } catch (err) {
    console.log(err);
  }
};



