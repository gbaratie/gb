import { basePath } from '@/lib/basePath';

export interface ClientLogo {
  src: string;
  alt: string;
}

const logos: ClientLogo[] = [
  { src: `${basePath}/projets/bnp-paribas.png`, alt: 'BNP Paribas' },
  { src: `${basePath}/projets/bpce.png`, alt: 'BPCE' },
  { src: `${basePath}/projets/carrefour.svg`, alt: 'Carrefour' },
  { src: `${basePath}/projets/cngtc.jpg`, alt: 'CNGTC' },
  { src: `${basePath}/projets/covea.png`, alt: 'COVEA' },
  { src: `${basePath}/projets/credit-mutuel.png`, alt: 'Crédit Mutuel' },
  { src: `${basePath}/projets/enedis.png`, alt: 'Enedis' },
  { src: `${basePath}/projets/loreal.png`, alt: "L'Oréal" },
  { src: `${basePath}/projets/orange-bank.png`, alt: 'Orange Bank' },
  { src: `${basePath}/projets/rte.svg`, alt: 'RTE' },
];

export { logos as clientLogos };
