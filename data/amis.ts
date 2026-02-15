import type { LinkItem } from '@/data/types';
/**
 * Liens « Projet de mes amis » — projets et partenaires (page Mes coups de cœur).
 *
 * Pour ajouter une photo à une carte :
 * 1. Déposez l’image dans le dossier public/ (ex. public/colco.jpg).
 * 2. Ajoutez la propriété image à l’objet avec src et alt :
 *    image: { src: `${basePath}/colco.jpg`, alt: 'Description courte pour l’accessibilité' }
 * En production (ex. GitHub Pages), basePath est automatiquement préfixé (/gb, etc.).
 */
export const amisItems: LinkItem[] = [
  {
    id: 'colco',
    title: 'Colco',
    description: 'Colco accompagne les organisations dans leur transition écologique et sociale.',
    tags: ['transition', 'conseil', 'impact'],
    url: 'https://colco.fr/',
  },
  {
    id: 'chalong-bay',
    title: 'Chalong Bay',
    description: 'Rhumerie artisanale et durable, engagée dans une production responsable.',
    tags: ['spiritueux', 'durable', 'Thaïlande'],
    url: 'https://chalongbay.fr/',
  },
  {
    id: 'saneha',
    title: 'Saneha',
    description: 'Saneha Global œuvre pour des modèles économiques plus inclusifs et durables.',
    tags: ['impact', 'inclusion', 'global'],
    url: 'https://saneha-global.com/',
  },
];
