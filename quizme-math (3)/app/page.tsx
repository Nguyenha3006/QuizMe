"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Compass, Flame, Map, BookOpen, User, Zap } from "lucide-react"
import Dashboard from "@/components/dashboard"
import BattleArena from "@/components/battle-arena"
import Roadmap from "@/components/roadmap"
import KnowledgeLibrary from "@/components/knowledge-library"
import Profile from "@/components/profile"
import ExamInterface from "@/components/exam-interface"
import WelcomeScreen from "@/components/welcome-screen"
import AuthScreen from "@/components/auth-screen"
import SubjectSelection from "@/components/subject-selection"

export default function QuizMeDashboard() {
  const [onboardingStep, setOnboardingStep] = useState<"welcome" | "auth" | "subject" | "dashboard">("welcome")
  const [authMode, setAuthMode] = useState<"signup" | "login">("signup")
  const [activeTab, setActiveTab] = useState<"dashboard" | "battle" | "roadmap" | "library" | "profile" | "exam">(
    "dashboard",
  )

  const handleCreateAccount = () => {
    setAuthMode("signup")
    setOnboardingStep("auth")
  }

  const handleLogin = () => {
    setAuthMode("login")
    setOnboardingStep("auth")
  }

  const handleAuthSuccess = () => {
    setOnboardingStep("subject")
  }

  const handleSubjectSelect = () => {
    setOnboardingStep("dashboard")
  }

  if (onboardingStep === "welcome") {
    return <WelcomeScreen onCreateAccount={handleCreateAccount} onLogin={handleLogin} />
  }

  if (onboardingStep === "auth") {
    return (
      <AuthScreen
        isSignUp={authMode === "signup"}
        onBack={() => setOnboardingStep("welcome")}
        onSuccess={handleAuthSuccess}
      />
    )
  }

  if (onboardingStep === "subject") {
    return <SubjectSelection onSelect={handleSubjectSelect} />
  }

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Compass, color: "from-blue-500 to-cyan-500" },
    { id: "battle", label: "Thực Chiến", icon: Flame, color: "from-orange-500 to-red-500" },
    { id: "exam", label: "Làm bài thi", icon: Zap, color: "from-cyan-400 to-blue-500" },
    { id: "roadmap", label: "Lộ trình", icon: Map, color: "from-purple-500 to-pink-500" },
    { id: "library", label: "Thư viện", icon: BookOpen, color: "from-green-500 to-emerald-500" },
    { id: "profile", label: "Cá nhân", icon: User, color: "from-indigo-500 to-blue-500" },
  ] as const

  return (
    <main style={{ backgroundColor: "#0A192F" }} className="min-h-screen text-white">
      {/* Header */}
      <header
        className="border-b sticky top-0 z-50"
        style={{ borderColor: "#1E3A5F", backgroundColor: "rgba(17, 34, 64, 0.5)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#64FFDA" }}
              >
                <Compass className="w-6 h-6" style={{ color: "#0A192F" }} />
              </div>
              <h1 className="text-2xl font-bold">QuizMe</h1>
            </div>
            <div className="text-sm" style={{ color: "#CCD6F6" }}>
              Phòng thí nghiệm Toán học
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  variant={isActive ? "default" : "ghost"}
                  className={`whitespace-nowrap ${
                    isActive
                      ? `bg-gradient-to-r ${tab.color} text-white hover:opacity-90`
                      : "text-slate-400 hover:text-slate-300"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </Button>
              )
            })}
          </div>
        </div>
      </header>

      {activeTab === "dashboard" && <Dashboard />}
      {activeTab === "battle" && <BattleArena />}
      {activeTab === "exam" && <ExamInterface />}
      {activeTab === "roadmap" && <Roadmap />}
      {activeTab === "library" && <KnowledgeLibrary />}
      {activeTab === "profile" && <Profile />}
    </main>
  )
}
