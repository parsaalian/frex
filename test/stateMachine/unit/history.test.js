import HistoryTable from '../../../src/stateMachine/history';

test('Add unit to history table', () => {
  const historyTable = new HistoryTable();
  historyTable.addHistoryUnit('update', 'test', 'test1', 'test2');
  historyTable.addHistoryUnit('update', 'test', 'test2', 'test3');
  expect(historyTable.getHead().getCurrentValue()).toBe('test3');
});

test('Remove unit from history table', () => {
  const historyTable = new HistoryTable();
  historyTable.addHistoryUnit('update', 'test', 'test1', 'test2');
  historyTable.addHistoryUnit('update', 'test', 'test2', 'test3');
  historyTable.removeLastUnit();
  expect(historyTable.getHead().getCurrentValue()).toBe('test2');
});
