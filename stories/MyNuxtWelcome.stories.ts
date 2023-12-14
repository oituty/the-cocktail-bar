import type { Meta, StoryObj } from '@storybook/vue3';
import { within, userEvent } from '@storybook/testing-library';
import MyNuxtWelcome from './MyWelcome.vue';

const meta = {
  title: 'Example/NuxtWelcome',
  component: MyNuxtWelcome,
  tags: ['autodocs'],
} satisfies Meta<typeof MyNuxtWelcome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NuxtWelcomeStory: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /Clique Aqui/i });
    console.log('Botão encontrado:', button);
    await userEvent.click(button);
  },
};
