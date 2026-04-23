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
    <div className="h-full mt-6 sm:mt-10 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {ServicesData.map(({ name, description, icon, bgColor }, idx) => (
          <div key={idx} className={`p-3 ${bgColor} min-h-[150px] sm:min-h-[180px] rounded-xl`}>
            <div className="p-2 sm:p-3 space-y-2 sm:space-y-3">
              {icon}
              <h3 className="font-semibold text-black/60 text-base sm:text-lg">{name}</h3>
              <p className="text-sm sm:text-base">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBox;