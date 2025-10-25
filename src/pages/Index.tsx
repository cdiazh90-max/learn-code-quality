import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Brain, Award } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container relative py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Award className="h-4 w-4" />
                Plataforma Educativa Certificada
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Aprende{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Calidad de Software
                </span>{" "}
                con Estándares Internacionales
              </h1>
              <p className="text-lg text-muted-foreground">
                EduSoftware es tu plataforma completa para dominar los conceptos fundamentales 
                de calidad de software según normas ISO/IEC 25010. Aprende, evalúa y certifica 
                tus conocimientos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/modules">
                  <Button size="lg" className="w-full sm:w-auto shadow-glow">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Comenzar Módulos
                  </Button>
                </Link>
                <Link to="/ai-evaluation">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Brain className="mr-2 h-5 w-5" />
                    Evaluación con IA
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={heroImage} 
                alt="Educación en Calidad de Software" 
                className="relative rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué elegir EduSoftware?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Una plataforma completa diseñada para estudiantes y profesionales 
              que buscan excelencia en calidad de software
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">8 Módulos Progresivos</h3>
              <p className="text-muted-foreground">
                Aprende desde testing hasta portabilidad con contenido estructurado 
                y ejemplos prácticos del mundo real.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Evaluación Inteligente</h3>
              <p className="text-muted-foreground">
                Sistema de evaluación con IA que analiza sitios web reales y genera 
                reportes detallados según normas internacionales.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certificación Internacional</h3>
              <p className="text-muted-foreground">
                Genera reportes en PDF con métricas basadas en ISO/IEC 25010 
                para validar tus evaluaciones.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="p-8 md:p-12 bg-gradient-primary text-white">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Comienza tu viaje hacia la excelencia
              </h2>
              <p className="text-lg opacity-90">
                Únete a miles de estudiantes y profesionales que ya están 
                dominando los estándares de calidad de software
              </p>
              <Link to="/modules">
                <Button size="lg" variant="secondary" className="shadow-lg">
                  Explorar Módulos Ahora
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
