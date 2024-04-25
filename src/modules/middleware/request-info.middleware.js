export default() => (req, res, next) => {
    console.log('test')
    console.info(`[${new Date() }]: { URI: ${req.originalUrl}, Method: ${req.method}}`)
    next()
}