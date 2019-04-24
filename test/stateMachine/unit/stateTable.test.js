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

test('Create and read', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test', 'rrr');
  expect(stateTable.read('test').value).toBe('test');
});
