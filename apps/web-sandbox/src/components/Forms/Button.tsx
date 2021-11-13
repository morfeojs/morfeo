import { ComponentProps } from "react"
import { MorfeoComponent } from "../MorfeoComponent"

type Props = Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const Button: React.FC<Props> = ({ variant, children, ...props }) => {
  return <MorfeoComponent componentName="Button" variant={variant} {...props}>{children}</MorfeoComponent>
}