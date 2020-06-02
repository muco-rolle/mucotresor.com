const title = 'Muco Rolle Tresor - Fullstack Developer.';
const description =
    'I build things with code, mainly with Javascript/Typescript, React, Nodejs and GraphQL.';

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
        images: [
            {
                url:
                    'https://avatars0.githubusercontent.com/u/43722815?s=400&u=cbae73e7abaa0d9d9b181f312b152f187a7c4d37&v=4',
                alt: title,
                width: 1280,
                height: 720
            }
        ]
    },
    twitter: {
        handle: '@Muco31073256',
        site: '@Muco31073256',
        cardType: 'summary_large_image'
    }
};
