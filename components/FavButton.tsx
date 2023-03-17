import userCurrentUser from "@/hooks/useCurrentUser";
import useFav from "@/hooks/useFav";
import axios from "axios";
import React, { useCallback, useMemo } from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
interface FavButtonProps {
  movieId: string;
}

const FavButton: React.FC<FavButtonProps> = ({ movieId }) => {
  const { mutate: mutateFav } = useFav();
  const { data: currentUser, mutate } = userCurrentUser();

  const isFav = useMemo(() => {
    const list = currentUser?.favouriteIds || [];
    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFav = useCallback(async () => {
    let res;
    if (isFav) {
      res = await axios.delete("/api/favorite", { data: movieId });
    } else {
      res = await axios.post("/api/favorite", { movieId });
    }

    const updatedfavIds = res?.data?.favouriteIds;

    mutate({
      ...currentUser,
      favouriteIds: updatedfavIds,
    });

    mutateFav();
  }, [movieId, currentUser, mutate, mutateFav, isFav]);
  return (
    <div
    onClick={toggleFav}
      className="
    
    cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white rounded-full flex justify-center items-center
    transition hover:border-neutral-300
    "
    >
      {isFav ? (<AiOutlineCheck className="text-white" size={30} />): (<AiOutlinePlus className="text-white" size={30} />)}
    </div>
  );
};

export default FavButton;
