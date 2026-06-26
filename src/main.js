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

document.querySelector('#app').innerHTML = `
  <div class="announcement">WELCOME GIFT · 회원가입 시 청첩장 샘플 키트 1종 증정 <button aria-label="공지 닫기">×</button></div>
  <header class="header">
    <a class="logo" href="#top" aria-label="서제로 홈">seozero<span>°</span></a>
    <nav class="desktop-nav" aria-label="주요 메뉴">
      <a href="#collection">COLLECTION</a><a href="#story">OUR STORY</a><a href="#guide">GUIDE</a>
    </nav>
    <div class="header-actions"><button class="search" aria-label="검색">⌕</button><a href="#cart">CART <span>(0)</span></a><button class="menu" aria-label="메뉴 열기"><i></i><i></i></button></div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">WEDDING STATIONERY, MADE WITH CARE</p>
        <h1>두 사람의 시작을<br><em>가장 아름답게</em> 전하는 법.</h1>
        <p class="intro">서제로는 결혼이라는 특별한 날의 첫 장면을 만듭니다.<br>오래 바라볼수록 마음에 남는 청첩장을 소개합니다.</p>
        <a class="arrow-link" href="#collection">COLLECTION <b>→</b></a>
      </div>
      <div class="hero-visual" aria-label="서제로 청첩장 컬렉션">
        <div class="paper-shadow shadow-one"></div><div class="paper-shadow shadow-two"></div>
        <div class="hero-card"><span class="script">our wedding day</span><span class="names">EUNSEO<br>&amp; JIHUN</span><span class="date">OCTOBER 18, 2026</span><i class="flower flower-a"></i><i class="flower flower-b"></i></div>
        <div class="hero-caption">01 — A MOMENT IN BLOOM</div>
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
      <div class="custom-copy"><p class="eyebrow">YOUR OWN CHAPTER</p><h2>우리다운 청첩장을<br>함께 만들어가요.</h2><p>종이, 글꼴, 색감부터 문장 하나까지.<br>서제로의 맞춤 디자인 서비스로 온전히 당신다운<br>첫인사를 완성해 보세요.</p><a class="dark-button" href="#consult">1:1 DESIGN CONSULTING <span>→</span></a></div>
    </section>

    <section class="journal"><p class="eyebrow">FROM SEOZERO JOURNAL</p><h2>결혼 준비의 순간들</h2><div class="journal-grid"><a href="#"><span>01</span><strong>청첩장, 언제부터 준비해야 할까요?</strong><b>→</b></a><a href="#"><span>02</span><strong>우리에게 어울리는 종이 고르기</strong><b>→</b></a><a href="#"><span>03</span><strong>마음을 전하는 청첩장 문구들</strong><b>→</b></a></div></section>
  </main>
  <footer><div class="footer-top"><a class="logo" href="#top">seozero<span>°</span></a><p>인생의 가장 빛나는 시작을<br>아름다운 종이 위에 기록합니다.</p><a class="instagram" href="#instagram">INSTAGRAM ↗</a></div><div class="footer-bottom"><span>© 2026 SEOZERO. ALL RIGHTS RESERVED.</span><span>SEOUL, KOREA · HELLO@SEOZERO.COM</span><span>TERMS &nbsp; PRIVACY</span></div></footer>
`
