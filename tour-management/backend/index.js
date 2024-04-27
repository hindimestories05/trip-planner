import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from 'cors'
import CookieParser from 'cookies-parser'

dotenv.config()

const app = express()


const port = process.env.PORT || 8000




app.use(express.json())
app.use(cors())
// app.use(CookieParser())

app.listen(() => {
    console.log("App running", port);
})