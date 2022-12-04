const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
//establish connection
const db = new Sequelize('shoppingappdb', 'shopAdmin', '**************', {
    host: 'localhost',
    port: 8090,
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
});

// db.authenticate();

//Model class definition
const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    }
})

const Product = db.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    manufacturer: DataTypes.STRING(30),
    description: DataTypes.STRING(255)
})

db.sync()
    .then(() => "Database has been created successfully")
    .catch((err) => {
        console.error("Error syncing database");
    })

exports = module.exports = {
    db,
    User,
    Product
}