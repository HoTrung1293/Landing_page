import { useState } from 'react'
import './Footer.css'

const footerLinks = {
  'Trang chủ': [
    { label: 'Giới thiệu', href: '#gioi-thieu' },
    { label: 'Dự án', href: '#du-an' },
    { label: 'Thành viên', href: '#thanh-vien' },
    { label: 'Phản hồi', href: '#phan-hoi' },
    { label: 'Nội dung', href: '#du-an' }
  ],
}

const socialLinks = [
  {
    id: 'footer-facebook',
    name: 'Facebook',
    href: 'https://www.facebook.com',
    img: 'https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png'
  },
  {
    id: 'footer-instagram',
    name: 'Instagram',
    href: 'https://www.instagram.com',
    img: 'https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/81af6121f84c41a5b4391d7d37fce12a.png'
  },
  {
    id: 'footer-pinterest',
    name: 'Pinterest',
    href: 'https://www.pinterest.com',
    img: 'https://static.wixstatic.com/media/9c486556465843c5850fabfd68dfae49.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9c486556465843c5850fabfd68dfae49.png'
  },
  {
    id: 'footer-twitter',
    name: 'Twitter',
    href: 'https://www.twitter.com',
    img: 'https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01ab6619093f45388d66736ec22e5885.png'
  }
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const navGroupCount = Object.keys(footerLinks).length

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true)
      setEmail('')
    }
  }

  const handleNavClick = (href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer id="site-footer" className="footer" role="contentinfo">
      {/* Main footer content */}
      <div className="footer__main">
        <div className="container">
          <div className={`footer__grid ${navGroupCount <= 1 ? 'footer__grid--compact' : ''}`}>
            {/* Brand */}
            <div className="footer__brand">
              <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }} className="footer__logo">
                <img
                  src="/Logo.png"
                  alt="Logo Truyền bá Văn hóa Việt"
                  className="footer__logo-img"
                />
                <span className="footer__logo-text">Ghim ký ức nối tâm hồn</span>
              </a>
              <p className="footer__brand-desc">
                Ghim lại những mảnh ghép ký ức qua nền tảng bản đồ số, kết nối con người với nhau và lan tỏa những câu chuyện nhân văn ẩn sau mỗi góc phố Thủ đô.
              </p>

              {/* Social */}
              <div className="footer__socials">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    id={social.id}
                    href={social.href}
                    className="footer__social-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <img src={social.img} alt={social.name} width="20" height="20" />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav Links */}
            {Object.entries(footerLinks).map(([group, links]) => (
              <nav key={group} className="footer__nav-group" aria-label={group}>
                <h3 className="footer__nav-title">{group}</h3>
                <ul className="footer__nav-list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="footer__nav-link"
                        onClick={link.href.startsWith('#') ? (e) => { e.preventDefault(); handleNavClick(link.href) } : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* Newsletter */}
            <div className="footer__newsletter">
              <h3 className="footer__nav-title">NHẬN THÔNG TIN TỪ</h3>
              <p className="footer__newsletter-name">HANOI’S MEMORY MAP</p>
              {!subscribed ? (
                <form
                  id="newsletter-form"
                  className="footer__newsletter-form"
                  onSubmit={handleSubscribe}
                  aria-label="Đăng ký nhận bản tin"
                >
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email tại đây"
                    className="footer__newsletter-input"
                    aria-label="Địa chỉ email"
                    required
                  />
                  <button id="newsletter-submit" type="submit" className="footer__newsletter-btn">
                    Đăng ký
                  </button>
                </form>
              ) : (
                <p className="footer__newsletter-thanks" role="status">
                  ✅ Cảm ơn bạn đã đăng ký!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">
            © 2026 by Ha Noi Memory Map. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Chính sách bảo mật</a>
            <a href="#" className="footer__bottom-link">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
