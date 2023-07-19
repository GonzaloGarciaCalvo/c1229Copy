"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MeetSchema = new mongoose_1.Schema({
    clientId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    lawyerId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        default: 'Pendiente'
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.default = (0, mongoose_1.model)('Meet', MeetSchema);
//# sourceMappingURL=Meet.js.map