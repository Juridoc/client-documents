/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Files from '@juridoc/client-files';
import * as Types from '../types';
/**
 * Document attachment, internal entity class.
 */
export declare class Attachment extends Class.Null {
    /**
     * Attachment type.
     */
    type: Types.Attachment;
    /**
     * File Id.
     */
    fileId: string;
    /**
     * File entity.
     */
    file: Files.Entity;
}
