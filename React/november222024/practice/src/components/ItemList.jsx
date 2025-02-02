import React from 'react'

const ItemList = ({ items = [] }) => {
  console.log(items);

  return (
    <div >
      <h1>Check</h1>
      <ul style={{ border: '1px solid red' }}>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}

      </ul>

    </div>
  )
}

export const Check = () => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]
  console.log(items);

  return <ItemList items={items} />
}

export default ItemList

