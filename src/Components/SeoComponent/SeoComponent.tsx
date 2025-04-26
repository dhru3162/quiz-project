import Head from 'next/head';
import { APP_NAME } from '../../lib/const';

interface SeoComponentProps {
    title: string;
    description: string;
    canonical?: string;
    robots?: string;
    ogImage?: string;
    keywords?: string;
}

interface MetaTag {
    name?: string;
    property?: string;
    content: string;
};

const defaultRobots = "index, follow, nocache, preview:large, max-snippet:-1, max-video-preview:-1, max-image-preview:large";

const SeoComponent = ({ title, description, canonical, robots = defaultRobots, ogImage = "/og-image.webp", keywords }: SeoComponentProps) => {
    const domain = typeof window !== "undefined" ? window?.location?.origin : "";

    const metaTags: MetaTag[] = [
        { property: 'og:locale', content: 'en_IN' },
        { property: 'og:site_name', content: APP_NAME },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: `${domain}${ogImage}` },
        { property: 'og:image:width', content: '600' },
        { property: 'og:image:height', content: '336' }
    ];

    if (description) {
        metaTags?.unshift(
            { name: 'description', content: description },
            { property: 'og:description', content: description }
        );
    }

    if (title) {
        metaTags?.unshift({ property: 'og:title', content: title });
    }

    if (keywords) {
        metaTags?.push({ name: "keywords", content: keywords });
    }

    return (
        <Head>
            <title>{title}</title>
            <meta name="robots" content={robots} />
            {metaTags.map((tag: MetaTag, index: number) => (
                <meta key={index} {...tag} />
            ))}
            {canonical && <link rel="canonical" href={`${domain}${canonical}`} />}
        </Head>
    )
}

export default SeoComponent