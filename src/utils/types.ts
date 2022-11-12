import React from "react";
import { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { TTicketActions } from "../services/actions/tickets";
import { store } from "../services/store";

export interface NewRowData {
  title: string; // Наименование работ
  unit: string; // Ед. изм.
  quantity: number; // Количество
  unitPrice: number; // Цена за ед.
  price: number; // Стоимость

  parent: number | null; // id уровня, в котором находится (либо null для первого уровня)
  type: "level" | "row";
}

export type TAppActions = TTicketActions;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<RootState, any, TAppActions>;

export const useMySelector: TypedUseSelectorHook<RootState> = useSelector;
export const useMyDispatch = () => useDispatch<AppDispatch>();

export interface IInputProps {
  placeholder: string;
  label: string;
  value: string;
  icon: boolean;
  minDate?: string;
  required: boolean;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITicket {
  from: string;
  to: string;
  departure: string;
  arrival?: string;
}

export interface ITicketState {
  from: string;
  to: string;
  departure: string;
  arrival?: string;
}
