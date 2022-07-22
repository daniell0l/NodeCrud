import express  from "express";
import { resolve } from "path";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.get("/", (req, res) => {
        return res.json("Hello World")
    })

    return app.listen(process.env.PORT, () => console.log("Server is running on port 3000 "))
})