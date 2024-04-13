import { PropsWithChildren } from "react"

export const Alerts = {
  Information: "blue",
  Danger: "red",
  Success: "green",
  Warning: "orange",
  Dark: "black",
}

interface AlertProps extends PropsWithChildren {
  type: string
}

const Alert = ({ type = "blue", children, ...props }: AlertProps) => {
  return (
    <div
      className={`p-4 mb-4 text-sm text-${type}-800 rounded-lg bg-${type}-50 dark:bg-gray-800 dark:text-${type}-400`}
      role="alert"
    >
      {children}
    </div>
  )
}

export default Alert
