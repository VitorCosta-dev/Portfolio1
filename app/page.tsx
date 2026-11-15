import { ArrowDown, ArrowDownRight, ArrowUpRight, Briefcase, Code2, Database, FileText, GraduationCap, Mail, MonitorCog, Phone } from "lucide-react";
import { Avatar } from "./avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BackToTop, ContactActions, PortfolioHeader, ProjectGallery } from "./portfolio-interactions";

const links = {
  linkedin: "https://www.linkedin.com/in/vitorfcosta/",
  github: "https://github.com/VitorCosta-dev",
};

function Spark({ className }: { className: string }) {
  return <svg className={className} viewBox="0 0 44 44" fill="none" aria-hidden="true"><path d="M22 0v44M0 22h44M6.45 6.45l31.1 31.1m0-31.1-31.1 31.1" stroke="currentColor" strokeWidth="2.5" /></svg>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <PortfolioHeader />

      <main id="conteudo" className="shell">
        <section id="inicio" className="hero" aria-labelledby="nome">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-label micro"><span>PORTFÓLIO</span><span className="tiny-line" /> <span>2026</span></div>
          <span className="hero-index micro" aria-hidden="true">FIG. 01 <span>✳</span></span>
          <div className="hero-visual">
            <h1 id="nome" className="hero-title"><span>VITOR</span><span>COSTA</span></h1>
            <Avatar />
          </div>
          <div className="hero-bottom">
            <div className="hero-summary">
              <Badge className="hero-badge"><i /> SUPORTE DE TI / DADOS / WEB</Badge>
              <p>Entendo o problema. Conecto os dados. Construo a solução. Experiência em suporte de TI aplicada a projetos de dados e web.</p>
            </div>
            <div className="hero-actions">
              <Button asChild size="lg" className="action action-lime"><a href="#projetos">Ver projetos <ArrowDown aria-hidden="true" /></a></Button>
              <Button asChild size="lg" variant="secondary" className="action action-black"><a href="/media/Curriculo_Vitor_Costa.pdf" download><FileText aria-hidden="true" /> Baixar currículo</a></Button>
            </div>
          </div>
        </section>

        <section className="projects" id="projetos" tabIndex={-1} aria-labelledby="projetos-titulo">
          <div className="section-header">
            <div><p className="micro kicker"><span>01</span> / PORTFÓLIO</p><h2 id="projetos-titulo">Projetos<span>.</span></h2></div>
            <ArrowDownRight className="section-arrow" aria-hidden="true" />
          </div>
          <p className="section-intro">Do problema à aplicação. Explore os projetos, as tecnologias e minha participação em cada entrega.</p>
          <ProjectGallery />
        </section>

        <section id="sobre" tabIndex={-1} className="about" aria-labelledby="sobre-titulo">
          <div className="about-editorial">
            <figure className="about-graphic">
              <img src="/media/vitor-foto-real.jpg" alt="Foto pessoal de Vitor Costa, com óculos e camiseta preta" width="1152" height="2048" loading="lazy" />
              <figcaption className="micro about-figure"><span>FIG. 02 / VITOR COSTA</span><span>GUARULHOS / SP</span></figcaption>
              <Spark className="about-spark" />
            </figure>
            <div className="about-copy">
              <p className="micro about-kicker"><span>02</span> / PERFIL</p>
              <h2 id="sobre-titulo">Sobre mim<span>.</span></h2>
              <p className="about-lead">Da operação de TI à análise de dados.</p>
              <p>Tenho experiência sólida em suporte de TI, com atuação em help desk, infraestrutura e suporte presencial. Na Galeria Magalu, sou responsável pelo suporte da loja, do atendimento aos usuários ao diagnóstico de incidentes em redes e equipamentos.</p>
              <p>Busco evoluir em Dados, BI e desenvolvimento web. Aplico SQL, Python e Power BI em projetos analíticos e React em aplicações web, levando a investigação de problemas e o cuidado com as pessoas para cada solução.</p>
              <a className="about-link" href={links.linkedin} target="_blank" rel="noopener noreferrer">Minha trajetória no LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a>
              <p className="about-personal"><span className="micro">FORA DA TELA</span> Gosto de ficção científica e de histórias sobre realidades alternativas. <em>Dark</em> é uma das minhas séries favoritas.</p>
            </div>
          </div>
          <section className="skills" id="competencias" tabIndex={-1} aria-labelledby="competencias-titulo">
            <div className="section-header"><div><p className="micro kicker"><span>03</span> / CAIXA DE FERRAMENTAS</p><h2 id="competencias-titulo">Competências<span>.</span></h2></div><ArrowDownRight className="section-arrow" aria-hidden="true" /></div>
            <p className="section-intro">Uma base prática em TI, conectada à construção de aplicações e à análise de informações.</p>
            <div className="skills-grid">
              <article className="skill-column"><Database aria-hidden="true" /><p className="micro">01 / ANÁLISE</p><h3>Dados & BI</h3><p>Organizar dados, modelar relações e transformar registros em indicadores.</p><div className="skill-tags">{["SQL", "PostgreSQL", "MySQL", "Python", "Power BI", "DAX", "Excel", "Streamlit"].map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}</div><a href="#projetos">Ver aplicação nos projetos <ArrowUpRight size={16} aria-hidden="true" /></a></article>
              <article className="skill-column"><Code2 aria-hidden="true" /><p className="micro">02 / CONSTRUÇÃO</p><h3>Desenvolvimento web</h3><p>Interfaces responsivas, integração com APIs e persistência de dados.</p><div className="skill-tags">{["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Node.js", "Express", "Supabase", "Git & GitHub"].map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}</div><a href={links.github} target="_blank" rel="noopener noreferrer">Explorar código <ArrowUpRight size={16} aria-hidden="true" /></a></article>
              <article className="skill-column"><MonitorCog aria-hidden="true" /><p className="micro">03 / OPERAÇÃO</p><h3>Suporte de TI</h3><p>Investigar incidentes e manter pessoas, equipamentos e serviços conectados.</p><div className="skill-tags">{["Active Directory", "Microsoft 365", "Windows & Linux", "Redes", "DNS / DHCP", "VPN", "Backup", "Dynamics 365"].map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}</div><a href="#curriculo">Conhecer minha experiência <ArrowUpRight size={16} aria-hidden="true" /></a></article>
            </div>
          </section>
          <section className="resume" id="curriculo" aria-labelledby="curriculo-titulo">
            <div className="resume-heading">
              <div><p className="micro kicker"><span>04</span> / TRAJETÓRIA</p><h3 id="curriculo-titulo">Experiência e formação<span>.</span></h3></div>
              <ArrowDownRight className="section-arrow" aria-hidden="true" />
            </div>
            <div className="resume-grid">
              <Card className="resume-card resume-experience">
                <h4 className="micro"><Briefcase size={17} aria-hidden="true" /> EXPERIÊNCIA PROFISSIONAL</h4>
                <ol className="resume-timeline">
                  <li><div className="resume-item-heading"><strong>X-Solution Group</strong><Badge>ATUAL</Badge></div><p>Analista de Suporte de TI · Galeria Magalu</p><time>FEV 2026 — ATUAL</time><small>Suporte presencial à operação da loja e aos usuários.</small></li>
                  <li><div className="resume-item-heading"><strong>Alumax Extrusão de Metais</strong></div><p>Suporte de Infraestrutura</p><time>OUT 2025 — FEV 2026</time><small>Active Directory, Microsoft 365 e VPN SonicWall.</small></li>
                  <li><div className="resume-item-heading"><strong>Lenovo</strong></div><p>Help Desk</p><time>JUN 2025 — OUT 2025</time><small>Atendimento e gestão de chamados no Dynamics 365.</small></li>
                </ol>
              </Card>
              <Card className="resume-card resume-education">
                <h4 className="micro"><GraduationCap size={20} aria-hidden="true" /> FORMAÇÃO ACADÊMICA</h4>
                <ul className="resume-degrees">
                  <li><Badge>CURSANDO</Badge><strong>Ciência da Computação</strong><p>Centro Universitário Eniac · Bacharelado</p></li>
                  <li><Badge variant="outline">CONCLUÍDO</Badge><strong>Gestão da Tecnologia da Informação</strong><p>Universidade Cruzeiro do Sul</p></li>
                </ul>
              </Card>
            </div>
          </section>
        </section>
      </main>

      <footer className="site-footer" id="contato" tabIndex={-1}>
        <div className="shell footer-inner">
          <div>
            <p className="micro">05 / CONTATO</p><h2>Vamos conversar<span>.</span></h2>
            <p className="contact-intro">Sobre uma oportunidade, uma ideia ou o próximo projeto.</p>
            <ContactActions />
            <div className="footer-actions">
              <Button asChild size="lg" className="action action-lime"><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a></Button>
              <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={18} /></a>
            </div>
            <address className="contact-details">
              <a href="mailto:vitor.fcosta@hotmail.com"><Mail size={19} aria-hidden="true" /><span><small>E-mail</small>vitor.fcosta@hotmail.com</span></a>
              <a href="tel:+5511993489558"><Phone size={19} aria-hidden="true" /><span><small>Celular</small>(11) 99348-9558</span></a>
            </address>
          </div>
          <figure className="footer-avatar">
            <img src="/media/avatar-ciano.webp" alt="Avatar cartunesco de Vitor com óculos futuristas e luz ciano" width="560" height="560" loading="lazy" />
            <figcaption className="micro"><span>FIG. 03</span> / AVATAR</figcaption>
          </figure>
          <p className="footer-meta micro"><span>© 2026 VITOR COSTA · GUARULHOS, SP</span><BackToTop /></p>
        </div>
      </footer>
    </>
  );
}
