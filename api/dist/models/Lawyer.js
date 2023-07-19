"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LawyerSchema = new mongoose_1.Schema({
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
    license: {
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
        default: 'Lawyer'
    },
    isAuthorized: {
        type: Boolean,
        default: false
    },
    subscription: {
        type: mongoose_1.Schema.Types.Mixed,
        default: {
            name: 'free',
            price: 0,
            meets: 3,
            jurisdictions: 1,
            specialities: 2,
            visibility: 10
        }
    },
    specialities: [{
            type: String,
            required: true
        }]
}, {
    timestamps: true,
    versionKey: false
});
exports.default = (0, mongoose_1.model)('Lawyer', LawyerSchema);
//# sourceMappingURL=Lawyer.js.map