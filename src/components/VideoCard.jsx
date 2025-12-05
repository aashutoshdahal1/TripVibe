import { Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import { Heart, MessageCircle, Share2, MapPin, Calendar } from 'lucide-react'
import './VideoCard.css'

const VideoCard = ({ video }) => {
  const videoRef = useRef(null)
  const cardRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting)
          
          if (entry.isIntersecting && videoRef.current) {
            // Play video when card is in view
            videoRef.current.play().catch(err => {
              console.log('Autoplay prevented:', err)
            })
          } else if (videoRef.current) {
            // Pause video when card is out of view
            videoRef.current.pause()
          }
        })
      },
      {
        threshold: 0.6, // Trigger when 60% of the card is visible
        rootMargin: '0px'
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div ref={cardRef} className="video-card glass">
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
      
      <div className="video-thumbnail">
        {video.videoUrl ? (
          <div className="video-thumbnail-container">
            <video
              ref={videoRef}
              src={video.videoUrl}
              className="video-thumbnail-video"
              loop
              muted
              playsInline
              poster={video.thumbnail}
            />
            <Link to={`/watch/${video.id}`} className="video-overlay-link">
              {!isInView && (
                <div className="video-thumbnail-overlay">
                  <div className="play-icon">▶</div>
                </div>
              )}
            </Link>
            <div className="video-duration">{video.duration}</div>
          </div>
        ) : video.thumbnail ? (
          <Link to={`/watch/${video.id}`} className="video-thumbnail-link">
            <div className="video-thumbnail-container">
              <img 
                src={video.thumbnail} 
                alt={video.caption || 'Video thumbnail'}
                className="video-thumbnail-image"
              />
              <div className="video-thumbnail-overlay">
                <div className="play-icon">▶</div>
              </div>
              <div className="video-duration">{video.duration}</div>
            </div>
          </Link>
        ) : (
          <Link to={`/watch/${video.id}`} className="video-thumbnail-link">
            <div className="video-placeholder">
              <div className="play-icon">▶</div>
              <div className="video-duration">{video.duration}</div>
            </div>
          </Link>
        )}
      </div>
      
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

