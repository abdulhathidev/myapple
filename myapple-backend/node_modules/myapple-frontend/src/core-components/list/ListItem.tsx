import React, { MouseEvent } from "react"

interface ListItemProps extends React.HTMLProps<HTMLLIElement> {
  items: string[]
  onClickItem: (item: string, e: MouseEvent) => void
  activeItem?: string
}

const ListItem: React.FC<ListItemProps> = (props) => {
  const activeIndex = props.items.findIndex((item) => item === props.activeItem)
  return (
    <ul className="divide-y divide-gray-100 border-solid border-blue-300 border-2 rounded-lg w-full">
      {props.items.map((item, ind) => (
        <li
          key={item}
          className={`flex justify-between gap-x-6 py-5 hover:bg-blue-200 hover:text-black ${
            activeIndex === ind && "text-white font-bold bg-blue-500"
          }`}
          onClick={(e) => props.onClickItem(item, e)}
        >
          <span className="px-2">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default ListItem
