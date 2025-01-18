import { Link } from "react-router-dom";
import { Appbar } from "../components/Appbar";

export const Landing = () => {
  const imageUrl =
    "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/CHESScom/phphK5JVu.png";
  return (
    <>
      <div className="bg-stone-900 h-screen">
        <Appbar />
        <div className="flex flex-row justify-center">
          <div className="w-4/12 mt-20 mr-12 ml-32">
            <img src={imageUrl} />
          </div>
          <Link to="/game">
            <button className="bg-green-500 text-white text-3xl font-semibold px-6 py-2 ring-2 ring-white rounded-lg mt-72 mr-32 ml-20  hover:bg-green-600 cursor-pointer">
              Play online
              <div className="text-xs font-normal pt-1.5 text-white">
                Play with some random player
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
