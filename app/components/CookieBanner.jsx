const CookieBanner = () => {
  return (
    <div className="w-full bg-black text-white py-2">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-center gap-12">
        <p className="text-sm">
          <span className="font-bold">Thread</span> and our partners use cookies
          for analytics, ads, and to improve your experience. See {""}
          <span className="underline">cookie policy</span> .
        </p>
        <button className="bg-white text-black px-4 py-1 rounded-lg text-sm hover:bg-gray-100 transition-colors">
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
