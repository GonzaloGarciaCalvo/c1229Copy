"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const speciality_controllers_1 = require("../controllers/speciality.controllers");
const router = (0, express_1.Router)();
router.get('/', speciality_controllers_1.getSpecialities);
router.post('/', speciality_controllers_1.createSpeciality);
router.put('/', speciality_controllers_1.updateSpeciality);
router.delete('/', speciality_controllers_1.deleteSpeciality);
exports.default = router;
//# sourceMappingURL=speciality.js.map