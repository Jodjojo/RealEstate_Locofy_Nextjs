import { useMemo } from "react";

const AreaCard = ({
  card2BackgroundImage,
  card2Padding,
  card2BoxSizing,
  centerville,
}) => {
  const card2Style = useMemo(() => {
    return {
      backgroundImage: card2BackgroundImage,
      padding: card2Padding,
      boxSizing: card2BoxSizing,
    };
  }, [card2BackgroundImage, card2Padding, card2BoxSizing]);

  return (
    <div
      className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-2@3x.png)] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-gray-white font-body-regular-600 md:flex-[unset] md:self-stretch"
      style={card2Style}
    >
      <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
        <div className="relative leading-[32px] font-semibold">
          {centerville}
        </div>
        <div className="relative text-base leading-[24px] text-center">
          25 listings
        </div>
      </div>
    </div>
  );
};

export default AreaCard;
