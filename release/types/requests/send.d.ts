/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
/**
 * Document send request.
 */
export declare class Send extends Class.Null {
    /**
     * List of contact Ids to be used as recipients.
     */
    recipientsIdList?: string[];
    /**
     * Message.
     */
    message?: string;
}
