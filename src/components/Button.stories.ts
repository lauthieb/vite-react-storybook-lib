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
  },
};

export const SecondaryVariant: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const LgSize: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const SmSize: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};
