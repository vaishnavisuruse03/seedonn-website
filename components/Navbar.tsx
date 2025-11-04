import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block w-8 h-8 rounded-full bg-primary" />
          <span>Seedonn</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/team">Team</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact" className="px-4 py-2 rounded-2xl bg-primary text-white">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
