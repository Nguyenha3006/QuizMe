"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Trophy, Bookmark, Settings, LogOut } from "lucide-react"

export default function Profile() {
  // User achievements
  const achievements = [
    { id: 1, name: "50 Giờ Học", icon: "⏱️", description: "Học tập 50 giờ" },
    { id: 2, name: "Chiến Thần Hàm Số", icon: "⚡", description: "Đạt 90+ điểm Hàm số" },
    { id: 3, name: "Top 10 Đấu Trường", icon: "🏆", description: "Vào Top 10 Đấu trường" },
    { id: 4, name: "Chuỗi 7 Ngày", icon: "🔥", description: "Học liên tục 7 ngày" },
    { id: 5, name: "Bậc Thầy Tích Phân", icon: "∫", description: "Hoàn thành 30 bài Tích phân" },
    { id: 6, name: "Nhà Toán Học", icon: "🧮", description: "Hoàn thành tất cả chuyên đề" },
  ]

  // Saved tips
  const savedTips = [
    { id: 1, title: "Kỹ thuật Phân tích nhanh", category: "Hàm số", saves: 234 },
    { id: 2, title: "Mẹo giải Logarit trong 30 giây", category: "Mũ & Log", saves: 189 },
    { id: 3, title: "Tích phân từng phần - Quy tắc LIATE", category: "Tích phân", saves: 156 },
    { id: 4, title: "Số phức - Biểu diễn hình học", category: "Số phức", saves: 142 },
  ]

  // User stats
  const stats = [
    { label: "Dạng bài yêu thích", value: "Phương trình Logarit" },
    { label: "Ngày học chăm chỉ nhất", value: "Thứ 5" },
    { label: "Thời gian học trung bình", value: "2.5 giờ/ngày" },
    { label: "Tỷ lệ thành công", value: "82%" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Hồ Sơ Cá Nhân</h2>
          <p className="text-slate-400">Quản lý tài khoản và xem thành tích của bạn</p>
        </div>

        {/* User Info Card */}
        <Card className="bg-gradient-to-r from-indigo-900/50 to-blue-900/50 border-indigo-700 p-8 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Nguyễn Văn A</h3>
                <p className="text-indigo-200 mb-3">Học sinh Toán 12 - Lớp 12A1</p>
                <div className="flex gap-2">
                  <Badge className="bg-indigo-500/30 text-indigo-200">Thành viên Premium</Badge>
                  <Badge className="bg-green-500/30 text-green-200">Hoạt động hôm nay</Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="border-indigo-500 text-indigo-300 hover:bg-indigo-500/10 bg-transparent"
              >
                <Settings className="w-4 h-4 mr-2" />
                Cài đặt
              </Button>
              <Button variant="outline" className="border-red-500 text-red-300 hover:bg-red-500/10 bg-transparent">
                <LogOut className="w-4 h-4 mr-2" />
                Đăng xuất
              </Button>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="bg-slate-800/50 border-slate-700 p-4">
              <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
              <p className="text-xl font-bold text-white">{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <Card className="bg-slate-800/50 border-slate-700 p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <h3 className="text-xl font-semibold text-white">Bộ Sưu Tập Thành Tích</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="p-4 bg-slate-700/30 rounded-lg border border-slate-600 hover:border-yellow-500/50 transition-colors"
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="font-semibold text-white mb-1">{achievement.name}</h4>
                <p className="text-sm text-slate-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Saved Tips Section */}
        <Card className="bg-slate-800/50 border-slate-700 p-6">
          <div className="flex items-center gap-2 mb-6">
            <Bookmark className="w-5 h-5 text-blue-400" />
            <h3 className="text-xl font-semibold text-white">Bí Kíp Đã Lưu</h3>
          </div>
          <div className="space-y-3">
            {savedTips.map((tip) => (
              <div
                key={tip.id}
                className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">{tip.title}</h4>
                  <Badge className="bg-blue-500/20 text-blue-300 text-xs">{tip.category}</Badge>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-400">{tip.saves} lượt lưu</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
