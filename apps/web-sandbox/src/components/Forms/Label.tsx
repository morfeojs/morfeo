import { ComponentProps } from "react"
import { MorfeoComponent } from "../MorfeoComponent"

type Props = Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const Label: React.FC<Props> = ({ variant, children, ...props }) => {
  return <MorfeoComponent componentName="Label" variant={variant} {...props}>{children}</MorfeoComponent>
}