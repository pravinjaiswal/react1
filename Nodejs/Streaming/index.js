const fs = require("fs");
const hp = require("http");

const server = hp.createServer();

server.on("request", (req, res) => {
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) return console.error(err);
  //     res.end(data.toString());
  //   });

  //   const strm = fs.createReadStream("input.txt");
  //   strm.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });
  //   strm.on("end", () => {
  //     res.end();
  //   });
  //   strm.on("error", (err) => {
  //     console.log(err);
  //     res.end("file not found");
  //   });

  const strm = fs.createReadStream("input.txt");
  strm.pipe(res);
});

server.listen(8000, "127.0.0.1");
