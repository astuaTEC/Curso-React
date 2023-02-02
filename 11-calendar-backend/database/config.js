const mongoose = require('mongoose');

const dbConnection = () => {
    try {
        
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.DB_CNN);

        console.log('DB conectada');

    } catch (error) {
        console.log(error);
        throw new Error('Error inicializando db');
    }
}

module.exports = {
    dbConnection
}