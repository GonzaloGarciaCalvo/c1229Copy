"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SpecialitySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: false,
    versionKey: false
});
exports.default = (0, mongoose_1.model)('Speciality', SpecialitySchema);
//# sourceMappingURL=Speciality.js.map