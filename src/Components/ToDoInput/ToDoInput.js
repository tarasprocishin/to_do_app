import React, { useState } from 'react';
import T from 'prop-types';

export const ToDoInput = ({ onAdd }) => {
    const [value, setInputValue] = useState('');

    const onChange = event => setInputValue(event.target.value);

    const onSubmit = event => {
        event.preventDefault();
        onAdd(value);
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                value={value}
                onChange={onChange}
                placeholder="What needs to be done?"
                type="text"
            />
        </form>
    )
}


ToDoInput.propTypes = {
    onAdd: T.func.isRequired,
};

ToDoInput.defaultProps = {

}