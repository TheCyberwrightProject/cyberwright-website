import { Navbar, NavbarBrand, NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { Link } from "@nextui-org/link";

export function CustomNavbar() {
    return (
        <Navbar maxWidth="2xl" className="pt-7" isBlurred={false}>
            <NavbarBrand>
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
            <NavbarItem>
            <Button
                color="success"
                variant="ghost"
                size="lg"
                as={Link}
                href="https://daqlultvpxf.typeform.com/to/FIyoY8Al"
                isExternal
            >
                Sign Up
            </Button>
            </NavbarItem>
        </Navbar>
    )
}