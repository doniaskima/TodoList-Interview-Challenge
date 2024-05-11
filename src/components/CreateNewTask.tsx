import { ChangeEvent, useState } from 'react';
import plusIcon from '../assets/plus-icon.svg';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/tasksSlice';
import { nanoid } from '@reduxjs/toolkit';
import { motion } from 'framer-motion';

export const CreateNewTask = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [shake, setShake] = useState(false); // State to trigger shake animation

  const handleAddTask = () => {
    if (!inputValue.trim()) {
      setShake(true); // Trigger shake animation
      setTimeout(() => setShake(false), 500); // Reset shake after 500ms
      alert('Write something in the field.');
      return;
    }
    dispatch(
      addTask({
        id: nanoid(),
        taskText: inputValue.trim(),
        isDone: false,
      })
    );
    setInputValue('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <motion.div
      className='flex h-14 gap-2'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.input
        type='text'
        value={inputValue}
        placeholder='Add a new task'
        onChange={handleInputChange}
        className='text-base flex-1 w-full dark:text-white/80 dark:bg-[#262626]
        bg-slate-100 outline-gray-200 text-black/80
        dark:placeholder:text-[#808080] rounded-lg p-4 outline outline-1
        dark:outline-[#0D0D0D] focus:outline-[#2895d4] dark:focus:outline-[#1E6F9F]
        transition-all duration-300'
        animate={shake ? { x: [-10, 10, -10, 0] } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      <motion.button
        type='button'
        onClick={handleAddTask}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='bg-[#268cc7] hover:bg-[#2a9cdd] active:bg-[#217baf]
  dark:bg-[#1E6F9F] dark:hover:bg-[#2284bd] dark:active:bg-[#19608a]
  text-white rounded-lg w-24 font-bold flex items-center
  justify-center gap-2 text-sm p-4'
      >
        Create
        <img src={plusIcon} alt='plus-icon' />
      </motion.button>
    </motion.div>
  );
};
