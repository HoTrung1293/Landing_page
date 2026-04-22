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
  'Nội dung': [
    { label: 'Quảng bá văn hóa', href: '#' },
    { label: 'Đại sứ văn hóa', href: '#' },
    { label: 'Truyền bá văn hóa', href: '#' },
    { label: 'Văn hóa truyền thống', href: '#' },
    { label: 'Giữ gìn bản sắc văn hóa', href: '#' }
  ]
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
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }} className="footer__logo">
                <img
                  src="https://static.wixstatic.com/media/994ba1_78279e5dd75e49acb8012d5cbd1e3531~mv2.png/v1/crop/x_0,y_38,w_500,h_383/fill/w_158,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20v%C4%83n%20h%C3%B3a.png"
                  alt="Logo Truyền bá Văn hóa Việt"
                  className="footer__logo-img"
                />
                <span className="footer__logo-text">Truyền bá VH Việt</span>
              </a>
              <p className="footer__brand-desc">
                Truyền bá và gìn giữ văn hóa Việt Nam thông qua các dự án sáng tạo của sinh viên Đại học Ngoại Ngữ - ĐHQGHN.
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
              <p className="footer__newsletter-name">The Wisdom</p>
              <p className="footer__newsletter-desc">Cập nhật những tin tức văn hóa mới nhất</p>
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
            © 2024 by Truyền bá văn hóa Việt. All rights reserved.
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
