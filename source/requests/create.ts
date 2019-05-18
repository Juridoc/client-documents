/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Workflows from '@juridoc/client-workflows';
import * as Signatures from '@juridoc/client-signatures';

import * as Internals from '../internals';

/**
 * Document creation request.
 */
@RestDB.Schema.Entity('documents')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Template Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public templateId!: string;

  /**
   * Folder Id.
   */
  @RestDB.Schema.Id()
  @RestDB.Schema.Null()
  @Class.Public()
  public folderId?: string | null;

  /**
   * Map of contact entities.
   */
  @RestDB.Schema.Map(String)
  @Class.Public()
  public entityIdMap?: RestDB.Map<string>;

  /**
   * List of contact Ids to be used as recipients.
   */
  @RestDB.Schema.Array(String)
  @Class.Public()
  public recipientsIdList?: string[];

  /**
   * Name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * Expiration settings.
   */
  @RestDB.Schema.Object(Internals.Expiration)
  @Class.Public()
  public expiration?: Internals.Expiration;

  /**
   * Lifecycle settings.
   */
  @RestDB.Schema.Object(Internals.Lifecycle)
  @Class.Public()
  public lifecycle?: Internals.Lifecycle;

  /**
   * Form data.
   */
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public data?: RestDB.Map<any>;

  /**
   * Approval stack.
   */
  @RestDB.Schema.Object(() => Workflows.Internals.Stack)
  @Class.Public()
  public approvers?: Workflows.Internals.Stack;

  /**
   * Negotiation stack.
   */
  @RestDB.Schema.Object(() => Workflows.Internals.Stack)
  @Class.Public()
  public negotiators?: Workflows.Internals.Stack;

  /**
   * Signature stack.
   */
  @RestDB.Schema.Object(() => Signatures.Internals.Stack)
  @Class.Public()
  public signers?: Signatures.Internals.Stack;
}
