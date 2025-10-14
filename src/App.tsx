import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { JobProvider } from "./context/JobContext";
import { ChatProvider } from "./context/ChatContext";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <AuthProvider>
      <JobProvider>
        <ChatProvider>
          <HomePage />
        </ChatProvider>
      </JobProvider>
    </AuthProvider>
  );
}