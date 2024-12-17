var todos = ["TODO"]

const express = require("express");
const app = express()

app.use(express.text())

app.get("/", function (req, res) {
    res.send(todos)
});

app.post("/", function(req,res) {
    todos.push(req.body)
    res.send(req.body + " is added")
})

app.delete("/", function(req, res){
    let isFound = 0
    for(let i = 0; i < todos.length; i++){
        if(todos[i] == req.body)
        {
            todos.splice(i,1)
            isFound = 1
        }
    }
    if(isFound){
        res.send(req.body + " is deleted")
    }
    else{
        res.send(req.body + " is not found")
    }
})

app.listen(3000);