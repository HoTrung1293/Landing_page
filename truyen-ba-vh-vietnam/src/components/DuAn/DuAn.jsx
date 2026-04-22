import { useState } from 'react'
import './DuAn.css'

const projects = [
  {
    id: 'du-an-di-san',
    title: 'Khám phá 8 di sản thế giới tại Việt Nam',
    category: 'Di sản văn hóa',
    tag: 'Nổi bật',
    description: 'Hành trình khám phá 8 di sản thế giới được UNESCO công nhận tại Việt Nam, từ Vịnh Hạ Long đến Phố cổ Hội An.',
    image: 'https://static.wixstatic.com/media/994ba1_244438584d804cc79a9c7b24ef8781b0~mv2.png/v1/fit/w_211,h_141,q_90,enc_avif,quality_auto/994ba1_244438584d804cc79a9c7b24ef8781b0~mv2.png',
    emoji: '🏛️',
    color: '#8B1A1A'
  },
  {
    id: 'du-an-le-hoi',
    title: 'Tổng hợp các lễ hội ở Việt Nam nổi tiếng, đặc sắc nhất 3 miền',
    category: 'Lễ hội truyền thống',
    tag: 'Phổ biến',
    description: 'Khám phá các lễ hội đặc sắc nhất của ba miền Bắc - Trung - Nam, từ lễ hội Gióng đến Tết Nguyên Đán.',
    image: 'https://static.wixstatic.com/media/994ba1_36a928a520e249a9bb51a1f19ef955de~mv2.png/v1/fit/w_211,h_141,q_90,enc_avif,quality_auto/994ba1_36a928a520e249a9bb51a1f19ef955de~mv2.png',
    emoji: '🎊',
    color: '#C0392B'
  },
  {
    id: 'du-an-am-nhac',
    title: 'Âm vang dân tộc',
    category: 'Âm nhạc dân tộc',
    tag: 'Mới',
    description: 'Hành trình tìm hiểu các loại nhạc cụ dân tộc và làn điệu dân ca đặc sắc của người Việt Nam.',
    image: 'https://static.wixstatic.com/media/994ba1_63c5220ec7aa4acc8e741bdcb34f3e60~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/L%C3%AA%20Th%E1%BB%8B%20Mai%20Anh_edited.jpg',
    emoji: '🎵',
    color: '#7B341E'
  },
  {
    id: 'du-an-food-tour',
    title: 'Food Tour - Hương vị quê hương',
    category: 'Ẩm thực',
    tag: 'Phổ biến',
    description: 'Khám phá nền ẩm thực phong phú của Việt Nam qua hành trình Food Tour ba miền với những món ăn đặc trưng.',
    image: 'https://static.wixstatic.com/media/994ba1_88a77f315ff2457980c3b185d2dcbb5e~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/L%C3%AA%20T%C3%BA%20Anh_edited.jpg',
    emoji: '🍜',
    color: '#C9A84C'
  },
  {
    id: 'du-an-co-phuc',
    title: 'Nét đẹp Cổ phục Việt',
    category: 'Trang phục truyền thống',
    tag: 'Nổi bật',
    description: 'Giới thiệu về các loại trang phục truyền thống Việt Nam qua các thời kỳ lịch sử từ áo dài đến áo tứ thân.',
    image: 'https://static.wixstatic.com/media/994ba1_2acbbe3046fc4ce180d65191eb1d28df~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mai%20Tr%C3%A2m%20Anh.jpg',
    emoji: '👘',
    color: '#8B1A1A'
  },
  {
    id: 'du-an-tham-quan',
    title: 'Sinh viên ULIS tham quan trải nghiệm tại Làng Văn hóa',
    category: 'Trải nghiệm thực tế',
    tag: 'Mới',
    description: 'Chuyến tham quan trải nghiệm thực tế tại Làng Văn hóa – Du lịch các dân tộc Việt Nam của sinh viên ULIS.',
    image: 'https://static.wixstatic.com/media/994ba1_01673979fbcb44249671977610b6b65e~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Th%E1%BB%A5%20Anh_edited.jpg',
    emoji: '🌿',
    color: '#2E7D32'
  }
]

const categories = ['Tất cả', 'Di sản văn hóa', 'Lễ hội truyền thống', 'Âm nhạc dân tộc', 'Ẩm thực', 'Trang phục truyền thống', 'Trải nghiệm thực tế']

export default function DuAn() {
  const [activeCategory, setActiveCategory] = useState('Tất cả')

  const filtered = activeCategory === 'Tất cả'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="du-an" className="du-an" aria-labelledby="du-an-title">
      <div className="container">
        {/* Header */}
        <div className="du-an__header">
          <p className="section-subtitle">✦ Hoạt động của chúng tôi ✦</p>
          <h2 id="du-an-title" className="section-title">Dự án</h2>
          <div className="divider divider-center" />
          <p className="section-description" style={{ margin: '0 auto', textAlign: 'center' }}>
            Khám phá các dự án văn hóa sáng tạo được thực hiện bởi nhóm sinh viên
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="du-an__filters" role="tablist" aria-label="Lọc theo danh mục">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`du-an__filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="du-an__grid" role="list">
          {filtered.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="du-an__card"
              role="listitem"
              style={{ '--card-color': project.color }}
            >
              <div className="du-an__card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="du-an__card-image"
                  loading="lazy"
                />
                <div className="du-an__card-overlay" />
                <span className="du-an__card-tag">{project.tag}</span>
                <span className="du-an__card-emoji" aria-hidden="true">{project.emoji}</span>
              </div>
              <div className="du-an__card-body">
                <span className="du-an__card-category">{project.category}</span>
                <h3 className="du-an__card-title">{project.title}</h3>
                <p className="du-an__card-desc">{project.description}</p>
                <div className="du-an__card-footer">
                  <button
                    id={`btn-${project.id}`}
                    className="du-an__card-btn"
                    aria-label={`Xem chi tiết: ${project.title}`}
                  >
                    Xem chi tiết
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
