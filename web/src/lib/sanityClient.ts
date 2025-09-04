import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;

export const client = createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: "2024-02-01", // Bugünün tarihini veya daha eski bir tarihi kullanabilirsiniz
    useCdn: false, // Geliştirme aşamasında false olması en güncel veriyi almanızı sağlar
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}