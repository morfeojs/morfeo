import { Variant } from "@morfeo/react"
import { ComponentProps } from "react"
import { MorfeoComponent } from "./MorfeoComponent"

type Props = {
  variant?: Variant<'Hr'>;
} & Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const Hr: React.FC<Props> = ({ variant, children, ...props }) => {
  return <MorfeoComponent componentName="Hr" variant={variant} {...props}>{children}</MorfeoComponent>
}