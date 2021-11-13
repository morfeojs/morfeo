import { Variant } from "@morfeo/react"
import { ComponentProps } from "react"
import { MorfeoComponent } from "./MorfeoComponent"

type Props = {
  variant?: Variant<'Card'>;
} & Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const Card: React.FC<Props> = ({ variant, children, ...props }) => {
  return <MorfeoComponent componentName="Card" variant={variant} {...props}>{children}</MorfeoComponent>
}