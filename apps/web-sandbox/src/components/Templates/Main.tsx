import { Variant } from "@morfeo/react"
import { ComponentProps } from "react"
import { MorfeoComponent } from "../MorfeoComponent"

type Props = {
  variant?: Variant<'Main'>;
} & Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const Main: React.FC<Props> = ({ variant, children, ...props }) => {
  return <MorfeoComponent componentName="Main" variant={variant} {...props}>{children}</MorfeoComponent>
}