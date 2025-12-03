import Sidebar from '../components/Sidebar'
import TopNavbar from '../components/TopNavbar'
import './HomePage.css'

const HomePage = () => {
  const trendingDestinations = [
    { name: 'Bali', image: '🏝️', posts: '12.5k' },
    { name: 'Tokyo', image: '🏯', posts: '8.9k' },
    { name: 'Paris', image: '🗼', posts: '15.2k' },
    { name: 'Santorini', image: '🌅', posts: '6.7k' },
  ]

  const suggestedCreators = [
    { name: 'Alex Travels', followers: '125k', avatar: 'A' },
    { name: 'Wanderlust', followers: '89k', avatar: 'W' },
    { name: 'Globe Trotter', followers: '234k', avatar: 'G' },
  ]

  return (
    <div className="home-page">
      <Sidebar />
      <div className="home-main">
        <TopNavbar />
        <div className="home-content">
          <aside className="right-sidebar">
            <div className="sidebar-section glass">
              <h3>Trending Destinations</h3>
              <div className="destinations-list">
                {trendingDestinations.map((dest, idx) => (
                  <div key={idx} className="destination-item">
                    <div className="destination-emoji">{dest.image}</div>
                    <div className="destination-info">
                      <div className="destination-name">{dest.name}</div>
                      <div className="destination-posts">{dest.posts} posts</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section glass">
              <h3>Suggested Creators</h3>
              <div className="creators-list">
                {suggestedCreators.map((creator, idx) => (
                  <div key={idx} className="creator-item">
                    <div className="creator-avatar">{creator.avatar}</div>
                    <div className="creator-info">
                      <div className="creator-name">{creator.name}</div>
                      <div className="creator-followers">{creator.followers} followers</div>
                    </div>
                    <button className="follow-btn">Follow</button>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default HomePage

