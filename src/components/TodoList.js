
import React from 'react';

const TodoList = ({data, remove}) => {
    const listTasks = data.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove} />)
    });

    return (
        <div>
            {listTasks} 
        </div>
    );
}

export default TodoList;