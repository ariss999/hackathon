const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'mydb', // Database name
    'test', // Username
    'test1234', // Password
    {
      host: '20.247.146.131', // Connect to your local database
      dialect: 'postgres',// Tell sequelize to use Postgres
      port:5432
    }
  );

  async function connect() {
    try{
        await sequelize.authenticate();
        console.log(
            'connection successfully'
        )
    } catch(error) {
        console.error(
            'unable to connect',error
        )
    }
  }

  async function sync() {
    try{
        await sequelize.sync();
        console.log(
            'connection successfully'
        )
    } catch(error) {
        console.error(
            'unable to connect',error
        )
    }
  }



module.exports = { sequelize, connect, sync };