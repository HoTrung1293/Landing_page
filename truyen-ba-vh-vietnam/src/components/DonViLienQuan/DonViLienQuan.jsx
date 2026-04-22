import './DonViLienQuan.css'

const donViData = [
  {
    id: 'don-vi-chu-quan',
    role: 'Đơn vị chủ quản',
    name: 'Trường ĐHNN-ĐHQG Hà Nội',
    description: 'Đại học Ngoại Ngữ - Đại học Quốc gia Hà Nội',
    icon: '🏛️',
    images: [
      {
        src: 'https://static.wixstatic.com/media/994ba1_9a606ed3b96f483f9096cbef01368aa0~mv2.png/v1/fill/w_319,h_239,fp_0.50_0.50,q_95,enc_avif,quality_auto/994ba1_9a606ed3b96f483f9096cbef01368aa0~mv2.webp',
        alt: 'Trường ĐHNN-ĐHQG Hà Nội - Logo 1'
      },
      {
        src: 'https://static.wixstatic.com/media/994ba1_6305615a105d429e919c77c207387640~mv2.png/v1/fill/w_318,h_239,fp_0.50_0.50,q_95,enc_avif,quality_auto/994ba1_6305615a105d429e919c77c207387640~mv2.webp',
        alt: 'Trường ĐHNN-ĐHQG Hà Nội - Logo 2'
      }
    ]
  },
  {
    id: 'don-vi-thuc-hien',
    role: 'Đơn vị thực hiện',
    name: 'Nhóm 3 CNTT&TT 2024',
    description: 'FLF1007-01 - Khoa Công nghệ thông tin & Truyền thông',
    icon: '👥',
    images: [
      {
        src: 'https://static.wixstatic.com/media/994ba1_cb86ad6f1dee4baa981dab9f5e01a7b2~mv2.png/v1/fill/w_319,h_239,fp_0.50_0.50,q_95,enc_avif,quality_auto/994ba1_cb86ad6f1dee4baa981dab9f5e01a7b2~mv2.webp',
        alt: 'Nhóm 3 CNTT&TT 2024 - Logo 1'
      },
      {
        src: 'https://static.wixstatic.com/media/994ba1_9d65986eaeb246d1b78ee48639f0fa06~mv2.png/v1/fill/w_318,h_239,fp_0.50_0.50,q_95,enc_avif,quality_auto/994ba1_9d65986eaeb246d1b78ee48639f0fa06~mv2.webp',
        alt: 'Nhóm 3 CNTT&TT 2024 - Logo 2'
      }
    ]
  },
  {
    id: 'don-vi-phoi-hop',
    role: 'Đơn vị phối hợp',
    name: 'Trường ĐHNN-ĐHQG Hà Nội',
    description: 'Hợp tác trong các chương trình văn hóa và sự kiện truyền thống',
    icon: '🤝',
    images: [
      {
        src: 'https://static.wixstatic.com/media/994ba1_9a606ed3b96f483f9096cbef01368aa0~mv2.png/v1/fill/w_319,h_239,fp_0.50_0.50,q_95,enc_avif,quality_auto/994ba1_9a606ed3b96f483f9096cbef01368aa0~mv2.webp',
        alt: 'Đơn vị phối hợp - ĐHQGHN'
      }
    ]
  }
]

export default function DonViLienQuan() {
  return (
    <section id="don-vi-lien-quan" className="don-vi" aria-labelledby="don-vi-title">
      {/* Background decoration */}
      <div className="don-vi__bg-decor" aria-hidden="true">
        <div className="don-vi__circle don-vi__circle--1" />
        <div className="don-vi__circle don-vi__circle--2" />
      </div>

      <div className="container">
        <div className="don-vi__header">
          <p className="section-subtitle">✦ Tổ chức ✦</p>
          <h2 id="don-vi-title" className="section-title">Các đơn vị liên quan</h2>
          <div className="divider divider-center" />
          <p className="section-description" style={{ margin: '0 auto', textAlign: 'center' }}>
            Dự án được thực hiện với sự hỗ trợ và hợp tác của các đơn vị uy tín
          </p>
        </div>

        <div className="don-vi__grid">
          {donViData.map((unit) => (
            <article key={unit.id} id={unit.id} className="don-vi__card">
              <div className="don-vi__card-header">
                <span className="don-vi__card-icon" aria-hidden="true">{unit.icon}</span>
                <div>
                  <p className="don-vi__card-role">{unit.role}</p>
                  <h3 className="don-vi__card-name">{unit.name}</h3>
                </div>
              </div>
              <p className="don-vi__card-desc">{unit.description}</p>
              <div className="don-vi__card-images">
                {unit.images.map((img, idx) => (
                  <div key={idx} className="don-vi__card-img-wrapper">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="don-vi__card-img"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
