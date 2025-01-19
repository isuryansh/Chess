import { useEffect, useState } from "react";
import { Chessboard } from "../components/Chessboard";
import { useSocket } from "../hooks/useSocket";
import { MOVE, INIT_GAME, GAME_OVER } from "../message";
import { Chess } from "chess.js";
export const Game = () => {
  const socket = useSocket();
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === INIT_GAME) {
        setChess(new Chess());
        setBoard(chess.board);
      } else if (message.type === MOVE) {
        const move = message.payload;
        chess.move(move);
      } else if (message.type === GAME_OVER) {
        console.log("Game Over");
      }
    };
  }, [socket]);

  return (
    <div className="bg-stone-900 h-screen">
      <div className="flex justify-center">
        <div className="pt-28 max-w-screen-lg w-full">
          <div className="grid grid-cols-6 w-full">
            <div className="col-span-4 w-full flex justify-center">
              <Chessboard board={board} />
            </div>
            <div className="col-span-2 w-full mt-56">
              <button className="bg-green-500 font-semibold text-white px-3 py-2 rounded-lg hover:bg-green-600 cursor-pointer">
                Play now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
