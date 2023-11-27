"use client";

import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
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
    </>
  );
};

export default ModalProvider;
