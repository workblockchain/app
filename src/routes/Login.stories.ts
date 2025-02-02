import {Meta, StoryObj} from "@storybook/react"
import Login from "./Login"

const meta: Meta<typeof Login> = {
  title: "Routes/Login",
  component: Login,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
