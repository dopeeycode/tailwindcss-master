import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

interface NavItemProps {
  title: string
  icon: ElementType
}

export default function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
        href=""
        className="flex items-center gap-3 group rounded px-3 py-2 transition-colors
      hover:bg-violet-50"
      >
        <Icon className="h-5 w-5 text-zinc-500" />

        <span
          className="font-medium text-zinc-700 transition-colors group-hover:text-violet-500"
        >
          {title}
        </span>

        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 transition-colors group-hover:text-violet-400" />
      </a>
  )
}