import { useState, useEffect, useCallback } from 'react'
import './Header.css'

const navItems = [
  { id: 'trang-chu', label: 'Trang chủ', href: '#hero' },
  { id: 'gioi-thieu', label: 'Giới thiệu', href: '#gioi-thieu' },
  { id: 'du-an', label: 'Dự án', href: '#du-an' },
  { id: 'thanh-vien', label: 'Thành viên', href: '#thanh-vien' },
  { id: 'phan-hoi', label: 'Phản hồi', href: '#phan-hoi' },
  { id: 'lien-he', label: 'Liên hệ', href: '#lien-he' },
  { id: 'noi-dung', label: 'Nội dung', href: '#du-an' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState('trang-chu')

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)

    // Update active section based on scroll position
    const sections = ['hero', 'gioi-thieu', 'don-vi-lien-quan', 'du-an', 'thanh-vien', 'phan-hoi', 'lien-he']
    const navMap = {
      'hero': 'trang-chu',
      'gioi-thieu': 'gioi-thieu',
      'don-vi-lien-quan': 'gioi-thieu',
      'du-an': 'du-an',
      'thanh-vien': 'thanh-vien',
      'phan-hoi': 'phan-hoi',
      'lien-he': 'lien-he',
    }
    for (const sec of sections.reverse()) {
      const el = document.getElementById(sec)
      if (el && window.scrollY >= el.offsetTop - 100) {
        setActiveSection(navMap[sec] || 'trang-chu')
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      alert(`Tìm kiếm: "${searchQuery}"`)
      setSearchQuery('')
      setSearchOpen(false)
    }
  }

  return (
    <header id="site-header" className={`header ${scrolled ? 'header--scrolled' : ''}`} role="banner">
      {/* Logo */}
      <div className="header__logo">
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }} aria-label="Trang chủ - Truyền bá VH Việt">
          <img
            src="/Logo.png"
            alt="Logo Truyền bá Văn hóa Việt"
            className="header__logo-img"
          />
          <span className="header__logo-text">Ghim ký ức nối tâm hồn</span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="header__nav" role="navigation" aria-label="Điều hướng chính">
        <ul className="header__nav-list" role="list">
          {navItems.map((item) => (
            <li key={item.id} className="header__nav-item">
              <a
                href={item.href}
                className={`header__nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
                <span className="header__nav-indicator" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Header Actions */}
      <div className="header__actions">
        {/* Search */}
        <button
          id="search-toggle-btn"
          className={`header__icon-btn ${searchOpen ? 'active' : ''}`}
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Tìm kiếm"
          aria-expanded={searchOpen}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </button>

        {/* Login */}
        <a href="#" id="header-login-btn" className="header__login-btn btn btn-primary">
          Đăng nhập
        </a>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          className={`header__menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="header__hamburger">
            <span /><span /><span />
          </span>
        </button>
      </div>

      {/* Search Bar */}
      <div className={`header__search ${searchOpen ? 'header__search--open' : ''}`} role="search">
        <form onSubmit={handleSearchSubmit} className="header__search-form">
          <input
            id="search-input"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm..."
            className="header__search-input"
            aria-label="Tìm kiếm"
            autoFocus={searchOpen}
          />
          <button type="submit" id="search-submit-btn" className="header__search-btn" aria-label="Tìm kiếm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <button type="button" id="search-close-btn" className="header__search-close" onClick={() => setSearchOpen(false)} aria-label="Đóng tìm kiếm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </form>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}
        aria-label="Menu di động"
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`header__mobile-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="header__mobile-login btn btn-primary">Đăng nhập</a>
          </li>
        </ul>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="header__overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
