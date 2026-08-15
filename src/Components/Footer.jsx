import { footerLinks } from "../Constants";
import { footerimg } from "../Constants/footerimg";
import sonata from "../assets/sonata.png";


const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-[#292929] bg-black">
      <div className="container mx-auto px-5 md:px-8 lg:px-10 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row justify-between gap-14 lg:gap-10">

          <div className="max-w-sm space-y-5 text-center lg:text-left">
             <img
                src={sonata} 
                        alt="Sonata"
                        className="h-16 lg:h-20 w-auto object-contain relative lg:top-0.9 md:top-0.9 top-1"
                      />
            <p className="text-sm md:text-base text-white-100/70 leading-relaxed">
              Precision-crafted timepieces for those who value style,
              reliability, and timeless design.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              {footerimg.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex-center rounded-full border-2 border-[#292929] hover:border-yellow hover:text-yellow transition-colors duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>


          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-14 lg:gap-20 text-center sm:text-left">
            {footerLinks.map(({ title, links }) => (
              <div key={title} className="space-y-4">
                <h3 className="uppercase text-sm md:text-base font-semibold text-yellow tracking-wide">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-sm md:text-base text-white-100/70 hover:text-white transition-colors duration-300"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


          <div className="max-w-sm space-y-4 text-center lg:text-left">
            <h3 className="uppercase text-sm md:text-base font-semibold text-yellow tracking-wide">
              Stay Updated
            </h3>
            <p className="text-sm md:text-base text-white-100/70">
              Subscribe for early access to new collections and offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row lg:flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3.5 rounded-sm border-2 border-[#292929] bg-transparent outline-none text-sm focus:border-yellow transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-sm border-2 border-[#616784] text-sm hover:bg-[#616784] transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>


        <div className="mt-14 md:mt-16 pt-6 border-t border-[#292929] flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-white-100/60 text-center">
          <p>&copy; {new Date().getFullYear()} Sonata. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;