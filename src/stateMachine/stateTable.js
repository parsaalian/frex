import State from './state';

export default class StateTable {
  constructor() {
    this.table = new Map();
  }

  create(stateName, stateValue, accessMode) {
    const newState = new State(stateValue, accessMode);
    this.table.set(stateName, newState);
  }

  read(stateName) {
    return this.table.get(stateName);
  }

  update(stateName, stateValue, accessMode=null) {
    const state = this.table.get(stateName);
    state.change(stateValue, accessMode);
  }

  delete(stateName) {
    this.table.delete(stateName);
  }
}
