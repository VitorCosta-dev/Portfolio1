"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy, Database, Menu, MessageCircle, Timer, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navigation = [{ id: "projetos", label: "Projetos" }, { id: "sobre", label: "Sobre" }, { id: "competencias", label: "Competências" }, { id: "contato", label: "Contato" }];

export function PortfolioHeader() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const nextSection = useRef<string | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
    navigation.forEach(item => { const section = document.getElementById(item.id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  return <div className="header-wrap"><header className="site-header shell">
    <a className="wordmark" href="#inicio" aria-label="Vitor Costa, início"><span className="brand-symbol">VC<span>.</span></span><span className="brand-label">VITOR COSTA</span></a>
    <nav className="desktop-nav" aria-label="Menu principal">{navigation.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} className={item.id === "contato" ? "nav-contact" : ""}>{item.label}{item.id === "contato" && <ArrowUpRight size={16} aria-hidden="true" />}</a>)}</nav>
    <Sheet open={menuOpen} onOpenChange={setMenuOpen}><SheetTrigger asChild><Button variant="ghost" size="icon" className="mobile-menu-trigger" aria-label="Abrir menu"><Menu aria-hidden="true" /></Button></SheetTrigger><SheetContent className="portfolio-menu" showCloseButton={false} onCloseAutoFocus={event => {
      if (!nextSection.current) return;
      event.preventDefault();
      const id = nextSection.current;
      nextSection.current = null;
      requestAnimationFrame(() => {
        window.location.hash = id;
        document.getElementById(id)?.focus({ preventScroll: true });
        document.getElementById(id)?.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      });
    }}>
      <SheetHeader><SheetTitle>Vitor Costa<span>.</span></SheetTitle><SheetDescription>Conheça meu trabalho.</SheetDescription></SheetHeader>
      <SheetClose asChild><Button variant="ghost" size="icon" className="menu-close" aria-label="Fechar menu"><X aria-hidden="true" /></Button></SheetClose>
      <nav aria-label="Menu móvel">{navigation.map((item, i) => <a key={item.id} href={`#${item.id}`} onClick={event => { event.preventDefault(); nextSection.current = item.id; setMenuOpen(false); }}><span className="micro">0{i + 1}</span>{item.label}<ArrowUpRight size={22} aria-hidden="true" /></a>)}</nav>
      <p className="menu-note micro">SUPORTE / DADOS / WEB<br />GUARULHOS, SP</p>
    </SheetContent></Sheet>
  </header></div>;
}

type Project = { id: string; area: "Web" | "Dados & BI"; title: string; status: string; description: string; tags: string[]; context: string; role: string; delivery: string[]; href?: string; linkLabel?: string; note?: string };
const projects: Project[] = [
  { id: "clinica", area: "Web", title: "Dra. Claudia", status: "CLIENTE REAL", description: "Uma plataforma para conectar a clínica às pacientes, do catálogo ao aceite de termos por procedimento.", tags: ["React", "TypeScript", "Supabase"], context: "Organizar a presença digital de uma clínica de estética e os fluxos de acesso de pacientes e administração.", role: "Desenvolvimento da experiência web, integração com autenticação e banco de dados e publicação na Cloudflare.", delivery: ["Catálogo de procedimentos e navegação responsiva.", "Área da paciente com questionários e termos por procedimento.", "Painel administrativo com controle de acesso e geração de PDF.", "PostgreSQL no Supabase, com políticas de acesso RLS."], href: "https://site-creator-vinext-starter.vitor-fcosta.workers.dev/", linkLabel: "Visitar site", note: "Os detalhes aqui descrevem o projeto. Dados de pacientes e telas administrativas não são exibidos no portfólio." },
  { id: "chamados", area: "Dados & BI", title: "Análise de Chamados", status: "PROJETO DE PORTFÓLIO", description: "Da rotina do suporte a indicadores: organização de chamados para acompanhar volume, status e tempo de atendimento.", tags: ["SQL", "Python", "Streamlit"], context: "Transformar registros de suporte em uma base organizada para consulta e análise, conectando minha experiência operacional à área de dados.", role: "Estruturação do banco PostgreSQL, consolidação das informações em uma view SQL e desenvolvimento de uma aplicação em Python com Streamlit.", delivery: ["Modelagem relacional dos dados de chamados.", "View SQL para consolidar as informações de atendimento.", "Consulta e análise por meio de uma interface em Streamlit.", "Indicadores de volume, situação dos chamados e atendimento."], href: "https://github.com/VitorCosta-dev/Analise-Chamados", linkLabel: "Ver no GitHub", note: "Projeto de estudo e portfólio com base demonstrativa; não representa resultados da empresa em que trabalho." },
  { id: "mesasync", area: "Web", title: "MesaSync", status: "ACADÊMICO / EM EQUIPE", description: "Sistema de gestão de comandas, mesas e pedidos. Regras de negócio conectadas a uma API e banco relacional.", tags: ["React", "Node.js", "PostgreSQL"], context: "Digitalizar o fluxo de atendimento de um restaurante, organizando mesas, produtos, comandas e itens de pedidos.", role: "Participação no desenvolvimento em equipe, na modelagem do banco e nas validações do backend. A interface de login utiliza React, Tailwind CSS e componentes shadcn/ui.", delivery: ["API com Node.js e Express e persistência em PostgreSQL.", "Entidades relacionadas para mesas, produtos, comandas e pedidos.", "Validações de entrada e controle de status das mesas.", "Interface de login e integração das demais telas em desenvolvimento."], note: "Projeto acadêmico em desenvolvimento. A ilustração apresenta a estrutura do sistema, sem simular uma aplicação já concluída." },
  { id: "vendas", area: "Dados & BI", title: "MesaSync · Vendas", status: "DASHBOARD / PORTFÓLIO", description: "Um olhar analítico sobre as comandas: faturamento, ticket médio, itens vendidos e evolução das vendas.", tags: ["Power BI", "DAX", "PostgreSQL"], context: "Facilitar a leitura do desempenho de um restaurante a partir de uma base demonstrativa de comandas e itens.", role: "Modelagem dos dados e desenvolvimento do dashboard em Power BI, com Power Query e medidas DAX.", delivery: ["Indicadores de faturamento, comandas fechadas, ticket médio e itens vendidos.", "Análise por categoria e evolução das vendas ao longo do tempo.", "Filtro de período para explorar os indicadores.", "Regras que consideram comandas fechadas e desconsideram itens cancelados."], href: "https://github.com/VitorCosta-dev/mesasync-data-dashboard", linkLabel: "Ver no GitHub", note: "Os dados são fictícios e foram criados para estudo e portfólio." }
];

function ProjectArt({ project }: { project: Project }) {
  if (project.id === "clinica") return <div className="clinic-art"><div className="clinic-window"><div aria-hidden="true"><i /><i /><i /></div><img src="/media/clinica.jpg" alt="Captura da página inicial do site da Dra. Claudia" width="1216" height="548" loading="lazy" /></div></div>;
  if (project.id === "mesasync") return <div className="mesasync-art" aria-hidden="true"><div className="mesasync-brand">MESA<span>SYNC</span><small>FLUXO DO SISTEMA</small></div><div className="entity-grid">{["Mesas", "Comandas", "Pedidos", "Produtos"].map((item, i) => <span key={item}><b>0{i + 1}</b>{item}</span>)}</div><div className="art-caption">ESTRUTURA ILUSTRATIVA</div></div>;
  const sales = project.id === "vendas";
  return <div className={`data-art ${sales ? "sales-art" : ""}`} aria-hidden="true"><div className="data-window"><div className="data-top"><span><i /><i /><i /></span><span>{sales ? "MESASYNC / VENDAS" : "CHAMADOS / VISÃO GERAL"}</span></div><div className="data-inside"><div className="data-metric">{sales ? <Database size={20} /> : <Timer size={20} />}<b>{sales ? "Faturamento" : "Tempo médio"}</b><span>{sales ? "COMANDAS FECHADAS" : "DE ATENDIMENTO"}</span></div><div className="data-graph"><span>{sales ? "VENDAS POR CATEGORIA" : "VOLUME POR PERÍODO"}</span><div className="data-bars">{[32, 50, 40, 68, 55, 77, 63, 91, 73, 86].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div></div></div><div className="data-label">ILUSTRAÇÃO / DADOS DEMONSTRATIVOS</div></div></div>;
}

export function ProjectGallery() {
  const [filter, setFilter] = useState("Todos");
  const filtered = projects.filter(p => filter === "Todos" || p.area === filter);
  return <><div className="project-toolbar"><div className="project-filters" role="group" aria-label="Filtrar projetos por área">{["Todos", "Web", "Dados & BI"].map(area => <Button key={area} variant="ghost" onClick={() => setFilter(area)} aria-pressed={filter === area}>{area}<span>{area === "Todos" ? projects.length : projects.filter(p => p.area === area).length}</span></Button>)}</div><p className="micro project-count" aria-live="polite">{filtered.length} PROJETOS</p></div>
    <div className="project-grid">{filtered.map(project => <article key={project.id}><Card className={`project-card ${project.id === "clinica" ? "clinic-card" : "dark-card"}`}><div className="project-top micro"><span>{project.status}</span><span>{project.area}</span></div><ProjectArt project={project} /><div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}</div><div className="project-card-actions"><Dialog><DialogTrigger asChild><Button variant="ghost" className="project-detail-button" aria-label={`Explorar projeto ${project.title}`}>Explorar projeto <ArrowUpRight size={17} aria-hidden="true" /></Button></DialogTrigger><DialogContent className="project-dialog" showCloseButton={false}><DialogClose asChild><Button variant="ghost" size="icon" className="dialog-close" aria-label="Fechar detalhes"><X aria-hidden="true" /></Button></DialogClose><DialogHeader><p className="micro dialog-kicker">{project.area} / {project.status}</p><DialogTitle>{project.title}</DialogTitle><DialogDescription>{project.description}</DialogDescription></DialogHeader><div className="dialog-body"><section><h4>O desafio</h4><p>{project.context}</p></section><section><h4>Minha participação</h4><p>{project.role}</p></section><section><h4>O que foi construído</h4><ul>{project.delivery.map(item => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul></section><p className="project-note">{project.note}</p><div className="tags">{project.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}</div>{project.href && <Button asChild className="action action-black"><a href={project.href} target="_blank" rel="noopener noreferrer">{project.linkLabel}<ArrowUpRight aria-hidden="true" /></a></Button>}</div></DialogContent></Dialog>{project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.linkLabel}: ${project.title}`}>{project.linkLabel}<ArrowUpRight aria-hidden="true" size={16} /></a>}</div></div></Card></article>)}</div>
  </>;
}

export function ContactActions() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => { if (!copied) return; const timeout = setTimeout(() => setCopied(false), 3500); return () => clearTimeout(timeout); }, [copied]);
  async function copyEmail() {
    try { await navigator.clipboard.writeText("vitor.fcosta@hotmail.com"); setCopied(true); setError(false); }
    catch { setError(true); }
  }
  return <div className="contact-tools"><Button asChild className="action action-lime"><a href="https://wa.me/5511993489558?text=Ol%C3%A1%2C%20Vitor!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar." target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Conversar no WhatsApp<ArrowUpRight aria-hidden="true" /></a></Button><Button variant="ghost" className="copy-email" onClick={copyEmail}>{copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}{copied ? "E-mail copiado" : "Copiar e-mail"}</Button><span className="contact-feedback" role="status">{error ? "Selecione o e-mail abaixo para copiá-lo ou abrir seu aplicativo de e-mail." : copied ? "E-mail copiado para a área de transferência." : ""}</span></div>;
}

export function BackToTop() { return <a className="back-to-top" href="#inicio">Voltar ao topo <ArrowUp size={16} aria-hidden="true" /></a>; }
