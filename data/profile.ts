/**
 * Profil court pour la page /profil et l’accueil.
 */

export interface Profile {
  name: string;
  headline: string;
  bio: string;
}

export const profile: Profile = {
  name: 'Guillaume Baratier',
  headline: 'Blockchain & IA — Managing Consultant (IBM)',
  bio: `Consultant en stratégie et transformation, je travaille à l’intersection des technologies émergentes (blockchain, IA) et des enjeux business. J’accompagne les entreprises dans la définition et la mise en œuvre de leurs projets d’innovation. Ce site présente une sélection de mes réalisations et des initiatives que je soutiens.`,
};
