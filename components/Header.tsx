"use client";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Button } from "./Button";
import userAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const { onOpen } = userAuthModal();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    // TODO: Rest any playing songs
    router.refresh();
    if (error) {
      toast.error(error.message);
    }else{
      toast.success("Logged out!")
    }
  };

  return (
    <div
      className={twMerge(
        "h-fit bg-gradient-to-b from-emerald-400 p-6",
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between ">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={router.back}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            onClick={router.forward}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black " size={20} />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-black " size={20} />
          </button>
        </div>

        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button className="bg-white px-6 py-2" onClick={handleLogout}>
                Logout
              </Button>
              <Button onClick={() => router.push('/account')}>
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  className="bg-transparent text-neutral-300 font-medium"
                  onClick={onOpen}
                >
                  Sign Up
                </Button>
              </div>
              <div>
                <Button className="bg-white px-6 py-3" onClick={onOpen}>
                  Log In
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};
