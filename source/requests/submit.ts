/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Workflows from '@juridoc/client-workflows';
import * as Signatures from '@juridoc/client-signatures';

/**
 * Document submit request.
 */
@RestDB.Schema.Entity('documents/{id}/submit')
@Class.Describe()
export class Submit extends Class.Null {
  /**
   * List of contact Ids to be used as recipients.
   */
  @RestDB.Schema.Array(String)
  @Class.Public()
  public recipientsIdList?: string[];

  /**
   * Content.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public content?: string;

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
