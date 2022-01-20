var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
init_react();
var React2 = __toModule(require("react"));
var import_remix2 = __toModule(require_remix());

// app/styles/demos/remix.css
var remix_default = "/build/_assets/remix-LIPXOTXG.css";

// app/styles/global.css
var global_default = "/build/_assets/global-XNYBKEZ4.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-APYDFYJA.css";

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    {
      rel: "stylesheet",
      href: dark_default,
      media: "(prefers-color-scheme: dark)"
    },
    { rel: "stylesheet", href: remix_default }
  ];
};
function App() {
  return /* @__PURE__ */ React2.createElement(Document, null, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement(import_remix2.Outlet, null)));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React2.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React2.createElement("head", null, /* @__PURE__ */ React2.createElement("meta", {
    charSet: "utf-8"
  }), title ? /* @__PURE__ */ React2.createElement("title", null, title) : null, /* @__PURE__ */ React2.createElement(import_remix2.Meta, null), /* @__PURE__ */ React2.createElement(import_remix2.Links, null)), /* @__PURE__ */ React2.createElement("body", null, children, /* @__PURE__ */ React2.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React2.createElement(import_remix2.Scripts, null), true ? /* @__PURE__ */ React2.createElement(import_remix2.LiveReload, null) : null));
}
function Layout({ children }) {
  return /* @__PURE__ */ React2.createElement("div", {
    className: "remix-app"
  }, /* @__PURE__ */ React2.createElement("header", {
    className: "remix-app__header"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "container remix-app__header-content"
  }, /* @__PURE__ */ React2.createElement(import_remix2.Link, {
    to: "/",
    title: "Remix",
    className: "remix-app__header-home-link"
  }, /* @__PURE__ */ React2.createElement(RemixLogo, null)), /* @__PURE__ */ React2.createElement("nav", {
    "aria-label": "Main navigation",
    className: "remix-app__header-nav"
  }, /* @__PURE__ */ React2.createElement("ul", null, /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement(import_remix2.Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement(import_remix2.Link, {
    to: "/posts"
  }, "Posts")), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement("a", {
    href: "https://remix.run/docs"
  }, "Remix Docs")), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement("a", {
    href: "https://github.com/remix-run/remix"
  }, "GitHub")))))), /* @__PURE__ */ React2.createElement("main", {
    className: "remix-app__main"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "container remix-app__main-content"
  }, children)), /* @__PURE__ */ React2.createElement("footer", {
    className: "remix-app__footer"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "container remix-app__footer-content"
  }, /* @__PURE__ */ React2.createElement("p", null, "\xA9 You!"))));
}
function CatchBoundary() {
  const caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React2.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React2.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React2.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React2.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("h1", null, "There was an error"), /* @__PURE__ */ React2.createElement("p", null, error.message), /* @__PURE__ */ React2.createElement("hr", null), /* @__PURE__ */ React2.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function RemixLogo(props) {
  return /* @__PURE__ */ React2.createElement("svg", __spreadValues({
    viewBox: "0 0 659 165",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-labelledby": "remix-run-logo-title",
    role: "img",
    width: "106",
    height: "30",
    fill: "currentColor"
  }, props), /* @__PURE__ */ React2.createElement("title", {
    id: "remix-run-logo-title"
  }, "Remix Logo"), /* @__PURE__ */ React2.createElement("path", {
    d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
  }));
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/demos/actions.tsx
var actions_exports = {};
__export(actions_exports, {
  action: () => action,
  default: () => ActionsDemo,
  meta: () => meta
});
init_react();
var import_react = __toModule(require("react"));
var import_remix4 = __toModule(require_remix());

// app/utils.server.tsx
init_react();
var import_crypto = __toModule(require("crypto"));
function hash(str) {
  return (0, import_crypto.createHash)("sha1").update(str).digest("hex").toString();
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/demos/actions.tsx
function meta() {
  return { title: "Actions Demo" };
}
var action = async ({ request }) => {
  const formData = await request.formData();
  const answer = formData.get("answer");
  if (typeof answer !== "string") {
    return (0, import_remix4.json)("Come on, at least try!", { status: 400 });
  }
  const rightAnswers = [
    "4fa6024f12494d3a99d8bda9b7a55f7d140f328a",
    "ce3659ad235ca6d1e12dec21465aff3f9a62bb8c",
    "bd111dcb4b343de4ec0a79d2d5ec55a3919c79c4"
  ];
  const encrypted = hash(answer);
  if (!rightAnswers.includes(encrypted)) {
    return (0, import_remix4.json)(`Sorry, ${answer} is not right.`, { status: 400 });
  }
  return (0, import_remix4.redirect)("/demos/correct");
};
function ActionsDemo() {
  const actionMessage = (0, import_remix4.useActionData)();
  const answerRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (actionMessage && answerRef.current) {
      answerRef.current.select();
    }
  }, [actionMessage]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Actions!"), /* @__PURE__ */ React.createElement("p", null, "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations."), /* @__PURE__ */ React.createElement(import_remix4.Form, {
    method: "post",
    className: "remix__form"
  }, /* @__PURE__ */ React.createElement("h3", null, "Post an Action"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "What is more useful when it is broken?")), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("div", null, "Answer:"), /* @__PURE__ */ React.createElement("input", {
    ref: answerRef,
    name: "answer",
    type: "text"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", null, "Answer!")), actionMessage ? /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, actionMessage)) : null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h3", null, "Additional Resources"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Guide:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/guides/data-writes"
  }, "Data Writes")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/conventions#action"
  }, "Route Action Export")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/remix#useactiondata"
  }, /* @__PURE__ */ React.createElement("code", null, "useActionData"))))));
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/demos/correct.tsx
var correct_exports = {};
__export(correct_exports, {
  default: () => NiceWork
});
init_react();
function NiceWork() {
  return /* @__PURE__ */ React.createElement("h1", null, "You got it right!");
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/demos/params.tsx
var params_exports = {};
__export(params_exports, {
  default: () => Boundaries,
  meta: () => meta2
});
init_react();
var import_remix5 = __toModule(require_remix());
function meta2() {
  return { title: "Boundaries Demo" };
}
function Boundaries() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Click these Links"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "."
  }, "Start over")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "one"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "one"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "two"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "two"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "this-record-does-not-exist"
  }, "This will be a 404")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "shh-its-a-secret"
  }, "And this will be 401 Unauthorized")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "kaboom"
  }, "This one will throw an error")))));
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/demos/params/index.tsx
var params_exports2 = {};
__export(params_exports2, {
  default: () => Boundaries2
});
init_react();
function Boundaries2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Params"), /* @__PURE__ */ React.createElement("p", null, "When you name a route segment with $ like", " ", /* @__PURE__ */ React.createElement("code", null, "routes/users/$userId.js"), ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."), /* @__PURE__ */ React.createElement("h2", null, "Errors"), /* @__PURE__ */ React.createElement("p", null, "When a route throws an error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root."), /* @__PURE__ */ React.createElement("p", null, "So be as granular as you want with your error handling."), /* @__PURE__ */ React.createElement("h2", null, "Not Found"), /* @__PURE__ */ React.createElement("p", null, "(and other", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses"
  }, "client errors"), ")"), /* @__PURE__ */ React.createElement("p", null, "Loaders and Actions can throw a ", /* @__PURE__ */ React.createElement("code", null, "Response"), " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."));
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/demos/params/$id.tsx
var id_exports = {};
__export(id_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => ParamDemo,
  loader: () => loader,
  meta: () => meta3
});
init_react();
var import_remix6 = __toModule(require_remix());
var loader = async ({ params }) => {
  if (params.id === "this-record-does-not-exist") {
    throw new Response("Not Found", { status: 404 });
  }
  if (params.id === "shh-its-a-secret") {
    throw (0, import_remix6.json)({ webmasterEmail: "hello@remix.run" }, { status: 401 });
  }
  if (params.id === "kaboom") {
    lol();
  }
  return { param: params.id };
};
function ParamDemo() {
  const data = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("h1", null, "The param is ", /* @__PURE__ */ React.createElement("i", {
    style: { color: "red" }
  }, data.param));
}
function CatchBoundary2() {
  const caught = (0, import_remix6.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (", caught.data.webmasterEmail, ") for access.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that does not exist.");
      break;
    default:
      message = /* @__PURE__ */ React.createElement("p", null, "There was a problem with your request!", /* @__PURE__ */ React.createElement("br", null), caught.status, " ", caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Oops!"), /* @__PURE__ */ React.createElement("p", null, message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
function ErrorBoundary2({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Error!"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
var meta3 = ({ data }) => {
  return {
    title: data ? `Param: ${data.param}` : "Oops..."
  };
};

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/demos/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index,
  links: () => links2,
  meta: () => meta4
});
init_react();
var import_remix7 = __toModule(require_remix());

// app/styles/demos/about.css
var about_default = "/build/_assets/about-CXG2V3PY.css";

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/demos/about.tsx
var meta4 = () => {
  return {
    title: "About Remix"
  };
};
var links2 = () => {
  return [{ rel: "stylesheet", href: about_default }];
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "about__intro"
  }, /* @__PURE__ */ React.createElement("h2", null, "About Us"), /* @__PURE__ */ React.createElement("p", null, "Ok, so this page isn't really ", /* @__PURE__ */ React.createElement("em", null, "about us"), ", but we did want to show you a few more things Remix can do."), /* @__PURE__ */ React.createElement("p", null, "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its", " ", /* @__PURE__ */ React.createElement("code", null, "links"), " export is only included on this route and its children."), /* @__PURE__ */ React.createElement("p", null, "Wait a sec...", /* @__PURE__ */ React.createElement("em", null, "its children"), "? To understand what we mean by this,", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/tutorial/4-nested-routes-params"
  }, "read all about nested routes in the docs"), "."), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(import_remix7.Outlet, null)));
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/demos/about/index.tsx
var about_exports2 = {};
__export(about_exports2, {
  default: () => AboutIndex
});
init_react();
var import_remix8 = __toModule(require_remix());
function AboutIndex() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "You are looking at the index route for the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " URL segment, but there are nested routes as well!"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "whoa"
  }, "Check out one of them here."))));
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/demos/about/whoa.tsx
var whoa_exports = {};
__export(whoa_exports, {
  default: () => AboutIndex2
});
init_react();
var import_remix9 = __toModule(require_remix());
function AboutIndex2() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Whoa, this is a nested route! We render the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " layout route component, and its ", /* @__PURE__ */ React.createElement("code", null, "Outlet"), " renders our route component. \u{1F92F}"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: ".."
  }, "Go back to the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " index."))));
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/posts/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  loader: () => loader2
});
init_react();
var import_remix10 = __toModule(require_remix());
var import_tiny_invariant2 = __toModule(require("tiny-invariant"));

// app/post.ts
init_react();
var import_path = __toModule(require("path"));
var import_front_matter = __toModule(require("front-matter"));
var import_fs = __toModule(require("fs"));
var import_tiny_invariant = __toModule(require("tiny-invariant"));
var import_marked = __toModule(require("marked"));
var postsPath = import_path.default.join(__dirname, "../../posts");
function isValidPostAttributes(attributes) {
  return attributes == null ? void 0 : attributes.title;
}
function createPost(post) {
  const md = `---
title: ${post.title}
---

${post.markdown}`;
  (0, import_fs.writeFileSync)(import_path.default.join(postsPath, post.slug + ".md"), md);
  return getPost(post.slug);
}
function getPost(slug) {
  const filepath = import_path.default.join(postsPath, slug + ".md");
  const file = (0, import_fs.readFileSync)(filepath);
  const { attributes, body } = (0, import_front_matter.default)(file.toString());
  (0, import_tiny_invariant.default)(isValidPostAttributes(attributes), `Post ${filepath} is missing attributes`);
  const html = (0, import_marked.marked)(body);
  return { slug, html, title: attributes.title };
}
function getPosts() {
  const dir = (0, import_fs.readdirSync)(postsPath);
  return Promise.all(dir.map((filename) => {
    const file = (0, import_fs.readFileSync)(import_path.default.join(postsPath, filename));
    const { attributes } = (0, import_front_matter.default)(file.toString());
    (0, import_tiny_invariant.default)(isValidPostAttributes(attributes));
    return {
      slug: filename.replace(/\.md$/, ""),
      title: attributes.title
    };
  }));
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/posts/$slug.tsx
var loader2 = async ({ params }) => {
  (0, import_tiny_invariant2.default)(params.slug, "expected params.slug");
  return getPost(params.slug);
};
function PostSlug() {
  const post = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: post.html }
  });
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/posts/index.tsx
var posts_exports = {};
__export(posts_exports, {
  default: () => Posts,
  loader: () => loader3
});
init_react();
var import_remix11 = __toModule(require_remix());
var loader3 = () => {
  return getPosts();
};
function Posts() {
  const posts = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Posts"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: post.slug
  }, post.title)))));
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => Admin,
  links: () => links3,
  loader: () => loader4
});
init_react();
var import_remix12 = __toModule(require_remix());

// app/styles/admin.css
var admin_default = "/build/_assets/admin-7SGCBHRF.css";

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/admin.tsx
var links3 = () => {
  return [{ rel: "stylesheet", href: admin_default }];
};
var loader4 = () => {
  return getPosts();
};
function Admin() {
  const posts = (0, import_remix12.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "admin"
  }, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("h1", null, "Admin"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(import_remix12.Link, {
    to: `/posts/${post.slug}`
  }, post.title))))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix12.Outlet, null)));
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/admin/index.tsx
var admin_exports2 = {};
__export(admin_exports2, {
  default: () => AdminIndex
});
init_react();
var import_remix13 = __toModule(require_remix());
function AdminIndex() {
  return /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(import_remix13.Link, {
    to: "new"
  }, "Create a New Post"));
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/admin/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action2,
  default: () => NewPost
});
init_react();
var import_remix14 = __toModule(require_remix());
var import_tiny_invariant3 = __toModule(require("tiny-invariant"));
var action2 = async ({ request }) => {
  await new Promise((res) => setTimeout(res, 1e3));
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant3.default)(typeof title === "string");
  (0, import_tiny_invariant3.default)(typeof slug === "string");
  (0, import_tiny_invariant3.default)(typeof markdown === "string");
  await createPost({ title, slug, markdown });
  return (0, import_remix14.redirect)("/admin");
};
function NewPost() {
  const errors = (0, import_remix14.useActionData)();
  const transition = (0, import_remix14.useTransition)();
  return /* @__PURE__ */ React.createElement(import_remix14.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Title: ", (errors == null ? void 0 : errors.title) ? /* @__PURE__ */ React.createElement("em", null, "Title is required") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Slug: ", (errors == null ? void 0 : errors.slug) ? /* @__PURE__ */ React.createElement("em", null, "Slug is required") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "slug"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown"
  }, "Markdown:"), " ", (errors == null ? void 0 : errors.markdown) ? /* @__PURE__ */ React.createElement("em", null, "Markdown is required") : null, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    rows: 20,
    name: "markdown"
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, transition.submission ? "Creating..." : "Create Post")));
}

// route-module:/Users/dangranger/dev/javascript/Remix/blog-tutorial/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader5,
  meta: () => meta5
});
init_react();
var import_remix15 = __toModule(require_remix());
var loader5 = () => {
  const data = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs"
      },
      {
        name: "React Router Docs",
        url: "reactrouter.com/docs"
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d"
      }
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions"
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading"
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries"
      }
    ]
  };
  return (0, import_remix15.json)(data);
};
var meta5 = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
function Index2() {
  const data = (0, import_remix15.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Welcome to Remix!"), /* @__PURE__ */ React.createElement("p", null, "We're stoked that you're here. \u{1F973}"), /* @__PURE__ */ React.createElement("p", null, "Feel free to take a look around the code to see how Remix does things, it might be a bit different than what you\u2019re used to. When you're ready to dive deeper, we've got plenty of resources to get you up-and-running quickly."), /* @__PURE__ */ React.createElement("p", null, "Check out all the demos in this starter, and then just delete the", " ", /* @__PURE__ */ React.createElement("code", null, "app/routes/demos"), " and ", /* @__PURE__ */ React.createElement("code", null, "app/styles/demos"), " ", "folders when you're ready to turn this into your next project.")), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Demos In This App"), /* @__PURE__ */ React.createElement("ul", null, data.demos.map((demo) => /* @__PURE__ */ React.createElement("li", {
    key: demo.to,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement(import_remix15.Link, {
    to: demo.to,
    prefetch: "intent"
  }, demo.name)))), /* @__PURE__ */ React.createElement("h2", null, "Resources"), /* @__PURE__ */ React.createElement("ul", null, data.resources.map((resource) => /* @__PURE__ */ React.createElement("li", {
    key: resource.url,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement("a", {
    href: resource.url
  }, resource.name))))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/demos/actions": {
    id: "routes/demos/actions",
    parentId: "root",
    path: "demos/actions",
    index: void 0,
    caseSensitive: void 0,
    module: actions_exports
  },
  "routes/demos/correct": {
    id: "routes/demos/correct",
    parentId: "root",
    path: "demos/correct",
    index: void 0,
    caseSensitive: void 0,
    module: correct_exports
  },
  "routes/demos/params": {
    id: "routes/demos/params",
    parentId: "root",
    path: "demos/params",
    index: void 0,
    caseSensitive: void 0,
    module: params_exports
  },
  "routes/demos/params/index": {
    id: "routes/demos/params/index",
    parentId: "routes/demos/params",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: params_exports2
  },
  "routes/demos/params/$id": {
    id: "routes/demos/params/$id",
    parentId: "routes/demos/params",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/demos/about": {
    id: "routes/demos/about",
    parentId: "root",
    path: "demos/about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/demos/about/index": {
    id: "routes/demos/about/index",
    parentId: "routes/demos/about",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: about_exports2
  },
  "routes/demos/about/whoa": {
    id: "routes/demos/about/whoa",
    parentId: "routes/demos/about",
    path: "whoa",
    index: void 0,
    caseSensitive: void 0,
    module: whoa_exports
  },
  "routes/posts/$slug": {
    id: "routes/posts/$slug",
    parentId: "root",
    path: "posts/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "root",
    path: "posts",
    index: true,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "routes/admin",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: admin_exports2
  },
  "routes/admin/new": {
    id: "routes/admin/new",
    parentId: "routes/admin",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kYW5ncmFuZ2VyL2Rldi9qYXZhc2NyaXB0L1JlbWl4L2Jsb2ctdHV0b3JpYWwvYXBwL3Jvb3QudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvZGFuZ3Jhbmdlci9kZXYvamF2YXNjcmlwdC9SZW1peC9ibG9nLXR1dG9yaWFsL2FwcC9yb3V0ZXMvZGVtb3MvYWN0aW9ucy50c3giLCAiLi4vLi4vYXBwL3V0aWxzLnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kYW5ncmFuZ2VyL2Rldi9qYXZhc2NyaXB0L1JlbWl4L2Jsb2ctdHV0b3JpYWwvYXBwL3JvdXRlcy9kZW1vcy9jb3JyZWN0LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2RhbmdyYW5nZXIvZGV2L2phdmFzY3JpcHQvUmVtaXgvYmxvZy10dXRvcmlhbC9hcHAvcm91dGVzL2RlbW9zL3BhcmFtcy50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kYW5ncmFuZ2VyL2Rldi9qYXZhc2NyaXB0L1JlbWl4L2Jsb2ctdHV0b3JpYWwvYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvZGFuZ3Jhbmdlci9kZXYvamF2YXNjcmlwdC9SZW1peC9ibG9nLXR1dG9yaWFsL2FwcC9yb3V0ZXMvZGVtb3MvcGFyYW1zLyRpZC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kYW5ncmFuZ2VyL2Rldi9qYXZhc2NyaXB0L1JlbWl4L2Jsb2ctdHV0b3JpYWwvYXBwL3JvdXRlcy9kZW1vcy9hYm91dC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kYW5ncmFuZ2VyL2Rldi9qYXZhc2NyaXB0L1JlbWl4L2Jsb2ctdHV0b3JpYWwvYXBwL3JvdXRlcy9kZW1vcy9hYm91dC9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kYW5ncmFuZ2VyL2Rldi9qYXZhc2NyaXB0L1JlbWl4L2Jsb2ctdHV0b3JpYWwvYXBwL3JvdXRlcy9kZW1vcy9hYm91dC93aG9hLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2RhbmdyYW5nZXIvZGV2L2phdmFzY3JpcHQvUmVtaXgvYmxvZy10dXRvcmlhbC9hcHAvcm91dGVzL3Bvc3RzLyRzbHVnLnRzeCIsICIuLi8uLi9hcHAvcG9zdC50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2RhbmdyYW5nZXIvZGV2L2phdmFzY3JpcHQvUmVtaXgvYmxvZy10dXRvcmlhbC9hcHAvcm91dGVzL3Bvc3RzL2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2RhbmdyYW5nZXIvZGV2L2phdmFzY3JpcHQvUmVtaXgvYmxvZy10dXRvcmlhbC9hcHAvcm91dGVzL2FkbWluLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2RhbmdyYW5nZXIvZGV2L2phdmFzY3JpcHQvUmVtaXgvYmxvZy10dXRvcmlhbC9hcHAvcm91dGVzL2FkbWluL2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2RhbmdyYW5nZXIvZGV2L2phdmFzY3JpcHQvUmVtaXgvYmxvZy10dXRvcmlhbC9hcHAvcm91dGVzL2FkbWluL25ldy50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kYW5ncmFuZ2VyL2Rldi9qYXZhc2NyaXB0L1JlbWl4L2Jsb2ctdHV0b3JpYWwvYXBwL3JvdXRlcy9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4wXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuMFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuMFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuMFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kYW5ncmFuZ2VyL2Rldi9qYXZhc2NyaXB0L1JlbWl4L2Jsb2ctdHV0b3JpYWwvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2RhbmdyYW5nZXIvZGV2L2phdmFzY3JpcHQvUmVtaXgvYmxvZy10dXRvcmlhbC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2RhbmdyYW5nZXIvZGV2L2phdmFzY3JpcHQvUmVtaXgvYmxvZy10dXRvcmlhbC9hcHAvcm91dGVzL2RlbW9zL2FjdGlvbnMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9kYW5ncmFuZ2VyL2Rldi9qYXZhc2NyaXB0L1JlbWl4L2Jsb2ctdHV0b3JpYWwvYXBwL3JvdXRlcy9kZW1vcy9jb3JyZWN0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvZGFuZ3Jhbmdlci9kZXYvamF2YXNjcmlwdC9SZW1peC9ibG9nLXR1dG9yaWFsL2FwcC9yb3V0ZXMvZGVtb3MvcGFyYW1zLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvZGFuZ3Jhbmdlci9kZXYvamF2YXNjcmlwdC9SZW1peC9ibG9nLXR1dG9yaWFsL2FwcC9yb3V0ZXMvZGVtb3MvcGFyYW1zL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvZGFuZ3Jhbmdlci9kZXYvamF2YXNjcmlwdC9SZW1peC9ibG9nLXR1dG9yaWFsL2FwcC9yb3V0ZXMvZGVtb3MvcGFyYW1zLyRpZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2RhbmdyYW5nZXIvZGV2L2phdmFzY3JpcHQvUmVtaXgvYmxvZy10dXRvcmlhbC9hcHAvcm91dGVzL2RlbW9zL2Fib3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvZGFuZ3Jhbmdlci9kZXYvamF2YXNjcmlwdC9SZW1peC9ibG9nLXR1dG9yaWFsL2FwcC9yb3V0ZXMvZGVtb3MvYWJvdXQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9kYW5ncmFuZ2VyL2Rldi9qYXZhc2NyaXB0L1JlbWl4L2Jsb2ctdHV0b3JpYWwvYXBwL3JvdXRlcy9kZW1vcy9hYm91dC93aG9hLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvZGFuZ3Jhbmdlci9kZXYvamF2YXNjcmlwdC9SZW1peC9ibG9nLXR1dG9yaWFsL2FwcC9yb3V0ZXMvcG9zdHMvJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvZGFuZ3Jhbmdlci9kZXYvamF2YXNjcmlwdC9SZW1peC9ibG9nLXR1dG9yaWFsL2FwcC9yb3V0ZXMvcG9zdHMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvVXNlcnMvZGFuZ3Jhbmdlci9kZXYvamF2YXNjcmlwdC9SZW1peC9ibG9nLXR1dG9yaWFsL2FwcC9yb3V0ZXMvYWRtaW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvVXNlcnMvZGFuZ3Jhbmdlci9kZXYvamF2YXNjcmlwdC9SZW1peC9ibG9nLXR1dG9yaWFsL2FwcC9yb3V0ZXMvYWRtaW4vaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCIvVXNlcnMvZGFuZ3Jhbmdlci9kZXYvamF2YXNjcmlwdC9SZW1peC9ibG9nLXR1dG9yaWFsL2FwcC9yb3V0ZXMvYWRtaW4vbmV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiL1VzZXJzL2RhbmdyYW5nZXIvZGV2L2phdmFzY3JpcHQvUmVtaXgvYmxvZy10dXRvcmlhbC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvYWN0aW9uc1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RlbW9zL2FjdGlvbnNcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJkZW1vcy9hY3Rpb25zXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvY29ycmVjdFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RlbW9zL2NvcnJlY3RcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJkZW1vcy9jb3JyZWN0XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvcGFyYW1zXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZGVtb3MvcGFyYW1zXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiZGVtb3MvcGFyYW1zXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvcGFyYW1zL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZGVtb3MvcGFyYW1zL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtc1wiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvcGFyYW1zLyRpZFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtcy8kaWRcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZGVtb3MvcGFyYW1zXCIsXG4gICAgcGF0aDogXCI6aWRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9kZW1vcy9hYm91dFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RlbW9zL2Fib3V0XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiZGVtb3MvYWJvdXRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNlxuICB9LFxuICBcInJvdXRlcy9kZW1vcy9hYm91dC9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RlbW9zL2Fib3V0L2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RlbW9zL2Fib3V0XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9LFxuICBcInJvdXRlcy9kZW1vcy9hYm91dC93aG9hXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZGVtb3MvYWJvdXQvd2hvYVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9kZW1vcy9hYm91dFwiLFxuICAgIHBhdGg6IFwid2hvYVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU4XG4gIH0sXG4gIFwicm91dGVzL3Bvc3RzLyRzbHVnXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcG9zdHMvJHNsdWdcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJwb3N0cy86c2x1Z1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU5XG4gIH0sXG4gIFwicm91dGVzL3Bvc3RzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcG9zdHMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJwb3N0c1wiLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTBcbiAgfSxcbiAgXCJyb3V0ZXMvYWRtaW5cIjoge1xuICAgIGlkOiBcInJvdXRlcy9hZG1pblwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImFkbWluXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTExXG4gIH0sXG4gIFwicm91dGVzL2FkbWluL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWRtaW4vaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYWRtaW5cIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMlxuICB9LFxuICBcInJvdXRlcy9hZG1pbi9uZXdcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hZG1pbi9uZXdcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYWRtaW5cIixcbiAgICBwYXRoOiBcIm5ld1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxM1xuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTE0XG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlQ2F0Y2gsXG4gIExpbmtcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IGRlbGV0ZU1lUmVtaXhTdHlsZXMgZnJvbSBcIn4vc3R5bGVzL2RlbW9zL3JlbWl4LmNzc1wiO1xuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IGRhcmtTdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2RhcmsuY3NzXCI7XG5cbi8qKlxuICogVGhlIGBsaW5rc2AgZXhwb3J0IGlzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIG9iamVjdHMgdGhhdCBtYXAgdG9cbiAqIHRoZSBhdHRyaWJ1dGVzIGZvciBhbiBIVE1MIGA8bGluaz5gIGVsZW1lbnQuIFRoZXNlIHdpbGwgbG9hZCBgPGxpbms+YCB0YWdzIG9uXG4gKiBldmVyeSByb3V0ZSBpbiB0aGUgYXBwLCBidXQgaW5kaXZpZHVhbCByb3V0ZXMgY2FuIGluY2x1ZGUgdGhlaXIgb3duIGxpbmtzXG4gKiB0aGF0IGFyZSBhdXRvbWF0aWNhbGx5IHVubG9hZGVkIHdoZW4gYSB1c2VyIG5hdmlnYXRlcyBhd2F5IGZyb20gdGhlIHJvdXRlLlxuICpcbiAqIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNsaW5rc1xuICovXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBnbG9iYWxTdHlsZXNVcmwgfSxcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogZGFya1N0eWxlc1VybCxcbiAgICAgIG1lZGlhOiBcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIlxuICAgIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBkZWxldGVNZVJlbWl4U3R5bGVzIH1cbiAgXTtcbn07XG5cbi8qKlxuICogVGhlIHJvb3QgbW9kdWxlJ3MgZGVmYXVsdCBleHBvcnQgaXMgYSBjb21wb25lbnQgdGhhdCByZW5kZXJzIHRoZSBjdXJyZW50XG4gKiByb3V0ZSB2aWEgdGhlIGA8T3V0bGV0IC8+YCBjb21wb25lbnQuIFRoaW5rIG9mIHRoaXMgYXMgdGhlIGdsb2JhbCBsYXlvdXRcbiAqIGNvbXBvbmVudCBmb3IgeW91ciBhcHAuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZVxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB0aXRsZT86IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyA8TGl2ZVJlbG9hZCAvPiA6IG51bGx9XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbWl4LWFwcFwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJyZW1peC1hcHBfX2hlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZW1peC1hcHBfX2hlYWRlci1jb250ZW50XCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvXCIgdGl0bGU9XCJSZW1peFwiIGNsYXNzTmFtZT1cInJlbWl4LWFwcF9faGVhZGVyLWhvbWUtbGlua1wiPlxuICAgICAgICAgICAgPFJlbWl4TG9nbyAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJNYWluIG5hdmlnYXRpb25cIiBjbGFzc05hbWU9XCJyZW1peC1hcHBfX2hlYWRlci1uYXZcIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wb3N0c1wiPlBvc3RzPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL2RvY3NcIj5SZW1peCBEb2NzPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yZW1peC1ydW4vcmVtaXhcIj5HaXRIdWI8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicmVtaXgtYXBwX19tYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbWl4LWFwcF9fbWFpbi1jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJyZW1peC1hcHBfX2Zvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZW1peC1hcHBfX2Zvb3Rlci1jb250ZW50XCI+XG4gICAgICAgICAgPHA+JmNvcHk7IFlvdSE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG4gIGxldCBtZXNzYWdlO1xuICBzd2l0Y2ggKGNhdWdodC5zdGF0dXMpIHtcbiAgICBjYXNlIDQwMTpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIE9vcHMhIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IHlvdSBkbyBub3QgaGF2ZSBhY2Nlc3NcbiAgICAgICAgICB0by5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDA0OlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+T29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgZG9lcyBub3QgZXhpc3QuPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihjYXVnaHQuZGF0YSB8fCBjYXVnaHQuc3RhdHVzVGV4dCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c306IHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgICAgPC9oMT5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPVwiRXJyb3IhXCI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5UaGVyZSB3YXMgYW4gZXJyb3I8L2gxPlxuICAgICAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEhleSwgZGV2ZWxvcGVyLCB5b3Ugc2hvdWxkIHJlcGxhY2UgdGhpcyB3aXRoIHdoYXQgeW91IHdhbnQgeW91clxuICAgICAgICAgICAgdXNlcnMgdG8gc2VlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5mdW5jdGlvbiBSZW1peExvZ28ocHJvcHM6IFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjxcInN2Z1wiPikge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjU5IDE2NVwiXG4gICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwicmVtaXgtcnVuLWxvZ28tdGl0bGVcIlxuICAgICAgcm9sZT1cImltZ1wiXG4gICAgICB3aWR0aD1cIjEwNlwiXG4gICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8dGl0bGUgaWQ9XCJyZW1peC1ydW4tbG9nby10aXRsZVwiPlJlbWl4IExvZ288L3RpdGxlPlxuICAgICAgPHBhdGggZD1cIk0wIDE2MVYxMzZINDUuNTQxNkM1My4xNDg2IDEzNiA1NC44MDAzIDE0MS42MzggNTQuODAwMyAxNDVWMTYxSDBaIE0xMzMuODUgMTI0LjE2QzEzNS4zIDE0Mi43NjIgMTM1LjMgMTUxLjQ4MiAxMzUuMyAxNjFIOTIuMjI4M0M5Mi4yMjgzIDE1OC45MjcgOTIuMjY1MyAxNTcuMDMgOTIuMzAyOCAxNTUuMTA3QzkyLjQxOTUgMTQ5LjEyOCA5Mi41NDExIDE0Mi44OTQgOTEuNTcxNyAxMzAuMzA0QzkwLjI5MDUgMTExLjg3MiA4Mi4zNDczIDEwNy43NzYgNjcuNzQxOSAxMDcuNzc2SDU0LjgwMjFIMFY3NC4yNEg2OS43OTE4Qzg4LjI0MDcgNzQuMjQgOTcuNDY1MSA2OC42MzIgOTcuNDY1MSA1My43ODRDOTcuNDY1MSA0MC43MjggODguMjQwNyAzMi44MTYgNjkuNzkxOCAzMi44MTZIMFYwSDc3LjQ3ODhDMTE5LjI0NSAwIDE0MCAxOS43MTIgMTQwIDUxLjJDMTQwIDc0Ljc1MiAxMjUuMzk1IDkwLjExMiAxMDUuNjY1IDkyLjY3MkMxMjIuMzIgOTYgMTMyLjA1NyAxMDUuNDcyIDEzMy44NSAxMjQuMTZaXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMjI5LjQzIDEyMC41NzZDMjI1LjU5IDEyOS41MzYgMjE4LjQyMiAxMzMuMzc2IDIwNy4xNTggMTMzLjM3NkMxOTQuNjE0IDEzMy4zNzYgMTg0LjM3NCAxMjYuNzIgMTgzLjM1IDExMi42NEgyNjMuNDc4VjEwMS4xMkMyNjMuNDc4IDcwLjE0MzcgMjQzLjI1NCA0NC4wMzE3IDIwNS4xMSA0NC4wMzE3QzE2OS41MjYgNDQuMDMxNyAxNDIuOTAyIDY5Ljg4NzcgMTQyLjkwMiAxMDUuOTg0QzE0Mi45MDIgMTQyLjMzNiAxNjkuMDE0IDE2NC4zNTIgMjA1LjYyMiAxNjQuMzUyQzIzNS44MyAxNjQuMzUyIDI1Ni44MjIgMTQ5Ljc2IDI2Mi43MSAxMjMuNjQ4TDIyOS40MyAxMjAuNTc2Wk0xODMuODYyIDkyLjY3MTdDMTg1LjM5OCA4MS45MTk3IDE5MS4yODYgNzMuNzI3NyAyMDQuNTk4IDczLjcyNzdDMjE2Ljg4NiA3My43Mjc3IDIyMy41NDIgODIuNDMxNyAyMjQuMDU0IDkyLjY3MTdIMTgzLjg2MlpcIiAvPlxuICAgICAgPHBhdGggZD1cIk0zODUuMjU2IDY2LjU1OTdDMzgwLjM5MiA1My4yNDc3IDM2OS44OTYgNDQuMDMxNyAzNDkuNjcyIDQ0LjAzMTdDMzMyLjUyIDQ0LjAzMTcgMzIwLjIzMiA1MS43MTE3IDMxNC4wODggNjQuMjU1N1Y0Ny4xMDM3SDI3Mi42MTZWMTYxLjI4SDMxNC4wODhWMTA1LjIxNkMzMTQuMDg4IDg4LjA2MzggMzE4Ljk1MiA3Ni43OTk3IDMzMi41MiA3Ni43OTk3QzM0NS4wNjQgNzYuNzk5NyAzNDguMTM2IDg0Ljk5MTcgMzQ4LjEzNiAxMDAuNjA4VjE2MS4yOEgzODkuNjA4VjEwNS4yMTZDMzg5LjYwOCA4OC4wNjM4IDM5NC4yMTYgNzYuNzk5NyA0MDguMDQgNzYuNzk5N0M0MjAuNTg0IDc2Ljc5OTcgNDIzLjQgODQuOTkxNyA0MjMuNCAxMDAuNjA4VjE2MS4yOEg0NjQuODcyVjg5LjU5OTdDNDY0Ljg3MiA2NS43OTE3IDQ1NS42NTYgNDQuMDMxNyA0MjQuMTY4IDQ0LjAzMTdDNDA0Ljk2OCA0NC4wMzE3IDM5MS40IDUzLjc1OTcgMzg1LjI1NiA2Ni41NTk3WlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTQ3OC40MzYgNDcuMTA0VjE2MS4yOEg1MTkuOTA4VjQ3LjEwNEg0NzguNDM2Wk00NzguMTggMzYuMzUySDUyMC4xNjRWMEg0NzguMThWMzYuMzUyWlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTY1NC41NCA0Ny4xMDM1SDYxMS43ODhMNTkyLjMzMiA3NC4yMzk1TDU3My4zODggNDcuMTAzNUg1MjcuNTY0TDU2OC43OCAxMDMuMTY4TDUyMy45OCAxNjEuMjhINTY2LjczMkw1ODkuNTE2IDEzMC4zMDRMNjEyLjMgMTYxLjI4SDY1OC4xMjRMNjEzLjA2OCAxMDEuMzc2TDY1NC41NCA0Ny4xMDM1WlwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEZvcm0sIGpzb24sIHVzZUFjdGlvbkRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGhhc2ggfSBmcm9tIFwifi91dGlscy5zZXJ2ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIHJldHVybiB7IHRpdGxlOiBcIkFjdGlvbnMgRGVtb1wiIH07XG59XG5cbi8vIFdoZW4geW91ciBmb3JtIHNlbmRzIGEgUE9TVCwgdGhlIGFjdGlvbiBpcyBjYWxsZWQgb24gdGhlIHNlcnZlci5cbi8vIC0gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2FjdGlvblxuLy8gLSBodHRwczovL3JlbWl4LnJ1bi9ndWlkZXMvZGF0YS11cGRhdGVzXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgYW5zd2VyID0gZm9ybURhdGEuZ2V0KFwiYW5zd2VyXCIpO1xuXG4gIC8vIFR5cGljYWwgYWN0aW9uIHdvcmtmbG93cyBzdGFydCB3aXRoIHZhbGlkYXRpbmcgdGhlIGZvcm0gZGF0YSB0aGF0IGp1c3QgY2FtZVxuICAvLyBvdmVyIHRoZSBuZXR3b3JrLiBDbGllbnRzaWRlIHZhbGlkYXRpb24gaXMgZmluZSwgYnV0IHlvdSBkZWZpbml0ZWx5IG5lZWQgaXRcbiAgLy8gc2VydmVyIHNpZGUuICBJZiB0aGVyZSdzIGEgcHJvYmxlbSwgcmV0dXJuIHRoZSBkYXRhIGFuZCB0aGUgY29tcG9uZW50XG4gIC8vIGNhbiByZW5kZXIgaXQuXG4gIGlmICh0eXBlb2YgYW5zd2VyICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGpzb24oXCJDb21lIG9uLCBhdCBsZWFzdCB0cnkhXCIsIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICBjb25zdCByaWdodEFuc3dlcnMgPSBbXG4gICAgXCI0ZmE2MDI0ZjEyNDk0ZDNhOTlkOGJkYTliN2E1NWY3ZDE0MGYzMjhhXCIsXG4gICAgXCJjZTM2NTlhZDIzNWNhNmQxZTEyZGVjMjE0NjVhZmYzZjlhNjJiYjhjXCIsXG4gICAgXCJiZDExMWRjYjRiMzQzZGU0ZWMwYTc5ZDJkNWVjNTVhMzkxOWM3OWM0XCJcbiAgXTtcblxuICBjb25zdCBlbmNyeXB0ZWQgPSBoYXNoKGFuc3dlcik7XG5cbiAgaWYgKCFyaWdodEFuc3dlcnMuaW5jbHVkZXMoZW5jcnlwdGVkKSkge1xuICAgIHJldHVybiBqc29uKGBTb3JyeSwgJHthbnN3ZXJ9IGlzIG5vdCByaWdodC5gLCB7IHN0YXR1czogNDAwIH0pO1xuICB9XG5cbiAgLy8gRmluYWxseSwgaWYgdGhlIGRhdGEgaXMgdmFsaWQsIHlvdSdsbCB0eXBpY2FsbHkgd3JpdGUgdG8gYSBkYXRhYmFzZSBvciBzZW5kIG9yXG4gIC8vIGVtYWlsIG9yIGxvZyB0aGUgdXNlciBpbiwgZXRjLiBJdCdzIHJlY29tbWVuZGVkIHRvIHJlZGlyZWN0IGFmdGVyIGFcbiAgLy8gc3VjY2Vzc2Z1bCBhY3Rpb24sIGV2ZW4gaWYgaXQncyB0byB0aGUgc2FtZSBwbGFjZSBzbyB0aGF0IG5vbi1KYXZhU2NyaXB0IHdvcmtmbG93c1xuICAvLyBmcm9tIHRoZSBicm93c2VyIGRvZXNuJ3QgcmVwb3N0IHRoZSBkYXRhIGlmIHRoZSB1c2VyIGNsaWNrcyBiYWNrLlxuICByZXR1cm4gcmVkaXJlY3QoXCIvZGVtb3MvY29ycmVjdFwiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGlvbnNEZW1vKCkge1xuICAvLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvcmVtaXgjdXNlYWN0aW9uZGF0YVxuICBjb25zdCBhY3Rpb25NZXNzYWdlID0gdXNlQWN0aW9uRGF0YTxzdHJpbmc+KCk7XG4gIGNvbnN0IGFuc3dlclJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICAvLyBUaGlzIGZvcm0gd29ya3Mgd2l0aG91dCBKYXZhU2NyaXB0LCBidXQgd2hlbiB3ZSBoYXZlIEphdmFTY3JpcHQgd2UgY2FuIG1ha2VcbiAgLy8gdGhlIGV4cGVyaWVuY2UgYmV0dGVyIGJ5IHNlbGVjdGluZyB0aGUgaW5wdXQgb24gd3JvbmcgYW5zd2VycyEgR28gYWhlYWQsIGRpc2FibGVcbiAgLy8gSmF2YVNjcmlwdCBpbiB5b3VyIGJyb3dzZXIgYW5kIHNlZSB3aGF0IGhhcHBlbnMuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGlvbk1lc3NhZ2UgJiYgYW5zd2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGFuc3dlclJlZi5jdXJyZW50LnNlbGVjdCgpO1xuICAgIH1cbiAgfSwgW2FjdGlvbk1lc3NhZ2VdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaXhfX3BhZ2VcIj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDI+QWN0aW9ucyE8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGlzIGZvcm0gc3VibWlzc2lvbiB3aWxsIHNlbmQgYSBwb3N0IHJlcXVlc3QgdGhhdCB3ZSBoYW5kbGUgaW4gb3VyXG4gICAgICAgICAgYGFjdGlvbmAgZXhwb3J0LiBBbnkgcm91dGUgY2FuIGV4cG9ydCBhbiBhY3Rpb24gdG8gaGFuZGxlIGRhdGFcbiAgICAgICAgICBtdXRhdGlvbnMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cInJlbWl4X19mb3JtXCI+XG4gICAgICAgICAgPGgzPlBvc3QgYW4gQWN0aW9uPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxpPldoYXQgaXMgbW9yZSB1c2VmdWwgd2hlbiBpdCBpcyBicm9rZW4/PC9pPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8ZGl2PkFuc3dlcjo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e2Fuc3dlclJlZn0gbmFtZT1cImFuc3dlclwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uPkFuc3dlciE8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7YWN0aW9uTWVzc2FnZSA/IChcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8Yj57YWN0aW9uTWVzc2FnZX08L2I+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGFzaWRlPlxuICAgICAgICA8aDM+QWRkaXRpb25hbCBSZXNvdXJjZXM8L2gzPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgR3VpZGU6e1wiIFwifVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL2d1aWRlcy9kYXRhLXdyaXRlc1wiPkRhdGEgV3JpdGVzPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgQVBJOntcIiBcIn1cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjYWN0aW9uXCI+XG4gICAgICAgICAgICAgIFJvdXRlIEFjdGlvbiBFeHBvcnRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEFQSTp7XCIgXCJ9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I3VzZWFjdGlvbmRhdGFcIj5cbiAgICAgICAgICAgICAgPGNvZGU+dXNlQWN0aW9uRGF0YTwvY29kZT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICIvLyBTb21ldGltZXMgc29tZSBtb2R1bGVzIGRvbid0IHdvcmsgaW4gdGhlIGJyb3dzZXIsIFJlbWl4IHdpbGwgZ2VuZXJhbGx5IGJlXG4vLyBhYmxlIHRvIHJlbW92ZSBzZXJ2ZXItb25seSBjb2RlIGF1dG9tYXRpY2FsbHkgYXMgbG9uZyBhcyB5b3UgZG9uJ3QgaW1wcm90IGl0XG4vLyBkaXJlY3RseSBmcm9tIGEgcm91dGUgbW9kdWxlICh0aGF0J3Mgd2hlcmUgdGhlIGF1dG9tYXRpYyByZW1vdmFsIGhhcHBlbnMpLiBJZlxuLy8geW91J3JlIGV2ZXIgc3RpbGwgaGF2aW5nIHRyb3VibGUsIHlvdSBjYW4gc2tpcCB0aGUgcmVtaXggcmVtb3ZlLXNlcnZlci1jb2RlXG4vLyBtYWdpYyBhbmQgZHJvcCB5b3VyIGNvZGUgaW50byBhIGZpbGUgdGhhdCBlbmRzIHdpdGggYC5zZXJ2ZXJgIGxpa2UgdGhpcyBvbmUuXG4vLyBSZW1peCB3b24ndCBldmVuIHRyeSB0byBmaWd1cmUgdGhpbmdzIG91dCBvbiBpdHMgb3duLCBpdCdsbCBqdXN0IGNvbXBsZXRlbHlcbi8vIGlnbm9yZSBpdCBmb3IgdGhlIGJyb3dzZXIgYnVuZGxlcy4gT24gYSByZWxhdGVkIG5vdGUsIGNyeXB0byBjYW4ndCBiZVxuLy8gaW1wb3J0ZWQgZGlyZWN0bHkgaW50byBhIHJvdXRlIG1vZHVsZSwgYnV0IGlmIGl0J3MgaW4gdGhpcyBmaWxlIHlvdSdyZSBmaW5lLlxuaW1wb3J0IHsgY3JlYXRlSGFzaCB9IGZyb20gXCJjcnlwdG9cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc2goc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGNyZWF0ZUhhc2goXCJzaGExXCIpLnVwZGF0ZShzdHIpLmRpZ2VzdChcImhleFwiKS50b1N0cmluZygpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5pY2VXb3JrKCkge1xuICByZXR1cm4gPGgxPllvdSBnb3QgaXQgcmlnaHQhPC9oMT47XG59XG4iLCAiaW1wb3J0IHsgTGluaywgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuICByZXR1cm4geyB0aXRsZTogXCJCb3VuZGFyaWVzIERlbW9cIiB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3VuZGFyaWVzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaXhfX3BhZ2VcIj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxhc2lkZT5cbiAgICAgICAgPGgyPkNsaWNrIHRoZXNlIExpbmtzPC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiLlwiPlN0YXJ0IG92ZXI8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIm9uZVwiPlxuICAgICAgICAgICAgICBQYXJhbTogPGk+b25lPC9pPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCJ0d29cIj5cbiAgICAgICAgICAgICAgUGFyYW06IDxpPnR3bzwvaT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwidGhpcy1yZWNvcmQtZG9lcy1ub3QtZXhpc3RcIj5UaGlzIHdpbGwgYmUgYSA0MDQ8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cInNoaC1pdHMtYS1zZWNyZXRcIj5BbmQgdGhpcyB3aWxsIGJlIDQwMSBVbmF1dGhvcml6ZWQ8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cImthYm9vbVwiPlRoaXMgb25lIHdpbGwgdGhyb3cgYW4gZXJyb3I8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvYXNpZGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm91bmRhcmllcygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyPlBhcmFtczwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgV2hlbiB5b3UgbmFtZSBhIHJvdXRlIHNlZ21lbnQgd2l0aCAkIGxpa2V7XCIgXCJ9XG4gICAgICAgIDxjb2RlPnJvdXRlcy91c2Vycy8kdXNlcklkLmpzPC9jb2RlPiwgdGhlICQgc2VnbWVudCB3aWxsIGJlIHBhcnNlZCBmcm9tXG4gICAgICAgIHRoZSBVUkwgYW5kIHNlbnQgdG8geW91ciBsb2FkZXJzIGFuZCBhY3Rpb25zIGJ5IHRoZSBzYW1lIG5hbWUuXG4gICAgICA8L3A+XG4gICAgICA8aDI+RXJyb3JzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBXaGVuIGEgcm91dGUgdGhyb3dzIGFuIGVycm9yIGluIGl0J3MgYWN0aW9uLCBsb2FkZXIsIG9yIGNvbXBvbmVudCwgUmVtaXhcbiAgICAgICAgYXV0b21hdGljYWxseSBjYXRjaGVzIGl0LCB3b24ndCBldmVuIHRyeSB0byByZW5kZXIgdGhlIGNvbXBvbmVudCwgYnV0IGl0XG4gICAgICAgIHdpbGwgcmVuZGVyIHRoZSByb3V0ZSdzIEVycm9yQm91bmRhcnkgaW5zdGVhZC4gSWYgdGhlIHJvdXRlIGRvZXNuJ3QgaGF2ZVxuICAgICAgICBvbmUsIGl0IHdpbGwgYnViYmxlIHVwIHRvIHRoZSByb3V0ZXMgYWJvdmUgaXQgdW50aWwgaXQgaGl0cyB0aGUgcm9vdC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlNvIGJlIGFzIGdyYW51bGFyIGFzIHlvdSB3YW50IHdpdGggeW91ciBlcnJvciBoYW5kbGluZy48L3A+XG4gICAgICA8aDI+Tm90IEZvdW5kPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICAoYW5kIG90aGVye1wiIFwifVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9TdGF0dXMjY2xpZW50X2Vycm9yX3Jlc3BvbnNlc1wiPlxuICAgICAgICAgIGNsaWVudCBlcnJvcnNcbiAgICAgICAgPC9hPlxuICAgICAgICApXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgTG9hZGVycyBhbmQgQWN0aW9ucyBjYW4gdGhyb3cgYSA8Y29kZT5SZXNwb25zZTwvY29kZT4gaW5zdGVhZCBvZiBhblxuICAgICAgICBlcnJvciBhbmQgUmVtaXggd2lsbCByZW5kZXIgdGhlIENhdGNoQm91bmRhcnkgaW5zdGVhZCBvZiB0aGUgY29tcG9uZW50LlxuICAgICAgICBUaGlzIGlzIGdyZWF0IHdoZW4gbG9hZGluZyBkYXRhIGZyb20gYSBkYXRhYmFzZSBpc24ndCBmb3VuZC4gQXMgc29vbiBhc1xuICAgICAgICB5b3Uga25vdyB5b3UgY2FuJ3QgcmVuZGVyIHRoZSBjb21wb25lbnQgbm9ybWFsbHksIHRocm93IGEgNDA0IHJlc3BvbnNlXG4gICAgICAgIGFuZCBzZW5kIHlvdXIgYXBwIGludG8gdGhlIGNhdGNoIGJvdW5kYXJ5LiBKdXN0IGxpa2UgZXJyb3IgYm91bmRhcmllcyxcbiAgICAgICAgY2F0Y2ggYm91bmRhcmllcyBidWJibGUsIHRvby5cbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBqc29uLCB1c2VDYXRjaCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbi8vIFRoZSBgJGAgaW4gcm91dGUgZmlsZW5hbWVzIGJlY29tZXMgYSBwYXR0ZXJuIHRoYXQncyBwYXJzZWQgZnJvbSB0aGUgVVJMIGFuZFxuLy8gcGFzc2VkIHRvIHlvdXIgbG9hZGVycyBzbyB5b3UgY2FuIGxvb2sgdXAgZGF0YS5cbi8vIC0gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2xvYWRlci1wYXJhbXNcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgLy8gcHJldGVuZCBsaWtlIHdlJ3JlIHVzaW5nIHBhcmFtcy5pZCB0byBsb29rIHNvbWV0aGluZyB1cCBpbiB0aGUgZGJcblxuICBpZiAocGFyYW1zLmlkID09PSBcInRoaXMtcmVjb3JkLWRvZXMtbm90LWV4aXN0XCIpIHtcbiAgICAvLyBJZiB0aGUgcmVjb3JkIGRvZXNuJ3QgZXhpc3Qgd2UgY2FuJ3QgcmVuZGVyIHRoZSByb3V0ZSBub3JtYWxseSwgc29cbiAgICAvLyBpbnN0ZWFkIHdlIHRocm93IGEgNDA0IHJlc3BvbnNlIHRvIHN0b3AgcnVubmluZyBjb2RlIGhlcmUgYW5kIHNob3cgdGhlXG4gICAgLy8gdXNlciB0aGUgY2F0Y2ggYm91bmRhcnkuXG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiTm90IEZvdW5kXCIsIHsgc3RhdHVzOiA0MDQgfSk7XG4gIH1cblxuICAvLyBub3cgcHJldGVuZCBsaWtlIHRoZSByZWNvcmQgZXhpc3RzIGJ1dCB0aGUgdXNlciBqdXN0IGlzbid0IGF1dGhvcml6ZWQgdG9cbiAgLy8gc2VlIGl0LlxuICBpZiAocGFyYW1zLmlkID09PSBcInNoaC1pdHMtYS1zZWNyZXRcIikge1xuICAgIC8vIEFnYWluLCB3ZSBjYW4ndCByZW5kZXIgdGhlIGNvbXBvbmVudCBpZiB0aGUgdXNlciBpc24ndCBhdXRob3JpemVkLiBZb3VcbiAgICAvLyBjYW4gZXZlbiBwdXQgZGF0YSBpbiB0aGUgcmVzcG9uc2UgdGhhdCBtaWdodCBoZWxwIHRoZSB1c2VyIHJlY3RpZnkgdGhlXG4gICAgLy8gaXNzdWUhIExpa2UgZW1haWxpbmcgdGhlIHdlYm1hc3RlciBmb3IgYWNjZXNzIHRvIHRoZSBwYWdlLiAoT2gsIHJpZ2h0LFxuICAgIC8vIGBqc29uYCBpcyBqdXN0IGEgUmVzcG9uc2UgaGVscGVyIHRoYXQgbWFrZXMgaXQgZWFzaWVyIHRvIHNlbmQgSlNPTlxuICAgIC8vIHJlc3BvbnNlcykuXG4gICAgdGhyb3cganNvbih7IHdlYm1hc3RlckVtYWlsOiBcImhlbGxvQHJlbWl4LnJ1blwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cblxuICAvLyBTb21ldGltZXMgeW91ciBjb2RlIGp1c3QgYmxvd3MgdXAgYW5kIHlvdSBuZXZlciBhbnRpY2lwYXRlZCBpdC4gUmVtaXggd2lsbFxuICAvLyBhdXRvbWF0aWNhbGx5IGNhdGNoIGl0IGFuZCBzZW5kIHRoZSBVSSB0byB0aGUgZXJyb3IgYm91bmRhcnkuXG4gIGlmIChwYXJhbXMuaWQgPT09IFwia2Fib29tXCIpIHtcbiAgICBsb2woKTtcbiAgfVxuXG4gIC8vIGJ1dCBvdGhlcndpc2UgdGhlIHJlY29yZCB3YXMgZm91bmQsIHVzZXIgaGFzIGFjY2Vzcywgc28gd2UgY2FuIGRvIHdoYXRldmVyXG4gIC8vIGVsc2Ugd2UgbmVlZGVkIHRvIGluIHRoZSBsb2FkZXIgYW5kIHJldHVybiB0aGUgZGF0YS4gKFRoaXMgaXMgYm9yaW5nLCB3ZSdyZVxuICAvLyBqdXN0IGdvbm5hIHJldHVybiB0aGUgcGFyYW1zLmlkKS5cbiAgcmV0dXJuIHsgcGFyYW06IHBhcmFtcy5pZCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFyYW1EZW1vKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICByZXR1cm4gKFxuICAgIDxoMT5cbiAgICAgIFRoZSBwYXJhbSBpcyA8aSBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT57ZGF0YS5wYXJhbX08L2k+XG4gICAgPC9oMT5cbiAgKTtcbn1cblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2NhdGNoYm91bmRhcnlcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCN1c2VjYXRjaFxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2d1aWRlcy9ub3QtZm91bmRcbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG4gIGxldCBtZXNzYWdlOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xuICAgIGNhc2UgNDAxOlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+XG4gICAgICAgICAgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgeW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0by5cbiAgICAgICAgICBNYXliZSBhc2sgdGhlIHdlYm1hc3RlciAoe2NhdWdodC5kYXRhLndlYm1hc3RlckVtYWlsfSkgZm9yIGFjY2Vzcy5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDA0OlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+TG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgZG9lcyBub3QgZXhpc3QuPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciByZXF1ZXN0IVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfSB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+T29wcyE8L2gyPlxuICAgICAgPHA+e21lc3NhZ2V9PC9wPlxuICAgICAgPHA+XG4gICAgICAgIChJc24ndCBpdCBjb29sIHRoYXQgdGhlIHVzZXIgZ2V0cyB0byBzdGF5IGluIGNvbnRleHQgYW5kIHRyeSBhIGRpZmZlcmVudFxuICAgICAgICBsaW5rIGluIHRoZSBwYXJ0cyBvZiB0aGUgVUkgdGhhdCBkaWRuJ3QgYmxvdyB1cD8pXG4gICAgICA8L3A+XG4gICAgPC8+XG4gICk7XG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNlcnJvcmJvdW5kYXJ5XG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvZ3VpZGVzL25vdC1mb3VuZFxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+RXJyb3IhPC9oMj5cbiAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgIDxwPlxuICAgICAgICAoSXNuJ3QgaXQgY29vbCB0aGF0IHRoZSB1c2VyIGdldHMgdG8gc3RheSBpbiBjb250ZXh0IGFuZCB0cnkgYSBkaWZmZXJlbnRcbiAgICAgICAgbGluayBpbiB0aGUgcGFydHMgb2YgdGhlIFVJIHRoYXQgZGlkbid0IGJsb3cgdXA/KVxuICAgICAgPC9wPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IGRhdGEgPyBgUGFyYW06ICR7ZGF0YS5wYXJhbX1gIDogXCJPb3BzLi4uXCJcbiAgfTtcbn07XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy9kZW1vcy9hYm91dC5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJBYm91dCBSZW1peFwiXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X19pbnRyb1wiPlxuICAgICAgICA8aDI+QWJvdXQgVXM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBPaywgc28gdGhpcyBwYWdlIGlzbid0IHJlYWxseSA8ZW0+YWJvdXQgdXM8L2VtPiwgYnV0IHdlIGRpZCB3YW50IHRvXG4gICAgICAgICAgc2hvdyB5b3UgYSBmZXcgbW9yZSB0aGluZ3MgUmVtaXggY2FuIGRvLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIERpZCB5b3Ugbm90aWNlIHRoYXQgdGhpbmdzIGxvb2sgYSBsaXR0bGUgZGlmZmVyZW50IG9uIHRoaXMgcGFnZT8gVGhlXG4gICAgICAgICAgQ1NTIHRoYXQgd2UgaW1wb3J0IGluIHRoZSByb3V0ZSBmaWxlIGFuZCBpbmNsdWRlIGluIGl0c3tcIiBcIn1cbiAgICAgICAgICA8Y29kZT5saW5rczwvY29kZT4gZXhwb3J0IGlzIG9ubHkgaW5jbHVkZWQgb24gdGhpcyByb3V0ZSBhbmQgaXRzXG4gICAgICAgICAgY2hpbGRyZW4uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2FpdCBhIHNlYy4uLjxlbT5pdHMgY2hpbGRyZW48L2VtPj8gVG8gdW5kZXJzdGFuZCB3aGF0IHdlIG1lYW4gYnlcbiAgICAgICAgICB0aGlzLHtcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vdHV0b3JpYWwvNC1uZXN0ZWQtcm91dGVzLXBhcmFtc1wiPlxuICAgICAgICAgICAgcmVhZCBhbGwgYWJvdXQgbmVzdGVkIHJvdXRlcyBpbiB0aGUgZG9jc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+XG4gICAgICAgIFlvdSBhcmUgbG9va2luZyBhdCB0aGUgaW5kZXggcm91dGUgZm9yIHRoZSA8Y29kZT4vYWJvdXQ8L2NvZGU+IFVSTFxuICAgICAgICBzZWdtZW50LCBidXQgdGhlcmUgYXJlIG5lc3RlZCByb3V0ZXMgYXMgd2VsbCFcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIDxMaW5rIHRvPVwid2hvYVwiPkNoZWNrIG91dCBvbmUgb2YgdGhlbSBoZXJlLjwvTGluaz5cbiAgICAgICAgPC9zdHJvbmc+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5cbiAgICAgICAgV2hvYSwgdGhpcyBpcyBhIG5lc3RlZCByb3V0ZSEgV2UgcmVuZGVyIHRoZSA8Y29kZT4vYWJvdXQ8L2NvZGU+IGxheW91dFxuICAgICAgICByb3V0ZSBjb21wb25lbnQsIGFuZCBpdHMgPGNvZGU+T3V0bGV0PC9jb2RlPiByZW5kZXJzIG91ciByb3V0ZVxuICAgICAgICBjb21wb25lbnQuIFx1RDgzRVx1REQyRlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgPExpbmsgdG89XCIuLlwiPlxuICAgICAgICAgICAgR28gYmFjayB0byB0aGUgPGNvZGU+L2Fib3V0PC9jb2RlPiBpbmRleC5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvc3Ryb25nPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmltcG9ydCB7IGdldFBvc3QgfSBmcm9tIFwifi9wb3N0XCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgaW52YXJpYW50KHBhcmFtcy5zbHVnLCBcImV4cGVjdGVkIHBhcmFtcy5zbHVnXCIpO1xuICByZXR1cm4gZ2V0UG9zdChwYXJhbXMuc2x1Zyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0U2x1ZygpIHtcbiAgY29uc3QgcG9zdCA9IHVzZUxvYWRlckRhdGEoKTtcbiAgcmV0dXJuIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0Lmh0bWwgfX0gLz47XG59XG4iLCAiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcGFyc2VGcm9udE1hdHRlciBmcm9tICdmcm9udC1tYXR0ZXInO1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jLCByZWFkZGlyU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0IHsgbWFya2VkIH0gZnJvbSAnbWFya2VkJztcblxuZXhwb3J0IHR5cGUgUG9zdCA9IHtcbiAgc2x1Zzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgUG9zdE1hcmtkb3duQXR0cmlidXRlcyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbn07XG5cbmNvbnN0IHBvc3RzUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9wb3N0cycpO1xuXG5mdW5jdGlvbiBpc1ZhbGlkUG9zdEF0dHJpYnV0ZXMoXG4gIGF0dHJpYnV0ZXM6IGFueVxuKTogYXR0cmlidXRlcyBpcyBQb3N0TWFya2Rvd25BdHRyaWJ1dGVzIHtcbiAgcmV0dXJuIGF0dHJpYnV0ZXM/LnRpdGxlO1xufVxuXG50eXBlIE5ld1Bvc3QgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbiAgbWFya2Rvd246IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3N0KHBvc3Q6IE5ld1Bvc3QpIHtcbiAgY29uc3QgbWQgPSBgLS0tXFxudGl0bGU6ICR7cG9zdC50aXRsZX1cXG4tLS1cXG5cXG4ke3Bvc3QubWFya2Rvd259YDtcbiAgd3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ocG9zdHNQYXRoLCBwb3N0LnNsdWcgKyAnLm1kJyksIG1kKTtcbiAgcmV0dXJuIGdldFBvc3QocG9zdC5zbHVnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3Qoc2x1Zzogc3RyaW5nKSB7XG4gIGNvbnN0IGZpbGVwYXRoID0gcGF0aC5qb2luKHBvc3RzUGF0aCwgc2x1ZyArICcubWQnKTtcbiAgY29uc3QgZmlsZSA9IHJlYWRGaWxlU3luYyhmaWxlcGF0aCk7XG4gIGNvbnN0IHsgYXR0cmlidXRlcywgYm9keSB9ID0gcGFyc2VGcm9udE1hdHRlcihmaWxlLnRvU3RyaW5nKCkpO1xuICBpbnZhcmlhbnQoXG4gICAgaXNWYWxpZFBvc3RBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpLFxuICAgIGBQb3N0ICR7ZmlsZXBhdGh9IGlzIG1pc3NpbmcgYXR0cmlidXRlc2BcbiAgKTtcbiAgY29uc3QgaHRtbCA9IG1hcmtlZChib2R5KTtcbiAgcmV0dXJuIHsgc2x1ZywgaHRtbCwgdGl0bGU6IGF0dHJpYnV0ZXMudGl0bGUgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICBjb25zdCBkaXIgPSByZWFkZGlyU3luYyhwb3N0c1BhdGgpO1xuICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgZGlyLm1hcCgoZmlsZW5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSByZWFkRmlsZVN5bmMocGF0aC5qb2luKHBvc3RzUGF0aCwgZmlsZW5hbWUpKTtcbiAgICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gcGFyc2VGcm9udE1hdHRlcihmaWxlLnRvU3RyaW5nKCkpO1xuICAgICAgaW52YXJpYW50KGlzVmFsaWRQb3N0QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzbHVnOiBmaWxlbmFtZS5yZXBsYWNlKC9cXC5tZCQvLCAnJyksXG4gICAgICAgIHRpdGxlOiBhdHRyaWJ1dGVzLnRpdGxlLFxuICAgICAgfTtcbiAgICB9KVxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tIFwifi9wb3N0XCI7XG5pbXBvcnQgdHlwZSB7IFBvc3QgfSBmcm9tIFwifi9wb3N0XCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSAoKSA9PiB7XG4gIHJldHVybiBnZXRQb3N0cygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gdXNlTG9hZGVyRGF0YTxQb3N0W10+KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Qb3N0czwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cG9zdC5zbHVnfT5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtwb3N0LnNsdWd9Pntwb3N0LnRpdGxlfTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgT3V0bGV0LCBMaW5rLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSBcIn4vcG9zdFwiO1xuaW1wb3J0IHR5cGUgeyBQb3N0IH0gZnJvbSBcIn4vcG9zdFwiO1xuaW1wb3J0IGFkbWluU3R5bGVzIGZyb20gXCJ+L3N0eWxlcy9hZG1pbi5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogYWRtaW5TdHlsZXMgfV07XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gKCkgPT4ge1xuICByZXR1cm4gZ2V0UG9zdHMoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluKCkge1xuICBjb25zdCBwb3N0cyA9IHVzZUxvYWRlckRhdGE8UG9zdFtdPigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW5cIj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxoMT5BZG1pbjwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cG9zdC5zbHVnfT5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvcG9zdHMvJHtwb3N0LnNsdWd9YH0+e3Bvc3QudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPG1haW4+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPHA+XG4gICAgICA8TGluayB0bz1cIm5ld1wiPkNyZWF0ZSBhIE5ldyBQb3N0PC9MaW5rPlxuICAgIDwvcD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VUcmFuc2l0aW9uLCB1c2VBY3Rpb25EYXRhLCBGb3JtLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuaW1wb3J0IHsgY3JlYXRlUG9zdCB9IGZyb20gXCJ+L3Bvc3RcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgYXdhaXQgbmV3IFByb21pc2UocmVzID0+IHNldFRpbWVvdXQocmVzLCAxMDAwKSk7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuICBjb25zdCBzbHVnID0gZm9ybURhdGEuZ2V0KFwic2x1Z1wiKTtcbiAgY29uc3QgbWFya2Rvd24gPSBmb3JtRGF0YS5nZXQoXCJtYXJrZG93blwiKTtcblxuICBjb25zdCBlcnJvcnM6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge307XG4gIGlmICghdGl0bGUpIGVycm9ycy50aXRsZSA9IHRydWU7XG4gIGlmICghc2x1ZykgZXJyb3JzLnNsdWcgPSB0cnVlO1xuICBpZiAoIW1hcmtkb3duKSBlcnJvcnMubWFya2Rvd24gPSB0cnVlO1xuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBpbnZhcmlhbnQodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBzbHVnID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBtYXJrZG93biA9PT0gXCJzdHJpbmdcIik7XG4gIGF3YWl0IGNyZWF0ZVBvc3QoeyB0aXRsZSwgc2x1ZywgbWFya2Rvd24gfSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2FkbWluXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3UG9zdCgpIHtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgPHA+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBQb3N0IFRpdGxlOiB7ZXJyb3JzPy50aXRsZSA/IDxlbT5UaXRsZSBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH1cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBQb3N0IFNsdWc6IHtlcnJvcnM/LnNsdWcgPyA8ZW0+U2x1ZyBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH1cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2x1Z1wiIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYXJrZG93blwiPk1hcmtkb3duOjwvbGFiZWw+e1wiIFwifVxuICAgICAgICB7ZXJyb3JzPy5tYXJrZG93biA/IDxlbT5NYXJrZG93biBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDx0ZXh0YXJlYSByb3dzPXsyMH0gbmFtZT1cIm1hcmtkb3duXCIgLz5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICB7dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gXCJDcmVhdGluZy4uLlwiIDogXCJDcmVhdGUgUG9zdFwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvcD5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBqc29uLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbnR5cGUgSW5kZXhEYXRhID0ge1xuICByZXNvdXJjZXM6IEFycmF5PHsgbmFtZTogc3RyaW5nOyB1cmw6IHN0cmluZyB9PjtcbiAgZGVtb3M6IEFycmF5PHsgbmFtZTogc3RyaW5nOyB0bzogc3RyaW5nIH0+O1xufTtcblxuLy8gTG9hZGVycyBwcm92aWRlIGRhdGEgdG8gY29tcG9uZW50cyBhbmQgYXJlIG9ubHkgZXZlciBjYWxsZWQgb24gdGhlIHNlcnZlciwgc29cbi8vIHlvdSBjYW4gY29ubmVjdCB0byBhIGRhdGFiYXNlIG9yIHJ1biBhbnkgc2VydmVyIHNpZGUgY29kZSB5b3Ugd2FudCByaWdodCBuZXh0XG4vLyB0byB0aGUgY29tcG9uZW50IHRoYXQgcmVuZGVycyBpdC5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNsb2FkZXJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBkYXRhOiBJbmRleERhdGEgPSB7XG4gICAgcmVzb3VyY2VzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUmVtaXggRG9jc1wiLFxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9yZW1peC5ydW4vZG9jc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlJlYWN0IFJvdXRlciBEb2NzXCIsXG4gICAgICAgIHVybDogXCJyZWFjdHJvdXRlci5jb20vZG9jc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlJlbWl4IERpc2NvcmRcIixcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vZGlzY29yZC5nZy9WQmVQczZkXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIGRlbW9zOiBbXG4gICAgICB7XG4gICAgICAgIHRvOiBcImRlbW9zL2FjdGlvbnNcIixcbiAgICAgICAgbmFtZTogXCJBY3Rpb25zXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRvOiBcImRlbW9zL2Fib3V0XCIsXG4gICAgICAgIG5hbWU6IFwiTmVzdGVkIFJvdXRlcywgQ1NTIGxvYWRpbmcvdW5sb2FkaW5nXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRvOiBcImRlbW9zL3BhcmFtc1wiLFxuICAgICAgICBuYW1lOiBcIlVSTCBQYXJhbXMgYW5kIEVycm9yIEJvdW5kYXJpZXNcIlxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICAvLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvcmVtaXgjanNvblxuICByZXR1cm4ganNvbihkYXRhKTtcbn07XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNtZXRhXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIlJlbWl4IFN0YXJ0ZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXZWxjb21lIHRvIHJlbWl4IVwiXG4gIH07XG59O1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9ndWlkZXMvcm91dGluZyNpbmRleC1yb3V0ZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxJbmRleERhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbWl4X19wYWdlXCI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgyPldlbGNvbWUgdG8gUmVtaXghPC9oMj5cbiAgICAgICAgPHA+V2UncmUgc3Rva2VkIHRoYXQgeW91J3JlIGhlcmUuIFx1RDgzRVx1REQ3MzwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRmVlbCBmcmVlIHRvIHRha2UgYSBsb29rIGFyb3VuZCB0aGUgY29kZSB0byBzZWUgaG93IFJlbWl4IGRvZXMgdGhpbmdzLFxuICAgICAgICAgIGl0IG1pZ2h0IGJlIGEgYml0IGRpZmZlcmVudCB0aGFuIHdoYXQgeW91XHUyMDE5cmUgdXNlZCB0by4gV2hlbiB5b3UncmVcbiAgICAgICAgICByZWFkeSB0byBkaXZlIGRlZXBlciwgd2UndmUgZ290IHBsZW50eSBvZiByZXNvdXJjZXMgdG8gZ2V0IHlvdVxuICAgICAgICAgIHVwLWFuZC1ydW5uaW5nIHF1aWNrbHkuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQ2hlY2sgb3V0IGFsbCB0aGUgZGVtb3MgaW4gdGhpcyBzdGFydGVyLCBhbmQgdGhlbiBqdXN0IGRlbGV0ZSB0aGV7XCIgXCJ9XG4gICAgICAgICAgPGNvZGU+YXBwL3JvdXRlcy9kZW1vczwvY29kZT4gYW5kIDxjb2RlPmFwcC9zdHlsZXMvZGVtb3M8L2NvZGU+e1wiIFwifVxuICAgICAgICAgIGZvbGRlcnMgd2hlbiB5b3UncmUgcmVhZHkgdG8gdHVybiB0aGlzIGludG8geW91ciBuZXh0IHByb2plY3QuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxhc2lkZT5cbiAgICAgICAgPGgyPkRlbW9zIEluIFRoaXMgQXBwPC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtkYXRhLmRlbW9zLm1hcChkZW1vID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2RlbW8udG99IGNsYXNzTmFtZT1cInJlbWl4X19wYWdlX19yZXNvdXJjZVwiPlxuICAgICAgICAgICAgICA8TGluayB0bz17ZGVtby50b30gcHJlZmV0Y2g9XCJpbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7ZGVtby5uYW1lfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8aDI+UmVzb3VyY2VzPC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtkYXRhLnJlc291cmNlcy5tYXAocmVzb3VyY2UgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cmVzb3VyY2UudXJsfSBjbGFzc05hbWU9XCJyZW1peF9fcGFnZV9fcmVzb3VyY2VcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17cmVzb3VyY2UudXJsfT57cmVzb3VyY2UubmFtZX08L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FB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
