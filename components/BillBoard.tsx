import useBillBoard from "@/hooks/useBillBoard";
import React, { useCallback } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import useInfoModal from "@/hooks/useInfoModal";

const BillBoard = () => {
  const { data, error, isLoading } = useBillBoard();
  const { openModal } = useInfoModal();

  console.log("id " , data)
  const handleOpenModal = useCallback(() => {
    openModal(data ?  data[0]?.id : "");
  }, [data, openModal]);

  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        poster={data ? data[0]?.thumbnailUrl : ""}
        src={data ? data[0]?.videoUrl : ""}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data && data[0]?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data && data[0]?.description}
        </p>
        <div className="flex flex-row items-center mt-4 md:mt-4 gap-3">
          <PlayButton movieId={data ? data[0].id : null} />
          <button
            onClick={handleOpenModal}
            className="bg-white text-white bg-opacity-[30%] rounded py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
          >
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
