/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Document lifecycle, internal entity class.
 */
@RestDB.Schema.Entity('documents/lifecycle')
@Class.Describe()
export class Lifecycle extends Class.Null {
  /**
   * Start date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public startAt?: Date;

  /**
   * Finish date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public finishAt!: Date;

  /**
   * Lifecycle status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Lifecycle))
  @Class.Public()
  public status!: Types.Lifecycle;

  /**
   * Number of days for the notice term.
   */
  @RestDB.Schema.Number()
  @Class.Public()
  public noticeIn?: number;

  /**
   * Number of days for the prolongation period.
   */
  @RestDB.Schema.Number()
  @Class.Public()
  public prolongationFor?: number;
}
