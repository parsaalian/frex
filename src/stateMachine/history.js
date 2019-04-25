class HistoryUnit {
  constructor(type, state, previous, current) {
    this.type = type;
    this.state = state;
    this.previous = previous;
    this.current = current;
  }

  getCurrentValue() {
    return this.current;
  }
}

export default class HistoryTable {
  constructor() {
    this.table = []
  }

  push(type, state, previous, current) {
    const unit = new HistoryUnit(type, state, previous, current);
    this.table.push(unit);
  }

  pop() {
    return this.table.pop();
  }

  getHead() {
    return this.table[this.table.length - 1];
  }
}
