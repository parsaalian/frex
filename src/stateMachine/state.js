import {VALUE, ACCESS} from './consts';

export default class State {
  constructor(value, access) {
    this.value = value;
    this.access = access;
  }

  change(value, property) {
    switch (property) {
      case VALUE:
        this.value = value;
        break;
      case ACCESS:
        this.access = value;
        break;
    }
  }
}
