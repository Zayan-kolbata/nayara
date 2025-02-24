function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-10 px-6 md:px-20 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-yellow-500 text-lg md:text-xl font-semibold uppercase">
            Contact Us
          </h3>
          <p>Email: nayrahotels@gmail.com</p>
          <p>Phone: +91 9119301159</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-yellow-500 text-lg md:text-xl font-semibold uppercase">
            Address
          </h3>
          <p>Niara Hotel, Manali</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm md:text-base">
          &copy; {new Date().getFullYear()} Niara Hotel. All rights reserved.
          Designed with care to provide you with an exceptional experience.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
