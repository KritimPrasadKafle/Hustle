import React from 'react';

const ItemList = ({ items }) => {
  return (
    <div style={{ backgroundColor: 'red', color: 'white' }}>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return <ItemList items={items} />;
};

export default App;