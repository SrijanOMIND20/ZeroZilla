const express = require('express');
const router = express.Router();
const { createAgency, updateClient, getMaxBill, Signup, SignIn } = require('../controllers/crudOps');

router.post('/Register', Signup);
router.post('/create-agency-and-client',createAgency);
router.patch('/update-client',updateClient);
router.get('/get-max-bill',getMaxBill);
router.get('/Login', SignIn);

module.exports = router;