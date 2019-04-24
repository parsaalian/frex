import State from '../../../src/stateMachine/state';

test('State Instantiation', () => {
  var state = new State('test', 'rrr');
  expect(state.value).toBe('test');
  expect(state.access).toBe('rrr');
});
