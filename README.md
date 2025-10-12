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