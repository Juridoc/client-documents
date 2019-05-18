/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

import * as Internals from '../internals';

/**
 * Document update request.
 */
@RestDB.Schema.Entity('documents/{id}')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Category Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public categoryId?: string;

  /**
   * Folder Id.
   */
  @RestDB.Schema.Id()
  @RestDB.Schema.Null()
  @Class.Public()
  public folderId?: string | null;

  /**
   * Update status.
   */
  @RestDB.Schema.Enumeration([Types.Status.Draft, Types.Status.Ready, Types.Status.Approved, Types.Status.Deal, Types.Status.Signed])
  @Class.Public()
  public status?: Types.Status.Draft | Types.Status.Ready | Types.Status.Approved | Types.Status.Deal | Types.Status.Signed;

  /**
   * Language option.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public languageOption?: string;

  /**
   * Name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public name?: string;

  /**
   * Lifecycle settings.
   */
  @RestDB.Schema.Object(Internals.Lifecycle)
  @Class.Public()
  public lifecycle?: Internals.Lifecycle;
}
