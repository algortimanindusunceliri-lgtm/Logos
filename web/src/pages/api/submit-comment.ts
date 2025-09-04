// src/pages/api/submit-comment.ts
import type { APIRoute } from 'astro';
import { createClient } from "@sanity/client";

// YENİ EKLENEN SATIR: Astro'ya bu dosyanın sunucuda çalışacağını söylüyoruz.
export const prerender = false;

const client = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    token: import.meta.env.SANITY_WRITE_TOKEN,
    useCdn: false,
    apiVersion: "2024-02-01",
});

export const POST: APIRoute = async ({ request }) => {
    try {
        const { postId, author, content } = await request.json();

        if (!postId || !author || !content) {
            return new Response(JSON.stringify({ message: 'Eksik alanlar var.' }), { status: 400 });
        }

        await client.create({
            _type: 'comment',
            post: {
                _type: 'reference',
                _ref: postId,
            },
            authorName: author,
            commentContent: content,
            isApproved: false,
        });
        
        return new Response(JSON.stringify({ message: 'Yorumunuz başarıyla gönderildi ve moderasyon için bekliyor.' }), { status: 200 });

    } catch (err) {
        console.error("API Hatası:", err);
        return new Response(JSON.stringify({ message: 'Sunucuda bir hata oluştu.' }), { status: 500 });
    }
};