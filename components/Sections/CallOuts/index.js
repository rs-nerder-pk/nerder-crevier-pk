import CallOut from './CallOut';
import CallWithIcon from './CallOutItem/CallWithIcon';

export default function CallOuts(props) {
  const { type } = props;

  switch (type) {
    case 'bg-primary-padding-bottom':
      return (
        <div className="bg-blue px-4 pt-24 lg:pt-32 pb-48 lg:pb-64 -mb-24 lg:-mb-32 ">
          <div className="container mx-auto  md:px-12 ">
            <div className="grid md:grid-cols-3 text-white gap-8">
              <CallOut />
              <CallOut />
              <CallOut />
            </div>
          </div>
        </div>
      );

    case 'inset-bg-white':
      return (
        <div className="px-4 relative">
          <div className="container mx-auto bg-white py-12 px-4 md:p-12 lg:py-16">
            <div className="grid md:grid-cols-3 text-blue gap-8">
              <CallWithIcon />
              <CallWithIcon />
              <CallWithIcon />
            </div>
          </div>
        </div>
      );
    default:
      break;
  }
  return (
    <div className="px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <CallOut />
          <CallOut />
          <CallOut />
        </div>
      </div>
    </div>
  );
}
