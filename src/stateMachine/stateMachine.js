import _ from 'lodash';
import StateTable from './stateTable';
import Actions from './actions';

export default class StateMachine {
  constructor() {
    this.stateTable = new StateTable();
    this.actions = new Actions();
  }

  fetch(...args) {
    const values = _.transform(args, (result, key) => result.push(this.stateTable.read(key).value), []);
  }
}
