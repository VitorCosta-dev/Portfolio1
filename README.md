# Portfólio de Vitor Costa

Portfólio com projetos, competências, experiência, formação e currículo PDF.

## Desenvolvimento

Requisitos: Node.js 22 ou superior.

```sh
npm ci
npm run dev
```

## Produção

```sh
npm run build
```

Next.js gera a versão estática em `out/`. A configuração `vercel.json` publica essa pasta na Vercel. O repositório preserva também uma cópia da exportação em `src/`, para compatibilidade com projetos Vercel antigos que usam essa pasta como raiz. Para atualizar esses projetos, substitua o conteúdo estático de `src/` pelos arquivos de `out/`, preservando `src/vercel.json`.

O projeto é público e não requer banco de dados, variáveis de ambiente ou autenticação do Sites.

Arquivos principais: `app/page.tsx`, `app/portfolio-interactions.tsx`, `app/avatar.tsx`, `app/globals.css` e `public/media/`.
