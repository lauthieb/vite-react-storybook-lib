import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryVariant: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "lg",
    disabled: false,
    startIcon: false,
    endIcon: false
  },
};

export const SecondaryVariant: Story = {
  args: {
    children: "Button",
    variant: "secondary",
    size: "lg",
    disabled: false,
    startIcon: false,
    endIcon: false
  },
};

export const LgSize: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "lg",
    disabled: false,
    startIcon: false,
    endIcon: false
  },
};

export const SmSize: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "sm",
    disabled: false,
    startIcon: false,
    endIcon: false
  },
};
