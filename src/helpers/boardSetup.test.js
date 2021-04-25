import { boardSetup } from './boardSetup';
import { initialState } from '../context/reducer';

describe('boardSetup', () => {
  it('it returns an object', () => {
    const outputState = boardSetup(initialState);
    expect(typeof outputState).toEqual('object');
  });

  it('containing gridArray containing 40 bombs', () => {
    const outputState = boardSetup(initialState);
    let bombCount = 0;
    outputState.gridArray.forEach((row) => {
      row.forEach((tile) => (bombCount += tile.isBomb ? 1 : 0));
    });
    expect(bombCount).toEqual(40);
  });
});
