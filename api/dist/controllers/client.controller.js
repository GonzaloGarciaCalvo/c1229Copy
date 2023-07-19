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
exports.updateClientImage = exports.updateClientData = exports.getClientById = exports.getClients = void 0;
const cloudinary_1 = require("../libs/cloudinary");
const fs_extra_1 = __importDefault(require("fs-extra"));
const Client_1 = __importDefault(require("../models/Client"));
const Lawyer_1 = __importDefault(require("../models/Lawyer"));
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.query;
    //Regex
    const query = {
        $or: [
            { firstname: { $regex: name === null || name === void 0 ? void 0 : name.toString(), $options: 'i' } },
            { lastname: { $regex: name === null || name === void 0 ? void 0 : name.toString(), $options: 'i' } },
        ]
    };
    try {
        //Fetch clients
        const result = yield Client_1.default.find(name ? query : {});
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
exports.getClients = getClients;
const getClientById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        //Fetch client
        const client = yield Client_1.default.findById(_id);
        const lawyer = yield Lawyer_1.default.findById(_id);
        return res.status(200).json(client || lawyer);
    }
    catch (error) {
    }
});
exports.getClientById = getClientById;
const updateClientData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const updatedClient = yield Client_1.default.findByIdAndUpdate(_id, req.body);
        res.status(200).json(updatedClient);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
});
exports.updateClientData = updateClientData;
const updateClientImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { _id } = req.params;
    const { imageId } = req.body;
    try {
        if (imageId) {
            console.log(imageId);
            yield (0, cloudinary_1.deleteImage)(imageId.toString());
            const client = yield Client_1.default.findByIdAndUpdate(_id, { image: {} }, { new: true });
            return res.status(200).json(client);
        }
        const file = (_a = req.files) === null || _a === void 0 ? void 0 : _a.image;
        let image;
        //upload image
        if ((_b = req.files) === null || _b === void 0 ? void 0 : _b.image) {
            const uploadedFile = Array.isArray(file)
                ? file[0]
                : file;
            const tempFilePath = uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.tempFilePath;
            const { public_id, secure_url } = yield (0, cloudinary_1.uploadImage)(tempFilePath);
            image = {
                public_id,
                url: secure_url
            };
            //delete file
            yield fs_extra_1.default.remove(tempFilePath);
            //update client
            const client = yield Client_1.default.findByIdAndUpdate(_id, { image }, { new: true });
            res.status(200).json(client);
        }
        else {
            throw new Error('Nonexistent image');
        }
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.updateClientImage = updateClientImage;
// export const updateClientStatus = async (req: Request,res: Response) => {
// 	const { _id } = req.params
// 	const { status } = req.body
// 	try {
// 		const updatedClient = await Client.findByIdAndUpdate(_id,{ status })
// 		res.status(200).json(updatedClient)
// 	} catch (error: any) {
// 		console.log(error);
// 		res.status(400).json(error.message)
// 	}
// }
//# sourceMappingURL=client.controller.js.map