import { useState } from 'react'
import './PhanHoi.css'

const testimonials = [
  {
    id: 'phan-hoi-1',
    name: 'Sinh viên ULIS',
    role: 'Sinh viên năm 1',
    content: 'Dự án giúp tôi hiểu sâu hơn về văn hóa Việt Nam. Các hoạt động rất phong phú và thú vị, giúp tôi kết nối với di sản dân tộc một cách gần gũi.',
    rating: 5,
    avatar: '👩‍🎓'
  },
  {
    id: 'phan-hoi-2',
    name: 'Bạn sinh viên',
    role: 'Sinh viên năm 2',
    content: 'Chương trình Food Tour rất ấn tượng! Tôi được trải nghiệm và tìm hiểu về ẩm thực ba miền một cách thực tế và sinh động.',
    rating: 5,
    avatar: '🧑‍🎓'
  },
  {
    id: 'phan-hoi-3',
    name: 'Nguyễn Bảo Châu',
    role: 'Giảng viên hướng dẫn',
    content: 'Nhóm sinh viên đã thực hiện dự án với tinh thần tâm huyết và sáng tạo. Đây là một đóng góp có ý nghĩa cho việc bảo tồn và phát huy văn hóa dân tộc.',
    rating: 5,
    avatar: '👨‍🏫'
  }
]

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} sao trên 5`}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'star star--filled' : 'star'} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export default function PhanHoi() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ tên'
    if (!formData.email.trim()) newErrors.email = 'Vui lòng nhập email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email không hợp lệ'
    if (!formData.message.trim()) newErrors.message = 'Vui lòng nhập nội dung phản hồi'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
    setErrors({})
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }))
    }
  }

  return (
    <section id="phan-hoi" className="phan-hoi" aria-labelledby="phan-hoi-title">
      <div className="container">
        {/* Header */}
        <div className="phan-hoi__header">
          <p className="section-subtitle">✦ Đánh giá ✦</p>
          <h2 id="phan-hoi-title" className="section-title">Phản hồi</h2>
          <div className="divider divider-center" />
          <p className="section-description" style={{ margin: '0 auto', textAlign: 'center' }}>
            Ý kiến của bạn giúp chúng tôi cải thiện và phát triển tốt hơn
          </p>
        </div>

        <div className="phan-hoi__layout">
          {/* Testimonials */}
          <div className="phan-hoi__testimonials">
            {testimonials.map((t) => (
              <div key={t.id} id={t.id} className="phan-hoi__card">
                <div className="phan-hoi__card-top">
                  <div className="phan-hoi__avatar">{t.avatar}</div>
                  <div>
                    <p className="phan-hoi__name">{t.name}</p>
                    <p className="phan-hoi__role">{t.role}</p>
                  </div>
                  <StarRating rating={t.rating} />
                </div>
                <blockquote className="phan-hoi__quote">
                  <span className="phan-hoi__quote-mark">"</span>
                  {t.content}
                </blockquote>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="phan-hoi__form-col">
            {!submitted ? (
              <form
                id="phan-hoi-form"
                className="phan-hoi__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Form gửi phản hồi"
              >
                <h3 className="phan-hoi__form-title">Gửi phản hồi của bạn</h3>
                <p className="phan-hoi__form-sub">Chia sẻ trải nghiệm và ý kiến với chúng tôi</p>

                <div className="phan-hoi__field">
                  <label htmlFor="phan-hoi-name" className="phan-hoi__label">
                    Họ và tên <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="phan-hoi-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nguyễn Văn A"
                    className={`phan-hoi__input ${errors.name ? 'error' : ''}`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                    required
                  />
                  {errors.name && (
                    <span id="name-error" className="phan-hoi__error" role="alert">{errors.name}</span>
                  )}
                </div>

                <div className="phan-hoi__field">
                  <label htmlFor="phan-hoi-email" className="phan-hoi__label">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="phan-hoi-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className={`phan-hoi__input ${errors.email ? 'error' : ''}`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    required
                  />
                  {errors.email && (
                    <span id="email-error" className="phan-hoi__error" role="alert">{errors.email}</span>
                  )}
                </div>

                <div className="phan-hoi__field">
                  <label htmlFor="phan-hoi-message" className="phan-hoi__label">
                    Nội dung phản hồi <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="phan-hoi-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Chia sẻ ý kiến, đề xuất hoặc cảm nhận của bạn..."
                    rows={5}
                    className={`phan-hoi__textarea ${errors.message ? 'error' : ''}`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                    required
                  />
                  {errors.message && (
                    <span id="message-error" className="phan-hoi__error" role="alert">{errors.message}</span>
                  )}
                </div>

                <button id="phan-hoi-submit-btn" type="submit" className="btn btn-primary phan-hoi__submit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Gửi phản hồi
                </button>
              </form>
            ) : (
              <div className="phan-hoi__success" role="status" aria-live="polite">
                <div className="phan-hoi__success-icon">✅</div>
                <h3>Cảm ơn bạn!</h3>
                <p>Phản hồi của bạn đã được gửi thành công. Chúng tôi sẽ xem xét và phản hồi sớm nhất có thể.</p>
                <button
                  id="phan-hoi-reset-btn"
                  className="btn btn-outline"
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }) }}
                >
                  Gửi phản hồi khác
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
