const initialTimesState = [
  { id: 'time1', time: '14:00' },
  { id: 'time2', time: '19:00' },
  { id: 'time3', time: '20:00' },
];

interface UpdateTimesAction {
  type: 'UPDATE_TIMES';
  date: string;
  selectedTime: string;
}

type Action = UpdateTimesAction;

const timesReducer = (
  state: { id: string; time: string }[],
  action: Action
): { id: string; time: string }[] => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const updatedTimes = state.filter(
        (time) => time.time !== action.selectedTime
      );
      return updatedTimes;
    }
    default:
      return state;
  }
};

export { timesReducer, initialTimesState };
export type { UpdateTimesAction };
