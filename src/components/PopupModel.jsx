import React, { useState } from 'react'
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addTask } from '../store/TodoSlice';

const PopupModel = ({ setModelEnabled }) => {
    const dispatch = useDispatch();
    const [tastInput, setTaskInput] = useState("");
    
    const handleTaskSubmit = (e) => {
        e.preventDefault();

        const task = {
            task: tastInput,
            isCompleted: false,
            isFavourite: false,
            date: new Date().toJSON(),
        }
        dispatch(addTask(task));
        setTaskInput("");
        setModelEnabled(false);

        console.log(task); 
    }
    
    return (
        <div className='fixed h-full w-full bg-gray-500 bg-opacity-75 transition-opacity'>
            <section className='h-3/5 flex items-center justify-center my-auto'>
                <div className='bg-white py-4 px-8 rounded-lg w-[40%]'>
                    <form onSubmit={handleTaskSubmit}>
                        <h1 className='text-lg font-semibold text-gray-900'>🎯 Today's Task</h1>
                        <div className='mt-3'>
                            <input autoFocus required value={tastInput} onChange={(e) => setTaskInput(e.target.value)} className="bg-slate-100 w-full text-2xl p-2" placeholder="Enter your task..." type="text" /> <br />
                        </div>
                        <div className='mt-4 flex justify-end'>
                            <button type="submit" className="inline-flex items-center px-4 py-2 text-md font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                                <MdOutlineAddCircleOutline /> &nbsp;
                                Add Task
                            </button>
                            <button onClick={() => setModelEnabled(false)} type="button" className="ml-4 inline-flex items-center px-4 py-2 text-md font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-red-600 dark:border-red-700 dark:text-white dark:hover:text-white dark:hover:bg-red-700 dark:focus:ring-red-500 dark:focus:text-white">
                                <AiOutlineCloseCircle /> &nbsp;
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default PopupModel