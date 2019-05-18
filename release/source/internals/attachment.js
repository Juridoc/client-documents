"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Files = require("@juridoc/client-files");
const Types = require("../types");
/**
 * Document attachment, internal entity class.
 */
let Attachment = class Attachment extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Attachment)),
    Class.Public()
], Attachment.prototype, "type", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Attachment.prototype, "fileId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => Files.Entity, ['id', 'name', 'mime']),
    Class.Public()
], Attachment.prototype, "file", void 0);
Attachment = __decorate([
    RestDB.Schema.Entity('documents/attachment'),
    Class.Describe()
], Attachment);
exports.Attachment = Attachment;
//# sourceMappingURL=attachment.js.map