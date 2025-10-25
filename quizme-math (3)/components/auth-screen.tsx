"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"

interface AuthScreenProps {
  isSignUp: boolean
  onBack: () => void
  onSuccess: () => void
}

export default function AuthScreen({ isSignUp, onBack, onSuccess }: AuthScreenProps) {
  const [tab, setTab] = useState<"signup" | "login">(isSignUp ? "signup" : "login")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate auth success
    onSuccess()
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#0A192F" }}>
      <div className="max-w-md w-full">
        {/* Back button */}
        <button onClick={onBack} className="flex items-center gap-2 mb-8" style={{ color: "#64FFDA" }}>
          <ArrowLeft className="w-5 h-5" />
          Quay lại
        </button>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b" style={{ borderColor: "#1E3A5F" }}>
          <button
            onClick={() => setTab("signup")}
            className="pb-4 font-semibold transition-colors"
            style={{
              color: tab === "signup" ? "#64FFDA" : "#8892B0",
              borderBottom: tab === "signup" ? "2px solid #64FFDA" : "none",
            }}
          >
            Đăng ký
          </button>
          <button
            onClick={() => setTab("login")}
            className="pb-4 font-semibold transition-colors"
            style={{
              color: tab === "login" ? "#64FFDA" : "#8892B0",
              borderBottom: tab === "login" ? "2px solid #64FFDA" : "none",
            }}
          >
            Đăng nhập
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {tab === "signup" && (
            <div>
              <label className="block text-sm mb-2" style={{ color: "#CCD6F6" }}>
                Họ và tên
              </label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Nhập họ và tên"
                className="w-full"
                style={{
                  backgroundColor: "#112240",
                  borderColor: "#1E3A5F",
                  color: "#CCD6F6",
                }}
              />
            </div>
          )}

          <div>
            <label className="block text-sm mb-2" style={{ color: "#CCD6F6" }}>
              Email
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Nhập email"
              className="w-full"
              style={{
                backgroundColor: "#112240",
                borderColor: "#1E3A5F",
                color: "#CCD6F6",
              }}
            />
          </div>

          <div>
            <label className="block text-sm mb-2" style={{ color: "#CCD6F6" }}>
              Mật khẩu
            </label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Nhập mật khẩu"
              className="w-full"
              style={{
                backgroundColor: "#112240",
                borderColor: "#1E3A5F",
                color: "#CCD6F6",
              }}
            />
          </div>

          {tab === "login" && (
            <div className="text-right">
              <button type="button" className="text-sm" style={{ color: "#64FFDA" }}>
                Quên mật khẩu?
              </button>
            </div>
          )}

          <Button
            type="submit"
            className="w-full py-6 text-lg font-bold mt-6"
            style={{
              backgroundColor: "#64FFDA",
              color: "#0A192F",
            }}
          >
            {tab === "signup" ? "ĐĂNG KÝ" : "ĐĂNG NHẬP"}
          </Button>
        </form>

        {/* Social login */}
        {tab === "signup" && (
          <div className="mt-6">
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center" style={{ borderColor: "#1E3A5F" }}>
                <div className="w-full border-t" style={{ borderColor: "#1E3A5F" }}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2" style={{ backgroundColor: "#0A192F", color: "#8892B0" }}>
                  Hoặc
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                className="w-full py-6 bg-transparent"
                style={{
                  borderColor: "#1E3A5F",
                  color: "#CCD6F6",
                }}
              >
                Tiếp tục với Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full py-6 bg-transparent"
                style={{
                  borderColor: "#1E3A5F",
                  color: "#CCD6F6",
                }}
              >
                Tiếp tục với Facebook
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
