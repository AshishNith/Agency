const exxpress = require('express');
const {getClients , createClient} = require("../controllers/clientController");
const router = exxpress.Router();

router.get("/", getClients);
router.post("/", createClient);

module.exports = router;


