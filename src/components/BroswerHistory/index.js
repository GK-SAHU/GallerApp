import './index.css'

const BroswerHistory = (props) => {
  const { searchResult, deletehistoryItem } = props;
  const { timeAccessed, logoUrl, title, domainUrl, id } = searchResult;

  const clickButton = () => {
    deletehistoryItem(id);
  };

  return (
    <li className="li-container">
      <div className="item-container">
        <p className="timeAccessed ">{timeAccessed}</p>
        <div className="user-search-container">
          <div className="user-container ">
            <img src={logoUrl} alt={title} />
            <p className="title">{title}</p>
            <p className="domainUrl">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="delate-container">
        <button type="text" className="delete-button " onClick={clickButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="browser-delete-icon"
          />
        </button>
      </div>
    </li>
  );
};
export default BroswerHistory;
