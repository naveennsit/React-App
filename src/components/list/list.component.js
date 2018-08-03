import React from 'react';
import PropTypes from 'prop-types';
import './list.css'

const listItems = (items) => {
    return items.map((i, index) => {
        const k = index + '_' + i;
        return (
            <li key={k}><p>{i}</p></li>
        )
    })
}

const ListComponent = props => {
    return (
        <div className="block__names_ist">
            <ul>
                {listItems(props.names)}
            </ul>

        </div>
    );
};

ListComponent.propTypes = {
    names: PropTypes.array
};

export default ListComponent;
