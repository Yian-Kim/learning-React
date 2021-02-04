import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemovCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo }) => {
    const { text, checked } = todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })}>
                {checked ? <MdCheckBox /> : <mdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemovCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;