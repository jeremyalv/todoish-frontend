import React from 'react';
import TaskCard from './TaskCard';
import { tasks } from '../../data/tasks.js'; 


const TaskFeed = () => {
    return (  
        <div className='flex flex-col items-center'>
            {tasks.map((task, key) => 
                    <TaskCard key={key} task={task} />
            )}
        </div>
    );
}

export default TaskFeed;
