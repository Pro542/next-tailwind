import React from 'react';

interface IProps {
    items: string[];
    title: string;
};

function ListItem ({ items, title }: IProps) {
    return (
    <div className="px-5 py-3 shadow rounded bg-white mt-5 firstOfType:mt-0">
            <h1 className="text-black-500 text-4xl">{title}</h1>
            {
                Array.isArray(items) && items.map(item =>
                    <span key={item} className="text-green-500 firstOfType:ml-0 ml-5">{item}</span>
                )
            }
      </div>
    )
}

export default ListItem;