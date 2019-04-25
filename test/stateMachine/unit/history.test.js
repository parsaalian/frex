import HistoryTable from '../../../src/stateMachine/history';

test('Add unit to history table', () => {
  const historyTable = new HistoryTable();
  historyTable.push('update', 'test', 'test1', 'test2');
  historyTable.push('update', 'test', 'test2', 'test3');
  expect(historyTable.getHead().getCurrentValue()).toBe('test3');
});

test('Remove unit from history table', () => {
  const historyTable = new HistoryTable();
  historyTable.push('update', 'test', 'test1', 'test2');
  historyTable.push('update', 'test', 'test2', 'test3');
  expect(historyTable.getHead().getCurrentValue()).toBe('test3');
  const last = historyTable.pop();
  expect(last.getCurrentValue()).toBe('test3');
  expect(historyTable.getHead().getCurrentValue()).toBe('test2');
});
