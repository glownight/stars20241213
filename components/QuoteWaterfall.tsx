import QuoteCard from './QuoteCard'

const quotes = [
  {
    id: 1,
    text: "生命中最重要的不是位置，而是方向。",
    author: "奥利弗·温德尔·霍姆斯",
    book: "法律之道",
    likes: 1234,
    collections: 567
  },
  {
    id: 2,
    text: "没有人可以回到过去重新开始，但谁都可以从现在开始，书写一个全然不同的结局。",
    author: "玛丽·罗宾逊",
    book: "心灵鸡汤",
    likes: 2345,
    collections: 678
  },
  // Add more quotes here
]

export default function QuoteWaterfall() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  )
}

