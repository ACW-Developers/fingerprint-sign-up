/* eslint-disable react/jsx-key */
import { AiFillLayout } from "react-icons/ai";
import { MdDashboardCustomize, MdIntegrationInstructions } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";


const ServicesData = [
  {
    name: "ICT support & Network maintenance",
    description: "I can offer reliable ICT support for seamless business operations.",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Web Design&Development",
    description: "Designing, developing and hosting webapps with responsive design and providing maintenance & Support.",
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "Payment intergration",
    description: "Integrating paypal, M-pesa and card payments into your system.",
    icon: <MdIntegrationInstructions className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Custom Software Solutions",
    description: "Creation of custom software solution that cater for your specific needs.",
    icon: <MdDashboardCustomize className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServiceBox = () => {
  return (
    <div className="h-full mt-4 sm:mt-6 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {ServicesData.map(({ name, description, icon, bgColor }, idx) => (
          <div key={idx} className={`p-3 ${bgColor} min-h-[130px] sm:min-h-[150px] rounded-xl`}>
            <div className="p-1.5 sm:p-2 space-y-1.5 sm:space-y-2">
              <div className="text-2xl sm:text-3xl">{icon}</div>
              <h3 className="font-semibold text-black/60 text-sm sm:text-base">{name}</h3>
              <p className="text-xs sm:text-sm leading-snug">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBox;