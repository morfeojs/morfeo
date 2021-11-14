import { Variant } from "@morfeo/react"
import { ComponentProps } from "react"
import { MorfeoComponent } from "../MorfeoComponent"

type Props = {
  variant?: Variant<'Section'>;
} & Omit<ComponentProps<typeof MorfeoComponent>, 'componentName'>

export const Section: React.FC<Props> = ({ children, variant, ...props }) => {
  return <MorfeoComponent componentName="Section" variant={variant} {...props}>{children}</MorfeoComponent>
}