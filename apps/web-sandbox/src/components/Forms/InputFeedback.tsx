import { ComponentProps } from "react"
import { MorfeoComponent } from "../MorfeoComponent"

type Props = Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const InputFeedback: React.FC<Props> = ({ variant, children, ...props }) => {
  return <MorfeoComponent componentName="InputFeedback" variant={variant} {...props}>{children}</MorfeoComponent>
}