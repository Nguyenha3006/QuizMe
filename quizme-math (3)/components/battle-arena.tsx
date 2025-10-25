"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Target, Trophy, Clock, Crosshair, Bookmark, AlertCircle, Lightbulb, Dice6, ZapIcon } from "lucide-react"

export default function BattleArena() {
  const [savedTips, setSavedTips] = useState<string[]>([])

  const battleModes = [
    {
      id: "sprint",
      title: "Sprint 15 Phút",
      icon: Zap,
      description:
        "Thử thách tốc độ với 15 câu nhận biết - thông hiểu. Rèn luyện phản xạ và chống sai sót vặt. Hoàn hảo để khởi động trước mỗi buổi học.",
      button: "THAM CHIẾN NGAY",
      color: "from-yellow-500 to-orange-500",
      borderColor: "border-yellow-500/30",
    },
    {
      id: "marathon",
      title: "Marathon 90 Phút",
      icon: Target,
      description:
        "Mô phỏng 100% kỳ thi THPT Quốc gia. 50 câu, 90 phút, áp lực thực sự. Không có nút tạm dừng. Hãy chuẩn bị tâm lý và giấy nháp!",
      button: "VÀO PHÒNG THI",
      color: "from-red-500 to-pink-500",
      borderColor: "border-red-500/30",
    },
    {
      id: "rank",
      title: "Leo Rank Tuần",
      icon: Trophy,
      description:
        "Mỗi tuần một đề thi đặc biệt do AI lựa chọn. Hoàn thành để được xếp hạng với hàng ngàn sĩ tử khác. Vinh danh TOP 100 vào mỗi Chủ Nhật.",
      button: "THỬ SỨC BẢNG VÀNG",
      color: "from-purple-500 to-indigo-500",
      borderColor: "border-purple-500/30",
    },
  ]

  const tips = [
    {
      id: "strategy-3-rounds",
      title: "Chiến thuật '3 Vòng' Bất bại",
      icon: Crosshair,
      content:
        "Vòng 1 (30-40 phút): Chỉ làm 35-40 câu dễ nhất, chắc chắn đúng. Vòng 2 (20-30 phút): Giải quyết các câu vận dụng, đã có ý tưởng. Vòng 3 (Thời gian còn lại): Chinh phục các câu vận dụng cao.",
    },
    {
      id: "smart-guessing",
      title: "Nghệ thuật 'Lụi' Có Cơ sở",
      icon: Dice6,
      content:
        "Khi phải đoán, hãy ưu tiên các đáp án có giá trị đặc biệt (m=0, m=1) hoặc loại trừ các phương án vô lý (ví dụ: bán kính R không thể âm). Đừng bao giờ bỏ trống câu trả lời!",
    },
    {
      id: "calculator-mastery",
      title: "Làm chủ Casio - Bấm máy Thần sầu",
      icon: ZapIcon,
      content:
        "Sử dụng thành thạo chức năng TABLE (MODE 8) để khảo sát hàm số, SOLVE để giải phương trình và CALC để thử đáp án. Tiết kiệm hàng phút cho mỗi câu.",
    },
    {
      id: "avoid-traps",
      title: "'Bẫy' Sai sót Ngớ ngẩn",
      icon: AlertCircle,
      content:
        "Luôn đọc kỹ đề! Chú ý các từ khóa 'đồng biến', 'nghịch biến', 'khác 0', 'nguyên dương'. Gạch chân dưới các yêu cầu quan trọng để không bị đề bài đánh lừa.",
    },
    {
      id: "mental-strength",
      title: "Giữ cái Đầu Lạnh",
      icon: Lightbulb,
      content:
        "Gặp câu quá khó? Hít thở sâu và bỏ qua. Đừng để một câu làm ảnh hưởng đến tâm lý của 49 câu còn lại. Bạn luôn có thể quay lại sau.",
    },
  ]

  const leaderboard = [
    { rank: 1, name: "Nguyễn Văn A", score: 4850, avatar: "🥇" },
    { rank: 2, name: "Trần Thị B", score: 4720, avatar: "🥈" },
    { rank: 3, name: "Lê Minh C", score: 4680, avatar: "🥉" },
    { rank: 4, name: "Phạm Hồng D", score: 4520, avatar: "👤" },
    { rank: 5, name: "Hoàng Anh E", score: 4380, avatar: "👤" },
  ]

  const toggleSaveTip = (tipId: string) => {
    setSavedTips((prev) => (prev.includes(tipId) ? prev.filter((id) => id !== tipId) : [...prev, tipId]))
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Battle Arena Header */}
      <div className="mb-12 text-center">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
          ĐẤU TRƯỜNG TOÁN HỌC
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Rèn luyện tốc độ, chiến thuật, và tâm lý. Đây không phải nơi học kiến thức mới, đây là nơi chinh phục kỳ thi
          thật.
        </p>
      </div>

      {/* Battle Modes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {battleModes.map((mode) => {
          const Icon = mode.icon
          return (
            <Card
              key={mode.id}
              className={`border-2 ${mode.borderColor} bg-slate-800/50 hover:bg-slate-800 transition-all group overflow-hidden relative`}
            >
              <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${mode.color}`}></div>
              <CardHeader className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${mode.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">{mode.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-slate-300 mb-6">{mode.description}</p>
                <Button
                  className={`w-full bg-gradient-to-r ${mode.color} hover:opacity-90 text-white border-0 font-bold`}
                >
                  {mode.button}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="lg:col-span-1 border-slate-700 bg-slate-800/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              Bảng Xếp Hạng Tuần
            </CardTitle>
            <CardDescription>Top 5 sĩ tử xuất sắc</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboard.map((player) => (
                <div
                  key={player.rank}
                  className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{player.avatar}</span>
                    <div>
                      <p className="font-semibold text-sm">{player.name}</p>
                      <p className="text-xs text-slate-400">Rank #{player.rank}</p>
                    </div>
                  </div>
                  <span className="font-bold text-cyan-400">{player.score}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Stats */}
        <Card className="lg:col-span-2 border-slate-700 bg-slate-800/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              Phân tích Hiệu suất
            </CardTitle>
            <CardDescription>Dữ liệu từ bài thi gần nhất</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-700/30 rounded-lg">
                <p className="text-slate-400 text-sm mb-2">Phân bổ Thời gian</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>20 câu dễ</span>
                    <span className="text-green-400 font-semibold">35%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>20 câu TB</span>
                    <span className="text-blue-400 font-semibold">40%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>10 câu khó</span>
                    <span className="text-orange-400 font-semibold">25%</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-700/30 rounded-lg">
                <p className="text-slate-400 text-sm mb-2">Chỉ số Quyết đoán</p>
                <p className="text-3xl font-bold text-cyan-400 mb-2">7</p>
                <p className="text-xs text-slate-400">lần thay đổi đáp án</p>
                <Badge className="mt-2 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">⚠️ Cần cải thiện</Badge>
              </div>

              <div className="p-4 bg-slate-700/30 rounded-lg">
                <p className="text-slate-400 text-sm mb-2">AI Nhận xét</p>
                <p className="text-sm text-slate-300">
                  Bạn dành quá nhiều thời gian (40%) cho 10 câu cuối. Chiến thuật tốt hơn là hoàn thành 40 câu đầu nhanh
                  và chính xác.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Battle Tips */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Bí Kíp Thực Chiến</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip) => {
            const Icon = tip.icon
            const isSaved = savedTips.includes(tip.id)
            return (
              <Card key={tip.id} className="border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-all group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <button
                      onClick={() => toggleSaveTip(tip.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        isSaved
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-slate-700/50 text-slate-400 hover:text-yellow-400"
                      }`}
                    >
                      <Bookmark className="w-4 h-4" fill={isSaved ? "currentColor" : "none"} />
                    </button>
                  </div>
                  <CardTitle className="text-base">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">{tip.content}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
