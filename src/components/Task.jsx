import React, { useState } from 'react'

import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";

import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

import { RiDeleteBinFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { IoMdSave } from "react-icons/io";

import { useDispatch } from 'react-redux';
import { taskComplete, taskDelete, taskEdit, taskFavourite } from '../store/TodoSlice';

const Task = ({ task, id }) => {
    const [editActive, setEditActive] = useState(false);
    const [editTask, setEditTask] = useState(task.task);
    const dispatch = useDispatch();

    const handleTaskCompleted = () => {
        dispatch(taskComplete(id))
    }

    const handleTaskFavourite = () => {
        dispatch(taskFavourite(id))
    }

    const handleDelete = () => {
        dispatch(taskDelete(id));
    }

    const handleEdit = () => {
        dispatch(taskEdit({id: id, task: editTask}));
        setEditActive(!editActive);
    }
    return (
        <div className='p-10' >
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    {task.isCompleted ? <MdCheckBox onClick={handleTaskCompleted} className='text-2xl cursor-pointer' /> : <MdCheckBoxOutlineBlank onClick={handleTaskCompleted} className='text-2xl cursor-pointer' />}

                    {editActive ? (<div>
                        <input type="text" autoFocus className='text-2xl pl-4 pb-1 mr-2 bg-slate-100 border-neutral-700' value={editTask} onChange={(e) => setEditTask(e.target.value)} />
                        <IoMdSave className='inline text-green-700 text-2xl cursor-pointer' onClick={handleEdit} />
                    </div>) : <h1 className={`text-black text-2xl pl-4 pb-1 ${task.isCompleted ? 'line-through' : ''}`}>{task.task}
                    </h1>}
                </div>
                <div className='flex'>
                    {task.isFavourite ? <FaStar className='text-2xl text-yellow-500 cursor-pointer' onClick={handleTaskFavourite} /> : <FaRegStar onClick={handleTaskFavourite} className='text-2xl cursor-pointer' />}
                    &nbsp; &nbsp;
                   <span><FaEdit onClick={() => {setEditActive(!editActive); setEditTask(task.task);}} className='cursor-pointer text-2xl text-blue-500' /></span>
                    &nbsp; &nbsp;
                    <RiDeleteBinFill onClick={handleDelete} className='text-2xl text-red-500 cursor-pointer' />

                </div>

            </div>
            <hr className="h-[1px] w-[86%]" />
        </div>

    )
}

export default Task