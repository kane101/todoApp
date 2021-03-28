import React from 'react';
import Check from '../images/icon-check.svg';
import './Todo.scss';

const Todo = ({ todo, handleDelete, handleCompleted, handleEdit }) => {
	return (
		<div className={`todo${todo.completed ? ' completed' : ''}`}>
			<button className='check' onClick={() => handleCompleted(todo)}>
				<svg
					className='check__icon'
					xmlns='http://www.w3.org/2000/svg'
					width='11'
					height='9'>
					<path
						fill='none'
						stroke='#FFF'
						stroke-width='2'
						d='M1 4.304L3.696 7l6-6'
					/>
				</svg>
			</button>
			<p>{todo.value}</p>
			<div className='buttons'>
				<button className='edit' onClick={(e) => handleEdit(e, todo)}>
					<svg
						className='edit__icon'
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'>
						<path
							className='edit__icon-path'
							d='M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-20h7.362c4.156 0 2.638 6 2.638 6s2.313-.635 4.067-.133l1.952-1.976c-2.214-2.807-5.762-5.891-7.83-5.891h-10.189v24h20v-7.98l-2 2.025z'
						/>
					</svg>
				</button>
				<button className='cross' onClick={() => handleDelete(todo)}>
					<svg
						className='cross__icon'
						xmlns='http://www.w3.org/2000/svg'
						width='18'
						height='18'>
						<path
							className='cross__icon-path'
							fill-rule='evenodd'
							d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Todo;
