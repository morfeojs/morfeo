import { Variant } from "@morfeo/react"
import { ComponentProps } from "react"
import { MorfeoComponent } from "../MorfeoComponent"

type Props = {
  variant?: Variant<'Footer'>;
} & Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const Footer: React.FC<Props> = ({ variant, children, ...props }) => {
  return <MorfeoComponent componentName="Footer" variant={variant} {...props}>{children}</MorfeoComponent>
}