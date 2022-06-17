import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
//import styles 👇
import "react-modern-drawer/dist/index.css";
import ArticleSidebar from "./article-sidebar";

interface ArticleLayoutProps {
  children: React.ReactNode;
}

export default function ArticleLayout(props: ArticleLayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Header />
      <Drawer
        open={drawerOpen}
        direction="left"
        onClose={() => setDrawerOpen(false)}
      >
        <ArticleSidebar />
      </Drawer>
      <div className="relative">
        <MenuButton onClick={() => setDrawerOpen(true)} />

        {props.children}
      </div>
    </>
  );
}

interface MenuButtonProps {
  onClick: () => void;
}

function MenuButton(props: MenuButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="absolute top-2 left-2 rounded-lg w-10 h-10 p-2 gap-2.5 inline-flex flex-row items-center justify-center bg-[rgba(35,34,35,1)]"
    >
      <div className="flex-1 h-6 w-6">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1875 3.75H2.8125C2.70937 3.75 2.625 3.83437 2.625 3.9375V5.4375C2.625 5.54063 2.70937 5.625 2.8125 5.625H21.1875C21.2906 5.625 21.375 5.54063 21.375 5.4375V3.9375C21.375 3.83437 21.2906 3.75 21.1875 3.75ZM21.1875 18.375H2.8125C2.70937 18.375 2.625 18.4594 2.625 18.5625V20.0625C2.625 20.1656 2.70937 20.25 2.8125 20.25H21.1875C21.2906 20.25 21.375 20.1656 21.375 20.0625V18.5625C21.375 18.4594 21.2906 18.375 21.1875 18.375ZM21.1875 11.0625H2.8125C2.70937 11.0625 2.625 11.1469 2.625 11.25V12.75C2.625 12.8531 2.70937 12.9375 2.8125 12.9375H21.1875C21.2906 12.9375 21.375 12.8531 21.375 12.75V11.25C21.375 11.1469 21.2906 11.0625 21.1875 11.0625Z"
            fill="#F2F2F2"
          ></path>
        </svg>
      </div>
    </button>
  );
}

function Header() {
  return (
    <div className="w-full p-2.5 gap-2.5 inline-flex flex-col items-start justify-start bg-[rgba(35,34,35,1)]">
      <div className="w-full gap-2 inline-flex flex-row items-center justify-start">
        <Link
          to="/"
          className="text-xs font-medium inline font-['Quicksand'] leading-[normal] text-Pearl"
        >
          Home
        </Link>
        <a
          href="https://www.firejet.io"
          className="text-xs font-medium text-Pearl inline font-['Quicksand'] leading-[normal]"
        >
          FireJet
        </a>
        <a
          href="https://lush-maize-353.notion.site/Recipes-40d8073dcfd443c1b653bf8cfe9ac01b"
          className="text-xs font-medium text-Pearl inline font-['Quicksand'] leading-[normal]"
        >
          Cooking Recipes
        </a>
        <Link
          to="articles"
          className="flex-1 text-xs font-medium text-[rgba(255,127,9,1)] inline font-['Quicksand'] leading-[normal]"
        >
          Articles
        </Link>
        <a
          href="https://www.youtube.com/channel/UCXFyio7c5EWBGLknUJZjIzQ"
          className="w-6 h-6 relative"
        >
          <div className="w-6 absolute top-1.5 h-[16.01px] left-[0]">
            <div>
              <YoutubeLogo />
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/philip-wee/" className="w-6 h-6">
          <LinkedInLogo />
        </a>
      </div>
    </div>
  );
}

function LinkedInLogo() {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.429 8.969H13.143V10.819C13.678 9.755 15.05 8.799 17.111 8.799C21.062 8.799 22 10.917 22 14.803V22H18V15.688C18 13.475 17.465 12.227 16.103 12.227C14.214 12.227 13.429 13.572 13.429 15.687V22H9.429V8.969ZM2.57 21.83H6.57V8.799H2.57V21.83ZM7.143 4.55C7.14315 4.88528 7.07666 5.21724 6.94739 5.52659C6.81812 5.83594 6.62865 6.11651 6.39 6.352C5.9064 6.83262 5.25181 7.10165 4.57 7.1C3.88939 7.09954 3.23631 6.8312 2.752 6.353C2.51421 6.11671 2.32539 5.83582 2.19634 5.52643C2.0673 5.21704 2.00058 4.88522 2 4.55C2 3.873 2.27 3.225 2.753 2.747C3.23689 2.26816 3.89024 1.9997 4.571 2C5.253 2 5.907 2.269 6.39 2.747C6.872 3.225 7.143 3.873 7.143 4.55Z"
        fill="#F2F2F2"
      ></path>
    </svg>
  );
}

function YoutubeLogo() {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 25 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5006 2.51196C23.3647 2.02719 23.1 1.5883 22.7346 1.24196C22.3589 0.884962 21.8984 0.629595 21.3966 0.499959C19.5186 0.00495878 11.9946 0.00495889 11.9946 0.00495889C8.85795 -0.0307285 5.72205 0.126233 2.60462 0.474959C2.10281 0.614172 1.64318 0.875246 1.26662 1.23496C0.896617 1.59096 0.628617 2.02996 0.488617 2.51096C0.15231 4.3227 -0.0110908 6.1623 0.000617183 8.00496C-0.0113828 9.84596 0.151617 11.685 0.488617 13.499C0.625617 13.978 0.892617 14.415 1.26362 14.768C1.63462 15.121 2.09662 15.376 2.60462 15.511C4.50762 16.005 11.9946 16.005 11.9946 16.005C15.1353 16.0407 18.2752 15.8837 21.3966 15.535C21.8984 15.4053 22.3589 15.15 22.7346 14.793C23.0999 14.4467 23.3643 14.0077 23.4996 13.523C23.8447 11.7119 24.0125 9.87155 24.0006 8.02796C24.0266 6.17656 23.859 4.32752 23.5006 2.51096V2.51196ZM9.60262 11.429V4.58196L15.8626 8.00596L9.60262 11.429Z"
        fill="#F2F2F2"
      ></path>
    </svg>
  );
}
