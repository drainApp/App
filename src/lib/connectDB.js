const mongoose = require("mongoose");

const MONGO_URL = process.env.DB_HOST || "mongodb://localhost:27017/test";
const env = process.env.NODE_ENV || "development";

let mongoURL = MONGO_URL;
if (env !== "production") mongoURL += `_${env}`;
if (env === "development") {
	mongoose.set("debug", true);
}
module.exports = () =>
	mongoose.connect(mongoURL, {
		useFindAndModify: false,
		useUnifiedTopology: true,
		useNewUrlParser: true,
	});
