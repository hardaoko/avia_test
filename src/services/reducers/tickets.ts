import { ITicketState } from "../../utils/types";
import { ADD_TICKET, TTicketActions } from "../actions/tickets";

const initialTicket: ITicketState = {
  from: "",
  to: "",
  departure: "",
  arrival: "",
};

export const ticketsReducer = (
  state = initialTicket,
  action: TTicketActions
) => {
  switch (action.type) {
    case ADD_TICKET: {
      return {
        ...state,
        from: action.payload.from,
        to: action.payload.to,
        departure: action.payload.departure,
        arrival: action.payload.arrival || "",
      };
    }

    default: {
      return state;
    }
  }
};
