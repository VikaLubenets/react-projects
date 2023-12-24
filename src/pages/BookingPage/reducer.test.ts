import { timesReducer, initialTimesState, UpdateTimesAction } from './reducer';

describe('timesReducer', () => {
  test('initializeTimes returns the correct expected value', () => {
    const result = timesReducer(initialTimesState, {} as UpdateTimesAction);

    expect(result).toEqual(initialTimesState);
  });

  test('updateTimes returns the same value provided in the state', () => {
    const currentState = [
      { id: 'time1', time: '14:00' },
      { id: 'time2', time: '19:00' },
      { id: 'time3', time: '20:00' },
    ];

    const action: UpdateTimesAction = {
      type: 'UPDATE_TIMES',
      date: '2023-12-25',
      selectedTime: 'time1',
    };

    const result = timesReducer(currentState, action);

    expect(result).toEqual(currentState);
  });
});
