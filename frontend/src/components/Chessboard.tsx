import { Color, PieceSymbol, Square } from "chess.js";

export const Chessboard = ({
  board,
}: {
  board:
    | ({
        square: Square;
        type: PieceSymbol;
        color: Color;
      } | null)[][];
}) => {
  return (
    <div>
      {board.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((square, j) => {
              return (
                <div
                  key={j}
                  className={`w-16 h-16 ring-1 ring-stone-500 ${
                    (i + j) % 2 === 0 ? "bg-green-400" : "bg-white"
                  }`}
                >
                  <div className="w-full justify-center flex h-full">
                    <div className="h-full justify-center flex flex-col">
                      {square ? square.type : ""}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
