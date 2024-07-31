import React from "react";

function Header() {
  return (
    <header class="bg-base-100 shadow-lg">
      <nav class="navbar container mx-auto">
        <div class="flex-1">
          {/* <a class="btn btn-ghost normal-case text-xl">Your Logo</a> */}

          <header className="text-3xl font-bold mb-6">My React App</header>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a href="#home" class="btn btn-ghost">
                Home
              </a>
            </li>
            <li>
              <a href="#about" class="btn btn-ghost">
                About
              </a>
            </li>
            <li>
              <a href="#services" class="btn btn-ghost">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" class="btn btn-ghost">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
