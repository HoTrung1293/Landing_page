import './ThanhVien.css'

const members = [
  {
    id: 'tran-thi-kim-anh',
    name: 'Trần Thị Kim Anh',
    mssv: '24040311',
    role: 'Nhóm trưởng',
    image: 'public/drive-download-20260422T195141Z-3-001/ảnh thẻ.jpg',
    socials: { facebook: '#', instagram: '#' }
  },
  {
    id: 'tran-van-anh-1',
    name: 'Trần Vân Anh',
    mssv: '24042233',
    role: 'Thành viên',
    image: 'public/VÂN ANH 24042233-20260422T195307Z-3-001/VÂN ANH 24042233/Vân Anh.jpg',
    socials: { facebook: '#', instagram: '#' }
  },
  {
    id: 'tran-van-anh-2',
    name: 'Trần Vân Anh',
    mssv: '24042234',
    role: 'Thành viên',
    image: 'public/24042234 TRẦN VÂN ANH-20260422T195228Z-3-001/24042234 TRẦN VÂN ANH/Ảnh cá nhân.jpg',
    socials: { facebook: '#', instagram: '#' }
  },
  {
    id: 'trinh-phuong-anh',
    name: 'Trịnh Phương Anh',
    mssv: '24040312',
    role: 'Thành viên',
    image: 'public/PHƯƠNG ANH-20260422T195235Z-3-001/PHƯƠNG ANH/Ảnh cá nhân.jpg',
    socials: { facebook: '#', instagram: '#' }
  },
  {
    id: 'truong-quynh-anh',
    name: 'Trương Quỳnh Anh',
    mssv: '24041219',
    role: 'Thành viên',
    image: 'public/QUỲNH ANH-20260422T195236Z-3-001/QUỲNH ANH/Ảnh cá nhân.png',
    socials: { facebook: '#', instagram: '#' }
  },
  {
    id: 'vi-ngoc-anh',
    name: 'Vi Ngọc Anh',
    mssv: '24041944',
    role: 'Thành viên',
    image: 'public/NGỌC ANH-20260422T195234Z-3-001/NGỌC ANH/Ảnh cá nhân.jpg',
    socials: { facebook: '#', instagram: '#' }
  },
  {
    id: 'vu-le-hong-anh',
    name: 'Vũ Lê Hồng Anh',
    mssv: '24041945',
    role: 'Thành viên',
    image: 'public/HỒNG ANH-20260422T195231Z-3-001/HỒNG ANH/quality_restoration_20260114171136266.jpg',
    socials: { facebook: '#', instagram: '#' }
  }
]

function SocialIcon({ type }) {
  const icons = {
    facebook: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    instagram: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
            Nhóm 14 - FLF1007 - 01 · Đại học Ngoại Ngữ - ĐHQGHN
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
