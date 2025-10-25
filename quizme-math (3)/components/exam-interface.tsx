"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Flame, TrendingUp, X, Wand2, Filter } from "lucide-react"
import ExamTestInterface from "@/components/exam-test-interface"

type ExamScreen = "list" | "confirmation" | "exam" | "factory"

export default function ExamInterface() {
  const [screen, setScreen] = useState<ExamScreen>("list")
  const [selectedExam, setSelectedExam] = useState<any>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [timeLeft, setTimeLeft] = useState(5400)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set())
  const [examStarted, setExamStarted] = useState(false)

  const exams = [
    {
      id: 1,
      title: "ĐỀ THI TỐT NGHIỆP THPT 2024",
      code: "101",
      source: "Bộ GD&ĐT",
      difficulty: "4/5",
      attempts: "17,842",
      avgScore: "7.8",
      duration: 90,
      questions: 50,
      isPinned: true,
    },
    {
      id: 2,
      title: "ĐỀ THI THỬ CHUYÊN KHTN 2024",
      code: "102",
      source: "Trường THPT Chuyên KHTN",
      difficulty: "5/5",
      attempts: "12,450",
      avgScore: "7.2",
      duration: 90,
      questions: 50,
      isPinned: true,
    },
    {
      id: 3,
      title: "ĐỀ THI THỬ CHUYÊN NGUYỄN HUỆ 2024",
      code: "103",
      source: "Trường THPT Chuyên Nguyễn Huệ",
      difficulty: "4/5",
      attempts: "9,320",
      avgScore: "7.5",
      duration: 90,
      questions: 50,
      isPinned: false,
    },
  ]

  const questions = [
    {
      id: 1,
      type: "multiple-choice" as const,
      text: "Cho khối chóp có diện tích đáy B và thể tích bằng V. Chiều cao của khối chóp đã cho:",
      options: ["A. $h = \\frac{3V}{B}$", "B. $h = \\frac{1}{3}VB$", "C. $h = \\frac{V}{B}$", "D. $h = \\frac{3V}{B}$"],
      correctAnswer: "A",
    },
    {
      id: 2,
      type: "true-false" as const,
      text: "Cho hàm số $f(x) = 2\\sin x - 3x$. Đạo hàm của hàm số là $f'(x) = 2\\cos x - 3$.",
      correctAnswer: "true",
    },
    {
      id: 3,
      type: "essay" as const,
      text: "Tính tích phân $\\int_0^1 (2x + 1) dx$",
    },
    ...Array.from({ length: 47 }, (_, i) => ({
      id: i + 4,
      type: ["multiple-choice", "true-false", "essay"][i % 3] as const,
      text: `Câu hỏi ${i + 4}: Đây là một câu hỏi mẫu về Toán học.`,
      options: i % 3 === 0 ? ["A. Đáp án A", "B. Đáp án B", "C. Đáp án C", "D. Đáp án D"] : undefined,
      correctAnswer: i % 3 === 0 ? "A" : "true",
    })),
  ]

  const handleStartExam = (exam: any) => {
    setSelectedExam(exam)
    setScreen("confirmation")
  }

  const handleConfirmExam = () => {
    setScreen("exam")
    setExamStarted(true)
    setTimeLeft(selectedExam.duration * 60)
  }

  if (screen === "factory") {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Button onClick={() => setScreen("list")} variant="ghost" className="mb-4 text-cyan-400 hover:text-cyan-300">
            ← Quay lại
          </Button>
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#64FFDA" }}>
            XƯỞNG TẠO ĐỀ THI
          </h2>
          <p className="text-lg" style={{ color: "#CCD6F6" }}>
            Tạo đề thi theo yêu cầu của bạn - Mix các câu hỏi từ các chuyên đề, độ khó, và dạng bài khác nhau
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Configuration */}
          <div className="lg:col-span-1">
            <Card className="border-slate-700 bg-slate-800/50 sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-purple-400" />
                  Cấu hình Đề thi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Subject Selection */}
                <div>
                  <label className="text-sm font-semibold text-cyan-400 mb-3 block">Chuyên đề</label>
                  <div className="space-y-2">
                    {[
                      "Hàm số & Đồ thị",
                      "Mũ & Logarit",
                      "Nguyên hàm & Tích phân",
                      "Số phức",
                      "Hình học không gian",
                      "Hình học Oxyz",
                    ].map((subject) => (
                      <label key={subject} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-sm text-slate-300">{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Difficulty Selection */}
                <div>
                  <label className="text-sm font-semibold text-cyan-400 mb-3 block">Độ khó</label>
                  <div className="space-y-2">
                    {["Nhận biết", "Thông hiểu", "Vận dụng", "Vận dụng cao"].map((level) => (
                      <label key={level} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-sm text-slate-300">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question Type Selection */}
                <div>
                  <label className="text-sm font-semibold text-cyan-400 mb-3 block">Loại câu hỏi</label>
                  <div className="space-y-2">
                    {["Trắc nghiệm", "Đúng/Sai", "Tự luận"].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-sm text-slate-300">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Total Questions */}
                <div>
                  <label className="text-sm font-semibold text-cyan-400 mb-3 block">Tổng số câu hỏi</label>
                  <input
                    type="number"
                    defaultValue="50"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-300"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                  <Wand2 className="w-4 h-4 mr-2" />
                  TẠO ĐỀ NGAY
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Preview */}
          <div className="lg:col-span-2">
            <Card className="border-slate-700 bg-slate-800/50">
              <CardHeader>
                <CardTitle>Xem trước Đề thi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-sm text-slate-400 mb-2">Cấu trúc đề thi</div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Hàm số & Đồ thị (Vận dụng)</span>
                        <Badge>5 câu</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Mũ & Logarit (Vận dụng cao)</span>
                        <Badge>7 câu</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Hình học không gian (Thông hiểu)</span>
                        <Badge>3 câu</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-sm text-slate-400 mb-2">Thông tin đề thi</div>
                    <div className="space-y-1 text-sm text-slate-300">
                      <div>Tổng câu hỏi: 15</div>
                      <div>Thời gian: 30 phút</div>
                      <div>Loại câu: Trắc nghiệm + Đúng/Sai</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  if (screen === "list") {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-5xl font-bold mb-4" style={{ color: "#64FFDA" }}>
              TRẠM CHỌN NHIỆM VỤ
            </h2>
            <p className="text-lg" style={{ color: "#CCD6F6" }}>
              Chọn đề thi để bắt đầu luyện tập
            </p>
          </div>
          <Button
            onClick={() => setScreen("factory")}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
          >
            <Wand2 className="w-4 h-4 mr-2" />
            XƯỞNG TẠO ĐỀ
          </Button>
        </div>

        <div className="mb-6 flex gap-2 flex-wrap">
          <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-slate-800 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Độ khó
          </Button>
          <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-slate-800 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Chuyên đề
          </Button>
          <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-slate-800 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Nguồn
          </Button>
        </div>

        <div className="space-y-4">
          {exams.map((exam) => (
            <Card
              key={exam.id}
              className="border-2 hover:shadow-lg transition-all cursor-pointer"
              style={{
                backgroundColor: "#112240",
                borderColor: "#64FFDA",
              }}
              onClick={() => handleStartExam(exam)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold" style={{ color: "#CCD6F6" }}>
                        {exam.title}
                      </h3>
                      {exam.isPinned && <Badge style={{ backgroundColor: "#64FFDA", color: "#0A192F" }}>📌 Ghim</Badge>}
                    </div>
                    <p className="text-sm" style={{ color: "#CCD6F6" }}>
                      Mã đề {exam.code} | Nguồn: {exam.source}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 mr-6">
                    <div className="text-center">
                      <div className="flex items-center gap-1 mb-1" style={{ color: "#FFC107" }}>
                        <Flame className="w-4 h-4" />
                        <span className="text-sm font-semibold">Độ khó</span>
                      </div>
                      <p className="font-bold" style={{ color: "#CCD6F6" }}>
                        {exam.difficulty}
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center gap-1 mb-1" style={{ color: "#3399FF" }}>
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-semibold">Lượt thi</span>
                      </div>
                      <p className="font-bold" style={{ color: "#CCD6F6" }}>
                        {exam.attempts}
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center gap-1 mb-1" style={{ color: "#28a745" }}>
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-semibold">Điểm TB</span>
                      </div>
                      <p className="font-bold" style={{ color: "#CCD6F6" }}>
                        {exam.avgScore}
                      </p>
                    </div>
                  </div>

                  <Button
                    style={{
                      backgroundColor: "#64FFDA",
                      color: "#0A192F",
                    }}
                    className="font-bold hover:opacity-90"
                  >
                    VÀO PHÒNG THI
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  // Screen 2: Confirmation
  if (screen === "confirmation") {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <Card
          className="w-full max-w-md border-2"
          style={{
            backgroundColor: "#112240",
            borderColor: "#64FFDA",
          }}
        >
          <CardHeader>
            <CardTitle style={{ color: "#64FFDA" }}>XÁC NHẬN VÀO PHÒNG THI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm mb-2" style={{ color: "#CCD6F6" }}>
                Đề thi:
              </p>
              <p className="font-bold text-lg" style={{ color: "#CCD6F6" }}>
                {selectedExam?.title} - Mã đề {selectedExam?.code}
              </p>
            </div>

            <div className="space-y-3 p-4 rounded-lg" style={{ backgroundColor: "#0A192F" }}>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1" style={{ color: "#FFC107" }} />
                <div>
                  <p className="font-semibold" style={{ color: "#CCD6F6" }}>
                    Thời gian làm bài: {selectedExam?.duration} phút
                  </p>
                  <p className="text-sm" style={{ color: "#CCD6F6" }}>
                    Đồng hồ sẽ bắt đầu ngay lập tức
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-5 h-5 mt-1" style={{ color: "#DC3545" }} />
                <div>
                  <p className="font-semibold" style={{ color: "#CCD6F6" }}>
                    Không thể tạm dừng
                  </p>
                  <p className="text-sm" style={{ color: "#CCD6F6" }}>
                    Vui lòng đảm bảo bạn không bị làm phiền
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge style={{ backgroundColor: "#28a745", color: "white" }}>✓</Badge>
                <div>
                  <p className="font-semibold" style={{ color: "#CCD6F6" }}>
                    Bài làm sẽ tự động nộp
                  </p>
                  <p className="text-sm" style={{ color: "#CCD6F6" }}>
                    Khi hết giờ
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setScreen("list")}
                className="flex-1"
                style={{ borderColor: "#64FFDA", color: "#64FFDA" }}
              >
                Để sau
              </Button>
              <Button
                onClick={handleConfirmExam}
                className="flex-1 font-bold"
                style={{
                  backgroundColor: "#64FFDA",
                  color: "#0A192F",
                }}
              >
                BẮT ĐẦU LÀM BÀI
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Screen 3: Exam Interface
  if (examStarted && screen === "exam") {
    return (
      <ExamTestInterface
        examTitle={selectedExam?.title || "BÀI KIỂM TRA NĂNG LỰC ĐẦU VÀO"}
        studentName="Nguyễn Thị Linh Chi"
        studentId="01000071"
        duration={selectedExam?.duration || 90}
        questions={[]}
        onSubmit={(answers) => {
          console.log("[v0] Exam submitted:", answers)
          setExamStarted(false)
          setScreen("list")
        }}
      />
    )
  }

  return null
}
