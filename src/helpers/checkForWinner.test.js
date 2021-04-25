import { checkForWinner } from './checkForWinner';

const mockDataForFalseCase = [
  [
    { isFlagged: true, isBomb: true },
    { isFlagged: false, isBomb: true }
  ],
  [
    { isFlagged: true, isBomb: true },
    { isFlagged: true, isBomb: true }
  ]
];

const mockDataForTrueCase = [
  [
    { isFlagged: true, isBomb: true },
    { isFlagged: true, isBomb: true }
  ],
  [
    { isFlagged: true, isBomb: true },
    { isFlagged: true, isBomb: true }
  ]
];

describe('checkForWinner', () => {
  it('it return false if all bombs does not have flags', () => {
    const outputState = checkForWinner(mockDataForFalseCase);
    expect(outputState).toEqual(false);
  });

  it('it return true if all bombs have flags', () => {
    const outputState = checkForWinner(mockDataForTrueCase);
    expect(outputState).toEqual(true);
  });
});
