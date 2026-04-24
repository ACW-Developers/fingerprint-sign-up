import Heading from '../Heading';
import ServiceBox from '../Service/ServiceBox'


const Services = () => {
  return (
    <div className="h-full page-shadow bg-white p-4 sm:p-6 md:p-8">
      {/* heading */}
      <Heading
        title="Services"
        subtitle="Services I can gladly help with:"
      />

      {/* Services Card  */}
      <div>
        <ServiceBox/>
      </div>
    </div>
  );
};

export default Services;