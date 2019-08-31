// eslint-disable-next-line
const dotenvConfig = require("dotenv").config();

const build = process.env.NODE_ENV;
console.log("build = " + process.env.NODE_ENV);

const getBaseUrl = () => {
  if (build === "development") {
    return "http://localhost:5000";
  }
  return "https://movability.cleverapps.io";
};

export default getBaseUrl();
