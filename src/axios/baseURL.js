const getBaseUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://movability.cleverapps.io";
  }
  return "http://localhost:5000";
};

export default getBaseUrl();
