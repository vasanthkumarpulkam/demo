import React from "react";
import { Briefcase } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-white py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-purple-600 font-bold text-xl">
          <Briefcase className="w-6 h-6" />
          <span>Service Hub</span>
        </div>
      </div>
    </header>
  );
}