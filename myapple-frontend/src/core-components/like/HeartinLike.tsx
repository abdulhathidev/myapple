import { PropsWithChildren } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

interface HeartinLikeProps
  extends React.HTMLProps<HTMLDivElement>,
    PropsWithChildren {
  like?: boolean
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const HeartinLike = ({ like = false, onClick }: HeartinLikeProps) => {
  return (
    <div onClick={(e) => onClick(e)}>
      {like ? (
        <AiFillHeart
          size={100}
          className="fill-red-600 cursor-pointer"
        ></AiFillHeart>
      ) : (
        <AiOutlineHeart
          size={100}
          className="fill-red-600 cursor-pointer"
        ></AiOutlineHeart>
      )}
    </div>
  )
}

export default HeartinLike
