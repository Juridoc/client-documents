/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Document expiration, internal entity class.
 */
export declare class Expiration extends Class.Null {
    /**
     * Expiration status.
     */
    status: Types.Expiration;
    /**
     * Number of days to expire.
     */
    expireIn: number;
    /**
     * Number of days to reminder.
     */
    reminderIn: number;
    /**
     * Number of days to wait for sending new reminders.
     */
    reminderEvery: number;
    /**
     * Number of days before expiration to send new reminder.
     */
    reminderBefore: number;
}
