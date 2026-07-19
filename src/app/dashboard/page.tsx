import Link from "next/link";
import styles from "./dashboard.module.css";

const metrics = [
  { icon: "▣", label: "Análises", value: "28", change: "+12 este mês", tone: "purple" },
  { icon: "↗", label: "Visualizações", value: "145K", change: "+18.5%", tone: "blue" },
  { icon: "🛒", label: "Conversões", value: "3.2K", change: "+24.7%", tone: "green" },
  { icon: "♡", label: "Engajamento", value: "24.6%", change: "+6.3%", tone: "pink" },
];

const recent = [
  { title: "Perfume La Vie Est Belle", age: "Analisado há 2 horas", views: "12.5K", sales: "285", engagement: "18.7%", score: 92, level: "Excelente", art: "perfume" },
  { title: "Tênis Nike Revolution 7", age: "Analisado há 1 dia", views: "8.3K", sales: "156", engagement: "12.3%", score: 78, level: "Bom", art: "shoe" },
  { title: "Máscara de Cílios Maybelline", age: "Analisado há 2 dias", views: "6.9K", sales: "98", engagement: "9.8%", score: 65, level: "Regular", art: "beauty" },
];

export default function DashboardPage() {
  return (
    <main className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.brandWrap}>
          <div className={styles.brandMark}>✦</div>
          <div>
            <div className={styles.brand}>PromptVision <span>AI</span></div>
            <p>Transforme vídeos em resultados reais</p>
          </div>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.notification} type="button" aria-label="Notificações">♧<span>3</span></button>
          <button className={styles.avatar} type="button" aria-label="Abrir perfil">H</button>
        </div>
      </header>

      <section className={styles.heroCard}>
        <div className={styles.heroCopy}>
          <p className={styles.hello}>Olá, Hallan! 👋</p>
          <h1>Pronto para criar seu próximo vídeo de sucesso?</h1>
          <Link href="/nova-analise" className={styles.primaryButton}><span>＋</span> Nova análise</Link>
        </div>
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.visualGlow} />
          <div className={styles.floatingChart}>↗</div>
          <div className={styles.floatingTarget}>◎</div>
          <div className={styles.phoneCard}>
            <div className={styles.phoneSpeaker} />
            <div className={styles.playButton}>▶</div>
            <div className={styles.sparkline}><i /><i /><i /><i /><i /><i /></div>
          </div>
          <div className={styles.pedestal} />
        </div>
      </section>

      <section className={styles.metricsGrid} aria-label="Resumo de desempenho">
        {metrics.map((metric) => (
          <article className={`${styles.metricCard} ${styles[metric.tone]}`} key={metric.label}>
            <div className={styles.metricIcon}>{metric.icon}</div>
            <p>{metric.label}</p>
            <strong>{metric.value}</strong>
            <span>{metric.change} ↑</span>
          </article>
        ))}
      </section>

      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2>Performance dos últimos 7 dias</h2>
          <button type="button">7 dias⌄</button>
        </div>
        <div className={styles.chartArea} aria-label="Gráfico visual de desempenho">
          <div className={styles.chartLabels}><span>15K</span><span>10K</span><span>5K</span><span>0</span></div>
          <div className={styles.gridLines}><i /><i /><i /><i /></div>
          <svg viewBox="0 0 640 230" preserveAspectRatio="none" role="img" aria-label="Linhas de visualizações, conversões e engajamento">
            <defs>
              <linearGradient id="purpleFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#9b5cff" stopOpacity=".36"/><stop offset="100%" stopColor="#9b5cff" stopOpacity="0"/></linearGradient>
              <linearGradient id="blueFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#348dff" stopOpacity=".2"/><stop offset="100%" stopColor="#348dff" stopOpacity="0"/></linearGradient>
            </defs>
            <path className={styles.areaPurple} d="M10,150 C90,125 140,122 200,80 S300,25 355,48 S430,55 485,100 S565,85 630,62 L630,220 L10,220 Z" />
            <path className={styles.areaBlue} d="M10,180 C90,165 150,180 220,135 S320,125 375,168 S470,130 520,158 S590,133 630,145 L630,220 L10,220 Z" />
            <path className={styles.linePurple} d="M10,150 C90,125 140,122 200,80 S300,25 355,48 S430,55 485,100 S565,85 630,62" />
            <path className={styles.lineBlue} d="M10,180 C90,165 150,180 220,135 S320,125 375,168 S470,130 520,158 S590,133 630,145" />
            <path className={styles.lineGreen} d="M10,205 C95,198 155,195 220,178 S320,175 380,202 S465,170 525,190 S585,178 630,188" />
          </svg>
          <div className={styles.dates}><span>12/06</span><span>13/06</span><span>14/06</span><span>15/06</span><span>16/06</span><span>17/06</span><span>18/06</span></div>
        </div>
        <div className={styles.legend}><span><i className={styles.dotPurple}/>Visualizações</span><span><i className={styles.dotGreen}/>Conversões</span><span><i className={styles.dotBlue}/>Engajamento</span></div>
      </section>

      <section className={`${styles.panel} ${styles.recentPanel}`}>
        <div className={styles.panelHeader}>
          <h2>Análises recentes</h2>
          <Link href="/projetos">Ver todas ›</Link>
        </div>
        <div className={styles.recentList}>
          {recent.map((item) => (
            <article className={styles.recentItem} key={item.title}>
              <div className={`${styles.thumbnail} ${styles[item.art]}`}><span>▶</span><small>00:{item.score === 92 ? "45" : item.score === 78 ? "30" : "22"}</small></div>
              <div className={styles.recentContent}>
                <h3>{item.title}</h3>
                <p>{item.age}</p>
                <div className={styles.chips}><span>◉ {item.views}</span><span>🛒 {item.sales}</span><span>♡ {item.engagement}</span></div>
              </div>
              <div className={styles.scoreWrap}>
                <div className={styles.score} style={{ "--score": `${item.score * 3.6}deg` } as React.CSSProperties}>{item.score}</div>
                <span>{item.level}</span>
              </div>
              <button className={styles.more} type="button" aria-label={`Mais opções para ${item.title}`}>⋮</button>
            </article>
          ))}
        </div>
      </section>

      <nav className={styles.bottomNav} aria-label="Navegação principal">
        <Link className={styles.activeNav} href="/dashboard"><span>▦</span>Dashboard</Link>
        <Link href="/projetos"><span>▱</span>Projetos</Link>
        <Link className={styles.addButton} href="/nova-analise" aria-label="Nova análise">＋</Link>
        <Link href="/biblioteca"><span>▤</span>Biblioteca</Link>
        <Link href="/perfil"><span>◎</span>Perfil</Link>
      </nav>
    </main>
  );
}
