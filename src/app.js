const express = require("express"); //load express with the use of requireJs
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
var ip = require("ip");

console.dir (ip.address());
console.log(ip.address())

//::1은 IpV6에서 로컬 호스트

//app.use('/css',express.static(__dirname + '/css'));
//app.use('/js',express.static(__dirname + '/js'));
//app.use('/assets',express.static(__dirname + '/assets'));
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

app.get("/", function (req, res, next) {
	//'192.168.35.193'
	//var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
	//console.log(ip); 
	next();
	//res.sendFile(__dirname+'/public/index.html');
});

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(express.json({ limit: "30mb" }));
app.set("view engine", "html");


const dotenv = require("dotenv");
//const connectDB = require("./lib/connectDB");

dotenv.config();

const port = Number(process.env.PORT) || 80;

//connectDB();

http.listen(port, () => console.log(`http://localhost:${port}`)).on("error", (err) => console.error(err));

