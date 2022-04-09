/* eslint-disable hydrogen/prefer-image-component */
export default function SymptomsBanner() {
  return (
    <div className="relative flex flex-col bg-[#F4FAFF] md:h-[280px] h-[400px] w-full py-[20px] md:px-[30px] justify-center border-y border-[#EFEFEF]">
      <p className="text-[#393838] text-[18px] font-medium absolute top-[20px] left-[30px]">
        Shop by symptoms
      </p>
      <div className="grid items-center justify-between w-full grid-cols-3 mt-12 gap-x-2 gap-y-10 md:flex md:flex-row">
        {symptoms.map((item) => (
          <SymptomItem key={item.title} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
}

function SymptomItem({image, title}) {
  return (
    <div className="flex flex-col items-center space-y-3">
      <img
        src={image}
        className="lg:w-[120px] lg:h-[120px] w-[80px] h-[80px]"
        alt=""
      />
      <p className="text-[#393838] text-[16px] font-medium">{title}</p>
    </div>
  );
}

const symptoms = [
  {image: '/cough.png', title: 'Cough'},
  {image: '/headache.png', title: 'Headache'},
  {image: '/nose.png', title: 'Nose'},
  {image: '/fever.png', title: 'Fever'},
  {image: '/throat.png', title: 'Sore Throat'},
  {image: '/immunity.png', title: 'Immunity'},
];
