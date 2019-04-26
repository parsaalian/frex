import { stateActions } from './consts';
import HistoryTable from './history';

export class State {
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

export default class StateTable {
  constructor() {
    this.tables = [];
    this.table = new Map();
    this.history = new HistoryTable();
  }

  create(stateName, stateValue, rollback=false) {
    const newState = new State(stateValue);
    if (!rollback) {
      this.history.push(stateActions.CREATE, stateName, null, stateValue);
    }
    this.table.set(stateName, newState);
  }

  read(stateName) {
    return this.table.get(stateName);
  }

  update(stateName, value, rollback=false) {
    const state = this.table.get(stateName);
    if (!rollback) {
      this.history.push(stateActions.UPDATE, stateName, state.getValue(), value);
    }
    state.change(value);
  }

  delete(stateName, rollback=false) {
    const state = this.table.get(stateName);
    if (!rollback) {
      this.history.push(stateActions.DELETE, stateName, state.getValue(), null);
    }
    this.table.delete(stateName);
  }

  rollback() {
    const lastAction = this.history.pop();
    switch (lastAction.type) {
      case stateActions.CREATE:
        this.delete(lastAction.state, true);
        break;
      case stateActions.DELETE:
        this.create(lastAction.state, lastAction.previous, true);
        break;
      case stateActions.UPDATE:
        this.update(lastAction.state, lastAction.previous, true);
        break;
    }
  }

  multiRollback(n) {
    for (var i = 0; i < n; i++) {
      rollback();
    }
  }

  commit() {
    this.tables.push([this.table, this.history]);
    this.table = new Map();
    this.history = new HistoryTable();
  }

  getCommit(n) {
    return this.tables[n - 1];
  }
}
