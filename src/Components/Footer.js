import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 mt-10 footer">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div>
            <h4 className="mb-4 ">COMPANY</h4>
            <ul>
              <li>
                <a href="/">Who Are We</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 ">RESOURCES</h4>
            <ul>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 ">WORK</h4>
            <ul>
              <li>
                <a href="/">Video</a>
              </li>
              <li>
                <a href="/">Shoot</a>
              </li>
              <li>
                <a href="/">Post</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 ">SERVICES</h4>
            <ul>
              <li>
                <a href="/">Video</a>
              </li>
              <li>
                <a href="/">Shoot</a>
              </li>
              <li>
                <a href="/">Post</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 ">CONTACT</h4>
            <ul>
              <li>
                <a href="/">Talk to us</a>
              </li>
              <li>
                <a href="/">Collab</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pt-6 mt-8 footer-border md:flex-row md:justify-between">
          <p>Copyright ©2023 Red Bangle</p>
          <div className="flex mt-4 space-x-6 md:mt-0">
            <a href="/">Privacy Policy</a>
            <a href="/">Legal</a>
            <a href="/">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
