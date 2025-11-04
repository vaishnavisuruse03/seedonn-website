export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-block w-8 h-8 rounded-full bg-primary" />
            <span>Seedonn</span>
          </div>
          <p className="mt-4 text-slate-600">© {new Date().getFullYear()} Seedonn. All rights reserved.</p>
        </div>
        <div className="md:justify-self-end flex gap-4">
          <a href="/privacy" className="underline">Privacy</a>
          <a href="/terms" className="underline">Terms</a>
          <a href="/contact" className="underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
