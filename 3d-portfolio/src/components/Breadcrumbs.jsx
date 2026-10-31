import React from "react";
import { Link } from "react-router-dom";

/**
 * Lightweight site breadcrumbs (no extra deps).
 * @param {{ items: { label: string, to?: string }[] }} props
 */
function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-3">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-md text-slate-500/80 font-semibold">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-x-2">
              {index > 0 ? (
                <span className="text-slate-500/80 select-none font-semibold" aria-hidden="true">
                  /
                </span>
              ) : null}
              {item.to && !isLast ? (
                <Link to={item.to} className="text-slate-500/80 hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span
                  className="text-black-500 font-semibold"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
