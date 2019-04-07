import _ from 'lodash';

import { Person } from '../utils/classes';

let foo = new Person("Antonio", "Erdeljac");

console.log(_.get(foo, 'firstName'));