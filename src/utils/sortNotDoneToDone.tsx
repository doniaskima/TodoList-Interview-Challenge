import { TaskState } from "../redux/slices/tasksSlice";

export function sortNotDoneToDone<TaskType extends TaskState>(
  a: TaskType,
  b: TaskType
) {
  if (!a.isDone && b.isDone) {
    return -1;
  }

  if (a.isDone && !b.isDone) {
    return 1;
  }
  return 0;
}
