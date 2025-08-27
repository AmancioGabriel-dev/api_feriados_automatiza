import express, { Request, Response, NextFunction } from "express"
import cors from "cors"
import { routes } from "./routes"
import { AppError } from "./utils/AppError"

const PORT = process.env.PORT || 3333

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

// Middleware de tratamento de erros
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    }

    console.error(error)

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`)
    console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`)
})





