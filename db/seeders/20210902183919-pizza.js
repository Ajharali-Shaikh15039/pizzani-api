'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('pizzas', [
        {id:1,pizzaName:"Marinara",description:"Marinara sauce, Garlic, Olive oil, Basil, Oregano",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:2,pizzaName:"Margherita",description:"San Marzano tomato sauce, Mozzarella di bufala, Olive Oil",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:3,pizzaName:"Aglio e olio",description:"Tomato sauce, Garlic, Olive oil",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:4,pizzaName:"Ai Broccoli",description:"Tomato sauce, Mozzarella, Broccoli, Garlic, Chili peppers, Oregano",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:5,pizzaName:"Al Salmone",description:"Tomato sauce, Mozzarella, Salmon, Garlic",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:6,pizzaName:"Alla Vongole",description:"Tomato sauce, Mozzarella, Garlic, Small clams, Chili powder",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:7,pizzaName:"Alle Verdure Grigliate",description:"omato sauce, Mozzarella, Grilled vegetables",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:8,pizzaName:"Anchovis",description:"Tomato Sauce, Mozzarella, Anchovies, Garlic, Hot chili peppers",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:9,pizzaName:"Bianca",description:"Ricotta, Mozzarella, Garlic",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:10,pizzaName:"Achari Paneer",description:"Tomato sauce with mango pickle masala, Cottage cheese",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:11,pizzaName:"Chaat",description:"Chaat masala, Mozzarella, Mango, Green chili pepper, Onions, Black pepper, Olive oil",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:12,pizzaName:"Chicken Tikka",description:"Tikka sauce, Mozzarella, Tikka chicken breast, Garlic, Onion",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:13,pizzaName:"Chili Paneer",description:"Yoghurt, Paneer, Masala, Red chili powder, Hot Inidan chili peppers",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:14,pizzaName:"Curry Paneer",description:"Mild curry sauce, Paneer (Panir cheese), Tomatoes, Olives, Ginger, Garlic, Chillies, Cilantro",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:15,pizzaName:"Desi",description:"Hot curry sauce, Cheese, Cottage cheese, Red onion, White onion, Green onion, Capsicum, Indian spices",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:16,pizzaName:"Jain",description:"Tomato sauce, Cheese, Capsicum",price:120,createdAt:new Date(),updatedAt:new Date()},
        {id:17,pizzaName:"Tandoori Chicken",description:"Tomato sauce, Feta, Tandoori chicken, Red onion, Cilantro",price:120,createdAt:new Date(),updatedAt:new Date()},
     ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
