import StateTable from '../../../src/stateMachine/stateTable';

test('State table instantiation', () => {
  const stateTable = new StateTable();
  expect(stateTable.table.size).toBe(0);
});

test('State table create test', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test', 'rrr');
  expect(stateTable.table.size).toBe(1);
});

test('State table create and read test', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test', 'rrr');
  expect(stateTable.read('test').value).toBe('test');
});
