"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"
import { Compass, Zap, BookOpen, Target, Lightbulb, Wand2, Clock } from "lucide-react"

export default function Dashboard() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)

  const competencyData = [
    { subject: "Hàm số & Đồ thị", value: 85 },
    { subject: "Mũ & Logarit", value: 72 },
    { subject: "Nguyên hàm & Tích phân", value: 78 },
    { subject: "Số phức", value: 65 },
    { subject: "Hình học không gian", value: 88 },
    { subject: "Hình học Oxyz", value: 70 },
  ]

  const microLearningModules = [
    {
      id: "challenge",
      title: "Thử thách Hôm nay",
      description: "Bài tập được AI gợi ý riêng cho bạn",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      isPrimary: true,
      duration: "5-10 phút",
    },
    {
      id: "sprint",
      title: "Sprint 15 phút",
      description: "Luyện tập nhanh gọn, nhẹ nhàng",
      icon: Clock,
      color: "from-blue-500 to-cyan-500",
      isPrimary: true,
      duration: "15 phút",
    },
    {
      id: "formula",
      title: "Củng cố Công thức",
      description: "Ôn tập công thức sắp quên (AI Memory Twin)",
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500",
      isPrimary: false,
    },
    {
      id: "practice",
      title: "Luyện tập Dạng bài",
      description: "Giải quyết các bài tập theo dạng",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
      isPrimary: false,
    },
  ]

  const macroLearningModules = [
    {
      id: "roadmap",
      title: "Lộ trình",
      description: "Hành trình game RPG với các Chặng (milestones)",
      icon: Compass,
      color: "from-indigo-500 to-blue-500",
      action: "Xem Lộ trình",
    },
    {
      id: "exam",
      title: "Làm bài thi",
      description: "Kho vũ khí chiến lược với bộ lọc",
      icon: Target,
      color: "from-red-500 to-orange-500",
      action: "Vào Phòng thi",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h2 className="text-4xl font-bold mb-2">Chào Minh Anh 👋</h2>
          <p className="text-slate-400 text-lg">
            Mục tiêu 9+ Toán chỉ còn <span className="text-cyan-400 font-semibold">234 ngày</span> nữa. Hôm nay chúng ta
            sẽ tập trung vào chuyên đề nào?
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-4 text-center">
          <div className="text-4xl mb-2">🔥</div>
          <div className="text-2xl font-bold text-orange-400">15</div>
          <div className="text-sm text-slate-400">Ngày liên tiếp</div>
        </div>
      </div>

      <Card className="mb-8 border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <path d="M 50 100 Q 150 50 250 100 T 450 100" stroke="currentColor" fill="none" strokeWidth="2" />
            <circle cx="100" cy="80" r="3" fill="currentColor" />
            <circle cx="200" cy="120" r="3" fill="currentColor" />
            <circle cx="300" cy="90" r="3" fill="currentColor" />
          </svg>
        </div>
        <CardHeader className="relative z-10">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl mb-2">🎯 AI Teacher Gợi ý: Chinh phục Logarit chứa tham số m</CardTitle>
              <CardDescription className="text-slate-300">
                Phân tích 3 bài thi gần nhất cho thấy bạn đã nắm vững cơ bản nhưng còn lúng túng ở dạng bài này. Dành 5
                phút để ôn tập ngay!
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
              🎯 Mục tiêu: 8.5+
            </Badge>
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              🧩 Dạng bài: Vận dụng cao
            </Badge>
            <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
              📚 Chuyên đề: Mũ & Logarit
            </Badge>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0">
            <Compass className="w-4 h-4 mr-2" />
            BẮT ĐẦU GIẢI MÃ
          </Button>
        </CardContent>
      </Card>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Zap className="w-6 h-6 text-orange-400" />
          Tốc độ Vi mô: Gây Nghiện Hàng Ngày
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {microLearningModules.map((module) => {
            const Icon = module.icon
            return (
              <Card
                key={module.id}
                className={`border-slate-700 hover:bg-slate-800 cursor-pointer transition-all hover:border-slate-600 group ${
                  module.isPrimary ? "bg-slate-800/80 border-2 border-cyan-500/50" : "bg-slate-800/50"
                }`}
                onClick={() => setSelectedModule(module.id)}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                  {module.duration && <div className="text-xs text-cyan-400 mt-2">⏱️ {module.duration}</div>}
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full text-cyan-400 hover:text-cyan-300 hover:bg-slate-700/50">
                    Khám phá →
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-400" />
          Tốc độ Vĩ mô: Chinh Phục Mục Tiêu Lớn
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {macroLearningModules.map((module) => {
            const Icon = module.icon
            return (
              <Card
                key={module.id}
                className="border-slate-700 bg-slate-800/50 hover:bg-slate-800 cursor-pointer transition-all hover:border-slate-600 group"
                onClick={() => setSelectedModule(module.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </div>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0">
                    {module.action}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Wand2 className="w-6 h-6 text-purple-400" />
          Xưởng Tạo Đề
        </h3>
        <Card className="border-slate-700 bg-gradient-to-br from-purple-900/30 to-slate-800 overflow-hidden relative">
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <circle cx="100" cy="100" r="50" fill="currentColor" />
              <circle cx="300" cy="100" r="50" fill="currentColor" />
            </svg>
          </div>
          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl mb-2">🎨 Tạo Đề Thi Theo Yêu Cầu</CardTitle>
            <CardDescription className="text-slate-300">
              Mix các câu hỏi theo chuyên đề, độ khó, và dạng bài của bạn. Ví dụ: 5 câu Logarit + 7 câu Sóng cơ + 3 câu
              Hình học không gian.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-sm text-slate-400 mb-2">Cho học sinh</div>
                <div className="text-lg font-semibold text-cyan-400">Luyện tập chuyên sâu</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-sm text-slate-400 mb-2">Cho giáo viên</div>
                <div className="text-lg font-semibold text-cyan-400">Tạo đề kiểm tra</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-sm text-slate-400 mb-2">Tính năng</div>
                <div className="text-lg font-semibold text-cyan-400">AI tự động chấm</div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
              <Wand2 className="w-4 h-4 mr-2" />
              KHỞI ĐỘNG XƯỞNG TẠO ĐỀ
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Competency Radar Chart */}
        <Card className="lg:col-span-2 border-slate-700 bg-slate-800/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              Bản đồ Năng lực Toán học
            </CardTitle>
            <CardDescription>Sự phân bố kiến thức của bạn trên các chuyên đề</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={competencyData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" stroke="#94a3b8" tick={{ fontSize: 12 }} />
                <PolarRadiusAxis stroke="#475569" />
                <Radar name="Năng lực" dataKey="value" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Stats Card */}
        <Card className="border-slate-700 bg-slate-800/50">
          <CardHeader>
            <CardTitle className="text-lg">Thống kê Hôm nay</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Bài tập hoàn thành</span>
                <span className="text-2xl font-bold text-cyan-400">12</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Độ chính xác</span>
                <span className="text-2xl font-bold text-green-400">87%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                  style={{ width: "87%" }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Topics */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Chuyên đề Gần đây</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Hàm số mũ và logarit", progress: 92, status: "Hoàn thành" },
            { name: "Phương trình logarit chứa tham số", progress: 68, status: "Đang học" },
            { name: "Tích phân từng phần", progress: 45, status: "Đang học" },
            { name: "Số phức - Dạng lượng giác", progress: 100, status: "Hoàn thành" },
          ].map((topic, idx) => (
            <Card key={idx} className="border-slate-700 bg-slate-800/50">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold">{topic.name}</h4>
                  <Badge
                    variant="outline"
                    className={
                      topic.status === "Hoàn thành"
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                    }
                  >
                    {topic.status}
                  </Badge>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all"
                    style={{ width: `${topic.progress}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-slate-400 mt-2">{topic.progress}%</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
