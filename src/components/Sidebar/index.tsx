import Logo from "./Logo"

import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users
} from 'lucide-react'

import NavItem from "./NavItem"
import UsedSpaceWidget from "./UsedSpaceWidget"

export default function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
      <Logo />

      <div
        className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-300
        px-3 py-2 shadow-sm"
      >
        <button type="button">
          <Search className="h-5 w-5 text-zinc-500" />
        </button>

        <input className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
          placeholder="Search"
          type="search"
        />
      </div>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
    </nav>

      <section className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />
      </section>
    </aside>
  )
}
