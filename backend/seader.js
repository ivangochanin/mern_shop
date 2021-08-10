import mongoose from "mongoose"
import dotenv from "dotenv"
import users from "./data/users.js"
import products from "./data/products.js"
import User from "./models/userModel.js"
import Product from "./models/productModel.js"
import Order from "./models/orderModel.js"
import connectDB from "./config/db.js"

dotenv.config()
connectDB()

const importData = async () => {
	try {
		// Clear all 3 collections out completely - because we do not want to import that is already in the database
		await Order.deleteMany()
		await Product.deleteMany()
		await User.deleteMany()

		// Import users
		const createdUsers = await User.insertMany(users)
		// We have a connection between products and users - we want the admin user to be Object Id for all the products
		const adminUser = createdUsers[0]._id
		// Add admin user to each product
		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser }
		})

		await Product.insertMany(sampleProducts)

		console.log("Data Imported !!!")
		process.exit()
	} catch (error) {
        console.error(`${error}`)
		process.exit(1)
    }
}


const destroyData = async () => {
	try {
		await Order.deleteMany()
		await Product.deleteMany()
		await User.deleteMany()

		console.log("Data Destroyed !!!")
		process.exit()
	} catch (error) {
        console.error(`${error}`)
		process.exit(1)
    }
}

// index 2 is hatever is pasted empty or -d for destroy
// process.argv[2]

process.argv[2] === '-d' ? destroyData() : importData()
