import './history.css'

const HistoryItem = props => {
  const {eachItem, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const onClickingDeleteButton = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-item-container">
      <div className="time-logo-title-domainUrl-container">
        <p className="time">{timeAccessed}</p>
        <div className="logo-title-domain-container">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <div className="title-domain-container">
            <p className="title">{title}</p>
            <p className="domainUrl">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        className="delete-icon-button"
        onClick={onClickingDeleteButton}
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
