function BotSpecs({ bot, onBack, onEnlist }) {
    return (
      <div className="bot-specs">
        <h2>{bot.name}</h2>
        <img src={bot.avatar_url} alt={bot.name} />
        <p>Class: {bot.bot_class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Catchphrase: {bot.catchphrase}</p>
        <p>Created: {new Date(bot.created_at).toLocaleDateString()}</p>
        <p>Updated: {new Date(bot.updated_at).toLocaleDateString()}</p>
        <button className="back" onClick={onBack}>
          Back to List
        </button>
        <button className="enlist" onClick={() => onEnlist(bot)}>
          Enlist
        </button>
      </div>
    );
  }
  
  export default BotSpecs;