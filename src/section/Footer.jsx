import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="bg-gradient-to-r from-trasnparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Term & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <blockquote className="text-sm italic font-medium text-neutral-400">
          "SIC PARVIS MAGNA ~ Greatness from small beginnings. (Sir Francis
          Drake)"
        </blockquote>
      </div>
      <p>©️ 2025 Alpin. All rights reserved.</p>
    </section>
  );
};

export default Footer;
