"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lifecycle = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("../types");
/**
 * Document lifecycle, internal entity class.
 */
let Lifecycle = class Lifecycle extends Class.Null {
};
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Lifecycle.prototype, "startAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Lifecycle.prototype, "finishAt", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Lifecycle)),
    Class.Public()
], Lifecycle.prototype, "status", void 0);
__decorate([
    RestDB.Schema.Number(),
    Class.Public()
], Lifecycle.prototype, "noticeIn", void 0);
__decorate([
    RestDB.Schema.Number(),
    Class.Public()
], Lifecycle.prototype, "prolongationFor", void 0);
Lifecycle = __decorate([
    RestDB.Schema.Entity('documents/lifecycle'),
    Class.Describe()
], Lifecycle);
exports.Lifecycle = Lifecycle;
//# sourceMappingURL=lifecycle.js.map