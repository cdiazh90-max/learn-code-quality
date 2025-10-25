import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Award, Target, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Quiénes Somos
            </h1>
            <p className="text-xl text-muted-foreground">
              Desarrollo colombiano comprometido con la excelencia educativa
            </p>
          </div>

          {/* Mission */}
          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Nuestra Misión</h2>
                <p className="text-muted-foreground leading-relaxed">
                  EduSoftware es una plataforma educativa 100% colombiana diseñada para democratizar 
                  el acceso a conocimientos de calidad en ingeniería de software. Nuestro objetivo es 
                  proporcionar herramientas de aprendizaje de clase mundial que cumplan con los más 
                  altos estándares internacionales de calidad, incluyendo normas ISO/IEC 25010 y mejores 
                  prácticas de la industria.
                </p>
              </div>
            </div>
          </Card>

          {/* Values */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Calidad Internacional</h3>
              </div>
              <p className="text-muted-foreground">
                Todos nuestros contenidos están alineados con estándares internacionales como 
                ISO/IEC 25010, IEEE, y mejores prácticas de la industria global del software.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Enfoque Estudiantil</h3>
              </div>
              <p className="text-muted-foreground">
                Diseñado por educadores para estudiantes, con una interfaz intuitiva y contenido 
                progresivo que facilita el aprendizaje autónomo y efectivo.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-success flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Pasión por Enseñar</h3>
              </div>
              <p className="text-muted-foreground">
                Creemos en el poder transformador de la educación y nos apasiona crear 
                herramientas que inspiren a la próxima generación de ingenieros de software.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-success flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Innovación Constante</h3>
              </div>
              <p className="text-muted-foreground">
                Incorporamos las últimas tecnologías, incluyendo inteligencia artificial, 
                para ofrecer experiencias de aprendizaje únicas y evaluaciones precisas.
              </p>
            </Card>
          </div>

          {/* Origin */}
          <Card className="p-8 bg-gradient-primary text-white">
            <h2 className="text-2xl font-bold mb-4">Origen Colombiano</h2>
            <p className="leading-relaxed mb-4">
              EduSoftware nace en Colombia como respuesta a la necesidad de herramientas educativas 
              de calidad en español que cumplan con estándares internacionales. Desarrollado por 
              profesionales colombianos con experiencia en educación y desarrollo de software, 
              nuestra plataforma combina el talento local con visión global.
            </p>
            <p className="leading-relaxed opacity-90">
              Estamos comprometidos con el fortalecimiento del ecosistema tecnológico colombiano 
              y latinoamericano, proporcionando recursos que preparan a estudiantes y profesionales 
              para competir en la industria global del software.
            </p>
          </Card>

          {/* Standards Compliance */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Cumplimiento de Estándares</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong className="text-foreground">ISO/IEC 25010:</strong> Modelo de calidad del producto software
              </p>
              <p>
                <strong className="text-foreground">IEEE 829:</strong> Estándar para documentación de pruebas de software
              </p>
              <p>
                <strong className="text-foreground">ISO 9241-11:</strong> Guía de usabilidad
              </p>
              <p>
                <strong className="text-foreground">ISO/IEC 27001:</strong> Gestión de seguridad de la información
              </p>
              <p className="pt-2">
                Nuestra plataforma está diseñada siguiendo estos estándares, asegurando que 
                tanto el contenido educativo como la aplicación misma sean ejemplos de calidad de software.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
