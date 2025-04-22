function BotCollection({ bots, onAddToArmy }) {
    return (
      <div className="bot-collection">
        <h2>Available Bots</h2>
        <div className="bot-grid">
          {bots.map((bot) => (
            <BotCard key={bot.id} bot={bot} onClick={() => onAddToArmy(bot)} />
          ))}
        </div>
      </div>
    );
  }
  
  export default BotCollection;
  