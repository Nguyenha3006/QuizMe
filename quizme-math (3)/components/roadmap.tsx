"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Calendar, BookMarked } from "lucide-react"

export default function Roadmap() {
  // Sample progress data
  const progressData = [
    { week: "Tuần 1", score: 65 },
    { week: "Tuần 2", score: 72 },
    { week: "Tuần 3", score: 68 },
    { week: "Tuần 4", score: 78 },
    { week: "Tuần 5", score: 82 },
    { week: "Tuần 6", score: 85 },
    { week: "Tuần 7", score: 88 },
    { week: "Tuần 8", score: 91 },
  ]

  // Competency comparison data
  const competencyData = [
    { subject: "Hàm số", thisMonth: 85, lastMonth: 72 },
    { subject: "Mũ & Log", thisMonth: 78, lastMonth: 65 },
    { subject: "Tích phân", thisMonth: 82, lastMonth: 70 },
    { subject: "Số phức", thisMonth: 75, lastMonth: 68 },
    { subject: "Hình 3D", thisMonth: 88, lastMonth: 80 },
    { subject: "Hình tọa độ", thisMonth: 80, lastMonth: 75 },
  ]

  // Recent exam history
  const examHistory = [
    { id: 1, date: "15/10/2025", topic: "Hàm số bậc 2", score: 92, time: "45 phút", status: "Xuất sắc" },
    { id: 2, date: "14/10/2025", topic: "Phương trình Logarit", score: 78, time: "38 phút", status: "Tốt" },
    { id: 3, date: "13/10/2025", topic: "Tích phân từng phần", score: 85, time: "52 phút", status: "Tốt" },
    { id: 4, date: "12/10/2025", topic: "Số phức - Phép toán", score: 88, time: "41 phút", status: "Tốt" },
    { id: 5, date: "11/10/2025", topic: "Hình học không gian", score: 72, time: "58 phút", status: "Khá" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Lộ Trình Học Tập</h2>
          <p className="text-slate-400">Theo dõi tiến bộ của bạn qua thời gian</p>
        </div>

        {/* Progress Timeline */}
        <Card className="bg-slate-800/50 border-slate-700 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <h3 className="text-xl font-semibold text-white">Dòng Thời Gian Tiến Bộ</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="week" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }}
                labelStyle={{ color: "#e2e8f0" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#a78bfa"
                strokeWidth={3}
                dot={{ fill: "#a78bfa", r: 5 }}
                activeDot={{ r: 7 }}
                name="Điểm số"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Competency Comparison */}
        <Card className="bg-slate-800/50 border-slate-700 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-pink-400" />
            <h3 className="text-xl font-semibold text-white">So Sánh Năng Lực (Tháng Này vs Tháng Trước)</h3>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={competencyData}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="subject" stroke="#94a3b8" />
              <PolarRadiusAxis stroke="#94a3b8" />
              <Radar name="Tháng này" dataKey="thisMonth" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              <Radar name="Tháng trước" dataKey="lastMonth" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
              <Legend />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }}
                labelStyle={{ color: "#e2e8f0" }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Card>

        {/* Exam History */}
        <Card className="bg-slate-800/50 border-slate-700 p-6">
          <div className="flex items-center gap-2 mb-4">
            <BookMarked className="w-5 h-5 text-blue-400" />
            <h3 className="text-xl font-semibold text-white">Lịch Sử Làm Bài</h3>
          </div>
          <div className="space-y-3">
            {examHistory.map((exam) => (
              <div
                key={exam.id}
                className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-semibold text-white">{exam.topic}</h4>
                    <Badge
                      className={`${
                        exam.status === "Xuất sắc"
                          ? "bg-green-500/20 text-green-300"
                          : exam.status === "Tốt"
                            ? "bg-blue-500/20 text-blue-300"
                            : "bg-yellow-500/20 text-yellow-300"
                      }`}
                    >
                      {exam.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-400">
                    {exam.date} • {exam.time}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{exam.score}</div>
                  <p className="text-xs text-slate-400">điểm</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
