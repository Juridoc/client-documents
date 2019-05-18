/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Document clone request.
 */
@RestDB.Schema.Entity('documents/{id}/clone')
@Class.Describe()
export class Clone extends Class.Null {
  /**
   * Name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public name?: string;
}
