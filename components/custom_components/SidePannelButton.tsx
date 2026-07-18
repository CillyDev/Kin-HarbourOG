import { VariantProps } from "class-variance-authority"
import { buttonVariants } from "../ui/button"
import { cn } from "../../lib/utils"
import { Slot } from "radix-ui"



export default function SidePannelButton({
  className = "w-full flex bg-sidebar rounded-md text-default-text text-sm py-[1.5em] items-center justify-start font gap-x-3 hover:bg-hovered-button hover:text-hovered-text",
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
