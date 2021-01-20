const title = 'Muco Trésor – Fullstack web developer.';
const description = `I'm a self taught Fullstack web developer, I build things with code, mainly with : Javascript/Typescript, ReactJS, NodeJS, and GraphQL.`;

export const SEO = {
    title,
    description,
    canonical: 'https://mucotresor.com',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://mucotresor.com',
        title,
        description,
    },
    twitter: {
        handle: '@dev_muco',
        site: '@dev_muco',
        cardType: 'summary_large_image',
    },
};

export default SEO;
