/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Document stage, internal entity class.
 */
@RestDB.Schema.Entity('documents/stage')
@Class.Describe()
export class Stage extends Class.Null {
  /**
   * Stage context Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public contextId!: string;

  /**
   * Stage status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Stage.Status))
  @Class.Public()
  public status!: Types.Stage.Status;
}
