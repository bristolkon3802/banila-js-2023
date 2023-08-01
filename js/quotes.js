const quotes = [
  {
    quote:
      "평화롭고 행복하게 살고자 한다면 아는 것 모두를 말하지도, 본 것 모두를 평가하지도 말라.\n",
    author: "-벤자민 프랭클린",
  },
  {
    quote: "피할 수 없으면 즐겨라.",
    author: "-로버트 엘리엇",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.\n",
    author: "-앙드레 말로",
  },
  {
    quote: "나이가 성숙을 보장하지는 않는다.\n",
    author: "-리와나 블랙웰",
  },
  {
    quote: "지나간 슬픔에 새 눈물을 낭비하지 마라.\n",
    author: "-에우리피데스",
  },
  {
    quote:
      "어리석은 자는 멀리서 행복을 찾고 현명한 자는 자신의 발치에서 행복을 키워간다.\n",
    author: "-제임스 오펜하임",
  },
  {
    quote: "스스로를 신뢰하는 사람만이 다른 사람들에게 성실할 수 있다.\n",
    author: "-에릭 프롬",
  },
  {
    quote:
      "삶이 그대를 속일지라도 슬퍼하거나 노하지 말아라 슬픈 날에 참고 견뎌라.\n 즐거운 날은 오고야 말리니 마음은 미래를 바라고 인내할 수 있는 사람은 그가 바라는 것은 무엇이든지 손에 넣을 수 있다.\n",
    author: "-벤자민 프랭클린",
  },
  {
    quote: "성실한 한마디의 말은 백만 마디의 헛된 찬사보다 낫다.\n",
    author: "-카네기",
  },
  {
    quote:
      "우리의 최대의 영광은 한 번도 실패하지 않는 것이 아니고 넘어질 때마다 일어서는 것이다.\n",
    author: "-골드 스미스",
  },
  {
    quote: "산다는 것 그것은 치열한 전투이다.\n",
    author: "-로망로랑",
  },
  {
    quote:
      "행복의 문이 하나 닫히면 다른 문이 열린다.\n 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 물을 보지 못한다.\n",
    author: "-헬렌켈러",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
