/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Signatures from '@juridoc/client-signatures';
/**
 * Document sign request.
 */
export declare class Sign extends Class.Null {
    /**
     * MIME type.
     */
    mime: string;
    /**
     * File name.
     */
    name: string;
    /**
     * File data.
     */
    data: Array<number>;
    /**
     * Signature stack.
     */
    signers?: Signatures.Internals.Stack;
    /**
     * Message.
     */
    message?: string;
}
