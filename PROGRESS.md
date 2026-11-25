# PROGRESS — Estado do projeto

**Fase atual:** Fase 0 — Preparação técnica (em andamento).
**Última atualização:** 24/11/2026.

## Decisões consolidadas
- Nome: ORIGINS. Sandbox com desafios opcionais.
- Realismo/dificuldade híbridos e configuráveis por mundo.
- Tempo híbrido; mundo pausa ao fechar o app por padrão.
- Início da vida no nascimento; modos normal e observador; automações separadas.
- Necessidades simplificadas/completas/desativadas.
- Atributos e habilidades com evolução integrada; testes RPG para ações relevantes.
- NPCs autônomos, memória, ecossistema social; simulação histórica profunda (fases futuras).
- Mundo interconectado; começar por uma cidade.
- Apresentação textual; exploração por listas/menus; painel central com abas.
- Morte não encerra o mundo; Permadeath escolhido na criação e imutável.
- Salvamento híbrido (IndexedDB), vários mundos, export/import planejados.
- IA opcional e configurável; jogo independente dela.
- Hospedagem: Vercel (HTTPS). Offline após primeiro carregamento. Sem backend no MVP.
- Fase 0: desenvolvimento local primeiro; GitHub e deploy depois; validação no iPhone após deploy.
- Atualização do service worker: versão nova aplicada na próxima abertura do app (provisório, reversível).

## Fase 0 — tarefas
- [x] 1. Projeto base Vite + React + TS estrito
- [x] 2. ESLint e script `lint` (o script `test` vem com o Vitest na tarefa 3)
- [x] 3. Vitest com teste básico
- [x] 4. Estrutura mínima e tela inicial mobile-first
- [x] 5. PWA (manifest, ícones, service worker, meta tags iOS) — falta validar offline (tarefa 6) e instalação no iPhone (tarefa 7)
- [x] 6. Verificação offline em preview local
- [ ] 7. Deploy na Vercel + validação no iPhone (depende de GitHub/Vercel)
- [x] 8. README e fechamento da fase (a fase só fecha após a tarefa 7)

## Registro de execução
### 24/11/2026 — Fase 0, tarefa 1
- Criado projeto com `npm create vite@latest origins -- --template react-ts` (React 19, Vite 8, TypeScript 7).
- Alterado: `tsconfig.app.json` e `tsconfig.node.json` (adicionado `"strict": true`).
- Testes: `npm run build` OK (com strict); servidor `vite` respondeu HTTP 200.
- Observações: o template atual traz **oxlint** (script `lint`), não ESLint. Será tratado na tarefa 2. O conteúdo demo do template (logos, hero, CSS) ainda existe; será removido na tarefa 4.
- Erros conhecidos: nenhum.

### 24/11/2026 — Fase 0, tarefa 2
- Removido `oxlint` e `.oxlintrc.json`. Adicionados `eslint`, `@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks`, `globals`.
- Criado `eslint.config.js` (recommended + `no-explicit-any` como erro + regras de hooks, que o oxlint cobria).
- Alterado: `package.json` (script `lint` = `eslint .`).
- **TypeScript rebaixado de 7.0 para ~6.0.3:** `typescript-eslint` (8.74) só suporta TS `<6.1`. Reversível: voltar ao TS 7 quando houver suporte.
- Testes: `npm run lint` limpo; `npm run build` OK; confirmado que um `any` proposital é reportado como erro.
- Erros conhecidos: nenhum.

### 24/11/2026 — Fase 0, tarefa 3
- Adicionados `vitest`, `jsdom`, `@testing-library/react`, `@testing-library/dom`.
- Alterados: `vite.config.ts` (import de `vitest/config`, ambiente jsdom, `include` em `src/**/*.test.{ts,tsx}`), `package.json` (script `test` = `vitest run`).
- Criado: `src/tests/app.test.tsx` (renderiza `App` e exige um `h1`).
- Testes: `npm test` 1/1 passou; teste falha quando a expectativa é alterada (sensível); `lint` e `build` limpos.
- Observação: o teste depende de `App` ter um `h1`; a tarefa 4 deve mantê-lo ou ajustar o teste.
- Erros conhecidos: nenhum.

### 24/11/2026 — Fase 0, tarefa 4
- Adicionado `lucide-react`. Removido todo o conteúdo demo do template (logos, hero, CSS, `icons.svg`).
- Criados: `src/app/{main.tsx,App.tsx,global.css}`, `src/components/StartScreen.tsx`. `main.tsx` e `App.tsx` movidos de `src/` para `src/app/`.
- Alterados: `index.html` (pt-BR, `viewport-fit=cover`, `theme-color`, título ORIGINS, script em `/src/app/main.tsx`), `src/tests/app.test.tsx` (novo import).
- Tela: texto escuro/mobile-first, sem botões e sem animações, sem fontes externas (offline). Texto declara que o jogo ainda não está disponível.
- Testes: `lint` limpo; `npm test` 1/1; `build` OK; captura em 390x844 sem rolagem horizontal (scrollWidth = clientWidth = 390).
- Desvio do plano: `types/` e `utils/` não foram criadas (ficariam vazias); serão criadas quando houver o primeiro uso.
- Erros conhecidos: nenhum.

### 24/11/2026 — Fase 0, tarefa 5
- Adicionado `vite-plugin-pwa` (2.0.0). Configurado em `vite.config.ts`: manifest (ORIGINS, pt-BR, standalone, portrait, cores #1b2030), `registerType: 'prompt'` sem skipWaiting/clientsClaim automáticos (versão nova só entra na próxima abertura), precache de js/css/html/svg/png/manifest, `cleanupOutdatedCaches`.
- Criados: `public/icons/{icon-192,icon-512,icon-maskable-512,apple-touch-icon}.png` (**provisórios**, broto Lucide sobre fundo do app, sem transparência); `public/favicon.svg` substituído.
- Alterado: `index.html` (meta tags iOS: capable, status-bar `black-translucent`, título, `apple-touch-icon`).
- Testes: `lint` limpo; `npm test` 1/1; `build` OK, gerou `sw.js`, `manifest.webmanifest`, precache de 16 entradas (245 KiB); `skipWaiting` só reage a mensagem `SKIP_WAITING` (não é automático).
- **Não verificado ainda:** funcionamento offline real (tarefa 6) e instalação/offline no iPhone (tarefa 7). Comportamento exato da troca de versão no iOS só pode ser confirmado após o deploy.
- Erros conhecidos: nenhum de funcionamento.
- Aviso de dependência: `npm audit` reporta 4 vulnerabilidades moderadas em `glob`/`minimatch` via `workbox-build` (ferramenta de build, não vai para o app). `audit fix --force` sugere downgrade do plugin; **não aplicado**. Reavaliar quando houver versão corrigida.

### 24/11/2026 — Fase 0, tarefa 6
- Nenhum arquivo do projeto alterado (verificação com script avulso em Playwright, fora do repositório).
- Cenário: `npm run build` + `vite preview`; primeira visita online; rede desligada; recarga.
- Resultados (Chromium, viewport 390x844): SW `activated`; precache com 10 arquivos únicos; offline: recarga abre a tela ORIGINS, rota desconhecida cai no `index.html`, manifest e ícone respondem 200, nova aba abre, sem rolagem horizontal.
- Controle negativo: sem service worker, o mesmo cenário offline falha (`ERR_INTERNET_DISCONNECTED`), logo o teste é válido.
- Limites: é Chromium, não Safari/iOS. O script não faz parte da suíte do projeto (testes E2E não estão no escopo da Fase 0); o resultado foi registrado aqui.
- Erros conhecidos: nenhum.

### 24/11/2026 — Fase 0, tarefa 8
- `README.md` do template substituído por README do ORIGINS (comandos, estrutura, padrões, PWA/offline, hospedagem).
- Testes: não se aplica (somente documentação).
- Erros conhecidos: nenhum.

## Próxima tarefa
Tarefa 7: criar repositório GitHub, conectar à Vercel, fazer o deploy e validar instalação + offline no iPhone. Ao concluir, a Fase 0 está fechada e a Fase 1 pode ser planejada.

## Decisões ainda não especificadas
Cidade inicial, primeiro conjunto de profissões, provedor/modelo de IA, monetização (fora do escopo atual).
