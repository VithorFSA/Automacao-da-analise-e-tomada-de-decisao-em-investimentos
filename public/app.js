const CONFIG = {
  BRAPI_TOKEN: "meu-token-rapaz", // Seu token aqui, basta fazer login gratuito na https://brapi.dev/
  ALPHAVANTAGE_KEY: "",
  REQUEST_TIMEOUT_MS: 11000,
  MAX_SEARCH_RESULTS: 18
};

const ASSETS = [
  { ticker: "MXRF11", nome: "Maxi Renda FII", kind: "FII", market: "brasil", currency: "BRL", yahooSymbol: "MXRF11.SA", brapiSymbol: "MXRF11", aliases: ["mxrf", "maxi renda"] },
  { ticker: "HGLG11", nome: "CSHG Logística FII", kind: "FII", market: "brasil", currency: "BRL", yahooSymbol: "HGLG11.SA", brapiSymbol: "HGLG11", aliases: ["hglg", "cshg logística"] },
  { ticker: "KNRI11", nome: "Kinea Renda Imobiliária", kind: "FII", market: "brasil", currency: "BRL", yahooSymbol: "KNRI11.SA", brapiSymbol: "KNRI11", aliases: ["knri"] },
  { ticker: "XPML11", nome: "XP Malls FII", kind: "FII", market: "brasil", currency: "BRL", yahooSymbol: "XPML11.SA", brapiSymbol: "XPML11", aliases: ["xpml"] },
  { ticker: "BTLG11", nome: "BTG Pactual Logística", kind: "FII", market: "brasil", currency: "BRL", yahooSymbol: "BTLG11.SA", brapiSymbol: "BTLG11", aliases: ["btlg"] },
  { ticker: "PETR4", nome: "Petrobras PN", kind: "Ação", market: "brasil", currency: "BRL", yahooSymbol: "PETR4.SA", brapiSymbol: "PETR4", aliases: ["petrobras", "petr4"] },
  { ticker: "VALE3", nome: "Vale ON", kind: "Ação", market: "brasil", currency: "BRL", yahooSymbol: "VALE3.SA", brapiSymbol: "VALE3", aliases: ["vale"] },
  { ticker: "WEGE3", nome: "WEG ON", kind: "Ação", market: "brasil", currency: "BRL", yahooSymbol: "WEGE3.SA", brapiSymbol: "WEGE3", aliases: ["wege"] },
  { ticker: "ITUB4", nome: "Itaú Unibanco PN", kind: "Ação", market: "brasil", currency: "BRL", yahooSymbol: "ITUB4.SA", brapiSymbol: "ITUB4", aliases: ["itau", "itub"] },
  { ticker: "ABEV3", nome: "Ambev ON", kind: "Ação", market: "brasil", currency: "BRL", yahooSymbol: "ABEV3.SA", brapiSymbol: "ABEV3", aliases: ["ambev"] },
  { ticker: "BBAS3", nome: "Banco do Brasil ON", kind: "Ação", market: "brasil", currency: "BRL", yahooSymbol: "BBAS3.SA", brapiSymbol: "BBAS3", aliases: ["banco do brasil"] },
  { ticker: "BBDC4", nome: "Bradesco PN", kind: "Ação", market: "brasil", currency: "BRL", yahooSymbol: "BBDC4.SA", brapiSymbol: "BBDC4", aliases: ["bradesco"] },
  { ticker: "B3SA3", nome: "B3 ON", kind: "Ação", market: "brasil", currency: "BRL", yahooSymbol: "B3SA3.SA", brapiSymbol: "B3SA3", aliases: ["b3"] },
  { ticker: "AAPL", nome: "Apple Inc.", kind: "Stock", market: "usa", currency: "USD", yahooSymbol: "AAPL", alphaSymbol: "AAPL", aliases: ["apple"] },
  { ticker: "MSFT", nome: "Microsoft Corp.", kind: "Stock", market: "usa", currency: "USD", yahooSymbol: "MSFT", alphaSymbol: "MSFT", aliases: ["microsoft"] },
  { ticker: "NVDA", nome: "NVIDIA Corp.", kind: "Stock", market: "usa", currency: "USD", yahooSymbol: "NVDA", alphaSymbol: "NVDA", aliases: ["nvidia"] },
  { ticker: "AMZN", nome: "Amazon.com Inc.", kind: "Stock", market: "usa", currency: "USD", yahooSymbol: "AMZN", alphaSymbol: "AMZN", aliases: ["amazon"] },
  { ticker: "GOOGL", nome: "Alphabet Inc. Class A", kind: "Stock", market: "usa", currency: "USD", yahooSymbol: "GOOGL", alphaSymbol: "GOOGL", aliases: ["google", "alphabet"] },
  { ticker: "META", nome: "Meta Platforms Inc.", kind: "Stock", market: "usa", currency: "USD", yahooSymbol: "META", alphaSymbol: "META", aliases: ["meta", "facebook"] },
  { ticker: "TSLA", nome: "Tesla Inc.", kind: "Stock", market: "usa", currency: "USD", yahooSymbol: "TSLA", alphaSymbol: "TSLA", aliases: ["tesla"] },
  { ticker: "BTC", nome: "Bitcoin", kind: "Criptomoeda", market: "crypto", currency: "BRL", coinGeckoId: "bitcoin", yahooSymbol: "BTC-USD", aliases: ["bitcoin"] },
  { ticker: "ETH", nome: "Ethereum", kind: "Criptomoeda", market: "crypto", currency: "BRL", coinGeckoId: "ethereum", yahooSymbol: "ETH-USD", aliases: ["ethereum"] },
  { ticker: "SOL", nome: "Solana", kind: "Criptomoeda", market: "crypto", currency: "BRL", coinGeckoId: "solana", yahooSymbol: "SOL-USD", aliases: ["solana"] },
  { ticker: "XRP", nome: "XRP", kind: "Criptomoeda", market: "crypto", currency: "BRL", coinGeckoId: "ripple", yahooSymbol: "XRP-USD", aliases: ["ripple"] }
];

const METRICS = {
  pl: {
    title: "P/L",
    short: "Preço/Lucro",
    formula: "P/L = preço atual ÷ lucro por ação (LPA/EPS)",
    description: "Mostra quantas vezes o lucro anual está embutido no preço.",
    kind: "ratio"
  },
  pvp: {
    title: "P/VP",
    short: "Preço/Valor Patrimonial",
    formula: "P/VP = preço atual ÷ valor patrimonial por ação (VPA/BVPS)",
    description: "Compara o preço com o patrimônio por ação.",
    kind: "ratio"
  },
  dy: {
    title: "Dividend Yield",
    short: "DY",
    formula: "DY = dividendos anuais ÷ preço atual",
    description: "Mostra o retorno em dividendos em relação ao preço.",
    kind: "percent"
  },
  evEbitda: {
    title: "EV/EBITDA",
    short: "EV/EBITDA",
    formula: "EV/EBITDA = valor da empresa ÷ EBITDA",
    description: "Usado para comparar empresas com estrutura de capital diferente.",
    kind: "ratio"
  },
  ps: {
    title: "P/Receita",
    short: "Preço/Receita",
    formula: "P/Receita = valor de mercado ÷ receita anual",
    description: "Útil quando lucro ainda é fraco ou negativo.",
    kind: "ratio"
  }
};

const STATE = {
  selectedAsset: JSON.parse(localStorage.getItem("selectedAsset")) || null,
  selectedMetric: localStorage.getItem("selectedMetric") || "pl",
  snapshot: null,
  searchResults: [],
  loading: false
};

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9.\- /]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatMoney(value, currency = "BRL") {
  const num = Number(value);
  if (!Number.isFinite(num)) return "-";
  try {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: currency || "BRL" }).format(num);
  } catch {
    return `${num.toFixed(2)} ${currency || ""}`.trim();
  }
}

function formatNumber(value, digits = 2) {
  const num = Number(value);
  if (!Number.isFinite(num)) return "-";
  return new Intl.NumberFormat("pt-BR", { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(num);
}

function formatPct(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return "-";
  return `${formatNumber(num * 100, 2)}%`;
}

function ymd(ms) {
  const d = new Date(ms);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}

function unixToYmd(sec) {
  return ymd(sec * 1000);
}

function toDdMmYyyy(ymdText) {
  if (!ymdText || !ymdText.includes("-")) return "";
  const [y, m, d] = ymdText.split("-");
  return `${d}-${m}-${y}`;
}

function firstDefined(...values) {
  for (const v of values) {
    if (v !== undefined && v !== null && v !== "") return v;
  }
  return null;
}

function assetByTicker(ticker) {
  return ASSETS.find(a => a.ticker.toUpperCase() === String(ticker || "").toUpperCase()) || null;
}

function buildSearchPayload(asset) {
  return {
    ticker: asset.ticker,
    nome: asset.nome,
    kind: asset.kind,
    market: asset.market,
    currency: asset.currency,
    yahooSymbol: asset.yahooSymbol || asset.ticker,
    brapiSymbol: asset.brapiSymbol || asset.ticker,
    alphaSymbol: asset.alphaSymbol || asset.ticker,
    coinGeckoId: asset.coinGeckoId || null,
    aliases: asset.aliases || []
  };
}

function localSearch(query) {
  const q = normalizeText(query);
  if (!q) return [];
  return ASSETS
    .map(buildSearchPayload)
    .filter(asset => {
      const hay = normalizeText([asset.ticker, asset.nome, asset.kind, ...(asset.aliases || [])].join(" "));
      return hay.includes(q);
    });
}

async function fetchJson(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeout || CONFIG.REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    const text = await res.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch { data = text; }
    if (!res.ok) {
      const message = typeof data === "object" && data ? (data.error?.message || data.message || JSON.stringify(data)) : String(data).slice(0, 220);
      throw new Error(message || `HTTP ${res.status}`);
    }
    return data;
  } finally {
    clearTimeout(timeout);
  }
}

async function searchYahoo(query) {
  const q = String(query || "").trim();
  if (!q) return [];
  try {
    const url = `https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(q)}&quotesCount=10&newsCount=0`;
    const json = await fetchJson(url, { timeout: 9000 });
    const quotes = Array.isArray(json?.quotes) ? json.quotes : [];
    return quotes.map(item => ({
      ticker: String(item.symbol || "").toUpperCase(),
      nome: item.shortname || item.longname || item.symbol,
      kind: mapYahooType(item.quoteType),
      market: inferMarketFromYahoo(item),
      currency: item.currency || inferCurrencyFromYahoo(item),
      yahooSymbol: item.symbol,
      alphaSymbol: item.symbol,
      brapiSymbol: item.symbol?.replace(".SA", ""),
      aliases: [item.symbol, item.shortname, item.longname].filter(Boolean),
      source: "yahoo"
    })).filter(x => x.ticker);
  } catch {
    return [];
  }
}

async function searchCoinGecko(query) {
  const q = String(query || "").trim();
  if (!q) return [];
  try {
    const url = `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(q)}`;
    const json = await fetchJson(url, { timeout: 9000 });
    const coins = Array.isArray(json?.coins) ? json.coins : [];
    return coins.map(c => ({
      ticker: String(c.symbol || "").toUpperCase(),
      nome: c.name,
      kind: "Criptomoeda",
      market: "crypto",
      currency: "BRL",
      coinGeckoId: c.id,
      yahooSymbol: `${String(c.symbol || "").toUpperCase()}-USD`,
      aliases: [c.id, c.name, c.symbol].filter(Boolean),
      source: "coingecko"
    })).filter(x => x.ticker);
  } catch {
    return [];
  }
}

function inferMarketFromYahoo(item) {
  const symbol = String(item.symbol || "");
  const exchange = String(item.fullExchangeName || item.exchange || "").toLowerCase();
  if (symbol.endsWith(".SA") || exchange.includes("brazil")) return "brasil";
  if (exchange.includes("nasdaq") || exchange.includes("nyse")) return "usa";
  return "global";
}

function inferCurrencyFromYahoo(item) {
  const exchange = String(item.fullExchangeName || item.exchange || "").toLowerCase();
  if (exchange.includes("brazil")) return "BRL";
  return item.currency || "USD";
}

function mapYahooType(type) {
  const t = String(type || "").toLowerCase();
  if (t.includes("crypto")) return "Criptomoeda";
  if (t.includes("fund")) return "FII";
  if (t.includes("etf")) return "ETF";
  if (t.includes("equity")) return "Stock";
  if (t.includes("index")) return "Índice";
  return "Ativo";
}

function mergeUniqueByTicker(items) {
  const map = new Map();
  for (const item of items) {
    const ticker = String(item.ticker || "").toUpperCase().trim();
    if (!ticker) continue;
    if (!map.has(ticker)) map.set(ticker, item);
  }
  return Array.from(map.values());
}

async function searchAssets(query) {
  const [local, yahoo, cg] = await Promise.all([
    Promise.resolve(localSearch(query)),
    searchYahoo(query),
    searchCoinGecko(query)
  ]);
  return mergeUniqueByTicker([...local, ...yahoo, ...cg]).slice(0, CONFIG.MAX_SEARCH_RESULTS);
}

function parseBrapiHistory(rows) {
  if (!Array.isArray(rows)) return [];
  return rows.map(row => ({
    date: unixToYmd(row.date),
    close: Number(row.close)
  })).filter(x => x.date && Number.isFinite(x.close)).sort((a, b) => a.date.localeCompare(b.date));
}

function parseYahooHistory(result) {
  const timestamps = Array.isArray(result?.timestamp) ? result.timestamp : [];
  const closes = result?.indicators?.quote?.[0]?.close || [];
  return timestamps.map((ts, i) => ({
    date: unixToYmd(ts),
    close: Number(closes[i])
  })).filter(x => x.date && Number.isFinite(x.close)).sort((a, b) => a.date.localeCompare(b.date));
}

function parseStooqCsv(text) {
  const lines = String(text || "").trim().split(/\r?\n/);
  if (lines.length < 2) return [];
  return lines.slice(1).map(line => {
    const cols = line.split(",");
    if (cols.length < 5) return null;
    const date = cols[0];
    const close = Number(cols[4]);
    return date && Number.isFinite(close) ? { date, close } : null;
  }).filter(Boolean);
}

function closestOnOrBefore(history, targetDate) {
  if (!Array.isArray(history) || !history.length || !targetDate) return null;
  const target = new Date(`${targetDate}T00:00:00`);
  if (Number.isNaN(target.getTime())) return null;
  let chosen = null;
  for (const item of history) {
    const dt = new Date(`${item.date}T00:00:00`);
    if (dt <= target) chosen = item;
  }
  return chosen ? chosen.close : null;
}

function normalizeRatio(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return null;
  return num;
}

function normalizeDividendYield(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return null;
  if (num > 1.5) return num / 100;
  return num;
}

async function quoteYahoo(asset) {
  const symbol = asset.yahooSymbol || asset.ticker;
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=max&interval=1d&includePrePost=false&events=div,splits`;
  const json = await fetchJson(url, { timeout: 11000 });
  const result = json?.chart?.result?.[0];
  if (!result) throw new Error("Yahoo sem resultado");
  const history = parseYahooHistory(result);
  const price = Number(firstDefined(result?.meta?.regularMarketPrice, history.at(-1)?.close));
  return {
    provider: "Yahoo Finance",
    currency: result?.meta?.currency || asset.currency || "USD",
    name: result?.meta?.longName || result?.meta?.shortName || asset.nome,
    currentPrice: Number.isFinite(price) ? price : null,
    history,
    source: "yahoo"
  };
}

async function statsYahoo(asset) {
  const symbol = asset.yahooSymbol || asset.ticker;
  const url = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${encodeURIComponent(symbol)}?modules=price,summaryDetail,defaultKeyStatistics,financialData`;
  const json = await fetchJson(url, { timeout: 11000 });
  const result = json?.quoteSummary?.result?.[0];
  if (!result) throw new Error("Yahoo stats vazio");

  const price = result.price || {};
  const summary = result.summaryDetail || {};
  const stats = result.defaultKeyStatistics || {};
  const financial = result.financialData || {};

  const pe = firstDefined(stats.trailingPE?.raw, summary.trailingPE?.raw, financial.trailingPE?.raw);
  const pb = firstDefined(stats.priceToBook?.raw, summary.priceToBook?.raw, financial.priceToBook?.raw);
  const dy = firstDefined(summary.dividendYield?.raw, stats.trailingAnnualDividendYield?.raw, financial.dividendYield?.raw);
  const evEbitda = firstDefined(summary.enterpriseToEbitda?.raw, financial.enterpriseToEbitda?.raw, stats.enterpriseToEbitda?.raw);
  const ps = firstDefined(summary.priceToSalesTrailing12Months?.raw, stats.priceToSalesTrailing12Months?.raw, financial.priceToSalesTrailing12Months?.raw);

  return {
    peRatio: normalizeRatio(pe),
    priceToBook: normalizeRatio(pb),
    dividendYield: normalizeDividendYield(dy),
    evEbitda: normalizeRatio(evEbitda),
    priceToSales: normalizeRatio(ps),
    eps: normalizeRatio(firstDefined(stats.trailingEps?.raw, financial.trailingEps?.raw, financial.epsCurrentYear?.raw)),
    bookValuePerShare: normalizeRatio(firstDefined(stats.bookValue?.raw, financial.bookValue?.raw)),
    annualDividendPerShare: normalizeRatio(firstDefined(summary.trailingAnnualDividendRate?.raw, stats.trailingAnnualDividendRate?.raw)),
    source: "yahoo-stats"
  };
}

async function quoteBrapi(asset) {
  // Limpa o ticker (remove .SA se houver) para garantir compatibilidade
  const symbol = (asset.brapiSymbol || asset.ticker).replace(".SA", "");
  const url = `https://brapi.dev/api/quote/${symbol}?modules=summaryProfile&dividends=true`;

  try {
    // Usando o fetchJson que já passa pelo Proxy para evitar o erro de CORS[cite: 1]
    const json = await fetchJson(url, {
      headers: {
        "Authorization": `Bearer ${CONFIG.BRAPI_TOKEN}`
      }
    });

    const result = json?.results?.[0];
    if (!result) throw new Error("Ativo não encontrado");

    return {
      provider: "Brapi",
      currency: result.currency || "BRL",
      name: result.longName || asset.nome,
      currentPrice: result.regularMarketPrice,
      peRatio: result.priceEarnings || null,
      priceToBook: result.priceToBook || null,
      dividendYield: result.dividendYield || null,
      eps: result.eps || null,
      source: "brapi"
    };
  } catch (error) {
    console.error(`Erro ao buscar ${symbol}:`, error);
    return null; // Retorna null para tentar a próxima fonte (Yahoo) se esta falhar
  }
}
async function quoteBrapi(asset) {
  // Limpa o ticker para o padrão Brapi
  const symbol = (asset.brapiSymbol || asset.ticker).replace(".SA", "");
  
  // URL simplificada: sem módulos de dividendos ou fundamentalistas
  const url = `https://brapi.dev/api/quote/${symbol}`;

  try {
    const json = await fetchJson(url, {
      headers: {
        "Authorization": `Bearer ${CONFIG.BRAPI_TOKEN}`
      }
    });

    const result = json?.results?.[0];
    if (!result) throw new Error("Ativo não encontrado");

    return {
      provider: "Brapi (Free)",
      currency: result.currency || "BRL",
      name: result.longName || asset.nome,
      currentPrice: result.regularMarketPrice,
      // Se a API não enviar os dados abaixo no plano free, o JS dara null 
      peRatio: result.priceEarnings || null,
      priceToBook: result.priceToBook || null,
      dividendYield: result.dividendYield || null,
      eps: result.eps || null,
      source: "brapi"
    };
  } catch (error) {
    console.error(`Erro Brapi em ${symbol}:`, error);
    return null; 
  }
}
async function quoteStooq(asset) {
  if (asset.market !== "usa") throw new Error("Stooq só para fallback de EUA");
  const symbol = `${String(asset.ticker || "").toLowerCase()}.us`;
  const url = `https://stooq.com/q/d/l/?s=${encodeURIComponent(symbol)}&i=d`;
  const res = await fetch(url, { mode: "cors" });
  const text = await res.text();
  const history = parseStooqCsv(text);
  if (!history.length) throw new Error("Stooq sem dados");
  return {
    provider: "Stooq",
    currentPrice: history.at(-1)?.close ?? null,
    history,
    source: "stooq"
  };
}

async function quoteCoinGecko(asset) {
  const coinId = asset.coinGeckoId;
  if (!coinId) throw new Error("Sem coinId");
  const currentUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(coinId)}&vs_currencies=brl,usd`;
  const currentJson = await fetchJson(currentUrl, { timeout: 10000 });
  const current = currentJson?.[coinId];
  const currentPrice = Number(firstDefined(current?.brl, current?.usd));
  if (!Number.isFinite(currentPrice)) throw new Error("CoinGecko sem preço");
  return {
    provider: "CoinGecko",
    currentPrice,
    currency: "BRL",
    source: "coingecko"
  };
}

async function coinGeckoHistory(asset, targetDate) {
  const coinId = asset.coinGeckoId;
  if (!coinId || !targetDate) return null;
  const target = new Date(`${targetDate}T00:00:00Z`);
  const from = Math.floor((target.getTime() - 3 * 86400000) / 1000);
  const to = Math.floor((target.getTime() + 3 * 86400000) / 1000);
  const url = `https://api.coingecko.com/api/v3/coins/${encodeURIComponent(coinId)}/market_chart/range?vs_currency=brl&from=${from}&to=${to}`;
  const json = await fetchJson(url, { timeout: 10000 });
  const prices = Array.isArray(json?.prices) ? json.prices : [];
  if (!prices.length) return null;
  let closest = null;
  let diff = Infinity;
  for (const [ms, value] of prices) {
    const delta = Math.abs(ms - target.getTime());
    if (delta < diff) {
      diff = delta;
      closest = Number(value);
    }
  }
  return Number.isFinite(closest) ? closest : null;
}

async function collectSnapshot(asset, targetDate = null) {
  const market = asset.market;
  const quoteFns = [];
  const statsFns = [];

  if (asset.market === "crypto") {
    quoteFns.push(quoteCoinGecko, quoteYahoo);
  } else if (market === "brasil") {
    quoteFns.push(quoteYahoo, quoteBrapi, quoteStooq);
    statsFns.push(statsYahoo);
  } else {
    quoteFns.push(quoteYahoo, quoteAlpha, quoteStooq);
    statsFns.push(statsYahoo, quoteAlpha);
  }

  const snapshot = {
    ticker: asset.ticker,
    nome: asset.nome,
    kind: asset.kind,
    market: asset.market,
    currency: asset.currency || "BRL",
    source: null,
    provider: null,
    history: [],
    currentPrice: null,
    peRatio: null,
    priceToBook: null,
    dividendYield: null,
    evEbitda: null,
    priceToSales: null,
    eps: null,
    bookValuePerShare: null,
    annualDividendPerShare: null
  };

  const quoteErrors = [];
  for (const fn of quoteFns) {
    try {
      const data = await fn(asset);
      if (!snapshot.provider && data.provider) snapshot.provider = data.provider;
      snapshot.currency = data.currency || snapshot.currency;
      snapshot.nome = data.name || snapshot.nome;
      if (snapshot.currentPrice === null && Number.isFinite(Number(data.currentPrice))) snapshot.currentPrice = Number(data.currentPrice);
      if (!snapshot.history.length && Array.isArray(data.history) && data.history.length) snapshot.history = data.history;
      if (snapshot.peRatio === null && Number.isFinite(Number(data.peRatio))) snapshot.peRatio = Number(data.peRatio);
      if (snapshot.priceToBook === null && Number.isFinite(Number(data.priceToBook))) snapshot.priceToBook = Number(data.priceToBook);
      if (snapshot.dividendYield === null && Number.isFinite(Number(data.dividendYield))) snapshot.dividendYield = Number(data.dividendYield);
      if (snapshot.evEbitda === null && Number.isFinite(Number(data.evEbitda))) snapshot.evEbitda = Number(data.evEbitda);
      if (snapshot.priceToSales === null && Number.isFinite(Number(data.priceToSales))) snapshot.priceToSales = Number(data.priceToSales);
      if (snapshot.eps === null && Number.isFinite(Number(data.eps))) snapshot.eps = Number(data.eps);
      if (snapshot.bookValuePerShare === null && Number.isFinite(Number(data.bookValuePerShare))) snapshot.bookValuePerShare = Number(data.bookValuePerShare);
      if (snapshot.annualDividendPerShare === null && Number.isFinite(Number(data.annualDividendPerShare))) snapshot.annualDividendPerShare = Number(data.annualDividendPerShare);
      snapshot.source = data.source || snapshot.source;
      if (snapshot.currentPrice !== null && snapshot.history.length) break;
    } catch (err) {
      quoteErrors.push(err.message || String(err));
    }
  }

  for (const fn of statsFns) {
    try {
      const data = await fn(asset);
      if (snapshot.peRatio === null && Number.isFinite(Number(data.peRatio))) snapshot.peRatio = Number(data.peRatio);
      if (snapshot.priceToBook === null && Number.isFinite(Number(data.priceToBook))) snapshot.priceToBook = Number(data.priceToBook);
      if (snapshot.dividendYield === null && Number.isFinite(Number(data.dividendYield))) snapshot.dividendYield = Number(data.dividendYield);
      if (snapshot.evEbitda === null && Number.isFinite(Number(data.evEbitda))) snapshot.evEbitda = Number(data.evEbitda);
      if (snapshot.priceToSales === null && Number.isFinite(Number(data.priceToSales))) snapshot.priceToSales = Number(data.priceToSales);
      if (snapshot.eps === null && Number.isFinite(Number(data.eps))) snapshot.eps = Number(data.eps);
      if (snapshot.bookValuePerShare === null && Number.isFinite(Number(data.bookValuePerShare))) snapshot.bookValuePerShare = Number(data.bookValuePerShare);
      if (snapshot.annualDividendPerShare === null && Number.isFinite(Number(data.annualDividendPerShare))) snapshot.annualDividendPerShare = Number(data.annualDividendPerShare);
      if (!snapshot.provider && data.provider) snapshot.provider = data.provider;
      snapshot.source = data.source || snapshot.source;
    } catch {}
  }

  if (snapshot.currentPrice === null && asset.market === "crypto") {
    try {
      const hist = await coinGeckoHistory(asset, targetDate);
      if (Number.isFinite(hist)) snapshot.currentPrice = hist;
      snapshot.provider = snapshot.provider || "CoinGecko";
      snapshot.source = snapshot.source || "coingecko";
    } catch {}
  }

  if (targetDate && snapshot.history.length) {
    const historical = closestOnOrBefore(snapshot.history, targetDate);
    snapshot.selectedHistoricalPrice = historical;
  } else if (targetDate && asset.market === "crypto") {
    try {
      snapshot.selectedHistoricalPrice = await coinGeckoHistory(asset, targetDate);
    } catch {}
  } else {
    snapshot.selectedHistoricalPrice = null;
  }

  return snapshot;
}

function metricValue(metricId, snapshot) {
  const price = Number(snapshot.currentPrice);
  if (!Number.isFinite(price)) return { available: false, reason: "Sem preço real." };

  if (metricId === "pl") {
    const ratio = firstDefined(snapshot.peRatio);
    const eps = firstDefined(snapshot.eps, ratio ? price / ratio : null);
    const value = Number.isFinite(Number(ratio)) ? Number(ratio) : (Number.isFinite(Number(eps)) ? price / Number(eps) : null);
    return value && Number.isFinite(value)
      ? { available: true, value, components: [{ label: "Preço", value: price, type: "money" }, { label: "LPA / EPS", value: eps, type: "money" }], resultLabel: "P/L" }
      : { available: false, reason: "P/L não encontrado nas fontes." };
  }

  if (metricId === "pvp") {
    const ratio = firstDefined(snapshot.priceToBook);
    const bv = firstDefined(snapshot.bookValuePerShare, ratio ? price / ratio : null);
    const value = Number.isFinite(Number(ratio)) ? Number(ratio) : (Number.isFinite(Number(bv)) ? price / Number(bv) : null);
    return value && Number.isFinite(value)
      ? { available: true, value, components: [{ label: "Preço", value: price, type: "money" }, { label: "VPA / BVPS", value: bv, type: "money" }], resultLabel: "P/VP" }
      : { available: false, reason: "P/VP não encontrado nas fontes." };
  }

  if (metricId === "dy") {
    const ratio = firstDefined(snapshot.dividendYield);
    const dividend = firstDefined(snapshot.annualDividendPerShare, ratio ? price * ratio : null);
    const value = Number.isFinite(Number(ratio)) ? Number(ratio) : (Number.isFinite(Number(dividend)) ? Number(dividend) / price : null);
    return value && Number.isFinite(value)
      ? { available: true, value, components: [{ label: "Preço", value: price, type: "money" }, { label: "Dividendos anuais", value: dividend, type: "money" }], resultLabel: "DY" }
      : { available: false, reason: "Dividend yield não encontrado nas fontes." };
  }

  if (metricId === "evEbitda") {
    const ratio = firstDefined(snapshot.evEbitda);
    const ev = firstDefined(snapshot.enterpriseValue, null);
    const ebitda = firstDefined(null);
    const value = Number.isFinite(Number(ratio)) ? Number(ratio) : null;
    return value && Number.isFinite(value)
      ? { available: true, value, components: [{ label: "Valor da empresa (EV)", value: ev, type: "money" }, { label: "EBITDA", value: ebitda, type: "money" }], resultLabel: "EV/EBITDA" }
      : { available: false, reason: "EV/EBITDA não encontrado nas fontes." };
  }

  if (metricId === "ps") {
    const ratio = firstDefined(snapshot.priceToSales);
    const value = Number.isFinite(Number(ratio)) ? Number(ratio) : null;
    return value && Number.isFinite(value)
      ? { available: true, value, components: [{ label: "Preço", value: price, type: "money" }], resultLabel: "P/Receita" }
      : { available: false, reason: "P/Receita não encontrado nas fontes." };
  }

  return { available: false, reason: "Indicador não suportado." };
}

function metricExplanation(metricId, snapshot) {
  const metric = METRICS[metricId] || METRICS.pl;
  const calc = metricValue(metricId, snapshot);
  const price = Number(snapshot.currentPrice);
  const currency = snapshot.currency || "BRL";
  let parts = [];

  parts.push(`<div class="notice"><strong>${metric.title}</strong> — ${metric.formula}</div>`);

  if (!calc.available) {
    parts.push(`<div class="warning">${calc.reason}</div>`);
    return parts.join("");
  }

  const componentsHtml = calc.components.map(c => {
    const display = c.type === "money" ? formatMoney(c.value, currency) : formatNumber(c.value, 2);
    return `<div class="kv-row"><span class="kv-key">${c.label}</span><span class="kv-value">${display}</span></div>`;
  }).join("");

  let computedText = "";
  if (metricId === "pl") {
    const eps = calc.components[1]?.value;
    computedText = `P/L = ${formatMoney(price, currency)} ÷ ${formatMoney(eps, currency)} = <strong>${formatNumber(calc.value, 2)}x</strong>`;
  } else if (metricId === "pvp") {
    const bv = calc.components[1]?.value;
    computedText = `P/VP = ${formatMoney(price, currency)} ÷ ${formatMoney(bv, currency)} = <strong>${formatNumber(calc.value, 2)}x</strong>`;
  } else if (metricId === "dy") {
    const div = calc.components[1]?.value;
    computedText = `DY = ${formatMoney(div, currency)} ÷ ${formatMoney(price, currency)} = <strong>${formatPct(calc.value)}</strong>`;
  } else if (metricId === "evEbitda") {
    computedText = `EV/EBITDA = <strong>${formatNumber(calc.value, 2)}x</strong>`;
  } else if (metricId === "ps") {
    computedText = `P/Receita = <strong>${formatNumber(calc.value, 2)}x</strong>`;
  }

  parts.push(`<div class="kv">${componentsHtml}</div>`);
  parts.push(`<div class="notice">Resultado: ${computedText}</div>`);
  parts.push(`<div class="small muted">${metric.description}</div>`);
  return parts.join("");
}

function metricCardLabel(metricId, snapshot) {
  const metric = METRICS[metricId];
  const calc = metricValue(metricId, snapshot);
  if (!calc.available) return "sem dado";
  if (metric.kind === "percent") return formatPct(calc.value);
  return `${formatNumber(calc.value, 2)}x`;
}

function renderSelectedAsset() {
  const box = document.getElementById("selectedAssetCard");
  if (!box) return;
  const asset = STATE.selectedAsset;
  if (!asset) {
    box.innerHTML = `<p class="muted">Nenhum ativo selecionado ainda.</p>`;
    return;
  }
  const snap = STATE.snapshot;
  const priceText = snap && Number.isFinite(Number(snap.currentPrice)) ? formatMoney(snap.currentPrice, snap.currency) : "Carregando...";
  box.innerHTML = `
    <div class="asset-hero">
      <div class="asset-line">
        <span class="badge">${asset.kind}</span>
        <span class="badge">${asset.ticker}</span>
      </div>
      <h2 style="margin-bottom:0">${asset.nome}</h2>
      <div class="price">${priceText}</div>
      <p class="muted" id="assetSourceText">${snap && snap.provider ? `Fonte: ${snap.provider}` : "Buscando preço real nas fontes..."}</p>
      <div class="chips">
        <span class="chip">${asset.market}</span>
        <span class="chip">${asset.currency}</span>
        <span class="chip">${snap && snap.history && snap.history.length ? "histórico carregado" : "histórico parcial"}</span>
      </div>
    </div>
  `;
}

function renderMetricGrid() {
  const grid = document.getElementById("metricGrid");
  if (!grid || !STATE.snapshot || !STATE.selectedAsset) return;

  const cards = Object.entries(METRICS).map(([key, metric]) => {
    const val = metricCardLabel(key, STATE.snapshot);
    return `
      <div class="metric-card ${STATE.selectedMetric === key ? "active" : ""}" data-metric="${key}">
        <div>
          <h3>${metric.short}</h3>
          <p>${metric.description}</p>
        </div>
        <div class="meta">${val}</div>
      </div>
    `;
  }).join("");

  grid.innerHTML = cards;

  grid.querySelectorAll(".metric-card").forEach(card => {
    card.addEventListener("click", () => {
      setSelectedMetric(card.dataset.metric);
    });
  });
}

function renderMetricDetail() {
  const box = document.getElementById("metricDetail");
  if (!box || !STATE.snapshot || !STATE.selectedAsset) return;

  const metricId = STATE.selectedMetric in METRICS ? STATE.selectedMetric : "pl";
  const metric = METRICS[metricId];
  const calc = metricValue(metricId, STATE.snapshot);

  box.innerHTML = `
    <div class="section-head">
      <div>
        <h3 style="margin-bottom:6px">${metric.title}</h3>
        <p class="muted">${metric.formula}</p>
      </div>
      <a class="btn ghost" href="valuation.html?metric=${encodeURIComponent(metricId)}">Abrir detalhe</a>
    </div>
    <div class="kv">
      ${calc.available ? `
        <div class="kv-row"><span class="kv-key">Resultado</span><span class="kv-value">${metric.kind === "percent" ? formatPct(calc.value) : `${formatNumber(calc.value, 2)}x`}</span></div>
        ${calc.components.map(c => `
          <div class="kv-row">
            <span class="kv-key">${c.label}</span>
            <span class="kv-value">${c.type === "money" ? formatMoney(c.value, STATE.snapshot.currency) : formatNumber(c.value, 2)}</span>
          </div>
        `).join("")}
      ` : `<div class="warning">${calc.reason}</div>`}
    </div>
    <div style="margin-top:14px">${metricExplanation(metricId, STATE.snapshot)}</div>
  `;
}

function setSelectedMetric(metricId) {
  STATE.selectedMetric = metricId;
  localStorage.setItem("selectedMetric", metricId);
  renderMetricGrid();
  renderMetricDetail();
}

async function loadSnapshot() {
  if (!STATE.selectedAsset) {
    STATE.snapshot = null;
    renderSelectedAsset();
    renderMetricGrid();
    renderMetricDetail();
    return;
  }

  const selectedDate = null;
  const snapshot = await collectSnapshot(STATE.selectedAsset, selectedDate);
  STATE.snapshot = snapshot;
  renderSelectedAsset();
  renderMetricGrid();
  renderMetricDetail();
}

async function onSearchInput(query) {
  const list = document.getElementById("searchResults");
  if (!list) return;
  if (!String(query || "").trim()) {
    list.innerHTML = "";
    STATE.searchResults = [];
    return;
  }

  list.innerHTML = `<div class="muted small">Buscando...</div>`;
  const results = await searchAssets(query);
  STATE.searchResults = results;

  if (!results.length) {
    list.innerHTML = `<div class="muted small">Nenhum ativo encontrado.</div>`;
    return;
  }

  list.innerHTML = results.map((a, idx) => `
    <div class="result-item" data-index="${idx}">
      <div class="result-title">${a.ticker} • ${a.nome}</div>
      <div class="result-meta">${a.kind} • ${a.market} • ${a.source || "local"}</div>
    </div>
  `).join("");

  list.querySelectorAll(".result-item").forEach(item => {
    item.addEventListener("click", async () => {
      const asset = STATE.searchResults[Number(item.dataset.index)];
      if (!asset) return;
      STATE.selectedAsset = assetByTicker(asset.ticker) || asset;
      localStorage.setItem("selectedAsset", JSON.stringify(STATE.selectedAsset));
      await loadSnapshot();
    });
  });
}

async function setDefaultAsset() {
  if (!STATE.selectedAsset) {
    STATE.selectedAsset = buildSearchPayload(ASSETS[0]);
    localStorage.setItem("selectedAsset", JSON.stringify(STATE.selectedAsset));
  }
  await loadSnapshot();
}

function currentMetricOrDefault() {
  return STATE.selectedMetric in METRICS ? STATE.selectedMetric : "pl";
}

async function renderDetailPage() {
  const title = document.getElementById("methodTitle");
  const subtitle = document.getElementById("methodSubtitle");
  const assetBox = document.getElementById("assetSnapshot");
  const details = document.getElementById("methodDetails");
  const grid = document.getElementById("metricGrid");

  if (!title || !subtitle || !assetBox || !details || !grid) return;

  const params = new URLSearchParams(window.location.search);
  const metricFromUrl = params.get("metric");
  if (metricFromUrl && METRICS[metricFromUrl]) {
    STATE.selectedMetric = metricFromUrl;
    localStorage.setItem("selectedMetric", metricFromUrl);
  }

  if (!STATE.selectedAsset) STATE.selectedAsset = buildSearchPayload(ASSETS[0]);
  const snapshot = await collectSnapshot(STATE.selectedAsset, null);
  STATE.snapshot = snapshot;

  title.textContent = METRICS[currentMetricOrDefault()].title;
  subtitle.textContent = `${snapshot.ticker} • ${snapshot.nome}`;

  assetBox.innerHTML = `
    <div class="asset-line">
      <span class="badge">${snapshot.kind}</span>
      <span class="badge">${snapshot.market}</span>
    </div>
    <div><strong>${snapshot.nome}</strong></div>
    <div class="small">${snapshot.ticker}</div>
    <div class="price">${Number.isFinite(Number(snapshot.currentPrice)) ? formatMoney(snapshot.currentPrice, snapshot.currency) : "Sem cotação"}</div>
    <div class="small muted">${snapshot.provider ? `Fonte: ${snapshot.provider}` : "Fonte não identificada"}</div>
  `;

  details.innerHTML = `
    <div class="kv">
      <div class="kv-row"><span class="kv-key">Fórmula</span><span class="kv-value">${METRICS[currentMetricOrDefault()].formula}</span></div>
      ${metricValue(currentMetricOrDefault(), snapshot).available ? `
        ${metricValue(currentMetricOrDefault(), snapshot).components.map(c => `
          <div class="kv-row"><span class="kv-key">${c.label}</span><span class="kv-value">${c.type === "money" ? formatMoney(c.value, snapshot.currency) : formatNumber(c.value, 2)}</span></div>
        `).join("")}
        <div class="kv-row"><span class="kv-key">Resultado</span><span class="kv-value">${METRICS[currentMetricOrDefault()].kind === "percent" ? formatPct(metricValue(currentMetricOrDefault(), snapshot).value) : `${formatNumber(metricValue(currentMetricOrDefault(), snapshot).value, 2)}x`}</span></div>
      ` : `<div class="warning">${metricValue(currentMetricOrDefault(), snapshot).reason}</div>`}
    </div>
    <div style="margin-top:14px">${metricExplanation(currentMetricOrDefault(), snapshot)}</div>
  `;

  grid.innerHTML = Object.entries(METRICS).map(([key, metric]) => `
    <div class="metric-card ${key === currentMetricOrDefault() ? "active" : ""}" data-metric="${key}">
      <div>
        <h3>${metric.short}</h3>
        <p>${metric.description}</p>
      </div>
      <div class="meta">${metricCardLabel(key, snapshot)}</div>
    </div>
  `).join("");

  grid.querySelectorAll(".metric-card").forEach(card => {
    card.addEventListener("click", async () => {
      STATE.selectedMetric = card.dataset.metric;
      localStorage.setItem("selectedMetric", STATE.selectedMetric);
      await renderDetailPage();
    });
  });
}

async function init() {
  const searchInput = document.getElementById("searchAsset");
  if (searchInput) {
    searchInput.addEventListener("input", e => onSearchInput(e.target.value));
    if (!STATE.selectedAsset) {
      STATE.selectedAsset = buildSearchPayload(ASSETS[0]);
      localStorage.setItem("selectedAsset", JSON.stringify(STATE.selectedAsset));
    }
    await setDefaultAsset();
  }

  if (document.getElementById("methodTitle")) {
    await renderDetailPage();
  }
}

init();