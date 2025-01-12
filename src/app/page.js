"use client"

import { CustomNavbar } from "@/components/CustomNavbar";
import { Footer } from "@/components/Footer";
import { Chip } from "@nextui-org/chip"
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Waypoints } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "@nextui-org/link";
import { Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";

export default function Home() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const b1ref = useRef(null);
  const b2ref = useRef(null);

  useEffect(() => {
    if (!b1ref.current || !b2ref.current) return;

    const moveBlob = (blob) => {
      const height = document.documentElement.clientHeight;
      const width = document.documentElement.clientWidth;
    
      const blobRect = blob.getBoundingClientRect();
      const blobSize = Math.max(blobRect.width, blobRect.height);
      
      const currentTop = Math.floor(blobRect.top);
      const currentLeft = Math.floor(blobRect.left);
    
      const offX = Math.floor(Math.random() * 30) + 1;
      const offY = Math.floor(Math.random() * 30) + 1;
    
      let newTop = currentTop + offX;
      let newLeft = currentLeft + offY;
    
      newTop = Math.max(0, Math.min(height - blobSize, newTop));
      newLeft = Math.max(0, Math.min(width - blobSize, newLeft));
    
      blob.style.top = `${newTop}px`;
      blob.style.left = `${newLeft}px`;
    };

    const interval = setInterval(() => {
      if (b1ref.current) {
        moveBlob(b1ref.current);
      }
      if (b2ref.current) {
        moveBlob(b2ref.current)
      }
    }, 15000);
  

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col">
      <CustomNavbar openModal={onOpen}/>
      <div className="text-center mt-20">
        <Chip color="success" variant="dot">Empowering Code Security</Chip>
        <h1 className="text-5xl font-extrabold sm:text-7xl">Cyberwright</h1>
        <h2 className="text-xl opacity-75">Cybersecurity, done right</h2>
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex flex-col w-full md:w-2/3 space-y-4 items-center md:ml-10 mx-5">
          <div className="font-bold text-xl sm:text-3xl md:ml-10 text-center md:text-left">
            <p>
              We know developers want to focus on creating.
            </p>
            <p>
              Let us handle the <span className="bg-gradient-to-r from-[#3bed69] to-[#11bc3d] inline-block text-transparent bg-clip-text">security</span>.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex space-x-10 justify-center mt-5 text-sm sm:text-md">
              <div className="flex flex-col items-center space-y-1 font-semibold text-center">
                <Image 
                  alt="University of Michigan - M"
                  src="/vscode.svg"
                  width={24}
                  height={24}
                  className="rounded-none hover:scale-125"
                />
                <p>VSCode Integration</p>
              </div>
              <div className="flex flex-col items-center space-y-1 font-semibold text-center">
                <Waypoints className="hover:scale-125 transition-transform"/>
                <p>Custom Trained Model</p>
              </div>
              <div className="flex flex-col items-center space-y-1 font-semibold text-center">
                <Image 
                  alt="University of Michigan - M"
                  src="/uofm.svg"
                  width={24}
                  height={24}
                  className="rounded-none hover:scale-125"
                />
                <p>Partnered with the<br />University of Michigan</p>
              </div>
              
            </div>
            <div className="flex flex-col space-y-3 mt-5">
              <p className="opacity-50">Interested? Join our mailing list.</p>
              <Button color="success" variant="ghost" size="md" as={Link} href="https://daqlultvpxf.typeform.com/to/FIyoY8Al" isExternal>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        <div className="w-1/3 items-center justify-start hidden md:flex">
          <Image 
            alt="Cyberwright"
            className="object-cover w-full h-full z-0 hover:scale-95 drop-shadow-[0_5px_5px_rgba(255,255,255,0.5)]"
            height={350}
            width={350}
            src="/cyberwright_app_logo.svg"
          />
        </div>
      </div>
      <Footer />
      <div className="blob1" ref={b1ref}></div>
      <div className="blob2" ref={b2ref}></div>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalBody>
            <Image 
              src="/frame.png"
              className="py-6"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}