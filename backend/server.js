import express from 'express' 
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFind, errorHandler} from './middleware/errorMiddleware.js'


dotenv.config()
connectDB()

const app = express()

// TEST middleware
/* app.use((req, res, next) => {
   console.log(req.originalUrl);
   next()
}) */

app.get('/', (req, res) => {
    res.send('API is running ...')
})

// For anything that goes to /api/products is gonna be linked to product Routes
app.use('/api/products', productRoutes)

// error middleware
app.use(notFind)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))