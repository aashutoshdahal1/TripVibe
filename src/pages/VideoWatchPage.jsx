import { useParams } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import TopNavbar from '../components/TopNavbar'
import { Heart, MessageCircle, Share2, Bookmark, MapPin, Calendar } from 'lucide-react'
import './VideoWatchPage.css'

const VideoWatchPage = () => {
  const { id } = useParams()
  const videoRef = useRef(null)
  
  // Mock data - matching HomePage videos
  const videoData = {
    '1': {
      id: 1,
      author: 'Sarah Chen',
      location: 'Forest, Costa Rica',
      date: '2 days ago',
      duration: '5:32',
      caption: 'Exploring the beautiful lush green forests! This place is absolutely magical ✨ Nature at its finest! The views here are incredible and the biodiversity is so rich. Make sure to visit early in the morning to see the wildlife!',
      likes: 1240,
      comments: 89,
      views: '12.5k',
      videoUrl: 'https://www.pexels.com/download/video/6394054/',
      thumbnail: 'https://images.pexels.com/videos/3045163/pexels-photo-3045163.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1280',
      itinerary: {
        id: 1,
        title: '7 Days in Costa Rica',
        days: 7,
        destinations: ['Monteverde', 'Arenal', 'Manuel Antonio', 'Tortuguero', 'La Fortuna'],
        budget: '$1,200',
        highlights: [
          'Rainforest tours',
          'Wildlife watching',
          'Waterfall visits',
          'Cloud forest hikes'
        ]
      }
    },
    '2': {
      id: 2,
      author: 'Mike Johnson',
      location: 'Mountain Range, Switzerland',
      date: '3 days ago',
      duration: '8:15',
      caption: 'Breathtaking mountain views covered in snow! 🏔️ The Alps never disappoint!',
      likes: 2100,
      comments: 156,
      views: '18.2k',
      videoUrl: 'https://www.pexels.com/download/video/6394054/',
      thumbnail: 'https://images.pexels.com/videos/3044149/pexels-photo-3044149.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1280',
      itinerary: {
        id: 2,
        title: 'Alps Adventure',
        days: 5,
        destinations: ['Zermatt', 'Interlaken', 'Jungfrau', 'Grindelwald', 'Lucerne'],
        budget: '$1,800',
        highlights: [
          'Mountain hiking',
          'Skiing',
          'Cable car rides',
          'Alpine villages'
        ]
      }
    },
    '3': {
      id: 3,
      author: 'Emma Wilson',
      location: 'Ocean Coast, Hawaii',
      date: '5 days ago',
      duration: '6:45',
      caption: 'Crystal clear waters and pristine beaches 🌊 Paradise on Earth!',
      likes: 3400,
      comments: 234,
      views: '25.7k',
      videoUrl: 'https://www.pexels.com/download/video/6394054/',
      thumbnail: 'https://images.pexels.com/videos/2491284/pexels-photo-2491284.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1280',
      itinerary: {
        id: 3,
        title: 'Hawaiian Paradise',
        days: 10,
        destinations: ['Maui', 'Oahu', 'Big Island', 'Kauai'],
        budget: '$2,500',
        highlights: [
          'Beach hopping',
          'Snorkeling',
          'Waterfall hikes',
          'Sunset viewing'
        ]
      }
    }
  }
  
  const video = videoData[id] || videoData['1']

  const comments = [
    { id: 1, author: 'TravelLover', text: 'Amazing video! Adding this to my bucket list!', time: '2h ago' },
    { id: 2, author: 'Wanderer', text: 'The rice terraces look incredible!', time: '5h ago' },
    { id: 3, author: 'Explorer', text: 'Great itinerary, thanks for sharing!', time: '1d ago' },
  ]

  // Autoplay video when page is focused
  useEffect(() => {
    const handleFocus = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(err => {
          console.log('Autoplay prevented:', err)
        })
      }
    }

    const handleBlur = () => {
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }

    // Play when component mounts
    handleFocus()

    // Add event listeners for window focus/blur
    window.addEventListener('focus', handleFocus)
    window.addEventListener('blur', handleBlur)

    return () => {
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('blur', handleBlur)
    }
  }, [id])

  return (
    <div className="video-watch-page">
      <Sidebar />
      <div className="watch-main">
        <TopNavbar />
        <div className="watch-content">
          <div className="video-section">
            <div className="video-player-container glass">
              <div className="video-player">
                {video.videoUrl ? (
                  <video 
                    ref={videoRef}
                    src={video.videoUrl} 
                    controls 
                    className="video-player-element"
                    poster={video.thumbnail}
                    autoPlay
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="video-placeholder-large">
                    <div className="play-icon-large">▶</div>
                  </div>
                )}
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

