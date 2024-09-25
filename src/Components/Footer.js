import React from "react";

export default function Footer() {
  return (
    <section>
      <div className="px-8 py-8 mt-16 text-white bg-black">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div>
            <h4 className="mb-4 font-bold">COMPANY</h4>
            <ul>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Who Are We
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">RESOURCES</h4>
            <ul>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">WORK</h4>
            <ul>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Video
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Shoot
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Post
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">SERVICES</h4>
            <ul>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Video
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Shoot
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Post
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">CONTACT</h4>
            <ul>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Talk to us
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Collab
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>©2023 Red Bangle | Privacy Policy | Legal | Terms & Conditions</p>
        </div>
      </div>
    </section>
  );
}
