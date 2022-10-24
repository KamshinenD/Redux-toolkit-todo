import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
	const todos = useSelector((state) => state.todos)

	return (
		<>
			{todos.length === 0 && <p className='text-center text-danger'>No items on Todo list, please add items</p>}
			< ul className='list-group' >
				{
					todos.map((todo) => (
						<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
					))
				}
			</ul >
		</>
	);
};

export default TodoList;
