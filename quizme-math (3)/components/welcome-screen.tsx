"use client"

import { Button } from "@/components/ui/button"
import { Compass } from "lucide-react"

interface WelcomeScreenProps {
  onCreateAccount: () => void
  onLogin: () => void
}

export default function WelcomeScreen({ onCreateAccount, onLogin }: WelcomeScreenProps) {
  return (
    <main className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#0A192F" }}>
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div
            className="w-20 h-20 rounded-lg flex items-center justify-center animate-pulse"
            style={{ backgroundColor: "#64FFDA" }}
          >
            <Compass className="w-12 h-12" style={{ color: "#0A192F" }} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#CCD6F6" }}>
          QuizMe
        </h1>

        {/* Slogan */}
        <p className="text-xl mb-12" style={{ color: "#64FFDA" }}>
          Chinh phục Điểm 10. Bắt đầu Lộ trình của bạn.
        </p>

        {/* Buttons */}
        <div className="space-y-4">
          <Button
            onClick={onCreateAccount}
            className="w-full py-6 text-lg font-bold"
            style={{
              backgroundColor: "#64FFDA",
              color: "#0A192F",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            TẠO TÀI KHOẢN MỚI
          </Button>

          <Button
            onClick={onLogin}
            variant="ghost"
            className="w-full py-6 text-lg font-bold border"
            style={{
              borderColor: "#64FFDA",
              color: "#64FFDA",
            }}
          >
            Đã có tài khoản? Đăng nhập
          </Button>
        </div>

        {/* Footer text */}
        <p className="mt-8 text-sm" style={{ color: "#8892B0" }}>
          Phòng thí nghiệm Toán học Tương lai
        </p>
      </div>
    </main>
  )
}
