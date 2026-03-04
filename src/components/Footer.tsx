export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-surface">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted">
          <span className="text-orange font-bold">FABRICATED</span>{' '}
          <span className="text-muted/50">×</span> Informal
        </p>
        <p className="text-xs text-muted/50">
          &copy; {new Date().getFullYear()} Fabricated. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
