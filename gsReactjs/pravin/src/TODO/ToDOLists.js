import React from 'react';

const ToDOLists = (props) => {

    return ( <
        >
        <
        div className = 'todo_style' >
        <
        i className = "fas fa-times-circle"
        onClick = {
            () => {
                props.onSelect(props.id);
            }
        }

        />  <
        li > { props.text } < /li> <
        /div> <
        />
    );
}
export default ToDOLists;