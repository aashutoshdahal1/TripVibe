import { useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import TopNavbar from '../components/TopNavbar'
import { MapPin, Calendar, DollarSign, Download, Clock } from 'lucide-react'
import './ItineraryPage.css'

const ItineraryPage = () => {
  const { id } = useParams()
  
  // Mock data
  const itinerary = {
    id: id,
    title: '7 Days in Bali',
    location: 'Bali, Indonesia',
    duration: '7 days',
    budget: '$1,200',
    author: 'Sarah Chen',
    days: [
      {
        day: 1,
        title: 'Arrival & Ubud Exploration',
        date: 'March 15, 2024',
        activities: [
          { time: '9:00 AM', activity: 'Arrive at Ngurah Rai Airport', location: 'Denpasar' },
          { time: '11:00 AM', activity: 'Check-in at hotel', location: 'Ubud' },
          { time: '2:00 PM', activity: 'Visit Tegalalang Rice Terraces', location: 'Ubud' },
          { time: '5:00 PM', activity: 'Sunset at Campuhan Ridge Walk', location: 'Ubud' },
        ],
        expenses: [
          { item: 'Airport Transfer', amount: '$25' },
          { item: 'Hotel (Night 1)', amount: '$80' },
          { item: 'Lunch & Dinner', amount: '$35' },
        ]
      },
      {
        day: 2,
        title: 'Temples & Waterfalls',
        date: 'March 16, 2024',
        activities: [
          { time: '8:00 AM', activity: 'Visit Tirta Empul Temple', location: 'Tampaksiring' },
          { time: '11:00 AM', activity: 'Explore Tegenungan Waterfall', location: 'Gianyar' },
          { time: '2:00 PM', activity: 'Lunch at local warung', location: 'Ubud' },
          { time: '4:00 PM', activity: 'Monkey Forest Sanctuary', location: 'Ubud' },
        ],
        expenses: [
          { item: 'Temple Entry', amount: '$15' },
          { item: 'Waterfall Entry', amount: '$5' },
          { item: 'Meals', amount: '$30' },
        ]
      },
      {
        day: 3,
        title: 'Beach Day in Seminyak',
        date: 'March 17, 2024',
        activities: [
          { time: '9:00 AM', activity: 'Transfer to Seminyak', location: 'Seminyak' },
          { time: '11:00 AM', activity: 'Beach time at Seminyak Beach', location: 'Seminyak' },
          { time: '2:00 PM', activity: 'Lunch at beachfront restaurant', location: 'Seminyak' },
          { time: '5:00 PM', activity: 'Sunset drinks at La Plancha', location: 'Seminyak' },
        ],
        expenses: [
          { item: 'Transfer', amount: '$20' },
          { item: 'Hotel (Night 3)', amount: '$90' },
          { item: 'Meals & Drinks', amount: '$50' },
        ]
      },
    ],
    totalExpenses: [
      { category: 'Accommodation', amount: '$500' },
      { category: 'Transportation', amount: '$150' },
      { category: 'Food & Drinks', amount: '$350' },
      { category: 'Activities', amount: '$200' },
    ]
  }

  return (
    <div className="itinerary-page">
      <Sidebar />
      <div className="itinerary-main">
        <TopNavbar />
        <div className="itinerary-content">
          <div className="itinerary-header-section glass">
            <div className="itinerary-hero">
              <div>
                <h1>{itinerary.title}</h1>
                <div className="itinerary-meta">
                  <span><MapPin size={18} /> {itinerary.location}</span>
                  <span><Calendar size={18} /> {itinerary.duration}</span>
                  <span><DollarSign size={18} /> {itinerary.budget}</span>
                </div>
                <div className="itinerary-author">
                  By <strong>{itinerary.author}</strong>
                </div>
              </div>
              <button className="download-btn">
                <Download size={20} />
                Download Itinerary
              </button>
            </div>
          </div>

          <div className="itinerary-body">
            <div className="timeline-section">
              {itinerary.days.map((day, idx) => (
                <div key={idx} className="day-card glass">
                  <div className="day-header">
                    <div className="day-number">
                      <span>Day {day.day}</span>
                    </div>
                    <div className="day-info">
                      <h3>{day.title}</h3>
                      <p className="day-date">{day.date}</p>
                    </div>
                  </div>

                  <div className="activities-section">
                    <h4>Activities</h4>
                    <div className="activities-list">
                      {day.activities.map((activity, actIdx) => (
                        <div key={actIdx} className="activity-item">
                          <div className="activity-time">
                            <Clock size={16} />
                            <span>{activity.time}</span>
                          </div>
                          <div className="activity-content">
                            <div className="activity-name">{activity.activity}</div>
                            <div className="activity-location">
                              <MapPin size={14} />
                              <span>{activity.location}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="day-expenses">
                    <h4>Day Expenses</h4>
                    <div className="expenses-list">
                      {day.expenses.map((expense, expIdx) => (
                        <div key={expIdx} className="expense-item">
                          <span>{expense.item}</span>
                          <span className="expense-amount">{expense.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="itinerary-sidebar">
              <div className="map-preview glass">
                <h3>Route Map</h3>
                <div className="map-placeholder">
                  <MapPin size={48} />
                  <p>Interactive Map Preview</p>
                  <p className="map-note">Google Maps / Mapbox integration</p>
                </div>
              </div>

              <div className="expense-breakdown glass">
                <h3>Total Expense Breakdown</h3>
                <div className="expense-categories">
                  {itinerary.totalExpenses.map((expense, idx) => (
                    <div key={idx} className="expense-category">
                      <div className="category-info">
                        <span className="category-name">{expense.category}</span>
                        <span className="category-amount">{expense.amount}</span>
                      </div>
                      <div className="expense-bar">
                        <div 
                          className="expense-fill"
                          style={{ width: `${(parseInt(expense.amount.replace('$', '')) / 12) * 10}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="total-budget">
                  <span>Total Budget</span>
                  <span className="total-amount">{itinerary.budget}</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItineraryPage

