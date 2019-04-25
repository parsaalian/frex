import { stateActions } from './consts';
import HistoryTable from './history';

class State {
  constructor(value) {
    this.value = value;
  }

  change(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

class StateTable {
  constructor() {
    this.table = new Map();
    this.history = new HistoryTable();
  }

  create(stateName, stateValue) {
    const newState = new State(stateValue);
    this.history.push(stateActions.CREATE, stateName, null, stateValue);
    this.table.set(stateName, newState);
  }

  read(stateName) {
    return this.table.get(stateName);
  }

  update(stateName, value) {
    const state = this.table.get(stateName);
    this.history.push(stateActions.UPDATE, stateName, state.getValue(), value);
    state.change(value);
  }

  delete(stateName) {
    const state = this.table.get(stateName);
    this.history.push(stateActions.DELETE, stateName, state.getValue(), null);
    this.table.delete(stateName);
  }
}

export { State };
export default StateTable;
