const t = ({ base: e = "", routes: t2 = [], ...r } = {}) => ({ __proto__: new Proxy({}, { get: (r2, o, a, s) => (r3, ...c) => t2.push([o.toUpperCase?.(), RegExp(`^${(s = (e + r3).replace(/\/+(\/|$)/g, "$1")).replace(/(\/?\.?):(\w+)\+/g, "($1(?<$2>*))").replace(/(\/?\.?):(\w+)/g, "($1(?<$2>[^$1/]+?))").replace(/\./g, "\\.").replace(/(\/?)\*/g, "($1.*)?")}/*$`), c, s]) && a }), routes: t2, ...r, async fetch(e2, ...o) {
  let a, s, c = new URL(e2.url), n = e2.query = { __proto__: null };
  for (let [e3, t3] of c.searchParams) n[e3] = n[e3] ? [].concat(n[e3], t3) : t3;
  e: try {
    for (let t3 of r.before || []) if (null != (a = await t3(e2.proxy ?? e2, ...o))) break e;
    t: for (let [r2, n2, l, i] of t2) if ((r2 == e2.method || "ALL" == r2) && (s = c.pathname.match(n2))) {
      e2.params = s.groups || {}, e2.route = i;
      for (let t3 of l) if (null != (a = await t3(e2.proxy ?? e2, ...o))) break t;
    }
  } catch (t3) {
    if (!r.catch) throw t3;
    a = await r.catch(t3, e2.proxy ?? e2, ...o);
  }
  try {
    for (let t3 of r.finally || []) a = await t3(a, e2.proxy ?? e2, ...o) ?? a;
  } catch (t3) {
    if (!r.catch) throw t3;
    a = await r.catch(t3, e2.proxy ?? e2, ...o);
  }
  return a;
} });
const router = t();
router.get("*", async (req) => {
  const url = new URL(req.url);
  const path = url.pathname === "/" ? "/index.html" : url.pathname;
  const response = await fetch(path, {
    headers: {
      "Content-Type": "text/html"
    }
  });
  return response;
});
const worker = {
  fetch: (request, env, ctx) => {
    return router.handle(request);
  }
};
export {
  worker as default
};
