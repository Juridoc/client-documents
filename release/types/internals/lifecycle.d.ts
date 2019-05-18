/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Document lifecycle, internal entity class.
 */
export declare class Lifecycle extends Class.Null {
    /**
     * Start date.
     */
    startAt?: Date;
    /**
     * Finish date.
     */
    finishAt: Date;
    /**
     * Lifecycle status.
     */
    status: Types.Lifecycle;
    /**
     * Number of days for the notice term.
     */
    noticeIn?: number;
    /**
     * Number of days for the prolongation period.
     */
    prolongationFor?: number;
}
