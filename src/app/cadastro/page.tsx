import Link from "next/link";
import styles from "../auth.module.css";

export default function CadastroPage() {
  return (
    <main className={styles.shell}>
      <div className={styles.orbOne} />
      <div className={styles.orbTwo} />

      <section className={styles.card}>
        <Link className={styles.back} href="/login" aria-label="Voltar para o login">←</Link>

        <div className={styles.brand}>
          <div className={styles.brandMark}>▶</div>
          <strong>PromptVision <span>AI</span></strong>
        </div>

        <div className={styles.intro}>
          <span className={styles.badge}>CRIE SUA CONTA</span>
          <h1>Comece grátis e transforme vídeos em ideias prontas para vender.</h1>
          <p>Você recebe três análises gratuitas para conhecer a plataforma.</p>
        </div>

        <form className={styles.form}>
          <label>
            <span>Nome completo</span>
            <div className={styles.inputWrap}>
              <span className={styles.inputIcon}>◎</span>
              <input type="text" placeholder="Digite seu nome" autoComplete="name" />
            </div>
          </label>

          <label>
            <span>E-mail</span>
            <div className={styles.inputWrap}>
              <span className={styles.inputIcon}>✉</span>
              <input type="email" placeholder="voce@exemplo.com" autoComplete="email" />
            </div>
          </label>

          <label>
            <span>Senha</span>
            <div className={styles.inputWrap}>
              <span className={styles.inputIcon}>⌁</span>
              <input type="password" placeholder="Crie uma senha segura" autoComplete="new-password" />
              <button className={styles.eyeButton} type="button" aria-label="Mostrar senha">◉</button>
            </div>
          </label>

          <div className={styles.passwordHint}>
            <span className={styles.hintActive}>8+ caracteres</span>
            <span>1 número</span>
            <span>1 letra maiúscula</span>
          </div>

          <label className={styles.terms}>
            <input type="checkbox" />
            <span>Concordo com os <button type="button">Termos de Uso</button> e a <button type="button">Política de Privacidade</button>.</span>
          </label>

          <Link className={styles.primaryAction} href="/dashboard">Criar conta grátis <span>→</span></Link>
        </form>

        <div className={styles.divider}><span>ou cadastre-se com</span></div>

        <div className={styles.socialGrid}>
          <button type="button" className={styles.socialButton}><strong>G</strong> Google</button>
          <button type="button" className={styles.socialButton}><strong></strong> Apple</button>
        </div>

        <p className={styles.switchText}>Já possui uma conta? <Link href="/login">Entrar</Link></p>
      </section>
    </main>
  );
}
