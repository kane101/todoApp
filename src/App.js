import './styles/App.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/_base.scss';
import Banner from './components/Banner';
import Header from './components/Header';
import Form from './components/Form';
import Todos from './components/Todos';
import Footer from './components/Footer';
import TodoContainer from './components/TodoContainer';

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
			if (todoItem.id === editTodo.id) {
				return { ...todoItem, value: input.trim() };
			}
			return todoItem;
		});
		document.querySelectorAll('.modify').forEach((item) => item.classList.remove('active'));
		setTodos(newTodos);
		setEditTodo(null);
	};

	const handleEdit = (e, todo) => {
		todos.map((item) => {
			if (item.id === todo.id) {
				setInput(item.value);
				setEditTodo({ ...item });
			}
			return item;
		});
		document.querySelectorAll('.modify').forEach((item) => item.classList.remove('active'));
		e.currentTarget.classList.add('active');
	};

	const handleCompleted = (todo) => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) return { ...item, completed: !item.completed };
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
				<Header toggleTheme={toggleTheme} lightTheme={lightTheme} />
				<Form onSubmit={onSubmit} onInputChange={onInputChange} input={input} />
				<Todos
					active={active}
					todos={todos}
					handleDelete={handleDelete}
					handleCompleted={handleCompleted}
					handleEdit={handleEdit}
				/>
				<Footer
					todos={todos}
					active={active}
					setActive={setActive}
					clearCompleted={clearCompleted}
				/>
			</TodoContainer>
		</div>
	);
}

export default App;
