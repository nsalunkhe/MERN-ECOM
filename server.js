const app= require("./app")
const dotenv =require("dotenv")
const connectDatabase=require("./db/Database")

//handling uncaught exceptions

process.on("uncaughtException",(err)=>{
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server for handling uncaught exceptions`)
})


dotenv.config({
    path:"config/.env"
})
//connect database
connectDatabase()
const server=app.listen(process.env.port,()=>{
  console.log(`server is working on http://localhost:${process.env.port}`)  
})

//Unhandled Promise rejection

process.on("unhandledRejection",(err)=>{
  console.log(`Shutting down server for ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise rejection`)
  server.close(()=>{
    process.exit(1);
  })
})

