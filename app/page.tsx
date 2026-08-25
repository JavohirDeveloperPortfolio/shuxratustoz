"use client";

const BOT_URL = "https://t.me/ShuxratEshmurodovBot?start=target_sayt_1";

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21.94 4.3 18.9 19.1c-.23 1.02-.84 1.27-1.7.79l-4.7-3.47-2.27 2.18c-.25.25-.46.46-.94.46l.34-4.78L18.6 6.3c.38-.34-.08-.53-.6-.19L7.2 13.06l-4.66-1.46c-1.01-.32-1.03-1.01.21-1.5L20.63 2.9c.84-.31 1.58.2 1.31 1.4Z" />
  </svg>
);

export default function Page() {
  return (
    <main className="stage">
      <div className="grain" />

      <div className="wrap card">
        {/* Rasm */}
        <div className="avatar">
          <img src="/shuxrat.jpg" alt="Shuxrat Eshmurodov" width={112} height={112} />
        </div>

        {/* Asosiy CTA */}
        <div className="cta-zone">
          <a className="cta" href={BOT_URL}>
            <TelegramIcon />
            <span>Videoni koʻrish uchun kiring</span>
          </a>
          <p className="tap-hint">
            <span className="finger" aria-hidden="true">👆</span>
            Telefondan shu tugmani bosing
          </p>
        </div>

        {/* Qoʻllanma — tugma bosilgandagi holatlar */}
        <div className="steps">
          <div className="step">
            <span className="num">1</span>
            <span className="txt">
              <b>Tugmani bosing</b>
              <span>Yuqoridagi sariq tugmani bosing</span>
            </span>
          </div>
          <div className="step">
            <span className="num">2</span>
            <span className="txt">
              <b>Botga kiring</b>
              <span>“Boshlash / Start” tugmasini bosing</span>
            </span>
          </div>
          <div className="step">
            <span className="num">3</span>
            <span className="txt">
              <b>Videoni koʻring</b>
              <span>Darslik toʻgʻridan-toʻgʻri Telegramga tushadi</span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
