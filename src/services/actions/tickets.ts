import { ITicket } from "../../utils/types";

export const ADD_TICKET = "ADD_TICKET" as const;

export interface IAddticket {
  type: typeof ADD_TICKET;
  payload: ITicket;
}

export type TTicketActions = IAddticket;

export const addTicket = (
  from: string,
  to: string,
  departure: string,
  arrival: string
) => {
  return {
    type: ADD_TICKET,
    payload: {
      from: from,
      to: to,
      departure: departure,
      arrival: arrival,
    },
  };
};
