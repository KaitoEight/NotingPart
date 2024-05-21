"use client"

import { useEffect , useState } from "react"

import { SettingsModal } from "../modals/settings-modal"
import { CoverImageStore } from "../modals/cover-image-modal"

export const ModalProvider = () => {
    const [isMounted , setIsMounted] = useState (false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
          <SettingsModal/>
          <CoverImageStore/>
        </>
    )
}