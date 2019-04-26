import StateTable from '../../../src/stateMachine/stateTable';
import { State } from '../../../src/stateMachine/stateTable';

test('Instantiate state', () => {
  var state = new State('test');
  expect(state.getValue()).toBe('test');
});

test('Change value of state', () => {
  var state = new State('test1');
  state.change('test2');
  expect(state.getValue()).toBe('test2');
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
  expect(state.getValue()).toBe('test');
});

test('Update state table value', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test1');
  stateTable.update('test', 'test2');
  const state = stateTable.read('test');
  expect(state.getValue()).toBe('test2');
});

test('Delete from state table', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test');
  expect(stateTable.table.size).toBe(1);
  stateTable.delete('test');
  expect(stateTable.table.size).toBe(0);
});

test('Rollback for create', () => {
  const stateTable = new StateTable();
  stateTable.create('test1', 'test1');
  stateTable.create('test2', 'test2');
  stateTable.rollback();
  expect(stateTable.table.size).toBe(1);
});

test('Rollback for update', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test1');
  stateTable.update('test', 'test2');
  stateTable.rollback();
  const state = stateTable.read('test');
  expect(state.getValue()).toBe('test1');
});

test('Commit test', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test1');
  stateTable.update('test', 'test2');
  stateTable.commit();
  expect(stateTable.getCommit(1)[0].size).toBe(1);
});
