// middleware 404
const notFind = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
 }


// middleware (custom error handling - remove HTML)
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
       message: err.message,
       stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
 }


 export {notFind, errorHandler}