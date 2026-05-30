
import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <nav class="navbar">
      <div class="nav-container">
        <a href="#" class="logo">Farhan<span>Digital</span></a>
        <div class="nav-links">
          <a href="#services">Services</a>
          <a href="#features">Why Us</a>
          <a href="#contact" class="nav-btn">Contact Us</a>
        </div>
      </div>
    </nav>

    <section class="hero-section" id="services">
      <div class="hero-card">
        <h1>Farhan Digital Services</h1>
        <p class="subtitle">Hum aapke business ko digital duniya mein aik brand banatay hain. Aaj hi apni online pehchan qaim karein.</p>
        
        <div class="services-box">
          <h3>Hamari Khususiyaat:</h3>
          <ul>
            <li>
              <span class="icon">✨</span> 
              <div>
                <strong>Khubsoorat Website Design</strong>
                <p>Modern aur responsive layouts jo har screen par fit aayein.</p>
              </div>
            </li>
            <li>
              <span class="icon">📈</span> 
              <div>
                <strong>Online Business Advertising</strong>
                <p>Targeted ads k zariye sahi customers tak pohanchain.</p>
              </div>
            </li>
            <li>
              <span class="icon">📱</span> 
              <div>
                <strong>Social Media Marketing</strong>
                <p>Aapke brand ki social media par behtareen pehchan.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="features-section" id="features">
      <h2 class="section-title">Hum Se Kaam Kyun Karwayein?</h2>
      <div class="features-grid">
        <div class="feature-item">
          <div class="f-icon">🚀</div>
          <h4>Fast Delivery</h4>
          <p>Aapka kaam waqt par aur bina kisi takheer ke mukammal kiya jata hai.</p>
        </div>
        <div class="feature-item">
          <div class="f-icon">🔒</div>
          <h4>Secure & Reliable</h4>
          <p>Modern tools aur secure coding standard ke sath behtareen quality.</p>
        </div>
        <div class="feature-item">
          <div class="f-icon">🤝</div>
          <h4>24/7 Support</h4>
          <p>Kaam ke baad bhi jab aapko zaroorat ho, hum har waqt hazir hain.</p>
        </div>
      </div>
    </section>

    <section class="cta-section" id="contact">
      <div class="cta-container">
        <h2>Kiya Aap Apne Business Ko Grow Karna Chahte Hain?</h2>
        <p>Apna naya project shuru karwane ya mofat mashwaray ke liye abhi click karein.</p>
        <a href="https://wa.me/92XXXXXXXXXX?text=Hi%20Farhan,%20I%20want%20to%20discuss%20a%20project." target="_blank" class="whatsapp-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.907h.004c4.368 0 7.926-3.558 7.93-7.93a7.86 7.86 0 0 0-2.33-5.645ZM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592Zm3.69-4.936c-.202-.101-1.202-.593-1.387-.66-.185-.066-.32-.1-.454.1-.134.2-.522.66-.64.794-.118.134-.237.151-.439.05-.202-.101-.85-.314-1.622-1.003-.6-.535-1.005-1.199-1.124-1.402-.119-.202-.013-.311.088-.412.09-.09.202-.236.303-.353.101-.118.134-.2.202-.336.067-.134.034-.252-.017-.353-.05-.101-.454-1.093-.622-1.498-.164-.395-.325-.34-.455-.347-.117-.006-.252-.007-.389-.007-.137 0-.361.051-.55.257-.189.206-.722.706-.722 1.72 0 1.014.738 1.993.84 2.13.101.137 1.451 2.215 3.515 3.102.491.211.874.337 1.173.433.494.157.943.135 1.299.082.397-.059 1.202-.491 1.371-.964.169-.472.169-.877.118-.962-.05-.085-.185-.135-.388-.236Z"/>
          </svg>
          Contact on WhatsApp
        </a>
      </div>
    </section>

    <footer class="footer">
      <p>&copy; 2026 Farhan Digital Services. All Rights Reserved.</p>
    </footer>
  </div>
`