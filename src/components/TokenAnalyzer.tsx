import React, { useState } from 'react';
import { Search, ShieldCheck, ShieldAlert, ShieldX, Loader2, Info } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { motion, AnimatePresence } from 'framer-motion';

interface SecurityMetric {
  label: string;
  status: 'safe' | 'warning' | 'danger';
  description: string;
}

interface AnalysisResult {
  name: string;
  symbol: string;
  score: number;
  metrics: SecurityMetric[];
}

const TokenAnalyzer = () => {
  const [address, setAddress] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = () => {
    if (!address) return;
    
    setIsAnalyzing(true);
    setResult(null);

    // Simulate analysis delay
    setTimeout(() => {
      const mockResult: AnalysisResult = {
        name: address.length > 20 ? "SafeCoin" : "ScamToken",
        symbol: address.length > 20 ? "SAFE" : "SCAM",
        score: address.length > 20 ? 92 : 35,
        metrics: [
          {
            label: "Kudin Ruwa (Liquidity)",
            status: address.length > 20 ? 'safe' : 'danger',
            description: address.length > 20 
              ? "Kudin ruwa a kulle yake na tsawon shekara guda." 
              : "Kudin ruwa ba'a kulle shi ba. Ana iya gudu da kudin mutane (Rug pull)."
          },
          {
            label: "Duba ko za'a iya sayarwa (Honeypot)",
            status: 'safe',
            description: "An tabbatar cewa kowa na iya saye da sayarwa ba tare da matsala ba."
          },
          {
            label: "Kwangila tabbatacciya (Contract Verified)",
            status: address.length > 20 ? 'safe' : 'warning',
            description: address.length > 20
              ? "An tantance kwangilar a binciken blockchain."
              : "Ba'a tantance kwangilar ba. Akwai yiwuwar akwai boyayyen code."
          },
          {
            label: "Mai shi ya janye hannunsa (Ownership)",
            status: address.length > 20 ? 'safe' : 'danger',
            description: address.length > 20
              ? "Mai shi ya janye hannunsa, babu wanda zai iya canza dokoki."
              : "Mai shi yana da iko har yanzu. Zai iya dakatar da ciniki."
          }
        ]
      };
      setResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe': return <ShieldCheck className="text-green-500 w-5 h-5" />;
      case 'warning': return <ShieldAlert className="text-yellow-500 w-5 h-5" />;
      case 'danger': return <ShieldX className="text-red-500 w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <section id="analyzer" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Binciken Ingancin Token</h2>
          <p className="text-muted-foreground">Shigar da adireshin token na Smart Chain ko Ethereum domin bincike.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Shigar da adireshin token (0x...)" 
              className="pl-10 h-12"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <Button 
            size="lg" 
            className="h-12 px-8"
            onClick={handleAnalyze}
            disabled={isAnalyzing || !address}
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Ana Bincike...
              </>
            ) : "Bincika Yanzu"}
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="overflow-hidden border-2">
                <CardHeader className="bg-muted/50 pb-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-2xl">{result.name}</CardTitle>
                        <Badge variant="outline">{result.symbol}</Badge>
                      </div>
                      <CardDescription>Sakamakon bincike na karshe</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className={`text-4xl font-black ${getScoreColor(result.score)}`}>
                        {result.score}%
                      </div>
                      <div className="text-xs uppercase tracking-wider font-bold opacity-70">Makin Tsaro</div>
                    </div>
                  </div>
                  <Progress value={result.score} className="h-2 mt-6" />
                </CardHeader>
                <CardContent className="pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {result.metrics.map((metric, index) => (
                      <div key={index} className="p-4 rounded-xl border bg-card hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <div className="mt-1">{getStatusIcon(metric.status)}</div>
                          <div>
                            <h4 className="font-bold text-sm mb-1">{metric.label}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {metric.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 p-4 bg-primary/5 rounded-lg border border-primary/20 flex gap-3 items-start">
                    <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs text-primary-foreground/80 leading-relaxed italic">
                      Lura: Wannan binciken na na'ura ne kawai. Koyaushe ka yi naka binciken (DYOR) kafin ka saka kudi. Wannan ba shawarar kudi ba ce.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TokenAnalyzer;
