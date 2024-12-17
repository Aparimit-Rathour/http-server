var todos = [
    {
        "id":1,
        "title":"zero todo"
    }
]

const express = require("express");
const app = express()
app.use(express.json())

app.get("/", function (req, res) {
    res.json(todos)
});

app.post("/", function(req,res) {
    var newTodo = {}
    newTodo.id = todos.length + 1
    newTodo.title = req.body.title
    todos.push(newTodo)
    
    res.send("Todo is added")
})

app.delete("/:id", function(req, res) {
    const idToDelete = req.params.id
    todos.splice(idToDelete-1,1)

    res.send("Todo is deleted")   
})

app.listen(3000)