# ORIGINS

Simulador de vida sandbox, predominantemente textual e mobile-first, feito para rodar como PWA no iPhone. Estado atual: **Fase 0 (base técnica)**. O jogo ainda não está disponível.

Documentação de produto e regras do projeto: `CLAUDE.md`, `GAME_DESIGN.md`, `ARCHITECTURE.md`, `ROADMAP.md` e demais arquivos do projeto. O estado do desenvolvimento fica em `PROGRESS.md`.

## Requisitos
- Node.js LTS e npm.

## Comandos
| Comando | O que faz |
|---|---|
| `npm install` | Instala as dependências |
| `npm run dev` | Servidor de desenvolvimento (service worker não funciona aqui) |
| `npm run build` | Verifica tipos e gera a versão de produção em `dist/` |
| `npm run preview` | Serve `dist/`; use para testar o PWA e o modo offline |
| `npm run lint` | ESLint |
| `npm test` | Testes (Vitest) |

## Estrutura
```text
public/icons/   ícones do PWA (provisórios)
src/app/        main.tsx, App.tsx, estilos globais
src/components/ componentes visuais
src/tests/      testes
```
Novas pastas (`engine/`, `storage/`, `systems/` etc.) são criadas quando houver código real, conforme `ARCHITECTURE.md`.

## Padrões de código
- TypeScript estrito; `any` é erro de lint.
- Interface separada do motor de simulação, dos dados, da persistência e da IA.
- Regras do jogo não ficam em componentes de UI.
- Nada de botões ou telas decorativas: a interface só mostra estados reais.
- Antes de concluir uma tarefa: `npm run lint`, `npm test` e `npm run build` devem passar.

## PWA e offline
- O service worker guarda o app em cache; depois da primeira visita ele abre sem internet.
- Uma versão nova é baixada em segundo plano e só entra em uso na próxima abertura do app.
- Para testar offline: `npm run build`, `npm run preview`, visite a página, desligue a rede e recarregue.
- Instalação no iPhone: abra a URL HTTPS no Safari e use "Adicionar à Tela de Início".

## Hospedagem
Vercel (site estático). Build: `npm run build`; saída: `dist`. Não há backend.
