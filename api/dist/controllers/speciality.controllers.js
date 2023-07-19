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
exports.deleteSpeciality = exports.updateSpeciality = exports.createSpeciality = exports.getSpecialities = void 0;
const Speciality_1 = __importDefault(require("../models/Speciality"));
const getSpecialities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allSpecialities = yield Speciality_1.default.find();
        return res.status(200).json(allSpecialities);
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.getSpecialities = getSpecialities;
const createSpeciality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const newSpeciality = new Speciality_1.default({ name });
        yield newSpeciality.save();
        return res.status(200).json(newSpeciality);
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.createSpeciality = createSpeciality;
const updateSpeciality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const { name } = req.body;
    try {
        const updatedSpeciality = yield Speciality_1.default.findByIdAndUpdate(_id, { name }, { new: true });
        return res.status(200).json(updatedSpeciality);
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.updateSpeciality = updateSpeciality;
const deleteSpeciality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        yield Speciality_1.default.findByIdAndDelete(_id);
        return res.status(200).json('Especialidad borrada correctamente');
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.deleteSpeciality = deleteSpeciality;
//# sourceMappingURL=speciality.controllers.js.map