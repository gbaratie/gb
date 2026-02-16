import type { Project } from '@/data/types';
import { basePath } from '@/lib/basePath';

export type { Project } from '@/data/types';

export const projects: Project[] = [
  {
    id: 'blockchain-poc',
    title: 'Proof of Concept Blockchain',
    description:
      "Conception et pilotage d'un POC blockchain pour la traçabilité de chaîne d'approvisionnement dans le secteur retail.",
    category: 'pro',
    tags: ['blockchain', 'supply chain', 'IBM'],
    links: [],
    image: { src: `${basePath}/city.jpg`, alt: 'Schéma chaîne de valeur' },
  },
  {
    id: 'ia-documentaire',
    title: 'Assistant IA documentaire',
    description:
      "Mise en place d'un assistant conversationnel pour l'exploration de bases documentaires internes (RAG, LLM).",
    category: 'pro',
    tags: ['IA', 'LLM', 'RAG', 'conseil'],
    links: [],
    image: { src: `${basePath}/tour.jpg`, alt: 'Interface assistant' },
  },
  {
    id: 'transformation-digitale',
    title: 'Transformation digitale',
    description:
      "Accompagnement d'une direction métier dans la définition de sa feuille de route digitale et le déploiement d'outils collaboratifs.",
    category: 'pro',
    tags: ['transformation', 'agilité', 'conseil'],
    image: { src: `${basePath}/cloche.jpg`, alt: 'Atelier stratégie' },
  },
  {
    id: 'sudoku',
    title: 'Générateur de Sudoku',
    description:
      "Application web pour générer et jouer au Sudoku. Projet side pour pratiquer la logique et l'interface utilisateur.",
    category: 'side',
    tags: ['JavaScript', 'jeu', 'side project'],
    links: [{ label: 'Voir le projet', url: 'https://gbaratie.github.io/Sudoku/' }],
    image: { src: `${basePath}/sudoku.png`, alt: 'Sudoku' },
  },
  {
    id: 'template-next-mui',
    title: 'Template Next.js + MUI',
    description:
      "Template pour créer rapidement des sites vitrines en React, Next.js et Material UI. Base du présent portfolio.",
    category: 'side',
    tags: ['Next.js', 'React', 'MUI', 'template'],
    links: [{ label: 'Voir le template', url: 'https://gbaratie.github.io/front_sandbox_MUI/' }],
    image: { src: `${basePath}/Portfolio2.png`, alt: 'Portfolio' },
  },
];
