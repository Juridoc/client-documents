"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Folders = require("@juridoc/client-folders");
const Categories = require("@juridoc/client-categories");
const Templates = require("@juridoc/client-templates");
const Workflows = require("@juridoc/client-workflows");
const Signatures = require("@juridoc/client-signatures");
const Expirations = require("@juridoc/client-expirations");
const Lifecycles = require("@juridoc/client-lifecycles");
const Financials = require("@juridoc/client-financials");
const Profiles = require("@juridoc/client-profiles");
const Types = require("./types");
const Internals = require("./internals");
/**
 * Document entity class.
 */
let Entity = class Entity extends Class.Null {
    /**
     * Get the current document progress. (Between 1.0 and 0.0)
     */
    get progress() {
        let fields = 0;
        let filled = 0;
        for (const id in this.form.fieldMap) {
            if (id in this.data) {
                filled++;
            }
            fields++;
        }
        return filled / fields;
    }
    /**
     * Determines whether or not this entity is in the trash can.
     */
    get isDeleted() {
        var _a, _b;
        return ((_b = (_a = this.folder) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : this.folderId) === Types.DeletedFolderId || this.deletedAt instanceof Date;
    }
    /**
     * Determines whether or not this entity is imported.
     */
    get isImported() {
        var _a, _b;
        return ((_b = (_a = this.folder) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : this.folderId) === Types.DeletedFolderId || this.importedAt instanceof Date;
    }
    /**
     * Test if the specified profile is the entity ownership.
     * @param profile Profile entity.
     * @returns Returns true when the given profile is the ownership, false otherwise.
     */
    isOwnership(profile) {
        var _a, _b;
        return ((_b = (_a = this.profile) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : this.profileId) === profile.id;
    }
};
__decorate([
    RestDB.Schema.Primary(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "id", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "accountId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "profileId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => Profiles.Entity, [
        'id',
        'contact.id',
        'contact.pictureId',
        'contact.name',
        'contact.personal.firstName',
        'contact.personal.lastName',
        'contact.professional.denomination'
    ]),
    Class.Public()
], Entity.prototype, "profile", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "templateId", void 0);
__decorate([
    RestDB.Schema.Object(() => Signatures.Entity, ['id', 'signers', 'status', 'provider']),
    Class.Public()
], Entity.prototype, "signature", void 0);
__decorate([
    RestDB.Schema.Object(() => Expirations.Entity, ['id', 'expireAt', 'reminderAt', 'reminderEvery', 'reminderBefore']),
    Class.Public()
], Entity.prototype, "expiration", void 0);
__decorate([
    RestDB.Schema.Object(() => Lifecycles.Entity, ['id', 'startAt', 'finishAt', 'noticeAt', 'noticeIn', 'prolongationFor']),
    Class.Public()
], Entity.prototype, "lifecycle", void 0);
__decorate([
    RestDB.Schema.Object(() => Financials.Entity, ['id', 'type']),
    Class.Public()
], Entity.prototype, "financials", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "categoryId", void 0);
__decorate([
    RestDB.Schema.Object(() => Categories.Entity, ['id', 'name', 'translations']),
    Class.Public()
], Entity.prototype, "category", void 0);
__decorate([
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "folderId", void 0);
__decorate([
    RestDB.Schema.Object(() => Folders.Entity, ['id', 'name']),
    Class.Public()
], Entity.prototype, "folder", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Map(String),
    Class.Public()
], Entity.prototype, "entityIdMap", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(String),
    Class.Public()
], Entity.prototype, "grantsIdList", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(String),
    Class.Public()
], Entity.prototype, "recipientsIdList", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "createdAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "updatedAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "submittedAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "deletedAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "importedAt", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Status)),
    Class.Public()
], Entity.prototype, "status", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "languageOption", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "name", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "content", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => Templates.Internals.Form),
    Class.Public()
], Entity.prototype, "form", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Object),
    Class.Public()
], Entity.prototype, "data", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => Workflows.Internals.Stack),
    Class.Public()
], Entity.prototype, "approvers", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => Workflows.Internals.Stack),
    Class.Public()
], Entity.prototype, "negotiators", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => Signatures.Internals.Stack),
    Class.Public()
], Entity.prototype, "signers", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(Internals.Attachment),
    Class.Public()
], Entity.prototype, "attachments", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(Internals.Stage),
    Class.Public()
], Entity.prototype, "stages", void 0);
__decorate([
    Class.Public()
], Entity.prototype, "progress", null);
__decorate([
    Class.Public()
], Entity.prototype, "isDeleted", null);
__decorate([
    Class.Public()
], Entity.prototype, "isImported", null);
__decorate([
    Class.Public()
], Entity.prototype, "isOwnership", null);
Entity = __decorate([
    RestDB.Schema.Entity('documents'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map