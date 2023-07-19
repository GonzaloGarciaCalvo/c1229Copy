"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMeet = exports.getUserMeets = void 0;
const Meet_1 = __importDefault(require("../models/Meet"));
const Client_1 = __importDefault(require("../models/Client"));
const Lawyer_1 = __importDefault(require("../models/Lawyer"));
const getUserMeets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const { isClient } = req.query;
    try {
        const userMeets = isClient ? yield Client_1.default.findById(userId).populate('meets') : yield Lawyer_1.default.findById(userId).populate('meets');
        return res.status(200).json(userMeets === null || userMeets === void 0 ? void 0 : userMeets.meets);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
});
exports.getUserMeets = getUserMeets;
const createMeet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { clientId } = req.params;
    const { lawyerId, date } = req.body;
    try {
        //new meet
        const newMeet = new Meet_1.default({ clientId, lawyerId, date });
        //find users
        const client = yield Client_1.default.findById(clientId);
        const lawyer = yield Lawyer_1.default.findById(lawyerId);
        //save meet
        if (client && lawyer) {
            newMeet.save();
            client === null || client === void 0 ? void 0 : client.meets.push(newMeet._id);
            lawyer === null || lawyer === void 0 ? void 0 : lawyer.meets.push(newMeet._id);
            client.save();
            lawyer.save();
        }
        else {
            throw new Error('Nonexistent user');
        }
        return res.status(201).json(newMeet);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
});
exports.createMeet = createMeet;
//# sourceMappingURL=meet.controller.js.map