function SortBar({ onSort }) {
    return (
      <div className="sort-bar">
        <h2>Sort By:</h2>
        <button onClick={() => onSort('health')}>Health</button>
        <button onClick={() => onSort('damage')}>Damage</button>
        <button onClick={() => onSort('armor')}>Armor</button>
      </div>
    );
  }
  
  export default SortBar;