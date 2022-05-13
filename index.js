const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

const priorityLabelData = [
  { value: 1, label: 'Urgent' },
  { value: 2, label: 'Regular' },
  { value: 3, label: 'Trivial' },
]
app.use(cors())
app.get('/prioritylabeldata', (req, res) => {
  res.send(priorityLabelData)
})

app.listen(port, () => {
  console.log(`Job List API listen on ${port}`)
})
