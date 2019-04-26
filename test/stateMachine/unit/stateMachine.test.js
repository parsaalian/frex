import StateMachine from '../../../src/stateMachine/stateMachine';

test('Fetch values', () => {
  const stateMachine = new StateMachine();
  stateMachine.stateTable.create('test1', 'test1p');
  stateMachine.stateTable.create('test2', 'test2p');
  stateMachine.fetch('test1', 'test2').print();
});
