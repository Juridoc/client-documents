/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
/**
 * Document change request.
 */
export declare class Change extends Class.Null {
    /**
     * Content.
     */
    content?: string;
    /**
     * Form data.
     */
    data?: RestDB.Map<any>;
}
