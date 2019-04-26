export default class Actions {
  constructor() {
    this.actions = new Map();
  }

  register(actionName, action) {
    this.actions.set(actionName, action);
  }
}
