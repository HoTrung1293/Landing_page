import './ThanhVien.css'

const members = [
  {
    id: 'le-thi-mai-anh',
    name: 'Lê Thị Mai Anh',
    mssv: '23041877',
    role: 'Nhóm trưởng',
    image: 'https://static.wixstatic.com/media/994ba1_63c5220ec7aa4acc8e741bdcb34f3e60~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/L%C3%AA%20Th%E1%BB%8B%20Mai%20Anh_edited.jpg',
    socials: { facebook: '#', instagram: '#' }
  },
  {
    id: 'le-tu-anh',
    name: 'Lê Tú Anh',
    mssv: '23041876',
    role: 'Thành viên',
    image: 'https://static.wixstatic.com/media/994ba1_88a77f315ff2457980c3b185d2dcbb5e~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/L%C3%AA%20T%C3%BA%20Anh_edited.jpg',
    socials: { facebook: '#', instagram: '#' }
  },
  {
    id: 'mai-tram-anh',
    name: 'Mai Trâm Anh',
    mssv: '24041925',
    role: 'Thành viên',
    image: 'https://static.wixstatic.com/media/994ba1_2acbbe3046fc4ce180d65191eb1d28df~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mai%20Tr%C3%A2m%20Anh.jpg',
    socials: { facebook: '#', instagram: '#' }
  },
  {
    id: 'nguyen-hoang-thu-anh',
    name: 'Nguyễn Hoàng Thụ Anh',
    mssv: '24040006',
    role: 'Thành viên',
    image: 'https://static.wixstatic.com/media/994ba1_01673979fbcb44249671977610b6b65e~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Th%E1%BB%A5%20Anh_edited.jpg',
    socials: { facebook: '#', instagram: '#' }
  },
  {
    id: 'nguyen-huyen-anh',
    name: 'Nguyễn Huyền Anh',
    mssv: '23040225',
    role: 'Thành viên',
    image: 'https://static.wixstatic.com/media/994ba1_1f4e174a3369472ab74a1dec08251897~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nguy%E1%BB%85n%20Huy%E1%BB%81n%20Anh_edited.jpg',
    socials: { facebook: '#', instagram: '#' }
  },
  {
    id: 'nguyen-lan-anh',
    name: 'Nguyễn Lan Anh',
    mssv: '23040226',
    role: 'Thành viên',
    image: 'https://static.wixstatic.com/media/994ba1_4208751e69734cbf95f837348915ae76~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Lan%20Anh_edited.jpg',
    socials: { facebook: '#', instagram: '#' }
  },
  {
    id: 'nguyen-le-phuong-anh',
    name: 'Nguyễn Lê Phương Anh',
    mssv: '23040228',
    role: 'Thành viên',
    image: 'https://static.wixstatic.com/media/994ba1_e8d38b0351c64b63be7e4f73bf3d3e10~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ph%C6%B0%C6%A1ng%20Anh_edited.jpg',
    socials: { facebook: '#', instagram: '#' }
  }
]

function SocialIcon({ type }) {
  const icons = {
    facebook: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
    instagram: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    )
  }
  return icons[type] || null
}

export default function ThanhVien() {
  return (
    <section id="thanh-vien" className="thanh-vien" aria-labelledby="thanh-vien-title">
      {/* Background */}
      <div className="thanh-vien__bg" aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <div className="thanh-vien__header">
          <p className="section-subtitle">✦ Đội ngũ ✦</p>
          <h2 id="thanh-vien-title" className="section-title">Thành viên</h2>
          <div className="divider divider-center" />
          <p className="section-description" style={{ margin: '0 auto', textAlign: 'center' }}>
            Nhóm 3 CNTT&TT 2024 - FLF1007-01 · Đại học Ngoại Ngữ - ĐHQGHN
          </p>
        </div>

        {/* Members Grid */}
        <div className="thanh-vien__grid">
          {members.map((member, index) => (
            <article
              key={member.id}
              id={member.id}
              className="thanh-vien__card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="thanh-vien__avatar-wrapper">
                <img
                  src={member.image}
                  alt={`Ảnh đại diện của ${member.name}`}
                  className="thanh-vien__avatar"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="thanh-vien__avatar-fallback" style={{ display: 'none' }}>
                  {member.name.charAt(0)}
                </div>
                <div className="thanh-vien__avatar-overlay">
                  <div className="thanh-vien__socials">
                    {Object.entries(member.socials).map(([platform, href]) => (
                      <a
                        key={platform}
                        href={href}
                        id={`${member.id}-${platform}`}
                        className="thanh-vien__social-btn"
                        aria-label={`${member.name} trên ${platform}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon type={platform} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="thanh-vien__info">
                {index === 0 && (
                  <span className="thanh-vien__leader-badge">👑 Nhóm trưởng</span>
                )}
                <h3 className="thanh-vien__name">{member.name}</h3>
                <p className="thanh-vien__mssv">
                  <span className="thanh-vien__mssv-label">MSSV:</span> {member.mssv}
                </p>
                <p className="thanh-vien__role">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
