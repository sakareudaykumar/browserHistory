import {Component} from 'react'
import HistoryItem from '../History/history'
import './browserHistory.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {searchInput: '', historyList: initialHistoryList}

  onChangingSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistoryItem = id => {
    const {historyList} = this.state
    const remainingList = historyList.filter(eachObj => eachObj.id !== id)
    this.setState({historyList: remainingList})
  }

  render() {
    const {searchInput, historyList} = this.state

    const searchResults = historyList.filter(eachObj =>
      eachObj.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let paraElement
    if (searchResults.length === 0) {
      paraElement = (
        <div className="empty-message-container">
          <p className="empty-history-message">There is no history to show</p>
        </div>
      )
    }

    return (
      <div className="main-container">
        <div className="search-input-container">
          <div className="history-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="history-logo"
              alt="app logo"
            />
          </div>
          <div className="search-icon-input-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search-icon"
                alt="search"
              />
            </div>
            <input type="search" onChange={this.onChangingSearchInput} />
          </div>
        </div>
        <div className="ul-container">
          <ul className="history-items-container">
            {searchResults.map(eachObj => (
              <HistoryItem
                eachItem={eachObj}
                deleteHistoryItem={this.deleteHistoryItem}
                key={eachObj.id}
              />
            ))}
          </ul>
          {paraElement}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
