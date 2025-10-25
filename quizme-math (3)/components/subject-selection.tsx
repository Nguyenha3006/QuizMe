"use client"
import { Sigma } from "lucide-react"

interface SubjectSelectionProps {
  onSelect: (subject: string) => void
}

export default function SubjectSelection({ onSelect }: SubjectSelectionProps) {
  const subjects = [
    { id: "math", name: "TOÁN HỌC", icon: Sigma, available: true },
    { id: "physics", name: "VẬT LÝ", available: false },
    { id: "chemistry", name: "HÓA HỌC", available: false },
    { id: "english", name: "TIẾNG ANH", available: false },
    { id: "biology", name: "SINH HỌC", available: false },
    { id: "history", name: "LỊCH SỬ", available: false },
  ]

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12" style={{ backgroundColor: "#0A192F" }}>
      <div className="max-w-4xl w-full">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4" style={{ color: "#CCD6F6" }}>
          Bạn muốn chinh phục môn học nào?
        </h1>
        <p className="text-center mb-12" style={{ color: "#8892B0" }}>
          Chọn môn học để bắt đầu hành trình học tập của bạn
        </p>

        {/* Subject cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => {
            const Icon = subject.icon
            return (
              <button
                key={subject.id}
                onClick={() => subject.available && onSelect(subject.id)}
                disabled={!subject.available}
                className={`p-8 rounded-lg transition-all ${
                  subject.available ? "hover:scale-105 cursor-pointer" : "opacity-50 cursor-not-allowed"
                }`}
                style={{
                  backgroundColor: subject.available ? "#112240" : "#0A192F",
                  border: subject.available ? "2px solid #64FFDA" : "2px solid #1E3A5F",
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  {Icon && <Icon className="w-12 h-12" style={{ color: subject.available ? "#64FFDA" : "#8892B0" }} />}
                  <h3 className="text-xl font-bold" style={{ color: subject.available ? "#CCD6F6" : "#8892B0" }}>
                    {subject.name}
                  </h3>
                  {!subject.available && (
                    <span className="text-sm" style={{ color: "#8892B0" }}>
                      Sắp ra mắt!
                    </span>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </main>
  )
}
