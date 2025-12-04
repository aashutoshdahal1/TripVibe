import { Link } from 'react-router-dom'
import { Heart, MessageCircle, Share2, MapPin, Calendar } from 'lucide-react'
import './VideoCard.css'

const VideoCard = ({ video }) => {
  return (
    <div className="video-card glass">
      <div className="video-header">
        <div className="video-author">
          <div className="author-avatar">
            {video.author.charAt(0)}
          </div>
          <div>
            <div className="author-name">{video.author}</div>
            <div className="video-location">
              <MapPin size={14} />
              <span>{video.location}</span>
            </div>
          </div>
        </div>
        <div className="video-date">
          <Calendar size={14} />
          <span>{video.date}</span>
        </div>
      </div>
      
      <Link to={`/watch/${video.id}`} className="video-thumbnail">
        <div className="video-placeholder">
          <div className="play-icon">▶</div>
          <div className="video-duration">{video.duration}</div>
        </div>
      </Link>
      
      <div className="video-content">
        <p className="video-caption">{video.caption}</p>
        
        {video.itinerary && (
          <Link to={`/itinerary/${video.itinerary.id}`} className="itinerary-preview">
            <div className="itinerary-preview-content">
              <h4>{video.itinerary.title}</h4>
              <p>{video.itinerary.days} days • {video.itinerary.destinations} destinations</p>
            </div>
            <div className="itinerary-arrow">→</div>
          </Link>
        )}
      </div>
      
      <div className="video-actions">
        <button className="action-btn">
          <Heart size={20} />
          <span>{video.likes}</span>
        </button>
        <button className="action-btn">
          <MessageCircle size={20} />
          <span>{video.comments}</span>
        </button>
        <button className="action-btn">
          <Share2 size={20} />
        </button>
      </div>
    </div>
  )
}

export default VideoCard

