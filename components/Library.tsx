import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

export const Library = () => {
  const handleOnClick = () => {};
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="inline-flex gap-x-2 items-center">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onclick={handleOnClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-4 mt-4 px-3">
        List of Songs
      </div>
    </div>
  );
};
