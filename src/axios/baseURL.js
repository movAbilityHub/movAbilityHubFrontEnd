const getBaseUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "http://abc.xyz";
  }
  return "http://localhost:5000";
};

export default getBaseUrl();
