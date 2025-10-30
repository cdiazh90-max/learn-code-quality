import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { ClipboardCheck, Download, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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

    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const overallScore = calculateOverallScore();
      
      // Header
      doc.setFillColor(59, 130, 246);
      doc.rect(0, 0, pageWidth, 40, 'F');
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(24);
      doc.text("EduSoftware", pageWidth / 2, 15, { align: 'center' });
      
      doc.setFontSize(16);
      doc.text("Reporte de Evaluación Manual", pageWidth / 2, 28, { align: 'center' });
      
      // Site info
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(12);
      let yPos = 50;
      doc.text(`Sitio: ${siteName}`, 20, yPos);
      yPos += 7;
      doc.text(`URL: ${url}`, 20, yPos);
      yPos += 7;
      doc.text(`Fecha: ${new Date().toLocaleString('es-CO')}`, 20, yPos);
      yPos += 15;
      
      // Overall score box
      doc.setFillColor(240, 240, 240);
      doc.roundedRect(20, yPos, pageWidth - 40, 30, 3, 3, 'F');
      doc.setFontSize(14);
      doc.text("Puntuación General:", 25, yPos + 12);
      doc.setFontSize(28);
      doc.setTextColor(59, 130, 246);
      doc.text(`${overallScore}/10`, pageWidth / 2, yPos + 20, { align: 'center' });
      
      yPos += 40;
      
      // Bar chart
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(14);
      doc.text("Puntuaciones por Criterio", 20, yPos);
      yPos += 10;
      
      const chartHeight = 80;
      const barWidth = (pageWidth - 50) / criteria.length;
      const maxScore = 10;
      
      criteria.forEach((criterion, index) => {
        const score = scores[criterion.id];
        const barHeight = (score / maxScore) * chartHeight;
        const xPos = 20 + (index * barWidth) + 5;
        
        // Draw bar with color based on score
        if (score >= 8) {
          doc.setFillColor(34, 197, 94); // green
        } else if (score >= 6) {
          doc.setFillColor(59, 130, 246); // blue
        } else if (score >= 4) {
          doc.setFillColor(234, 179, 8); // yellow
        } else {
          doc.setFillColor(239, 68, 68); // red
        }
        
        doc.rect(xPos, yPos + chartHeight - barHeight, barWidth - 10, barHeight, 'F');
        
        // Score label
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(`${score}`, xPos + (barWidth - 10) / 2, yPos + chartHeight - barHeight - 3, { align: 'center' });
      });
      
      // X-axis labels
      doc.setFontSize(7);
      criteria.forEach((criterion, index) => {
        const xPos = 20 + (index * barWidth) + 5;
        const words = criterion.name.split(' ');
        words.forEach((word, i) => {
          doc.text(word, xPos + (barWidth - 10) / 2, yPos + chartHeight + 8 + (i * 3), { align: 'center' });
        });
      });
      
      yPos += chartHeight + 25;
      
      // Detailed scores table
      doc.setFontSize(14);
      doc.text("Detalle de Evaluación", 20, yPos);
      yPos += 5;
      
      autoTable(doc, {
        startY: yPos,
        head: [['Criterio', 'Puntuación', 'Descripción']],
        body: criteria.map((criterion) => [
          criterion.name,
          `${scores[criterion.id]}/10`,
          criterion.description
        ]),
        headStyles: { fillColor: [59, 130, 246] },
        alternateRowStyles: { fillColor: [245, 245, 245] },
      });
      
      // Rating guide
      yPos = (doc as any).lastAutoTable.finalY + 15;
      doc.setFontSize(14);
      doc.text("Guía de Puntuación", 20, yPos);
      yPos += 7;
      
      doc.setFontSize(10);
      doc.text("1-3: Muy deficiente", 25, yPos);
      yPos += 6;
      doc.text("4-6: Aceptable", 25, yPos);
      yPos += 6;
      doc.text("7-8: Bueno", 25, yPos);
      yPos += 6;
      doc.text("9-10: Excelente", 25, yPos);
      
      // Footer
      doc.setFontSize(8);
      doc.setTextColor(128, 128, 128);
      doc.text("Generado por EduSoftware - Basado en ISO/IEC 25010", pageWidth / 2, doc.internal.pageSize.getHeight() - 10, { align: 'center' });
      
      doc.save(`evaluacion-manual-${siteName.replace(/\s+/g, '-')}.pdf`);
      toast.success("PDF descargado exitosamente");
    } catch (error) {
      console.error("Error generando PDF:", error);
      toast.error("Error al generar el PDF");
    }
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
