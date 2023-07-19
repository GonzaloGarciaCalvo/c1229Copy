"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_controller_1 = require("../controllers/payment.controller");
const router = (0, express_1.Router)();
router.post('payment', payment_controller_1.createPayment);
// router.post()
// router.post()
exports.default = router;
//# sourceMappingURL=payment.js.map