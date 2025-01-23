
import mongoose from 'mongoose';
export const connectDB = async () => {

    try {
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/Food", {
        })

        console.log(`MongoDB Connected:`)
    } catch (error) {
        console.log(error)

    }
}



export default connectDB