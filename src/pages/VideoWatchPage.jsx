import { useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import TopNavbar from '../components/TopNavbar'
import { Heart, MessageCircle, Share2, Bookmark, MapPin, Calendar } from 'lucide-react'
import './VideoWatchPage.css'

const VideoWatchPage = () => {
  const { id } = useParams()
  
  // Mock data
  const video = {
    id: id,
    author: 'Sarah Chen',
    location: 'Bali, Indonesia',
    date: '2 days ago',
    duration: '5:32',
    caption: 'Exploring the beautiful rice terraces of Ubud! This place is absolutely magical ✨ The views here are incredible and the local culture is so rich. Make sure to visit early in the morning to avoid the crowds!',
    likes: 1240,
    comments: 89,
    views: '12.5k',
    itinerary: {
      id: 1,
      title: '7 Days in Bali',
      days: 7,
      destinations: ['Ubud', 'Seminyak', 'Canggu', 'Nusa Penida', 'Sanur'],
      budget: '$1,200',
      highlights: [
        'Rice terraces tour',
        'Beach hopping',
        'Temple visits',
        'Waterfall adventures'
      ]
    }
  }

  const comments = [
    { id: 1, author: 'TravelLover', text: 'Amazing video! Adding this to my bucket list!', time: '2h ago' },
    { id: 2, author: 'Wanderer', text: 'The rice terraces look incredible!', time: '5h ago' },
    { id: 3, author: 'Explorer', text: 'Great itinerary, thanks for sharing!', time: '1d ago' },
  ]

  return (
    <div className="video-watch-page">
      <Sidebar />
      <div className="watch-main">
        <TopNavbar />
        <div className="watch-content">
          <div className="video-section">
            <div className="video-player-container glass">
              <div className="video-player">
                <div className="video-placeholder-large">
                  <div className="play-icon-large">▶</div>
                </div>
              </div>
              
              <div className="video-info">
                <div className="video-header-info">
                  <div className="author-section">
                    <div className="author-avatar-large">{video.author.charAt(0)}</div>
                    <div>
                      <div className="author-name-large">{video.author}</div>
                      <div className="video-meta">
                        <span><MapPin size={14} /> {video.location}</span>
                        <span><Calendar size={14} /> {video.date}</span>
                        <span>{video.views} views</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="video-actions-large">
                    <button className="action-btn-large">
                      <Heart size={24} />
                      <span>{video.likes}</span>
                    </button>
                    <button className="action-btn-large">
                      <MessageCircle size={24} />
                      <span>{video.comments}</span>
                    </button>
                    <button className="action-btn-large">
                      <Share2 size={24} />
                    </button>
                    <button className="action-btn-large">
                      <Bookmark size={24} />
                    </button>
                  </div>
                </div>
                
                <div className="video-caption-large">
                  <p>{video.caption}</p>
                </div>
              </div>

              <div className="comments-section">
                <h3>Comments ({video.comments})</h3>
                <div className="comment-input-container">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="comment-input"
                  />
                </div>
                <div className="comments-list">
                  {comments.map((comment) => (
                    <div key={comment.id} className="comment-item">
                      <div className="comment-avatar">{comment.author.charAt(0)}</div>
                      <div className="comment-content">
                        <div className="comment-header">
                          <span className="comment-author">{comment.author}</span>
                          <span className="comment-time">{comment.time}</span>
                        </div>
                        <p className="comment-text">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="itinerary-sidebar">
            <div className="itinerary-panel glass">
              <h3>Travel Itinerary</h3>
              <div className="itinerary-header">
                <h4>{video.itinerary.title}</h4>
                <span className="itinerary-days">{video.itinerary.days} days</span>
              </div>
              
              <div className="itinerary-destinations">
                <h5>Destinations</h5>
                <div className="destinations-tags">
                  {video.itinerary.destinations.map((dest, idx) => (
                    <span key={idx} className="destination-tag">{dest}</span>
                  ))}
                </div>
              </div>

              <div className="itinerary-highlights">
                <h5>Highlights</h5>
                <ul>
                  {video.itinerary.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="itinerary-budget">
                <div className="budget-label">Estimated Budget</div>
                <div className="budget-amount">{video.itinerary.budget}</div>
              </div>

              <button className="view-full-itinerary-btn">
                View Full Itinerary →
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default VideoWatchPage

