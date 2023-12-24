
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}

export { asyncHandler }

// -----------or -----------------or ------------------or ---------------------- 


// const asyncHandler = (requesthandler) => async (req, res, next) => {
//     try {
//         await requesthandler(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success : false,
//             message : err.message
//         })
//     }
// }

// export { asyncHandler }