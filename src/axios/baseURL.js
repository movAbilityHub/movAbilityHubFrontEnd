// eslint-disable-next-line
const dotenvConfig = require("dotenv").config();

const build = process.env.NODE_ENV;

const getBaseUrl = () => {
  if (build === "build") {
    return "http://localhost:5000";
  }
  return "https://movability.cleverapps.io";
};

export default getBaseUrl();
