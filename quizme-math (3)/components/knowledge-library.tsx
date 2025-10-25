"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Search, Play } from "lucide-react"
import { useState } from "react"

export default function KnowledgeLibrary() {
  const [searchQuery, setSearchQuery] = useState("")

  // Knowledge topics
  const topics = [
    { id: 1, name: "Hàm số", subtopics: 8, difficulty: "Cơ bản", color: "from-blue-500 to-cyan-500" },
    { id: 2, name: "Mũ & Logarit", subtopics: 6, difficulty: "Trung bình", color: "from-purple-500 to-pink-500" },
    { id: 3, name: "Tích phân", subtopics: 7, difficulty: "Nâng cao", color: "from-orange-500 to-red-500" },
    { id: 4, name: "Số phức", subtopics: 5, difficulty: "Trung bình", color: "from-green-500 to-emerald-500" },
    { id: 5, name: "Hình học không gian", subtopics: 9, difficulty: "Nâng cao", color: "from-indigo-500 to-blue-500" },
    { id: 6, name: "Hình học tọa độ", subtopics: 7, difficulty: "Trung bình", color: "from-pink-500 to-rose-500" },
  ]

  // Formulas
  const formulas = [
    { id: 1, category: "Hàm số", title: "Công thức đạo hàm cơ bản", formula: "(x^n)' = n·x^(n-1)" },
    { id: 2, category: "Mũ & Log", title: "Logarit tích", formula: "log(a·b) = log(a) + log(b)" },
    { id: 3, category: "Tích phân", title: "Tích phân từng phần", formula: "∫u·dv = u·v - ∫v·du" },
    { id: 4, category: "Số phức", title: "Mô đun số phức", formula: "|z| = √(a² + b²)" },
  ]

  // Video lessons
  const videos = [
    { id: 1, title: "Khái niệm Hàm số", duration: "4:32", topic: "Hàm số", views: 1200 },
    { id: 2, title: "Phương trình Logarit cơ bản", duration: "5:15", topic: "Mũ & Log", views: 890 },
    { id: 3, title: "Tích phân xác định", duration: "6:48", topic: "Tích phân", views: 650 },
    { id: 4, title: "Phép toán số phức", duration: "4:20", topic: "Số phức", views: 1050 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Thư Viện Kiến Thức</h2>
          <p className="text-slate-400">Lấp lỗ hổng kiến thức và nâng cao kỹ năng</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm kiếm công thức, video, hoặc chuyên đề..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Knowledge Topics Graph */}
        <Card className="bg-slate-800/50 border-slate-700 p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-green-400" />
            <h3 className="text-xl font-semibold text-white">Sơ Đồ Tri Thức Tương Tác</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="p-4 bg-slate-700/30 rounded-lg border border-slate-600 hover:border-slate-500 transition-all cursor-pointer hover:scale-105"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${topic.color} flex items-center justify-center mb-3`}
                >
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">{topic.name}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">{topic.subtopics} chuyên đề</span>
                  <Badge
                    className={`text-xs ${
                      topic.difficulty === "Cơ bản"
                        ? "bg-green-500/20 text-green-300"
                        : topic.difficulty === "Trung bình"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-red-500/20 text-red-300"
                    }`}
                  >
                    {topic.difficulty}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Formulas Section */}
        <Card className="bg-slate-800/50 border-slate-700 p-6 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Công Thức Toán 12</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formulas.map((formula) => (
              <div key={formula.id} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <Badge className="bg-blue-500/20 text-blue-300 text-xs mb-2">{formula.category}</Badge>
                    <h4 className="font-semibold text-white text-sm">{formula.title}</h4>
                  </div>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-600 font-mono text-sm text-cyan-300">
                  {formula.formula}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Video Lessons */}
        <Card className="bg-slate-800/50 border-slate-700 p-6">
          <div className="flex items-center gap-2 mb-6">
            <Play className="w-5 h-5 text-red-400" />
            <h3 className="text-xl font-semibold text-white">Video Bài Giảng Ngắn</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videos.map((video) => (
              <div
                key={video.id}
                className="p-4 bg-slate-700/30 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <Badge className="bg-red-500/20 text-red-300 text-xs mb-2">{video.topic}</Badge>
                    <h4 className="font-semibold text-white">{video.title}</h4>
                  </div>
                  <Play className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>{video.duration}</span>
                  <span>{video.views} lượt xem</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
