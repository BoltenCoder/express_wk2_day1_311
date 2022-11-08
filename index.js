
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state') //<== This grabs the listed variables in the {} from state.js as they are already defined.
// This part ^ uses {} so it can list multiple variables, separated by comma

/* BEGIN - create routes here */
app.get('/users', (req, res) => {
  res.send(users)
})

app.get(`/users/:_id`, (req, res) => {
  req_url = `${req.url}`.split("/")
  req_id = req_url[2] - 1
  res.send(users[req_id])
})

app.post(`/users`, (req, res) => {
  users.push({
    "_id": 6,
    "name": "Funnyman Dan",
    "occupation": "Comedy Guy",
    "avatar": "https://thumbs.dreamstime.com/b/funny-face-12963753.jpg"
  })
  res.send(users)
})

app.put(`/users/:_id`, (req, res) => {
  res.send(req.params)
})

app.delete(`/users/:_id`, (req, res) => {
  // console.log(req.url)
  req_url = `${req.url}`.split("/")
  // console.log("requested id is: " + req_url[2])
  // res.send(users[req_url[2]])
  let newUserArray = users.filter(user => user._id != req_url[2])
  console.log("SUCCESS")
  res.send(newUserArray)
})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))