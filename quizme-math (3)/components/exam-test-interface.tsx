"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Flag, ChevronLeft, ChevronRight, Send, AlertCircle } from "lucide-react"

type QuestionType = "multiple-choice" | "true-false" | "essay"

interface Question {
  id: number
  type: QuestionType
  text: string
  options?: string[]
  correctAnswer?: string
  image?: string
}

interface ExamTestInterfaceProps {
  examTitle: string
  studentName: string
  studentId: string
  duration: number
  questions: Question[]
  onSubmit?: (answers: Record<number, string>) => void
}

export default function ExamTestInterface({
  examTitle = "BÀI KIỂM TRA NĂNG LỰC ĐẦU VÀO",
  studentName = "Nguyễn Văn A",
  studentId = "0001",
  duration = 90,
  questions = [],
  onSubmit,
}: ExamTestInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [timeLeft, setTimeLeft] = useState(duration * 60)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set())
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false)

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleSubmitExam()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const getTimeColor = () => {
    if (timeLeft <= 300) return "#DC3545" // Red - less than 5 minutes
    if (timeLeft <= 600) return "#FFC107" // Yellow - less than 10 minutes
    return "#CCD6F6" // Off-white
  }

  const handleAnswerQuestion = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer })
  }

  const toggleFlagQuestion = (questionId: number) => {
    const newFlagged = new Set(flaggedQuestions)
    if (newFlagged.has(questionId)) {
      newFlagged.delete(questionId)
    } else {
      newFlagged.add(questionId)
    }
    setFlaggedQuestions(newFlagged)
  }

  const handleSubmitExam = () => {
    if (onSubmit) {
      onSubmit(answers)
    }
    // In a real app, this would submit to the server
    console.log("[v0] Exam submitted with answers:", answers)
  }

  const question = questions[currentQuestion]
  const answered = Object.keys(answers).length
  const flagged = flaggedQuestions.size
  const unanswered = questions.length - answered

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0A192F" }}>
        <div style={{ color: "#CCD6F6" }}>Không có câu hỏi</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0A192F" }}>
      {/* Header - Status Bar */}
      <header className="border-b sticky top-0 z-40 p-4" style={{ backgroundColor: "#112240", borderColor: "#1E3A5F" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Exam Info */}
          <div>
            <h1 className="font-bold text-lg" style={{ color: "#CCD6F6" }}>
              {examTitle}
            </h1>
            <p className="text-sm" style={{ color: "#CCD6F6" }}>
              Họ và tên: {studentName} | SBD: {studentId}
            </p>
          </div>

          {/* Center: Timer */}
          <div className="text-center">
            <div className="text-5xl font-bold font-mono" style={{ color: getTimeColor() }}>
              ⏳ {formatTime(timeLeft)}
            </div>
            {timeLeft <= 300 && (
              <p className="text-xs mt-1" style={{ color: "#FFC107" }}>
                ⚠️ Sắp hết giờ!
              </p>
            )}
          </div>

          {/* Right: Action Buttons */}
          <div className="flex gap-2">
            <Button
              onClick={() => setShowSubmitConfirm(true)}
              className="font-bold"
              style={{
                backgroundColor: "#DC3545",
                color: "white",
              }}
            >
              ✈️ NỘP BÀI
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Column - Question Display */}
        <div
          className="w-2/5 border-r p-6 overflow-y-auto"
          style={{ borderColor: "#1E3A5F", backgroundColor: "#0A192F" }}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#64FFDA" }}>
              Câu {currentQuestion + 1}/{questions.length}
            </h2>

            {/* Question Text */}
            <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: "#112240" }}>
              <p className="text-base leading-relaxed" style={{ color: "#CCD6F6" }}>
                {question.text}
              </p>
            </div>

            {/* Question Image if exists */}
            {question.image && (
              <div className="mb-6">
                <img src={question.image || "/placeholder.svg"} alt="Question" className="w-full rounded-lg" />
              </div>
            )}

            {/* Formula Reference Button */}
            <Button
              variant="outline"
              className="w-full bg-transparent"
              style={{ borderColor: "#64FFDA", color: "#64FFDA" }}
            >
              📐 Bảng Công Thức
            </Button>
          </div>
        </div>

        {/* Right Column - Answer Options */}
        <div className="w-3/5 p-6 overflow-y-auto" style={{ backgroundColor: "#0A192F" }}>
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4" style={{ color: "#64FFDA" }}>
              {question.type === "multiple-choice" && "CHỌN ĐÁP ÁN"}
              {question.type === "true-false" && "CHỌN ĐÚNG HOẶC SAI"}
              {question.type === "essay" && "NHẬP CÂU TRẢ LỜI"}
            </h3>

            {/* Multiple Choice Questions */}
            {question.type === "multiple-choice" && question.options && (
              <div className="space-y-3">
                {question.options.map((option, idx) => {
                  const optionKey = String.fromCharCode(65 + idx) // A, B, C, D
                  const isSelected = answers[currentQuestion] === optionKey
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswerQuestion(optionKey)}
                      className="w-full p-4 rounded-lg border-2 text-left transition-all hover:border-opacity-100"
                      style={{
                        backgroundColor: isSelected ? "#3399FF" : "#112240",
                        borderColor: isSelected ? "#3399FF" : "#1E3A5F",
                        color: "#CCD6F6",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                          style={{
                            borderColor: isSelected ? "#64FFDA" : "#1E3A5F",
                            backgroundColor: isSelected ? "#64FFDA" : "transparent",
                          }}
                        >
                          {isSelected && <span style={{ color: "#0A192F", fontWeight: "bold" }}>✓</span>}
                        </div>
                        <span className="text-base">{option}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            )}

            {/* True/False Questions */}
            {question.type === "true-false" && (
              <div className="flex gap-3">
                {["Đúng", "Sai"].map((label, idx) => {
                  const answerKey = idx === 0 ? "true" : "false"
                  const isSelected = answers[currentQuestion] === answerKey
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswerQuestion(answerKey)}
                      className="flex-1 p-4 rounded-lg border-2 font-bold transition-all"
                      style={{
                        backgroundColor: isSelected ? (idx === 0 ? "#28a745" : "#DC3545") : "#112240",
                        borderColor: isSelected ? (idx === 0 ? "#28a745" : "#DC3545") : "#1E3A5F",
                        color: isSelected ? "white" : "#CCD6F6",
                      }}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
            )}

            {/* Essay Questions */}
            {question.type === "essay" && (
              <textarea
                value={answers[currentQuestion] || ""}
                onChange={(e) => handleAnswerQuestion(e.target.value)}
                placeholder="Nhập câu trả lời của bạn tại đây..."
                className="w-full p-4 rounded-lg border-2 min-h-32 resize-none"
                style={{
                  backgroundColor: "#112240",
                  borderColor: "#1E3A5F",
                  color: "#CCD6F6",
                }}
              />
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8">
            <Button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              variant="outline"
              style={{ borderColor: "#64FFDA", color: "#64FFDA" }}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Câu trước
            </Button>
            <Button
              onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
              disabled={currentQuestion === questions.length - 1}
              style={{ backgroundColor: "#64FFDA", color: "#0A192F" }}
              className="font-bold"
            >
              Câu sau
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              onClick={() => toggleFlagQuestion(currentQuestion)}
              variant="outline"
              style={{
                borderColor: flaggedQuestions.has(currentQuestion) ? "#FFC107" : "#1E3A5F",
                color: flaggedQuestions.has(currentQuestion) ? "#FFC107" : "#CCD6F6",
              }}
            >
              <Flag className="w-4 h-4 mr-2" fill={flaggedQuestions.has(currentQuestion) ? "currentColor" : "none"} />
              Đánh dấu
            </Button>
          </div>
        </div>
      </div>

      {/* Footer - Question Navigator */}
      <footer className="border-t p-4" style={{ backgroundColor: "#112240", borderColor: "#1E3A5F" }}>
        <div className="max-w-7xl mx-auto">
          {/* Question Grid */}
          <div className="flex gap-2 justify-center flex-wrap mb-4">
            {questions.map((_, idx) => {
              const isAnswered = answers[idx]
              const isFlagged = flaggedQuestions.has(idx)
              const isCurrent = idx === currentQuestion

              return (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestion(idx)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all relative"
                  style={{
                    backgroundColor: isAnswered ? "#3399FF" : isCurrent ? "#112240" : "transparent",
                    borderWidth: "2px",
                    borderColor: isCurrent ? "#64FFDA" : isAnswered ? "#3399FF" : "#1E3A5F",
                    color: isAnswered ? "white" : "#CCD6F6",
                  }}
                >
                  {idx + 1}
                  {isFlagged && (
                    <Flag className="w-3 h-3 absolute -top-1 -right-1" style={{ color: "#FFC107" }} fill="#FFC107" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Statistics */}
          <div className="flex justify-center gap-8 text-sm">
            <div>
              <span style={{ color: "#CCD6F6" }}>Đã trả lời: </span>
              <span style={{ color: "#3399FF", fontWeight: "bold" }}>{answered}</span>
            </div>
            <div>
              <span style={{ color: "#CCD6F6" }}>Đánh dấu: </span>
              <span style={{ color: "#FFC107", fontWeight: "bold" }}>{flagged}</span>
            </div>
            <div>
              <span style={{ color: "#CCD6F6" }}>Chưa trả lời: </span>
              <span style={{ color: "#DC3545", fontWeight: "bold" }}>{unanswered}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Submit Confirmation Modal */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div
            className="rounded-lg p-6 max-w-md w-full mx-4 border-2"
            style={{ backgroundColor: "#112240", borderColor: "#64FFDA" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle style={{ color: "#FFC107" }} className="w-6 h-6" />
              <h2 className="text-xl font-bold" style={{ color: "#64FFDA" }}>
                XÁC NHẬN NỘP BÀI
              </h2>
            </div>

            <div className="mb-6 space-y-3" style={{ color: "#CCD6F6" }}>
              <p>Bạn có chắc chắn muốn nộp bài không?</p>
              <div className="p-3 rounded-lg" style={{ backgroundColor: "#0A192F" }}>
                <p className="text-sm">
                  <strong>Đã trả lời:</strong> {answered}/{questions.length}
                </p>
                <p className="text-sm">
                  <strong>Chưa trả lời:</strong> {unanswered}
                </p>
              </div>
              <p className="text-sm" style={{ color: "#FFC107" }}>
                ⚠️ Bạn không thể quay lại sau khi nộp bài
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setShowSubmitConfirm(false)}
                variant="outline"
                className="flex-1"
                style={{ borderColor: "#64FFDA", color: "#64FFDA" }}
              >
                Tiếp tục làm bài
              </Button>
              <Button
                onClick={handleSubmitExam}
                className="flex-1 font-bold"
                style={{ backgroundColor: "#DC3545", color: "white" }}
              >
                <Send className="w-4 h-4 mr-2" />
                Nộp bài
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
