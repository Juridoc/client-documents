/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Files from '@juridoc/client-files';

import * as Types from '../types';

/**
 * Document attachment, internal entity class.
 */
@RestDB.Schema.Entity('documents/attachment')
@Class.Describe()
export class Attachment extends Class.Null {
  /**
   * Attachment type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Attachment))
  @Class.Public()
  public type!: Types.Attachment;

  /**
   * File Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public fileId!: string;

  /**
   * File entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Files.Entity, ['id', 'name', 'mime'])
  @Class.Public()
  public file!: Files.Entity;
}
