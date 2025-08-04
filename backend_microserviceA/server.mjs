import express from "express";
import 'dotenv/config'
import cors from "cors";
import router from './sales_tax_controller.mjs'

const PORT = process.env.PORT || 3000


const app = express()
app.use(cors())
app.use(express.json())


app.use('/', router)

app.use((err, req, res, next) => { 
    console.error(err)
    res.status(500).json({Error: 'Internal Server Error'})
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})