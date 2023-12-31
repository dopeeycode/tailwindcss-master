export default function UsedSpaceWidget() {
  return (
    <div className="flex flex-col shadow-lg gap-4 rounded-lg bg-violet-100 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-violet-700">
          Used space
        </span>
        <p className="text-sm/5 font-medium text-violet-500">
          Your team has used 80% of your available space. Need more ?
        </p>
      </div>

      <div className="h-2 rounded-full bg-violet-100">
        <div className="h-2 w-4/5 rounded-full bg-violet-600" />
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="font-medium text-sm transition-colors text-violet-500
        hover:text-violet-700"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="font-medium text-sm transition-colors text-violet-700
        hover:text-violet-500"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}