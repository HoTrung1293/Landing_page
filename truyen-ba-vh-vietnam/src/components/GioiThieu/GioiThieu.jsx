import './GioiThieu.css'

export default function GioiThieu() {
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
          {/* Left - Image */}
          <div className="gioi-thieu__image-col">
            <div className="gioi-thieu__image-wrapper">
              <img
                src="https://static.wixstatic.com/media/994ba1_7df14d1a5b3040cd9a6749b1d3cb3015f000.jpg/v1/fill/w_490,h_273,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/994ba1_7df14d1a5b3040cd9a6749b1d3cb3015f000.jpg"
                alt="Truyền bá văn hóa Việt Nam"
                className="gioi-thieu__image"
                loading="lazy"
              />
              <div className="gioi-thieu__image-decor" aria-hidden="true" />
            </div>

            {/* Quote box */}
            <div className="gioi-thieu__quote">
              <span className="gioi-thieu__quote-mark">"</span>
              <p>Văn hóa là hồn của dân tộc, là sức mạnh trường tồn của một quốc gia.</p>
            </div>
          </div>

          {/* Right - Text */}
          <div className="gioi-thieu__text-col">
            <article className="gioi-thieu__article">
              <p className="gioi-thieu__lead">
                Truyền bá văn hóa Việt với sinh viên đại học Ngoại Ngữ - ĐHQGHN
              </p>

              <div className="gioi-thieu__blocks">
                <div className="gioi-thieu__block">
                  <div className="gioi-thieu__block-icon" aria-hidden="true">🌏</div>
                  <div>
                    <h3 className="gioi-thieu__block-title">Bối cảnh toàn cầu hóa</h3>
                    <p className="gioi-thieu__block-text">
                      Trong thời kỳ toàn cầu hoá, hiện đại hoá như hiện nay, vấn đề đưa văn hoá Việt Nam
                      đến mọi đối tượng đã luôn là một thách thức khi không phải ai cũng quan tâm đến điều ấy.
                      Việc tìm kiếm những phương thức hiệu quả để truyền bá văn hóa là vô cùng cần thiết.
                    </p>
                  </div>
                </div>

                <div className="gioi-thieu__block">
                  <div className="gioi-thieu__block-icon" aria-hidden="true">🎭</div>
                  <div>
                    <h3 className="gioi-thieu__block-title">Chương trình đa dạng</h3>
                    <p className="gioi-thieu__block-text">
                      Để truyền bá văn hoá Việt Nam một cách hiệu quả, việc xây dựng nhiều chương trình,
                      sự kiện phong phú và đa dạng là vô cùng cần thiết. Những hoạt động này giúp kết nối
                      thế hệ trẻ với di sản văn hóa dân tộc một cách sinh động và hấp dẫn.
                    </p>
                  </div>
                </div>

                <div className="gioi-thieu__block">
                  <div className="gioi-thieu__block-icon" aria-hidden="true">🌱</div>
                  <div>
                    <h3 className="gioi-thieu__block-title">Lợi ích cho sinh viên</h3>
                    <p className="gioi-thieu__block-text">
                      Thông qua dự án, sinh viên sẽ nhận được nhiều lợi ích thiết thực. Họ sẽ có hiểu biết
                      sâu sắc hơn về văn hóa Việt Nam, trân trọng các giá trị truyền thống và trở thành
                      những đại sứ văn hóa tích cực trong cộng đồng.
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
