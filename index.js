const server = require("./api/server");

const port = process.env.PORT || 4000;

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ message: "There seems to be a problem" })
});

server.listen(port, () => {
  console.log(`\nServer running on http://localhost:${port}\n`)
})