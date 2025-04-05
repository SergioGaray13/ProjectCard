import data from '../data/data.json';

export function getExtraData(slug: string) {
  return data.find((item) => item.slug === slug);
}
