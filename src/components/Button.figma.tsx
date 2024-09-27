import figma from "@figma/code-connect/react"
import { Button } from "./Button"

figma.connect(
  Button,
  "<FIGMA_COMPONENTS_BUTTON>",
  {
    props: {
      variant: figma.enum("Type", {
        Primary: "primary",
        Secondary: "secondary",
      }),
      size: figma.enum("Size", {
        lg: "lg",
        sm: "sm",
      }),
      startIcon: figma.boolean("Has Start Icon", {
        true: figma.instance("↪ Start Icon"),
        false: undefined,
      }),
      endIcon: figma.boolean("Has End Icon", {
        true: figma.instance("↪ End Icon"),
        false: undefined,
      }),
      children: figma.string("Text value"),
    },
    example: ({
      variant,
      size,
      startIcon,
      endIcon,
      children,
    }) => (
      <Button
        variant={variant}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {children}
      </Button>
    ),
    imports: ["import { Button } from '@my-lib/react'"],
  }
);
