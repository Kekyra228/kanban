import { useContext } from "react";
import { TasksContext } from "./contextTasks";


export function useTasksContext() {

  return useContext(TasksContext);

}