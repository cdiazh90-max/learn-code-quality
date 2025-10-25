import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { ClipboardCheck, Download, RotateCcw } from "lucide-react";
import { toast } from "sonner";

const ManualEvaluation = () => {
  const [url, setUrl] = useState("");
  const [siteName, setSiteName] = useState("");
  const [scores, setScores] = useState<{ [key: string]: number }>({
    functionality: 5,
    usability: 5,
    performance: 5,
    security: 5,
    maintainability: 5,
    portability: 5,
    reliability: 5,
    accessibility: 5,
  });

  const criteria = [
    { 
      id: "functionality", 
      name: "Funcionalidad", 
      description: "Cumplimiento de requisitos funcionales y características del software",
      details: "¿El software cumple con todas las funciones especificadas?"
    },
    { 
      id: "usability", 
      name: "Usabilidad", 
      description: "Facilidad de uso, comprensión y aprendizaje",
      details: "¿Es fácil de usar e intuitivo para los usuarios?"
    },
    { 
      id: "performance", 
      name: "Rendimiento", 
      description: "Tiempo de respuesta, capacidad y eficiencia en el uso de recursos",
      details: "¿Responde rápidamente y usa eficientemente los recursos?"
    },
    { 
      id: "security", 
      name: "Seguridad", 
      description: "Protección de datos, autenticación y autorización",
      details: "¿Protege adecuadamente los datos y el acceso?"
    },
    { 
      id: "maintainability", 
      name: "Mantenibilidad", 
      description: "Facilidad para modificar, actualizar y corregir errores",
      details: "¿Es fácil de mantener y actualizar?"
    },
    { 
      id: "portability", 
      name: "Portabilidad", 
      description: "Capacidad de adaptarse a diferentes entornos y plataformas",
      details: "¿Funciona bien en diferentes entornos?"
    },
    { 
      id: "reliability", 
      name: "Confiabilidad", 
      description: "Capacidad de mantener su nivel de rendimiento bajo condiciones establecidas",
      details: "¿Es estable y funciona sin fallos?"
    },
    { 
      id: "accessibility", 
      name: "Accesibilidad", 
      description: "Facilidad de uso para personas con diferentes capacidades",
      details: "¿Cumple con estándares de accesibilidad (WCAG)?"
    },
  ];

  const handleScoreChange = (criteriaId: string, value: number[]) => {
    setScores(prev => ({ ...prev, [criteriaId]: value[0] }));
  };

  const calculateOverallScore = () => {
    const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
    return (total / Object.keys(scores).length).toFixed(1);
  };

  const handleSubmit = () => {
    if (!url || !siteName) {
      toast.error("Por favor completa el nombre y URL del sitio");
      return;
    }

    toast.success("Evaluación guardada exitosamente");
  };

  const handleReset = () => {
    setScores({
      functionality: 5,
      usability: 5,
      performance: 5,
      security: 5,
      maintainability: 5,
      portability: 5,
      reliability: 5,
      accessibility: 5,
    });
    setUrl("");
    setSiteName("");
    toast.info("Formulario reiniciado");
  };

  const generatePDF = () => {
    if (!url || !siteName) {
      toast.error("Completa la evaluación antes de generar el PDF");
      return;
    }
    toast.info("Funcionalidad de PDF en desarrollo");
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-secondary";
    if (score >= 6) return "text-primary";
    if (score >= 4) return "text-yellow-600";
    return "text-destructive";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container py-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-primary mb-4">
            <ClipboardCheck className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Evaluación Manual
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Evalúa manualmente la calidad de un sitio web según criterios internacionales.
            Basado en el modelo de calidad ISO/IEC 25010.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Site Info & Overall Score */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Información del Sitio</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="siteName">Nombre del Sitio</Label>
                  <Input
                    id="siteName"
                    placeholder="Ej: Portal Educativo"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="url">URL del Sitio</Label>
                  <Input
                    id="url"
                    placeholder="https://ejemplo.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground">
                PUNTUACIÓN GENERAL
              </h3>
              <div className={`text-6xl font-bold mb-2 ${getScoreColor(parseFloat(calculateOverallScore()))}`}>
                {calculateOverallScore()}
              </div>
              <p className="text-sm text-muted-foreground">de 10 puntos</p>
              
              <div className="mt-6 pt-6 border-t space-y-2">
                <Button onClick={handleSubmit} className="w-full shadow-glow">
                  Guardar Evaluación
                </Button>
                <Button onClick={generatePDF} variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar PDF
                </Button>
                <Button onClick={handleReset} variant="ghost" className="w-full">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reiniciar
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column - Criteria Evaluation */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Criterios de Evaluación</h2>
              
              <div className="space-y-8">
                {criteria.map((criterion) => (
                  <div key={criterion.id} className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{criterion.name}</h3>
                        <p className="text-sm text-muted-foreground">{criterion.description}</p>
                        <p className="text-xs text-muted-foreground mt-1 italic">
                          {criterion.details}
                        </p>
                      </div>
                      <div className={`text-3xl font-bold ml-4 ${getScoreColor(scores[criterion.id])}`}>
                        {scores[criterion.id]}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground min-w-8">1</span>
                      <Slider
                        value={[scores[criterion.id]]}
                        onValueChange={(value) => handleScoreChange(criterion.id, value)}
                        min={1}
                        max={10}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground min-w-8">10</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2 text-sm">Guía de Puntuación</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-destructive">1-3:</span> Muy deficiente
                  </div>
                  <div>
                    <span className="font-semibold text-yellow-600">4-6:</span> Aceptable
                  </div>
                  <div>
                    <span className="font-semibold text-primary">7-8:</span> Bueno
                  </div>
                  <div>
                    <span className="font-semibold text-secondary">9-10:</span> Excelente
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualEvaluation;
