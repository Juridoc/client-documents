/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Document expiration, internal entity class.
 */
@RestDB.Schema.Entity('documents/expiration')
@Class.Describe()
export class Expiration extends Class.Null {
  /**
   * Expiration status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Expiration))
  @Class.Public()
  public status!: Types.Expiration;

  /**
   * Number of days to expire.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public expireIn!: number;

  /**
   * Number of days to reminder.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public reminderIn!: number;

  /**
   * Number of days to wait for sending new reminders.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public reminderEvery!: number;

  /**
   * Number of days before expiration to send new reminder.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public reminderBefore!: number;
}
