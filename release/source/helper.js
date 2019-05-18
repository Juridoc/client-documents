"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const Types = require("./types");
/**
 * Documents helper class.
 */
let Helper = class Helper extends Class.Null {
    /**
     * Get the current stage from the specified document.
     * @param document Document entity.
     * @returns Returns the current stage or undefined when the document has no stages.
     */
    static getCurrentStage(document) {
        for (const workflow of document.stages) {
            if (workflow.status === Types.Stage.Status.Pending) {
                return workflow;
            }
        }
        return document.stages[document.stages.length - 1];
    }
};
__decorate([
    Class.Public()
], Helper, "getCurrentStage", null);
Helper = __decorate([
    Class.Describe()
], Helper);
exports.Helper = Helper;
//# sourceMappingURL=helper.js.map