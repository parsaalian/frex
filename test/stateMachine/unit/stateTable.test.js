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

test('Update without access', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test1', 'rrr');
  stateTable.update('test', 'test2');
  const state = stateTable.read('test');
  expect(state.value).toBe('test2');
});

test('Update with access', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test1', 'rrr');
  stateTable.update('test', 'test2', 'rwr');
  const state = stateTable.read('test');
  expect(state.value).toBe('test2');
  expect(state.access).toBe('rwr');
});
