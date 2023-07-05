const Gift = require("../models/gift");

module.exports.Home = async (req, res) => {
  try {
    const { ProductName, Age, Gender, OccasionType, Relation, Budget } = req.body;
    
  } catch (error) {
    console.log(error);
  }
};

// const Product = require('../models/Product');

// Controller function to handle user requests
// const searchProduct = async (req, res) => {
//   const { productName, age, gender, occasionType, relation, budget } = req.body;

//   try {
//     // Build the query to search for the product in the database
//     const query = {
//       productName,
//       age,
//       gender,
//       occasionType,
//       relation,
//       budget
//     };

//     // Execute the search query using Mongoose
//     const product = await Product.findOne(query);

//     if (!product) {
//       // If no product is found, send an appropriate response
//       return res.status(404).json({ error: 'Product not found' });
//     }

//     // Generate the affiliate link based on the product
//     const affiliateLink = generateAffiliateLink(product);

//     // Send the affiliate link as a response
//     res.status(200).json({ affiliateLink });
//   } catch (error) {
//     // Handle any errors that occur during the search process
//     console.error('Error searching for product:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// Function to generate the affiliate link based on the product
// const generateAffiliateLink = (product) => {
//   // Replace this logic with your own implementation
//   // Generate the affiliate link using the product information
//   const affiliateLink = `https://example.com/affiliate/${product.id}`;

//   return affiliateLink;
// };

// module.exports = { searchProduct };
