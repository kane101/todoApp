import React from 'react';
import './Form.scss';

const Form = ({ onSubmit, onInputChange, input }) => {
	return (
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
	);
};

export default Form;
