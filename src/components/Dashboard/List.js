function List({ items }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, color: '#333' }}>
      {items.map((item) => (
        <li key={item.id} style={{ margin: '5px 0' }}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default List;
