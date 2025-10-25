export interface Module {
  id: number;
  title: string;
  description: string;
  content: string;
  example: string;
  icon: string;
}

export const softwareQualityModules: Module[] = [
  {
    id: 1,
    title: "Pruebas de Software (Testing)",
    description: "Proceso sistemático de verificación y validación para asegurar que el software cumple con los requisitos especificados.",
    content: "Las pruebas de software son fundamentales para garantizar la calidad. Incluyen pruebas unitarias, de integración, funcionales y de aceptación. Según ISO/IEC 25010, las pruebas validan la funcionalidad, confiabilidad y eficiencia del software.",
    example: "Ejemplo: Para una aplicación de banca en línea, se realizan pruebas de seguridad para validar transacciones, pruebas de carga para simular miles de usuarios simultáneos, y pruebas de regresión después de cada actualización.",
    icon: "TestTube"
  },
  {
    id: 2,
    title: "Mantenibilidad",
    description: "Facilidad con la que un sistema puede ser modificado para corregir defectos, mejorar el rendimiento o adaptarse a cambios.",
    content: "La mantenibilidad es crucial para la vida útil del software. Incluye modularidad, reutilización, analizabilidad y modificabilidad. Un código bien documentado y estructurado reduce costos de mantenimiento hasta en un 40%.",
    example: "Ejemplo: Un sistema con arquitectura de microservicios permite actualizar el módulo de pagos sin afectar el resto de la aplicación, facilitando el mantenimiento continuo.",
    icon: "Wrench"
  },
  {
    id: 3,
    title: "Usabilidad",
    description: "Grado en que un producto puede ser usado por usuarios específicos para lograr objetivos con efectividad, eficiencia y satisfacción.",
    content: "La usabilidad según ISO 9241-11 se mide por la capacidad de aprendizaje, eficiencia de uso, facilidad de memorización, tasa de errores y satisfacción del usuario. Un buen diseño UX puede aumentar conversiones hasta un 200%.",
    example: "Ejemplo: Una aplicación educativa con navegación intuitiva, tutoriales integrados y retroalimentación visual permite que estudiantes de cualquier edad la usen sin capacitación previa.",
    icon: "Users"
  },
  {
    id: 4,
    title: "Rendimiento (Performance)",
    description: "Capacidad del sistema para responder dentro de tiempos aceptables bajo diferentes cargas de trabajo.",
    content: "El rendimiento se evalúa mediante tiempo de respuesta, throughput, utilización de recursos y capacidad. Según estudios, el 53% de usuarios abandona sitios que tardan más de 3 segundos en cargar.",
    example: "Ejemplo: Un e-commerce optimizado con CDN, caché y consultas eficientes puede manejar 10,000 transacciones por minuto durante Black Friday sin degradación del servicio.",
    icon: "Zap"
  },
  {
    id: 5,
    title: "Seguridad",
    description: "Protección de información y datos para que personas o sistemas no autorizados no puedan leerlos o modificarlos.",
    content: "La seguridad abarca confidencialidad, integridad, autenticación, autorización y no repudio. Incluye encriptación, gestión de accesos, auditorías y cumplimiento de normativas como GDPR e ISO 27001.",
    example: "Ejemplo: Una plataforma de salud implementa autenticación de dos factores, encriptación AES-256, y auditorías de acceso para proteger datos médicos sensibles según HIPAA.",
    icon: "Shield"
  },
  {
    id: 6,
    title: "Escalabilidad",
    description: "Capacidad del sistema para manejar crecimiento de usuarios, datos o transacciones sin pérdida de rendimiento.",
    content: "La escalabilidad puede ser vertical (más recursos) u horizontal (más instancias). Arquitecturas cloud-native con auto-scaling permiten adaptarse dinámicamente a la demanda.",
    example: "Ejemplo: Netflix escala horizontalmente agregando servidores automáticamente cuando millones de usuarios se conectan simultáneamente en horarios pico.",
    icon: "TrendingUp"
  },
  {
    id: 7,
    title: "Confiabilidad",
    description: "Capacidad del sistema para funcionar bajo condiciones establecidas durante un período determinado sin fallos.",
    content: "La confiabilidad se mide por MTBF (Mean Time Between Failures), MTTR (Mean Time To Repair), disponibilidad y tolerancia a fallos. Sistemas críticos requieren 99.99% de uptime.",
    example: "Ejemplo: Sistemas bancarios implementan redundancia, backups automáticos y failover para garantizar servicio 24/7 con disponibilidad del 99.999%.",
    icon: "CheckCircle"
  },
  {
    id: 8,
    title: "Portabilidad",
    description: "Facilidad con la que el software puede ser transferido de un entorno a otro (hardware, sistema operativo, etc.).",
    content: "La portabilidad incluye adaptabilidad, facilidad de instalación y co-existencia. Tecnologías como Docker y desarrollo responsive facilitan la portabilidad entre plataformas.",
    example: "Ejemplo: Una aplicación web responsive funciona perfectamente en Windows, Mac, Linux, iOS y Android sin necesidad de versiones específicas para cada plataforma.",
    icon: "Globe"
  }
];
