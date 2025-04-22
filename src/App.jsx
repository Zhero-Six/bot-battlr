import { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './styles.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch bots on mount
  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await axios.get('http://localhost:8001/bots');
        console.log('Fetched bots:', response.data);
        setBots(response.data);
      } catch (err) {
        console.error('Error fetching bots:', err);
      }
    };
    fetchBots();
  }, []);

  // Add bot to army
  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      console.log('Adding to army:', bot);
      setArmy([...army, bot]);
    }
  };

  // Release bot from army
  const releaseFromArmy = (botId) => {
    console.log('Releasing bot:', botId);
    setArmy(army.filter((b) => b.id !== botId));
  };

  // Discharge bot (delete from backend and army)
  const dischargeBot = async (botId) => {
    try {
      await axios.delete(`http://localhost:8001/bots/${botId}`);
      console.log('Discharged bot:', botId);
      setArmy(army.filter((b) => b.id !== botId));
      setBots(bots.filter((b) => b.id !== botId));
    } catch (err) {
      console.error('Error discharging bot:', err);
    }
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} onRelease={releaseFromArmy} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onAddToArmy={addToArmy} />
    </div>
  );
}

export default App;