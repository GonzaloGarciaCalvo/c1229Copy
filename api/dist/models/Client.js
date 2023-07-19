"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ClientSchema = new mongoose_1.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    image: {
        url: String,
        public_id: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    meets: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Meet'
        }],
    isActive: {
        type: Boolean,
        default: true
    },
    accountType: {
        type: String,
        default: 'Client'
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.default = (0, mongoose_1.model)('Client', ClientSchema);
//# sourceMappingURL=Client.js.map