import StateTable from '../../../src/stateMachine/stateTable';

test('State Table Instantiation', () => {
  const stateTable = new StateTable();
  expect(stateTable.table.size).toBe(0);
});

test('State Table Create Added to Map', () => {
  const stateTable = new StateTable();
  stateTable.create('test', 'test', 'rrr');
  expect(stateTable.table.size).toBe(1);
});
