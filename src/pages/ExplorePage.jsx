import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import TopNavbar from '../components/TopNavbar'
import { Search, Filter, MapPin } from 'lucide-react'
import './ExplorePage.css'

const ExplorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania', 'Adventure', 'Beach', 'City']

  const destinations = [
    { id: 1, name: 'Bali, Indonesia', image: '🏝️', posts: '12.5k', videos: 450 },
    { id: 2, name: 'Tokyo, Japan', image: '🏯', posts: '8.9k', videos: 320 },
    { id: 3, name: 'Paris, France', image: '🗼', posts: '15.2k', videos: 680 },
    { id: 4, name: 'Santorini, Greece', image: '🌅', posts: '6.7k', videos: 240 },
    { id: 5, name: 'New York, USA', image: '🗽', posts: '9.3k', videos: 380 },
    { id: 6, name: 'Dubai, UAE', image: '🏙️', posts: '7.1k', videos: 290 },
    { id: 7, name: 'Barcelona, Spain', image: '🏛️', posts: '5.8k', videos: 210 },
    { id: 8, name: 'Sydney, Australia', image: '🌉', posts: '4.9k', videos: 180 },
  ]

  const videos = [
    { id: 1, thumbnail: '🎬', title: 'Sunset in Bali', author: 'Sarah Chen', location: 'Bali', views: '12k' },
    { id: 2, thumbnail: '🎬', title: 'Tokyo Streets', author: 'Mike Johnson', location: 'Tokyo', views: '8k' },
    { id: 3, thumbnail: '🎬', title: 'Paris Eiffel Tower', author: 'Emma Wilson', location: 'Paris', views: '15k' },
    { id: 4, thumbnail: '🎬', title: 'Santorini Views', author: 'Alex Travels', location: 'Santorini', views: '6k' },
    { id: 5, thumbnail: '🎬', title: 'NYC Skyline', author: 'Wanderlust', location: 'New York', views: '9k' },
    { id: 6, thumbnail: '🎬', title: 'Dubai Desert', author: 'Globe Trotter', location: 'Dubai', views: '7k' },
    { id: 7, thumbnail: '🎬', title: 'Barcelona Architecture', author: 'TravelLover', location: 'Barcelona', views: '5k' },
    { id: 8, thumbnail: '🎬', title: 'Sydney Opera', author: 'Explorer', location: 'Sydney', views: '4k' },
    { id: 9, thumbnail: '🎬', title: 'Bali Rice Terraces', author: 'Sarah Chen', location: 'Bali', views: '11k' },
    { id: 10, thumbnail: '🎬', title: 'Tokyo Cherry Blossoms', author: 'Mike Johnson', location: 'Tokyo', views: '7k' },
    { id: 11, thumbnail: '🎬', title: 'Paris Cafes', author: 'Emma Wilson', location: 'Paris', views: '13k' },
    { id: 12, thumbnail: '🎬', title: 'Santorini Sunset', author: 'Alex Travels', location: 'Santorini', views: '5k' },
  ]

  return (
    <div className="explore-page">
      <Sidebar />
      <div className="explore-main">
        <TopNavbar />
        <div className="explore-content">
          <div className="explore-header glass">
            <div className="search-section">
              <div className="search-bar-large">
                <Search size={24} />
                <input
                  type="text"
                  placeholder="Search destinations, creators, or hashtags..."
                  className="search-input-large"
                />
              </div>
            </div>

            <div className="category-chips">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-chip ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="explore-body">
            <div className="explore-main-content">
              <div className="destinations-grid">
                {destinations.map((dest) => (
                  <div key={dest.id} className="destination-card glass">
                    <div className="destination-card-image">
                      <div className="destination-emoji-large">{dest.image}</div>
                    </div>
                    <div className="destination-card-content">
                      <div className="destination-card-header">
                        <h3>{dest.name}</h3>
                        <MapPin size={16} />
                      </div>
                      <div className="destination-card-stats">
                        <span>{dest.posts} posts</span>
                        <span>•</span>
                        <span>{dest.videos} videos</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="videos-section">
                <h2>Popular Videos</h2>
                <div className="videos-masonry">
                  {videos.map((video) => (
                    <div key={video.id} className="video-preview-card glass">
                      <div className="video-preview-thumbnail">
                        <div className="video-preview-placeholder">
                          <div className="play-icon-small">▶</div>
                        </div>
                        <div className="video-preview-duration">3:45</div>
                      </div>
                      <div className="video-preview-info">
                        <h4>{video.title}</h4>
                        <div className="video-preview-meta">
                          <span>{video.author}</span>
                          <span>•</span>
                          <span>{video.location}</span>
                        </div>
                        <div className="video-preview-views">{video.views} views</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="explore-sidebar">
              <div className="filters-panel glass">
                <div className="filters-header">
                  <Filter size={20} />
                  <h3>Filters</h3>
                </div>
                
                <div className="filter-section">
                  <h4>Duration</h4>
                  <div className="filter-options">
                    <label><input type="checkbox" /> 1-3 days</label>
                    <label><input type="checkbox" /> 4-7 days</label>
                    <label><input type="checkbox" /> 8+ days</label>
                  </div>
                </div>

                <div className="filter-section">
                  <h4>Budget</h4>
                  <div className="filter-options">
                    <label><input type="checkbox" /> Under $500</label>
                    <label><input type="checkbox" /> $500 - $1,500</label>
                    <label><input type="checkbox" /> $1,500+</label>
                  </div>
                </div>

                <div className="filter-section">
                  <h4>Travel Type</h4>
                  <div className="filter-options">
                    <label><input type="checkbox" /> Solo</label>
                    <label><input type="checkbox" /> Couple</label>
                    <label><input type="checkbox" /> Family</label>
                    <label><input type="checkbox" /> Group</label>
                  </div>
                </div>

                <button className="apply-filters-btn">Apply Filters</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExplorePage

