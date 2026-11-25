# PROGRESS — Estado do projeto

**Última atualização:** 24/11/2026
**Fase atual:** Fase 0 concluída. Fase 1 planejada, **não iniciada**.
**Sessão pausada** por limite de utilização; retomar do ponto indicado em "Continuidade".

## Fase 0 — Preparação técnica: CONCLUÍDA (24/11/2026)
- Projeto React + TypeScript + Vite criado.
- Repositório GitHub privado `origins`.
- Deploy na Vercel (HTTPS) funcionando.
- PWA instalado no iPhone pelo Safari.
- App aberto offline (modo avião) com sucesso após instalação.
- Desenvolvimento em Windows 11 (Node instalado nesta etapa).
- Detalhes de lint/testes automatizados e lista de arquivos da Fase 0: não registrados nesta sessão; conferir no repositório e completar aqui.

## Decisões técnicas aprovadas
- Stack: React, TypeScript (estrito), Vite, Lucide React, IndexedDB, PWA.
- Hospedagem: Vercel, HTTPS desde o início.
- Sem backend obrigatório no MVP; simulação local e offline após o carregamento inicial.
- Desenvolvimento local primeiro; GitHub e Vercel após a estrutura inicial funcionar (feito).
- Trabalho em etapas pequenas, com explicação breve de como executar comandos.
- Motor independente de React e de IA; regras como funções puras testáveis; estado versionado e validado.
- Mundo pausa ao fechar o app; sem avanço de tempo offline no MVP.

## Fase 1 — Fundação jogável: PLANEJADA (não iniciada)
Etapas (cada uma com testes e atualização deste arquivo):
1. **Tipos e motor de tempo:** `World`, `Character`, `Calendar`, `Settings` com versão de esquema; calendário e relógio em funções puras; pausa e velocidades 1x/2x/5x/10x; testes.
2. **Personagem e envelhecimento:** nascimento, idade derivada do calendário, fases da vida; criação manual, aleatória (com seed) ou parcial.
3. **Personalidade inicial:** traços básicos, sem mudança ao longo da vida nesta fase.
4. **Persistência:** IndexedDB com validação ao carregar, autosave periódico, salvamento manual, múltiplos mundos isolados; testes de interrupção na gravação.
5. **Configurações por mundo:** presets Casual/Normal/Realista/Extremo e somente opções com efeito real nesta fase.
6. **Interface mínima:** criar mundo, painel com data/idade/controles de tempo, lista de mundos, continuar após fechar e reabrir.

**Fora do escopo:** IA, necessidades, economia, NPCs, história global.
**Aceite (ROADMAP):** criar, jogar, fechar/reabrir e continuar um mundo; tempo e idade corretos; mundos sem estado compartilhado; testes de salvamento passam.

## Decisões pendentes (aguardam o proprietário)
1. **Velocidade do tempo em 1x (NÃO APROVADA; bloqueia a etapa 1).** Ao retomar, apresentar de novo esta decisão e defini-la ANTES de implementar o motor de tempo.
   - Proposta A (Claude): 1x = 1 dia de jogo a cada 10 s reais (~1 ano de jogo por hora real).
   - Proposta B (contraproposta do proprietário, preferência inicial): 1x = 1 h de jogo por minuto real; 2x = 2 h/min; 5x = 5 h/min; 10x = 10 h/min.
   - Referência de cálculo da B: 1x ≈ 1 dia de jogo a cada 24 min reais (~6 dias reais por ano de jogo); 10x ≈ 1 dia a cada 2,4 min (~14,6 h reais por ano de jogo).
   - Em ambos os casos o valor deve ficar em uma constante de configuração, fácil de alterar.
2. **Permadeath na Fase 1.** Interpretação provisória: a opção é escolhida na criação do mundo e fica gravada como imutável, com a trava na camada de salvamento; efeitos da morte ficam para fases posteriores. Afeta salvamentos, então precisa de aprovação (ou adiar para outra fase).
- Não especificadas e fora do escopo agora: cidade inicial, primeiro conjunto de profissões, provedor/modelo de IA, monetização.

## Erros conhecidos
Nenhum registrado.

## Git / sincronização
Não verificado pelo Claude: não há acesso ao repositório nesta sessão. Antes de encerrar, rodar no terminal do projeto:
`git status` e `git log origin/main..HEAD` (ou `git status -sb`).
Este PROGRESS.md precisa ser copiado para a raiz do repositório, com commit e push.

## Continuidade
- **Ponto exato:** plano da Fase 1 apresentado; nenhuma linha de código da Fase 1 escrita.
- **Próxima tarefa:** responder à decisão pendente 1 (velocidade do tempo) e, se possível, à 2 (Permadeath); depois iniciar a **etapa 1 da Fase 1** (tipos e motor de tempo).
- **Ao retomar:** ler `CLAUDE.md` e este arquivo; não repetir o planejamento.

## Registro de execução
- 24/11/2026 — Fase 0 concluída (deploy Vercel, instalação e uso offline validados no iPhone). Fase 1 planejada, não iniciada.