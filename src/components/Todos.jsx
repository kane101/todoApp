import React from 'react';
import Todo from './Todo';
import './Todos.scss';

const Todos = ({ active, todos, handleDelete, handleCompleted, handleEdit }) => {
	return (
		<main className='todos'>
			{active === 'all' &&
				todos.map((todo) => (
					<Todo
						todo={todo}
						handleDelete={handleDelete}
						handleCompleted={handleCompleted}
						handleEdit={handleEdit}
						key={todo.id}
					/>
				))}
			{active === 'active' &&
				todos
					.filter((todo) => !todo.completed)
					.map((filteredTodo) => (
						<Todo
							todo={filteredTodo}
							handleDelete={handleDelete}
							handleCompleted={handleCompleted}
							handleEdit={handleEdit}
							key={filteredTodo.id}
						/>
					))}
			{active === 'completed' &&
				todos
					.filter((todo) => todo.completed)
					.map((filteredTodo) => (
						<Todo
							todo={filteredTodo}
							handleDelete={handleDelete}
							handleCompleted={handleCompleted}
							handleEdit={handleEdit}
							key={filteredTodo.id}
						/>
					))}
		</main>
	);
};

export default Todos;
