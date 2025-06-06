const exxpress = require('express');

const router = exxpress.Router();


router.get("/", require("../controllers/clientController").getClients);
router.post("/", require("../controllers/clientController").createClient);

module.exports = router;


