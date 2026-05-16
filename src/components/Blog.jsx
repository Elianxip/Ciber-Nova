import { blogPosts } from '../data';

const blogIcons = ['🔒', '🎣', '🔑'];

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">📝 Blog</div>
          <h2 className="section-title">Blog de Ciberseguridad</h2>
          <p className="section-subtitle">
            Mantente informado con las últimas noticias y consejos de seguridad digital
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <article key={i} className={`blog-card reveal reveal-delay-${i + 1}`}>
              <div className="blog-image">
                <span>{blogIcons[i]}</span>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-date">· {post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#" className="blog-link">
                  Leer más →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
