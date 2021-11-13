import { Variant } from "@morfeo/react"
import { ComponentProps } from "react"
import { MorfeoComponent } from "./MorfeoComponent"

type Props = {
  variant?: Variant<'Typography'>;
} & Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const Typography: React.FC<Props> = ({ variant, children, ...props }) => {
  return <MorfeoComponent componentName="Typography" variant={variant} {...props}>{children}</MorfeoComponent>
}