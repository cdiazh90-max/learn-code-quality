import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    // Simulación de envío
    toast.success("¡Mensaje enviado exitosamente! Te contactaremos pronto.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container py-12 md:py-16">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Contáctenos</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes preguntas, sugerencias o necesitas soporte? Estamos aquí para ayudarte
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      contacto@edusoftware.co
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-sm text-muted-foreground">
                      +57 (1) 234-5678
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ubicación</h3>
                    <p className="text-sm text-muted-foreground">
                      Bogotá, Colombia
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-primary text-white">
                <h3 className="font-semibold mb-2">Horario de Atención</h3>
                <p className="text-sm opacity-90">
                  Lunes a Viernes<br />
                  8:00 AM - 6:00 PM (COT)
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="md:col-span-2 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full md:w-auto shadow-glow">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">¿La plataforma es gratuita?</h3>
                <p className="text-muted-foreground text-sm">
                  Sí, EduSoftware es completamente gratuito para estudiantes y educadores.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">¿Ofrecen certificados?</h3>
                <p className="text-muted-foreground text-sm">
                  Puedes generar reportes PDF con métricas de evaluación basadas en normas internacionales.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">¿Cómo funciona la evaluación con IA?</h3>
                <p className="text-muted-foreground text-sm">
                  Nuestra IA analiza sitios web basándose en criterios de calidad de software ISO/IEC 25010 
                  y genera reportes detallados automáticamente.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
