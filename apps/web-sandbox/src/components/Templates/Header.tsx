import { Variant } from "@morfeo/react"
import { ComponentProps } from "react"
import { MorfeoComponent } from "../MorfeoComponent"

type Props = {
  variant?: Variant<'Header'>;
} & Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const Header: React.FC<Props> = ({ variant, children, ...props }) => {
  return <MorfeoComponent componentName="Header" variant={variant} {...props}>{children}</MorfeoComponent>
}