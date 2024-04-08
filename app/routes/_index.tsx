import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Our Tours' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Homepage() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>
}
