const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
  let temperatuere = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperatuere = temperatuere.replace("{%tempmin%}", orgVal.main.temp_min);
  temperatuere = temperatuere.replace("{%tempmax%}", orgVal.main.temp_max);
  temperatuere = temperatuere.replace("{%tempmin%}", orgVal.name);
  temperatuere = temperatuere.replace("{%country%}", orgVal.sys.country);
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=aa6e2351651cd135ba04a99f61ff77f3"
    )
      .on("data", (chunk) => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        //console.log(objData);
        const realTime = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        res.write(realTime);
      })

      .on("err", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  }
});

server.listen(8000, "127.0.0.1");
