import express from 'express'
const app = express()
const port = 4242
app.use(express.json());
app.use(express.urlencoded());
app.get('/', (req, res) => {
  res.send('Hello from Server🚀!')
});

let employees = [
    {
      id: 0,
      name: "Mark Hill",
      designation: "Chief Executive Officer",
      team: "core",
      manager: "root"
    }, {
      id: 1,
      name: "Joe Linux",
      designation: "CTO",
      team: "core",
      manager: 0
    }, {
      id: 2,
      name: "Linda May",
      designation: "CBO",
      team: "core",
      manager: 0
    }, {
      id: 3,
      name: "John Green",
      designation: "CAO",
      team: "core",
      manager: 0
    }, {
      id: 4,
      name: "Ron Blomquist",
      designation: "CISO",
      team: "Tech",
      manager: 1
    }, {
      id: 5,
      name: "Michael Rubin",
      designation: "CIO",
      team: "Tech",
      manager: 1
    }, {
      id: 6,
      name: "Alice Lopez",
      designation: "CCO",
      team: "Business",
      manager: 2
    }, {
      id: 7,
      name: "Mary Johnson",
      designation: "CBO",
      team: "Business",
      manager: 2
    }, {
      id: 8,
      name: "Kirk Douglas",
      designation: "CBDO",
      team: "Business",
      manager: 2
    }, {
      id: 9,
      name: "Erica Reel",
      designation: "CCO",
      team: "Accounts",
      manager: 3
    }
  ]


  app.post('/employees', (req, res) => {
    try {
      let response
      if(req.body.hasOwnProperty("id") && req.body.team != "core"){
        employees[req.body.id].manager = req.body.manager
        employees[req.body.id].team = req.body.team
        response = employees
      }else{
        response = "missing id or invalid team change"
      }
      
      res.send({
        status: true,
        data: response
      })
    } catch (error) {
      res.send({
        status: false,
        error: error
      })
    }
  });

app.get('/employees', (req, res) => {
  try {
    let response = employees
    res.send({
      status: true,
      data: response
    })
  } catch (error) {
    res.send({
      status: false,
      error: error
    })
  }
});

// app.put('/', (req, res) => {
//   res.send('Hello from Server🚀!')
// });

// app.delete('/', (req, res) => {
//   res.send('Hello from Server🚀!')
// });

app.listen(port, () => {
  console.log(`node server listening on port ${port} 🚀`)
});