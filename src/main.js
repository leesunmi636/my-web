import './style.css'

const products = [
  { tone: 'peony', no: '01', name: 'The Garden', ko: '피어나는 정원의 순간', price: '39,000' },
  { tone: 'blue', no: '02', name: 'Blue Hour', ko: '푸른 저녁의 약속', price: '36,000' },
  { tone: 'cream', no: '03', name: 'A Quiet Day', ko: '담백하고 따뜻한 하루', price: '32,000' },
  { tone: 'rose', no: '04', name: 'Love Letter', ko: '우리의 마음을 담은 편지', price: '42,000' },
]

const card = (product) => `
  <article class="product-card">
    <div class="product-art ${product.tone}">
      <span class="art-number">${product.no}</span>
      <div class="invite-card">
        <span class="mini-mark">S E O Z E R O</span>
        <span class="invite-title">${product.name}</span>
        <span class="invite-date">SATURDAY · 2:00 PM</span>
      </div>
    </div>
    <div class="product-info">
      <div><p>${product.name}</p><small>${product.ko}</small></div>
      <strong>₩ ${product.price}</strong>
    </div>
  </article>`

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyuAjjxtQM4EU1BA0_9gJGlgBOMktZzPdu6pCCpHKtaELYssDLvfTK1oPUo6QCOm52fbA/exec'

document.querySelector('#app').innerHTML = `
  <div class="announcement">WELCOME GIFT · 회원가입 시 청첩장 샘플 키트 1종 증정 <button aria-label="공지 닫기">×</button></div>
  <header class="header">
    <a class="logo header-logo" href="#top" aria-label="서제로 홈"><img src="/logo.png" alt="서제로"></a>
    <nav class="desktop-nav" aria-label="주요 메뉴">
      <a href="#collection">COLLECTION</a><a href="#story">OUR STORY</a><a href="#guide">GUIDE</a><a href="#form-board">양식 입력</a>
    </nav>
    <div class="header-actions"><button class="search" aria-label="검색">⌕</button><a href="#cart">CART <span>(0)</span></a><button class="menu" aria-label="메뉴 열기"><i></i><i></i></button></div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="main-hero-image">
        <img src="/main.png" alt="서제로 메인 청첩장 비주얼">
      </div>
      <div class="hero-copy">
        <p class="eyebrow">WEDDING STATIONERY, MADE WITH CARE</p>
        <h1>두 사람의 시작을<br><em>가장 아름답게</em> 전하는 법.</h1>
        <p class="intro">서제로는 결혼이라는 특별한 날의 첫 장면을 만듭니다.<br>오래 바라볼수록 마음에 남는 청첩장을 소개합니다.</p>
        <a class="arrow-link" href="#collection">COLLECTION <b>→</b></a>
      </div>
      <div class="hero-visual photo-visual" aria-label="서제로 청첩장 컬렉션">
        <img src="/photo.png" alt="서제로 청첩장 이미지">
      </div>
      <div class="hero-scroll">SCROLL TO DISCOVER <span>↓</span></div>
    </section>

    <section class="statement" id="story"><p class="eyebrow">SEOZERO'S PHILOSOPHY</p><h2>한 장의 종이 위에,<br>두 사람만의 <em>온도</em>를 담습니다.</h2><p>유행보다 오래 남는 디자인, 손끝에서 느껴지는 좋은 질감.<br>서제로는 당신의 이야기가 가장 자연스럽게 피어날 방법을 고민합니다.</p></section>

    <section class="collection" id="collection">
      <div class="section-heading"><div><p class="eyebrow">2026 SIGNATURE COLLECTION</p><h2>New Arrival</h2></div><a class="arrow-link" href="#all">VIEW ALL <b>→</b></a></div>
      <div class="product-grid">${products.map(card).join('')}</div>
    </section>

    <section class="custom" id="guide">
      <div class="custom-visual"><div class="custom-card"><span>SEOZERO</span><strong>J &amp; S</strong><small>WITH ALL OUR LOVE</small></div><span class="wax-seal">S</span></div>
      <div class="custom-copy"><p class="eyebrow">YOUR OWN CHAPTER</p><h2>우리다운 청첩장을<br>함께 만들어가요.</h2><p>종이, 글꼴, 색감부터 문장 하나까지.<br>서제로의 맞춤 디자인 서비스로 온전히 당신다운<br>첫인사를 완성해 보세요.</p><a class="dark-button" href="#form-board">양식 입력하기 <span>→</span></a></div>
    </section>

    <section class="form-board" id="form-board">
      <div class="section-heading"><div><p class="eyebrow">ORDER REQUEST BOARD</p><h2>양식 입력</h2></div><p class="board-note">청첩장 제작에 필요한 내용을 게시판 양식으로 남겨주세요.</p></div>
      <form class="board-form" id="board-form">
        <div class="board-row"><label for="request-title">제목</label><input id="request-title" name="title" type="text" placeholder="예: 청첩장 제작 문의드립니다" required></div>
        <div class="board-row split"><div><label for="bride">신부 성함</label><input id="bride" name="bride" type="text" placeholder="성함 입력" required></div><div><label for="groom">신랑 성함</label><input id="groom" name="groom" type="text" placeholder="성함 입력" required></div></div>
        <div class="board-row split"><div><label for="wedding-date">예식일</label><input id="wedding-date" name="weddingDate" type="date" required></div><div><label for="phone">연락처</label><input id="phone" name="phone" type="tel" placeholder="010-0000-0000" required></div></div>
        <div class="board-row"><label for="design-type">희망 디자인</label><select id="design-type" name="designType" required><option value="">디자인을 선택해주세요</option><option>The Garden</option><option>Blue Hour</option><option>A Quiet Day</option><option>Love Letter</option><option>맞춤 디자인 상담</option></select></div>
        <div class="board-row"><label for="request-message">요청 내용</label><textarea id="request-message" name="message" rows="7" placeholder="원하는 분위기, 수량, 문구, 종이 질감 등 제작에 필요한 내용을 적어주세요." required></textarea></div>
        <div class="board-actions"><p id="board-status">등록하면 구글 스프레드시트에 게시글이 저장됩니다.</p><button type="submit">등록하기</button></div>
      </form>
    </section>

    <section class="journal"><p class="eyebrow">FROM SEOZERO JOURNAL</p><h2>결혼 준비의 순간들</h2><div class="journal-grid"><a href="#"><span>01</span><strong>청첩장, 언제부터 준비해야 할까요?</strong><b>→</b></a><a href="#"><span>02</span><strong>우리에게 어울리는 종이 고르기</strong><b>→</b></a><a href="#"><span>03</span><strong>마음을 전하는 청첩장 문구들</strong><b>→</b></a></div></section>
  </main>
  <footer><div class="footer-top"><a class="logo footer-logo" href="#top" aria-label="서제로 홈"><img src="/logo.png" alt="서제로"></a><p>인생의 가장 빛나는 시작을<br>아름다운 종이 위에 기록합니다.</p><a class="instagram" href="#instagram">INSTAGRAM ↗</a></div><div class="footer-bottom"><span>© 2026 SEOZERO. ALL RIGHTS RESERVED.</span><span>SEOUL, KOREA · HELLO@SEOZERO.COM</span><span>TERMS &nbsp; PRIVACY</span></div></footer>
`

const boardForm = document.querySelector('#board-form')
const boardStatus = document.querySelector('#board-status')

boardForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  if (!GOOGLE_APPS_SCRIPT_URL) {
    boardStatus.textContent = 'Apps Script 배포 URL이 아직 연결되지 않았습니다.'
    boardStatus.className = 'is-error'
    return
  }

  const submitButton = boardForm.querySelector('button[type="submit"]')
  const payload = Object.fromEntries(new FormData(boardForm).entries())
  payload.createdAt = new Date().toISOString()

  submitButton.disabled = true
  boardStatus.textContent = '등록 중입니다...'
  boardStatus.className = ''

  try {
    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    })

    boardForm.reset()
    boardStatus.textContent = '등록되었습니다. 구글 스프레드시트에서 확인할 수 있습니다.'
    boardStatus.className = 'is-success'
  } catch {
    boardStatus.textContent = '등록에 실패했습니다. 잠시 후 다시 시도해주세요.'
    boardStatus.className = 'is-error'
  } finally {
    submitButton.disabled = false
  }
})
