import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js"
dotenv.config()
// dotenv.config({
//     // path:"./env"
//     path: "./env/.env"
// })

const PORT = process.env.PORT || 5000 ;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is Running on PORT ${PORT}`);
    })
}).catch((err) => {
    console.error("MONGODB connection Faield eroor", err);
})


