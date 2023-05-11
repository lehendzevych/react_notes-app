import './ListItem.scss';

export const ListItem = () => {
  return (
    <div className="ListItem">
      <h2 className="ListItem__title">Test Note 1</h2>

      <div className="ListItem__details">
        <span className="ListItem__date">12:17 PM</span>

        <p className="ListItem__text">note text....</p>
      </div>
    </div>
  );
};
