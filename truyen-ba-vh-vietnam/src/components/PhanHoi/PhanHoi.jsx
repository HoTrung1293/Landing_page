import { useState } from 'react'
import './PhanHoi.css'

const testimonials = [
  {
    id: 'phan-hoi-1',
    name: 'Mai Phương',
    role: 'Người dùng',
    content: 'Mình là sinh viên mới lên Hà Nội nên ít bạn, nhờ web này mà mình tìm được bạn đi ăn đêm cùng, đỡ buồn hẳn. Ngoài ra, nhờ web mà mình biết được mấy quán ăn không có trên Google Maps, toàn do mọi người chia sẻ thì mới biết. “Hanoi Memory Map” là một không gian mang đậm dấu ấn văn hóa của Hà Nội. Trang web đã tái hiện lại những nét đặc biệt một cách sinh động thông qua hình ảnh, câu chuyện và các tư liệu quý giá mà người dùng chia sẻ lên. Người xem có thể cảm nhận được vẻ đẹp Hà Nội cũng như sự thay đổi của thành phố theo thời gian.',
    rating: 5,
    avatar: '👩‍🎓'
  },
  {
    id: 'phan-hoi-2',
    name: 'Hoàng Tùng',
    role: 'Người dùng',
    content: 'Mình là người cực kỳ kỹ tính trong việc ăn uống, nhất là ở Hà Nội vì rất dễ gặp cảnh nhìn ảnh một đằng, vị một nẻo. Và sau một tuần trải nghiệm thử theo các gợi ý từ HANOI MEMORY MAP để đi ăn quanh khu Hoàn Kiếm và Cầu Giấy, mình cảm thấy rất ưng và bây giờ thay vì mình lướt tiktok 2-3 tiếng để tìm chỗ đi chơi thì chỉ cần 10p đọc gợi ý trên MAP thoii.\n\nĐiều mình ưng nhất là app cập nhật được cả những quán vỉa hè, hàng bún riêu trong ngõ nhỏ mà Google Maps đôi khi không chính xác. Giá cả được người dùng cập nhật liên tục nên không lo bị chặt chém hay bất ngờ khi thanh toán. Điểm trừ nhẹ là một số quán đang sửa chữa hoặc chuyển địa điểm nhưng app chưa cập nhật kịp trạng thái "đóng cửa tạm thời". Hy vọng đội ngũ admin sẽ tối ưu thêm phần này để những người đi ăn xa như mình không bị hụt hẫng.',
    rating: 5,
    avatar: '👨‍🦱'
  },
  {
    id: 'phan-hoi-3',
    name: 'Thu Trang',
    role: 'Người dùng',
    content: 'Sau khi trải nghiệm Hanoi Memory Map, mình thực sự ấn tượng vì đây không chỉ là một bản đồ số mà còn là một bản đồ cảm xúc. Các địa điểm trở nên sống động hơn nhờ những câu chuyện và ký ức rất chân thật từ người dùng, tạo cảm giác kết nối rất gần gũi.\n\nTuy nhiên, mình nghĩ dự án vẫn có một vài điểm có thể cải thiện. Ví dụ như giao diện cần được thiết kế đơn giản hơn để người dùng dễ làm quen, nội dung ký ức nên được phân loại rõ ràng và tăng cường thêm các tính năng đảm bảo an toàn khi kết nối với người lạ thì sẽ giúp người dùng yên tâm hơn. Dù vậy, đây vẫn là một ý tưởng rất sáng tạo và giàu tính nhân văn của nhóm đến từ Trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội, và mình tin rằng nếu tiếp tục phát triển, dự án sẽ mang lại giá trị rất lớn cho cộng đồng.',
    rating: 5,
    avatar: '👩'
  },
  {
    id: 'phan-hoi-4',
    name: 'Đức Trí',
    role: 'Người dùng',
    content: 'Mình là người khá thích khám phá Hà Nội theo kiểu “lang thang không kế hoạch”, nhưng nhiều lúc lại không biết nên đi đâu cho mới mẻ. Từ khi biết đến Hanoi Memory Map, mình cảm giác như có thêm một người bạn dẫn đường vậy. Những địa điểm trên web không chỉ là chỗ ăn uống hay check-in, mà còn có câu chuyện phía sau nên mình thấy rất thú vị và muốn trải nghiệm ngay. Điểm mình thích nhất là phần chia sẻ trải nghiệm cá nhân của người dùng, đọc rất chân thật và gần gũi, kiểu như được nghe bạn bè kể chuyện vậy. Tuy nhiên, mình nghĩ nếu web có thêm bộ lọc theo mood (ví dụ: chill, thư giãn, hoài niệm,……) thì sẽ tiện hơn cho những người như mình khi muốn tìm địa điểm theo cảm xúc.',
    rating: 5,
    avatar: '👨‍🎓'
  },
  {
    id: 'phan-hoi-8',
    name: 'Hoàng Yến',
    role: 'Người dùng',
    content: 'Mình biết đến Hanoi Memory Map qua bạn bè giới thiệu và thử dùng khi muốn tìm chỗ đi chơi cuối tuần. Ấn tượng đầu tiên là giao diện khá dễ nhìn và nội dung rất “đậm chất Hà Nội”, từ quán nhỏ trong ngõ cho đến những góc phố quen mà trước giờ mình không để ý hay thậm chí trên Google Maps còn chưa định vị được. Mình đặc biệt thích cách dự án lưu giữ ký ức của từng người dùng, khiến mỗi địa điểm không còn đơn thuần là một vị trí trên bản đồ mà trở thành một phần của câu chuyện. Tuy vậy, mình thấy tốc độ tải đôi lúc còn hơi chậm và một số bài viết chưa có hình ảnh minh họa rõ ràng. Nếu cải thiện thêm phần này thì trải nghiệm sẽ trọn vẹn hơn rất nhiều.',
    rating: 5,
    avatar: '👩‍🎤'
  },
  {
    id: 'phan-hoi-5',
    name: 'Bảo Trâm',
    role: 'Người dùng',
    content: 'Thay vì tìm những quán cafe sang chảnh, mình thử mở Hanoi Memory Map để xem Hà Nội có gì \'lạ mà quen\'. Giao diện web mang lại cảm giác rất gần gũi, điểm cộng lớn nhất là dự án đã biến những vị trí địa lý khô khan thành những câu chuyện sống động từ chính trải nghiệm của người dùng trước đó. Có những góc phố mình đi qua mỗi ngày nhưng nhờ web mới biết ở đó có nhiều hoạt động thú vị. Tuy nhiên, đôi lúc việc chờ đợi trang load dữ liệu khiến cảm hứng khám phá của mình bị ngắt quãng một chút. Một dự án rất tiềm năng nếu được chăm chút kỹ hơn về phần kỹ thuật. Đây chắc chắn sẽ là \'cuốn sổ tay\' gối đầu giường của bất cứ ai muốn trải nghiệm phố phường Hà Nội.',
    rating: 4,
    avatar: '👱‍♀️'
  },
  {
    id: 'phan-hoi-6',
    name: 'Lê Hưng',
    role: 'Người dùng',
    content: 'Mới lên Hà Nội nên mình khá “lạc”, nhưng từ khi dùng Hanoi Memory Map thì đỡ hẳn. Tìm được nhiều quán ngon trong ngõ mà Google Maps không có, info cũng khá thật nên đi ăn yên tâm hơn. Chỉ tiếc là vài quán chưa update kịp trạng thái, mong web cải thiện thêm.\n\nHanoi Memory Map không chỉ là bản đồ mà giống như “bản đồ ký ức”. Mỗi địa điểm đều có câu chuyện riêng nên trải nghiệm thú vị hơn hẳn. Nội dung ổn, nhưng nếu giao diện gọn hơn và có thêm filter theo mood thì sẽ xịn hơn nữa.',
    rating: 5,
    avatar: '🧑'
  },
  {
    id: 'phan-hoi-7',
    name: 'Thảo My',
    role: 'Người dùng',
    content: 'Mình thấy dự án Hanoi Memory Map rất hữu ích vì không chỉ giúp tìm địa điểm mà còn cho phép lưu giữ những kỷ niệm và cảm xúc cá nhân. Điều mình thích nhất là ý tưởng kết nối những người có cùng sở thích hoặc muốn khám phá thành phố cùng nhau. Theo mình, nền tảng này sẽ đặc biệt phù hợp với sinh viên mới lên Hà Nội, giúp họ cảm thấy bớt cô đơn và dễ hòa nhập hơn với môi trường sống mới.\n\nMình đánh giá cao ý tưởng xây dựng một bản đồ không chỉ để chỉ đường mà còn để chia sẻ trải nghiệm cá nhân. Tính năng ghim “memory pins” giúp mỗi địa điểm trở nên ý nghĩa hơn vì có thể lưu lại những khoảnh khắc đáng nhớ. Nếu được phát triển rộng rãi, mình nghĩ dự án này có thể tạo ra một cộng đồng tích cực, nơi mọi người vừa khám phá thành phố vừa kết nối với nhau.',
    rating: 5,
    avatar: '👧🏻'
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
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', issue: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [expandedId, setExpandedId] = useState(null)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ tên'
    if (!formData.email.trim()) newErrors.email = 'Vui lòng nhập email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email không hợp lệ'
    if (formData.phone && !/^[0-9]{9,11}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Số điện thoại không hợp lệ'
    if (!formData.issue) newErrors.issue = 'Vui lòng chọn vấn đề gặp phải'
    if (!formData.message.trim()) newErrors.message = 'Vui lòng nhập lời nhắn'
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
              <div 
                key={t.id} 
                className={`phan-hoi__card ${expandedId === t.id ? 'is-expanded' : ''}`}
                onClick={() => setExpandedId(expandedId === t.id ? null : t.id)}
                style={{ cursor: 'pointer' }}
                title="Nhấn để xem chi tiết / thu gọn"
              >
                <div className="phan-hoi__card-header">
                  <span className="phan-hoi__avatar" aria-hidden="true">{t.avatar}</span>
                  <div>
                    <h3 className="phan-hoi__name">{t.name}</h3>
                    <p className="phan-hoi__role">{t.role}</p>
                  </div>
                </div>
                <blockquote className="phan-hoi__quote">
                  <span className="phan-hoi__quote-mark">"</span>
                  {t.content.split('\n').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br/>
                    </span>
                  ))}
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
                <h3 className="phan-hoi__form-title">Để lại phản hồi tại đây</h3>
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
                  <label htmlFor="phan-hoi-phone" className="phan-hoi__label">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phan-hoi-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0912 345 678"
                    className={`phan-hoi__input ${errors.phone ? 'error' : ''}`}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <span id="phone-error" className="phan-hoi__error" role="alert">{errors.phone}</span>
                  )}
                </div>

                <div className="phan-hoi__field">
                  <label htmlFor="phan-hoi-issue" className="phan-hoi__label">
                    Vấn đề gặp phải <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="phan-hoi-issue"
                    name="issue"
                    value={formData.issue}
                    onChange={handleChange}
                    className={`phan-hoi__input phan-hoi__select ${errors.issue ? 'error' : ''}`}
                    aria-describedby={errors.issue ? 'issue-error' : undefined}
                    aria-invalid={!!errors.issue}
                    required
                  >
                    <option value="">-- Chọn vấn đề --</option>
                    <option value="noi-dung">Nội dung thông tin</option>
                    <option value="du-an">Dự án văn hóa</option>
                    <option value="thanh-vien">Thành viên nhóm</option>
                    <option value="hop-tac">Hợp tác &amp; liên kết</option>
                    <option value="khac">Vấn đề khác</option>
                  </select>
                  {errors.issue && (
                    <span id="issue-error" className="phan-hoi__error" role="alert">{errors.issue}</span>
                  )}
                </div>

                <div className="phan-hoi__field">
                  <label htmlFor="phan-hoi-message" className="phan-hoi__label">
                    Để lại lời nhắn cho chúng tôi <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="phan-hoi-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Nhập lời nhắn của bạn tại đây..."
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
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', issue: '', message: '' }) }}
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
