import React from "react";
import { Link } from "react-router-dom";

export default function TimelineComponentMobile(
  props: TimelineComponentMobileInterface
) {
  return (
    <>
      {props.variant === "" && (
        <div className="absolute">
          <p className="absolute text-6xl tracking-tighter text-center text-Grey inline font-['Mohave'] leading-[normal]">
            01 SEP 21
          </p>
        </div>
      )}
      {props.variant === "" && (
        <div className="absolute">
          <div className="w-8 absolute h-[262px]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 32 262"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_23_80)">
                <path
                  d="M16 0C7.16345 -3.86258e-07 1.04399e-05 7.16344 1.00536e-05 16C9.66734e-06 24.8366 7.16345 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 3.86258e-07 16 0ZM16 230C7.16344 230 3.8624e-07 237.163 0 246C-3.863e-07 254.837 7.16344 262 16 262C24.8365 262 32 254.837 32 246C32 237.163 24.8365 230 16 230ZM13 16V246H19V16H13Z"
                  fill="#F2F2F2"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_23_80">
                  <rect width="32" height="262" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      )}
      {props.variant === "VARIANT" && (
        <div className="relative w-[187px] h-[162px] gap-[26px]">
          <div className="absolute left-0.5 inline-flex flex-col items-start justify-start w-[200px] top-[69px]">
            <a
              href="https://www.firejet.io"
              className="w-full font-Inter font-bold text-Pearl inline text-[32px] leading-[normal]"
            >
              Started Firejet
            </a>
            <p className="w-full text-xs font-medium text-Grey inline font-['Quicksand'] leading-[normal]">
              Wow enTRepREnuER, foUNDeR
            </p>
          </div>
          <p className="absolute text-6xl tracking-tighter text-center text-Grey inline font-['Mohave'] leading-[normal]">
            01 SEP 21
          </p>
          <div className="absolute w-[33px] h-[262px] left-[-42px] top-[31px]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 33 262"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_25_12)">
                <path
                  d="M16.5 0C7.66345 -3.86258e-07 0.50001 7.16344 0.50001 16C0.50001 24.8366 7.66345 32 16.5 32C25.3366 32 32.5 24.8366 32.5 16C32.5 7.16344 25.3366 3.86258e-07 16.5 0ZM16.5 230C7.66344 230 0.5 237.163 0.5 246C0.5 254.837 7.66344 262 16.5 262C25.3365 262 32.5 254.837 32.5 246C32.5 237.163 25.3365 230 16.5 230ZM13.5 16V246H19.5V16H13.5Z"
                  fill="#F2F2F2"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_25_12">
                  <rect
                    width="32"
                    height="262"
                    fill="white"
                    transform="translate(0.5)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      )}
      {props.variant === "VARIANT1" && (
        <div className="relative w-[187px] h-[162px] gap-[26px]">
          <div className="absolute left-0.5 inline-flex flex-col items-start justify-start w-[200px] top-[69px]">
            <Link
              to="articles/10-mins-yc"
              className="w-full font-Inter font-bold text-Pearl inline text-[32px] leading-[normal]"
            >
              10 mins in Y Combinator
            </Link>
            <p className="w-full text-xs font-medium text-Grey inline font-['Quicksand'] leading-[normal]">
              Turns out getting the interview doesn’t mean you get in
            </p>
          </div>
          <p className="absolute text-6xl tracking-tighter text-center text-Grey inline font-['Mohave'] leading-[normal]">
            29 APR 21
          </p>
        </div>
      )}
      {props.variant === "VARIANT2" && (
        <div className="relative w-[187px] h-[162px] gap-[26px]">
          <div className="absolute left-0.5 inline-flex flex-col items-start justify-start w-[200px] top-[69px]">
            <Link
              to="/articles/quit-school"
              className="w-full font-Inter font-bold text-Pearl inline text-[32px] leading-[normal]"
            >
              Quit School
            </Link>
            <p className="w-full text-xs font-medium text-Grey inline font-['Quicksand'] leading-[normal]">
              Why I sacrificed my US/China scholarship
            </p>
          </div>
          <p className="absolute text-6xl tracking-tighter text-center text-Grey inline font-['Mohave'] leading-[normal]">
            01 SEP 21
          </p>
          <div className="absolute w-[33px] h-[262px] left-[-42px] top-[31px]">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 33 262"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_25_6)">
                <path
                  d="M16.5 0C7.66345 -3.86258e-07 0.50001 7.16344 0.50001 16C0.50001 24.8366 7.66345 32 16.5 32C25.3366 32 32.5 24.8366 32.5 16C32.5 7.16344 25.3366 3.86258e-07 16.5 0ZM16.5 230C7.66344 230 0.5 237.163 0.5 246C0.5 254.837 7.66344 262 16.5 262C25.3365 262 32.5 254.837 32.5 246C32.5 237.163 25.3365 230 16.5 230ZM13.5 16V246H19.5V16H13.5Z"
                  fill="#F2F2F2"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_25_6">
                  <rect
                    width="32"
                    height="262"
                    fill="white"
                    transform="translate(0.5)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      )}
    </>
  );
}

TimelineComponentMobile.defaultProps = {
  variant: "",
};

interface TimelineComponentMobileInterface {
  variant: "" | "VARIANT" | "VARIANT1" | "VARIANT2";
}
