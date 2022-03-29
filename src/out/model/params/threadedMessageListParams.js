"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadedMessageListParamsProperties = void 0;
const types_1 = require("../message/types");
const validator_1 = require("../../utils/validator");
class ThreadedMessageListParamsProperties {
    constructor() {
        this.prevResultSize = 0;
        this.nextResultSize = 0;
        this.isInclusive = false;
        this.reverse = false;
        this.messageType = types_1.MessageTypeFilter.ALL;
        this.customTypes = [];
        this.replyType = types_1.ReplyType.NONE;
        this.senderUserIds = [];
        this.includeReactions = false;
        this.includeReplies = false;
        this.includeMetaArray = false;
        this.includeParentMessageInfo = false;
        this.includeThreadInfo = false;
    }
}
exports.ThreadedMessageListParamsProperties = ThreadedMessageListParamsProperties;
class ThreadedMessageListParams extends ThreadedMessageListParamsProperties {
    constructor(props) {
        super();
        if (props) {
            for (const key in props) {
                if (this.hasOwnProperty(key)) {
                    this[key] = props[key];
                }
            }
        }
    }
    validate() {
        return ((0, validator_1.isTypeOf)('number', this.prevResultSize) &&
            (0, validator_1.isTypeOf)('number', this.nextResultSize) &&
            (0, validator_1.isTypeOf)('boolean', this.isInclusive) &&
            (0, validator_1.isTypeOf)('boolean', this.reverse) &&
            (0, validator_1.isTypeOf)('string', this.messageType) &&
            (0, validator_1.isEnumOf)(types_1.MessageTypeFilter, this.messageType) &&
            ((0, validator_1.isArrayOf)('string', this.customTypes) || this.customTypes === null) &&
            (0, validator_1.isEnumOf)(types_1.ReplyType, this.replyType) &&
            ((0, validator_1.isArrayOf)('string', this.senderUserIds) || this.senderUserIds === null) &&
            (0, validator_1.isTypeOf)('boolean', this.includeMetaArray) &&
            (0, validator_1.isTypeOf)('boolean', this.includeReactions) &&
            (0, validator_1.isTypeOf)('boolean', this.includeParentMessageInfo));
    }
}
exports.default = ThreadedMessageListParams;
//# sourceMappingURL=threadedMessageListParams.js.map