//Basic Express Feature
import express from "express"
import cors from "cors"


//App Config
const app=express()
const port=4000;

//middleware.  [Frontend->Backend] //In json format...
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
  res.send("API Working")
}) //Http method Delete/Update/Post

app.listen(port,()=>{
  console.log(`Server Started on http://localhost:${port}`)
})