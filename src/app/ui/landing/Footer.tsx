import React from "react";

function Footer() {
  return (
    <div className='bg-black p-12  text-red-50 flex flex-col gap-2 items-center justify-center'>
      <div className='flex flex-row gap-5 underline'>
        <p>Contact Us</p>
        <p>About Us</p>
        <p>Become an Investor</p>
      </div>
    </div>
  );
}

export default Footer;
