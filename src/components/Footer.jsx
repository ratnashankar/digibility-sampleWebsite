import React from "react";
export default function Footer() {
  return (
    <footer className="bg-[#2e2e2e] text-white py-6 px-[10vw]">
      <div className=" mx-auto px-4 ">
        <div className="flex flex-wrap justify-start gap-6 mb-4 text-[16px]">
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Roadmap</a>
          <a href="#">Careers</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
        <div className="text-[16px]">
          © 2025 Digibility Solutions Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
