/* eslint-disable react/jsx-key */
import { AiFillLayout } from "react-icons/ai";
import { MdDashboardCustomize, MdIntegrationInstructions } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";


const ServicesData = [
  {
    name: "ICT support & Network maintenance",
    description: "I can offer reliable ICT support for seamless business operations.",
    icon: <HiMiniComputerDesktop className="text-2xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Web Design&Development",
    description: "Designing, developing and hosting webapps with responsive design and providing maintenance & Support.",
    icon: <AiFillLayout className="text-2xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "Payment intergration",
    description: "Integrating paypal, M-pesa and card payments into your system.",
    icon: <MdIntegrationInstructions className="text-2xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Custom Software Solutions",
    description: "Creation of custom software solution that cater for your specific needs.",
    icon: <MdDashboardCustomize className="text-2xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServiceBox = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {ServicesData.map(({ name, description, icon, bgColor }, idx) => (
          <div key={idx} className={`p-2.5 ${bgColor} rounded-lg`}>
            <div className="space-y-1.5">
              {icon}
              <h3 className="font-semibold text-black/70 text-xs sm:text-sm leading-tight">{name}</h3>
              <p className="text-[10px] sm:text-xs leading-snug">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBox;