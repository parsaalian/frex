import {VALUE, ACCESS} from '../../../src/stateMachine/consts';
import StateTable from '../../../src/stateMachine/stateTable';

test('Instantiation', () => {
  const stateTable = new StateTable();
  expect(stateTable.table.size).toBe(0);
});

test('Create', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test', 'rrr');
  expect(stateTable.table.size).toBe(1);
});

test('Read', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test', 'rrr');
  const state = stateTable.read('test')
  expect(state.value).toBe('test');
});

test('Update value', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test1', 'rrr');
  stateTable.update('test', 'test2', VALUE);
  const state = stateTable.read('test');
  expect(state.value).toBe('test2');
});

test('Update access', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test', 'rrr');
  stateTable.update('test', 'rwr', ACCESS);
  const state = stateTable.read('test');
  expect(state.access).toBe('rwr');
});

test('Delete', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test', 'rrr');
  expect(stateTable.table.size).toBe(1);
  stateTable.delete('test');
  expect(stateTable.table.size).toBe(0);
});
