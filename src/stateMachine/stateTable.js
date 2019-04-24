import State from './state';

export default class StateTable {
  constructor() {
    this.table = new Map();
  }

  create(stateName, stateValue, accessMode) {
    const newState = State(stateValue, accessMode);
    this.table.set(stateName, newState);
  }
}