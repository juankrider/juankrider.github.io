"use client";

import Modal from "./Modal";

export type Post = {
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  lead: string;
  sections: { heading: string; body: string }[];
  closing: string;
};

export default function BlogModal({
  isOpen,
  onClose,
  post,
}: {
  isOpen: boolean;
  onClose: () => void;
  post: Post | null;
}) {
  if (!post) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`${post.title} · ${post.date}`}>
      <div className="mx-auto max-w-3xl space-y-6">
        <p className="text-[15px] leading-relaxed text-ink/70">{post.lead}</p>

        {post.sections.map((s) => (
          <section key={s.heading} className="space-y-3">
            <h4 className="mono text-[11px] uppercase tracking-[0.2em] text-gray-mid">
              {s.heading}
            </h4>
            <p className="text-[14px] leading-relaxed text-ink/80">{s.body}</p>
          </section>
        ))}

        <p className="text-[14px] leading-relaxed text-ink/80">{post.closing}</p>
      </div>
    </Modal>
  );
}