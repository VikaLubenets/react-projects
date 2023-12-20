import { UpdateTimesAction } from '../../pages/BookingPage/reducer';

export interface FormData {
  address: string;
  date: string;
  time: string;
  numberOfGuests: string;
  name: string;
  email: string;
  phoneNumber: string;
  specialInstruction: string;
  checkboxApproval: boolean;
}

export interface ReservationFormProps {
  data: FormData;
  handler: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  availableTimes: { id: string; time: string }[];
  dispatchTimes: React.Dispatch<UpdateTimesAction>;
}
