"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const meet_controller_1 = require("../controllers/meet.controller");
const router = (0, express_1.Router)();
router.get('/:userId', meet_controller_1.getUserMeets);
router.get('/');
router.post('/:clientId', meet_controller_1.createMeet);
router.put('/');
router.delete('/');
exports.default = router;
//# sourceMappingURL=meet.js.map