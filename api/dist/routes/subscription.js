"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subscription_controller_1 = require("../controllers/subscription.controller");
const router = (0, express_1.Router)();
router.get('/', subscription_controller_1.getSubscriptions);
router.post('/', subscription_controller_1.createSubscription);
router.put('/:_id', subscription_controller_1.updateSubscription);
router.delete('/:_id', subscription_controller_1.deleteSubscription);
exports.default = router;
//# sourceMappingURL=subscription.js.map