'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Code2, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('experience');

  const experiences = [
    {
      title: "Lead Front Développeur",
      company: "CINQO",
      period: "2024 - Aujourd'hui",
      description: "Architecture et développement d'applications Vue 3 modernes avec intégration de systèmes complexes",
      achievements: [
        "Implémenté un système d'authentification Firebase avec JWT, contrôle d'accès par rôles et rafraîchissement automatique",
        "Développé une intégration GraphQL via Apollo Client avec 50+ requêtes/mutations et synchronisation temps réel",
        "Créé une suite de tests complète avec Vitest incluant tests unitaires, tests de composants et couverture automatisée",
        "Architecturé une application Vue 3 avec TanStack Query, composables réutilisables, Sentry, LaunchDarkly et TypeScript",
        "Intégré l'API TrackDechets (18M+ tonnes de déchets dans 425K+ établissements) avec OAuth 2.0 et traçabilité temps réel"
      ],
      skills: ["Vue 3", "TypeScript", "GraphQL", "Firebase", "TanStack Query", "Vitest", "Sentry"]
    },
    {
      title: "Développeur Full-Stack",
      company: "ID CAPTURE",
      period: "2020 - 2024",
      description: "Développement d'architecture microservices et interfaces utilisateur modernes",
      achievements: [
        "Développé des interfaces utilisateur avec Vue.js et VueBootstrap pour une expérience responsive",
        "Migré et intégré Vite dans un projet existant pour optimiser les performances de build",
        "Conçu et implémenté des microservices en Java avec architecture gRPC et API REST",
        "Développé une architecture microservices distribuée assurant scalabilité et maintenance modulaire",
        "Implémenté un système de gestion des rôles et permissions côté frontend"
      ],
      skills: ["Vue.js", "Java", "gRPC", "REST API", "Vite", "Microservices"]
    },
    {
      title: "Freelance",
      company: "Projets Divers",
      period: "2023 - Aujourd'hui",
      description: "Création d'applications web sur mesure et sites performants pour divers clients",
      achievements: [
        "Développé des interfaces interactives avec visualisations de données dynamiques utilisant Chart.js",
        "Conçu une application Vue.js de configuration sur mesure pour fenêtres, intégrée à WordPress via API REST",
        "Créé plusieurs sites statiques performants (restaurants, bâtiment) avec React et Tailwind CSS",
        "Migré un projet de gestion de nettoyage de turbines de Webpack vers Vite, réduisant le temps de build de 80%"
      ],
      skills: ["React", "Vue.js", "Tailwind CSS", "Chart.js", "WordPress", "Performance"]
    }
  ];

  const education = [
    {
      degree: "Master en Ingénierie du Web",
      school: "ESGI (École Supérieur du Génie Informatique)",
      period: "2020 - 2022",
      description: "Formation en alternance spécialisée dans l'ingénierie web et les technologies modernes"
    },
    {
      degree: "Bachelor Développement Web",
      school: "IIM - Institute of Internet and Multimedia",
      period: "2020",
      description: "Formation en alternance axée sur le développement web full-stack"
    },
    {
      degree: "DUT Informatique",
      school: "Université Sorbonne Paris Nord",
      period: "2017 - 2019",
      description: "Formation en alternance couvrant les fondamentaux de l'informatique"
    }
  ];

  const skills = [
    { category: "Frontend", techs: ["Vue.js (Composition API)", "React", "Tailwind CSS", "JavaScript", "TypeScript", "Next.js"] },
    { category: "Backend", techs: ["Node.js", "Express", "Nest.js", "MikroORM", "GraphQL"] },
    { category: "Database", techs: ["SQL", "PostgreSQL", "MongoDB"] },
    { category: "Tools & DevOps", techs: ["Git/GitLab", "CI/CD", "GitHub Actions", "Vite/Vitest", "AWS/GCP", "Docker"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
              <Image src="/profile.jpeg" alt="Antoine Pollet" width={128} height={128} className="rounded-full" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Antoine Pollet
          </h1>
          <p className="text-xl text-slate-300 mb-2">
            Full-Stack Développeur | 6 ans d'expérience
          </p>
          <p className="text-slate-400 mb- max-w-2xl mx-auto">
          Expert frontend Vue.js & React : je conçois et déploie des interfaces modernes et performantes, avec une maîtrise end-to-end de la stack JS/TS (frontend & backend).
          </p>
          
          <div className="flex justify-center gap-6 my-8 flex-wrap text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>pollet.antoine.alexis@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+33 6 50 54 08 79</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Saint-Leu-la-Forêt</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a href="https://github.com/AntoinePollet" target="_blank" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/antoine-pollet-35a31a168/" target="_blank" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:pollet.antoine.alexis@gmail.com" target="_blank" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['experience', 'education', 'skills'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeSection === section
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {section === 'experience' && <Briefcase className="w-4 h-4 inline mr-2" />}
              {section === 'education' && <GraduationCap className="w-4 h-4 inline mr-2" />}
              {section === 'skills' && <Code2 className="w-4 h-4 inline mr-2" />}
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto">
          {activeSection === 'experience' && (
            <div className="space-y-6 animate-in fade-in duration-500">
              {experiences.map((exp, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700 backdrop-blur hover:bg-slate-800/70 transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-slate-400 mt-1">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4 font-medium">{exp.description}</p>
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-400 text-sm flex gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="border-slate-600 text-slate-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeSection === 'education' && (
            <div className="space-y-6 animate-in fade-in duration-500">
              {education.map((edu, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700 backdrop-blur hover:bg-slate-800/70 transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <CardTitle className="text-white text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-slate-400 mt-1">
                          {edu.school}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="grid md:grid-cols-2 gap-6 animate-in fade-in duration-500">
              {skills.map((skillGroup, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700 backdrop-blur hover:bg-slate-800/70 transition-all">
                  <CardHeader>
                    <CardTitle className="text-white text-lg flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-blue-400" />
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.techs.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-slate-600 text-slate-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700 py-8">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>© 2024 Antoine Pollet. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
}