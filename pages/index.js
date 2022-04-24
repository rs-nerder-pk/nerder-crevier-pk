import Banner from '../components/Banner';
import CallOuts from '../components/CallOuts';
import JobCta from '../components/JobCta';

export default function Home() {
  return (
    <div>
      <Banner />
      <CallOuts type="bg-primary-padding-bottom" />
      <CallOuts type="inset-bg-white" />

      <JobCta />
    </div>
  );
}
