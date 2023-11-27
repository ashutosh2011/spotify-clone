"use client";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMoundted] = useState(false);

  // Below block is added to make sure that we are in client side and not server side
  useEffect(() => {
    setIsMoundted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal/>
      <UploadModal />
    </>
  );
};

export default ModalProvider;
