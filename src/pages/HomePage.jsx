import Sidebar from '../components/Sidebar'
import TopNavbar from '../components/TopNavbar'
import VideoCard from '../components/VideoCard'
import './HomePage.css'

const HomePage = () => {
  const videos = [
    {
      id: 1,
      author: 'Sarah Chen',
      location: 'Forest, Costa Rica',
      date: '2 days ago',
      duration: '5:32',
      caption: 'Exploring the beautiful lush green forests! This place is absolutely magical ✨ Nature at its finest!',
      likes: 1240,
      comments: 89,
      videoUrl: 'https://www.pexels.com/download/video/6394054/',
      thumbnail: 'https://images.pexels.com/videos/3045163/pexels-photo-3045163.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1280',
      itinerary: {
        id: 1,
        title: '7 Days in Costa Rica',
        days: 7,
        destinations: 5
      }
    },
    {
      id: 2,
      author: 'Mike Johnson',
      location: 'Mountain Range, Switzerland',
      date: '3 days ago',
      duration: '8:15',
      caption: 'Breathtaking mountain views covered in snow! 🏔️ The Alps never disappoint!',
      likes: 2100,
      comments: 156,
      videoUrl: 'https://www.pexels.com/download/video/2330730/',
      thumbnail: 'https://images.pexels.com/videos/3044149/pexels-photo-3044149.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1280',
      itinerary: {
        id: 2,
        title: 'Alps Adventure',
        days: 5,
        destinations: 8
      }
    },
    {
      id: 3,
      author: 'Emma Wilson',
      location: 'Ocean Coast, Hawaii',
      date: '5 days ago',
      duration: '6:45',
      caption: 'Crystal clear waters and pristine beaches 🌊 Paradise on Earth!',
      likes: 3400,
      comments: 234,
      videoUrl: 'https://www.pexels.com/download/video/30923404/',
      thumbnail: 'https://images.pexels.com/videos/2491284/pexels-photo-2491284.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1280',
      itinerary: {
        id: 3,
        title: 'Hawaiian Paradise',
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

