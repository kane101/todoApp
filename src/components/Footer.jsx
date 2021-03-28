import React from 'react';
import './Footer.scss';

const Footer = ({ todos, active, setActive, clearCompleted }) => {
	return (
		<footer className='footer'>
			<div className='footer__count'>{todos.length} items left</div>
			<ul className='footer__filter'>
				<li
					className={`footer__filter-item ${active === 'all' && 'active'}`}
					onClick={() => setActive('all')}>
					All
				</li>
				<li
					className={`footer__filter-item ${active === 'active' && 'active'}`}
					onClick={() => setActive('active')}>
					Active
				</li>
				<li
					className={`footer__filter-item ${active === 'completed' && 'active'}`}
					onClick={() => setActive('completed')}>
					Completed
				</li>
			</ul>
			<div className='footer__clear-btn' onClick={clearCompleted}>
				Clear Completed
			</div>
		</footer>
	);
};

export default Footer;
