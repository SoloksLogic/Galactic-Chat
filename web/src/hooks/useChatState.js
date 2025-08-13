"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import useUser from "@/utils/useUser";

export function useChatState() {
  const { data: user } = useUser();
  const [messages, setMessages] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState("");
  const [avatarId, setAvatarId] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showUserPanel, setShowUserPanel] = useState(false);
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const presenceIntervalRef = useRef(null);

  useEffect(() => {
    const initializeGuestUser = async () => {
      let guestUsername = localStorage.getItem("galactic-chat-username");
      let guestAvatarId = localStorage.getItem("galactic-chat-avatar-id");

      if (!guestUsername) {
        try {
          const response = await fetch("/api/username/generate");
          const data = await response.json();
          guestUsername = data.username;
          localStorage.setItem("galactic-chat-username", guestUsername);
        } catch (error) {
          console.error("Error generating username:", error);
          guestUsername = "CosmicGuest" + Math.floor(Math.random() * 999);
        }
      }

      if (!guestAvatarId) {
        guestAvatarId = Math.floor(Math.random() * 100) + 1;
        localStorage.setItem("galactic-chat-avatar-id", guestAvatarId);
      }

      setUsername(guestUsername);
      setAvatarId(parseInt(guestAvatarId));
    };

    if (!user) {
      initializeGuestUser();
    } else {
      setUsername(user.name || user.email.split("@")[0]);
    }
  }, [user]);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const response = await fetch("/api/chat/messages");
        const data = await response.json();
        setMessages(data.messages || []);
      } catch (error) {
        console.error("Error loading messages:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMessages();
  }, []);

  const updatePresence = useCallback(async (typing = false) => {
    if (!username) return;

    try {
      await fetch("/api/chat/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          isGuest: !user,
          avatarUrl: user ? null : `/api/avatar/guest/${avatarId}`,
          isTyping: typing,
        }),
      });
    } catch (error) {
      console.error("Error updating presence:", error);
    }
  }, [username, user, avatarId]);

  const loadActiveUsers = useCallback(async () => {
    try {
      const response = await fetch("/api/chat/users");
      const data = await response.json();
      setActiveUsers(data.users || []);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  }, []);

  useEffect(() => {
    if (!username) return;

    updatePresence();
    loadActiveUsers();

    presenceIntervalRef.current = setInterval(() => {
      updatePresence();
      loadActiveUsers();
    }, 30000);

    return () => {
      if (presenceIntervalRef.current) {
        clearInterval(presenceIntervalRef.current);
      }
    };
  }, [username, updatePresence, loadActiveUsers]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleTyping = useCallback(() => {
    if (!isTyping) {
      setIsTyping(true);
      updatePresence(true);
    }

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      updatePresence(false);
    }, 2000);
  }, [isTyping, updatePresence]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !username) return;

    try {
      const response = await fetch("/api/chat/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: newMessage.trim(),
          username,
          isGuest: !user,
          avatarUrl: user ? null : `/api/avatar/guest/${avatarId}`,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [...prev, data.message]);
        setNewMessage("");
        setIsTyping(false);
        updatePresence(false);

        if (soundEnabled) {
          try {
            const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT");
            audio.volume = 0.3;
            audio.play().catch(() => {});
          } catch (error) {}
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const typingUsers = activeUsers.filter(
    (u) => u.is_typing && u.username !== username,
  );

  return {
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
  };
}
