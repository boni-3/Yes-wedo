# Especificações de Impressão — Brochura Yes, We Do

> O cliente não tem specs definidos. Estas são as **nossas recomendações**, prontas a apresentar ao Miguel e a enviar para orçamento de gráfica.

---

## Recomendação principal (a que proponho)

| Item | Especificação | Porquê |
|---|---|---|
| **Formato fechado** | A4 — 210 × 297 mm, vertical | Standard universal. Entra em envelope C4, em pasta de reunião, em mostruário. Não obriga a corte especial (= mais barato). |
| **Páginas** | 16 (incluindo capa e contracapa) | Múltiplo de 4, obrigatório para agrafo. 16 é o ponto em que a brochura "pesa" sem ficar cara. |
| **Encadernação** | Agrafo a cavalo (2 agrafos) | Para 16 páginas é o único acabamento que faz sentido. Lombada colada só fica bem a partir de ~28 páginas — abaixo disso descola e parece pobre. |
| **Papel interior** | Couché **mate 170 g** | 135 g é o mínimo de catálogo, 170 g é onde se nota qualidade ao folhear. Mate (não brilho) porque o fundo é escuro: em papel brilhante o azul-escuro vira espelho e não se lê nada sob a luz. |
| **Papel capa** | Couché **mate 300 g** | Dá corpo. A brochura fica de pé na mão, não dobra. |
| **Cores** | 4/4 (CMYK frente e verso, todas as páginas) | Todo o miolo tem fotografia a cores. |
| **Acabamento capa** | **Laminação soft-touch mate** (frente e verso da capa) | É a diferença entre "impresso" e "premium". Toque aveludado. Custa pouco e é a primeira coisa que o cliente sente antes de ler. Também protege o fundo escuro de dedadas e riscos — crítico num papel escuro. |
| **Destaque especial** | **Verniz UV localizado (spot UV) brilhante** sobre o logo da capa e sobre os reclames luminosos/néons das fotos | ⭐ **É a ideia que vale a pena defender.** Numa empresa que vende LUZ, o verniz brilhante sobre o mate faz os reclames literalmente brilharem quando o papel apanha luz. O cliente inclina a brochura e a luz acende. Ninguém no setor faz isto no Porto. |
| **Bleed** | 3 mm em todos os lados | Standard. |
| **Marcas de corte** | Sim | Standard. |
| **Resolução** | 300 dpi mínimo em todas as imagens | Já contemplado no pipeline (`proc-brochura-img.sh` gera a 2551px). |
| **Formato de ficheiro** | PDF/X-4 (ou PDF/X-1a se a gráfica exigir) | X-4 preserva transparências e é o que as gráficas modernas preferem. |
| **Perfil de cor** | **Coated FOGRA39 (ISO 12647-2)** | Padrão europeu para couché. É o que as gráficas portuguesas usam por defeito. |

---

## Quantidade — o que recomendo

| Tiragem | Uso | Nota |
|---|---|---|
| **250 un.** ⭐ | Recomendada para começar | Ponto ótimo preço/unidade. Chega para reuniões, feiras e balcão durante ~1 ano. E se algo mudar, não ficam com 800 obsoletas na garagem. |
| 500 un. | Se fizerem feiras ou distribuição ativa | O preço por unidade cai bastante entre 250 e 500 — vale a pena perguntar os dois no mesmo orçamento. |
| 100 un. | Só se for tiragem de teste | O custo unitário dispara. Não compensa. |

**Argumento de venda a usar com o Miguel:** peçam orçamento para 250 **e** 500 ao mesmo tempo. A diferença costuma ser pequena e a decisão fica óbvia com os números à frente.

---

## Custo indicativo de impressão

Para 16 páginas A4, 4/4, couché mate 170 g + capa 300 g soft-touch, agrafo a cavalo:

- **250 unidades:** ordem de grandeza **300 – 500 €**
- **500 unidades:** ordem de grandeza **400 – 650 €**
- Verniz UV localizado: acrescenta tipicamente **60 – 120 €** ao trabalho (chapa/setup)

⚠️ **Valores indicativos, não são orçamento.** Variam muito entre gráfica local e gráfica online, e com a época do ano. **Confirmar sempre com 2 ou 3 orçamentos reais.** Vale a pena comparar uma gráfica local do Porto (permite ver prova física e resolver problemas em pessoa) com uma online tipo Pixartprinting / Onlineprinters / Flyeralarm (mais barato, mas sem prova física fácil).

**Nota comercial:** este custo é do cliente, não está incluído nos 400€ do design. Deixar isso explícito na entrega para não haver mal-entendido. Se quiserem que trate eu da gestão com a gráfica, é o extra de 15% que está no plano.

---

## Alternativas, caso o orçamento aperte

| Corte | Poupança | Perda |
|---|---|---|
| Trocar soft-touch por laminação mate normal | ~10-15% | Perde-se o toque. Ainda fica bom, mas deixa de ser "uau". |
| Tirar o verniz UV localizado | ~60-120€ | Perde-se o efeito de luz. Seria pena — é o detalhe assinatura. |
| Interior 135 g em vez de 170 g | ~8% | Nota-se ao folhear. Não recomendo. |
| 12 páginas em vez de 16 | ~20% | Obriga a juntar serviços na mesma página. Perde-se o "uma página por área" que foi vendido. |

**Se for mesmo preciso cortar:** corta-se primeiro na tiragem (250 → 150), nunca no acabamento. Uma brochura excelente em menor quantidade vende mais do que uma brochura banal em grande quantidade.

---

## Cor — medido, não estimado

Testámos as três cores da marca através do perfil **CoatedFOGRA39** real (o mesmo que a gráfica vai usar), com intenção colorimétrica relativa e compensação de ponto preto:

| Cor da marca | Hex | **CMYK FOGRA39** | Como sai impresso | Desvio |
|---|---|---|---|---|
| Laranja | `#F04320` | **C0 M83 Y90 K0** | ≈ `#E84424` | Δ9 — impercetível |
| Azul | `#529BCA` | **C67 M27 Y7 K0** | ≈ `#559ACA` | Δ3 — praticamente idêntico |
| Magenta | `#BA046A` | **C22 M100 Y18 K6** | ≈ `#BB0D6B` | Δ9 — impercetível |

### ✅ Correção a uma preocupação anterior

O plano inicial avisava que o laranja `#F04320` ia "apagar" em CMYK e sugeria considerar uma 5.ª cor Pantone. **A medição desmente isso.** `C0 M83 Y90 K0` está confortavelmente dentro do gamut do FOGRA39 e reproduz quase exatamente. **Não é preciso Pantone** — poupa 80-150 € ao cliente e uma chapa extra no trabalho.

Pode-se dar estes valores CMYK diretamente à gráfica. É informação útil e mostra que o ficheiro foi preparado a sério.

### Prova de cor — mesmo assim, fazer

Uma simulação em ecrã não é uma máquina de impressão: papel, tinta, calibração e humidade mexem no resultado. **Pedir à gráfica uma prova de cor contratual** antes da tiragem continua a ser obrigatório — mas agora é uma confirmação de rotina, não um risco por resolver.

Se, contra o esperado, a prova sair fraca: entregar o PDF RGB em alta e deixar a gráfica converter com o perfil calibrado da máquina deles.

---

## Perguntas a fazer à gráfica no pedido de orçamento

Copiar e colar:

> Bom dia,
>
> Pretendo orçamento para uma brochura institucional:
> - **16 páginas** A4 fechado (210×297 mm), incluindo capa
> - **4/4 cores** (CMYK) em todas as páginas
> - **Interior:** couché mate 170 g
> - **Capa:** couché mate 300 g com **laminação soft-touch mate**
> - **Verniz UV localizado brilhante** na capa (sobre o logo e alguns elementos) — por favor orçamentar com e sem, para comparar
> - **Agrafo a cavalo**
> - Ficheiro entregue em PDF/X-4, com 3 mm de bleed e marcas de corte, perfil Coated FOGRA39
>
> Agradeço preço para **250** e para **500** unidades.
> Incluir também o custo de **prova de cor contratual** e o prazo de produção.
> Podem indicar se trabalham com **5ª cor Pantone (Orange 021 C)** e qual o acréscimo?
>
> Obrigado.

---

## Fontes — resolvido com curvas

O Chrome exporta as nossas fontes (Inter e Space Grotesk são **variable fonts**) como **Type 3**. São vetoriais e imprimem bem, mas muitos preflights de gráfica assinalam ou rejeitam Type 3.

**Solução adotada:** `build-brochura-pdf.sh` converte todo o texto em curvas (`-dNoOutputFonts`). O PDF final tem **zero fontes** — não há nada que possa correr mal do lado da gráfica. É o que se entrega normalmente para impressão.

Verificado: `pdffonts brochura-cmyk.pdf` devolve lista vazia, e o texto a 300 dpi está perfeitamente nítido.

Se alguma vez for preciso o PDF com texto pesquisável (por exemplo para enviar por email): `./build-brochura-pdf.sh --com-texto`. Nesse caso as fontes ficam Type 3 — usar só para ecrã, nunca para gráfica.

---

## Checklist de pré-flight (antes de entregar o PDF)

- [ ] 16 páginas exatas, na ordem certa, capa = pág. 1 e contracapa = pág. 16
- [ ] Bleed de 3 mm em todas as páginas, sem elementos brancos a assomar no bleed
- [ ] Nenhum texto ou elemento importante a menos de **8 mm** do corte
- [ ] Todas as imagens ≥ 300 dpi ao tamanho final de colocação
- [ ] Todas as cores em CMYK (zero RGB, zero cores-diretas por engano)
- [ ] Pretos de fundo grandes em **preto rico** (C60 M40 Y40 K100), não K100 sozinho — senão sai acinzentado
- [ ] Texto pequeno em preto só K100 (evita desfocagem por desalinhamento de chapas)
- [ ] Fontes incorporadas ou convertidas em curvas
- [ ] Ficheiro do verniz UV numa camada/cor-direta separada, claramente identificada
- [ ] QR code testado **impresso**, não só em ecrã — mínimo 20 mm, com margem branca à volta
- [ ] Contactos, morada, NIF e site conferidos letra a letra
