import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from './redux/slices/tasksSlice';
import { TaskCard } from './components/TaskCard';
import { CreateNewTask } from './components/CreateNewTask';
import { AirplaneTilt, CloudMoon, CloudSun } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';
import clipboardIcon from './assets/Clipboard.png';

function App() {
  const tasks = useSelector(selectTasks);
  const [appTheme, setAppTheme] = useState(
    localStorage.getItem('theme') !== 'dark' ? 'light' : 'dark'
  );
  const completedTasks = tasks.filter((task) => task.isDone).length;
  const totalTasks = tasks.length;

  useEffect(() => {
    const root = document.documentElement;
    const oldTheme = appTheme === 'dark' ? 'light' : 'dark';
    root.classList.remove(oldTheme);
    root.classList.add(appTheme);
    localStorage.setItem('theme', appTheme);
  }, [appTheme]);

  return (
    <div className='h-screen text-[#808080]'>
      <motion.div
        className='h-[200px] absolute top-0 right-0 left-0 transition-colors duration-200'
        initial={{
          backgroundColor: appTheme === 'dark' ? '#FFFFFF' : '#0D0D0D',
        }}
        animate={{
          backgroundColor: appTheme === 'dark' ? '#0D0D0D' : '#FFFFFF',
        }}
        transition={{ duration: 0.2 }}
      >
        {/* switch theme row container */}
        <div>
          <button
            onClick={() => setAppTheme('dark')}
            className='dark:hidden absolute right-8 top-5'
          >
            <CloudSun className='text-gray-700 text-3xl dark:text-white/90' />
          </button>
          <button
            onClick={() => setAppTheme('light')}
            className='hidden dark:inline absolute right-8 top-5 cursor-pointer'
          >
            <CloudMoon className='text-black text-3xl dark:text-white/90' />
          </button>
        </div>

        <div className='max-w-[736px] mx-auto px-5'>
          {/* logo and brand row container */}
          <div className='mt-[72px] mb-[53px] flex items-center justify-center gap-3'>
            <AirplaneTilt size={48} weight='fill' className='text-blue-800' />
            <h1 className='font-black text-[40px] leading-[48px]'>
              <span className='text-blue-800'>fly</span>
              <span className='text-green-300'>list</span>
            </h1>
          </div>
          {/* create new task row container */}
          <CreateNewTask />

          <section className='mt-16 pb-16'>
            {/* info row container */}
            <div className='flex justify-between'>
              <div className='flex gap-2 items-center'>
                <h2 className='font-bold text-[#4EA8DE] text-base'>
                  Created Tasks
                </h2>
                <span
                  className='font-bold py-0.5 px-2 text-xs text-gray-500 dark:text-white
                  flex items-center bg-slate-200 dark:bg-[#333333] rounded-full'
                >
                  {tasks.length}
                </span>
              </div>
              <div className='flex gap-2 items-center'>
                <h2 className='font-bold text-[#8284FA] text-base'>
                  Completed
                </h2>
                <span
                  className='font-bold py-[1px] px-2 text-xs text-gray-500 dark:text-white
                  flex items-center bg-slate-200 dark:bg-[#333333] rounded-full'
                >
                  {`${completedTasks} of ${totalTasks}`}
                </span>
              </div>
            </div>
            {/* tasks column container */}
            <AnimatePresence>
              <div className='flex flex-col gap-3 mt-6'>
                {tasks.length > 0 ? (
                  tasks.map((task) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <TaskCard task={task} />
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <hr className='border-[#808080]/20' />
                    <div className='mt-16 text-center'>
                      <img
                        src={clipboardIcon}
                        alt='clipboard-icon'
                        className='mx-auto mb-4'
                      />
                      <p className='font-bold'>
                        You haven't registered any tasks yet
                      </p>
                      <p>Create tasks and organize your to-do items</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </AnimatePresence>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
