import { GetQuizData } from '@/src/ReduxToolkit/Apis/quiz.api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host;
    const baseUrl = `${protocol}://${host}`;

    const pages = [
        "/",
        "/change-password",
        "/contact-us",
        "/dashboard",
        "/edit-quiz",
        "/history",
        "/login",
        "/play-quiz",
        "/profile",
        "/users",
        "/forgot-password"
    ];

    let dynamicPages: string[] = [];

    try {
        const quizRes: any = await GetQuizData();
        const quizList = quizRes?.data?.data || [];

        dynamicPages = quizList.map((quiz: any) => `/play-quiz?q=${quiz?._id}`);
    } catch (error) {
        console.error('Error fetching quiz data:', error);
    }

    const allPages = [...pages, ...dynamicPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPages
            .map((page) => {
                const priority = page === "/" ? "1.0" : "0.9";
                return `<url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>daily</changefreq>
    <priority>${priority}</priority>
  </url>`;
            })
            .join("")}
</urlset>`;
    res.setHeader('Content-Type', 'application/xml');
    res.write(sitemap);
    res.end();
}
