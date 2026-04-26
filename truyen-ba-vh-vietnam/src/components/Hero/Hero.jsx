import './Hero.css'

export default function Hero() {
  const handleScrollDown = () => {
    const el = document.getElementById('gioi-thieu')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero" aria-label="Trang chủ - Giới thiệu">
      {/* Background Image */}
      <div className="hero__bg">
        <img
          src="https://i.pinimg.com/1200x/87/a5/38/87a53838ee9cd3eef9fe70b1411bb6ff.jpg"
          alt="Văn hóa Việt Nam - Hình ảnh bìa trang chủ"
          className="hero__bg-img"
        />
        <div className="hero__bg-overlay" />
        {/* Decorative pattern */}
        <div className="hero__pattern" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__text">
          <p className="hero__accent animate-fade-up">✦ Nhóm 14 - FLF1007 - 01 ✦</p>
          <h1 className="hero__title animate-fade-up" style={{ animationDelay: '0.1s' }}>
            ĐI ĐÂU KHÓ CÓ
            <span className="hero__title-highlight"> HANOI MEMORY MAP</span>
            <br />
            LO
          </h1>
          <p className="hero__subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Ghim lại những mảnh ghép ký ức qua nền tảng bản đồ số, kết nối con người với nhau và lan tỏa những câu chuyện nhân văn ẩn sau mỗi góc phố Thủ đô
          </p>
          <div className="hero__actions animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <button
              id="hero-explore-btn"
              className="btn btn-gold"
              onClick={() => {
                const el = document.getElementById('du-an')
                if (el) {
                  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
                }
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              Khám phá dự án
            </button>
            <button
              id="hero-about-btn"
              className="btn btn-outline-white"
              onClick={() => {
                const el = document.getElementById('gioi-thieu')
                if (el) {
                  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
                }
              }}
            >
              Tìm hiểu thêm
            </button>
          </div>

          {/* Stats */}
          <div className="hero__stats animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="hero__stat">
              <span className="hero__stat-number">36</span>
              <span className="hero__stat-label">Phố phường</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-number">+100</span>
              <span className="hero__stat-label">Ký ức được ghim</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-number">∞</span>
              <span className="hero__stat-label">Cảm xúc</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero__image animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="hero__image-frame">
            <img
              src="https://i.pinimg.com/736x/3d/d5/d2/3dd5d27ce5cae3c2319bae835a27972a.jpg"
              alt="Sinh viên ULIS trải nghiệm văn hóa Việt Nam"
              className="hero__image-main"
              loading="eager"
            />
          </div>
          {/* Floating badge */}
          <div className="hero__badge" aria-label="FLF1007-01">
            <span className="hero__badge-icon">🏛️</span>
            <div>
              <p className="hero__badge-title">FLF1007-01</p>
              <p className="hero__badge-sub">ĐHNN - ĐHQGHN</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        id="hero-scroll-btn"
        className="hero__scroll"
        onClick={handleScrollDown}
        aria-label="Cuộn xuống"
      >
        <span className="hero__scroll-text">Cuộn xuống</span>
        <span className="hero__scroll-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </span>
      </button>
    </section>
  )
}
