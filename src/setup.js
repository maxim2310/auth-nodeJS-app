'use strict';
const { User } = require('./models/user');

// const { User } = require('./models/user');
// const { Token } = require('./models/token');
// const { Expense } = require('./models/expenses');

User.sync({ force: true });
// Token.sync({ force: true });
// Expense.sync({ force: true });

// User.create({
//   email: "tiribofd560@akoption.com",
//   name:"maxim2310",
//   password:"Test1234",
// })