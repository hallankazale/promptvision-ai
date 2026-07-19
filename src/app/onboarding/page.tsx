import Link from "next/link";
import styles from "./onboarding.module.css";

const achievements = [
  { icon: "◷", title: "Economizar tempo", text: "Análises rápidas e precisas" },
  { icon: "◎", title: "Criar prompts que convertem", text: "Mais engajamento e vendas" },
  { icon: "↗", title: "Acompanhar evolução", text: "Veja sua performance crescer" },
  { icon: "✓", title: "Tomar decisões inteligentes", text: "Insights claros para agir" },
];

const features = [
  { icon: "✦", title: "IA avançada", text: "Analisa cada detalhe do seu vídeo" },
  { icon: "▥", title: "Insights reais", text: "Mostra o que funciona e o que melhorar" },
  { icon: "↗", title: "Mais resultados", text: "Prompts otimizados para conversão" },
];

export default function OnboardingPage() {
  return (
    <main className={styles.shell}>
      <div className={styles.topbar}>
        <div className={styles.progress} aria-label="Etapa 1 de 4">
          <span className={styles.progressActive} />
          <span />
          <span />
          <span />
        </div>
        <Link className={styles.skip} href="/login">Pular</Link>
      </div>

      <section className={styles.hero}>
        <span className={styles.badge}>PRIMEIROS PASSOS</span>
        <h1>
          Bem-vindo ao <span>PromptVision AI</span>
        </h1>
        <p>A IA que transforma seus vídeos em prompts poderosos e resultados reais.</p>
      </section>

      <section className={styles.visual} aria-label="Demonstração visual do aplicativo">
        <div className={styles.phone}>
          <div className={styles.phoneTop} />
          <div className={styles.videoCard}>
            <div className={styles.play}>▶</div>
          </div>
          <div className={styles.timeline}><span /></div>
          <div className={styles.chart}>
            {[32, 55, 42, 68, 50, 75, 62, 86].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>

        <div className={styles.featureStack}>
          {features.map((feature) => (
            <article className={styles.featureCard} key={feature.title}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <div>
                <strong>{feature.title}</strong>
                <p>{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.achievementPanel}>
        <h2>O que você vai conseguir</h2>
        <div className={styles.achievementGrid}>
          {achievements.map((item) => (
            <article key={item.title}>
              <div className={styles.achievementIcon}>{item.icon}</div>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.giftCard}>
        <div className={styles.giftIcon}>✦</div>
        <div>
          <strong>Ganhe 3 análises grátis</strong>
          <p>Teste o poder da plataforma sem cartão.</p>
        </div>
        <span>›</span>
      </div>

      <div className={styles.actions}>
        <Link className={styles.primaryAction} href="/login">Vamos começar <span>→</span></Link>
        <button className={styles.secondaryAction} type="button">Fazer tour rápido <span>→</span></button>
      </div>
    </main>
  );
}
