import express from 'express' 
import dotenv from 'dotenv'
import conectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
conectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running ...')
})

// For anything that goes to /api/products is gonna be linked to product Routes
app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))