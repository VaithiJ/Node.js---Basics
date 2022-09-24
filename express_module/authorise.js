const authorise = (req, res, next) => {
  const { user } = req.query;

  if (user === "yt") {
    req.user = { name: "yt", id: "4" };
    next();
  } else {
    res.status(404).send("Unauthorised");
  }
};

module.exports = authorise;
