/* eslint-disable react/jsx-key */
import { AiFillLayout } from "react-icons/ai";
import { MdDashboardCustomize, MdIntegrationInstructions } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";


const ServicesData = [
  {
    name: "ICT support & Network maintenance",
    description: "Reliable ICT support for seamless operations.",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Web Design&Development",
    description: "Responsive web apps, hosting & support.",
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "Payment intergration",
    description: "PayPal, M-Pesa & card payment integrations.",
    icon: <MdIntegrationInstructions className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Custom Software Solutions",
    description: "Tailored software for your unique needs.",
    icon: <MdDashboardCustomize className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServiceBox = () => {
  return (
    <div className="h-full mt-3 sm:mt-6 text-white">
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
        {ServicesData.map(({ name, description, icon, bgColor }, idx) => (
          <div key={idx} className={`p-2 sm:p-3 ${bgColor} min-h-[110px] sm:min-h-[140px] md:min-h-[150px] rounded-xl`}>
            <div className="p-1 sm:p-1.5 md:p-2 space-y-1 sm:space-y-1.5 md:space-y-2">
              <div className="text-lg sm:text-2xl md:text-3xl">{icon}</div>
              <h3 className="font-semibold text-black/60 text-[11px] sm:text-sm md:text-base leading-tight">{name}</h3>
              <p className="text-[10px] sm:text-xs md:text-sm leading-snug">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBox;