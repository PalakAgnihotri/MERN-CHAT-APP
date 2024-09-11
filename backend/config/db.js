// const mongoose = require("mongoose");
// const connectDB = () => {
//   mongoose
//     .connect(
//       "mongodb+srv://Palak_Agnihotri:avi123@firstproject.h77zq.mongodb.net/?retryWrites=true&w=majority&"
//     )
//     .then(console.log("connected"));
// };
// module.exports = connectDB;
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;
