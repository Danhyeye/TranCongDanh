const PRICE_URL = "https://interview.switcheo.com/prices.json";
const IMAGE_BASE_PATH = "../../../tokens";

// List of all token symbols (extracted from the tokens folder)
const tokens = [
  "1INCH", "AAVE", "ACT", "ADA", "AEVO", "AGI", "AI16Z", "AIXBT", "AKRO", "AKT",
  "ALGO", "ALPHA", "ALT", "AMP", "ANC", "ANDR", "ANIME", "ANKR", "ANT", "ANY",
  "APE", "APOLLO", "APT", "AR", "ARB", "ARCH", "ASA", "ASTRO", "ATOM-dATOM", "ATOM",
  "AUDIO", "AUT", "AVA", "AVAIL", "AVAX", "AXL", "AXS", "AXT", "BAKE", "BAL",
  "BAND", "BAT", "BCD", "BCH", "BCHA", "BCN", "BCNA", "BELT", "BERA", "BETH",
  "BHC", "BIT", "BLAST", "BLD", "BLOX", "BLUR", "BNB", "BNT", "BOLT", "BONK",
  "BOOT", "BRAINS", "BRETT", "BRKL", "BTC", "BTCST", "BTG", "BTM", "BTMX", "BTSG",
  "BTT", "BUNNY", "BUSD", "BUSDT", "C98", "CAKE", "CANTO", "CARB", "CAT", "CEL",
  "CELO", "CETH", "CFX", "CGAS", "CHEQ", "CHOG", "CHSB", "CHT", "CHZ", "CKB",
  "CMDX", "CMST", "CNT", "COIN", "COMP", "COOK", "CRBRUS", "CRE", "CRO", "CRV",
  "CTK", "CW", "DAG", "DAI", "DAK", "DARC", "DASH", "DBC", "DCR", "DEC",
  "DEGEN", "DENT", "DGB", "DIG", "DKT", "DODO", "DOGE", "DOT", "DPL", "DPX",
  "DRFT", "DROP", "DSM", "DUVT", "DVPN", "DYDX", "DYM", "EEUR", "EIGEN", "ELA",
  "ELF", "ENA", "ENJ", "ENS", "EOS", "EPS", "ETC", "ETH", "ETHBTC", "ETN",
  "EUROC", "EUT", "EVMOS", "EWT", "FARTCOIN", "FBTC", "FEES", "FET", "FIL", "FIS",
  "FLIX", "FLM", "FLOW", "FLUID", "FLUO", "FRANK", "FSGLP", "FTM", "FTT", "FTTC",
  "FUN", "GALA", "GAMBIT", "GAS", "GBT", "GLP", "GM", "GMX", "GNO", "GNS",
  "GOAT", "GRASS", "GRAV", "GRT", "GT", "HBAR", "HDN", "HELMET", "HKT", "HNT",
  "HOPE", "HOT", "HT", "HUAHUA", "HUNY", "HUSD", "HYPE", "IBCX", "ICP", "ICX",
  "IDT", "INIT", "INJ", "INT", "ION", "IOST", "IOTX", "IOV", "IP", "IRIS",
  "IXO", "JPT", "JTO", "JUNO", "JUP", "KAITO", "KAS", "KBONK", "KCS", "KFLOKI",
  "KLAY", "KMD", "KNC", "KPEPE", "KRT", "KSHIB", "KSM", "KUJI", "LAYER", "LBTC",
  "LDO", "LEO", "LET", "LIKE", "LINK", "LKT", "LOOM", "LOOP", "LOTA", "LPT",
  "LRC", "LSI", "LSK", "LTC", "LUM", "LUNA", "LUNAX", "LUNC", "LUNI", "LUNR",
  "LUV", "LVN", "M87", "MANA", "MANTA", "MARBLE", "MATH", "MATIC", "MDX", "ME",
  "MED", "MEME", "METIS", "MEW", "MIAW", "MILK", "MINA", "MINE", "MIOTA", "MIR",
  "MKR", "MMOG", "MNT", "MNTA", "MNTL", "MON", "MOODENG", "MORPHO", "MYT", "NANO",
  "NAS", "NAT", "NEAR", "NEIROETH", "NEO", "NETA", "NEX", "NEXO", "NGM", "NIM",
  "NKN", "NMR", "NOT", "NOTE", "NTRN", "NXM", "OCEAN", "OCH", "OGN", "OKB",
  "OKT", "OM", "OMG", "OMI", "OMNI", "ONDO", "ONE", "ONT", "OP", "OPUL",
  "ORDI", "ORION", "ORNE", "OSMO", "OXT", "OXY", "PAX", "PAXG", "PENDLE", "PENGU",
  "PEPE", "PHT", "PLAY", "PLQ", "PLY", "PNUT", "POL", "POLY", "POPCAT", "PORT",
  "PROM", "PSI", "PSTAKE", "PUDGY", "PUMP", "PUNDIX", "PURR", "PURSE", "PYTH", "QCK",
  "QKC", "QNT", "QTUM", "RAY", "RBN", "REEF", "REGEN", "REN", "REP", "REV",
  "RLB", "RLC", "RNDR", "ROAR", "ROWAN", "RSR", "RUNE", "RVN", "S", "SAFEMOON",
  "SAGA", "SAND", "SAYVE", "SC", "SCRT", "SDT", "SEI", "SET", "SGT", "SHD",
  "SHIB", "SHIDO", "SITY", "SLERF", "SNT", "SNX", "SOL", "SOLETH", "SOM", "SOMM",
  "SPEC", "SRM", "SRV", "STARS", "STEEM", "STMX", "STORJ", "STRAX", "STRD", "STREAM",
  "STRK", "STT", "STX", "SUI", "SUN", "SUSHI", "SWTH", "SXP", "TAO", "TEL",
  "TFUEL", "THETA", "THT", "TIA", "TICK", "TITAN", "TLAND", "TLM", "TOMO", "TON",
  "TPC", "TRAXX", "TRB", "TRU", "TRUMP", "TRX", "TTT", "TUSD", "TWD", "TWT",
  "UBQ", "UMEE", "UNA", "UNI", "UOS", "USC", "USD", "USDC", "USDP", "USDT",
  "USDY", "USK", "UST", "USUAL", "VDL", "VET", "VIRTUAL", "VKR", "VRTX", "W",
  "WAL", "WAVAX", "WAVE", "WBNB", "WBTC", "WETH", "WHALE", "WIF", "WIN", "WLD",
  "WMATIC", "WMNT", "WMON", "WRX", "XCAD", "XDC", "XEM", "XKI", "XLM", "XMR",
  "XPRT", "XRP", "XSGD", "XTRA", "XTZ", "XVG", "XVS", "YAKI", "YAM", "YFI",
  "ZCH", "ZEC", "ZEN", "ZIL", "ZRO", "ZRX", "ZWAP"
];

const priceState = {
  map: {},
  availableTokens: []
};

let sendSelect;
let receiveSelect;
let sendInput;
let outputInput;

const tokenImagePaths = symbol => ({
  svg: `${IMAGE_BASE_PATH}/${symbol}.svg`,
  png: `${IMAGE_BASE_PATH}/${symbol}.png`
});

function buildPriceMap(data) {
  const map = {};
  data.forEach(item => {
    const currency = item.currency;
    const numericPrice = Number(item.price);
    if (!currency || Number.isNaN(numericPrice)) return;
    map[currency] = numericPrice;
  });
  return map;
}

function filterPricedTokens(map) {
  return tokens.filter(symbol => map[symbol] !== undefined);
}

function createOption(symbol) {
  const option = document.createElement("option");
  option.value = symbol;
  option.textContent = symbol;
  return option;
}

function populateSelect(select, symbols) {
  select.innerHTML = "";
  symbols.forEach(symbol => select.appendChild(createOption(symbol)));
}

function showingTokenImage(select) {
  const option = select.options[select.selectedIndex];
  if (!option) return;

  let img = select.parentElement.querySelector(".token-image");
  if (!img) {
    img = document.createElement("img");
    img.className = "token-image";
    img.width = 28;
    img.height = 28;
    select.parentElement.appendChild(img);
  }

  const { svg, png } = tokenImagePaths(option.value);
  img.dataset.fallback = "";
  img.onerror = () => {
    if (img.dataset.fallback) return;
    img.dataset.fallback = "1";
    img.src = png;
  };

  img.src = svg;
  img.alt = option.value;
}

function calculateOutput() {
  const amount = Number(sendInput.value);
  if (Number.isNaN(amount) || amount <= 0) {
    outputInput.value = "";
    return;
  }

  const fromSymbol = sendSelect.value;
  const toSymbol = receiveSelect.value;
  const fromPrice = priceState.map[fromSymbol];
  const toPrice = priceState.map[toSymbol];

  if (!fromPrice || !toPrice) {
    outputInput.value = "";
    return;
  }

  const outputAmount = amount * (fromPrice / toPrice);
  outputInput.value = outputAmount.toFixed(6);
}

async function loadPrices() {
  const response = await fetch(PRICE_URL);
  const data = await response.json();
  priceState.map = buildPriceMap(data);
  priceState.availableTokens = filterPricedTokens(priceState.map);
}

function initSelects() {
  populateSelect(sendSelect, priceState.availableTokens);
  populateSelect(receiveSelect, priceState.availableTokens);

  if (priceState.availableTokens.length > 1) {
    sendSelect.selectedIndex = 0;
    receiveSelect.selectedIndex = 1;
  }

  showingTokenImage(sendSelect);
  showingTokenImage(receiveSelect);
}

function bindEvents() {
  sendInput.addEventListener("input", calculateOutput);
  sendSelect.addEventListener("change", () => {
    showingTokenImage(sendSelect);
    calculateOutput();
  });
  receiveSelect.addEventListener("change", () => {
    showingTokenImage(receiveSelect);
    calculateOutput();
  });
}

async function bootstrap() {
  sendInput = document.getElementById("input-amount");
  outputInput = document.getElementById("output-amount");
  const selects = document.querySelectorAll(".token-select");

  if (selects.length < 2 || !sendInput || !outputInput) return;

  [sendSelect, receiveSelect] = selects;

  try {
    await loadPrices();
  } catch (err) {
    console.error("Failed to load prices", err);
    return;
  }

  initSelects();
  bindEvents();
  calculateOutput();
}

document.addEventListener("DOMContentLoaded", bootstrap);

