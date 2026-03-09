export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-surface-light">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-xl text-amber">
          FABRICATED <span className="text-muted text-sm font-mono">× Informal</span>
        </p>
        <p className="text-xs text-muted/50 font-mono">
          &copy; {new Date().getFullYear()} Fabricated. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
