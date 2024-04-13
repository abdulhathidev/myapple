import React, { PropsWithChildren, useState } from 'react'

interface AutoCompleteProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    PropsWithChildren {
  listItems: string[]
}

const AutoComplete = ({ listItems, id }: AutoCompleteProps) => {
  const [itemText, setItemText] = useState('')
  const [tempList, setTempList] = useState<string[]>([])
  return (
    <div className="flex flex-col">
      <input
        type="text"
        autoComplete="off"
        className="rounded border-2 border-indigo-500/100 p-2 focus:border-red-500"
        id={id}
        value={itemText}
        placeholder="Select a country"
        onChange={(e) => {
          if (e.target.value.length >= 3) {
            setItemText(e.target.value)
            setTempList(
              listItems.filter((stateName) =>
                stateName.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase())
              )
            )
          } else {
            setItemText(e.target.value)
            setTempList([])
          }
        }}
      />
      {tempList.length > 0 && (
        <div
          id="countryDataList"
          className="h-40 overflow-scroll border-2 border-blue-500 rounded cursor-pointer"
        >
          <ul>
            {tempList.map((text) => (
              <li
                key={text}
                onClick={() => {
                  setItemText(text)
                  setTempList([])
                }}
                className="hover:text-white hover:bg-blue-800"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default AutoComplete
