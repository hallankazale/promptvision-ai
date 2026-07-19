import Link from "next/link";
import styles from "../auth.module.css";

export default function LoginPage() {
  return (
    <main className={styles.shell}>
      <div className={styles.orbOne} />
      <div className={styles.orbTwo} />

      <section className={styles.card}>
        <Link className={styles.back} href="/onboarding" aria-label="Voltar ao onboarding">←</Link>

        <div className={styles.brand}>
          <div className={styles.brandMark}>▶</div>
          <strong>PromptVision <span>AI</span></strong>
        </div>

        <div className={styles.intro}>
          <span className={styles.badge}>BEM-VINDO DE VOLTA</span>
          <h1>Entre para continuar criando conteúdos que vendem.</h1>
          <p>Acesse seus projetos, análises e prompts salvos.</p>
        </div>

        <form className={styles.form}>
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
              <input type="password" placeholder="Digite sua senha" autoComplete="current-password" />
              <button className={styles.eyeButton} type="button" aria-label="Mostrar senha">◉</button>
            </div>
          </label>

          <div className={styles.options}>
            <label className={styles.checkbox}>
              <input type="checkbox" />
              <span>Lembrar acesso</span>
            </label>
            <button type="button" className={styles.textButton}>Esqueci minha senha</button>
          </div>

          <Link className={styles.primaryAction} href="/dashboard">Entrar <span>→</span></Link>
        </form>

        <div className={styles.divider}><span>ou continue com</span></div>

        <div className={styles.socialGrid}>
          <button type="button" className={styles.socialButton}><strong>G</strong> Google</button>
          <button type="button" className={styles.socialButton}><strong></strong> Apple</button>
        </div>

        <p className={styles.switchText}>Ainda não possui uma conta? <Link href="/cadastro">Criar conta</Link></p>

        <div className={styles.securityNote}>✓ Seus dados ficam protegidos e criptografados</div>
      </section>
    </main>
  );
}
