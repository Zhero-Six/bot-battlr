import { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import BotFilter from './components/BotFilter';
import './styles.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [filteredBots, setFilteredBots] = useState([]);
  const [sortKey, setSortKey] = useState(null);
  const [selectedClasses, setSelectedClasses] = useState([]);

  // Fetch bots on mount
  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await axios.get('http://localhost:8001/bots');
        setBots(response.data);
        setFilteredBots(response.data);
      } catch (err) {
        console.error('Error fetching bots:', err);
      }
    };
    fetchBots();
  }, []);

  // Apply sorting and filtering
  useEffect(() => {
    let updatedBots = [...bots];

    // Apply class filters
    if (selectedClasses.length > 0) {
      updatedBots = updatedBots.filter((bot) =>
        selectedClasses.includes(bot.bot_class)
      );
    }

    // Apply sorting
    if (sortKey) {
      updatedBots.sort((a, b) => b[sortKey] - a[sortKey]);
    }

    setFilteredBots(updatedBots);
  }, [bots, sortKey, selectedClasses]);

  // View bot specs
  const viewBotSpecs = (bot) => {
    setSelectedBot(bot);
  };

  // Go back to bot collection
  const goBack = () => {
    setSelectedBot(null);
  };

  // Add bot to army
  const addToArmy = (bot) => {
    // Check if a bot of the same class already exists
    const classExists = army.some((b) => b.bot_class === bot.bot_class);
    if (classExists) {
      alert(`You already have a ${bot.bot_class} bot in your army!`);
      return;
    }

    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
      // Remove bot from BotCollection
      setBots(bots.filter((b) => b.id !== bot.id));
      setFilteredBots(filteredBots.filter((b) => b.id !== bot.id));
      setSelectedBot(null); // Go back to collection view
    }
  };

  // Release bot from army
  const releaseFromArmy = (botId) => {
    const bot = army.find((b) => b.id === botId);
    setArmy(army.filter((b) => b.id !== botId));
    // Add bot back to BotCollection
    setBots([...bots, bot]);
  };

  // Discharge bot (delete from backend and army)
  const dischargeBot = async (botId) => {
    try {
      await axios.delete(`http://localhost:8001/bots/${botId}`);
      setArmy(army.filter((b) => b.id !== botId));
      setBots(bots.filter((b) => b.id !== botId));
      setFilteredBots(filteredBots.filter((b) => b.id !== botId));
    } catch (err) {
      console.error('Error discharging bot:', err);
    }
  };

  // Handle sorting
  const handleSort = (key) => {
    setSortKey(key);
  };

  // Handle filtering
  const handleFilter = (classes) => {
    setSelectedClasses(classes);
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} onRelease={releaseFromArmy} onDischarge={dischargeBot} />
      <SortBar onSort={handleSort} />
      <BotFilter onFilter={handleFilter} />
      {selectedBot ? (
        <BotSpecs bot={selectedBot} onBack={goBack} onEnlist={addToArmy} />
      ) : (
        <BotCollection bots={filteredBots} onViewBot={viewBotSpecs} />
      )}
    </div>
  );
}

export default App;