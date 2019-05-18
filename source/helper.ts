/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';

import * as Types from './types';
import * as Internals from './internals';

import { Entity } from './entity';

/**
 * Documents helper class.
 */
@Class.Describe()
export class Helper extends Class.Null {
  /**
   * Get the current stage from the specified document.
   * @param document Document entity.
   * @returns Returns the current stage or undefined when the document has no stages.
   */
  @Class.Public()
  public static getCurrentStage(document: Entity): Internals.Stage | undefined {
    for (const workflow of document.stages) {
      if (workflow.status === Types.Stage.Status.Pending) {
        return workflow;
      }
    }
    return document.stages[document.stages.length - 1];
  }
}
