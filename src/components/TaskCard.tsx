import { useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Trash, PencilSimple } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import {
  updateTaskText,
  removeTask,
  updateTask,
} from '../redux/slices/tasksSlice';

interface TaskCardProps {
  task: {
    id: string;
    taskText: string;
    isDone: boolean;
  };
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.taskText);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      dispatch(updateTaskText({ id: task.id, taskText: editedText }));
    }
  };

  const handleTextChange = (e: any) => {
    setEditedText(e.target.value);
  };

  const handleUpdateTask = () => {
    dispatch(updateTask({ ...task, isDone: !task.isDone }));
  };

  return (
    <div
      className={`rounded-lg min-h-[56px] flex p-5 bg-slate-100 dark:bg-[#262626] cursor-pointer items-start ${
        task.isDone
          ? ''
          : 'outline outline-1 outline-gray-200 dark:outline-[#333333] shadow-md'
      }`}
      onClick={handleUpdateTask}
    >
      <Checkbox.Root
        checked={task.isDone}
        className={`dark:bg-[#262626] w-4 h-4 p-1 ${task.isDone ? 'bg-[#5E60CE] dark:bg-[#5E60CE]' : 'border-2 border-[#4EA8DE]'}
        rounded-full`}
      >
        <Checkbox.Indicator>
          <Trash size={16} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {isEditing ? (
        <input
          type='text'
          value={editedText}
          onChange={handleTextChange}
          onBlur={toggleEdit}
          onKeyDown={(e) => e.key === 'Enter' && toggleEdit()}
          className='mx-4 flex-1 text-black/80 dark:text-white'
        />
      ) : (
        <p
          className={`mx-4 overflow-auto break-words flex-1 -mt-1 ${task.isDone ? 'text-[#808080] line-through' : 'text-black/80 dark:text-white'}`}
        >
          {task.taskText}
        </p>
      )}
      <button type='button' onClick={() => dispatch(removeTask(task))}>
        <Trash size={24} className='text-red-500' />
      </button>
      {!task.isDone && (
        <button type='button' onClick={toggleEdit} className='ml-2'>
          <PencilSimple size={24} className='text-blue-500' />
        </button>
      )}
    </div>
  );
};
