exports.login = (req, res, next) => {
  res.setHeader("Set-Cookie","loggedIn=true").status(200).json({
    success: true,
    msg: "LoggedIn",
  });
};

