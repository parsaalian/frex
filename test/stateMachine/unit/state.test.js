import State from '../../../src/stateMachine/state';

test('Instantiation', () => {
  var state = new State('test', 'rrr');
  expect(state.value).toBe('test');
  expect(state.access).toBe('rrr');
});

test('Change without access', () => {
  var state = new State('test1', 'rrr');
  state.change('test2');
  expect(state.value).toBe('test2');
});

test('Change with access', () => {
  var state = new State('test1', 'rrr');
  state.change('test2', 'rwr');
  expect(state.value).toBe('test2');
  expect(state.access).toBe('rwr');
});
