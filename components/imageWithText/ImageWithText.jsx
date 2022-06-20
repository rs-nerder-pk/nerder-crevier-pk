import OffSetImageLeft from "@/components/UI/containers/OffSetImageLeft";

export default function ImageWithText({ type }) {
  switch (type) {
    case "offsetImageLeftOnBlue":
      return (
        <OffSetImageLeft
          imageUrl="/images/home-jobs.jpeg"
          bgColor="bg-blue-500"
          textColor="text-white"
        >
          <div className="content content--white">
            <h2>Proudly serving Eastern Canada</h2>
            <p>
              Crevier Petroleum has been providing Canadians with quality fuels
              for over 75 years. You’ll find Crevier service stations on major
              routes throughout Quebec and northeastern Ontario. Wherever you go
              across the region, Crevier is there to fuel your journey.
            </p>
          </div>
        </OffSetImageLeft>
      );
    default:
      return <div>Text With Image</div>;
  }
}
