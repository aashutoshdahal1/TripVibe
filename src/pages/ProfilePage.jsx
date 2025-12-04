import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import TopNavbar from '../components/TopNavbar'
import { MapPin, Calendar, Users, Heart, MessageCircle, Share2 } from 'lucide-react'
import './ProfilePage.css'

const ProfilePage = () => {
  const { username } = useParams()
  const [activeTab, setActiveTab] = useState('videos')

  // Mock data
  const profile = {
    username: username || 'johndoe',
    name: 'John Doe',
    bio: 'Travel enthusiast exploring the world one destination at a time ✈️',
    location: 'San Francisco, CA',
    joined: 'January 2023',
    coverPhoto: '🌍',
    avatar: 'JD',
    stats: {
      trips: 24,
      followers: '12.5k',
      following: 342,
      countries: 18
    }
  }

  const videos = [
    { id: 1, thumbnail: '🎬', title: 'Bali Adventure', location: 'Bali', views: '12k', likes: 1.2 },
    { id: 2, thumbnail: '🎬', title: 'Tokyo Streets', location: 'Tokyo', views: '8k', likes: 0.8 },
    { id: 3, thumbnail: '🎬', title: 'Paris Eiffel', location: 'Paris', views: '15k', likes: 1.5 },
    { id: 4, thumbnail: '🎬', title: 'Santorini Sunset', location: 'Santorini', views: '6k', likes: 0.6 },
    { id: 5, thumbnail: '🎬', title: 'NYC Skyline', location: 'New York', views: '9k', likes: 0.9 },
    { id: 6, thumbnail: '🎬', title: 'Dubai Desert', location: 'Dubai', views: '7k', likes: 0.7 },
  ]

  const itineraries = [
    { id: 1, title: '7 Days in Bali', location: 'Bali', days: 7, budget: '$1,200' },
    { id: 2, title: 'Tokyo Adventure', location: 'Tokyo', days: 5, budget: '$1,500' },
    { id: 3, title: 'Paris City Tour', location: 'Paris', days: 4, budget: '$1,800' },
  ]

  const tabs = [
    { id: 'videos', label: 'Videos', count: videos.length },
    { id: 'itineraries', label: 'Itineraries', count: itineraries.length },
    { id: 'saved', label: 'Saved', count: 12 },
    { id: 'likes', label: 'Likes', count: 45 },
  ]

  return (
    <div className="profile-page">
      <Sidebar />
      <div className="profile-main">
        <TopNavbar />
        <div className="profile-content">
          <div className="profile-hero glass">
            <div className="cover-photo">
              <div className="cover-placeholder">{profile.coverPhoto}</div>
            </div>
            <div className="profile-info">
              <div className="profile-avatar-large">{profile.avatar}</div>
              <div className="profile-details">
                <h1>{profile.name}</h1>
                <p className="profile-username">@{profile.username}</p>
                <p className="profile-bio">{profile.bio}</p>
                <div className="profile-meta">
                  <span><MapPin size={16} /> {profile.location}</span>
                  <span><Calendar size={16} /> Joined {profile.joined}</span>
                </div>
                <button className="edit-profile-btn">Edit Profile</button>
              </div>
            </div>
          </div>

          <div className="profile-stats glass">
            <div className="stat-item">
              <div className="stat-value">{profile.stats.trips}</div>
              <div className="stat-label">Trips</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{profile.stats.followers}</div>
              <div className="stat-label">Followers</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{profile.stats.following}</div>
              <div className="stat-label">Following</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{profile.stats.countries}</div>
              <div className="stat-label">Countries Visited</div>
            </div>
          </div>

          <div className="profile-tabs glass">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                <span className="tab-count">({tab.count})</span>
              </button>
            ))}
          </div>

          <div className="profile-content-area">
            {activeTab === 'videos' && (
              <div className="content-grid">
                {videos.map((video) => (
                  <div key={video.id} className="content-card glass">
                    <div className="content-thumbnail">
                      <div className="thumbnail-placeholder">{video.thumbnail}</div>
                      <div className="thumbnail-overlay">
                        <div className="thumbnail-stats">
                          <span><Heart size={16} /> {video.likes}k</span>
                          <span>{video.views} views</span>
                        </div>
                      </div>
                    </div>
                    <div className="content-info">
                      <h4>{video.title}</h4>
                      <p><MapPin size={14} /> {video.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'itineraries' && (
              <div className="content-grid">
                {itineraries.map((itinerary) => (
                  <div key={itinerary.id} className="content-card glass itinerary-card">
                    <div className="itinerary-card-header">
                      <h4>{itinerary.title}</h4>
                      <p><MapPin size={14} /> {itinerary.location}</p>
                    </div>
                    <div className="itinerary-card-details">
                      <span>{itinerary.days} days</span>
                      <span>•</span>
                      <span>{itinerary.budget}</span>
                    </div>
                    <button className="view-itinerary-btn">View Itinerary →</button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="content-grid">
                {videos.slice(0, 4).map((video) => (
                  <div key={video.id} className="content-card glass">
                    <div className="content-thumbnail">
                      <div className="thumbnail-placeholder">{video.thumbnail}</div>
                    </div>
                    <div className="content-info">
                      <h4>{video.title}</h4>
                      <p><MapPin size={14} /> {video.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'likes' && (
              <div className="content-grid">
                {videos.slice(0, 6).map((video) => (
                  <div key={video.id} className="content-card glass">
                    <div className="content-thumbnail">
                      <div className="thumbnail-placeholder">{video.thumbnail}</div>
                    </div>
                    <div className="content-info">
                      <h4>{video.title}</h4>
                      <p><MapPin size={14} /> {video.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

