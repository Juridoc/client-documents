/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Document send request.
 */
@RestDB.Schema.Entity('documents/{id}/send')
@Class.Describe()
export class Send extends Class.Null {
  /**
   * List of contact Ids to be used as recipients.
   */
  @RestDB.Schema.Array(String)
  @Class.Public()
  public recipientsIdList?: string[];

  /**
   * Message.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public message?: string;
}
