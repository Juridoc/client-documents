/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Signatures from '@juridoc/client-signatures';

/**
 * Document sign request.
 */
@RestDB.Schema.Entity('documents/{id}/sign')
@Class.Describe()
export class Sign extends Class.Null {
  /**
   * MIME type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public mime!: string;

  /**
   * File name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * File data.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Binary()
  @Class.Public()
  public data!: Array<number>;

  /**
   * Signature stack.
   */
  @RestDB.Schema.Object(() => Signatures.Internals.Stack)
  @Class.Public()
  public signers?: Signatures.Internals.Stack;

  /**
   * Message.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public message?: string;
}
