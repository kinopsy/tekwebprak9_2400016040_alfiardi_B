import { posts } from "../../../data/posts";

export default async function BlogDetail({ params }) {
  // Menangani params sebagai Promise (Standar Next.js 15)
  const { slug } = await params;
  
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-center text-red-500 mt-10">Artikel tidak ditemukan!</div>;
  }

  return (
    <article className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      
      {/* TUGAS: Menampilkan Author dan Date */}
      <div className="text-gray-500 mb-8 text-sm border-b pb-2">
        Ditulis oleh: <span className="font-semibold text-gray-700">{post.author}</span> | {post.date}
      </div>

      <div className="prose lg:prose-xl text-gray-800">
        <p>{post.content}</p>
      </div>
      
      <div className="mt-10">
        <a href="/blog" className="text-blue-600 hover:underline">
          &larr; Kembali ke Daftar
        </a>
      </div>
    </article>
  );
}
