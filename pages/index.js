import Banner from '../components/Banner';

export default function Home() {
  return (
    <div>
      <Banner />
      <div>
        <ul className="grid grid-cols-3 divide-x place-content-center text-center bg-blue-800 p-4 rounded-lg container mx-auto text-white py-16">
          <li>This</li>
          <li>This</li>
          <li>This</li>
        </ul>
      </div>
    </div>
  );
}
