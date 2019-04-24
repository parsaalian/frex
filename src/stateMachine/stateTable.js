class State {
  constructor(value) {
    this.value = value;
  }

  change(value) {
    this.value = value;
  }
}

class StateTable {
  constructor() {
    this.table = new Map();
  }

  create(stateName, stateValue) {
    const newState = new State(stateValue);
    this.table.set(stateName, newState);
  }

  read(stateName) {
    return this.table.get(stateName);
  }

  update(stateName, value) {
    const state = this.table.get(stateName);
    state.change(value);
  }

  delete(stateName) {
    this.table.delete(stateName);
  }
}

export { State };
export default StateTable;
