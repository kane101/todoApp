import React from 'react';
import './TodoContainer.scss';

const TodoContainer = ({ children }) => {
	return <div className='container'>{children}</div>;
};

export default TodoContainer;
