#Projeto Hotel

## Projeto Hotel — documentação continuada

Descrição
---------
Aplicação frontend feita com Vite + React + TypeScript que implementa a interface de um site de hotel: busca/reserva, calendário manual, dropdown de hóspedes, slider de imagens e carrossel de acomodações.

Tecnologias
----------
- Vite
- React
- TypeScript (strict)
- SASS
- Swiper
- react-icons

Como executar (Windows)
-----------------------
1. Instalar dependências:
   ```powershell
   npm install
   ```
2. Rodar em modo desenvolvimento:
   ```powershell
   npm run dev
   ```
3. Gerar build de produção:
   ```powershell
   npm run build
   ```
4. Visualizar build local:
   ```powershell
   npm run preview
   ```

Scripts importantes (package.json)
---------------------------------
- dev — servidor de desenvolvimento
- build — build para produção
- preview — serve o build local
- lint — executar lint (se configurado)

Estrutura principal do projeto
------------------------------
- index.html
- public/ — imagens e assets públicos
- src/
  - main.tsx — bootstrap da aplicação
  - App.tsx — componente raiz
  - pages/Desktop/
    - DesktopApp.tsx
    - Landing.tsx
    - Hotel.tsx
    - accommodations.tsx
    - services.tsx
    - breakfast.tsx
  - components/Desktop/
    - HeaderDesktop.tsx
    - CalendarReservaManualDestop.tsx
    - GuestsDropdownDesktop.tsx
    - styles/ — SASS por componente
  - styles/app.sass
- src/swiper-css.d.ts
- tsconfig*.json
- vite.config.ts

Funcionalidades já implementadas
--------------------------------
- Header fixo com detecção de scroll e classe `scrolled`.
- Landing com formulário de busca/reserva:
  - Campos check-in/check-out com calendário manual.
  - Dropdown de hóspedes (adultos/crianças) com seleção de idades.
  - Cliques fora fecham os dropdowns; animações de abertura/fechamento.
- Calendário manual:
  - Gera dias, navega entre meses e marca intervalos entre check-in e check-out.
- Seção "O Hotel": slider de imagens com avanço automático.
- Acomodações: carrossel implementado com Swiper (navegação e paginação).
- Serviços: cards com ícones (react-icons).

Pontos a revisar / próximos passos
---------------------------------
- Responsividade: revisar media queries e testes em diferentes larguras.
- Acessibilidade: adicionar labels, aria-attributes e gerenciamento de foco.
- Estado global: avaliar Context ou outro para persistir reserva entre páginas.
- Testes: adicionar testes unitários e de integração.
- Otimização: compressão/lazy-loading de imagens.

Contribuindo
-----------
1. Criar branch feature/bugfix.
2. Rodar lint e build antes do PR.
3. Incluir descrição clara e passos para testar.

Licença
-------

# CHANGELOG

Todos os itens listados por data (mais recente primeiro), com resumo das alterações e hash do commit.

## 2025-10-11
- documentação do Readme (50b6971)  
  Atualização / documentação do README.md.

- Criação do componente chamado breakfast (d3181be)  
  Adiciona: src/pages/Desktop/breakfast.tsx, src/pages/Desktop/style/breakfast.sass

## 2025-10-08
- Sepração de modelos Desktop e Mobile (b34b211)  
  Reestrutura o projeto movendo componentes/páginas para src/pages/Desktop e src/components/Desktop; atualiza App.tsx e vários estilos (renomeações/moves).

## 2025-10-06
- Criação da section services e alguns ajustes (15a214d)  
  Cria src/pages/services.tsx, adiciona styles e faz ajustes em Header e Landing.

- Correções e criação da section accomodations (96a33e1)  
  Implementa src/pages/accommodations.tsx, adiciona src/pages/style/accomodations.sass, atualiza package.json/package-lock e adiciona src/swiper-css.d.ts.

## 2025-09-30
- section de hotel desktop (5f3d8ea)  
  Adiciona imagens em public/ (academia, frente, praia, quarto, suite*), ajustes na seção Hotel e estilos.

- corrigindo o dropdown de hospede e header dinâmica com scroll (81c863f)  
  Correções em GuestsDropdown e Header (comportamento ao scroll); ajustes na Landing e adição/alterações na página Hotel.

## 2025-09-28
- Adição do calendário, filtros de hospedes e ajustes na landing (aa3c48b)  
  Adiciona componentes CalendarReservaManual e GuestsDropdown com estilos; atualiza Landing e package files.

- dando as caras no forms da landing (7f8653b)  
  Ajustes no formulário da Landing (estilos e markup).

- Alteração no readme (3e1eb2e)  
  Atualiza README.md.

- first commit (bccebf8)  
  Inicialização do projeto com Vite + React + TypeScript; inclusão de arquivos iniciais: index.html, App, Header, Landing, estilos SASS, configs TS/Vite, package.json, .gitignore, README.md, etc.
