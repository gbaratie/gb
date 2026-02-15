import type { LinkItem } from '@/data/types';

export type { LinkItem } from '@/data/types';

/**
 * Sélection de sites et initiatives (liens externes).
 * Modifier ce fichier pour mettre à jour la page /selection.
 */
export const selectionItems: LinkItem[] = [
  {
    id: 'enerfip',
    title: 'Enerfip',
    description: 'Plateforme de financement participatif dédiée aux projets d’énergie renouvelable.',
    tags: ['finance participative', 'énergie', 'impact'],
    url: 'https://www.enerfip.eu/fr',
  },
  {
    id: 'coral-gardeners',
    title: 'Coral Gardeners',
    description: 'Association de restauration des récifs coralliens et sensibilisation à l’océan.',
    tags: ['océan', 'biodiversité', 'impact'],
    url: 'https://coralgardeners.org/fr',
  },
  {
    id: 'meet-my-mama',
    title: 'Meet My Mama',
    description: 'Entreprise sociale qui valorise les cuisines du monde et l’insertion professionnelle.',
    tags: ['insertion', 'gastronomie', 'impact'],
    url: 'https://meetmymama.com/',
  },
  {
    id: 'share-the-meal',
    title: 'ShareTheMeal',
    description: 'Application du PAM pour lutter contre la faim dans le monde via des dons de repas.',
    tags: ['solidarité', 'PAM', 'impact'],
    url: 'https://sharethemeal.org/fr',
  },
];
