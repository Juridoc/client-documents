/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Workflows from '@juridoc/client-workflows';
import * as Signatures from '@juridoc/client-signatures';
import * as Internals from '../internals';
/**
 * Document creation request.
 */
export declare class Create extends Class.Null {
    /**
     * Template Id.
     */
    templateId: string;
    /**
     * Folder Id.
     */
    folderId?: string | null;
    /**
     * Map of contact entities.
     */
    entityIdMap?: RestDB.Map<string>;
    /**
     * List of contact Ids to be used as recipients.
     */
    recipientsIdList?: string[];
    /**
     * Name.
     */
    name: string;
    /**
     * Expiration settings.
     */
    expiration?: Internals.Expiration;
    /**
     * Lifecycle settings.
     */
    lifecycle?: Internals.Lifecycle;
    /**
     * Form data.
     */
    data?: RestDB.Map<any>;
    /**
     * Approval stack.
     */
    approvers?: Workflows.Internals.Stack;
    /**
     * Negotiation stack.
     */
    negotiators?: Workflows.Internals.Stack;
    /**
     * Signature stack.
     */
    signers?: Signatures.Internals.Stack;
}
