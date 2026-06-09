import mongoose from 'mongoose';
const Connection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        throw new error;
    }
}
export default Connection;