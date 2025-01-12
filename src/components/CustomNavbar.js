import { Navbar, NavbarBrand, NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { Link } from "@nextui-org/link";
import { QrCode } from "lucide-react";

export function CustomNavbar({ openModal }) {
    return (
        <Navbar maxWidth="2xl" className="pt-7" isBlurred={false}>
            <NavbarBrand className="justify-center md:justify-start">
                <div className="flex items-center space-x-2">
                    <Image 
                    src="/cyberwright.svg" 
                    alt="Cyberwright Logo" 
                    width={50} 
                    height={50}
                    />
                    <p className="font-bold text-4xl">Cyberwright</p>
                </div>
            </NavbarBrand>
            <NavbarItem className="flex items-center gap-x-5">
                <Button
                    variant="light"
                    isIconOnly
                    size="lg"
                    onPress={() => openModal()}
                    className="hidden sm:flex"
                >
                    <QrCode width={30} height={30}/>
                </Button>
                <Button
                    color="success"
                    variant="ghost"
                    size="lg"
                    as={Link}
                    href="https://daqlultvpxf.typeform.com/to/FIyoY8Al"
                    isExternal
                    className="hidden md:flex"
                >
                    Sign Up
                </Button>
            </NavbarItem>
        </Navbar>
    )
}