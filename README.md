# O codigo não funcionara sem uma BRAPI TOKEN. Basta fazer o login gratuito na https://brapi.dev/. Você deve colar ela na segunda linha de codigo na seção app.js

Codigo incompleto, possiveis melhorias a caminho.

descrição: InvestidorFSA, uma aplicação web voltada para análise de investimentos, utilizando HTML, CSS e JavaScript. O projeto permite pesquisar ativos financeiros, como ações brasileiras, FIIs, ações internacionais (stocks) e criptomoedas, exibindo informações de mercado por meio da integração com APIs financeiras.

Além da consulta de cotações e do histórico de preços, a aplicação apresenta indicadores de valuation, como P/L, P/VP, Dividend Yield e EV/EBITDA, mostrando ao usuário como cada indicador é calculado e seu respectivo resultado para o ativo selecionado. Durante o desenvolvimento, implementei consumo de APIs REST, manipulação do DOM, programação assíncrona com fetch e async/await, tratamento de erros, lógica de fallback entre diferentes fontes de dados e uma interface responsiva voltada para boa experiência do usuário.

OBSERVAÇÃO. Nem todos os ativos vão ser cobridos nesse codigo, pois eu teria que colocar cada um individualmente no banco de dados. ele abrange os principais
ativos que eu gostaria de analisar | ele não possui historico de cotação/dividendos, e algumas outras avaliações de ticker, pois a plataforma libera essas informações somente com o plano PRO.

Linguagens





JavaScript (ES6+)
HTML5
CSS3
JSON (troca de dados com APIs)

Backend

Node.js
Express.js

Consumo de APIs

Fetch API
APIs financeiras (Alpha Vantage, BRAPI, CoinGecko e outras fontes de cotação)

Ferramentas e tecnologias

Git
GitHub
npm
Visual Studio Code
