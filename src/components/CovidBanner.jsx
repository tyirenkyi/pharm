/* eslint-disable hydrogen/prefer-image-component */
export default function CovidBanner() {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-[#213148] h-[70px] flex justify-center items-center">
        <p className="md:text-[24px] text-[20px] font-normal text-white">
          COVID - 19 Prevention
        </p>
      </div>
      <div className="flex flex-row flex-wrap py-6 items-center justify-between space-x-2 space-y-2 border-[#EFEFEF] border-x border-b px-[30px] rounded bg-white">
        {instructions.map((item) => (
          <InstructionItem
            key={item.title}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

function InstructionItem({image, title}) {
  return (
    <div className="flex flex-col items-center space-y-3">
      <img
        src={image}
        alt=""
        className="md:w-[120px] md:h-[100px] w-[70px] h-[60px]"
      />
      <p className="text-[#393838] md:text-[16px] text-[14px] font-medium text-center">
        {title}
      </p>
    </div>
  );
}

const instructions = [
  {image: '/hands.png', title: 'Regularly wash hands'},
  {image: '/sanitize.png', title: 'Sanitize often'},
  {image: '/crowded.png', title: 'Avoid crowded places'},
  {image: '/masks.png', title: 'Wear nose masks'},
  {image: '/home.png', title: 'Stay at home if possible'},
];
