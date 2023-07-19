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
exports.deleteSubscription = exports.updateSubscription = exports.createSubscription = exports.getSubscriptions = void 0;
const Subscription_1 = __importDefault(require("../models/Subscription"));
const getSubscriptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allSubscriptions = yield Subscription_1.default.find();
        return res.status(200).json(allSubscriptions);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
});
exports.getSubscriptions = getSubscriptions;
const createSubscription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newSubscription = new Subscription_1.default(req.body);
        yield newSubscription.save();
        return res.status(200).json(newSubscription);
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.createSubscription = createSubscription;
const updateSubscription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const updatedSubscription = yield Subscription_1.default.findByIdAndUpdate(_id, req.body, { new: true });
        return res.status(200).json(updatedSubscription);
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.updateSubscription = updateSubscription;
const deleteSubscription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        yield Subscription_1.default.findByIdAndDelete(_id);
        return res.status(200).json('Suscripción borrada correctamente');
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.deleteSubscription = deleteSubscription;
//# sourceMappingURL=subscription.controller.js.map