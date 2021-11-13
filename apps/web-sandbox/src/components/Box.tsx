import { Variant } from "@morfeo/react"
import { ComponentProps } from "react"
import { MorfeoComponent } from "./MorfeoComponent"

type Props = {
  variant?: Variant<'Box'>;
} & Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const Box: React.FC<Props> = ({ variant, children, ...props }) => {
  return <MorfeoComponent componentName="Box" variant={variant} {...props}>{children}</MorfeoComponent>
}