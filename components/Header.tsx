import Link from 'next/link'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 shadow-lg">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="logo">
          星垂平野
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-yellow-200 hover:text-yellow-400 transition-colors">首页</Link></li>
            <li><Link href="/search" className="text-yellow-200 hover:text-yellow-400 transition-colors">AI 搜索</Link></li>
            <li><Link href="/profile" className="text-yellow-200 hover:text-yellow-400 transition-colors">个人中心</Link></li>
          </ul>
        </nav>
        <SearchBar />
      </div>
    </header>
  )
}

