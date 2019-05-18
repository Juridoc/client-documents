/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Workflows from '@juridoc/client-workflows';
import * as Signatures from '@juridoc/client-signatures';
/**
 * Document submit request.
 */
export declare class Submit extends Class.Null {
    /**
     * List of contact Ids to be used as recipients.
     */
    recipientsIdList?: string[];
    /**
     * Content.
     */
    content?: string;
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
