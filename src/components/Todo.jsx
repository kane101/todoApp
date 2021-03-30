import React from 'react';
import { FaCheck, FaEdit, FaTimes } from 'react-icons/fa';
import './Todo.scss';

const Todo = ({ todo, handleDelete, handleCompleted, handleEdit }) => {
	return (
		<div className={`${todo.completed ? 'todo completed' : 'todo'}`}>
			<button className='check' onClick={() => handleCompleted(todo)}>
				<FaCheck size='1rem' />
			</button>
			<p>{todo.value}</p>
			<div className='buttons'>
				<button className='button modify' onClick={(e) => handleEdit(e, todo)}>
					<FaEdit size='2.3rem' />
				</button>
				<button className='button' onClick={() => handleDelete(todo)}>
					<FaTimes size='2.3rem' />
				</button>
			</div>
		</div>
	);
};

export default Todo;
