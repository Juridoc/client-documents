/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Document stage, internal entity class.
 */
export declare class Stage extends Class.Null {
    /**
     * Stage context Id.
     */
    contextId: string;
    /**
     * Stage status.
     */
    status: Types.Stage.Status;
}
