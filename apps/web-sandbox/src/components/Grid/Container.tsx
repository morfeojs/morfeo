import { Variant } from "@morfeo/react"
import { ComponentProps } from "react"
import { MorfeoComponent } from "../MorfeoComponent"

type Props = {
  variant?: Variant<'Container'>;
} & Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const Container: React.FC<Props> = ({ variant, children, ...props }) => {
  return <MorfeoComponent componentName="Container" variant={variant} {...props}>{children}</MorfeoComponent>
}