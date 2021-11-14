import { Variant } from "@morfeo/react"
import { ComponentProps } from "react"
import { MorfeoComponent } from "./MorfeoComponent"

type Props = {
  variant?: Variant<'List'>;
} & Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const List: React.FC<Props> = ({ variant, children, ...props }) => {
  return <MorfeoComponent componentName="List" variant={variant} {...props}>{children}</MorfeoComponent>
}