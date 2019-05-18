"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sign = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Signatures = require("@juridoc/client-signatures");
/**
 * Document sign request.
 */
let Sign = class Sign extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Sign.prototype, "mime", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Sign.prototype, "name", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Binary(),
    Class.Public()
], Sign.prototype, "data", void 0);
__decorate([
    RestDB.Schema.Object(() => Signatures.Internals.Stack),
    Class.Public()
], Sign.prototype, "signers", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Sign.prototype, "message", void 0);
Sign = __decorate([
    RestDB.Schema.Entity('documents/{id}/sign'),
    Class.Describe()
], Sign);
exports.Sign = Sign;
//# sourceMappingURL=sign.js.map