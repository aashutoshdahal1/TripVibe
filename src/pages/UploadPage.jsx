import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import TopNavbar from '../components/TopNavbar'
import { Upload, X, Plus, Trash2, Save } from 'lucide-react'
import './UploadPage.css'

const UploadPage = () => {
  const [step, setStep] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [expenses, setExpenses] = useState([
    { id: 1, item: 'Flight', amount: '', category: 'Transportation' },
    { id: 2, item: 'Hotel', amount: '', category: 'Accommodation' },
  ])
  const [itineraryDays, setItineraryDays] = useState([
    { id: 1, day: 1, activities: [] }
  ])

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    // Handle file upload
  }

  const addExpense = () => {
    setExpenses([...expenses, { id: Date.now(), item: '', amount: '', category: 'Other' }])
  }

  const removeExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id))
  }

  const addDay = () => {
    setItineraryDays([...itineraryDays, { id: Date.now(), day: itineraryDays.length + 1, activities: [] }])
  }

  const steps = [
    { number: 1, title: 'Upload Video', active: step === 1 },
    { number: 2, title: 'Details', active: step === 2 },
    { number: 3, title: 'Itinerary', active: step === 3 },
    { number: 4, title: 'Expenses', active: step === 4 },
    { number: 5, title: 'Review', active: step === 5 },
  ]

  return (
    <div className="upload-page">
      <Sidebar />
      <div className="upload-main">
        <TopNavbar showSearch={false} />
        <div className="upload-content">
          <div className="upload-header glass">
            <h1>Upload Your Travel Video</h1>
            <p>Share your adventures with the TripVibe community</p>
          </div>

          <div className="upload-wizard">
            <div className="wizard-steps">
              {steps.map((s) => (
                <div key={s.number} className={`wizard-step ${s.active ? 'active' : ''} ${step > s.number ? 'completed' : ''}`}>
                  <div className="step-number">{s.number}</div>
                  <div className="step-title">{s.title}</div>
                </div>
              ))}
            </div>

            <div className="wizard-content">
              {step === 1 && (
                <div className="upload-step glass">
                  <h2>Upload Your Video</h2>
                  <div
                    className={`upload-dropzone ${isDragging ? 'dragging' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <Upload size={48} />
                    <p>Drag and drop your video here</p>
                    <p className="dropzone-hint">or click to browse</p>
                    <input type="file" accept="video/*" className="file-input" />
                  </div>
                  <div className="upload-requirements">
                    <p>Supported formats: MP4, MOV, AVI</p>
                    <p>Max file size: 500MB</p>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="upload-step glass">
                  <h2>Video Details</h2>
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" placeholder="Enter video title" className="input" />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      placeholder="Tell us about your travel experience..."
                      className="textarea"
                      rows="6"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input type="text" placeholder="Where did you travel?" className="input" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Date</label>
                      <input type="date" className="input" />
                    </div>
                    <div className="form-group">
                      <label>Duration</label>
                      <input type="text" placeholder="e.g., 5 days" className="input" />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="upload-step glass">
                  <h2>Build Your Itinerary</h2>
                  <div className="itinerary-builder">
                    {itineraryDays.map((day) => (
                      <div key={day.id} className="itinerary-day-card">
                        <div className="day-header-builder">
                          <h3>Day {day.day}</h3>
                          <button className="remove-day-btn">
                            <X size={18} />
                          </button>
                        </div>
                        <div className="form-group">
                          <label>Date</label>
                          <input type="date" className="input" />
                        </div>
                        <div className="form-group">
                          <label>Activities</label>
                          <textarea
                            placeholder="List your activities for this day..."
                            className="textarea"
                            rows="4"
                          ></textarea>
                        </div>
                      </div>
                    ))}
                    <button className="add-day-btn" onClick={addDay}>
                      <Plus size={20} />
                      Add Another Day
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="upload-step glass">
                  <h2>Expense Breakdown</h2>
                  <div className="expenses-table">
                    <div className="table-header">
                      <div>Item</div>
                      <div>Category</div>
                      <div>Amount</div>
                      <div></div>
                    </div>
                    {expenses.map((expense) => (
                      <div key={expense.id} className="table-row">
                        <input
                          type="text"
                          placeholder="Item name"
                          className="table-input"
                          defaultValue={expense.item}
                        />
                        <select className="table-select" defaultValue={expense.category}>
                          <option>Transportation</option>
                          <option>Accommodation</option>
                          <option>Food</option>
                          <option>Activities</option>
                          <option>Other</option>
                        </select>
                        <input
                          type="text"
                          placeholder="$0.00"
                          className="table-input"
                          defaultValue={expense.amount}
                        />
                        <button
                          className="remove-btn"
                          onClick={() => removeExpense(expense.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                    <button className="add-expense-btn" onClick={addExpense}>
                      <Plus size={18} />
                      Add Expense
                    </button>
                  </div>
                  <div className="total-expenses">
                    <span>Total Estimated Budget:</span>
                    <span className="total-amount">$0.00</span>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="upload-step glass">
                  <h2>Review & Publish</h2>
                  <div className="review-section">
                    <p>Review all your information before publishing</p>
                    <div className="review-actions">
                      <button className="btn btn-secondary">Save as Draft</button>
                      <button className="btn btn-primary">Publish Video</button>
                    </div>
                  </div>
                </div>
              )}

              <div className="wizard-actions">
                {step > 1 && (
                  <button className="btn btn-secondary" onClick={() => setStep(step - 1)}>
                    Previous
                  </button>
                )}
                {step < 5 && (
                  <button className="btn btn-primary" onClick={() => setStep(step + 1)}>
                    Next
                  </button>
                )}
                {step === 5 && (
                  <button className="btn btn-primary">
                    <Save size={18} />
                    Publish
                  </button>
                )}
              </div>
            </div>
          </div>

          <aside className="upload-sidebar">
            <div className="auto-save-panel glass">
              <div className="auto-save-status">
                <div className="status-indicator"></div>
                <span>Auto-saving...</span>
              </div>
              <div className="save-actions">
                <button className="save-draft-btn">
                  <Save size={18} />
                  Save Draft
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default UploadPage

