import { fetchAPI } from '../../utils/fakeAPI';

const initialTimesState = [
  { id: 'time1', time: '14:00' },
  { id: 'time2', time: '19:00' },
  { id: 'time3', time: '20:00' },
];

type ActionTypes = 'INITIALIZE_TIMES' | 'UPDATE_TIMES' | 'FETCH_TIMES';

interface FetchTimesAction {
  type: 'FETCH_TIMES';
  date: string;
}

interface UpdateTimesAction {
  type: ActionTypes;
  date?: string;
  selectedTime?: string;
}

type Action = UpdateTimesAction | FetchTimesAction;

const timesReducer = (
  state: { id: string; time: string }[],
  action: Action
): { id: string; time: string }[] => {
  switch (action.type) {
    case 'INITIALIZE_TIMES': {
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1
        }-${currentDate.getDate()}`;

      const availableTimes = fetchAPI(new Date(formattedDate));

      const formattedTimes = availableTimes.map((time, index) => ({
        id: `time${index + 1}`,
        time,
      }));

      return formattedTimes;
    }
    case 'UPDATE_TIMES': {
      const updatedTimes = state.filter(
        (time) => time.time !== action.selectedTime
      );
      return updatedTimes;
    }
    case 'FETCH_TIMES': {
      const availableTimes = action.date
        ? fetchAPI(new Date(action.date))
        : fetchAPI(new Date());

      const formattedTimes = availableTimes.map((time, index) => ({
        id: `time${index + 1}`,
        time,
      }));

      return formattedTimes;
    }
    default:
      return state;
  }
};

export { timesReducer, initialTimesState };
export type { UpdateTimesAction, FetchTimesAction };
