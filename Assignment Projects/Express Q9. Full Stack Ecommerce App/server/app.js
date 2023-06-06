import express from "express"
// Route Imports
import productRoute from "./src/routes/productRoute.js"
import userRoute from "./src/routes/userRoute.js"

import errorMiddleWare from "./src/middlewares/error.js"

import cookieParser from "cookie-parser"

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use("/api/v1", productRoute)
app.use("/api/v1", userRoute)

app.use(errorMiddleWare)

export default app