import Sidebar from '../components/Sidebar'
import TopNavbar from '../components/TopNavbar'
import VideoCard from '../components/VideoCard'
import './HomePage.css'

const HomePage = () => {
  // Mock data - in real app, fetch from API
  const videos = [
    {
      id: 1,
      author: 'Sarah Chen',
      location: 'Bali, Indonesia',
      date: '2 days ago',
      duration: '5:32',
      caption: 'Exploring the beautiful rice terraces of Ubud! This place is absolutely magical ✨',
      likes: 1240,
      comments: 89,
      itinerary: {
        id: 1,
        title: '7 Days in Bali',
        days: 7,
        destinations: 5
      }
    },
    {
      id: 2,
      author: 'Mike Johnson',
      location: 'Tokyo, Japan',
      date: '3 days ago',
      duration: '8:15',
      caption: 'Cherry blossom season in full bloom! 🌸',
      likes: 2100,
      comments: 156,
      itinerary: {
        id: 2,
        title: 'Tokyo Adventure',
        days: 5,
        destinations: 8
      }
    },
    {
      id: 3,
      author: 'Emma Wilson',
      location: 'Santorini, Greece',
      date: '5 days ago',
      duration: '6:45',
      caption: 'Sunset views that will take your breath away 🌅',
      likes: 3400,
      comments: 234,
      itinerary: {
        id: 3,
        title: 'Greek Islands Tour',
        days: 10,
        destinations: 4
      }
    },
  ]

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
          <div className="feed-container">
            <div className="feed">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
          
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

