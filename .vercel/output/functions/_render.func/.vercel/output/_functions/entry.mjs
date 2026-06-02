import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_k1syVdNt.mjs';
import { manifest } from './manifest_Cu7s7hp4.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/analisis.astro.mjs');
const _page2 = () => import('./pages/areas/art.astro.mjs');
const _page3 = () => import('./pages/areas/consumidor.astro.mjs');
const _page4 = () => import('./pages/areas/deportivo.astro.mjs');
const _page5 = () => import('./pages/areas/empresas.astro.mjs');
const _page6 = () => import('./pages/areas/laboral.astro.mjs');
const _page7 = () => import('./pages/areas/sucesiones.astro.mjs');
const _page8 = () => import('./pages/areas/transito.astro.mjs');
const _page9 = () => import('./pages/estudio.astro.mjs');
const _page10 = () => import('./pages/feedback.astro.mjs');
const _page11 = () => import('./pages/jugadores.astro.mjs');
const _page12 = () => import('./pages/sports.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/analisis.astro", _page1],
    ["src/pages/areas/art.astro", _page2],
    ["src/pages/areas/consumidor.astro", _page3],
    ["src/pages/areas/deportivo.astro", _page4],
    ["src/pages/areas/empresas.astro", _page5],
    ["src/pages/areas/laboral.astro", _page6],
    ["src/pages/areas/sucesiones.astro", _page7],
    ["src/pages/areas/transito.astro", _page8],
    ["src/pages/estudio.astro", _page9],
    ["src/pages/feedback.astro", _page10],
    ["src/pages/jugadores.astro", _page11],
    ["src/pages/sports.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "454c3e74-066e-4af8-803b-5ddb755c6715",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
