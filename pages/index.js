import Banner from '../components/Banner';
import CallOuts from '../components/CallOuts';

export default function Home() {
  return (
    <div>
      <Banner />
      <CallOuts type="bg-primary-padding-bottom" />
      <CallOuts type="inset-bg-white" />
    </div>
  );
}
