import React from "react";

export default function NavBar() {
  return (
    <div className="absolute w-full pt-1 lg:pt-2 p-5 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200  top-0">
      <a href="/" className="cursor-pointers">
        <img
          src="/thsLOGO.png"
          height={150}
          width={150}
          style={{ filter: "invert(100%)" }}
        />
      </a>
      <div className="flex items-center">
        <div className="-my-1 ml-2 -mr-1 md:hidden">
          <button
            type="button"
            className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          >
            <span className="sr-only">Navigation</span>
            <svg width="24" height="24" fill="none" aria-hidden="true">
              <path
                d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <div
            style={{
              position: "fixed",
              top: "1px",
              left: "1px",
              width: "1px",
              height: "0",
              padding: "0",
              margin: -"1px",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              display: "none",
            }}
          ></div>
        </div>
        <div
          className="hidden md:flex items-center"
          style={{ marginLeft: "0.5rem" }}
        >
          <nav>
            <ul className="flex items-center gap-x-8">
              <li>
                <a
                  className="hover:text-sky-500 dark:hover:text-sky-400 cursor-pointer"
                  // href="/showcase"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-sky-500 dark:hover:text-sky-400 cursor-pointer"
                  // href="/docs/installation"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  // href="https://tailwindui.com/?ref=top"
                  className="hover:text-sky-500 dark:hover:text-sky-400 cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="hover:text-sky-500 dark:hover:text-sky-400 cursor-pointer"
                  // href="/blog"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
            <label
              className="sr-only"
              id="headlessui-listbox-label-:R1jeilb6:"
              data-headlessui-state=""
            >
              Theme
            </label>
            <button
              type="button"
              id="headlessui-listbox-button-:R2jeilb6:"
              aria-haspopup="true"
              aria-expanded="false"
              data-headlessui-state=""
              aria-labelledby="headlessui-listbox-label-:R1jeilb6: headlessui-listbox-button-:R2jeilb6:"
            >
              <span className="dark:hidden">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-6 h-6"
                >
                  <path
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    className="stroke-slate-400 dark:stroke-slate-500"
                  ></path>
                  <path
                    d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                    className="stroke-slate-400 dark:stroke-slate-500"
                  ></path>
                </svg>
              </span>
              <span className="hidden dark:inline">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                    className="fill-transparent"
                  ></path>
                  <path
                    d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                    className="fill-slate-400 dark:fill-slate-500"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                    className="fill-slate-400 dark:fill-slate-500"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
