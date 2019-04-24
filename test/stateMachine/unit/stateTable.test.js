import StateTable from '../../../src/stateMachine/stateTable';
import { State } from '../../../src/stateMachine/stateTable';

test('Instantiate state', () => {
  var state = new State('test');
  expect(state.value).toBe('test');
});

test('Change value of state', () => {
  var state = new State('test1');
  state.change('test2');
  expect(state.value).toBe('test2');
});

test('Instantiate state table', () => {
  const stateTable = new StateTable();
  expect(stateTable.table.size).toBe(0);
});

test('Create state table', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test');
  expect(stateTable.table.size).toBe(1);
});

test('Read from state table', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test');
  const state = stateTable.read('test')
  expect(state.value).toBe('test');
});

test('Update state table value', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test1');
  stateTable.update('test', 'test2');
  const state = stateTable.read('test');
  expect(state.value).toBe('test2');
});

test('Delete from state table', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test');
  expect(stateTable.table.size).toBe(1);
  stateTable.delete('test');
  expect(stateTable.table.size).toBe(0);
});
