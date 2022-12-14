const log = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getDay();
  console.log(method, url, time);
  next();
};

module.exports = log;
