import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import userAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import userUploadModal from "@/hooks/useUploadModal";

export const Library = () => {
  const authModal = userAuthModal();
  const uploadModal = userUploadModal();
  const { user } = useUser();

  const handleOnClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    // TODO: Add check for subscription
    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="inline-flex gap-x-2 items-center">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={handleOnClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-4 mt-4 px-3">List of Songs</div>
    </div>
  );
};
