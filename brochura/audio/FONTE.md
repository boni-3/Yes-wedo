# Som de virar página

`folha.mp3` — 700 ms · 8 KB · mono 44,1 kHz · mp3 96 kbps

## Proveniência

Extraído de **"Turning pages in a book"** por *Mateusz_Chenc*, publicado no Freesound.

- **Original:** https://freesound.org/people/Mateusz_Chenc/sounds/519102/
- **Licença:** [CC0 1.0 — Domínio Público](https://creativecommons.org/publicdomain/zero/1.0/)
  Uso comercial permitido, sem atribuição e sem restrições. Verificado na página
  do próprio ficheiro antes de usar.

## Tratamento aplicado

A gravação original tem 6,4 s e contém cinco passagens de página. Detetaram-se os
picos e extraiu-se **uma única passagem** (a que começa aos 2,22 s), depois:

```
highpass=180Hz            → tira rumor de fundo da gravação
silenceremove             → corta o silêncio inicial
afade in 8ms / out 50ms   → evita estalidos no arranque e no fim
loudnorm I=-20 TP=-3      → nível consistente e audível
alimiter limit=0.9        → segurança contra picos
```

Comando completo em `../../docs/BROCHURA-DIGITAL-MELHORIAS.md` (P3 §3.1).

## Como é usado

Desligado por omissão. O utilizador liga no botão do altifalante nos controlos e a
escolha guarda-se em `localStorage` (`brochura-som`). Toca só no modo folheto —
no telemóvel não há virar de página. Volume a 0,5 no `brochura.js`.

## Porque não se usou Mixkit

Havia candidatos válidos, mas a página de licença do Mixkit é renderizada por
JavaScript e não foi possível confirmar os termos exatos. Para um ficheiro que
fica publicado no site de um cliente, CC0 não deixa margem para dúvida.
