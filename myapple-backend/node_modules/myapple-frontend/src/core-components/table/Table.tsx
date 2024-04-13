import React, { PropsWithChildren } from 'react'
import { getKeys } from '../../constants/Constant'

interface TableProps extends PropsWithChildren {
  dataList: Product[]
}

interface Product {
  productName: string
  color: string
  category: string
  price: string
}

const Table = ({ dataList }: TableProps) => {
  const headers = getKeys(dataList[0])

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {headers.map((header) => (
            <th key={header} scope="col" className="px-6 py-3">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataList.map(({ productName, category, color, price }: Product) => {
          // console.log(product)
          return (
            <tr
              key={productName}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{productName}</td>
              <td className="px-6 py-4">{category}</td>
              <td className="px-6 py-4">{color}</td>
              <td className="px-6 py-4">{price}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
