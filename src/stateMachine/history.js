class HistoryUnit {
  constructor(type, state, previous, current) {
    this.type = type;
    this.state = state;
    this.previous = previous;
    this.current = current;

    this.backPointer = null;
  }

  setBackPointer(unit) {
    this.backPointer = unit;
  }

  getUnitBehind() {
    return this.backPointer;
  }

  getCurrentValue() {
    return this.current;
  }
}

export default class HistoryTable {
  constructor() {
    this.tableHead = new HistoryUnit(null, null, null, null);
  }

  push(type, state, previous, current) {
    const unit = new HistoryUnit(type, state, previous, current);
    unit.setBackPointer(this.tableHead);
    this.tableHead = unit;
  }

  pop() {
    const last = this.tableHead;
    this.tableHead = this.tableHead.getUnitBehind();
    return this.tableHead;
  }

  getHead() {
    return this.tableHead;
  }
}
