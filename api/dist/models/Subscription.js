"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SubscriptionSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    meets: {
        type: Number,
        required: true
    },
    jurisdictions: {
        type: Number,
        required: true
    },
    specialities: {
        type: Number,
        required: true
    },
    visibility: {
        type: Number,
        required: true
    }
}, {
    timestamps: false,
    versionKey: false
});
exports.default = (0, mongoose_1.model)('Subscription', SubscriptionSchema);
//# sourceMappingURL=Subscription.js.map