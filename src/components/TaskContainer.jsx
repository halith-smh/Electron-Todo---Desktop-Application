import React, { useEffect } from 'react'
import Task from './Task'
import { useDispatch, useSelector } from 'react-redux'
import { initialLoad } from '../store/TodoSlice';

const TaskContainer = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((store) => store.todos.todos);
    

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("todos"));
        if (data) dispatch(initialLoad(data));
    }, []);

    return (
        <div>
            {tasks.map((task, index) => <Task key={index} task={task} id={index} />)}
        </div>
    )
}

export default TaskContainer