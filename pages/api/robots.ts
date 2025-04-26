import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const host = req.headers.host;
    const protocol = req?.headers?.["x-forwarded-proto"] || 'https';
    const sitemapUrl = `${protocol}://${host}/sitemap.xml`;

    const content = `
User-agent: *
Allow: /

Disallow: /login
Disallow: /dashboard
Disallow: /profile
Disallow: /change-password
Disallow: /history
Disallow: /forgot-password
Disallow: /edit-quiz
Disallow: /users

Sitemap: ${sitemapUrl}
`;

    res.setHeader('Content-Type', 'text/plain');
    res.write(content);
    res.end();
}
