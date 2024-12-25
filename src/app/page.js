"use client"

import { CustomNavbar } from "@/components/CustomNavbar";
import { Footer } from "@/components/Footer";
import { Chip } from "@nextui-org/chip"
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Waypoints } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "@nextui-org/link";

export default function Home() {
  const b1ref = useRef(null);
  const b2ref = useRef(null);

  useEffect(() => {
    if (!b1ref.current || !b2ref.current) return;

    const moveBlob = (blob, offx, offy) => {
      const height = document.documentElement.clientHeight;
      const width = document.documentElement.clientWidth;
      //console.log(blob.getBoundingClientRect())
      const currentTop = blob.getBoundingClientRect().top
      const currentLeft = blob.getBoundingClientRect().left

      let newTop = currentTop + offx;
      let newLeft = currentLeft + offy;
      newTop = Math.max(0, Math.min(height - 300, newTop));
      newLeft = Math.max(0, Math.min(width - 300, newLeft));

      blob.style.top = `${newTop}px`;
      blob.style.left = `${newLeft}px`;
    };

    const interval = setInterval(() => {
      if (b1ref.current) {
        const offsetX1 = Math.random() * 60 - 30;
        const offsetY1 = Math.random() * 60 - 30;
        moveBlob(b1ref.current, offsetX1, offsetY1);
      }
      if (b2ref.current) {
        const offsetX2 = Math.random() * 60 - 30;
        const offsetY2 = Math.random() * 60 - 30;
        moveBlob(b2ref.current, offsetX2, offsetY2)
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col">
      <CustomNavbar />
      <div className="text-center mt-20">
        <Chip color="success" variant="dot">Empowering Code Security</Chip>
        <h1 className="text-7xl font-extrabold">Cyberwright</h1>
        <h2 className="text-xl opacity-75">Cybersecurity, done right</h2>
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex flex-col w-2/3 space-y-4 items-center">
          <div className="font-bold text-3xl">
            <p>
              We know developers want to focus on creating.
            </p>
            <p>
              Let us handle the <span className="bg-gradient-to-r from-[#3bed69] to-[#11bc3d] inline-block text-transparent bg-clip-text">security</span>.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex space-x-10 justify-center">
              <div className="flex flex-col items-center space-y-1 font-semibold text-center">
                <Image 
                  alt="University of Michigan - M"
                  src="/vscode.svg"
                  width={24}
                  height={24}
                  className="rounded-none"
                />
                <p>VSCode Integration</p>
              </div>
              <div className="flex flex-col items-center space-y-1 font-semibold text-center">
                <Waypoints />
                <p>Custom Trained Model</p>
              </div>
              <div className="flex flex-col items-center space-y-1 font-semibold text-center">
                <Image 
                  alt="University of Michigan - M"
                  src="/uofm.svg"
                  width={24}
                  height={24}
                  className="rounded-none"
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
        <div className="w-1/3 flex items-center justify-start">
          <Image 
            alt="Cyberwright"
            className="object-cover w-full h-full z-0 hover:scale-95"
            height={350}
            width={350}
            src="/cyberwright_app_logo.svg"
          />
        </div>
      </div>
      <Footer />
      <div className="blob1" ref={b1ref}></div>
      <div className="blob2" ref={b2ref}></div>
    </div>
  );
}