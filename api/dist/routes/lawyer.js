"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lawyer_controller_1 = require("../controllers/lawyer.controller");
const router = (0, express_1.Router)();
router.get('/', lawyer_controller_1.getLawyers);
router.get('/:_id', lawyer_controller_1.getLawyerById);
router.put('/:_id', lawyer_controller_1.updateLawyerData);
router.put('/image/:_id', lawyer_controller_1.updateLawyerImage);
// router.get('/profile',profile)
exports.default = router;
//# sourceMappingURL=lawyer.js.map