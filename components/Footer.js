import React from 'react'

export default function Footer() {
        const getCurrentYear = () => {
          return new Date().getFullYear();
        };
    return (
      <footer className="px-4 py-6 bg-gray-900 mt-32 text-white">
        <div className="container">
          <div className="grid col-span-full sm:grid-cols-4 mx-auto items-center justify-center ">
            <div className="col-span-full sm:col-start-1 sm:col-end-3">
              <p>
                *Please note: All emails to us will be answered within 24 hours.
                If you want an instant response, please talk to us on WhatsApp:
                <a
                  href="https://wa.me/923077222782"
                  className="hover:text-gray-300"
                >
                  {" "}
                  +923077222782
                </a>
              </p>
              <p className="mt-8 hidden sm:block">
                &copy; {getCurrentYear()} - by Cartalogix | pixelsbit
              </p>
            </div>
            <div className="col-span-full sm:col-start-4 sm:text-right">
              <ul className="space-y-2 mt-6">
                <li>
                  <a href="tel:922136612782" className="hover:text-gray-300">
                    Call: +92 21 36612782
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@cartalogix.com"
                    className="hover:text-gray-300"
                  >
                    Email: info@cartalogix.com
                  </a>
                </li>
                <li>
                  <p className="mt-8 sm:hidden">
                    &copy; {getCurrentYear()} - by Cartalogix | pixelsbit
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}

/*
{getCurrentYear()} - <span className="text-gray-400">pixelsbit</span>
*/