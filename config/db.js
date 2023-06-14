// const mongoose = require("mongoose")


// const connectDB = async () => {
//     try{
//         const connect = await mongoose.connect(process.env.MONGO_URI)
//         console.log(`Mongo BD connected: ${connect.connection.host}`.cyan.underline);
//     } catch(err){
//         console.log(err);
//         process.exit(1)
//     }
// }

// module.exports = connectDB


const mongoose = require("mongoose")

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    console.log(`Mongo DB connected: ${mongoose.connection.host}`.cyan.underline);
    })
    .catch((err) => {
    console.log(err);
    process.exit(1);
    });
};

module.exports = connectDB;