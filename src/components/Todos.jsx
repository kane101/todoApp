import React from 'react';
import Todo from './Todo';
import './Todos.scss';

const Todos = ({ handleDelete, handleCompleted, handleEdit, fileteredTodos }) => {
	return (
		<main className='todos'>
			{fileteredTodos.map((todo) => {
				return (
					<Todo
						todo={todo}
						handleDelete={handleDelete}
						handleCompleted={handleCompleted}
						handleEdit={handleEdit}
						key={todo.id}
					/>
				);
			})}
			{fileteredTodos.length === 0 && <p className='empty'>No Items to Display</p>}
		</main>
	);
};

export default Todos;
