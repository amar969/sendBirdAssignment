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
Object.defineProperty(exports, "__esModule", { value: true });
const vault_1 = require("../vault");
const error_1 = require("../error");
const types_1 = require("../model/channel/types");
const channelDataListQuery_1 = require("./channelDataListQuery");
const loadParticipantListCommand_1 = require("../comm/command/channel/open/loadParticipantListCommand");
class ParticipantListQuery extends channelDataListQuery_1.default {
    constructor(iid, channelUrl, params) {
        super(iid, channelUrl, types_1.ChannelType.OPEN, params);
    }
    _validate() {
        return (super._validate());
    }
    next() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._validate()) {
                if (!this._isLoading) {
                    if (this._hasNext) {
                        this._isLoading = true;
                        const { requestQueue } = vault_1.default.of(this._iid);
                        const request = new loadParticipantListCommand_1.LoadParticipantListRequestCommand(Object.assign(Object.assign({}, this), { token: this._token }));
                        const response = yield requestQueue.send(request);
                        const { participants, token } = response.as(loadParticipantListCommand_1.LoadParticipantListResponseCommand);
                        this._token = token;
                        this._hasNext = !!token;
                        this._isLoading = false;
                        return participants;
                    }
                    return [];
                }
                else {
                    throw error_1.default.queryInProgress;
                }
            }
            else {
                throw error_1.default.invalidParameters;
            }
        });
    }
}
exports.default = ParticipantListQuery;
//# sourceMappingURL=participantListQuery.js.map