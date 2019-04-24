export default class State {
  constructor(value, access) {
    this.value = value;
    this.access = access;
  }

  change(stateValue, accessMode) {
    if (accessMode) {
      this.value = stateValue;
      this.access = accessMode;
    } else {
      this.value = stateValue;
    }
  }
}
