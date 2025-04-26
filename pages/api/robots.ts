import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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

Sitemap: https://your-domain.com/api/sitemap
`;

    res.setHeader('Content-Type', 'text/plain');
    res.write(content);
    res.end();
}
