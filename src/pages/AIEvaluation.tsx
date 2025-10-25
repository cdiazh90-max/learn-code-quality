import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Brain, Globe, Download, Loader2 } from "lucide-react";
import { toast } from "sonner";

const AIEvaluation = () => {
  const [url, setUrl] = useState("");
  const [siteName, setSiteName] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const evaluationCriteria = [
    { name: "Funcionalidad", description: "Cumplimiento de requisitos funcionales" },
    { name: "Usabilidad", description: "Facilidad de uso e interfaz intuitiva" },
    { name: "Rendimiento", description: "Tiempo de carga y respuesta" },
    { name: "Seguridad", description: "Protección de datos y comunicaciones" },
    { name: "Mantenibilidad", description: "Facilidad de actualización y modificación" },
    { name: "Portabilidad", description: "Adaptabilidad a diferentes entornos" },
    { name: "Confiabilidad", description: "Estabilidad y tolerancia a fallos" },
    { name: "Accesibilidad", description: "Cumplimiento de estándares WCAG" },
  ];

  const handleAnalysis = async () => {
    if (!url || !siteName) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    if (!url.match(/^https?:\/\/.+/)) {
      toast.error("Por favor ingresa una URL válida (http:// o https://)");
      return;
    }

    setIsAnalyzing(true);
    
    try {
      // Simulación de análisis por IA
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const mockResults = {
        siteName,
        url,
        overallScore: Math.floor(Math.random() * 3) + 7, // 7-10
        scores: evaluationCriteria.map(criteria => ({
          name: criteria.name,
          score: Math.floor(Math.random() * 3) + 7, // 7-10
          description: criteria.description,
        })),
        timestamp: new Date().toLocaleString('es-CO'),
        recommendations: [
          "Optimizar tiempos de carga de recursos estáticos",
          "Implementar HTTPS en todas las páginas",
          "Mejorar contraste de colores para accesibilidad",
          "Añadir atributos alt a todas las imágenes",
        ],
      };

      setResults(mockResults);
      toast.success("Análisis completado con éxito");
    } catch (error) {
      toast.error("Error al realizar el análisis");
      console.error(error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const generatePDF = () => {
    toast.info("Funcionalidad de PDF en desarrollo");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container py-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-primary mb-4">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Evaluación con IA
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Analiza automáticamente la calidad de un sitio web usando inteligencia artificial.
            Basado en estándares internacionales ISO/IEC 25010.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Datos del Sitio Web
            </h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="siteName">Nombre del Sitio</Label>
                <Input
                  id="siteName"
                  placeholder="Ej: Portal Educativo XYZ"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  disabled={isAnalyzing}
                />
              </div>

              <div>
                <Label htmlFor="url">URL del Sitio</Label>
                <Input
                  id="url"
                  placeholder="https://ejemplo.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isAnalyzing}
                />
              </div>

              <Button 
                onClick={handleAnalysis} 
                disabled={isAnalyzing}
                className="w-full shadow-glow"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analizando...
                  </>
                ) : (
                  <>
                    <Brain className="mr-2 h-4 w-4" />
                    Analizar con IA
                  </>
                )}
              </Button>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-2 text-sm">Criterios de Evaluación</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                {evaluationCriteria.map((criteria, i) => (
                  <li key={i}>• {criteria.name}</li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Results Section */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Resultados del Análisis</h2>
            
            {!results && !isAnalyzing && (
              <div className="text-center py-12 text-muted-foreground">
                <Brain className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Ingresa los datos y presiona "Analizar con IA" para comenzar</p>
              </div>
            )}

            {isAnalyzing && (
              <div className="text-center py-12">
                <Loader2 className="h-12 w-12 mx-auto mb-4 animate-spin text-primary" />
                <p className="text-muted-foreground">Analizando el sitio web...</p>
                <Progress value={66} className="mt-4" />
              </div>
            )}

            {results && (
              <div className="space-y-6">
                <div className="text-center pb-6 border-b">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {results.overallScore}/10
                  </div>
                  <p className="text-sm text-muted-foreground">Puntuación General</p>
                  <p className="text-xs text-muted-foreground mt-1">{results.timestamp}</p>
                </div>

                <div className="space-y-3">
                  {results.scores.map((score: any, i: number) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{score.name}</span>
                        <span className="text-sm text-primary font-semibold">{score.score}/10</span>
                      </div>
                      <Progress value={score.score * 10} className="h-2" />
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-semibold mb-2">Recomendaciones</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {results.recommendations.map((rec: string, i: number) => (
                      <li key={i}>• {rec}</li>
                    ))}
                  </ul>
                </div>

                <Button onClick={generatePDF} variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar Reporte PDF
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIEvaluation;
