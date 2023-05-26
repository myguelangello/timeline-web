# App de linha do tempo

  ### Setup do Projeto Front-end

  #### Features
  
    ✅ React + Next.js
    ✅ TypeScript
    ✅ ESLint + Prettier Tawilwind
      🚀 @Rocketseat/eslint-config
      🚀 prettier-plugin-tailwindcss
    ✅ TailwindCSS
    ✅ Fluxo de Autenticação (OAuth)
  
  #### Notes
    ✅ Componentes: são formas de separar o código em pedaços menores e reaproveitáveis (comportamento e visual).
    ✅ Propriedades: formas de passar informações para dos componentes.
    ✅ Roteamento: no Next.js é feito de forma automática pois ele identifica a estrutura de pastas dentro de /app. 
      Tudo (.tsx) dentro da /app são páginas.
      Exemplo:
      ```bash
      /app
        /about
          /page.tsx
        /home
          /page.tsx
        ...
      ```
    ✅ Configuração Github OAuth
      - Criada uma nova aplicação no github (OAuth Apps)
      - Gerado o CLIENT_ID (front e back-end) e CLIENT_SECRET (back-end)
      - Fazendo o redirecionamento para o github com o CLIENT_ID e retornando o code
    
    ✅ Salvando o token nos cookies
