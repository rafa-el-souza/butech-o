import mongoose from 'mongoose';

export const connection = async (
  mongoDatabaseURI = process.env.MONGO_URI || 'mongodb://localhost:27017/butech-o',
) => {
  try {
    await mongoose.connect(mongoDatabaseURI);
    mongoose.connection.on('error', (err) => {
      console.error(err);
      console.log('MongoDB connection error...');
    });
    mongoose.connection.on('disconnected', (err) => {
      console.error(err);
      console.log('Disconnected from MongoDB...');
    });
  } catch (err) {
    console.error(err);
  }
};
