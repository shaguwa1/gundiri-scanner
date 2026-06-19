import Header from './components/Header';
import TokenAnalyzer from './components/TokenAnalyzer';
import EducationCard from './components/EducationCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Shield className="w-4 h-4" />
                  <span>Kariyar Jarin ka ne Ma'aikatar mu</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
                  Kare <span className="text-primary">Jarin ka</span> a Duniyar Crypto
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  Yi bincike mai zurfi akan kowane token kafin ka saka kudin ka domin gujewa damfara da rug pulls.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="h-14 px-8 text-lg font-bold">
                    Fara Bincike <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                    Koyi Karatu
                  </Button>
                </div>
                
                <div className="mt-12 flex items-center gap-8">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">10k+</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Tokens</span>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">5k+</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Masu Amfani</span>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">99%</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Gaskiya</span>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a5f7174f-7859-49f4-88d1-0ea6aa0be74f/hero-image-cd55c9ea-1781910449615.webp" 
                  alt="Crypto Security" 
                  className="relative rounded-2xl shadow-2xl border border-border"
                />
              </div>
            </div>
          </div>
        </section>

        <TokenAnalyzer />

        {/* Features Section */}
        <section id="features" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tabbatar da Tsaro</h3>
                <p className="text-muted-foreground">Muna duba dukkan sassan smart contract don tabbatar babu hadari.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Biniddigin Liquidity</h3>
                <p className="text-muted-foreground">Bincike akan kudaden da aka ajiye don ciniki da sanin ko a kulle suke.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ikon Masu Shi</h3>
                <p className="text-muted-foreground">Sanin ko masu token din har yanzu suna da ikon dakatar da sayarwa.</p>
              </div>
            </div>
          </div>
        </section>

        <EducationCard />

        {/* Footer */}
        <footer className="py-12 border-t border-border bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                <span className="font-bold">Garkuwar Token</span>
              </div>
              <p className="text-sm text-muted-foreground">
                © 2024 Garkuwar Token. An kiyaye dukkan hakki.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Telegram</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
      
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
