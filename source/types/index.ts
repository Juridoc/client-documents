/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Core from '@juridoc/client-core'

export * as Stage from './stage';

export { Attachment } from './attachment';
export { Expiration } from './expiration';
export { Lifecycle } from './lifecycle';
export { Status } from './status';

/**
 * Deleted folder Id.
 */
export const DeletedFolderId = Core.Types.AnonymousId;

/**
 * Imported folder Id.
 */
export const ImportedFolderId = 'ffffffffffffffffffffffff';
