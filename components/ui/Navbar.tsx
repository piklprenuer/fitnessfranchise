'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FF</span>
            </div>
            <span className="font-display text-xl text-slate-900">
              Fitness<span className="text-brand-600">Franchise</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#franchises" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
              Browse Franchises
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
              How It Works
            </Link>
            <Link href="#compare" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
              Compare
            </Link>
            <Link
              href="#get-matched"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Get Matched Free
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3">
          <Link href="#franchises" className="block py-2 text-slate-700 font-medium" onClick={() => setOpen(false)}>Browse Franchises</Link>
          <Link href="#how-it-works" className="block py-2 text-slate-700 font-medium" onClick={() => setOpen(false)}>How It Works</Link>
          <Link href="#compare" className="block py-2 text-slate-700 font-medium" onClick={() => setOpen(false)}>Compare</Link>
          <Link href="#get-matched" className="btn-primary w-full text-center mt-2" onClick={() => setOpen(false)}>
            Get Matched Free
          </Link>
        </div>
      )}
    </header>
  );
}
