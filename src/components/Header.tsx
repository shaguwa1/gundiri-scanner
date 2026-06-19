import React from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold tracking-tight">Garkuwar <span className="text-primary">Token</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Gida</a>
          <a href="#analyzer" className="text-sm font-medium hover:text-primary transition-colors">Bincike</a>
          <a href="#education" className="text-sm font-medium hover:text-primary transition-colors">Ilimantarwa</a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">Game da Mu</a>
        </nav>

        <div className="hidden md:block">
          <Button size="sm">Fara Bincike</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a href="#" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Gida</a>
          <a href="#analyzer" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Bincike</a>
          <a href="#education" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Ilimantarwa</a>
          <a href="#about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Game da Mu</a>
          <Button className="w-full">Fara Bincike</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
