import React, { useEffect, useMemo, useState } from "react";
import { Search, ChevronRight, CalendarDays, Clock, ArrowRight } from "lucide-react";

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'ai-marketing', label: 'AI in Marketing' },
  { key: 'social-media', label: 'Social Media' },
  { key: 'seo', label: 'SEO' },
  { key: 'ppc', label: 'PPC & Paid Ads' },
  { key: 'content', label: 'Content Marketing' },
  { key: 'email-automation', label: 'Email & Automation' },
  { key: 'analytics', label: 'Strategy & Analytics' },
  { key: 'case-studies', label: 'Case Studies' },
  { key: 'product', label: 'Product Updates' },
  { key: 'smb-growth', label: 'SMB Growth' },
  { key: 'design', label: 'Design & Creatives' },
  { key: 'culture', label: "Founder's Notes" },
];

const POSTS = [
  {
    slug: 'ai-prompts-for-social',
    title: '25 Battle‑Tested AI Prompts for High‑Engagement Social Posts',
    excerpt: 'Steal these prompt patterns to generate scroll‑stopping posts, carousels, and reels that actually convert.',
    category: 'ai-marketing',
    tags: ['prompts','reels','carousels','brand-voice'],
    cover: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'><rect width='100%' height='100%' fill='#e0f2fe'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='#0f766e'>AI Prompts Blog</text></svg>`),
    minutes: 7,
    date: '2025-08-01',
    author: 'Digibility Team',
    featured: true,
    content: `# 25 Battle‑Tested AI Prompts\n\n## Why prompts matter\nGood prompts accelerate ideation...\n\n## Prompt templates\n1. Problem→Agitate→Solve...\n\n## Metrics to watch\nCTR, saves, shares...`,
  },
  {
    slug: 'gmb-checklist-2025',
    title: 'Google Business Profile Checklist (2025): Local SEO Wins',
    excerpt: 'A crisp, field‑tested checklist for ranking and converting on GBP.',
    category: 'seo',
    tags: ['local-seo','google','checklist'],
    cover: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'><rect width='100%' height='100%' fill='#dcfce7'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='#14532d'>SEO Checklist</text></svg>`),
    minutes: 6,
    date: '2025-07-21',
    author: 'Swapnil @ Digibility',
  },
  {
    slug: 'linkedin-article-frameworks',
    title: '6 LinkedIn Article Frameworks for B2B Demand',
    excerpt: 'Frameworks that turn expertise into consistent demand‑gen.',
    category: 'content',
    tags: ['b2b','linkedin','frameworks'],
    cover: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'><rect width='100%' height='100%' fill='#fef9c3'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='#7c2d12'>LinkedIn Frameworks</text></svg>`),
    minutes: 8,
    date: '2025-08-11',
    author: 'Ratan @ Digibility',
  }
];

const fmtDate = (iso) => new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
const LS_BOOKMARKS = 'dig_blog_bookmarks';
const isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

const FALLBACK_COVER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='#e8f5e9'/><stop offset='100%' stop-color='#e0f2fe'/>
    </linearGradient></defs>
    <rect width='100%' height='100%' fill='url(#g)'/>
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='36' fill='#065f46'>Digibility Blog</text>
  </svg>`
);

function safeImgSrc(src){
  if (!src || typeof src !== 'string') return FALLBACK_COVER;
  if (src.startsWith('data:image')) return src;
  if (/^(https?:)?\/\//i.test(src)) return src;
  return FALLBACK_COVER;
}

function useBookmarks(){
  const [, setBump] = useState(0);

  const get = () => {
    if (!isBrowser) return new Set();
    try { return new Set(JSON.parse(localStorage.getItem(LS_BOOKMARKS)||'[]')); }
    catch { return new Set(); }
  };

  const save = (set) => {
    if (!isBrowser) return; 
    try { localStorage.setItem(LS_BOOKMARKS, JSON.stringify([...set])); } catch {}
  };

  const has = (slug) => get().has(slug);
  const toggle = (slug) => { const s = get(); s.has(slug) ? s.delete(slug) : s.add(slug); save(s); setBump(v=>v+1); };

  return { has, toggle };
}

export function BlogIndexPage(){
  const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const [q, setQ] = useState(params.get('q') || '');
  const [cat, setCat] = useState(params.get('category') || 'all');
  const { has, toggle } = useBookmarks();

  const featured = useMemo(()=> POSTS.find(p=>p.featured) || POSTS[0], []);
  const filtered = useMemo(()=> POSTS.filter(p => (
    (cat==='all' || p.category===cat) &&
    (!q || [p.title,p.excerpt,(p.tags||[]).join(' ')].join(' ').toLowerCase().includes(q.toLowerCase()))
  )), [q,cat]);

  return (
    <div className="min-h-screen bg-gray-50">

      <section className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Insights by Digibility</h1>
            <p className="text-gray-600 mt-2 max-w-2xl">Playbooks, case studies, and product updates on AI‑powered digital marketing.</p>
          </div>
          <div className="relative">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"/>
            <input
              className="pl-9 pr-3 py-2 rounded-xl border bg-white w-72 focus:outline-none focus:ring-2 focus:ring-sky-300"
              placeholder="Search articles"
              value={q}
              onChange={(e)=>setQ(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-2">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(c => (
            <button key={c.key} onClick={()=> setCat(c.key)} className={`px-3 py-1.5 rounded-xl border text-sm ${cat===c.key? 'bg-gray-900 text-white' : 'bg-white hover:bg-gray-100'}`}>{c.label}</button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-6">
        <article className="rounded-3xl overflow-hidden border bg-white shadow-sm">
          <div className="grid md:grid-cols-2">
            <img src={safeImgSrc(featured.cover)} alt="" className="w-full h-64 md:h-full object-cover" onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src=FALLBACK_COVER; }} />
            <div className="p-6">
              <div className="text-xs text-gray-600 flex items-center gap-3">
                <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-800 border">Featured</span>
                <span className="inline-flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5"/>{fmtDate(featured.date)}</span>
                <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5"/>{featured.minutes} min</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mt-2">{featured.title}</h2>
              <p className="text-gray-700 mt-2 max-w-prose">{featured.excerpt}</p>
              <a href={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm">Read article <ArrowRight className="w-4 h-4"/></a>
              <button onClick={()=>toggle(featured.slug)} className="ml-3 text-sm underline">{has(featured.slug)?'Saved':'Save'}</button>
            </div>
          </div>
        </article>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.filter(p=>p.slug!==featured.slug).map(p => (
            <article key={p.slug} className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition">
              <img src={safeImgSrc(p.cover)} alt="" className="w-full h-44 object-cover" onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src=FALLBACK_COVER; }} />
              <div className="p-4">
                <div className="text-xs text-gray-600 flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded-full bg-gray-100 border">{CATEGORIES.find(c=>c.key===p.category)?.label}</span>
                  <span className="inline-flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5"/>{fmtDate(p.date)}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5"/>{p.minutes} min</span>
                </div>
                <h3 className="text-lg font-semibold mt-1 line-clamp-2">{p.title}</h3>
                <p className="text-sm text-gray-700 line-clamp-2 mt-1">{p.excerpt}</p>
                <div className="mt-3 flex items-center gap-3">
                  <a href={`/blog/${p.slug}`} className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800">Read <ChevronRight className="w-4 h-4"/></a>
                  <button onClick={()=>toggle(p.slug)} className="text-sm underline">{has(p.slug)?'Saved':'Save'}</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <BlogTestsPanel />
    </div>
  );
}

export function BlogArticlePage({ slug }){
  const post = POSTS.find(p=>p.slug===slug) || POSTS[0];
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-4">
        <div className="text-xs text-gray-600 flex items-center gap-3">
          <a href="/blog" className="underline">All Articles</a>
          <span>›</span>
          <span>{CATEGORIES.find(c=>c.key===post.category)?.label}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">{post.title}</h1>
        <div className="mt-2 text-gray-600 text-sm flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5"/>{fmtDate(post.date)}</span>
          <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5"/>{post.minutes} min read</span>
          <span>By {post.author}</span>
        </div>
        <img src={safeImgSrc(post.cover)} alt="" className="w-full rounded-3xl border mt-4" onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src=FALLBACK_COVER; }} />
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <article className="prose max-w-none">
          {(post.content||'').split('\n').map((line, idx) => {
            if(line.startsWith('## ')) return <h2 key={idx}>{line.replace(/^##\s*/, '')}</h2>;
            if(line.startsWith('# ')) return <h1 key={idx}>{line.replace(/^#\s*/, '')}</h1>;
            return <p key={idx}>{line}</p>;
          })}
        </article>
      </section>
    </div>
  );
}

function BlogTestsPanel(){
  const [results, setResults] = useState([]);

  useEffect(()=>{
    const out = [];

    const featured = POSTS.find(p=>p.featured) || POSTS[0];
    out.push({ name: 'Featured exists', pass: !!featured });
    out.push({ name: 'Featured slug correct', pass: featured.slug === 'ai-prompts-for-social', got: featured.slug, exp: 'ai-prompts-for-social' });

    const seo = POSTS.filter(p=>p.category==='seo').map(p=>p.slug);
    out.push({ name: 'SEO category count', pass: seo.length===1, got: seo.length, exp: 1 });
    out.push({ name: 'SEO category slug', pass: seo[0]==='gmb-checklist-2025', got: seo[0], exp: 'gmb-checklist-2025' });

    const q = 'LinkedIn';
    const filtered = POSTS.filter(p => [p.title,p.excerpt,(p.tags||[]).join(' ')].join(' ').toLowerCase().includes(q.toLowerCase()));
    out.push({ name: 'Search contains linkedin-article-frameworks', pass: filtered.some(p=>p.slug==='linkedin-article-frameworks'), got: filtered.map(p=>p.slug) });

    const bad = safeImgSrc('not-a-valid-src');
    out.push({ name: 'safeImgSrc fallback', pass: typeof bad === 'string' && bad.startsWith('data:image/svg+xml'), got: bad.slice(0, 24) + '...' });

    const isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
    if (isBrowser){
      try {
        const slug = POSTS[0].slug;
        const before = (JSON.parse(localStorage.getItem('dig_blog_bookmarks')||'[]')||[]).includes(slug);
        const set = new Set(JSON.parse(localStorage.getItem('dig_blog_bookmarks')||'[]'));
        before ? set.delete(slug) : set.add(slug);
        localStorage.setItem('dig_blog_bookmarks', JSON.stringify([...set]));
        const after = (JSON.parse(localStorage.getItem('dig_blog_bookmarks')||'[]')||[]).includes(slug);
        out.push({ name: 'Bookmark flips state in browser', pass: before !== after, got: { before, after } });
      
        const set2 = new Set(JSON.parse(localStorage.getItem('dig_blog_bookmarks')||'[]'));
        after ? set2.delete(slug) : set2.add(slug);
        localStorage.setItem('dig_blog_bookmarks', JSON.stringify([...set2]));
      } catch (e) {
        out.push({ name: 'Bookmark test error', pass: false, got: String(e) });
      }
    } else {
      out.push({ name: 'Bookmark flips state in browser', pass: true, got: 'SKIPPED (SSR)', exp: 'Client only' });
    }

    setResults(out);
  }, []);

  return (
    <div className="max-w-3xl mx-auto my-6 p-4 bg-white border rounded-2xl">
      <div className="font-semibold mb-2">Blog Tests</div>
      <ul className="text-sm">
        {results.map((r,i)=> (
          <li key={i} className={`mb-1 ${r.pass? 'text-emerald-700' : 'text-rose-700'}`}>
            <strong>{r.pass? 'PASS' : 'FAIL'}:</strong> {r.name} {r.exp? `(expected ${r.exp})` : ''} {r.got!==undefined? `→ ${typeof r.got==='string'? r.got : JSON.stringify(r.got)}` : ''}
          </li>
        ))}
      </ul>
      <div className="text-xs text-gray-500 mt-2">Remove this panel in production.</div>
    </div>
  );
}

export default function DigibilityBlogDemo(){
  return (
    <div className="pt-[10vh]" >
      <BlogIndexPage />
    </div>
  );
}
