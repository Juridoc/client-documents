/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Document change request.
 */
@RestDB.Schema.Entity('documents/{id}/change')
@Class.Describe()
export class Change extends Class.Null {
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
}
