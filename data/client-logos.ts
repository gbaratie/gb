import { basePath } from '@/lib/basePath';

export interface ClientLogo {
  src: string;
  alt: string;
}

const logos: ClientLogo[] = [
  { src: `${basePath}/clients/bnp-paribas.png`, alt: 'BNP Paribas' },
  { src: `${basePath}/clients/bpce.png`, alt: 'BPCE' },
  { src: `${basePath}/clients/carrefour.svg`, alt: 'Carrefour' },
  { src: `${basePath}/clients/cngtc.jpg`, alt: 'CNGTC' },
  { src: `${basePath}/clients/covea.png`, alt: 'COVEA' },
  { src: `${basePath}/clients/credit-mutuel.png`, alt: 'Crédit Mutuel' },
  { src: `${basePath}/clients/enedis.png`, alt: 'Enedis' },
  { src: `${basePath}/clients/loreal.png`, alt: "L'Oréal" },
  { src: `${basePath}/clients/orange-bank.png`, alt: 'Orange Bank' },
  { src: `${basePath}/clients/rte.svg`, alt: 'RTE' },
];

export { logos as clientLogos };
