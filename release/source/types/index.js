"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportedFolderId = exports.DeletedFolderId = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Core = require("@juridoc/client-core");
exports.Stage = require("./stage");
var attachment_1 = require("./attachment");
Object.defineProperty(exports, "Attachment", { enumerable: true, get: function () { return attachment_1.Attachment; } });
var expiration_1 = require("./expiration");
Object.defineProperty(exports, "Expiration", { enumerable: true, get: function () { return expiration_1.Expiration; } });
var lifecycle_1 = require("./lifecycle");
Object.defineProperty(exports, "Lifecycle", { enumerable: true, get: function () { return lifecycle_1.Lifecycle; } });
var status_1 = require("./status");
Object.defineProperty(exports, "Status", { enumerable: true, get: function () { return status_1.Status; } });
/**
 * Deleted folder Id.
 */
exports.DeletedFolderId = Core.Types.AnonymousId;
/**
 * Imported folder Id.
 */
exports.ImportedFolderId = 'ffffffffffffffffffffffff';
//# sourceMappingURL=index.js.map