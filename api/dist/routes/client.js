"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = require("../controllers/client.controller");
const router = (0, express_1.Router)();
router.get('/', client_controller_1.getClients);
router.get('/:_id', client_controller_1.getClientById);
router.put('/:_id', client_controller_1.updateClientData);
router.put('/image/:_id', client_controller_1.updateClientImage);
// router.get('/profile',profile)
exports.default = router;
//# sourceMappingURL=client.js.map