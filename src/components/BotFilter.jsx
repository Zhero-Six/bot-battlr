import { useState } from 'react';

function BotFilter({ onFilter }) {
  const botClasses = ['Support', 'Medic', 'Assault', 'Defender', 'Captain', 'Witch'];
  const [selected, setSelected] = useState([]);

  const handleChange = (botClass) => {
    const updatedSelection = selected.includes(botClass)
      ? selected.filter((c) => c !== botClass)
      : [...selected, botClass];
    setSelected(updatedSelection);
    onFilter(updatedSelection);
  };

  return (
    <div className="bot-filter">
      <h2>Filter by Class:</h2>
      {botClasses.map((botClass) => (
        <label key={botClass}>
          <input
            type="checkbox"
            checked={selected.includes(botClass)}
            onChange={() => handleChange(botClass)}
          />
          {botClass}
        </label>
      ))}
    </div>
  );
}

export default BotFilter;