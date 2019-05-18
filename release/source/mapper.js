"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const Core = require("@juridoc/client-core");
const Requests = require("./requests");
const entity_1 = require("./entity");
/**
 * Documents mapper class.
 */
let Mapper = class Mapper extends Class.Null {
    constructor() {
        super(...arguments);
        /**
         * Mapper instance.
         */
        this.mapper = new RestDB.Mapper(this.client, entity_1.Entity);
    }
    /**
     * Get the error entity from the last operation.
     */
    get error() {
        return this.client.error;
    }
    /**
     * Create a new document based on the specified creation request.
     * @param request Document creation request.
     * @returns Returns a promise to get the document Id.
     * @throws Throws an error when the document wasn't created.
     */
    async create(request) {
        return (await this.mapper.insertEx(Requests.Create, request));
    }
    /**
     * Loads the document that corresponds to the specified document Id.
     * @param id Document Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the document entity.
     * @throws Throws an error when the document wasn't found.
     */
    async load(id, fields) {
        return (await this.mapper.findById(id, fields));
    }
    /**
     * Update the document that corresponds to the specified document Id based on the given update request.
     * @param id Document Id.
     * @param request Document update request.
     * @returns Returns a promise to get true when the document was updated, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    async modify(id, request) {
        return (await this.mapper.updateByIdEx(Requests.Update, id, request));
    }
    /**
     * Clone the document that corresponds to the specified document Id based on the given clone request.
     * @param id Document Id.
     * @param request Document clone request.
     * @returns Returns a promise to get true when the document was cloned, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    async clone(id, request) {
        return (await this.mapper.updateByIdEx(Requests.Clone, id, request));
    }
    /**
     * Change the document that corresponds to the specified document Id based on the given change request.
     * @param id Document Id.
     * @param request Document change request.
     * @returns Returns a promise to get true when the document was changed, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    async change(id, request) {
        return (await this.mapper.updateByIdEx(Requests.Change, id, request));
    }
    /**
     * Submit the document that corresponds to the specified document Id based on the given submission request.
     * @param id Document Id.
     * @param request Document submission request.
     * @returns Returns a promise to get true when the document was submitted, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    async submit(id, request) {
        return (await this.mapper.updateByIdEx(Requests.Submit, id, request));
    }
    /**
     * Finish the workflow stage in the document that corresponds to the specified document Id based on the given change request.
     * @param id Document Id.
     * @param request Document finish request.
     * @returns Returns a promise to get true when the operation was successful, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    async finish(id, request) {
        return (await this.mapper.updateByIdEx(Requests.Finish, id, request));
    }
    /**
     * Send the document that corresponds to the specified Id to be signed according to the given sign request.
     * @param id Document Id.
     * @param request Document sign request.
     * @returns Returns a promise to get true when the document was sent to be signed, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    async sign(id, request) {
        return (await this.mapper.updateByIdEx(Requests.Sign, id, request));
    }
    /**
     * Send the document that corresponds to the specified Id to all recipients according to the given send request.
     * @param id Document Id.
     * @param request Document send request.
     * @returns Returns a promise to get true when the document was sent, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    async send(id, request) {
        return (await this.mapper.updateByIdEx(Requests.Send, id, request));
    }
    /**
     * List all documents that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the document list or undefined when an error occurs.
     */
    async list(query, fields) {
        return await this.mapper.find(query, fields);
    }
    /**
     * Count all documents that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of documents or undefined when an error occurs.
     */
    async count(query) {
        return await this.mapper.count(query);
    }
    /**
     * Delete the document that corresponds to the specified document Id.
     * @param id Document Id.
     * @returns Returns a promise to get true when the document was deleted, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    async remove(id) {
        return (await this.mapper.deleteById(id));
    }
};
__decorate([
    Injection.Inject(Core.Client),
    Class.Private()
], Mapper.prototype, "client", void 0);
__decorate([
    Class.Private()
], Mapper.prototype, "mapper", void 0);
__decorate([
    Class.Public()
], Mapper.prototype, "error", null);
__decorate([
    Class.Public()
], Mapper.prototype, "create", null);
__decorate([
    Class.Public()
], Mapper.prototype, "load", null);
__decorate([
    Class.Public()
], Mapper.prototype, "modify", null);
__decorate([
    Class.Public()
], Mapper.prototype, "clone", null);
__decorate([
    Class.Public()
], Mapper.prototype, "change", null);
__decorate([
    Class.Public()
], Mapper.prototype, "submit", null);
__decorate([
    Class.Public()
], Mapper.prototype, "finish", null);
__decorate([
    Class.Public()
], Mapper.prototype, "sign", null);
__decorate([
    Class.Public()
], Mapper.prototype, "send", null);
__decorate([
    Class.Public()
], Mapper.prototype, "list", null);
__decorate([
    Class.Public()
], Mapper.prototype, "count", null);
__decorate([
    Class.Public()
], Mapper.prototype, "remove", null);
Mapper = __decorate([
    Injection.Describe({ singleton: true, name: 'documents' }),
    Class.Describe()
], Mapper);
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map