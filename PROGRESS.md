# PROGRESS — Estado do projeto

**Última atualização:** 26/11/2026
**Fase atual:** Fase 0 concluída. Fase 1 reorganizada e planejada, **aguardando aprovação**; nenhuma implementação da Fase 1 iniciada.

## Implementado (Fase 0 — concluída)
- Projeto React + TypeScript + Vite; repositório GitHub privado `origins`.
- Deploy na Vercel (HTTPS) funcionando.
- PWA instalado no iPhone pelo Safari; app aberto offline com sucesso.
- Não registrados aqui: lista de arquivos, lint e testes automatizados da Fase 0. Conferir no repositório e completar.

## Decisões técnicas aprovadas
- Stack: React, TypeScript (estrito), Vite, Lucide React, IndexedDB, PWA. Hospedagem Vercel.
- Sem backend obrigatório no MVP; simulação local e offline após carregamento inicial.
- Motor independente de React e de IA; regras como funções puras testáveis; estado versionado e validado.
- Mundo pausa ao fechar o app; sem avanço offline.
- Provisória (reversível): tempo de jogo como inteiro em minutos desde a origem do mundo; calendário derivado.

## Decisões de design aprovadas (tempo)
- Velocidades: 1x = 1 h de jogo por minuto real; 2x = 2 h; 5x = 5 h; 10x = 10 h. Proporção em constante de configuração.
- Modo observador único (já definido no GAME_DESIGN): o personagem age sozinho, o jogador acompanha controlando a velocidade e pode retomar o controle a qualquer momento. Sem modos separados de observação e autonomia.
- Avanço temporal inteligente (duração fixa, até data/hora, condição ou evento) com sugestões contextuais; o período é simulado, não pulado.
- Interrupções: críticas param na hora em qualquer velocidade; importantes conforme a sensibilidade do jogador; rotineiras só no resumo.
- Ações com duração: estimativa antes de confirmar; ao confirmar, duração real, resultado e narrativa saem imediatamente, sem esperar tempo real; variação por fatores contextuais.
- Um único motor temporal para tudo.
- Detalhes: `GAME_DESIGN.md` 3.1, `ARCHITECTURE.md` 4.1, `ROADMAP.md` Fase 1.

## Fase 1 — nova organização (6 etapas; detalhes no ROADMAP)
1. Tipos base e motor temporal único.
2. Interrupções e resumo; estrutura de avanço até condição/evento.
3. Personagem, envelhecimento e personalidade inicial.
4. Ações com duração e resultado imediato (ações de teste neutras).
5. Persistência e configurações por mundo.
6. Interface mínima.

## O que falta
Tudo da Fase 1 (nada implementado) e das fases 2 a 8.

## Dependências e dificuldades previstas
- Atributos, habilidades, necessidades, rotinas e NPCs são das fases 2 e 4: na Fase 1 a variação de duração usa fatores plugáveis, sem valores reais, e o avanço até condição/evento tem só a estrutura. Gatilhos de sistemas futuros ficam pendentes.
- O alternador do modo observador só aparece na Fase 2, quando houver comportamento autônomo.
- Ação interrompida no meio: comportamento ainda não definido (ver pendências).
- Relógio em tempo real em segundo plano no iOS: pausar ao ocultar o app; testar no iPhone.
- Determinismo: toda aleatoriedade por seed para testes reproduzíveis.

## Decisões pendentes
1. **Permadeath na Fase 1.** Interpretação provisória: opção escolhida na criação do mundo, gravada como imutável com trava na camada de salvamento; efeitos da morte ficam para depois. Afeta salvamentos, então precisa de aprovação (ou adiar).
2. **Ação interrompida por evento crítico:** o que acontece com a ação em andamento (conclui parcialmente, é cancelada ou é retomada). Define-se antes da etapa 4.
- Fora do escopo agora: cidade inicial, primeiro conjunto de profissões, provedor/modelo de IA, monetização.

## Erros conhecidos
Nenhum registrado.

## Git / sincronização
Não verificável pelo Claude (sem acesso ao repositório). Copiar os 6 arquivos atualizados (`PROGRESS`, `GAME_DESIGN`, `SYSTEMS`, `ARCHITECTURE`, `ROADMAP`, `AI_RULES`) para o projeto, rodar `git status -sb`, commit e push.

## Próxima tarefa recomendada
Aprovar o plano. Depois, **etapa 1 da Fase 1**: tipos base (`World`, `Character`, `Calendar`, `Settings`), calendário em minutos inteiros e `advanceTime` com duração fixa e até data/hora, com testes. Aguardando aprovação antes de escrever código.

## Registro de execução
- Fase 0 concluída (deploy Vercel e PWA offline validados no iPhone).
- 26/11/2026 — Apenas documentação: sistema de tempo, avanço inteligente, interrupções e ações com resultado imediato incorporados; Fase 1 reorganizada. Sem alteração de código.
