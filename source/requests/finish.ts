/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Workflows from '@juridoc/client-workflows';

/**
 * Document finishing request.
 */
@RestDB.Schema.Entity('documents/{id}/finish')
@Class.Describe()
export class Finish extends Workflows.Requests.Finish {}
