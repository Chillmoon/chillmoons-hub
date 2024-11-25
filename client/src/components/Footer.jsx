import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

import { BsLinkedin, BsGithub, BsTelegram } from "react-icons/bs";

export default function CustomFooter() {
  return (
    <Footer container className="border border-t-1 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-lg font-semibold dark:text-white flex items-center"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg text-white">
                Chillmoon`s
              </span>
              Hub
            </Link>
          </div>
          <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
            <p>&copy; 2024 Chillmoon`s Hub. All rights reserved.</p>
            <p>Made with 💙 by Tetiana Kolomiiets.</p>
            <p>
              This is an open-source project. Check out the source code on{" "}
              <a
                href="https://github.com/Chillmoon/chillmoons-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:underline"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="flex gap-4 justify-center mt-6">
            <Footer.Icon
              href="https://www.linkedin.com/in/tetiana-kolomiiets-210a841a6/"
              icon={BsLinkedin}
              target="_blank"
            />
            <Footer.Icon
              href="https://github.com/Chillmoon"
              icon={BsGithub}
              target="_blank"
            />
            <Footer.Icon
              href="https://t.me/Chillmoon"
              icon={BsTelegram}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
