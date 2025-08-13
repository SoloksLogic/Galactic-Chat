"use client";

import { useChatState } from "@/hooks/useChatState";
import LoadingScreen from "@/components/chat/LoadingScreen";
import AnimatedBackground from "@/components/chat/AnimatedBackground";
import GalacticTitle from "@/components/chat/GalacticTitle";
import AuthBar from "@/components/chat/AuthBar";
import ChatWindow from "@/components/chat/ChatWindow";
import AboutSection from "@/components/chat/AboutSection";

export default function Page() {
  const {
    user,
    messages,
    activeUsers,
    newMessage,
    setNewMessage,
    username,
    soundEnabled,
    setSoundEnabled,
    showUserPanel,
    setShowUserPanel,
    loading,
    messagesEndRef,
    handleTyping,
    sendMessage,
    typingUsers,
  } = useChatState();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 py-8">
        <GalacticTitle />

        <AuthBar
          username={username}
          user={user}
          soundEnabled={soundEnabled}
          onToggleSound={() => setSoundEnabled(!soundEnabled)}
          onToggleUserPanel={() => setShowUserPanel(!showUserPanel)}
        />

        <ChatWindow
          messages={messages}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          sendMessage={sendMessage}
          handleTyping={handleTyping}
          typingUsers={typingUsers}
          messagesEndRef={messagesEndRef}
          showUserPanel={showUserPanel}
          activeUsers={activeUsers}
        />

        <AboutSection
          activeUsersCount={activeUsers.length}
          messagesCount={messages.length}
          soundEnabled={soundEnabled}
        />
      </div>
    </div>
  );
}
