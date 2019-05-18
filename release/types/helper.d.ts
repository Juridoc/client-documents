/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Internals from './internals';
import { Entity } from './entity';
/**
 * Documents helper class.
 */
export declare class Helper extends Class.Null {
    /**
     * Get the current stage from the specified document.
     * @param document Document entity.
     * @returns Returns the current stage or undefined when the document has no stages.
     */
    static getCurrentStage(document: Entity): Internals.Stage | undefined;
}
