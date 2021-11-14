import { Variant } from "@morfeo/react"
import { ComponentProps } from "react"
import { MorfeoComponent } from "../MorfeoComponent"

type Props = {
  variant?: Variant<'Page'>;
} & Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const Page: React.FC<Props> = ({ children, variant, ...props }) => {
  return <MorfeoComponent componentName="Page" variant={variant} {...props}>{children}</MorfeoComponent>
}