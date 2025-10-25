import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { softwareQualityModules } from "@/data/modules";
import { useState, useEffect } from "react";
import { CheckCircle, Lock, BookOpen, TestTube, Wrench, Users, Zap, Shield, TrendingUp, Globe } from "lucide-react";
import { toast } from "sonner";

const iconMap: Record<string, any> = {
  TestTube,
  Wrench,
  Users,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  Globe,
};

const Modules = () => {
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [allUnlocked, setAllUnlocked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("completedModules");
    if (saved) {
      const completed = JSON.parse(saved);
      setCompletedModules(completed);
      if (completed.length === softwareQualityModules.length) {
        setAllUnlocked(true);
      }
    }
  }, []);

  const isModuleUnlocked = (moduleId: number) => {
    if (allUnlocked) return true;
    if (moduleId === 1) return true;
    return completedModules.includes(moduleId - 1);
  };

  const completeModule = (moduleId: number) => {
    if (!completedModules.includes(moduleId)) {
      const updated = [...completedModules, moduleId];
      setCompletedModules(updated);
      localStorage.setItem("completedModules", JSON.stringify(updated));
      
      if (updated.length === softwareQualityModules.length) {
        setAllUnlocked(true);
        toast.success("¡Felicitaciones! Has completado todos los módulos. Ahora puedes acceder a cualquiera libremente.");
      } else {
        toast.success("¡Módulo completado! Siguiente módulo desbloqueado.");
      }
    }
  };

  const progress = (completedModules.length / softwareQualityModules.length) * 100;

  const selectedModuleData = selectedModule 
    ? softwareQualityModules.find(m => m.id === selectedModule)
    : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Módulos de Calidad de Software
          </h1>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Progreso: {completedModules.length} de {softwareQualityModules.length} módulos
              </span>
              <span className="font-semibold text-primary">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Module List */}
          <div className="lg:col-span-1 space-y-4">
            {softwareQualityModules.map((module) => {
              const unlocked = isModuleUnlocked(module.id);
              const completed = completedModules.includes(module.id);
              const Icon = iconMap[module.icon] || BookOpen;

              return (
                <Card
                  key={module.id}
                  className={`p-4 cursor-pointer transition-all duration-300 ${
                    !unlocked ? "opacity-50 cursor-not-allowed" : "hover:shadow-glow"
                  } ${selectedModule === module.id ? "ring-2 ring-primary" : ""}`}
                  onClick={() => unlocked && setSelectedModule(module.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      completed ? "bg-gradient-success" : "bg-gradient-primary"
                    }`}>
                      {completed ? (
                        <CheckCircle className="h-5 w-5 text-white" />
                      ) : unlocked ? (
                        <Icon className="h-5 w-5 text-white" />
                      ) : (
                        <Lock className="h-5 w-5 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1 truncate">
                        {module.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Module Content */}
          <div className="lg:col-span-2">
            {selectedModuleData ? (
              <Card className="p-6 md:p-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      {(() => {
                        const Icon = iconMap[selectedModuleData.icon] || BookOpen;
                        return (
                          <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        );
                      })()}
                      <div>
                        <h2 className="text-2xl font-bold">{selectedModuleData.title}</h2>
                        <p className="text-sm text-muted-foreground">Módulo {selectedModuleData.id} de {softwareQualityModules.length}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">{selectedModuleData.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Contenido del Módulo</h3>
                      <p className="text-foreground leading-relaxed">{selectedModuleData.content}</p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        Ejemplo Práctico
                      </h4>
                      <p className="text-sm text-foreground">{selectedModuleData.example}</p>
                    </div>
                  </div>

                  {!completedModules.includes(selectedModuleData.id) && (
                    <Button 
                      onClick={() => completeModule(selectedModuleData.id)}
                      className="w-full md:w-auto shadow-glow"
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Marcar como Completado
                    </Button>
                  )}

                  {completedModules.includes(selectedModuleData.id) && (
                    <div className="flex items-center gap-2 text-secondary">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-semibold">Módulo Completado</span>
                    </div>
                  )}
                </div>
              </Card>
            ) : (
              <Card className="p-8 md:p-12">
                <div className="text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-muted mx-auto flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Selecciona un módulo</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Elige un módulo de la lista para comenzar a aprender sobre calidad de software 
                    con estándares internacionales
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
