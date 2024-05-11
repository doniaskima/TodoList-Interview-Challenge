import { TaskState } from "../redux/slices/tasksSlice";

/**
 * A function to sort tasks based on their completion status.
 * Tasks that are not done are moved to the top, and tasks that are done are moved to the bottom.
 * 
 * @param {TaskType} a 
 * @param {TaskType} b -
 * @returns {number}
 */
export function sortNotDoneToDone<TaskType extends TaskState>(
  a: TaskType,
  b: TaskType
) {
  // If task 'a' is not done and task 'b' is done, task 'a' should come before 'b'.
  if (!a.isDone && b.isDone) {
    return -1;
  }

  // If task 'a' is done and task 'b' is not done, task 'a' should come after 'b'.
  if (a.isDone && !b.isDone) {
    return 1;
  }

  // If both tasks have the same done status, their order remains unchanged.
  return 0;
}
