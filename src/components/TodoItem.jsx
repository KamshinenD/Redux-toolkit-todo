import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleted, deleteItem } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCompleteClick = () => {
		dispatch(toggleCompleted({
			id: id,
			completed: !completed
		}))
	}

	const handleDelete = () => {
		dispatch(deleteItem({ id }))
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' onChange={handleCompleteClick} className='mr-3' checked={completed} style={{ marginRight: '1.5rem' }}></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={handleDelete}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
