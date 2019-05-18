/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
import * as Internals from '../internals';
/**
 * Document update request.
 */
export declare class Update extends Class.Null {
    /**
     * Category Id.
     */
    categoryId?: string;
    /**
     * Folder Id.
     */
    folderId?: string | null;
    /**
     * Update status.
     */
    status?: Types.Status.Draft | Types.Status.Ready | Types.Status.Approved | Types.Status.Deal | Types.Status.Signed;
    /**
     * Language option.
     */
    languageOption?: string;
    /**
     * Name.
     */
    name?: string;
    /**
     * Lifecycle settings.
     */
    lifecycle?: Internals.Lifecycle;
}
