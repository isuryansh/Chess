import { useEffect, useState } from "react";

const ws_url = "ws://localhost:3000";

export const useSocket = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(ws_url);
    socket.onopen = () => {
      setSocket(socket);
    };

    socket.onclose = () => {
      setSocket(null);
    };
  }, []);

  return socket;
};
