import Header from '@/components/layout/header/Header';
import Link from 'next/link';
import React, { useState } from 'react';

function thankYou() {
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div>
      <Header openNav={openNav} handleNav={handleNav} setOpenNav={setOpenNav} />
      <div>
        <div className="pt-4 thankU">
          <div className="thankU-child ">
            <div className="child-header">
              <p>Your message has been successfully received.</p>
              <p>
                {' '}
                We appreciate your interest and will get back to you as soon as
                possible.In the meantime, feel free to explore more of our
                website.
              </p>
              <Link
                href="/contact-us"
                className="btn btn--secondary "
              >
                Go To Home
              </Link>
            </div>
            <div className="thank-main ">
              <h1 className="text-start">Thank You</h1>
              <div>
                <Link
                  href="/contact-us"
                  className="btn btn--secondary thank-botton"
                >
                  Go To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default thankYou;
