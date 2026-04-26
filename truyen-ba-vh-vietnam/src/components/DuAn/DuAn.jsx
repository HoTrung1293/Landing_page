import { useState } from 'react'
import './DuAn.css'

// ── Địa điểm nổi bật ──
const spotlightPlaces = [
  {
    id: 'loading-t',
    name: 'Quán Café Loading T',
    district: 'Hoàn Kiếm',
    address: '8 P. Chân Cầm, Hàng Trống, Hoàn Kiếm, Hà Nội',
    description: 'Nằm trong tòa biệt thự cổ thời Pháp với lối vào nhỏ sâu hun hút. Quán giữ nguyên nền gạch hoa xưa, tường vàng bong tróc và cửa sổ gỗ cao — đậm chất Hà Nội cũ.',
    pros: ['Đồ uống ngon', 'Âm nhạc du dương', 'Cà phê trứng & cà phê quế là 2 món signature', 'Chủ quán cực kỳ thân thiện'],
    cons: ['Lối vào nhỏ, khó tìm', 'Diện tích hạn chế', 'Hơi tối vào mùa đông', 'Thường hết chỗ vào cuối tuần'],
    emoji: '☕',
    color: '#7B4F2E',
    mapQuery: '8+P.+Chân+Cầm,+Hoàn+Kiếm,+Hà+Nội',
    tags: ['Café', 'Cổ điển', 'Pháp'],
    memoryCount: 38,
    sharedBy: 'Kim Anh'
  },
  {
    id: 'rap-chieu-phim-qg',
    name: 'Trung tâm Chiếu phim Quốc gia',
    district: 'Đống Đa',
    address: '87 P. Láng Hạ, Chợ Dừa, Hà Nội',
    description: 'Rạp chiếu phim lâu đời tại Hà Nội. Không hiện đại bằng các cụm rạp quốc tế nhưng gần gũi, gắn liền với thời sinh viên của nhiều thế hệ.',
    pros: ['Giá vé rẻ', 'Không gian rộng rãi', 'Phim được cập nhật thường xuyên'],
    cons: ['Các phòng chiếu đã cũ', 'Ghế không được lau dọn thường xuyên', 'Thái độ nhân viên chưa tốt'],
    emoji: '🎬',
    color: '#1A237E',
    mapQuery: '87+Láng+Hạ,+Chợ+Dừa,+Hà+Nội',
    tags: ['Rạp phim', 'Lâu đời', 'Sinh viên'],
    memoryCount: 52,
    sharedBy: 'Kim Anh'
  },
  {
    id: 'not-so-early',
    name: 'Nhà hàng Not So Early',
    district: 'Tây Hồ',
    address: '3 Đ. Văn Cao, Tây Hồ, Hà Nội',
    description: 'Không gian mang phong cách châu Âu hiện đại, tông màu sáng, bàn ghế tối giản nhưng tinh tế. Ánh sáng tự nhiên đẹp, phù hợp cho brunch hoặc hẹn hò.',
    pros: ['Đồ ăn đa dạng pizza, pasta, salad', 'Trình bày đẹp, chụp ảnh cực hợp', 'Không gian yên tĩnh, sạch sẽ', 'Nhân viên lịch sự'],
    cons: ['Giá hơi cao so với sinh viên', 'Chờ món lâu vào giờ cao điểm', 'Một số món hơi ngậy'],
    emoji: '🍝',
    color: '#B07D3A',
    mapQuery: '3+Văn+Cao,+Tây+Hồ,+Hà+Nội',
    tags: ['Nhà hàng', 'Châu Âu', 'Brunch'],
    memoryCount: 29,
    sharedBy: 'Quỳnh Anh'
  },
  {
    id: 'beta-cinemas',
    name: 'Beta Cinemas Xuân Thủy',
    district: 'Cầu Giấy',
    address: 'Tầng 4, Tòa nhà HITC, 239 Xuân Thủy, Cầu Giấy, Hà Nội',
    description: 'Điểm đến quen thuộc của giới sinh viên khu Cầu Giấy với tông màu xanh đặc trưng. Không gian sảnh chờ trẻ trung, tối giản, cực hợp check-in.',
    pros: ['Vé 50k/vé cho sinh viên', 'Bắp rang bơ thơm đa dạng vị', 'Nhân viên trẻ trung xử lý nhanh', 'Chất lượng âm thanh ổn'],
    cons: ['Ghế hơi sát nhau', 'Thang máy lên rạp đôi khi phải chờ', 'Cách âm giữa các phòng chưa tốt'],
    emoji: '🎞️',
    color: '#1565C0',
    mapQuery: '239+Xuân+Thủy,+Cầu+Giấy,+Hà+Nội',
    tags: ['Rạp phim', 'Sinh viên', 'Giá rẻ'],
    memoryCount: 44,
    sharedBy: 'Hồng Anh'
  },
  {
    id: '4am-bbq',
    name: 'Quán Nướng 4AM Korean BBQ',
    district: 'Cầu Giấy',
    address: '197 Quan Hoa, Cầu Giấy, Hà Nội',
    description: 'Quán nằm ngay mặt đường bờ sông Quan Hoa lộng gió. Thiết kế hiện đại, đèn vàng ấm cúng, phù hợp tụ tập xuyên đêm đúng như cái tên 4AM.',
    pros: ['Thịt tẩm ướp đậm đà, tươi ngon', 'Hút mùi tốt', 'Mở cửa rất muộn', 'View nhìn sông chill'],
    cons: ['Đông và ồn giờ cao điểm', 'Phần ăn ít hơn ảnh review', 'Bãi xe quá tải cuối tuần'],
    emoji: '🔥',
    color: '#C62828',
    mapQuery: '197+Quan+Hoa,+Cầu+Giấy,+Hà+Nội',
    tags: ['Nướng', 'Korean BBQ', 'Đêm muộn'],
    memoryCount: 61,
    sharedBy: 'Hồng Anh'
  },
  {
    id: 'ans-garden',
    name: "An's Garden Coffee",
    district: 'Hà Đông',
    address: 'Đường 19/5, Văn Quán, Hà Đông, Hà Nội',
    description: 'Quán nằm trong khu biệt thự rộng rãi, bố trí nhiều cây xanh, thiết kế như một khu vườn thoáng mát. Nhiều tầng và góc ngồi, phù hợp học tập và thư giãn.',
    pros: ['Menu đa dạng', 'Không gian xanh, yên tĩnh', 'Phù hợp học bài', 'Nhiều góc chụp ảnh đẹp'],
    cons: ['Đông vào tối và cuối tuần', 'Đôi khi hơi ồn', 'Giá khá đắt'],
    emoji: '🌿',
    color: '#2E7D32',
    mapQuery: 'Đường+19/5,+Văn+Quán,+Hà+Đông,+Hà+Nội',
    tags: ['Café', 'Học bài', 'Khu vườn'],
    memoryCount: 33,
    sharedBy: 'Phương Anh'
  },
]


// ── Gợi ý địa điểm ──
const suggestedPlaces = [
  { id: 'sg-1', name: 'Quán Nướng Tự Do', emoji: '🍖', district: 'Từ Liêm', sharedBy: 'Quỳnh Anh' },
  { id: 'sg-2', name: 'Ngói CTR - Lẩu thái Tom Yum', emoji: '🌶️', district: 'Ba Đình', sharedBy: 'Ngọc Anh' },
  { id: 'sg-3', name: 'Lịm Donuts', emoji: '🍩', district: 'Cầu Giấy', sharedBy: 'Ngọc Anh' },
  { id: 'sg-4', name: 'Deabak - Món ngon Hàn Quốc', emoji: '🇰🇷', district: 'Hà Đông', sharedBy: 'Vân Anh' },
  { id: 'sg-5', name: 'Nollowa Chicken', emoji: '🍗', district: 'Tây Hồ', sharedBy: 'Vân Anh' },
  { id: 'sg-6', name: 'Vincom Center Bà Triệu', emoji: '🛒', district: 'Hai Bà Trưng', sharedBy: 'Phương Anh' },
  { id: 'sg-7', name: 'Quán café KTX ĐH Ngoại Ngữ', emoji: '☕', district: 'Cầu Giấy', sharedBy: 'Vân Anh 24042233' },
  { id: 'sg-8', name: 'Tiệm bánh BommjuFood', emoji: '🥐', district: 'Nghĩa Đô', sharedBy: 'Vân Anh 24042233' },
]

// ── Memory thực tế từ thành viên nhóm ──
const sampleMemories = [
  {
    id: 'mem-kimanh-1',
    author: 'Mèo con đáng yêu',
    avatar: '🐱',
    place: 'Quán Café Loading T',
    sharedBy: 'Kim Anh • 21 tuổi',
    content: 'Đó là buổi chiều mình vừa biết tin người ấy có người mới. Mình đã ngồi đúng góc cửa sổ nhìn xuống phố Chân Cầm suốt 4 tiếng, tay nắm chặt ly cà phê quế đã nguội ngắt. Tiếng nhạc jazz và sự điềm nhiên của những bức tường cổ như bảo vệ mình khỏi thế giới ngoài kia. Loading T không chỉ là quán cà phê, mà còn là một trạm trú ẩn cho trái tim vụn vỡ. 🌊 #homnaytoibuon #traitimvunvo',
    time: '3 ngày trước',
    likes: 87,
    images: [
      'public/drive-download-20260422T195141Z-3-001/T-loading 1.webp',
      'public/drive-download-20260422T195141Z-3-001/T-Loading.webp'
    ]
  },
  {
    id: 'mem-kimanh-2',
    author: 'Hiếu hoàn hảo',
    avatar: '👨',
    place: 'Trung tâm Chiếu phim Quốc gia',
    sharedBy: 'Kim Anh • 35 tuổi',
    content: 'Đó là suất chiếu muộn lúc 23h. Mình chẳng nhớ phim có nội dung gì nữa, chỉ nhớ sự hồi hộp khi hai bàn tay vô tình chạm nhau trong túi bỏng ngô. Cảm giác tim mình đập to hơn cả tiếng loa trong rạp. Bây giờ mỗi lần đi ngang qua đây lại nhớ về sự ngây ngô của năm nhất đại học ✨ #tinhyeugabong #boihoi',
    time: '5 ngày trước',
    likes: 54,
    images: [
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80',
      'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&q=80'
    ]
  },
  {
    id: 'mem-kimanh-3',
    author: 'Cô gái với 2 chiếc sừng',
    avatar: '🥺',
    place: 'Trung tâm Chiếu phim Quốc gia',
    sharedBy: 'Kim Anh • 22 tuổi',
    content: 'Mình đứng đợi ở sảnh rạp với hai vé xem phim trên tay, định bụng tạo bất ngờ cho người yêu. Nhưng bất ngờ lại dành cho mình khi thấy người ấy bước ra từ phòng chiếu kế bên, tay trong tay với một người khác. Mình đã ném hai chiếc vé vào thùng rác rồi bỏ chạy trong cơn mưa tầm tã của phố Láng Hạ. #danhghen #nguoithuba',
    time: '1 tuần trước',
    likes: 112,
    images: [
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80'
    ]
  },
  {
    id: 'mem-hoanhanh-1',
    author: 'Hồng Anh',
    avatar: '👧',
    place: 'Beta Cinemas Xuân Thủy',
    sharedBy: 'Hồng Anh',
    content: 'Đó là suất chiếu muộn ngày 14/2 năm ngoái. Mình đi xem một mình và vô tình ngồi cạnh một bạn cũng đi lẻ. Đến đoạn phim cảm động, cả hai đều sụt sùi rồi tự nhiên quay sang nhìn nhau cười trừ. Beta nhỏ thôi nhưng cái không khí gần gũi ấy làm mình thấy bớt cô đơn hẳn trong ngày lễ tình nhân ♥️',
    time: '2 tuần trước',
    likes: 93,
    images: [
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80',
      'https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=600&q=80'
    ]
  },
  {
    id: 'mem-hoanhanh-2',
    author: 'Hồng Anh',
    avatar: '👧‍🏫',
    place: 'Quán Nướng 4AM Korean BBQ',
    sharedBy: 'Hồng Anh',
    content: '1 giờ sáng, cả lũ kéo nhau ra 197 Quan Hoa, gọi đầy một bàn thịt nướng và vài chai soju. Trong làn khói nghi nguút và tiếng xèo xèo của thịt trên vỉ, bọn mình đã cùng hứa sẽ còn sát cánh bên nhau nhiều dự án nữa. Vị thịt nướng đêm đó là vị của sự nhẹ nhõm và tình đồng đội ✨🔥',
    time: '3 tuần trước',
    likes: 78,
    images: [
      'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80'
    ]
  },
  {
    id: 'mem-vananh-1',
    author: 'Vân Anh',
    avatar: '🧘‍♀️',
    place: 'Quán café KTX ĐH Ngoại Ngữ',
    sharedBy: 'Vân Anh 24042233',
    content: 'Có hôm mình ngồi đây từ sáng đến tối chỉ để chạy deadline môn cuối kỳ. Từ hoảng loạn → bình tĩnh → hoàn thành xong, cảm giác kiểu “sống sót sau mùa thi”. Quán không chỉ là chỗ học mà còn là nơi cứu mình khỏi mấy pha nước rút “toang thật sự” 💪☕',
    time: '1 tuần trước',
    likes: 45,
    images: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80'
    ]
  },
]

// ── Mini Image Carousel ──
function MemoryCarousel({ images, memId }) {
  const [idx, setIdx] = useState(0)
  if (!images || images.length === 0) return null

  const resolveImageSrc = (rawSrc) => {
    if (!rawSrc) return ''
    if (/^https?:\/\//i.test(rawSrc)) return rawSrc

    const normalized = rawSrc.startsWith('public/') ? `/${rawSrc.slice(7)}` : rawSrc
    return encodeURI(normalized)
  }

  const prev = (e) => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length) }
  const next = (e) => { e.stopPropagation(); setIdx(i => (i + 1) % images.length) }
  return (
    <div className="mem-carousel">
      <img src={resolveImageSrc(images[idx])} alt={`Ảnh ${idx + 1}`} className="mem-carousel__img" loading="lazy" />
      {images.length > 1 && (
        <>
          <button className="mem-carousel__btn mem-carousel__btn--prev" onClick={prev} aria-label="Ảnh trước">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button className="mem-carousel__btn mem-carousel__btn--next" onClick={next} aria-label="Ảnh tiếp theo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
          </button>
          <div className="mem-carousel__dots">
            {images.map((_, i) => (
              <button key={i} className={`mem-carousel__dot ${i === idx ? 'active' : ''}`}
                onClick={e => { e.stopPropagation(); setIdx(i) }} aria-label={`Ảnh ${i + 1}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function DuAn() {
  const [activeSpot, setActiveSpot] = useState(spotlightPlaces[0])
  const [memories, setMemories] = useState(sampleMemories)
  const [likedIds, setLikedIds] = useState([])
  const [newMemory, setNewMemory] = useState({ author: '', place: '', content: '' })
  const [memSubmitted, setMemSubmitted] = useState(false)
  const [suggestInput, setSuggestInput] = useState('')
  const [suggestions, setSuggestions] = useState(suggestedPlaces)
  const [suggestSent, setSuggestSent] = useState(false)

  const handleLike = (id) => {
    if (likedIds.includes(id)) return
    setLikedIds(prev => [...prev, id])
    setMemories(prev => prev.map(m => m.id === id ? { ...m, likes: m.likes + 1 } : m))
  }

  const handleMemorySubmit = (e) => {
    e.preventDefault()
    if (!newMemory.author.trim() || !newMemory.content.trim() || !newMemory.place.trim()) return
    const mem = {
      id: `mem-${Date.now()}`,
      author: newMemory.author,
      avatar: '🙋',
      place: newMemory.place,
      content: newMemory.content,
      time: 'Vừa xong',
      likes: 0,
      image: null
    }
    setMemories(prev => [mem, ...prev])
    setMemSubmitted(true)
    setNewMemory({ author: '', place: '', content: '' })
  }

  const handleSuggest = (e) => {
    e.preventDefault()
    if (!suggestInput.trim()) return
    setSuggestions(prev => [
      { id: `suggest-${Date.now()}`, name: suggestInput, emoji: '📍', district: 'Hà Nội', isNew: true },
      ...prev
    ])
    setSuggestInput('')
    setSuggestSent(true)
    setTimeout(() => setSuggestSent(false), 3000)
  }

  return (
    <section id="du-an" className="du-an" aria-labelledby="du-an-title">
      <div className="container">

        {/* ── HEADER ── */}
        <div className="du-an__header">
          <p className="section-subtitle">✦ Hà Nội trong ký ức ✦</p>
          <h2 id="du-an-title" className="section-title">Đi đâu khó có — Hanoi Memory Map</h2>
          <div className="divider divider-center" />
          <p className="section-description" style={{ margin: '0 auto', textAlign: 'center' }}>
            Khám phá những địa điểm gắn liền với ký ức của người Hà Nội — chia sẻ kỷ niệm của bạn và lưu giữ hồn phố.
          </p>
        </div>

        {/* ══════════════════════════════════════
            1. BẢN ĐỒ LỚN TRÊN CÙNG
        ══════════════════════════════════════ */}
        <div className="map-section" id="ban-do-ha-noi">
          <div className="map-section__header">
            <div className="map-section__title-row">
              <span className="map-section__pin" aria-hidden="true">📍</span>
              <h3 className="map-section__title">Bản đồ Hà Nội</h3>
            </div>
            <p className="map-section__sub">Nhấn vào địa điểm bên dưới để xem trên bản đồ</p>
          </div>

          <div className="map-section__map-wrapper">
            <iframe
              id="hanoi-main-map"
              key={activeSpot.id}
              src={`https://maps.google.com/maps?q=${activeSpot.mapQuery}&output=embed&hl=vi&z=15`}
              width="100%"
              height="460"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Bản đồ: ${activeSpot.name}`}
              aria-label={`Bản đồ Google Maps hiển thị ${activeSpot.name}`}
            />
            {/* Active spot overlay badge */}
            <div className="map-section__active-badge">
              <span aria-hidden="true">{activeSpot.emoji}</span>
              <div>
                <p className="map-section__active-name">{activeSpot.name}</p>
                <p className="map-section__active-district">{activeSpot.district}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            2. ĐỊA ĐIỂM NỔI BẬT
        ══════════════════════════════════════ */}
        <div className="spotlight-section" id="dia-diem-noi-bat">
          <div className="spotlight-section__label">
            <span aria-hidden="true">🌟</span> Địa điểm nổi bật
          </div>

          <div className="spotlight-section__grid">
            {spotlightPlaces.map((place) => (
              <button
                key={place.id}
                id={`spot-${place.id}`}
                className={`spot-card ${activeSpot.id === place.id ? 'spot-card--active' : ''}`}
                onClick={() => setActiveSpot(place)}
                aria-pressed={activeSpot.id === place.id}
                aria-label={`Xem ${place.name} trên bản đồ`}
                style={{ '--spot-color': place.color }}
              >
                <div className="spot-card__emoji" aria-hidden="true">{place.emoji}</div>
                <div className="spot-card__body">
                  <h4 className="spot-card__name">{place.name}</h4>
                  <p className="spot-card__district">{place.district}</p>
                  <p className="spot-card__desc">{place.description}</p>
                  <div className="spot-card__tags">
                    {place.tags.map(tag => (
                      <span key={tag} className="spot-card__tag">{tag}</span>
                    ))}
                  </div>
                  <div className="spot-card__footer">
                    <span className="spot-card__mem-count">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                      {place.memoryCount} ký ức
                    </span>
                    <span className="spot-card__view-hint">
                      {activeSpot.id === place.id ? '✓ Đang xem' : 'Xem bản đồ →'}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            3. CHIA SẺ MEMORY
        ══════════════════════════════════════ */}
        <div className="memory-section" id="chia-se-memory">
          <div className="memory-section__header">
            <div className="memory-section__label">
              <span aria-hidden="true">💭</span> Ký ức của bạn
            </div>
            <p className="memory-section__sub">
              Mỗi góc phố Hà Nội đều lưu giữ một kỷ niệm — hãy chia sẻ của bạn!
            </p>
          </div>

          <div className="memory-section__layout">
            {/* Form thêm memory */}
            <div className="memory-form-col">
              {!memSubmitted ? (
                <form
                  id="memory-form"
                  className="memory-form"
                  onSubmit={handleMemorySubmit}
                  aria-label="Form chia sẻ ký ức"
                >
                  <h4 className="memory-form__title">📝 Chia sẻ ký ức của bạn</h4>

                  <div className="memory-form__field">
                    <label htmlFor="mem-author" className="memory-form__label">Tên của bạn</label>
                    <input
                      id="mem-author"
                      type="text"
                      value={newMemory.author}
                      onChange={e => setNewMemory(p => ({ ...p, author: e.target.value }))}
                      placeholder="Nguyễn Văn A..."
                      className="memory-form__input"
                      required
                    />
                  </div>

                  <div className="memory-form__field">
                    <label htmlFor="mem-place" className="memory-form__label">Địa điểm</label>
                    <input
                      id="mem-place"
                      type="text"
                      value={newMemory.place}
                      onChange={e => setNewMemory(p => ({ ...p, place: e.target.value }))}
                      placeholder="Hồ Hoàn Kiếm, Phố Cổ..."
                      className="memory-form__input"
                      list="place-suggestions-list"
                      required
                    />
                    <datalist id="place-suggestions-list">
                      {spotlightPlaces.map(p => <option key={p.id} value={p.name} />)}
                    </datalist>
                  </div>

                  <div className="memory-form__field">
                    <label htmlFor="mem-content" className="memory-form__label">Kỷ niệm của bạn</label>
                    <textarea
                      id="mem-content"
                      value={newMemory.content}
                      onChange={e => setNewMemory(p => ({ ...p, content: e.target.value }))}
                      placeholder="Kể cho chúng tôi nghe về kỷ niệm của bạn tại đây..."
                      rows={4}
                      className="memory-form__textarea"
                      required
                    />
                  </div>

                  <button id="memory-submit-btn" type="submit" className="memory-form__submit btn btn-primary">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    Chia sẻ ký ức
                  </button>
                </form>
              ) : (
                <div className="memory-form__success" role="status">
                  <div style={{ fontSize: '2.5rem' }}>🎉</div>
                  <h4>Ký ức đã được chia sẻ!</h4>
                  <p>Cảm ơn bạn đã góp thêm một mảnh ký ức cho Hà Nội.</p>
                  <button
                    id="memory-reset-btn"
                    className="btn btn-outline"
                    onClick={() => setMemSubmitted(false)}
                  >
                    Chia sẻ thêm
                  </button>
                </div>
              )}
            </div>

            {/* Memory cards */}
            <div className="memory-cards-col">
              {memories.map((mem) => (
                <div key={mem.id} id={mem.id} className="memory-card">
                  <div className="memory-card__header">
                    <span className="memory-card__avatar" aria-hidden="true">{mem.avatar}</span>
                    <div className="memory-card__meta">
                      <p className="memory-card__author">{mem.author}</p>
                      <p className="memory-card__place">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="var(--color-primary)" stroke="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                        {mem.place}
                      </p>
                    </div>
                    <span className="memory-card__time">{mem.time}</span>
                  </div>
                  {mem.images && mem.images.length > 0 && (
                    <MemoryCarousel images={mem.images} memId={mem.id} />
                  )}
                  <p className="memory-card__content">{mem.content}</p>
                  <div className="memory-card__footer">
                    <button
                      id={`like-${mem.id}`}
                      className={`memory-card__like ${likedIds.includes(mem.id) ? 'liked' : ''}`}
                      onClick={() => handleLike(mem.id)}
                      aria-label={`Thích ký ức này (${mem.likes} lượt thích)`}
                      aria-pressed={likedIds.includes(mem.id)}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill={likedIds.includes(mem.id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                      {mem.likes}
                    </button>
                    <span className="memory-card__share">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                      Chia sẻ
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            4. GỢI Ý ĐỊA ĐIỂM KHÁC
        ══════════════════════════════════════ */}
        <div className="suggest-section" id="goi-y-dia-diem">
          <div className="suggest-section__header">
            <div className="suggest-section__label">
              <span aria-hidden="true">🗺️</span> Gợi ý địa điểm khác
            </div>
            <p className="suggest-section__sub">
              Bạn biết thêm địa điểm nào thú vị? Thêm vào bản đồ ký ức ngay!
            </p>
          </div>

          {/* Gợi ý chips */}
          <div className="suggest-section__chips" role="list" aria-label="Danh sách địa điểm gợi ý">
            {suggestions.map(s => (
              <div
                key={s.id}
                id={s.id}
                role="listitem"
                className={`suggest-chip ${s.isNew ? 'suggest-chip--new' : ''}`}
              >
                <span aria-hidden="true">{s.emoji}</span>
                <div>
                  <p className="suggest-chip__name">{s.name}</p>
                  <p className="suggest-chip__district">{s.district}</p>
                </div>
                {s.isNew && <span className="suggest-chip__badge">Mới</span>}
              </div>
            ))}
          </div>

          {/* Form gợi ý */}
          <form
            id="suggest-form"
            className="suggest-form"
            onSubmit={handleSuggest}
            aria-label="Form gợi ý địa điểm"
          >
            <div className="suggest-form__row">
              <input
                id="suggest-input"
                type="text"
                value={suggestInput}
                onChange={e => setSuggestInput(e.target.value)}
                placeholder="Nhập tên địa điểm bạn muốn gợi ý..."
                className="suggest-form__input"
                aria-label="Tên địa điểm gợi ý"
                required
              />
              <button id="suggest-submit-btn" type="submit" className="suggest-form__btn btn btn-gold">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
                Gợi ý
              </button>
            </div>
            {suggestSent && (
              <p className="suggest-form__thanks" role="status" aria-live="polite">
                ✅ Cảm ơn bạn đã gợi ý! Địa điểm đã được thêm vào danh sách.
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  )
}
