import CallOut from './CallOut';
import CallWithIcon from './CallOutItem/CallWithIcon';

export default function CallOuts(props) {
  const { type } = props;

  switch (type) {
    case 'bg-primary-padding-bottom':
      return (
        <div className="bg-blue pt-24 pb-48 -mb-24 px-4">
          <div className="container mx-auto">
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
        <div className="px-4">
          <div className="container mx-auto bg-white py-8 px-4 md:p-12">
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
