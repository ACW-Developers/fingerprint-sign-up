import Heading from '../Heading';
import ServiceBox from '../Service/ServiceBox'


const Services = () => {
  return (
    <div className="h-full page-shadow bg-white p-4 sm:p-6">
      {/* heading */}
      <Heading
        title="Services"
        subtitle="Services I can help with"
      />

      {/* Services Card  */}
      <div className="mt-3">
        <ServiceBox/>
      </div>
    </div>
  );
};

export default Services;