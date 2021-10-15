import express from "express"
import cors from "cors"
import { channelsRouter } from "./routes/channels.router"

const app = express()
const port = process.env.PORT || 8080

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    }),
)
app.use("/channels", channelsRouter)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})