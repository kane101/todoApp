import './styles/App.scss';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Sun from './images/icon-sun.svg';
import Moon from './images/icon-moon.svg';
import Banner from './components/Banner';
import TodoContainer from './components/TodoContainer';
import Todo from './components/Todo';

function App() {
	const [lightTheme, setLightTheme] = useState(false);
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState([]);
	const [editTodo, setEditTodo] = useState(null);
	const [active, setActive] = useState('all');

	const toggleTheme = () => setLightTheme(!lightTheme);
	const onInputChange = (event) => setInput(event.target.value);

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!input || /^\s+$/.test(input)) return;
		if (!editTodo) {
			setTodos([...todos, { id: uuidv4(), value: input, completed: false }]);
		} else {
			editTodos(todos);
		}
		setInput('');
	};

	const editTodos = (todoss) => {
		const newTodos = todoss.map((todoItem) => {
			if (todoItem.id == editTodo.id) {
				return { ...todoItem, value: input.trim() };
			}
			return todoItem;
		});
		document
			.querySelectorAll('.edit')
			.forEach((item) => item.classList.remove('active'));
		setTodos(newTodos);
		setEditTodo(null);
	};

	const handleEdit = (e, todo) => {
		todos.map((item) => {
			if (item.id === todo.id) {
				setInput(item.value);
				setEditTodo({ ...item });
			}
		});
		document
			.querySelectorAll('.edit')
			.forEach((item) => item.classList.remove('active'));
		e.currentTarget.classList.add('active');
	};

	const handleCompleted = (todo) => {
		setTodos(
			todos.map((item) => {
				if (item.id == todo.id) {
					item = { ...item, completed: !item.completed };
				}
				return item;
			})
		);
	};

	const handleDelete = ({ id }) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const clearCompleted = () => {
		setTodos(todos.filter((todo) => !todo.completed));
	};

	return (
		<div className={`App${lightTheme ? ' lightTheme' : ''}`}>
			<Banner />
			<TodoContainer>
				<header className='header' role='banner'>
					<h1 className='header__logo'>TODO</h1>
					<div className='header__img' onClick={() => toggleTheme()}>
						<img src={lightTheme ? Moon : Sun} alt='light theme' />
					</div>
				</header>

				<form className='form' onSubmit={(e) => onSubmit(e)}>
					<button className='form__submit'>+</button>
					<input
						className='form__input'
						placeholder='Create a new todo…'
						type='text'
						onChange={onInputChange}
						value={input}
					/>
				</form>

				<main className='todos'>
					{active === 'all' &&
						todos.map((todo) => (
							<Todo
								todo={todo}
								handleDelete={handleDelete}
								handleCompleted={handleCompleted}
								handleEdit={handleEdit}
								setEditTodo={setEditTodo}
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
									setEditTodo={setEditTodo}
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
									setEditTodo={setEditTodo}
									key={filteredTodo.id}
								/>
							))}
				</main>

				<footer className='footer'>
					<div className='footer__count'>{todos.length} items left</div>
					<ul className='footer__filter'>
						<li
							className={`footer__filter-item ${active === 'all' && 'active'}`}
							onClick={() => setActive('all')}>
							All
						</li>
						<li
							className={`footer__filter-item ${
								active === 'active' && 'active'
							}`}
							onClick={() => setActive('active')}>
							Active
						</li>
						<li
							className={`footer__filter-item ${
								active === 'completed' && 'active'
							}`}
							onClick={() => setActive('completed')}>
							Completed
						</li>
					</ul>
					<div className='footer__clear-btn' onClick={clearCompleted}>
						Clear Completed
					</div>
				</footer>
			</TodoContainer>
		</div>
	);
}

export default App;
