import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

export const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
    const date = new Date(publishedAt).toISOString();
    const featuredImage = {
        url: `https://mucotresor.com${image}`,
        alt: title,
    };

    return (
        <>
            <NextSeo
                title={`${title} – Muco Trésor`}
                description={summary}
                canonical={url}
                openGraph={{
                    type: 'article',
                    article: {
                        publishedTime: date,
                    },
                    url,
                    title,
                    description: summary,
                    images: [featuredImage],
                }}
            />
            <ArticleJsonLd
                authorName="Muco Trésor"
                dateModified={date}
                datePublished={date}
                description={summary}
                images={[featuredImage as any]}
                publisherName="Muco Trésor"
                publisherLogo="Muco Trésor"
                title={title}
                url={url}
            />
        </>
    );
};
