import Image from "next/image";
import UKFlag from "../assets/uk-flag.png";

const TopInfo = () => {
  return (
    <div className="w-full bg-[#fafafa] py-2 border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-end gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image
              src={UKFlag}
              alt="UK Flag"
              width={24}
              height={24}
              className="object-cover"
            />
          </div>
          <span className="text-sm text-gray-600">EN</span>
        </div>
        <a
          href="mailto:support@thread.com"
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          Contact Us
        </a>
        <a
          href="https://www.fedex.com/en-us/tracking.html"
          target="_blank"
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          Track your order
        </a>
      </div>
    </div>
  );
};

export default TopInfo;
