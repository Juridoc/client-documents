"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submit = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Workflows = require("@juridoc/client-workflows");
const Signatures = require("@juridoc/client-signatures");
/**
 * Document submit request.
 */
let Submit = class Submit extends Class.Null {
};
__decorate([
    RestDB.Schema.Array(String),
    Class.Public()
], Submit.prototype, "recipientsIdList", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Submit.prototype, "content", void 0);
__decorate([
    RestDB.Schema.Object(Object),
    Class.Public()
], Submit.prototype, "data", void 0);
__decorate([
    RestDB.Schema.Object(() => Workflows.Internals.Stack),
    Class.Public()
], Submit.prototype, "approvers", void 0);
__decorate([
    RestDB.Schema.Object(() => Workflows.Internals.Stack),
    Class.Public()
], Submit.prototype, "negotiators", void 0);
__decorate([
    RestDB.Schema.Object(() => Signatures.Internals.Stack),
    Class.Public()
], Submit.prototype, "signers", void 0);
Submit = __decorate([
    RestDB.Schema.Entity('documents/{id}/submit'),
    Class.Describe()
], Submit);
exports.Submit = Submit;
//# sourceMappingURL=submit.js.map