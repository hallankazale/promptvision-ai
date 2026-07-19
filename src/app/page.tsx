import Link from "next/link";

const steps = [
  ["🔗", "Cole o link ou envie o vídeo", "Cole o link do TikTok, Instagram ou YouTube Shorts, ou envie o arquivo."],
  ["🧠", "IA analisa cada detalhe", "Analisamos o gancho, estrutura, gatilhos, emoções, CTA e tudo que faz o vídeo vender."],
  ["📄", "Geramos o prompt otimizado", "Você recebe um prompt completo e roteiro pronto para criar seu vídeo."],
  ["🚀", "Recrie, publique e venda mais", "Use o prompt para criar conteúdos irresistíveis e aumentar suas vendas."],
];

const resources = [
  ["⌕", "Análise completa por IA", "Entendemos o que faz o vídeo funcionar de verdade."],
  ["◎", "Identificação de gatilhos", "Descubra os gatilhos mentais que geram desejo e ação."],
  ["▤", "Prompt e roteiro prontos", "Receba um prompt detalhado e roteiro para gravar."],
  ["⚡", "Rápido e preciso", "Análises completas em poucos segundos com IA avançada."],
  ["▣", "Copie, edite e exporte", "Edite, copie ou exporte seu prompt em TXT ou PDF."],
  ["▱", "Histórico organizado", "Tudo salvo e organizado para você acessar quando quiser."],
];

const triggers = ["Gancho identificado", "Estrutura analisada", "Gatilhos encontrados", "Emoção principal", "Nota do vídeo"];

export default function HomePage() {
  return (
    <main className="landing-page">
      <section className="landing-hero">
        <div className="landing-container">
          <header className="landing-header">
            <Link href="/" className="landing-brand"><span className="landing-logo">▶</span><strong>PromptVision <em>AI</em></strong></Link>
            <nav className="desktop-nav" aria-label="Navegação principal">
              <a href="#recursos">Recursos</a><a href="#como-funciona">Como funciona</a><a href="#precos">Preços</a><a href="#depoimentos">Depoimentos</a><a href="#faq">FAQ</a>
            </nav>
            <div className="landing-actions"><Link href="/login">Entrar</Link><Link className="top-cta" href="/onboarding">Começar grátis →</Link></div>
          </header>

          <div className="hero-grid">
            <div className="hero-copy">
              <span className="creator-badge">✦ IA PARA CRIADORES</span>
              <h1>Transforme vídeos<br/>que vendem em<br/><span>prompts e roteiros</span><br/>prontos para criar<br/>conteúdos melhores.</h1>
              <p>Cole o link de um vídeo viral, nossa IA analisa tudo e entrega um prompt detalhado + roteiro para você recriar e vender mais.</p>
              <div className="hero-form"><input aria-label="Link do vídeo" placeholder="Cole o link do vídeo aqui (TikTok, Reels, Shorts...)"/><Link href="/onboarding">Analisar vídeo grátis</Link></div>
              <div className="hero-trust"><span>✓ Grátis para começar</span><span>✓ Sem cartão de crédito</span><span>✓ Em segundos</span></div>
              <div className="social-proof"><div className="avatars"><i/><i/><i/><i/></div><div><b>★★★★★</b><small>+2.500 criadores já estão<br/>criando conteúdos que vendem</small></div></div>
            </div>

            <div className="analysis-preview">
              <div className="video-column"><span>Vídeo analisado</span><div className="mock-video"><div className="bottle"/><button aria-label="Reproduzir">▶</button><strong>Este sérum mudou<br/>minha pele!</strong><small>00:00 / 00:28</small></div></div>
              <div className="analysis-column"><div className="analysis-title"><span>✓</span> Análise concluída</div><div className="trigger-list">{triggers.map((item, index)=><div key={item}><span>{item}</span><b>{index === 0 ? "0–3s" : index === 1 ? "5 partes" : index === 2 ? "7 gatilhos" : index === 3 ? "Transformação" : "8.7/10"}</b></div>)}</div><div className="prompt-card"><h3>Prompt otimizado gerado</h3><p>Crie um vídeo vertical de 25 segundos para vender um sérum facial. Nos primeiros 2 segundos use um gancho forte que desperte curiosidade...</p><a href="#">Ver exemplo completo →</a></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="light-block how-block"><div className="landing-container"><span className="section-kicker">COMO FUNCIONA</span><h2>Do vídeo ao prompt perfeito em <span>4 passos</span></h2><p className="section-subtitle">Simples, rápido e poderoso. Em menos de 1 minuto você tem um roteiro completo.</p><div className="steps-grid">{steps.map(([icon,title,text], index)=><article key={title}><div className="step-icon">{icon}<i>{index+1}</i></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section id="recursos" className="light-block resources-block"><div className="landing-container"><span className="section-kicker">RECURSOS PODEROSOS</span><h2>Tudo que você precisa para criar<br/>conteúdos <span>que vendem</span></h2><div className="resources-grid">{resources.map(([icon,title,text])=><article key={title}><div className="resource-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section id="precos" className="light-block lower-block"><div className="landing-container lower-grid"><div><span className="section-kicker">PLANOS</span><h2>Escolha o plano ideal para você</h2><div className="pricing-grid"><article className="price-card"><h3>Grátis</h3><p>Perfeito para começar</p><strong>R$0 <small>/mês</small></strong><ul><li>3 análises por dia</li><li>Prompt básico</li><li>Exportação de texto</li><li>Histórico limitado</li></ul><Link href="/cadastro">Começar grátis</Link></article><article className="price-card pro"><span className="popular">MAIS POPULAR</span><h3>Pro</h3><p>Para criadores que querem resultados</p><strong>R$49 <small>/mês</small></strong><ul><li>Análises ilimitadas</li><li>Prompts ultra detalhados</li><li>Exportação (TXT, PDF)</li><li>Histórico completo</li><li>Suporte prioritário</li></ul><Link href="/cadastro">Começar agora</Link></article></div></div><div id="depoimentos" className="testimonials"><span className="section-kicker">CRIADORES QUE APROVAM</span><h2>O que nossos<br/>usuários dizem</h2><article><p>“O PromptVision AI mudou completamente meu jeito de criar vídeos. Agora eu crio conteúdos muito mais rápidos e minhas vendas aumentaram demais!”</p><strong>Lucas R.</strong><small>Dropshipper</small><b>★★★★★</b></article><article><p>“A análise é absurda de boa. Ele mostra exatamente o que eu precisava melhorar nos meus vídeos. Ferramenta essencial!”</p><strong>Camila S.</strong><small>Criadora de conteúdo</small><b>★★★★★</b></article></div></div></section>

      <section id="faq" className="light-block faq-block"><div className="landing-container"><span className="section-kicker">PERGUNTAS FREQUENTES</span><div className="faq-grid"><details><summary>Quais plataformas são suportadas?</summary><p>TikTok, Instagram Reels, YouTube Shorts e outros vídeos verticais.</p></details><details><summary>Como funciona a análise por IA?</summary><p>A IA identifica estrutura, ganchos, gatilhos, emoções e CTA.</p></details><details><summary>Meus vídeos ficam privados?</summary><p>Sim. O conteúdo é usado apenas durante a análise.</p></details><details><summary>Posso cancelar quando quiser?</summary><p>Sim, sem multa ou período mínimo.</p></details></div><div className="final-cta"><div className="landing-logo">▶</div><div><h3>Pronto para transformar seus conteúdos?</h3><p>Crie vídeos que prendem atenção e vendem mais com a ajuda da IA.</p></div><Link href="/onboarding">Começar grátis agora →</Link></div></div></section>

      <nav className="mobile-bottom-nav"><Link href="/">⌂<span>Início</span></Link><Link href="/dashboard">◷<span>Análises</span></Link><Link className="mobile-plus" href="/onboarding">＋</Link><Link href="#precos">♕<span>Planos</span></Link><Link href="/login">◎<span>Conta</span></Link></nav>
    </main>
  );
}
