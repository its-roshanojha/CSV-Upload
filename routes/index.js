/****************IMPORTING PACKAGE*******************************/
const express = require("express");//it will just fetch the existing instance, will not create new instance

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLERS*****************************/
const homeController = require("../controller/home_controller");

router.get("/", homeController.Index);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;