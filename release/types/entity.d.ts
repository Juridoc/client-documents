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
export declare class Entity extends Class.Null {
    /**
     * Document Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Profile entity.
     */
    profile: Profiles.Entity;
    /**
     * Template Id.
     */
    templateId: string;
    /**
     * Signature entity.
     */
    signature?: Signatures.Entity;
    /**
     * Expiration entity.
     */
    expiration?: Expirations.Entity;
    /**
     * Lifecycle entity.
     */
    lifecycle?: Lifecycles.Entity;
    /**
     * Financials entity.
     */
    financials?: Financials.Entity;
    /**
     * Category Id.
     */
    categoryId: string;
    /**
     * Category entity.
     */
    category?: Categories.Entity;
    /**
     * Folder Id.
     */
    folderId?: string;
    /**
     * Folder entity.
     */
    folder?: Folders.Entity;
    /**
     * Map of contact entities.
     */
    entityIdMap: RestDB.Map<string>;
    /**
     * List of sharing grants.
     */
    grantsIdList: string[];
    /**
     * List of contact Ids to be used as recipients.
     */
    recipientsIdList: string[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Submit date.
     */
    submittedAt?: Date;
    /**
     * Delete date.
     */
    deletedAt?: Date | null;
    /**
     * Import date.
     */
    importedAt?: Date;
    /**
     * Update status.
     */
    status: Types.Status;
    /**
     * Language option.
     */
    languageOption: string;
    /**
     * Name.
     */
    name: string;
    /**
     * Content.
     */
    content: string;
    /**
     * Form schema.
     */
    form: Templates.Internals.Form;
    /**
     * Form data.
     */
    data: RestDB.Map<any>;
    /**
     * Approval stack.
     */
    approvers: Workflows.Internals.Stack;
    /**
     * Negotiation stack.
     */
    negotiators: Workflows.Internals.Stack;
    /**
     * Signature stack.
     */
    signers: Signatures.Internals.Stack;
    /**
     * Attachment list.
     */
    attachments: Internals.Attachment[];
    /**
     * Stages data.
     */
    stages: Internals.Stage[];
    /**
     * Get the current document progress. (Between 1.0 and 0.0)
     */
    get progress(): number;
    /**
     * Determines whether or not this entity is in the trash can.
     */
    get isDeleted(): boolean;
    /**
     * Determines whether or not this entity is imported.
     */
    get isImported(): boolean;
    /**
     * Test if the specified profile is the entity ownership.
     * @param profile Profile entity.
     * @returns Returns true when the given profile is the ownership, false otherwise.
     */
    isOwnership(profile: Profiles.Entity): boolean;
}
