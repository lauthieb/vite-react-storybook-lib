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
    children: "Bouton",
    variant: "primary",
    size: "lg",
    disabled: false,
  },
};

export const SecondaryVariant: Story = {
  args: {
    children: "Bouton",
    variant: "secondary",
    size: "lg",
    disabled: false,
  },
};

export const LgSize: Story = {
  args: {
    children: "Bouton",
    variant: "primary",
    size: "lg",
    disabled: false,
  },
};

export const SmSize: Story = {
  args: {
    children: "Bouton",
    variant: "primary",
    size: "sm",
    disabled: false,
  },
};
