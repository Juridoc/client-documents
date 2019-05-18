/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Folders from '@juridoc/client-folders';
import * as Categories from '@juridoc/client-categories';
import * as Templates from '@juridoc/client-templates';
import * as Workflows from '@juridoc/client-workflows';
import * as Signatures from '@juridoc/client-signatures';
import * as Expirations from '@juridoc/client-expirations';
import * as Lifecycles from '@juridoc/client-lifecycles';
import * as Financials from '@juridoc/client-financials';
import * as Profiles from '@juridoc/client-profiles';

import * as Types from './types';
import * as Internals from './internals';

/**
 * Document entity class.
 */
@RestDB.Schema.Entity('documents')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Document Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public profileId!: string;

  /**
   * Profile entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Profiles.Entity, [
    'id',
    'contact.id',
    'contact.pictureId',
    'contact.name',
    'contact.personal.firstName',
    'contact.personal.lastName',
    'contact.professional.denomination'
  ])
  @Class.Public()
  public profile!: Profiles.Entity;

  /**
   * Template Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public templateId!: string;

  /**
   * Signature entity.
   */
  @RestDB.Schema.Object(() => Signatures.Entity, ['id', 'signers', 'status', 'provider'])
  @Class.Public()
  public signature?: Signatures.Entity;

  /**
   * Expiration entity.
   */
  @RestDB.Schema.Object(() => Expirations.Entity, ['id', 'expireAt', 'reminderAt', 'reminderEvery', 'reminderBefore'])
  @Class.Public()
  public expiration?: Expirations.Entity;

  /**
   * Lifecycle entity.
   */
  @RestDB.Schema.Object(() => Lifecycles.Entity, ['id', 'startAt', 'finishAt', 'noticeAt', 'noticeIn', 'prolongationFor'])
  @Class.Public()
  public lifecycle?: Lifecycles.Entity;

  /**
   * Financials entity.
   */
  @RestDB.Schema.Object(() => Financials.Entity, ['id', 'type'])
  @Class.Public()
  public financials?: Financials.Entity;

  /**
   * Category Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public categoryId!: string;

  /**
   * Category entity.
   */
  @RestDB.Schema.Object(() => Categories.Entity, ['id', 'name', 'translations'])
  @Class.Public()
  public category?: Categories.Entity;

  /**
   * Folder Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public folderId?: string;

  /**
   * Folder entity.
   */
  @RestDB.Schema.Object(() => Folders.Entity, ['id', 'name'])
  @Class.Public()
  public folder?: Folders.Entity;

  /**
   * Map of contact entities.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Map(String)
  @Class.Public()
  public entityIdMap!: RestDB.Map<string>;

  /**
   * List of sharing grants.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public grantsIdList!: string[];

  /**
   * List of contact Ids to be used as recipients.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public recipientsIdList!: string[];

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Submit date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public submittedAt?: Date;

  /**
   * Delete date.
   */
  @RestDB.Schema.Date()
  @RestDB.Schema.Null()
  @Class.Public()
  public deletedAt?: Date | null;

  /**
   * Import date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public importedAt?: Date;

  /**
   * Update status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Status))
  @Class.Public()
  public status!: Types.Status;

  /**
   * Language option.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public languageOption!: string;

  /**
   * Name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * Content.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public content!: string;

  /**
   * Form schema.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Templates.Internals.Form)
  @Class.Public()
  public form!: Templates.Internals.Form;

  /**
   * Form data.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public data!: RestDB.Map<any>;

  /**
   * Approval stack.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Workflows.Internals.Stack)
  @Class.Public()
  public approvers!: Workflows.Internals.Stack;

  /**
   * Negotiation stack.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Workflows.Internals.Stack)
  @Class.Public()
  public negotiators!: Workflows.Internals.Stack;

  /**
   * Signature stack.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Signatures.Internals.Stack)
  @Class.Public()
  public signers!: Signatures.Internals.Stack;

  /**
   * Attachment list.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Internals.Attachment)
  @Class.Public()
  public attachments!: Internals.Attachment[];

  /**
   * Stages data.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Internals.Stage)
  @Class.Public()
  public stages!: Internals.Stage[];

  /**
   * Get the current document progress. (Between 1.0 and 0.0)
   */
  @Class.Public()
  public get progress(): number {
    let fields = 0;
    let filled = 0;
    for (const id in this.form.fieldMap) {
      if (id in this.data) {
        filled++;
      }
      fields++;
    }
    return filled / fields;
  }

  /**
   * Determines whether or not this entity is in the trash can.
   */
  @Class.Public()
  public get isDeleted(): boolean {
    return (this.folder?.id ?? this.folderId) === Types.DeletedFolderId || this.deletedAt instanceof Date;
  }

  /**
   * Determines whether or not this entity is imported.
   */
  @Class.Public()
  public get isImported(): boolean {
    return (this.folder?.id ?? this.folderId) === Types.DeletedFolderId || this.importedAt instanceof Date;
  }

  /**
   * Test if the specified profile is the entity ownership.
   * @param profile Profile entity.
   * @returns Returns true when the given profile is the ownership, false otherwise.
   */
  @Class.Public()
  public isOwnership(profile: Profiles.Entity): boolean {
    return (this.profile?.id ?? this.profileId) === profile.id;
  }
}
