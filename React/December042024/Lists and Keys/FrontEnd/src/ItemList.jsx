const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        <li key={item.id}>{item.name}</li>
      })}
    </ul>
  )
}

export default ItemList;