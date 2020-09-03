import React from 'react';

function ListItem (props) {
    return (
    <div className="px-5 py-3 shadow rounded bg-white mt-5 firstOfType:mt-0">
            <h1 className="text-black-500 text-4xl">{props.title}</h1>
            {
                Array.isArray(props.items) && props.items.map((item) =>
                    <span key={item} className="text-green-500 firstOfType:ml-0 ml-5">{item}</span>
                )
            }
      </div>
    )
}

export default ListItem;