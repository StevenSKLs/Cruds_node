const express = require("express")
const cors = require("cors")
const db = require("./utils/database")
const Todos = require("./models/todos.model")
const todosRouter = require("./routes/todos.routes")

Todos

const PORT = 8000

db.authenticate()
  .then(() => {
    console.log("Database Running")
  })
  .catch((error) => {
    console.log(error)
  })

db.sync()
  .then(() => {
    console.log("Synchronized Database")
  })
  .catch((error) => {
    console.log(error)
  });

const app = express()
app.use(cors())
app.use(express.json())
app.use(todosRouter)

app.get("/", (req, res) => {
  res.send("Welcome to the server")
})

app.listen(PORT, () => {
  console.log(`Port in ${PORT}`)
})