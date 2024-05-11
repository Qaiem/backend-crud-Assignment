import mongoose from 'mongoose' 

export const DBConnect = () => {
    mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
    console.log("Connect to MongoDB")
 })
 .catch((err)=>{
    console.error("Error Conecting to MONGODB",err);
 })
}
