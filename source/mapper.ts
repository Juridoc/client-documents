/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import * as Requests from './requests';

import { Entity } from './entity';

/**
 * Documents mapper class.
 */
@Injection.Describe({ singleton: true, name: 'documents' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Create a new document based on the specified creation request.
   * @param request Document creation request.
   * @returns Returns a promise to get the document Id.
   * @throws Throws an error when the document wasn't created.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string> {
    return (await this.mapper.insertEx<Requests.Create, string>(Requests.Create, request))!;
  }

  /**
   * Loads the document that corresponds to the specified document Id.
   * @param id Document Id.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the document entity.
   * @throws Throws an error when the document wasn't found.
   */
  @Class.Public()
  public async load(id: string, fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById(id, fields))!;
  }

  /**
   * Update the document that corresponds to the specified document Id based on the given update request.
   * @param id Document Id.
   * @param request Document update request.
   * @returns Returns a promise to get true when the document was updated, false otherwise.
   * @throws Throws an error when the document wasn't found.
   */
  @Class.Public()
  public async modify(id: string, request: Requests.Update): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Update, id, request))!;
  }

  /**
   * Clone the document that corresponds to the specified document Id based on the given clone request.
   * @param id Document Id.
   * @param request Document clone request.
   * @returns Returns a promise to get true when the document was cloned, false otherwise.
   * @throws Throws an error when the document wasn't found.
   */
  @Class.Public()
  public async clone(id: string, request: Requests.Clone): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Clone, id, request))!;
  }

  /**
   * Change the document that corresponds to the specified document Id based on the given change request.
   * @param id Document Id.
   * @param request Document change request.
   * @returns Returns a promise to get true when the document was changed, false otherwise.
   * @throws Throws an error when the document wasn't found.
   */
  @Class.Public()
  public async change(id: string, request: Requests.Submit): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Change, id, request))!;
  }

  /**
   * Submit the document that corresponds to the specified document Id based on the given submission request.
   * @param id Document Id.
   * @param request Document submission request.
   * @returns Returns a promise to get true when the document was submitted, false otherwise.
   * @throws Throws an error when the document wasn't found.
   */
  @Class.Public()
  public async submit(id: string, request: Requests.Submit): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Submit, id, request))!;
  }

  /**
   * Finish the workflow stage in the document that corresponds to the specified document Id based on the given change request.
   * @param id Document Id.
   * @param request Document finish request.
   * @returns Returns a promise to get true when the operation was successful, false otherwise.
   * @throws Throws an error when the document wasn't found.
   */
  @Class.Public()
  public async finish(id: string, request: Requests.Finish): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Finish, id, request))!;
  }

  /**
   * Send the document that corresponds to the specified Id to be signed according to the given sign request.
   * @param id Document Id.
   * @param request Document sign request.
   * @returns Returns a promise to get true when the document was sent to be signed, false otherwise.
   * @throws Throws an error when the document wasn't found.
   */
  @Class.Public()
  public async sign(id: string, request: Requests.Sign): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Sign, id, request))!;
  }

  /**
   * Send the document that corresponds to the specified Id to all recipients according to the given send request.
   * @param id Document Id.
   * @param request Document send request.
   * @returns Returns a promise to get true when the document was sent, false otherwise.
   * @throws Throws an error when the document wasn't found.
   */
  @Class.Public()
  public async send(id: string, request: Requests.Send): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Send, id, request))!;
  }

  /**
   * List all documents that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the document list or undefined when an error occurs.
   */
  @Class.Public()
  public async list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined> {
    return await this.mapper.find(query, fields);
  }

  /**
   * Count all documents that corresponds to the specified filter.
   * @param query Query filter.
   * @returns Returns a promise to get the number of documents or undefined when an error occurs.
   */
  @Class.Public()
  public async count(query: RestDB.Query): Promise<number | undefined> {
    return await this.mapper.count(query);
  }

  /**
   * Delete the document that corresponds to the specified document Id.
   * @param id Document Id.
   * @returns Returns a promise to get true when the document was deleted, false otherwise.
   * @throws Throws an error when the document wasn't found.
   */
  @Class.Public()
  public async remove(id: string): Promise<boolean> {
    return (await this.mapper.deleteById(id))!;
  }
}
