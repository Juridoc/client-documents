/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Documents mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Create a new document based on the specified creation request.
     * @param request Document creation request.
     * @returns Returns a promise to get the document Id.
     * @throws Throws an error when the document wasn't created.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Loads the document that corresponds to the specified document Id.
     * @param id Document Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the document entity.
     * @throws Throws an error when the document wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Update the document that corresponds to the specified document Id based on the given update request.
     * @param id Document Id.
     * @param request Document update request.
     * @returns Returns a promise to get true when the document was updated, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * Clone the document that corresponds to the specified document Id based on the given clone request.
     * @param id Document Id.
     * @param request Document clone request.
     * @returns Returns a promise to get true when the document was cloned, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    clone(id: string, request: Requests.Clone): Promise<boolean>;
    /**
     * Change the document that corresponds to the specified document Id based on the given change request.
     * @param id Document Id.
     * @param request Document change request.
     * @returns Returns a promise to get true when the document was changed, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    change(id: string, request: Requests.Submit): Promise<boolean>;
    /**
     * Submit the document that corresponds to the specified document Id based on the given submission request.
     * @param id Document Id.
     * @param request Document submission request.
     * @returns Returns a promise to get true when the document was submitted, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    submit(id: string, request: Requests.Submit): Promise<boolean>;
    /**
     * Finish the workflow stage in the document that corresponds to the specified document Id based on the given change request.
     * @param id Document Id.
     * @param request Document finish request.
     * @returns Returns a promise to get true when the operation was successful, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    finish(id: string, request: Requests.Finish): Promise<boolean>;
    /**
     * Send the document that corresponds to the specified Id to be signed according to the given sign request.
     * @param id Document Id.
     * @param request Document sign request.
     * @returns Returns a promise to get true when the document was sent to be signed, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    sign(id: string, request: Requests.Sign): Promise<boolean>;
    /**
     * Send the document that corresponds to the specified Id to all recipients according to the given send request.
     * @param id Document Id.
     * @param request Document send request.
     * @returns Returns a promise to get true when the document was sent, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    send(id: string, request: Requests.Send): Promise<boolean>;
    /**
     * List all documents that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the document list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all documents that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of documents or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the document that corresponds to the specified document Id.
     * @param id Document Id.
     * @returns Returns a promise to get true when the document was deleted, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    remove(id: string): Promise<boolean>;
}
