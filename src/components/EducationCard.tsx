import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

const EducationCard = () => {
  const resources = [
    {
      title: "Menene Rug Pull?",
      description: "Wannan shine lokacin da masu kirkirar token suka kwashe dukkan kudin ruwa (liquidity) suka gudu, wanda hakan zai bar masu zuba jari da tokens marasa amfani.",
      icon: <AlertTriangle className="text-red-500" />,
      color: "bg-red-500/10 border-red-500/20"
    },
    {
      title: "Honeypot Scam",
      description: "Wannan wani irin tarko ne inda za ka iya sayen token amma ba za ka iya sayarwa ba. Smart contract din ne aka tsara shi don ya ki yarda a sayar.",
      icon: <Zap className="text-yellow-500" />,
      color: "bg-yellow-500/10 border-yellow-500/20"
    },
    {
      title: "Amfanin Kulle Liquidity",
      description: "Idan kudin ruwa (liquidity) yana a kulle, hakan yana rage yiwuwar rug pull domin masu kirkirar token ba za su iya kwashe kudin ba nan take.",
      icon: <ShieldCheck className="text-green-500" />,
      color: "bg-green-500/10 border-green-500/20"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Ilimantarwa game da Crypto</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Koyi yadda zaka gane dabarun damfara da kuma yadda zaka kare kanka a duniyar cryptocurrency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res, index) => (
            <Card key={index} className={`border-2 ${res.color} hover:shadow-lg transition-all`}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 shadow-sm">
                  {res.icon}
                </div>
                <CardTitle>{res.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {res.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationCard;
