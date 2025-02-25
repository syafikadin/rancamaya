"use client";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import GuestDropdown from "./GuestDropdown";

function Navbar({ signOutAction }) {
  const [hideMenu, setHideMenu] = useState(true);
  const pathname = usePathname();
  return (
    <header>
      <div className="container header-items">
        <Image width={40} height={40} src="/logo.png" alt="" />
        <nav className={`navbar ${hideMenu ? "hide-menu" : "show-menu"}`}>
          <ul>
            <li>
              <Link
                className={pathname === "/" ? "active" : ""}
                href="/"
                onClick={() => setHideMenu(true)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={pathname.includes("rooms") ? "active" : ""}
                href="/rooms"
                onClick={() => setHideMenu(true)}
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                className={pathname.includes("villas") ? "active" : ""}
                href="/villas"
                onClick={() => setHideMenu(true)}
              >
                Villas
              </Link>
            </li>
            <li>
              <Link
                className={pathname.includes("golf") ? "active" : ""}
                href="/golf"
                onClick={() => setHideMenu(true)}
              >
                Golf
              </Link>
            </li>
            {/* <li>About</li> */}
            <li>
              <Link
                href={"/contact"}
                className={pathname === "/contact" ? "active" : ""}
                onClick={() => setHideMenu(true)}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <a href="#" className="btn-masuk">
                Masuk
              </a>
            </li>
            <li>
              <a href="#" className="btn-daftar">
                Daftar
              </a>
            </li>

            {/* <li>
              <Link
                className={
                  pathname.includes("account") || pathname === "/signin" ? "active" : ""
                }
                href="/signin"
                onClick={() => setHideMenu(true)}
              >
                Guest Area
              </Link>
              {user ? (
                <GuestDropdown user={user} signOutAction={signOutAction} />
              ) : (
                <Link
                  className={pathname.includes("account") || pathname === "/signin" ? "active" : ""}
                  href="/signin"
                  onClick={() => setHideMenu(true)}
                >
                  Guest Area
                </Link>
              )}
            </li> */}
          </ul>
        </nav>
        <button onClick={() => setHideMenu(!hideMenu)} className="toggle-menu-button">
          <FontAwesomeIcon icon={hideMenu ? faBars : faClose} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
