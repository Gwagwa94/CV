const translations = {
  fr: {
    backButton: "Retour",
    header: {
      name: "Grégoire Baumann",
      title: "Étudiant Ingénieur en Informatique",
      schoolInfo: "Polytech Nancy, 5ème année, France | IA2R (Informatique, Automatique, Robotique et Réseaux)",
      programInfo: "Programme SIR (Systèmes d'Information et Réseaux)"
    },
    contact: {
      location: "Nancy (54) | Saint-Maur-des-Fossés (94) FRANCE",
      phoneFr: "Phone/SMS/WhatsApp: (+33) 06 14 47 66 27",
      phoneEs: "Phone/SMS: (+34) 633 681 593",
      email: "Email: gregoirebaumann94@gmail.com",
      linkedin: "LinkedIn: linkedin.com/in/gregoire-baumann/",
      onlineCV: "CV en ligne: gwagwa94.github.io/CV"
    },
    nav: {
      about: "À Propos",
      experience: "Expérience",
      education: "Formation",
      skills: "Compétences",
      hobbies: "Centres d'Intérêt",
      onePageTitle: "Version one-page:"
    },
    about: {
      title: "À Propos",
      text: "Je suis un étudiant ingénieur en informatique passionné par le développement logiciel, les systèmes embarqués et l'intelligence artificielle. Actuellement en 5ème année à Polytech Nancy, je me spécialise en Informatique, Automatique, Robotique et Réseaux (IA2R), avec un focus sur les Systèmes d'Information et Réseaux (SIR). Je recherche des opportunités pour appliquer mes compétences et apprendre de nouvelles technologies."
    },
    skills: {
      title: "Compétences",
      programmingLanguages: {
        title: "Langages de Programmation",
        items: [
          "C, C++",
          "JS, TS (React, React Native, Next)",
          "Python (Flask, Machine Learning: PyTorch, SciKit (bases))",
          "HTML, CSS",
          "Java (Spring)",
          "SQL"
        ]
      },
      embeddedSystems: {
        title: "Systèmes Embarqués",
        items: [
          "CAN bus",
          "Arduino, STM32, Raspberry Pi"
        ]
      },
      toolsTech: {
        title: "Outils & Technologies",
        items: [
          "Git (Github, Gitlab, BitBucket) CLI/GUI",
          "Docker",
          "GCP (Database, OAuth 2.0, administration)",
          "Jetbrains IDEs"
        ]
      },
      conceptsMethods: {
        title: "Concepts & Méthodologies",
        items: [
          "Architecture et administration réseau (Cisco)",
          "Traitement du signal",
          "Programmation linéaire et non linéaire",
          "AGILE, SOLID, KISS, DRY principles"
        ]
      },
      languages: {
        title: "Langues",
        items: [
          "Français - Langue maternelle",
          "Anglais - 900 TOEIC",
          "Espagnol - En cours d'apprentissage (~A2 -> B1)",
          "Italien - Bases",
          "Allemand - Bases"
        ]
      }
    },
    experience: {
      title: "Expérience",
      items: [
        {
          company: "NRG Consulting, Madrid",
          role: "Stagiaire Développeur Ingénieur",
          period: "MAR - SEP 2025",
          description: [
            "Développement de logiciels pour le stockage et le traitement d'indicateurs de trading.",
            "Conception d'un programme exécutable permettant l'acquisition de données (internet, base de données), la modélisation mathématique et l'optimisation.",
            "Application des principes SOLID, KISS, DRY. Langages utilisés : Python et SQL."
          ]
        },
        {
          company: "RATP, Fontenay-sous-Bois (94)",
          role: "Stage Assistant Ingénieur",
          period: "AVR - AOÛT 2024",
          description: [
            "Développement d'une application web interne facilitant l'utilisation d'algorithmes d'optimisation Python.",
            "Mise en place d'une interface graphique interactive pour agir directement sur les entrées et les résultats de l'algorithme.",
            "Technologies utilisées : React.js et Flask."
          ]
        },
        {
          company: "Polytech Services Nancy",
          role: "Responsable des Services et Systèmes Informatiques",
          period: "SEP 2022 - JUIN 2023",
          description: [
            "Gestion et maintenance des infrastructures et services informatiques de la junior entreprise.",
            "Participation active à la mise en place et à l'optimisation des outils digitaux.",
            "Participation aux discussions administratives en tant que membre du bureau."
          ]
        },
        {
          company: "Robotech School Project — Division IT",
          role: "Projet Scolaire",
          period: "2023",
          description: [
            "Programmation de contrôleurs STM32.",
            "Application de la Programmation Orientée Objet (C, C++).",
            "Résolution de problèmes en équipe et compréhension approfondie du fonctionnement d'un contrôleur dans le cadre des systèmes embarqués."
          ]
        },
        {
          company: "Explique-moi Pythagore, Saint-Maur-des-Fossés (94)",
          role: "Stage d'immersion en entreprise",
          period: "Été 2021",
          description: [
            "Développement d'applications web et mobiles pour l'organisation de cours de soutien scolaire à domicile.",
            "Technologies utilisées : React.js et React Native."
          ]
        }
      ]
    },
    education: {
      title: "Formation",
      items: [
        {
          school: "Polytech Nancy, Vandœuvre-lès-Nancy",
          degree: "Ingénieur en Informatique",
          period: "2022-2025",
          details: [
            "Spécialité IA2R (Informatique, Automatique, Robótica et Réseaux)",
            "Programme SIR (Systèmes d'Information et Réseaux)"
          ]
        },
        {
          school: "Polytech Sorbonne, Paris",
          degree: "Programme Préparatoire Intégré (PEIP)",
          period: "2020-2022",
          details: [
            "Parcours des Écoles d'Ingénieurs Polytech"
          ]
        },
        {
          school: "Lycée François Mansart, Saint-Maur-des-Fossés",
          degree: "Baccalauréat Scientifique, Spécialité Sciences de l'Ingénieur",
          period: "2018-2020",
          details: [
            "Mention Bien"
          ]
        }
      ]
    },
    hobbies: {
      title: "Centres d'Intérêt",
      items: [
        "J'aime beaucoup la musique. Je joue de la guitare depuis plus de 10 ans.",
        "J'ai pratiqué différents sports (escrime, karaté, voile, etc.).",
        "J'aime jouer aux échecs, aux jeux vidéo et discuter avec mes amis.",
        "Cette année, j'ai commencé la salle de sport."
      ]
    }
  },
  es: {
    backButton: "Volver",
    header: {
      name: "Grégoire Baumann",
      title: "Estudiante de Ingeniería Informática",
      schoolInfo: "Polytech Nancy, 5º año, Francia | IA2R (Informática, Automática, Robótica y Redes)",
      programInfo: "Programa SIR (Sistemas de Información y Redes)"
    },
    contact: {
      location: "Nancy (54) | Saint-Maur-des-Fossés (94) FRANCIA",
      phoneFr: "Teléfono/SMS/WhatsApp: (+33) 06 14 47 66 27",
      phoneEs: "Teléfono/SMS: (+34) 633 681 593",
      email: "Correo electrónico: gregoirebaumann94@gmail.com",
      linkedin: "LinkedIn: linkedin.com/in/gregoire-baumann/",
      onlineCV: "CV en línea: gwagwa94.github.io/CV"
    },
    nav: {
      about: "Acerca de",
      experience: "Experiencia",
      education: "Formación",
      skills: "Habilidades",
      hobbies: "Intereses",
      onePageTitle: "Versión one-page",
    },
    about: {
      title: "Acerca de",
      text: "Soy un estudiante de ingeniería informática apasionado por el desarrollo de software, los sistemas embebidos y la inteligencia artificial. Actualmente en mi 5º año en Polytech Nancy, me especializo en Informática, Automática, Robótica y Redes (IA2R), con un enfoque en Sistemas de Información y Redes (SIR). Busco oportunidades para aplicar mis habilidades y aprender nuevas tecnologías."
    },
    skills: {
      title: "Habilidades",
      programmingLanguages: {
        title: "Lenguajes de Programación",
        items: [
          "C, C++",
          "JS, TS (React, React Native, Next)",
          "Python (Flask, Machine Learning: PyTorch, SciKit (básico))",
          "HTML, CSS",
          "Java (Spring)",
          "SQL"
        ]
      },
      embeddedSystems: {
        title: "Sistemas Embebidos",
        items: [
          "CAN bus",
          "Arduino, STM32, Raspberry Pi"
        ]
      },
      toolsTech: {
        title: "Herramientas y Tecnologías",
        items: [
          "Git (Github, Gitlab, BitBucket) CLI/GUI",
          "Docker",
          "GCP (Base de Datos, OAuth 2.0, administración)",
          "IDEs Jetbrains"
        ]
      },
      conceptsMethods: {
        title: "Conceptos y Metodologías",
        items: [
          "Arquitectura y administración de red (Cisco)",
          "Procesamiento de señales",
          "Programación lineal y no lineal",
          "Principios AGILE, SOLID, KISS, DRY"
        ]
      },
      languages: {
        title: "Idiomas",
        items: [
          "Francés - Lengua materna",
          "Inglés - 900 TOEIC",
          "Español - En aprendizaje (~A2 -> B1)",
          "Italiano - Básico",
          "Alemán - Básico"
        ]
      }
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          company: "NRG Consulting, Madrid",
          role: "Becario Ingeniero Desarrollador",
          period: "MAR - SEP 2025",
          description: [
            "Desarrollo de software para el almacenamiento y tratamiento de indicadores de trading.",
            "Diseño de un programa ejecutable que permite la adquisición de datos (internet, base de datos), modelado matemático y optimización.",
            "Aplicación de los principios SOLID, KISS, DRY. Lenguajes utilizados: Python y SQL."
          ]
        },
        {
          company: "RATP, Fontenay-sous-Bois (94)",
          role: "Prácticas de Ingeniero Asistente",
          period: "ABR - AGO 2024",
          description: [
            "Desarrollo de una aplicación web interna para facilitar el uso de algoritmos de optimización en Python.",
            "Implementación de una interfaz gráfica interactiva para actuar directamente sobre las entradas y los resultados del algoritmo.",
            "Tecnologías utilizadas: React.js y Flask."
          ]
        },
        {
          company: "Polytech Services Nancy",
          role: "Responsable de Servicios y Sistemas Informáticos",
          period: "SEP 2022 - JUN 2023",
          description: [
            "Gestión y mantenimiento de las infraestructuras y servicios informáticos de la junior empresa.",
            "Participación activa en la implementación y optimización de herramientas digitales.",
            "Participación en discusiones administrativas como miembro de la junta directiva."
          ]
        },
        {
          company: "Proyecto Escolar Robotech — División IT",
          role: "Proyecto Escolar",
          period: "2023",
          description: [
            "Programación de controladores STM32.",
            "Aplicación de la Programación Orientada a Objetos (C, C++).",
            "Resolución de problemas en equipo y comprensión profunda del funcionamiento de un controlador en el contexto de sistemas embebidos."
          ]
        },
        {
          company: "Explique-moi Pythagore, Saint-Maur-des-Fossés (94)",
          role: "Prácticas de inmersión en empresa",
          period: "Verano 2021",
          description: [
            "Desarrollo de aplicaciones web y móviles para la organización de clases particulares a domicilio.",
            "Tecnologías utilizadas: React.js y React Native."
          ]
        }
      ]
    },
    education: {
      title: "Formación",
      items: [
        {
          school: "Polytech Nancy, Vandœuvre-lès-Nancy",
          degree: "Ingeniero en Informática",
          period: "2022-2025",
          details: [
            "Especialidad IA2R (Informática, Automática, Robótica y Redes)",
            "Programa SIR (Sistemas de Información y Redes)"
          ]
        },
        {
          school: "Polytech Sorbonne, París",
          degree: "Programa Preparatorio Integrado (PEIP)",
          period: "2020-2022",
          details: [
            "Recorrido de las Escuelas de Ingeniería Polytech"
          ]
        },
        {
          school: "Lycée François Mansart, Saint-Maur-des-Fossés",
          degree: "Bachillerato Científico, Especialidad Ciencias de la Ingeniería",
          period: "2018-2020",
          details: [
            "Mención Bien"
          ]
        }
      ]
    },
    hobbies: {
      title: "Intereses",
      items: [
        "Me gusta mucho la música. Toco la guitarra desde hace más de 10 años.",
        "He practicado diferentes deportes (esgrima, kárate, vela, etc.).",
        "Me gusta jugar al ajedrez, a los videojuegos y charlar con mis amigos.",
        "Este año, empecé a ir al gimnasio."
      ]
    }
  },
  en: {
    backButton: "Back",
    header: {
      name: "Grégoire Baumann",
      title: "Computer Science Engineering Student",
      schoolInfo: "Polytech Nancy, 5th year, France | IA2R (Computer Science, Automation, Robotics & Networks)",
      programInfo: "SIR Program (Information Systems and Networks)"
    },
    contact: {
      location: "Nancy (54) | Saint-Maur-des-Fossés (94) FRANCE",
      phoneFr: "Phone/SMS/WhatsApp: (+33) 06 14 47 66 27",
      phoneEs: "Phone/SMS: (+34) 633 681 593",
      email: "Email: gregoirebaumann94@gmail.com",
      linkedin: "LinkedIn: linkedin.com/in/gregoire-baumann/",
      onlineCV: "Online CV: gwagwa94.github.io/CV"
    },
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      hobbies: "Hobbies",
      onePageTitle: "One-page version:"
    },
    about: {
      title: "About",
      text: "I am a computer science engineering student passionate about software development, embedded systems, and artificial intelligence. Currently in my 5th year at Polytech Nancy, I specialize in Computer Science, Automation, Robotics & Networks (IA2R), with a focus on Information Systems and Networks (SIR). I am seeking opportunities to apply my skills and learn new technologies."
    },
    skills: {
      title: "Skills",
      programmingLanguages: {
        title: "Programming Languages",
        items: [
          "C, C++",
          "JS, TS (React, React Native, Next)",
          "Python (Flask, Machine Learning: PyTorch, SciKit (basic))",
          "HTML, CSS",
          "Java (Spring)",
          "SQL"
        ]
      },
      embeddedSystems: {
        title: "Embedded Systems",
        items: [
          "CAN bus",
          "Arduino, STM32, Raspberry Pi"
        ]
      },
      toolsTech: {
        title: "Tools & Technologies",
        items: [
          "Git (Github, Gitlab, BitBucket) CLI/GUI",
          "Docker",
          "GCP (Database, OAuth 2.0, administration)",
          "Jetbrains IDEs"
        ]
      },
      conceptsMethods: {
        title: "Concepts & Methodologies",
        items: [
          "Network Architecture & Administration (Cisco)",
          "Signal Processing",
          "Linear and Non-Linear Programming",
          "AGILE, SOLID, KISS, DRY Principles"
        ]
      },
      languages: {
        title: "Languages",
        items: [
          "French - Native language",
          "English - 900 TOEIC",
          "Spanish - Learning (~A2 -> B1)",
          "Italian - Basic",
          "German - Basic"
        ]
      }
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "NRG Consulting, Madrid",
          role: "Developer Engineer Intern",
          period: "MAR - SEP 2025",
          description: [
            "Developed software for trading indicators storage and treatment.",
            "Designed an executable program allowing data acquisition (internet, database), mathematical modeling, and optimization.",
            "Applied SOLID, KISS, DRY principles. Languages used: Python and SQL."
          ]
        },
        {
          company: "RATP, Fontenay-sous-Bois (94)",
          role: "Assistant Engineer Internship",
          period: "APR - AUG 2024",
          description: [
            "Developed an internal web application to facilitate the use of Python optimization algorithms.",
            "Implemented an interactive graphical interface to directly manipulate algorithm inputs and results.",
            "Technologies used: React.js and Flask."
          ]
        },
        {
          company: "Polytech Services Nancy",
          role: "Head of IT Services and Systems",
          period: "SEP 2022 - JUN 2023",
          description: [
            "Managed and maintained the IT infrastructures and services of the junior enterprise.",
            "Actively participated in the implementation and optimization of digital tools.",
            "Participated in administrative discussions as a board member."
          ]
        },
        {
          company: "Robotech School Project — IT Division",
          role: "School Project",
          period: "2023",
          description: [
            "Programmed STM32 controllers.",
            "Applied Object-Oriented Programming (C, C++).",
            "Team problem-solving and in-depth understanding of how a controller works in embedded systems context."
          ]
        },
        {
          company: "Explique-moi Pythagore, Saint-Maur-des-Fossés (94)",
          role: "Company Immersion Internship",
          period: "Summer 2021",
          description: [
            "Developed web and mobile applications for organizing home tutoring classes.",
            "Technologies used: React.js and React Native."
          ]
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          school: "Polytech Nancy, Vandœuvre-lès-Nancy",
          degree: "Computer Science Engineer",
          period: "2022-2025",
          details: [
            "Specialization IA2R (Computer Science, Automation, Robotics & Networks)",
            "SIR Program (Information Systems and Networks)"
          ]
        },
        {
          school: "Polytech Sorbonne, Paris",
          degree: "Integrated Preparatory Program (PEIP)",
          period: "2020-2022",
          details: [
            "Polytech Engineering Schools Preparatory Program"
          ]
        },
        {
          school: "Lycée François Mansart, Saint-Maur-des-Fossés",
          degree: "Scientific Baccalaureate, Engineering Sciences Specialization",
          period: "2018-2020",
          details: [
            "With honors (\"Mention Bien\")"
          ]
        }
      ]
    },
    hobbies: {
      title: "Hobbies",
      items: [
        "I love music. I have been playing the guitar for over 10 years.",
        "I have practiced various sports (fencing, karate, sailing, etc.).",
        "I enjoy playing chess, video games, and chatting with my friends.",
        "This year, I started going to the gym."
      ]
    }
  }
};

// Make translations object globally accessible
window.translations = translations;
