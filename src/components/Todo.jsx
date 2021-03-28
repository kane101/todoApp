import React from 'react';
import { FaCheck, FaEdit, FaTimesCircle } from 'react-icons/fa';
import './Todo.scss';

const Todo = ({ todo, handleDelete, handleCompleted, handleEdit }) => {
	return (
		<div className={`todo${todo.completed ? ' completed' : ''}`}>
			<button className='check' onClick={() => handleCompleted(todo)}>
				<FaCheck size='1.4rem' />
			</button>
			<p>{todo.value}</p>
			<div className='buttons'>
				<button className='button modify' onClick={(e) => handleEdit(e, todo)}>
					<FaEdit size='2.3rem' />
				</button>
				<button className='button' onClick={() => handleDelete(todo)}>
					<FaTimesCircle size='2.3rem' />
				</button>
			</div>
		</div>
	);
};

export default Todo;
