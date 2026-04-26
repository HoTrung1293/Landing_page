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
                  alt="Hanoi Memory Map - Hình ảnh giới thiệu"
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
                  aria-label="Hanoi Memory Map - Video giới thiệu"
                  onError={() => setShowVideoFallback(true)}
                />
              )}
              <div className="gioi-thieu__image-decor" aria-hidden="true" />
            </div>

            {/* Quote box */}
            <div className="gioi-thieu__quote">
              <span className="gioi-thieu__quote-mark">"</span>
              <p>Mở bản đồ, ghim kỷ niệm - Cùng Hanoi Memory Map viết tiếp hành trình của riêng bạn.</p>
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
                    <h3 className="gioi-thieu__block-title">Đặt ra vấn đề</h3>
                    <p className="gioi-thieu__block-text">
                      Dù các ứng dụng bản đồ hiện nay đã tối ưu hóa việc định vị và tìm kiếm, chúng vẫn thiếu đi chiều sâu về cảm xúc. Giới trẻ, đặc biệt là Gen Z, đang cần một nền tảng không chỉ để dẫn đường mà còn để số hóa những ký ức cá nhân gắn liền với từng góc phố. Đồng thời, đây cũng là giải pháp giúp họ vượt qua rào cản tâm lý và sự cô đơn trong hành trình tự mình khám phá đô thị
                    </p>
                  </div>
                </div>

                <div className="gioi-thieu__block">
                  <div className="gioi-thieu__block-icon" aria-hidden="true">🎭</div>
                  <div>
                    <h3 className="gioi-thieu__block-title">Giải pháp</h3>
                    <p className="gioi-thieu__block-text">
                       Hanoi Memory Map ra đời từ sự kết hợp giữa công nghệ bản đồ số và yếu tố nhân văn. Dự án tập trung giải quyết sự thiếu hụt trong việc tích hợp dữ liệu địa lý - ký ức cá nhân - kết nối xã hội, tạo ra một bản đồ nơi mỗi địa điểm đều chứa đựng những câu chuyện và cảm xúc riêng biệt.
                    </p>
                  </div>
                </div>

                <div className="gioi-thieu__block">
                  <div className="gioi-thieu__block-icon" aria-hidden="true">🌱</div>
                  <div>
                    <h3 className="gioi-thieu__block-title">Sản phẩm</h3>
                    <p className="gioi-thieu__block-text">
                      - Hệ thống Memory Pins để lưu trữ kỷ niệm 
                      
                    </p>
                    <p className="gioi-thieu__block-text">
                      - Tính năng Find a Buddy giúp tìm kiếm bạn đồng hành an toàn.
                      
                    </p>
                  </div>
                </div>
                 <div className="gioi-thieu__block">
                  <div className="gioi-thieu__block-icon" aria-hidden="true">📍</div>
                  <div>
                    <h3 className="gioi-thieu__block-title">Mục tiêu</h3>
                    <p className="gioi-thieu__block-text">
                      - Xây dựng một bản đồ cảm xúc sống động giúp người dùng gắn kết sâu sắc hơn với không gian thành phố.
                    </p>
                  </div>
                </div>
                 <div className="gioi-thieu__block">
                  <div className="gioi-thieu__block-icon" aria-hidden="true">👥</div>
                  <div>
                    <h3 className="gioi-thieu__block-title">Giải pháp</h3>
                    <p className="gioi-thieu__block-text">
                       Dự án giúp giảm cảm giác cô đơn và thúc đẩy cộng đồng kết nối dựa trên sở thích thực tế. Không chỉ hỗ trợ sinh viên và khách du lịch khám phá Hà Nội một cách chân thực, dự án còn biến công nghệ thành công cụ mang tính nhân văn, biến mỗi tọa độ thành một điểm chạm của ký ức và sự sẻ chia.
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
