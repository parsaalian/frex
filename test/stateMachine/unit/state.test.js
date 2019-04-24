import {VALUE, ACCESS} from '../../../src/stateMachine/consts';
import State from '../../../src/stateMachine/state';

test('Instantiation', () => {
  var state = new State('test', 'rrr');
  expect(state.value).toBe('test');
  expect(state.access).toBe('rrr');
});

test('Change value', () => {
  var state = new State('test1', 'rrr');
  state.change('test2', VALUE);
  expect(state.value).toBe('test2');
});

test('Change access', () => {
  var state = new State('test1', 'rrr');
  state.change('rwr', ACCESS);
  expect(state.access).toBe('rwr');
});
