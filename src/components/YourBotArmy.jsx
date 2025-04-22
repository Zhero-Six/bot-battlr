function YourBotArmy({ army, onRelease, onDischarge }) {
    return (
      <div className="your-bot-army">
        <h2>Your Bot Army</h2>
        {army.length === 0 ? (
          <p>No bots enlisted yet.</p>
        ) : (
          <div className="bot-grid">
            {army.map((bot) => (
              <BotCard
                key={bot.id}
                bot={bot}
                onClick={() => onRelease(bot.id)}
                onDischarge={() => onDischarge(bot.id)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default YourBotArmy;