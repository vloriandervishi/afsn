const router = require("express").Router();
const apiRoutes = require("./api");
//const userRoutes=require('./api/user-routes');

router.use("/api", apiRoutes);
//router.use('/',userRoutes);

router.use((req, res) => {
  res.status(404).send("<h1> This is the wrong page 404 error");
});

module.exports = router;
