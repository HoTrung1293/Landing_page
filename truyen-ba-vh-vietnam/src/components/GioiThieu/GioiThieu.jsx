import { useState } from 'react'
import './GioiThieu.css'
import videoGioiThieu from '../../assets/video_gioi_thieu.mov'

export default function GioiThieu() {
  const [showVideoFallback, setShowVideoFallback] = useState(false)

  return (
    <section id="gioi-thieu" className="gioi-thieu" aria-labelledby="gioi-thieu-title">
      <div className="container">
        {/* Section Header */}
        <div className="gioi-thieu__header">
          <p className="section-subtitle">✦ Về chúng tôi ✦</p>
          <h2 id="gioi-thieu-title" className="section-title">Giới thiệu</h2>
          <div className="divider divider-center" />
        </div>

        {/* Main Content */}
        <div className="gioi-thieu__content">
          {/* Left - Video */}
          <div className="gioi-thieu__image-col">
            <div className="gioi-thieu__image-wrapper">
              {showVideoFallback ? (
                <img
                  src="https://static.wixstatic.com/media/994ba1_7df14d1a5b3040cd9a6749b1d3cb3015f000.jpg/v1/fill/w_490,h_273,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/994ba1_7df14d1a5b3040cd9a6749b1d3cb3015f000.jpg"
                  alt="Truyền bá văn hóa Việt Nam"
                  className="gioi-thieu__image"
                  loading="lazy"
                />
              ) : (
                <video
                  className="gioi-thieu__image"
                  src={videoGioiThieu}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Truyền bá văn hóa Việt Nam"
                  onError={() => setShowVideoFallback(true)}
                />
              )}
              <div className="gioi-thieu__image-decor" aria-hidden="true" />
            </div>

            {/* Quote box */}
            <div className="gioi-thieu__quote">
              <span className="gioi-thieu__quote-mark">"</span>
              <p>Mở bản đồ, ghim kỷ niệm - Cùng Hanoi's Memory Map viết tiếp hành trình của riêng bạn.</p>
            </div>
          </div>

          {/* Right - Text */}
          <div className="gioi-thieu__text-col">
            <article className="gioi-thieu__article">
              <p className="gioi-thieu__lead">
                Ghim ký ức nối tâm hồn
              </p>

              <div className="gioi-thieu__blocks">
                <div className="gioi-thieu__block">
                  <div className="gioi-thieu__block-icon" aria-hidden="true">🌏</div>
                  <div>
                    <h3 className="gioi-thieu__block-title">Tính cộng đồng cao</h3>
                    <p className="gioi-thieu__block-text">
                      Người dùng vừa là người tiêu thụ thông tin, vừa là người cung cấp thông tin,
                      tạo thành một mạng lưới chia sẻ.Kết nối người dùng dựa trên địa điểm, 
                      sở thích và hoạt động chung.Có tính năng tìm bạn đồng hành, giảm cảm giác cô đơn.
                    </p>
                  </div>
                </div>

                <div className="gioi-thieu__block">
                  <div className="gioi-thieu__block-icon" aria-hidden="true">🎭</div>
                  <div>
                    <h3 className="gioi-thieu__block-title">Thông tin đa dạng, độc đáo</h3>
                    <p className="gioi-thieu__block-text">
                       Có thể tìm thấy những địa điểm “ẩn”, ít phổ biến hoặc chưa được cập nhật trên các nền tảng lớn như Google Maps.Cập nhật nhanh, linh hoạt: Người dùng có thể đăng bài, review, hình ảnh ngay khi trải nghiệm, giúp thông tin luôn mới.
                    </p>
                  </div>
                </div>

                <div className="gioi-thieu__block">
                  <div className="gioi-thieu__block-icon" aria-hidden="true">🌱</div>
                  <div>
                    <h3 className="gioi-thieu__block-title">Kết hợp bản đồ và trải nghiệm cá nhân, Mang tính nhân văn</h3>
                    <p className="gioi-thieu__block-text">
                      Không chỉ định vị mà còn lưu giữ ký ức, cảm xúc theo địa điểm. Gắn công nghệ với cảm xúc, cộng đồng và trải nghiệm sống.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <div className="gioi-thieu__cta">
              <button
                id="gioi-thieu-du-an-btn"
                className="btn btn-primary"
                onClick={() => {
                  const el = document.getElementById('du-an')
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
                }}
              >
                Xem dự án của chúng tôi
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
