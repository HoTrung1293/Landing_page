import './LienHe.css'

export default function LienHe() {
  return (
    <section id="lien-he" className="lien-he" aria-labelledby="lien-he-title">
      <div className="container">
        {/* Header */}
        <div className="lien-he__header">
          <p className="section-subtitle">✦ Kết nối với chúng tôi ✦</p>
          <h2 id="lien-he-title" className="section-title">Liên hệ</h2>
          <div className="divider divider-center" />
        </div>

        <div className="lien-he__layout">
          {/* Contact Info */}
          <div className="lien-he__info">
            <div className="lien-he__info-cards">
              <article id="lien-he-dia-chi" className="lien-he__info-card">
                <div className="lien-he__info-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 className="lien-he__info-label">Địa chỉ</h3>
                  <p className="lien-he__info-value">
                    02 Phạm Văn Đồng,<br />
                    Dịch Vọng Hậu, Cầu Giấy, Hà Nội
                  </p>
                </div>
              </article>

              <article id="lien-he-dien-thoai" className="lien-he__info-card">
                <div className="lien-he__info-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 011.07 2.18 2 2 0 013.06 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="lien-he__info-label">Điện thoại</h3>
                  <a href="tel:0868177162" className="lien-he__info-value lien-he__info-link">
                    0868177162
                  </a>
                </div>
              </article>

              <article id="lien-he-email" className="lien-he__info-card">
                <div className="lien-he__info-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h3 className="lien-he__info-label">Email</h3>
                  <a href="mailto:nguyenlananh2005.dc@gmail.com" className="lien-he__info-value lien-he__info-link">
                    nguyenlananh2005.dc@gmail.com
                  </a>
                </div>
              </article>

              {/* Social Links */}
              <div className="lien-he__socials">
                <p className="lien-he__socials-title">Theo dõi chúng tôi</p>
                <div className="lien-he__socials-list">
                  <a id="lien-he-facebook" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="lien-he__social" aria-label="Facebook">
                    <img src="https://static.wixstatic.com/media/11062b_366f7fdbcafc4effaeddb0dba92014c1~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_366f7fdbcafc4effaeddb0dba92014c1~mv2.png" alt="Facebook" width="24" height="24" />
                    <span>Facebook</span>
                  </a>
                  <a id="lien-he-instagram" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="lien-he__social" aria-label="Instagram">
                    <img src="https://static.wixstatic.com/media/11062b_681c6c82d3344ca09a024b18998e0f66~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_681c6c82d3344ca09a024b18998e0f66~mv2.png" alt="Instagram" width="24" height="24" />
                    <span>Instagram</span>
                  </a>
                  <a id="lien-he-pinterest" href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="lien-he__social" aria-label="Pinterest">
                    <img src="https://static.wixstatic.com/media/11062b_60c5fc4a3ecd49f2a697206b09eeace1~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_60c5fc4a3ecd49f2a697206b09eeace1~mv2.png" alt="Pinterest" width="24" height="24" />
                    <span>Pinterest</span>
                  </a>
                  <a id="lien-he-twitter" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="lien-he__social" aria-label="Twitter">
                    <img src="https://static.wixstatic.com/media/11062b_6e9638ad803e4099a6116eb750b5a584~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6e9638ad803e4099a6116eb750b5a584~mv2.png" alt="Twitter" width="24" height="24" />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lien-he__map-col">
            <div className="lien-he__map-wrapper">
              <iframe
                id="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1064444!2d105.78583!3d21.038063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b3f1b7c82b%3A0x6f6f2db3b83bde9a!2s02%20Ph%E1%BA%A1m%20V%C4%83n%20%C4%90%E1%BB%93ng%2C%20D%E1%BB%8Bch%20V%E1%BB%8Dng%20H%E1%BA%ADu%2C%20C%E1%BA%A7u%20Gi%E1%BA%A5y%2C%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1svi!2svn!4v1700000000000!5m2!1svi!2svn"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí Đại học Ngoại Ngữ - ĐHQGHN"
                aria-label="Bản đồ địa chỉ: 02 Phạm Văn Đồng, Dịch Vọng Hậu, Cầu Giấy, Hà Nội"
              />
            </div>
            <div className="lien-he__map-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)" stroke="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Đại học Ngoại Ngữ - ĐHQG Hà Nội
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
