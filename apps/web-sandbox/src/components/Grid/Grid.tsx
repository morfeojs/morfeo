import { Variant } from "@morfeo/react"
import { ComponentProps } from "react"
import { MorfeoComponent } from "../MorfeoComponent"

type Props = {
  variant?: Variant<'Grid'>;
} & Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const Grid: React.FC<Props> = ({ variant, children, ...props }) => {
  return <MorfeoComponent componentName="Grid" variant={variant} {...props}>{children}</MorfeoComponent>
}