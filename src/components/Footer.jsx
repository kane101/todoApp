import React from 'react';
import './Footer.scss';

const Footer = ({ todos, active, setActive, clearCompleted }) => {
	const setFilter = (e) => {
		setActive(e.target.value);
	};
	return (
		<footer className='footer'>
			<div className='footer__count'>{todos.length} items left</div>

			<form className='footer__filter filter' onChange={setFilter}>
				<div className='form-control'>
					<input
						type='radio'
						name='filter__item'
						className='d-none'
						id='all'
						value='all'
						defaultChecked={active === 'all'}
					/>
					<label className='filter__label' htmlFor='all'>
						All
					</label>
				</div>
				<div className='form-control'>
					<input
						type='radio'
						name='filter__item'
						className='d-none'
						id='active'
						value='active'
						defaultChecked={active === 'active'}
					/>
					<label htmlFor='active'>Active</label>
				</div>
				<div className='form-control'>
					<input
						type='radio'
						name='filter__item'
						className='d-none'
						id='completed'
						value='completed'
						defaultChecked={active === 'completed'}
					/>
					<label htmlFor='completed'>Completed</label>
				</div>
			</form>
			<div className='footer__clear-btn' onClick={clearCompleted}>
				Clear Completed
			</div>
		</footer>
	);
};

export default Footer;
