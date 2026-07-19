import Link from "next/link";

const benefits = [
  ["✦", "Gancho", "identificado"],
  ["◎", "Gatilhos", "encontrados"],
  ["▤", "Roteiro", "estruturado"],
  ["✣", "Prompt", "otimizado"],
];

const steps = [
  ["1", "Envie o vídeo", "Cole o link do TikTok, Reels ou Shorts. O upload visual será adicionado nas próximas telas."],
  ["2", "A IA analisa tudo", "A interface mostra gancho, estrutura, emoção, gatilhos e chamada para ação."],
  ["3", "Receba o prompt", "O usuário recebe um prompt completo e um roteiro pronto para adaptar."],
  ["4", "Recrie e venda mais", "Use o resultado para produzir conteúdos melhores e testar novas versões."],
];

const cards = [
  ["⌕", "Análise completa", "Entenda visualmente o que faz o vídeo funcionar."],
  ["⚡", "Prompt otimizado", "Prompts detalhados focados em conversão."],
  ["▤", "Roteiro pronto", "Falas, cenas, legendas e CTA organizados."],
  ["▣", "Histórico", "Projetos salvos e fáceis de localizar."],
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="container">
          <header className="header">
            <div className="brand" aria-label="PromptVision AI">
              <span className="brand-mark">▶</span>
              <span>PromptVision <span className="brand-accent">AI</span></span>
            </div>
            <Link className="ghost-button" href="/login">Entrar</Link>
          </header>

          <span className="badge">✦ IA PARA CRIADORES</span>
          <h1>
            Transforme vídeos que vendem em <span className="gradient-text">prompts e roteiros</span> prontos para criar conteúdos melhores.
          </h1>
          <p className="lead">
            Cole o link de um vídeo viral e receba uma análise completa com prompt otimizado e roteiro pronto para recriar e vender mais.
          </p>

          <div className="video-preview" aria-label="Prévia visual de um vídeo analisado">
            <div className="video-inner">
              <div className="play">▶</div>
              <div className="video-title">O sérum que mudou minha pele!</div>
              <small>00:00 / 00:28</small>
            </div>
          </div>

          <form className="form">
            <label htmlFor="video-link" style={{ position: "absolute", left: "-9999px" }}>Link do vídeo</label>
            <input id="video-link" className="input" placeholder="Cole o link do vídeo aqui..." />
            <Link className="primary-button" href="/onboarding" style={{ display: "grid", placeItems: "center" }}>
              ✦ Analisar vídeo grátis
            </Link>
          </form>

          <div className="trust" aria-label="Benefícios iniciais">
            <span>✓ Grátis para começar</span>
            <span>✓ Sem cartão de crédito</span>
            <span>✓ Resultado em segundos</span>
          </div>

          <div className="features-strip">
            {benefits.map(([icon, title, subtitle]) => (
              <div className="feature-mini" key={title}>
                <div className="feature-icon">{icon}</div>
                <strong>{title}<br />{subtitle}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="light-section">
        <div className="container">
          <div className="eyebrow">Como funciona</div>
          <h2 className="section-title">Do vídeo ao prompt perfeito em 4 passos</h2>
          <div className="steps">
            {steps.map(([number, title, description]) => (
              <article className="step" key={number}>
                <div className="step-number">{number}</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>

          <div className="eyebrow" style={{ marginTop: 46 }}>Recursos poderosos</div>
          <h2 className="section-title">Tudo o que você precisa para criar conteúdos que vendem</h2>
          <div className="cards">
            {cards.map(([icon, title, description]) => (
              <article className="card" key={title}>
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="sticky-cta">
        <Link href="/onboarding" style={{ display: "block" }}>
          <button type="button">Começar grátis agora →</button>
        </Link>
      </div>
    </main>
  );
}
