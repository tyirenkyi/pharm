const categories = [
  'Skin Care',
  'Beauty',
  'Cold and Flu',
  'Immune Systems',
  'COVID - 19',
  'Eyes',
  'Nutrition',
  'Vitamins & Minerals',
  "Men's Health",
  "Women's Health",
];

/**
 * A client component that lists all the drug categories in stock
 */
export default function Categories() {
  return (
    <div className="hidden border-[#E3E3E3] border bg-white rounded lg:flex flex-col w-[237px] pb-[25px] pl-[24px] pt-[22px] h-[fit-content]">
      <p className="text-[18px] font-bold text-black">Categories</p>
      {categories.map((item) => (
        <p
          key={item}
          className="text-black text-[16px] mt-[30px] font-light cursor-pointer"
        >
          {item}
        </p>
      ))}
    </div>
  );
}
