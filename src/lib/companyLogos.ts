const absaLogo = '/companylogos/absa.svg';
const discoveryLogo = '/companylogos/discovery.svg';
const econoLogo = '/companylogos/econo.svg';
const fnbLogo = '/companylogos/fnb.svg';
const mtnLogo = '/companylogos/mtn.svg';
const nedbankLogo = '/companylogos/nedbank.svg';
const sanlamLogo = '/companylogos/sanlam.svg';
const shopriteLogo = '/companylogos/shoprite.svg';
const standardLogo = '/companylogos/standard.svg';
const vodacomLogo = '/companylogos/vodacom.svg';

const companyLogoPatterns: Array<{ pattern: RegExp; logoUrl: string }> = [
  { pattern: /\bdiscovery\b/, logoUrl: discoveryLogo },
  { pattern: /\babsa\b/, logoUrl: absaLogo },
  { pattern: /\bstandard bank\b/, logoUrl: standardLogo },
  { pattern: /\bfirst national bank\b/, logoUrl: fnbLogo },
  { pattern: /\bfnb\b/, logoUrl: fnbLogo },
  { pattern: /\bnedbank\b/, logoUrl: nedbankLogo },
  { pattern: /\bsanlam\b/, logoUrl: sanlamLogo },
  { pattern: /\bshoprite\b/, logoUrl: shopriteLogo },
  { pattern: /\bvodacom\b/, logoUrl: vodacomLogo },
  { pattern: /\bmtn\b/, logoUrl: mtnLogo },
  { pattern: /\becono\b/, logoUrl: econoLogo },
];

const normalizeCompanyName = (companyName: string) =>
  companyName.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export const getCompanyLogoUrl = (companyName: string) => {
  const normalizedCompanyName = normalizeCompanyName(companyName);

  return (
    companyLogoPatterns.find(({ pattern }) => pattern.test(normalizedCompanyName))?.logoUrl ?? null
  );
};
