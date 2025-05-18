import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Users, Mail, Wrench, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const MobileDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => (
  <div
    className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 ${
      open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    }`}
    aria-hidden={!open}
    onClick={onClose}
  >
    <nav
      className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transition-transform duration-200 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
      onClick={(e) => e.stopPropagation()}
      aria-label="Mobile menu"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <Link to="/" onClick={onClose}>
          <img
            src="/img/logo/24-h-black.png"
            alt="24CARFIX logo"
            width={120}
          />
        </Link>
        <button
          onClick={onClose}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
      <ul className="flex flex-col gap-2 p-4">
        <li>
          <span className="text-xs text-gray-400 font-semibold">เกี่ยวกับเรา</span>
        </li>
        <li>
          <Link
            to="/about-us"
            onClick={onClose}
            className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-100"
          >
            <Users className="h-5 w-5 text-carfix-orange" />
            เกี่ยวกับ 24CARFIX
          </Link>
        </li>
        <li>
          <Link
            to="/partnership"
            onClick={onClose}
            className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-100"
          >
            <Users className="h-5 w-5 text-carfix-orange" />
            พันธมิตรทางธุรกิจ
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={onClose}
            className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-100"
          >
            <Mail className="h-5 w-5 text-carfix-orange" />
            ติดต่อเรา
          </Link>
        </li>
        <li className="mt-4">
          <span className="text-xs text-gray-400 font-semibold">บริการของเรา</span>
        </li>
        <li>
          <Link
            to="/my-services"
            onClick={onClose}
            className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-100"
          >
            <Wrench className="h-5 w-5 text-carfix-orange" />
            บริการทั้งหมด
          </Link>
        </li>
        <li className="mt-6">
          <a
            href="tel:094-861-9595"
            className="bg-carfix-orange hover:bg-carfix-dark-orange text-white rounded-full px-4 py-2 flex items-center gap-2 transition-colors duration-200 w-full justify-center"
            aria-label="โทรหา 24CARFIX"
          >
            <Phone size={18} />
            <span>094-861-9595</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
          {/* Logo */}
          <Link to="/">
            <img
              src="/img/logo/24-h-black.png"
              alt="24CARFIX logo in black text with orange accent, modern and professional style, displayed on a white background"
              width={150}
            />
          </Link>
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>เกี่ยวกับเรา</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/about-us"
                          className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-carfix-orange/50 to-carfix-orange p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            เกี่ยวกับ 24CARFIX
                          </div>
                          <p className="text-sm leading-tight text-white">
                            เรียนรู้เพิ่มเติมเกี่ยวกับบริการของเราและทีมงานผู้เชี่ยวชาญ
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/partnership"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none flex items-center">
                            <Users className="mr-2 h-4 w-4" />
                            พันธมิตรทางธุรกิจ
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            โอกาสในการร่วมเป็นพันธมิตรกับเรา
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/contact-us"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none flex items-center">
                            <Mail className="mr-2 h-4 w-4" />
                            ติดต่อเรา
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            มีคำถาม? ติดต่อทีมงานของเราได้ที่นี่
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>บริการของเรา</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/my-services"
                          className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-carfix-orange/50 to-carfix-orange p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            บริการของเรา
                          </div>
                          <p className="text-sm leading-tight text-white">
                            บริการซ่อมรถคุณภาพสูงพร้อมช่างมืออาชีพตลอด 24 ชั่วโมง
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/my-services"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none flex items-center">
                            <Wrench className="mr-2 h-4 w-4" />
                            บริการทั้งหมด
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            ดูบริการทั้งหมดที่เรามีให้บริการ
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:094-861-9595"
            className="bg-carfix-orange hover:bg-carfix-dark-orange text-white rounded-full px-4 py-2 flex items-center gap-2 transition-colors duration-200"
            aria-label="โทรหา 24CARFIX"
          >
            <Phone size={18} />
            <span className="hidden sm:inline-block">094-861-9595</span>
          </a>
        </div>
      </div>
      {/* Mobile Drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
};

export default Navbar;