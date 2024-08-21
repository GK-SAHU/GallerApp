import { Component } from "react";
import BroswerHistory from "./components/BroswerHistory";

import "./App.css";

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: "07:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/instagram-img.png",
    title: "Instagram",
    domainUrl: "instagram.com",
  },
  {
    id: 1,
    timeAccessed: "05:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/twitter-img.png",
    title: "Twitter. It’s what’s happening / Twitter",
    domainUrl: "twitter.com",
  },
  {
    id: 2,
    timeAccessed: "04:35 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/facebook-img.png",
    title: "Facebook – log in or sign up",
    domainUrl: "facebook.com",
  },
  {
    id: 3,
    timeAccessed: "04:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/linkedin-img.png",
    title: "LinkedIn: Log In or Sign Up",
    domainUrl: "linkedin.com",
  },
  {
    id: 4,
    timeAccessed: "04:00 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/hashnode-img.png",
    title: "Hashnode: Everything you need to start blogging as a developer!",
    domainUrl: "hashnode.com",
  },
  {
    id: 5,
    timeAccessed: "03:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/github-img.png",
    title: "GitHub: Where the world builds software · GitHub",
    domainUrl: "github.com",
  },

  {
    id: 6,
    timeAccessed: "02:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/react-img.png",
    title: "React – A JavaScript library for building user interfaces",
    domainUrl: "reactjs.org",
  },
  {
    id: 7,
    timeAccessed: "01:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png",
    title: "Stack Overflow - Where Developers Learn, Share, & Build Careers",
    domainUrl: "stackoverflow.com",
  },

  {
    id: 8,
    timeAccessed: "09:25 AM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/gmail-img.png",
    title: "Gmail",
    domainUrl: "mail.google.com",
  },
  {
    id: 9,
    timeAccessed: "09:00 AM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/google-img.png",
    title: "Google",
    domainUrl: "google.com",
  },
];

class App extends Component {
  state = {
    searchUser: "",
    historyList: initialHistoryList,
  };

  deletehistoryItem = (value) => {
    const { historyList } = this.state;
    const result = historyList.filter((eachid) => eachid.id !== value);
    this.setState({ historyList: result });
  };

  onChangeInput = (event) => {
    this.setState({ searchUser: event.target.value });
  };

  render() {
    const { searchUser, historyList } = this.state;
    const searchResult = historyList.filter((eachitem) =>
      eachitem.title.toLowerCase().includes(searchUser.toLowerCase())
    );
    return (
      <div className="app-container">
        <div className="nav-container">
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="App logo"
              className="app-logo"
            />
            <div className="user-search-container">
              <div className="search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="Search"
                  className="search-icon"
                />
              </div>
              <input
                type="search"
                className="search-input"
                value={searchUser}
                onChange={this.onChangeInput}
                placeholder="Search history"
              />
            </div>
          </div>
          <div className="history-list-container">
            {searchResult.length > 0 ? (
              <ul className="history-list">
                {searchResult.map((eachList) => (
                  <BroswerHistory
                    key={eachList.id}
                    searchResult={eachList}
                    deletehistoryItem={this.deletehistoryItem}
                  />
                ))}
              </ul>
            ) : (
              <p className="Empty-history-message">
                There is no history to show
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
