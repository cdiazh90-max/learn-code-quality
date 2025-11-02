import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { PlayCircle, Upload } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Video = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Video Tutorial</h1>
            <p className="text-xl text-muted-foreground">
              Aprende visualmente sobre calidad de software
            </p>
          </div>

          {/* Video Container */}
          <Card className="p-0 overflow-hidden">
            <div className="aspect-video bg-muted">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/PKvBwcL5RZU" 
                title="Video Tutorial - Calidad de Software"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </Card>


          {/* Video Description */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Sobre el Video Tutorial</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                El video tutorial complementa los módulos de aprendizaje proporcionando una 
                explicación visual y dinámica de los conceptos clave de calidad de software.
              </p>
              <p>
                En este espacio se puede incluir:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Introducción a los estándares ISO/IEC 25010</li>
                <li>Demostración de uso de la plataforma</li>
                <li>Casos de estudio reales</li>
                <li>Mejores prácticas en evaluación de calidad</li>
                <li>Ejemplos de aplicación de métricas</li>
              </ul>
            </div>
          </Card>

          {/* Technical Instructions */}
          <Card className="p-8 bg-muted/50">
            <h3 className="text-xl font-semibold mb-4">Instrucciones Técnicas para Cargar Video</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><strong>Opción 1 - YouTube/Vimeo:</strong></p>
              <code className="block bg-background p-3 rounded text-xs overflow-x-auto">
                {`<iframe 
  width="100%" 
  height="480" 
  src="https://www.youtube.com/embed/TU_VIDEO_ID" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen
></iframe>`}
              </code>
              
              <p className="pt-2"><strong>Opción 2 - Video HTML5:</strong></p>
              <code className="block bg-background p-3 rounded text-xs overflow-x-auto">
                {`<video controls width="100%">
  <source src="/ruta/a/tu/video.mp4" type="video/mp4" />
  Tu navegador no soporta el elemento de video.
</video>`}
              </code>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Video;
