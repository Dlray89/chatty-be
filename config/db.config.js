require("dotenv").config();

module.exports = {
  HOST: 'ec2-18-213-179-70.compute-1.amazonaws.com',
  USER: 'oowyvdywxpkfts',
  PASSWORD: '321ff4565ac1a08508e8f7b9c5392dc89da1f5c48bb905d2cc57145d986dd73d',
  DB: 'd2nuargric33g5',
  dialect: process.env.DB_DIALECT,
  PORT: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
    },
  
};
