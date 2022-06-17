import React from "react";

import TimelineComponentMobile from "components/timeline-component-mobile";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <div className="hidden md:block">
        <MainPageDesktop />
      </div>
      <div className="md:hidden">
        <MainPageMobile />
      </div>
    </>
  );
}

export function MainPageDesktop() {
  return (
    <div className="inline-flex flex-col items-start justify-start w-full bg-[rgba(35,34,35,1)]">
      <div className="w-full p-2.5 gap-2.5 inline-flex flex-col items-start justify-start">
        <div className="w-full gap-2 inline-flex flex-row items-center justify-start">
          <Link
            to="/"
            className="text-xs font-medium inline font-['Quicksand'] leading-[normal] text-[rgba(255,127,9,1)]"
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
            to="/articles"
            className="flex-1 text-xs font-medium text-Pearl inline font-['Quicksand'] leading-[normal]"
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
      <div className="inline-flex w-full h-full">
        <div className="w-full relative bg-Midnight h-[368px] overflow-clip">
          <div className="absolute inline-flex flex-row items-center justify-start left-[calc(50%_-_247.5px_+_0px)] top-[calc(50%_-_119.5px_+_-0.5px)] gap-[42px]">
            <div className="inline-flex flex-col items-start justify-start">
              <p className="text-sm text-white inline font-['Quicksand'] leading-[normal]">
                Hello! I am
              </p>
              <p className="font-Inter font-bold text-white inline text-[60px] tracking-[-0.32px] leading-[normal]">
                Phil Wee
              </p>
              <p className="font-light text-Grey inline font-['Quicksand'] text-[10px] tracking-[-0.56px] leading-[normal]">
                My poor decision making landed me here
              </p>
            </div>
            <div
              // className="absolute left-0 top-0 right-[-4.15%] bottom-[-6.18%]"
              className="w-52 relative h-[239px]"
            >
              <div className="rounded-lg absolute bg-cover w-[46px] h-[183px] left-[162px] top-[43px] bg-[url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/4897/b5349cfbe9bdd5c72f34cbd18fe10a84df146afb.webp)]"></div>
              <div className="rounded-lg absolute w-[46px] h-[183px] left-[0] top-[17px] bg-[url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/4897/44432945d1266727f14b9f01c8aa1f98bd3ec287.webp)]"></div>
              <div className="rounded-lg bg-cover bg-center absolute left-7 w-[150px] h-[239px] top-[0] bg-[url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/4897/afc7144299e21a062bfe5ca6a548a6ddee6cb918.webp)]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-9 w-full gap-2.5 inline-flex flex-col items-center justify-start pl-[72px] pr-[72px]">
        <p className="font-Inter text-5xl font-extralight text-white inline tracking-[-0.96px] leading-[normal]">
          About Me
        </p>
        <div className="px-16 inline-flex flex-col items-start justify-start pt-[52px] pb-[52px] gap-[101px] bg-[rgba(35,34,35,1)]">
          <div className="relative w-[600px] h-[69px] gap-[26px]">
            <p className="absolute text-6xl tracking-tighter text-center text-Pearl inline left-[0] top-[0] font-['Mohave'] leading-[normal]">
              01 SEP 21
            </p>
            <div className="absolute inline-flex flex-col items-start justify-start left-[210px] top-[9px]">
              <Link
                to="/articles/quit-school"
                className="font-Inter font-bold text-center text-Pearl inline text-[32px] leading-[normal]"
              >
                Quit School
              </Link>
              <p className="text-xs font-medium text-Grey inline font-['Quicksand'] leading-[normal]">
                Why I sacrificed my US/China scholarship
              </p>
            </div>
            <div className="absolute w-[33px] h-[202px] left-[-39px] top-[25px]">
              <LineSegmentShort />
            </div>
          </div>
          <div className="relative w-[600px] h-[69px] gap-[26px]">
            <p className="absolute text-6xl tracking-tighter text-center text-Pearl inline left-[0] top-[0] font-['Mohave'] leading-[normal]">
              01 SEP 21
            </p>
            <div className="absolute inline-flex flex-col items-start justify-start left-[210px] top-[9px]">
              <a
                href="https://www.firejet.io"
                className="font-Inter font-bold text-center text-Pearl inline text-[32px] leading-[normal]"
              >
                Started FireJet
              </a>
              <p className="text-xs font-medium text-Grey inline font-['Quicksand'] leading-[normal]">
                Wow enTRepREnuER, foUNDeR
              </p>
            </div>
            <div className="absolute w-[33px] h-[202px] left-[-39px] top-[25px]">
              <LineSegmentShort />
            </div>
          </div>
          <div className="relative w-[600px] h-[69px] gap-[26px]">
            <p className="absolute text-6xl tracking-tighter text-center text-Pearl inline left-[0] top-[0] font-['Mohave'] leading-[normal]">
              29 APR 21
            </p>
            <div className="absolute inline-flex flex-col items-start justify-start left-[210px] top-[9px]">
              <Link
                to="/articles/ten-mins-yc"
                className="font-Inter font-bold text-center text-Pearl inline text-[32px] leading-[normal]"
              >
                10 mins in Y Combinator
              </Link>
              <p className="text-xs font-medium text-Grey inline font-['Quicksand'] leading-[normal]">
                Turns out getting the interview doesn’t mean you get in
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative gap-2.5 h-[430px]">
        <div className="absolute left-[0] right-[0] w-full h-[406px] top-[0]">
          <FlamesBackground />
        </div>
        <div className="p-2.5 absolute bottom-6 gap-2.5 inline-flex flex-col items-center justify-center left-[0] right-[0] w-full h-[406px] top-[0]">
          <div className="bg-cover w-[424px] h-[161px] bg-[url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/4897/ffdea49a1e9630e844aef07de066bb4f8b36e8f1.webp)]"></div>
        </div>
      </div>
      <div className="py-9 w-full gap-6 inline-flex flex-col items-start justify-start pl-[72px] pr-[72px]">
        <a
          href="https://www.firejet.io"
          className="font-Inter text-5xl font-extralight text-white inline tracking-[-0.96px] leading-[normal]"
        >
          My Startup - FireJet
        </a>
        <div className="w-[166px] h-[0] outline outline-1 outline-[rgba(242,242,242,1)]"></div>
        <div className="w-full">
          <p className="text-xl font-light text-white inline font-['Quicksand'] leading-[normal]">
            FireJet allows you to convert Figma designs to code - In fact this
            website is entirely exported using FireJet (With a few tweaks for
            things like buttons to work)
            <br />
            <br />
            You can see the original Figma Design&nbsp;
          </p>
          <a
            href="https://www.figma.com/file/0Xja9fAv6yxWVHkGPFkBeY/Philip's-Portfolio-Website?node-id=2%3A2"
            className="text-xl font-light underline text-white inline font-['Quicksand'] leading-[normal]"
          >
            here
          </a>
          <p className="text-xl font-light text-white inline font-['Quicksand'] leading-[normal]">
            .
            <br />
            <br />
            Alternatively, view the source code for the website&nbsp;
          </p>
          <a
            href="https://github.com/PhilipWee/portfolio-website"
            className="text-xl font-light underline text-white inline font-['Quicksand'] leading-[normal]"
          >
            here
          </a>
          <p className="text-xl font-light text-white inline font-['Quicksand'] leading-[normal]">
            . (If you want to submit a PR to help me update my life story sure)
          </p>
        </div>
        <div className="gap-2 inline-flex flex-row items-start justify-start">
          <a
            href="https://www.youtube.com/channel/UCXFyio7c5EWBGLknUJZjIzQ"
            className="w-6 h-6 relative"
          >
            <div className="w-6 absolute top-1 h-[16.01px] left-[0]">
              <div className="absolute left-0 right-[-4.16%] top-[0.03%] bottom-[-12.46%]">
                <YoutubeLogo />
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/philip-wee/" className="w-6 h-6">
            <LinkedInLogo />
          </a>
          <a href="https://www.firejet.io" className="w-6 h-6 relative">
            <div className="absolute right-0 bottom-0 left-[8.33%] top-[8.33%]">
              <WebsiteLogo />
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6584381245"
            className="w-6 h-6"
          >
            <WhatsappLogo />
          </a>
        </div>
      </div>
      <div className="w-full inline-flex flex-col items-center justify-start pl-[355px] pr-[355px] pt-[53px] pb-[53px] gap-[22px] bg-[rgba(8,8,8,1)]">
        <div className="gap-2.5 inline-flex flex-row items-center justify-center">
          <p className="font-extrabold text-center text-white inline font-['Raleway'] text-[34px] leading-[normal]">
            Get In Touch
          </p>
        </div>
        <div className="gap-2.5 inline-flex flex-col items-start justify-center">
          <p className="text-sm leading-6 text-center inline w-[572px] font-['IBM_Plex_Mono'] tracking-[0.16px] text-[rgba(156,156,156,1)]">
            I’m happy to connect with any other entreprenuers / designers /
            programmers
            <br />
            P.S. I stole this template from someone else
          </p>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=6584381245"
          className="rounded px-6 py-4 border-solid border gap-2.5 inline-flex flex-row items-center justify-center w-[350px] drop-shadow-lg border-[rgba(98,186,27,1)] bg-[rgba(63,142,0,1)]"
        >
          <p className="text-sm font-bold text-white inline font-['IBM_Plex_Mono'] leading-[normal]">
            Wanna Touch?
          </p>
        </a>
      </div>
      <div className="px-2.5 py-6 w-full gap-2.5 bg-Onyx inline-flex flex-col items-start justify-start">
        <p className="w-full text-sm text-center inline font-['IBM_Plex_Mono'] tracking-[0.16px] leading-[normal] text-[rgba(156,156,156,1)]">
          Made with FireJet️ 🔥
        </p>
      </div>
    </div>
  );
}

export function MainPageMobile() {
  return (
    <div className="w-full inline-flex flex-col items-start justify-start bg-[rgba(35,34,35,1)]">
      <div className="w-full p-2.5 gap-2.5 inline-flex flex-col items-start justify-start">
        <div className="w-full gap-2 inline-flex flex-row items-center justify-start">
          <Link
            to="/"
            className="text-xs font-medium inline font-['Quicksand'] leading-[normal] text-[rgba(255,127,9,1)]"
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
            to="/articles"
            className="flex-1 text-xs font-medium text-Pearl inline font-['Quicksand'] leading-[normal]"
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
      <div className="py-6 w-full gap-2.5 bg-Midnight inline-flex flex-col items-center justify-center pl-[65px] pr-[65px]">
        <div className="inline-flex flex-col items-center justify-center gap-[42px]">
          <div className="relative w-52 h-[239px]">
            <div className="rounded-lg absolute bg-cover w-[46px] h-[183px] left-[162px] top-[43px] bg-[url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/4896/b5349cfbe9bdd5c72f34cbd18fe10a84df146afb.webp)]"></div>
            <div className="rounded-lg absolute w-[46px] h-[183px] left-[0] top-[17px] bg-[url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/4896/44432945d1266727f14b9f01c8aa1f98bd3ec287.webp)]"></div>
            <div className="rounded-lg bg-cover bg-center absolute left-7 w-[150px] h-[239px] top-[0] bg-[url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/4896/afc7144299e21a062bfe5ca6a548a6ddee6cb918.webp)]"></div>
          </div>
          <div className="inline-flex flex-col items-start justify-start">
            <p className="text-sm text-white inline font-['Quicksand'] leading-[normal]">
              Hello! I am
            </p>
            <p className="font-Inter font-bold text-white inline text-[60px] tracking-[-0.32px] leading-[normal]">
              Phil Wee
            </p>
            <p className="font-light text-Grey inline font-['Quicksand'] text-[10px] tracking-[-0.56px] leading-[normal]">
              My poor decision making landed me here
            </p>
          </div>
        </div>
      </div>
      <div className="py-9 w-full gap-2 inline-flex flex-col items-center justify-start pl-[13px] pr-[13px]">
        <p className="font-Inter text-5xl font-extralight text-white inline tracking-[-0.96px] leading-[normal]">
          About Me
        </p>
        <div className="px-16 inline-flex flex-col items-start justify-start pt-[52px] pb-[52px] gap-[68px] bg-[rgba(35,34,35,1)]">
          <TimelineComponentMobile variant="VARIANT2"></TimelineComponentMobile>
          <TimelineComponentMobile variant="VARIANT"></TimelineComponentMobile>
          <TimelineComponentMobile variant="VARIANT1"></TimelineComponentMobile>
        </div>
      </div>
      <div className="w-full relative gap-2.5 h-[270px]">
        <div className="w-full absolute bottom-6 left-[0] right-[0] h-[246px] top-[0]">
          <FlamesBackground />
        </div>
        <div className="w-full absolute bottom-6 gap-2.5 inline-flex flex-col items-center justify-center left-[0] right-[0] h-[246px] top-[0]">
          <div className="bg-cover w-[270px] h-[103px] bg-[url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/4896/ffdea49a1e9630e844aef07de066bb4f8b36e8f1.webp)]"></div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="py-9 max-w-96 gap-6 inline-flex flex-col items-start justify-start px-4">
          <p className="w-full font-Inter text-5xl font-extralight text-white inline tracking-[-0.96px] leading-[normal]">
            My Startup FireJet
          </p>
          <div className="w-[166px] h-[0] outline outline-1 outline-[rgba(242,242,242,1)]"></div>
          <div className="w-full">
            <p className="text-xl font-light text-white inline font-['Quicksand'] leading-[normal]">
              FireJet allows you to convert Figma designs to code - In fact this
              website is entirely exported using FireJet (With a few tweaks for
              things like buttons to work)
              <br />
              <br />
              You can see the original Figma Design&nbsp;
            </p>
            <a
              href="https://www.figma.com/file/0Xja9fAv6yxWVHkGPFkBeY/Philip's-Portfolio-Website?node-id=2%3A2"
              className="text-xl font-light underline text-white inline font-['Quicksand'] leading-[normal]"
            >
              here
            </a>
            <p className="text-xl font-light text-white inline font-['Quicksand'] leading-[normal]">
              .
              <br />
              <br />
              Alternatively, view the source code for the website&nbsp;
            </p>
            <a
              href="https://github.com/PhilipWee/portfolio-website"
              className="text-xl font-light underline text-white inline font-['Quicksand'] leading-[normal]"
            >
              here
            </a>
            <p className="text-xl font-light text-white inline font-['Quicksand'] leading-[normal]">
              . (If you want to submit a PR to help me update my life story
              sure)
            </p>
          </div>
          <div className="gap-2 inline-flex flex-row items-start justify-start">
            <a
              href="https://www.youtube.com/channel/UCXFyio7c5EWBGLknUJZjIzQ"
              className="w-6 h-6 relative"
            >
              <div className="w-6 absolute top-1 h-[16.01px] left-[0]">
                <div className="absolute left-0 right-[-4.16%] top-[0.03%] bottom-[-12.46%]">
                  <YoutubeLogo />
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/philip-wee/"
              className="w-6 h-6"
            >
              <LinkedInLogo />
            </a>
            <a href="https://www.firejet.io" className="w-6 h-6 relative">
              <div className="absolute right-0 bottom-0 left-[8.33%] top-[8.33%]">
                <WebsiteLogo />
              </div>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=6584381245"
              className="w-6 h-6"
            >
              <WhatsappLogo />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full inline-flex flex-col items-center justify-start pt-[53px] pb-[53px] gap-[22px] bg-[rgba(8,8,8,1)]">
        <div className="w-full gap-2.5 inline-flex flex-row items-center justify-center">
          <p className="font-extrabold text-center text-white inline font-['Raleway'] text-[34px] leading-[normal]">
            Get In Touch
          </p>
        </div>
        <div className="w-full gap-2.5 inline-flex flex-col items-start justify-center">
          <p className="w-full text-sm leading-6 text-center inline font-['IBM_Plex_Mono'] tracking-[0.16px] text-[rgba(156,156,156,1)]">
            I’m happy to connect with any other entreprenuers / designers /
            programmers
            <br />
            P.S. I stole this template from someone else
          </p>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=6584381245"
          className="rounded px-6 py-4 border-solid border gap-2.5 inline-flex flex-row items-center justify-center w-[300px] drop-shadow-lg border-[rgba(98,186,27,1)] bg-[rgba(63,142,0,1)]"
        >
          <div className="gap-2.5 inline-flex flex-row items-center justify-start">
            <p className="text-sm font-bold text-white inline font-['IBM_Plex_Mono'] leading-[normal]">
              Wanna Touch?
            </p>
          </div>
        </a>
      </div>
      <div className="px-2.5 py-6 w-full gap-2.5 bg-Onyx inline-flex flex-col items-start justify-start">
        <p className="w-full text-sm text-center inline font-['IBM_Plex_Mono'] tracking-[0.16px] leading-[normal] text-[rgba(156,156,156,1)]">
          Made with FireJet️ 🔥
        </p>
      </div>
    </div>
  );
}

function WhatsappLogo() {
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
        d="M17.415 14.382C17.117 14.233 15.656 13.515 15.384 13.415C15.112 13.316 14.914 13.267 14.715 13.565C14.517 13.861 13.948 14.531 13.775 14.729C13.601 14.928 13.428 14.952 13.131 14.804C12.834 14.654 11.876 14.341 10.741 13.329C9.858 12.541 9.261 11.568 9.088 11.27C8.915 10.973 9.069 10.812 9.218 10.664C9.352 10.531 9.515 10.317 9.664 10.144C9.813 9.97004 9.862 9.84604 9.961 9.64704C10.061 9.44904 10.011 9.27604 9.936 9.12704C9.862 8.97804 9.268 7.51504 9.02 6.92004C8.779 6.34104 8.534 6.42004 8.352 6.41004C8.178 6.40204 7.98 6.40004 7.782 6.40004C7.584 6.40004 7.262 6.47404 6.99 6.77204C6.717 7.06904 5.95 7.78804 5.95 9.25104C5.95 10.713 7.014 12.126 7.163 12.325C7.312 12.523 9.258 15.525 12.239 16.812C12.949 17.118 13.502 17.301 13.933 17.437C14.645 17.664 15.293 17.632 15.805 17.555C16.375 17.47 17.563 16.836 17.811 16.142C18.058 15.448 18.058 14.853 17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382H17.415ZM11.993 21.785H11.989C10.2184 21.7854 8.48037 21.3094 6.957 20.407L6.597 20.193L2.855 21.175L3.854 17.527L3.619 17.153C2.62914 15.5774 2.10529 13.7538 2.108 11.893C2.11 6.44304 6.544 2.00904 11.997 2.00904C14.637 2.00904 17.119 3.03904 18.985 4.90704C19.9054 5.82362 20.6349 6.91361 21.1313 8.11394C21.6277 9.31427 21.8811 10.6011 21.877 11.9C21.875 17.35 17.441 21.785 11.993 21.785ZM20.405 3.48804C19.3032 2.37896 17.9922 1.49958 16.5481 0.900841C15.1039 0.302105 13.5553 -0.00407625 11.992 4.09775e-05C5.438 4.09775e-05 0.102 5.33504 0.1 11.892C0.096963 13.9788 0.644374 16.0294 1.687 17.837L0 24L6.304 22.346C8.04787 23.2962 10.0021 23.794 11.988 23.794H11.993C18.547 23.794 23.883 18.459 23.885 11.901C23.8898 10.3383 23.5848 8.79014 22.9874 7.34607C22.3901 5.90201 21.5124 4.59071 20.405 3.48804Z"
        fill="#F2F2F2"
      ></path>
    </svg>
  );
}

function WebsiteLogo() {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
        stroke="#F2F2F2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M7 11C7 16.5228 8.79086 21 11 21C13.2091 21 15 16.5228 15 11C15 5.47715 13.2091 1 11 1C8.79086 1 7 5.47715 7 11Z"
        stroke="#F2F2F2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M1 11H21"
        stroke="#F2F2F2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

function FlamesBackground() {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 1165 406"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="mask0_13_288"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="1165"
        height="406"
      >
        <rect
          x="1165"
          y="406"
          width="1165"
          height="405.692"
          transform="rotate(-180 1165 406)"
          fill="url(#paint0_linear_13_288)"
        ></rect>
      </mask>
      <g mask="url(#mask0_13_288)">
        <path
          d="M1165 406L1.67444 406V72.1482L583.337 0L1165 72.1482V406Z"
          fill="url(#pattern0)"
        ></path>
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_13_288"
            transform="translate(-0.216701 -2.0429) scale(0.000779338 0.00147421)"
          ></use>
        </pattern>
        <linearGradient
          id="paint0_linear_13_288"
          x1="1747.5"
          y1="406"
          x2="1747.5"
          y2="811.692"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"></stop>
          <stop offset="0.634895" stopColor="#E7E7E7"></stop>
          <stop offset="1" stopColor="#D9D9D9" stopOpacity="0"></stop>
        </linearGradient>
        <image
          id="image0_13_288"
          width="3651"
          height="2194"
          xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/4897/9ebc1e4b-87b3-4030-949c-58b7a9ec755b.webp"
        ></image>
      </defs>
    </svg>
  );
}

function LineSegmentShort() {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 33 202"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_24_319)">
        <path
          d="M16.5 0C7.66345 -3.86258e-07 0.500008 7.16344 0.500007 16C0.500007 24.8366 7.66345 32 16.5 32C25.3366 32 32.5 24.8366 32.5 16C32.5 7.16344 25.3366 3.86258e-07 16.5 0ZM16.5 170C7.66345 170 0.5 177.163 0.5 186C0.5 194.837 7.66345 202 16.5 202C25.3365 202 32.5 194.837 32.5 186C32.5 177.163 25.3365 170 16.5 170ZM13.5 16V186H19.5V16H13.5Z"
          fill="#F2F2F2"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_24_319">
          <rect
            width="32"
            height="202"
            fill="white"
            transform="translate(0.5)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
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
