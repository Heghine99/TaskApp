import { Selector } from "react-redux";
import { RootState } from "../store";
import { TasksState } from "./types";

export const tasksListSelector: Selector<RootState, TasksState> = (state) =>
  state.tasks;
