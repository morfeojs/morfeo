import { ComponentProps } from "react"
import { MorfeoComponent } from "../MorfeoComponent"

type Props = Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const Input: React.FC<Props> = ({ variant, children, ...props }) => {
  return <MorfeoComponent componentName="Input" variant={variant} {...props}>{children}</MorfeoComponent>
}