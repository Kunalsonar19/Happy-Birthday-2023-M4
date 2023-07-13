function qS(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var z =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ms(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function YS(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var i = [null];
        i.push.apply(i, arguments);
        var o = Function.bind.apply(t, i);
        return new o();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Oy = { exports: {} },
  ys = {},
  ky = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var So = Symbol.for("react.element"),
  XS = Symbol.for("react.portal"),
  ZS = Symbol.for("react.fragment"),
  JS = Symbol.for("react.strict_mode"),
  ex = Symbol.for("react.profiler"),
  tx = Symbol.for("react.provider"),
  nx = Symbol.for("react.context"),
  rx = Symbol.for("react.forward_ref"),
  ix = Symbol.for("react.suspense"),
  ox = Symbol.for("react.memo"),
  ax = Symbol.for("react.lazy"),
  Dd = Symbol.iterator;
function sx(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Dd && e[Dd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var My = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ry = Object.assign,
  Ly = {};
function Xr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ly),
    (this.updater = n || My);
}
Xr.prototype.isReactComponent = {};
Xr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Xr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Iy() {}
Iy.prototype = Xr.prototype;
function Lc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ly),
    (this.updater = n || My);
}
var Ic = (Lc.prototype = new Iy());
Ic.constructor = Lc;
Ry(Ic, Xr.prototype);
Ic.isPureReactComponent = !0;
var jd = Array.isArray,
  Dy = Object.prototype.hasOwnProperty,
  Dc = { current: null },
  jy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ny(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Dy.call(t, r) && !jy.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: So,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: Dc.current,
  };
}
function lx(e, t) {
  return {
    $$typeof: So,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function jc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === So;
}
function ux(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Nd = /\/+/g;
function il(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ux("" + e.key)
    : t.toString(36);
}
function sa(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case So:
          case XS:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + il(a, 0) : r),
      jd(i)
        ? ((n = ""),
          e != null && (n = e.replace(Nd, "$&/") + "/"),
          sa(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (jc(i) &&
            (i = lx(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Nd, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), jd(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var l = r + il(o, s);
      a += sa(o, t, n, l, i);
    }
  else if (((l = sx(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + il(o, s++)), (a += sa(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Io(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    sa(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function cx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = { current: null },
  la = { transition: null },
  fx = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: la,
    ReactCurrentOwner: Dc,
  };
W.Children = {
  map: Io,
  forEach: function (e, t, n) {
    Io(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Io(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Io(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!jc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
W.Component = Xr;
W.Fragment = ZS;
W.Profiler = ex;
W.PureComponent = Lc;
W.StrictMode = JS;
W.Suspense = ix;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fx;
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ry({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = Dc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      Dy.call(t, l) &&
        !jy.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: So, type: e.type, key: i, ref: o, props: r, _owner: a };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: nx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: tx, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = Ny;
W.createFactory = function (e) {
  var t = Ny.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: rx, render: e };
};
W.isValidElement = jc;
W.lazy = function (e) {
  return { $$typeof: ax, _payload: { _status: -1, _result: e }, _init: cx };
};
W.memo = function (e, t) {
  return { $$typeof: ox, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = la.transition;
  la.transition = {};
  try {
    e();
  } finally {
    la.transition = t;
  }
};
W.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
W.useCallback = function (e, t) {
  return Ve.current.useCallback(e, t);
};
W.useContext = function (e) {
  return Ve.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return Ve.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return Ve.current.useEffect(e, t);
};
W.useId = function () {
  return Ve.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return Ve.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return Ve.current.useRef(e);
};
W.useState = function (e) {
  return Ve.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return Ve.current.useTransition();
};
W.version = "18.2.0";
ky.exports = W;
var P = ky.exports;
const je = ms(P),
  dx = qS({ __proto__: null, default: je }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hx = P,
  px = Symbol.for("react.element"),
  mx = Symbol.for("react.fragment"),
  yx = Object.prototype.hasOwnProperty,
  vx = hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  gx = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fy(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) yx.call(t, r) && !gx.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: px,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: vx.current,
  };
}
ys.Fragment = mx;
ys.jsx = Fy;
ys.jsxs = Fy;
Oy.exports = ys;
var M = Oy.exports;
var ou = {},
  Vy = { exports: {} },
  it = {},
  By = { exports: {} },
  Uy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, I) {
    var E = k.length;
    k.push(I);
    e: for (; 0 < E; ) {
      var A = (E - 1) >>> 1,
        L = k[A];
      if (0 < i(L, I)) (k[A] = I), (k[E] = L), (E = A);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var I = k[0],
      E = k.pop();
    if (E !== I) {
      k[0] = E;
      e: for (var A = 0, L = k.length, Q = L >>> 1; A < Q; ) {
        var K = 2 * (A + 1) - 1,
          fe = k[K],
          q = K + 1,
          he = k[q];
        if (0 > i(fe, E))
          q < L && 0 > i(he, fe)
            ? ((k[A] = he), (k[q] = E), (A = q))
            : ((k[A] = fe), (k[K] = E), (A = K));
        else if (q < L && 0 > i(he, E)) (k[A] = he), (k[q] = E), (A = q);
        else break e;
      }
    }
    return I;
  }
  function i(k, I) {
    var E = k.sortIndex - I.sortIndex;
    return E !== 0 ? E : k.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    m = !1,
    p = !1,
    g = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(k) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= k)
        r(u), (I.sortIndex = I.expirationTime), t(l, I);
      else break;
      I = n(u);
    }
  }
  function x(k) {
    if (((g = !1), v(k), !p))
      if (n(l) !== null) (p = !0), j(w);
      else {
        var I = n(u);
        I !== null && ce(x, I.startTime - k);
      }
  }
  function w(k, I) {
    (p = !1), g && ((g = !1), y(_), (_ = -1)), (m = !0);
    var E = f;
    try {
      for (
        v(I), d = n(l);
        d !== null && (!(d.expirationTime > I) || (k && !F()));

      ) {
        var A = d.callback;
        if (typeof A == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var L = A(d.expirationTime <= I);
          (I = e.unstable_now()),
            typeof L == "function" ? (d.callback = L) : d === n(l) && r(l),
            v(I);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Q = !0;
      else {
        var K = n(u);
        K !== null && ce(x, K.startTime - I), (Q = !1);
      }
      return Q;
    } finally {
      (d = null), (f = E), (m = !1);
    }
  }
  var C = !1,
    T = null,
    _ = -1,
    O = 5,
    b = -1;
  function F() {
    return !(e.unstable_now() - b < O);
  }
  function B() {
    if (T !== null) {
      var k = e.unstable_now();
      b = k;
      var I = !0;
      try {
        I = T(!0, k);
      } finally {
        I ? U() : ((C = !1), (T = null));
      }
    } else C = !1;
  }
  var U;
  if (typeof h == "function")
    U = function () {
      h(B);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(),
      V = N.port2;
    (N.port1.onmessage = B),
      (U = function () {
        V.postMessage(null);
      });
  } else
    U = function () {
      S(B, 0);
    };
  function j(k) {
    (T = k), C || ((C = !0), U());
  }
  function ce(k, I) {
    _ = S(function () {
      k(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || m || ((p = !0), j(w));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (k) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = f;
      }
      var E = f;
      f = I;
      try {
        return k();
      } finally {
        f = E;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, I) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var E = f;
      f = k;
      try {
        return I();
      } finally {
        f = E;
      }
    }),
    (e.unstable_scheduleCallback = function (k, I, E) {
      var A = e.unstable_now();
      switch (
        (typeof E == "object" && E !== null
          ? ((E = E.delay), (E = typeof E == "number" && 0 < E ? A + E : A))
          : (E = A),
        k)
      ) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return (
        (L = E + L),
        (k = {
          id: c++,
          callback: I,
          priorityLevel: k,
          startTime: E,
          expirationTime: L,
          sortIndex: -1,
        }),
        E > A
          ? ((k.sortIndex = E),
            t(u, k),
            n(l) === null &&
              k === n(u) &&
              (g ? (y(_), (_ = -1)) : (g = !0), ce(x, E - A)))
          : ((k.sortIndex = L), t(l, k), p || m || ((p = !0), j(w))),
        k
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (k) {
      var I = f;
      return function () {
        var E = f;
        f = I;
        try {
          return k.apply(this, arguments);
        } finally {
          f = E;
        }
      };
    });
})(Uy);
By.exports = Uy;
var Sx = By.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zy = P,
  nt = Sx;
function $(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Hy = new Set(),
  Ki = {};
function er(e, t) {
  Vr(e, t), Vr(e + "Capture", t);
}
function Vr(e, t) {
  for (Ki[e] = t, e = 0; e < t.length; e++) Hy.add(t[e]);
}
var Ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  au = Object.prototype.hasOwnProperty,
  xx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fd = {},
  Vd = {};
function wx(e) {
  return au.call(Vd, e)
    ? !0
    : au.call(Fd, e)
    ? !1
    : xx.test(e)
    ? (Vd[e] = !0)
    : ((Fd[e] = !0), !1);
}
function Px(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _x(e, t, n, r) {
  if (t === null || typeof t > "u" || Px(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Be(e, t, n, r, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new Be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ae[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ae[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ae[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ae[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ae[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ae[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ae[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Nc = /[\-:]([a-z])/g;
function Fc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nc, Fc);
    Ae[t] = new Be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nc, Fc);
    Ae[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Nc, Fc);
  Ae[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ae[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new Be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ae[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Vc(e, t, n, r) {
  var i = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (_x(t, n, i, r) && (n = null),
    r || i === null
      ? wx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var qt = zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Do = Symbol.for("react.element"),
  pr = Symbol.for("react.portal"),
  mr = Symbol.for("react.fragment"),
  Bc = Symbol.for("react.strict_mode"),
  su = Symbol.for("react.profiler"),
  Wy = Symbol.for("react.provider"),
  Gy = Symbol.for("react.context"),
  Uc = Symbol.for("react.forward_ref"),
  lu = Symbol.for("react.suspense"),
  uu = Symbol.for("react.suspense_list"),
  zc = Symbol.for("react.memo"),
  en = Symbol.for("react.lazy"),
  Ky = Symbol.for("react.offscreen"),
  Bd = Symbol.iterator;
function di(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bd && e[Bd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  ol;
function Ti(e) {
  if (ol === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ol = (t && t[1]) || "";
    }
  return (
    `
` +
    ol +
    e
  );
}
var al = !1;
function sl(e, t) {
  if (!e || al) return "";
  al = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          s = o.length - 1;
        1 <= a && 0 <= s && i[a] !== o[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (i[a] !== o[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || i[a] !== o[s])) {
                var l =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (al = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ti(e) : "";
}
function Cx(e) {
  switch (e.tag) {
    case 5:
      return Ti(e.type);
    case 16:
      return Ti("Lazy");
    case 13:
      return Ti("Suspense");
    case 19:
      return Ti("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = sl(e.type, !1)), e;
    case 11:
      return (e = sl(e.type.render, !1)), e;
    case 1:
      return (e = sl(e.type, !0)), e;
    default:
      return "";
  }
}
function cu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case mr:
      return "Fragment";
    case pr:
      return "Portal";
    case su:
      return "Profiler";
    case Bc:
      return "StrictMode";
    case lu:
      return "Suspense";
    case uu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Gy:
        return (e.displayName || "Context") + ".Consumer";
      case Wy:
        return (e._context.displayName || "Context") + ".Provider";
      case Uc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case zc:
        return (
          (t = e.displayName || null), t !== null ? t : cu(e.type) || "Memo"
        );
      case en:
        (t = e._payload), (e = e._init);
        try {
          return cu(e(t));
        } catch {}
    }
  return null;
}
function Tx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return cu(t);
    case 8:
      return t === Bc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Pn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Qy(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ex(e) {
  var t = Qy(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = "" + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function jo(e) {
  e._valueTracker || (e._valueTracker = Ex(e));
}
function qy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Qy(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function _a(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fu(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ud(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Pn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Yy(e, t) {
  (t = t.checked), t != null && Vc(e, "checked", t, !1);
}
function du(e, t) {
  Yy(e, t);
  var n = Pn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? hu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && hu(e, t.type, Pn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function zd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function hu(e, t, n) {
  (t !== "number" || _a(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ei = Array.isArray;
function kr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Pn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function pu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91));
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Hd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error($(92));
      if (Ei(n)) {
        if (1 < n.length) throw Error($(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Pn(n) };
}
function Xy(e, t) {
  var n = Pn(t.value),
    r = Pn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Wd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Zy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var No,
  Jy = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        No = No || document.createElement("div"),
          No.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = No.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ki = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  $x = ["Webkit", "ms", "Moz", "O"];
Object.keys(ki).forEach(function (e) {
  $x.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ki[t] = ki[e]);
  });
});
function ev(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ki.hasOwnProperty(e) && ki[e])
    ? ("" + t).trim()
    : t + "px";
}
function tv(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ev(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Ax = ue(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function yu(e, t) {
  if (t) {
    if (Ax[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error($(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error($(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error($(62));
  }
}
function vu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var gu = null;
function Hc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Su = null,
  Mr = null,
  Rr = null;
function Gd(e) {
  if ((e = Po(e))) {
    if (typeof Su != "function") throw Error($(280));
    var t = e.stateNode;
    t && ((t = ws(t)), Su(e.stateNode, e.type, t));
  }
}
function nv(e) {
  Mr ? (Rr ? Rr.push(e) : (Rr = [e])) : (Mr = e);
}
function rv() {
  if (Mr) {
    var e = Mr,
      t = Rr;
    if (((Rr = Mr = null), Gd(e), t)) for (e = 0; e < t.length; e++) Gd(t[e]);
  }
}
function iv(e, t) {
  return e(t);
}
function ov() {}
var ll = !1;
function av(e, t, n) {
  if (ll) return e(t, n);
  ll = !0;
  try {
    return iv(e, t, n);
  } finally {
    (ll = !1), (Mr !== null || Rr !== null) && (ov(), rv());
  }
}
function qi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ws(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error($(231, t, typeof n));
  return n;
}
var xu = !1;
if (Ht)
  try {
    var hi = {};
    Object.defineProperty(hi, "passive", {
      get: function () {
        xu = !0;
      },
    }),
      window.addEventListener("test", hi, hi),
      window.removeEventListener("test", hi, hi);
  } catch {
    xu = !1;
  }
function bx(e, t, n, r, i, o, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Mi = !1,
  Ca = null,
  Ta = !1,
  wu = null,
  Ox = {
    onError: function (e) {
      (Mi = !0), (Ca = e);
    },
  };
function kx(e, t, n, r, i, o, a, s, l) {
  (Mi = !1), (Ca = null), bx.apply(Ox, arguments);
}
function Mx(e, t, n, r, i, o, a, s, l) {
  if ((kx.apply(this, arguments), Mi)) {
    if (Mi) {
      var u = Ca;
      (Mi = !1), (Ca = null);
    } else throw Error($(198));
    Ta || ((Ta = !0), (wu = u));
  }
}
function tr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function sv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Kd(e) {
  if (tr(e) !== e) throw Error($(188));
}
function Rx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = tr(e)), t === null)) throw Error($(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Kd(i), e;
        if (o === r) return Kd(i), t;
        o = o.sibling;
      }
      throw Error($(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var a = !1, s = i.child; s; ) {
        if (s === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = o.child; s; ) {
          if (s === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error($(189));
      }
    }
    if (n.alternate !== r) throw Error($(190));
  }
  if (n.tag !== 3) throw Error($(188));
  return n.stateNode.current === n ? e : t;
}
function lv(e) {
  return (e = Rx(e)), e !== null ? uv(e) : null;
}
function uv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = uv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cv = nt.unstable_scheduleCallback,
  Qd = nt.unstable_cancelCallback,
  Lx = nt.unstable_shouldYield,
  Ix = nt.unstable_requestPaint,
  pe = nt.unstable_now,
  Dx = nt.unstable_getCurrentPriorityLevel,
  Wc = nt.unstable_ImmediatePriority,
  fv = nt.unstable_UserBlockingPriority,
  Ea = nt.unstable_NormalPriority,
  jx = nt.unstable_LowPriority,
  dv = nt.unstable_IdlePriority,
  vs = null,
  $t = null;
function Nx(e) {
  if ($t && typeof $t.onCommitFiberRoot == "function")
    try {
      $t.onCommitFiberRoot(vs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var gt = Math.clz32 ? Math.clz32 : Bx,
  Fx = Math.log,
  Vx = Math.LN2;
function Bx(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Fx(e) / Vx) | 0)) | 0;
}
var Fo = 64,
  Vo = 4194304;
function $i(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $a(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~i;
    s !== 0 ? (r = $i(s)) : ((o &= a), o !== 0 && (r = $i(o)));
  } else (a = n & ~i), a !== 0 ? (r = $i(a)) : o !== 0 && (r = $i(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - gt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Ux(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function zx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - gt(o),
      s = 1 << a,
      l = i[a];
    l === -1
      ? (!(s & n) || s & r) && (i[a] = Ux(s, t))
      : l <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Pu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function hv() {
  var e = Fo;
  return (Fo <<= 1), !(Fo & 4194240) && (Fo = 64), e;
}
function ul(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function xo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - gt(t)),
    (e[t] = n);
}
function Hx(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - gt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Gc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - gt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Y = 0;
function pv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var mv,
  Kc,
  yv,
  vv,
  gv,
  _u = !1,
  Bo = [],
  fn = null,
  dn = null,
  hn = null,
  Yi = new Map(),
  Xi = new Map(),
  on = [],
  Wx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function qd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      fn = null;
      break;
    case "dragenter":
    case "dragleave":
      dn = null;
      break;
    case "mouseover":
    case "mouseout":
      hn = null;
      break;
    case "pointerover":
    case "pointerout":
      Yi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xi.delete(t.pointerId);
  }
}
function pi(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Po(t)), t !== null && Kc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Gx(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (fn = pi(fn, e, t, n, r, i)), !0;
    case "dragenter":
      return (dn = pi(dn, e, t, n, r, i)), !0;
    case "mouseover":
      return (hn = pi(hn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Yi.set(o, pi(Yi.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Xi.set(o, pi(Xi.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Sv(e) {
  var t = Vn(e.target);
  if (t !== null) {
    var n = tr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = sv(n)), t !== null)) {
          (e.blockedOn = t),
            gv(e.priority, function () {
              yv(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ua(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Cu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (gu = r), n.target.dispatchEvent(r), (gu = null);
    } else return (t = Po(n)), t !== null && Kc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Yd(e, t, n) {
  ua(e) && n.delete(t);
}
function Kx() {
  (_u = !1),
    fn !== null && ua(fn) && (fn = null),
    dn !== null && ua(dn) && (dn = null),
    hn !== null && ua(hn) && (hn = null),
    Yi.forEach(Yd),
    Xi.forEach(Yd);
}
function mi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _u ||
      ((_u = !0),
      nt.unstable_scheduleCallback(nt.unstable_NormalPriority, Kx)));
}
function Zi(e) {
  function t(i) {
    return mi(i, e);
  }
  if (0 < Bo.length) {
    mi(Bo[0], e);
    for (var n = 1; n < Bo.length; n++) {
      var r = Bo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    fn !== null && mi(fn, e),
      dn !== null && mi(dn, e),
      hn !== null && mi(hn, e),
      Yi.forEach(t),
      Xi.forEach(t),
      n = 0;
    n < on.length;
    n++
  )
    (r = on[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < on.length && ((n = on[0]), n.blockedOn === null); )
    Sv(n), n.blockedOn === null && on.shift();
}
var Lr = qt.ReactCurrentBatchConfig,
  Aa = !0;
function Qx(e, t, n, r) {
  var i = Y,
    o = Lr.transition;
  Lr.transition = null;
  try {
    (Y = 1), Qc(e, t, n, r);
  } finally {
    (Y = i), (Lr.transition = o);
  }
}
function qx(e, t, n, r) {
  var i = Y,
    o = Lr.transition;
  Lr.transition = null;
  try {
    (Y = 4), Qc(e, t, n, r);
  } finally {
    (Y = i), (Lr.transition = o);
  }
}
function Qc(e, t, n, r) {
  if (Aa) {
    var i = Cu(e, t, n, r);
    if (i === null) Sl(e, t, r, ba, n), qd(e, r);
    else if (Gx(i, e, t, n, r)) r.stopPropagation();
    else if ((qd(e, r), t & 4 && -1 < Wx.indexOf(e))) {
      for (; i !== null; ) {
        var o = Po(i);
        if (
          (o !== null && mv(o),
          (o = Cu(e, t, n, r)),
          o === null && Sl(e, t, r, ba, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Sl(e, t, r, null, n);
  }
}
var ba = null;
function Cu(e, t, n, r) {
  if (((ba = null), (e = Hc(r)), (e = Vn(e)), e !== null))
    if (((t = tr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = sv(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ba = e), null;
}
function xv(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Dx()) {
        case Wc:
          return 1;
        case fv:
          return 4;
        case Ea:
        case jx:
          return 16;
        case dv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var sn = null,
  qc = null,
  ca = null;
function wv() {
  if (ca) return ca;
  var e,
    t = qc,
    n = t.length,
    r,
    i = "value" in sn ? sn.value : sn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (ca = i.slice(e, 1 < r ? 1 - r : void 0));
}
function fa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Uo() {
  return !0;
}
function Xd() {
  return !1;
}
function ot(e) {
  function t(n, r, i, o, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Uo
        : Xd),
      (this.isPropagationStopped = Xd),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Uo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Uo));
      },
      persist: function () {},
      isPersistent: Uo,
    }),
    t
  );
}
var Zr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Yc = ot(Zr),
  wo = ue({}, Zr, { view: 0, detail: 0 }),
  Yx = ot(wo),
  cl,
  fl,
  yi,
  gs = ue({}, wo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Xc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== yi &&
            (yi && e.type === "mousemove"
              ? ((cl = e.screenX - yi.screenX), (fl = e.screenY - yi.screenY))
              : (fl = cl = 0),
            (yi = e)),
          cl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fl;
    },
  }),
  Zd = ot(gs),
  Xx = ue({}, gs, { dataTransfer: 0 }),
  Zx = ot(Xx),
  Jx = ue({}, wo, { relatedTarget: 0 }),
  dl = ot(Jx),
  ew = ue({}, Zr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tw = ot(ew),
  nw = ue({}, Zr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  rw = ot(nw),
  iw = ue({}, Zr, { data: 0 }),
  Jd = ot(iw),
  ow = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  aw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  sw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function lw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sw[e]) ? !!t[e] : !1;
}
function Xc() {
  return lw;
}
var uw = ue({}, wo, {
    key: function (e) {
      if (e.key) {
        var t = ow[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = fa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? aw[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xc,
    charCode: function (e) {
      return e.type === "keypress" ? fa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? fa(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  cw = ot(uw),
  fw = ue({}, gs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  eh = ot(fw),
  dw = ue({}, wo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xc,
  }),
  hw = ot(dw),
  pw = ue({}, Zr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mw = ot(pw),
  yw = ue({}, gs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  vw = ot(yw),
  gw = [9, 13, 27, 32],
  Zc = Ht && "CompositionEvent" in window,
  Ri = null;
Ht && "documentMode" in document && (Ri = document.documentMode);
var Sw = Ht && "TextEvent" in window && !Ri,
  Pv = Ht && (!Zc || (Ri && 8 < Ri && 11 >= Ri)),
  th = String.fromCharCode(32),
  nh = !1;
function _v(e, t) {
  switch (e) {
    case "keyup":
      return gw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Cv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var yr = !1;
function xw(e, t) {
  switch (e) {
    case "compositionend":
      return Cv(t);
    case "keypress":
      return t.which !== 32 ? null : ((nh = !0), th);
    case "textInput":
      return (e = t.data), e === th && nh ? null : e;
    default:
      return null;
  }
}
function ww(e, t) {
  if (yr)
    return e === "compositionend" || (!Zc && _v(e, t))
      ? ((e = wv()), (ca = qc = sn = null), (yr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Pv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function rh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pw[e.type] : t === "textarea";
}
function Tv(e, t, n, r) {
  nv(r),
    (t = Oa(t, "onChange")),
    0 < t.length &&
      ((n = new Yc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Li = null,
  Ji = null;
function _w(e) {
  Dv(e, 0);
}
function Ss(e) {
  var t = Sr(e);
  if (qy(t)) return e;
}
function Cw(e, t) {
  if (e === "change") return t;
}
var Ev = !1;
if (Ht) {
  var hl;
  if (Ht) {
    var pl = "oninput" in document;
    if (!pl) {
      var ih = document.createElement("div");
      ih.setAttribute("oninput", "return;"),
        (pl = typeof ih.oninput == "function");
    }
    hl = pl;
  } else hl = !1;
  Ev = hl && (!document.documentMode || 9 < document.documentMode);
}
function oh() {
  Li && (Li.detachEvent("onpropertychange", $v), (Ji = Li = null));
}
function $v(e) {
  if (e.propertyName === "value" && Ss(Ji)) {
    var t = [];
    Tv(t, Ji, e, Hc(e)), av(_w, t);
  }
}
function Tw(e, t, n) {
  e === "focusin"
    ? (oh(), (Li = t), (Ji = n), Li.attachEvent("onpropertychange", $v))
    : e === "focusout" && oh();
}
function Ew(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ss(Ji);
}
function $w(e, t) {
  if (e === "click") return Ss(t);
}
function Aw(e, t) {
  if (e === "input" || e === "change") return Ss(t);
}
function bw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var xt = typeof Object.is == "function" ? Object.is : bw;
function eo(e, t) {
  if (xt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!au.call(t, i) || !xt(e[i], t[i])) return !1;
  }
  return !0;
}
function ah(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function sh(e, t) {
  var n = ah(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ah(n);
  }
}
function Av(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Av(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function bv() {
  for (var e = window, t = _a(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = _a(e.document);
  }
  return t;
}
function Jc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ow(e) {
  var t = bv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Av(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Jc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = sh(n, o));
        var a = sh(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var kw = Ht && "documentMode" in document && 11 >= document.documentMode,
  vr = null,
  Tu = null,
  Ii = null,
  Eu = !1;
function lh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Eu ||
    vr == null ||
    vr !== _a(r) ||
    ((r = vr),
    "selectionStart" in r && Jc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ii && eo(Ii, r)) ||
      ((Ii = r),
      (r = Oa(Tu, "onSelect")),
      0 < r.length &&
        ((t = new Yc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = vr))));
}
function zo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var gr = {
    animationend: zo("Animation", "AnimationEnd"),
    animationiteration: zo("Animation", "AnimationIteration"),
    animationstart: zo("Animation", "AnimationStart"),
    transitionend: zo("Transition", "TransitionEnd"),
  },
  ml = {},
  Ov = {};
Ht &&
  ((Ov = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete gr.animationend.animation,
    delete gr.animationiteration.animation,
    delete gr.animationstart.animation),
  "TransitionEvent" in window || delete gr.transitionend.transition);
function xs(e) {
  if (ml[e]) return ml[e];
  if (!gr[e]) return e;
  var t = gr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ov) return (ml[e] = t[n]);
  return e;
}
var kv = xs("animationend"),
  Mv = xs("animationiteration"),
  Rv = xs("animationstart"),
  Lv = xs("transitionend"),
  Iv = new Map(),
  uh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function En(e, t) {
  Iv.set(e, t), er(t, [e]);
}
for (var yl = 0; yl < uh.length; yl++) {
  var vl = uh[yl],
    Mw = vl.toLowerCase(),
    Rw = vl[0].toUpperCase() + vl.slice(1);
  En(Mw, "on" + Rw);
}
En(kv, "onAnimationEnd");
En(Mv, "onAnimationIteration");
En(Rv, "onAnimationStart");
En("dblclick", "onDoubleClick");
En("focusin", "onFocus");
En("focusout", "onBlur");
En(Lv, "onTransitionEnd");
Vr("onMouseEnter", ["mouseout", "mouseover"]);
Vr("onMouseLeave", ["mouseout", "mouseover"]);
Vr("onPointerEnter", ["pointerout", "pointerover"]);
Vr("onPointerLeave", ["pointerout", "pointerover"]);
er(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
er(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
er(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
er(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
er(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ai =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Lw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ai));
function ch(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Mx(r, t, void 0, e), (e.currentTarget = null);
}
function Dv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== o && i.isPropagationStopped())) break e;
          ch(i, s, u), (o = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          ch(i, s, u), (o = l);
        }
    }
  }
  if (Ta) throw ((e = wu), (Ta = !1), (wu = null), e);
}
function J(e, t) {
  var n = t[ku];
  n === void 0 && (n = t[ku] = new Set());
  var r = e + "__bubble";
  n.has(r) || (jv(t, e, 2, !1), n.add(r));
}
function gl(e, t, n) {
  var r = 0;
  t && (r |= 4), jv(n, e, r, t);
}
var Ho = "_reactListening" + Math.random().toString(36).slice(2);
function to(e) {
  if (!e[Ho]) {
    (e[Ho] = !0),
      Hy.forEach(function (n) {
        n !== "selectionchange" && (Lw.has(n) || gl(n, !1, e), gl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ho] || ((t[Ho] = !0), gl("selectionchange", !1, t));
  }
}
function jv(e, t, n, r) {
  switch (xv(t)) {
    case 1:
      var i = Qx;
      break;
    case 4:
      i = qx;
      break;
    default:
      i = Qc;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !xu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Sl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = Vn(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = o = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  av(function () {
    var u = o,
      c = Hc(n),
      d = [];
    e: {
      var f = Iv.get(e);
      if (f !== void 0) {
        var m = Yc,
          p = e;
        switch (e) {
          case "keypress":
            if (fa(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = cw;
            break;
          case "focusin":
            (p = "focus"), (m = dl);
            break;
          case "focusout":
            (p = "blur"), (m = dl);
            break;
          case "beforeblur":
          case "afterblur":
            m = dl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Zd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Zx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = hw;
            break;
          case kv:
          case Mv:
          case Rv:
            m = tw;
            break;
          case Lv:
            m = mw;
            break;
          case "scroll":
            m = Yx;
            break;
          case "wheel":
            m = vw;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = rw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = eh;
        }
        var g = (t & 4) !== 0,
          S = !g && e === "scroll",
          y = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var x = v.stateNode;
          if (
            (v.tag === 5 &&
              x !== null &&
              ((v = x),
              y !== null && ((x = qi(h, y)), x != null && g.push(no(h, x, v)))),
            S)
          )
            break;
          h = h.return;
        }
        0 < g.length &&
          ((f = new m(f, p, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          f &&
            n !== gu &&
            (p = n.relatedTarget || n.fromElement) &&
            (Vn(p) || p[Wt]))
        )
          break e;
        if (
          (m || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          m
            ? ((p = n.relatedTarget || n.toElement),
              (m = u),
              (p = p ? Vn(p) : null),
              p !== null &&
                ((S = tr(p)), p !== S || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((m = null), (p = u)),
          m !== p)
        ) {
          if (
            ((g = Zd),
            (x = "onMouseLeave"),
            (y = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = eh),
              (x = "onPointerLeave"),
              (y = "onPointerEnter"),
              (h = "pointer")),
            (S = m == null ? f : Sr(m)),
            (v = p == null ? f : Sr(p)),
            (f = new g(x, h + "leave", m, n, c)),
            (f.target = S),
            (f.relatedTarget = v),
            (x = null),
            Vn(c) === u &&
              ((g = new g(y, h + "enter", p, n, c)),
              (g.target = v),
              (g.relatedTarget = S),
              (x = g)),
            (S = x),
            m && p)
          )
            t: {
              for (g = m, y = p, h = 0, v = g; v; v = lr(v)) h++;
              for (v = 0, x = y; x; x = lr(x)) v++;
              for (; 0 < h - v; ) (g = lr(g)), h--;
              for (; 0 < v - h; ) (y = lr(y)), v--;
              for (; h--; ) {
                if (g === y || (y !== null && g === y.alternate)) break t;
                (g = lr(g)), (y = lr(y));
              }
              g = null;
            }
          else g = null;
          m !== null && fh(d, f, m, g, !1),
            p !== null && S !== null && fh(d, S, p, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? Sr(u) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === "select" || (m === "input" && f.type === "file"))
        )
          var w = Cw;
        else if (rh(f))
          if (Ev) w = Aw;
          else {
            w = Ew;
            var C = Tw;
          }
        else
          (m = f.nodeName) &&
            m.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (w = $w);
        if (w && (w = w(e, u))) {
          Tv(d, w, n, c);
          break e;
        }
        C && C(e, f, u),
          e === "focusout" &&
            (C = f._wrapperState) &&
            C.controlled &&
            f.type === "number" &&
            hu(f, "number", f.value);
      }
      switch (((C = u ? Sr(u) : window), e)) {
        case "focusin":
          (rh(C) || C.contentEditable === "true") &&
            ((vr = C), (Tu = u), (Ii = null));
          break;
        case "focusout":
          Ii = Tu = vr = null;
          break;
        case "mousedown":
          Eu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Eu = !1), lh(d, n, c);
          break;
        case "selectionchange":
          if (kw) break;
        case "keydown":
        case "keyup":
          lh(d, n, c);
      }
      var T;
      if (Zc)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        yr
          ? _v(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Pv &&
          n.locale !== "ko" &&
          (yr || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && yr && (T = wv())
            : ((sn = c),
              (qc = "value" in sn ? sn.value : sn.textContent),
              (yr = !0))),
        (C = Oa(u, _)),
        0 < C.length &&
          ((_ = new Jd(_, e, null, n, c)),
          d.push({ event: _, listeners: C }),
          T ? (_.data = T) : ((T = Cv(n)), T !== null && (_.data = T)))),
        (T = Sw ? xw(e, n) : ww(e, n)) &&
          ((u = Oa(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Jd("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    Dv(d, t);
  });
}
function no(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Oa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = qi(e, n)),
      o != null && r.unshift(no(e, o, i)),
      (o = qi(e, t)),
      o != null && r.push(no(e, o, i))),
      (e = e.return);
  }
  return r;
}
function lr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fh(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((l = qi(n, o)), l != null && a.unshift(no(n, l, s)))
        : i || ((l = qi(n, o)), l != null && a.push(no(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Iw = /\r\n?/g,
  Dw = /\u0000|\uFFFD/g;
function dh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Iw,
      `
`
    )
    .replace(Dw, "");
}
function Wo(e, t, n) {
  if (((t = dh(t)), dh(e) !== t && n)) throw Error($(425));
}
function ka() {}
var $u = null,
  Au = null;
function bu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ou = typeof setTimeout == "function" ? setTimeout : void 0,
  jw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  hh = typeof Promise == "function" ? Promise : void 0,
  Nw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof hh < "u"
      ? function (e) {
          return hh.resolve(null).then(e).catch(Fw);
        }
      : Ou;
function Fw(e) {
  setTimeout(function () {
    throw e;
  });
}
function xl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Zi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Zi(t);
}
function pn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ph(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Jr = Math.random().toString(36).slice(2),
  Et = "__reactFiber$" + Jr,
  ro = "__reactProps$" + Jr,
  Wt = "__reactContainer$" + Jr,
  ku = "__reactEvents$" + Jr,
  Vw = "__reactListeners$" + Jr,
  Bw = "__reactHandles$" + Jr;
function Vn(e) {
  var t = e[Et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Wt] || n[Et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ph(e); e !== null; ) {
          if ((n = e[Et])) return n;
          e = ph(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Po(e) {
  return (
    (e = e[Et] || e[Wt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Sr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error($(33));
}
function ws(e) {
  return e[ro] || null;
}
var Mu = [],
  xr = -1;
function $n(e) {
  return { current: e };
}
function te(e) {
  0 > xr || ((e.current = Mu[xr]), (Mu[xr] = null), xr--);
}
function Z(e, t) {
  xr++, (Mu[xr] = e.current), (e.current = t);
}
var _n = {},
  Re = $n(_n),
  Qe = $n(!1),
  Qn = _n;
function Br(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _n;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function qe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ma() {
  te(Qe), te(Re);
}
function mh(e, t, n) {
  if (Re.current !== _n) throw Error($(168));
  Z(Re, t), Z(Qe, n);
}
function Nv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error($(108, Tx(e) || "Unknown", i));
  return ue({}, n, r);
}
function Ra(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _n),
    (Qn = Re.current),
    Z(Re, e),
    Z(Qe, Qe.current),
    !0
  );
}
function yh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error($(169));
  n
    ? ((e = Nv(e, t, Qn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Qe),
      te(Re),
      Z(Re, e))
    : te(Qe),
    Z(Qe, n);
}
var Dt = null,
  Ps = !1,
  wl = !1;
function Fv(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function Uw(e) {
  (Ps = !0), Fv(e);
}
function An() {
  if (!wl && Dt !== null) {
    wl = !0;
    var e = 0,
      t = Y;
    try {
      var n = Dt;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Dt = null), (Ps = !1);
    } catch (i) {
      throw (Dt !== null && (Dt = Dt.slice(e + 1)), cv(Wc, An), i);
    } finally {
      (Y = t), (wl = !1);
    }
  }
  return null;
}
var wr = [],
  Pr = 0,
  La = null,
  Ia = 0,
  st = [],
  lt = 0,
  qn = null,
  Nt = 1,
  Ft = "";
function Ln(e, t) {
  (wr[Pr++] = Ia), (wr[Pr++] = La), (La = e), (Ia = t);
}
function Vv(e, t, n) {
  (st[lt++] = Nt), (st[lt++] = Ft), (st[lt++] = qn), (qn = e);
  var r = Nt;
  e = Ft;
  var i = 32 - gt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - gt(t) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (Nt = (1 << (32 - gt(t) + i)) | (n << i) | r),
      (Ft = o + e);
  } else (Nt = (1 << o) | (n << i) | r), (Ft = e);
}
function ef(e) {
  e.return !== null && (Ln(e, 1), Vv(e, 1, 0));
}
function tf(e) {
  for (; e === La; )
    (La = wr[--Pr]), (wr[Pr] = null), (Ia = wr[--Pr]), (wr[Pr] = null);
  for (; e === qn; )
    (qn = st[--lt]),
      (st[lt] = null),
      (Ft = st[--lt]),
      (st[lt] = null),
      (Nt = st[--lt]),
      (st[lt] = null);
}
var tt = null,
  et = null,
  re = !1,
  vt = null;
function Bv(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function vh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (tt = e), (et = pn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (tt = e), (et = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = qn !== null ? { id: Nt, overflow: Ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (tt = e),
            (et = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ru(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Lu(e) {
  if (re) {
    var t = et;
    if (t) {
      var n = t;
      if (!vh(e, t)) {
        if (Ru(e)) throw Error($(418));
        t = pn(n.nextSibling);
        var r = tt;
        t && vh(e, t)
          ? Bv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (re = !1), (tt = e));
      }
    } else {
      if (Ru(e)) throw Error($(418));
      (e.flags = (e.flags & -4097) | 2), (re = !1), (tt = e);
    }
  }
}
function gh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  tt = e;
}
function Go(e) {
  if (e !== tt) return !1;
  if (!re) return gh(e), (re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !bu(e.type, e.memoizedProps))),
    t && (t = et))
  ) {
    if (Ru(e)) throw (Uv(), Error($(418)));
    for (; t; ) Bv(e, t), (t = pn(t.nextSibling));
  }
  if ((gh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              et = pn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      et = null;
    }
  } else et = tt ? pn(e.stateNode.nextSibling) : null;
  return !0;
}
function Uv() {
  for (var e = et; e; ) e = pn(e.nextSibling);
}
function Ur() {
  (et = tt = null), (re = !1);
}
function nf(e) {
  vt === null ? (vt = [e]) : vt.push(e);
}
var zw = qt.ReactCurrentBatchConfig;
function mt(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Da = $n(null),
  ja = null,
  _r = null,
  rf = null;
function of() {
  rf = _r = ja = null;
}
function af(e) {
  var t = Da.current;
  te(Da), (e._currentValue = t);
}
function Iu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Ir(e, t) {
  (ja = e),
    (rf = _r = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ke = !0), (e.firstContext = null));
}
function dt(e) {
  var t = e._currentValue;
  if (rf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), _r === null)) {
      if (ja === null) throw Error($(308));
      (_r = e), (ja.dependencies = { lanes: 0, firstContext: e });
    } else _r = _r.next = e;
  return t;
}
var Bn = null;
function sf(e) {
  Bn === null ? (Bn = [e]) : Bn.push(e);
}
function zv(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), sf(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Gt(e, r)
  );
}
function Gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var tn = !1;
function lf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hv(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Bt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function mn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Gt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), sf(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Gt(e, n)
  );
}
function da(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gc(e, n);
  }
}
function Sh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Na(e, t, n, r) {
  var i = e.updateQueue;
  tn = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (o = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    (a = 0), (c = u = l = null), (s = o);
    do {
      var f = s.lane,
        m = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var p = e,
            g = s;
          switch (((f = t), (m = n), g.tag)) {
            case 1:
              if (((p = g.payload), typeof p == "function")) {
                d = p.call(m, d, f);
                break e;
              }
              d = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = g.payload),
                (f = typeof p == "function" ? p.call(m, d, f) : p),
                f == null)
              )
                break e;
              d = ue({}, d, f);
              break e;
            case 2:
              tn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [s]) : f.push(s));
      } else
        (m = {
          eventTime: m,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = d)) : (c = c.next = m),
          (a |= f);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Xn |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function xh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error($(191, i));
        i.call(r);
      }
    }
}
var Wv = new zy.Component().refs;
function Du(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _s = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? tr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      i = vn(e),
      o = Bt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = mn(e, o, i)),
      t !== null && (St(t, e, i, r), da(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      i = vn(e),
      o = Bt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = mn(e, o, i)),
      t !== null && (St(t, e, i, r), da(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Fe(),
      r = vn(e),
      i = Bt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = mn(e, i, r)),
      t !== null && (St(t, e, r, n), da(t, e, r));
  },
};
function wh(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !eo(n, r) || !eo(i, o)
      : !0
  );
}
function Gv(e, t, n) {
  var r = !1,
    i = _n,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = dt(o))
      : ((i = qe(t) ? Qn : Re.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Br(e, i) : _n)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _s),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ph(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _s.enqueueReplaceState(t, t.state, null);
}
function ju(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Wv), lf(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = dt(o))
    : ((o = qe(t) ? Qn : Re.current), (i.context = Br(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Du(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && _s.enqueueReplaceState(i, i.state, null),
      Na(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function vi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error($(309));
        var r = n.stateNode;
      }
      if (!r) throw Error($(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var s = i.refs;
            s === Wv && (s = i.refs = {}),
              a === null ? delete s[o] : (s[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error($(284));
    if (!n._owner) throw Error($(290, e));
  }
  return e;
}
function Ko(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      $(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function _h(e) {
  var t = e._init;
  return t(e._payload);
}
function Kv(e) {
  function t(y, h) {
    if (e) {
      var v = y.deletions;
      v === null ? ((y.deletions = [h]), (y.flags |= 16)) : v.push(h);
    }
  }
  function n(y, h) {
    if (!e) return null;
    for (; h !== null; ) t(y, h), (h = h.sibling);
    return null;
  }
  function r(y, h) {
    for (y = new Map(); h !== null; )
      h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
    return y;
  }
  function i(y, h) {
    return (y = gn(y, h)), (y.index = 0), (y.sibling = null), y;
  }
  function o(y, h, v) {
    return (
      (y.index = v),
      e
        ? ((v = y.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((y.flags |= 2), h) : v)
            : ((y.flags |= 2), h))
        : ((y.flags |= 1048576), h)
    );
  }
  function a(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function s(y, h, v, x) {
    return h === null || h.tag !== 6
      ? ((h = Al(v, y.mode, x)), (h.return = y), h)
      : ((h = i(h, v)), (h.return = y), h);
  }
  function l(y, h, v, x) {
    var w = v.type;
    return w === mr
      ? c(y, h, v.props.children, x, v.key)
      : h !== null &&
        (h.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === en &&
            _h(w) === h.type))
      ? ((x = i(h, v.props)), (x.ref = vi(y, h, v)), (x.return = y), x)
      : ((x = ga(v.type, v.key, v.props, null, y.mode, x)),
        (x.ref = vi(y, h, v)),
        (x.return = y),
        x);
  }
  function u(y, h, v, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = bl(v, y.mode, x)), (h.return = y), h)
      : ((h = i(h, v.children || [])), (h.return = y), h);
  }
  function c(y, h, v, x, w) {
    return h === null || h.tag !== 7
      ? ((h = Wn(v, y.mode, x, w)), (h.return = y), h)
      : ((h = i(h, v)), (h.return = y), h);
  }
  function d(y, h, v) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Al("" + h, y.mode, v)), (h.return = y), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Do:
          return (
            (v = ga(h.type, h.key, h.props, null, y.mode, v)),
            (v.ref = vi(y, null, h)),
            (v.return = y),
            v
          );
        case pr:
          return (h = bl(h, y.mode, v)), (h.return = y), h;
        case en:
          var x = h._init;
          return d(y, x(h._payload), v);
      }
      if (Ei(h) || di(h))
        return (h = Wn(h, y.mode, v, null)), (h.return = y), h;
      Ko(y, h);
    }
    return null;
  }
  function f(y, h, v, x) {
    var w = h !== null ? h.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return w !== null ? null : s(y, h, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Do:
          return v.key === w ? l(y, h, v, x) : null;
        case pr:
          return v.key === w ? u(y, h, v, x) : null;
        case en:
          return (w = v._init), f(y, h, w(v._payload), x);
      }
      if (Ei(v) || di(v)) return w !== null ? null : c(y, h, v, x, null);
      Ko(y, v);
    }
    return null;
  }
  function m(y, h, v, x, w) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (y = y.get(v) || null), s(h, y, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Do:
          return (y = y.get(x.key === null ? v : x.key) || null), l(h, y, x, w);
        case pr:
          return (y = y.get(x.key === null ? v : x.key) || null), u(h, y, x, w);
        case en:
          var C = x._init;
          return m(y, h, v, C(x._payload), w);
      }
      if (Ei(x) || di(x)) return (y = y.get(v) || null), c(h, y, x, w, null);
      Ko(h, x);
    }
    return null;
  }
  function p(y, h, v, x) {
    for (
      var w = null, C = null, T = h, _ = (h = 0), O = null;
      T !== null && _ < v.length;
      _++
    ) {
      T.index > _ ? ((O = T), (T = null)) : (O = T.sibling);
      var b = f(y, T, v[_], x);
      if (b === null) {
        T === null && (T = O);
        break;
      }
      e && T && b.alternate === null && t(y, T),
        (h = o(b, h, _)),
        C === null ? (w = b) : (C.sibling = b),
        (C = b),
        (T = O);
    }
    if (_ === v.length) return n(y, T), re && Ln(y, _), w;
    if (T === null) {
      for (; _ < v.length; _++)
        (T = d(y, v[_], x)),
          T !== null &&
            ((h = o(T, h, _)), C === null ? (w = T) : (C.sibling = T), (C = T));
      return re && Ln(y, _), w;
    }
    for (T = r(y, T); _ < v.length; _++)
      (O = m(T, y, _, v[_], x)),
        O !== null &&
          (e && O.alternate !== null && T.delete(O.key === null ? _ : O.key),
          (h = o(O, h, _)),
          C === null ? (w = O) : (C.sibling = O),
          (C = O));
    return (
      e &&
        T.forEach(function (F) {
          return t(y, F);
        }),
      re && Ln(y, _),
      w
    );
  }
  function g(y, h, v, x) {
    var w = di(v);
    if (typeof w != "function") throw Error($(150));
    if (((v = w.call(v)), v == null)) throw Error($(151));
    for (
      var C = (w = null), T = h, _ = (h = 0), O = null, b = v.next();
      T !== null && !b.done;
      _++, b = v.next()
    ) {
      T.index > _ ? ((O = T), (T = null)) : (O = T.sibling);
      var F = f(y, T, b.value, x);
      if (F === null) {
        T === null && (T = O);
        break;
      }
      e && T && F.alternate === null && t(y, T),
        (h = o(F, h, _)),
        C === null ? (w = F) : (C.sibling = F),
        (C = F),
        (T = O);
    }
    if (b.done) return n(y, T), re && Ln(y, _), w;
    if (T === null) {
      for (; !b.done; _++, b = v.next())
        (b = d(y, b.value, x)),
          b !== null &&
            ((h = o(b, h, _)), C === null ? (w = b) : (C.sibling = b), (C = b));
      return re && Ln(y, _), w;
    }
    for (T = r(y, T); !b.done; _++, b = v.next())
      (b = m(T, y, _, b.value, x)),
        b !== null &&
          (e && b.alternate !== null && T.delete(b.key === null ? _ : b.key),
          (h = o(b, h, _)),
          C === null ? (w = b) : (C.sibling = b),
          (C = b));
    return (
      e &&
        T.forEach(function (B) {
          return t(y, B);
        }),
      re && Ln(y, _),
      w
    );
  }
  function S(y, h, v, x) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === mr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Do:
          e: {
            for (var w = v.key, C = h; C !== null; ) {
              if (C.key === w) {
                if (((w = v.type), w === mr)) {
                  if (C.tag === 7) {
                    n(y, C.sibling),
                      (h = i(C, v.props.children)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                } else if (
                  C.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === en &&
                    _h(w) === C.type)
                ) {
                  n(y, C.sibling),
                    (h = i(C, v.props)),
                    (h.ref = vi(y, C, v)),
                    (h.return = y),
                    (y = h);
                  break e;
                }
                n(y, C);
                break;
              } else t(y, C);
              C = C.sibling;
            }
            v.type === mr
              ? ((h = Wn(v.props.children, y.mode, x, v.key)),
                (h.return = y),
                (y = h))
              : ((x = ga(v.type, v.key, v.props, null, y.mode, x)),
                (x.ref = vi(y, h, v)),
                (x.return = y),
                (y = x));
          }
          return a(y);
        case pr:
          e: {
            for (C = v.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  n(y, h.sibling),
                    (h = i(h, v.children || [])),
                    (h.return = y),
                    (y = h);
                  break e;
                } else {
                  n(y, h);
                  break;
                }
              else t(y, h);
              h = h.sibling;
            }
            (h = bl(v, y.mode, x)), (h.return = y), (y = h);
          }
          return a(y);
        case en:
          return (C = v._init), S(y, h, C(v._payload), x);
      }
      if (Ei(v)) return p(y, h, v, x);
      if (di(v)) return g(y, h, v, x);
      Ko(y, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        h !== null && h.tag === 6
          ? (n(y, h.sibling), (h = i(h, v)), (h.return = y), (y = h))
          : (n(y, h), (h = Al(v, y.mode, x)), (h.return = y), (y = h)),
        a(y))
      : n(y, h);
  }
  return S;
}
var zr = Kv(!0),
  Qv = Kv(!1),
  _o = {},
  At = $n(_o),
  io = $n(_o),
  oo = $n(_o);
function Un(e) {
  if (e === _o) throw Error($(174));
  return e;
}
function uf(e, t) {
  switch ((Z(oo, t), Z(io, e), Z(At, _o), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : mu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = mu(t, e));
  }
  te(At), Z(At, t);
}
function Hr() {
  te(At), te(io), te(oo);
}
function qv(e) {
  Un(oo.current);
  var t = Un(At.current),
    n = mu(t, e.type);
  t !== n && (Z(io, e), Z(At, n));
}
function cf(e) {
  io.current === e && (te(At), te(io));
}
var ae = $n(0);
function Fa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Pl = [];
function ff() {
  for (var e = 0; e < Pl.length; e++)
    Pl[e]._workInProgressVersionPrimary = null;
  Pl.length = 0;
}
var ha = qt.ReactCurrentDispatcher,
  _l = qt.ReactCurrentBatchConfig,
  Yn = 0,
  le = null,
  Se = null,
  Ce = null,
  Va = !1,
  Di = !1,
  ao = 0,
  Hw = 0;
function be() {
  throw Error($(321));
}
function df(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!xt(e[n], t[n])) return !1;
  return !0;
}
function hf(e, t, n, r, i, o) {
  if (
    ((Yn = o),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ha.current = e === null || e.memoizedState === null ? Qw : qw),
    (e = n(r, i)),
    Di)
  ) {
    o = 0;
    do {
      if (((Di = !1), (ao = 0), 25 <= o)) throw Error($(301));
      (o += 1),
        (Ce = Se = null),
        (t.updateQueue = null),
        (ha.current = Yw),
        (e = n(r, i));
    } while (Di);
  }
  if (
    ((ha.current = Ba),
    (t = Se !== null && Se.next !== null),
    (Yn = 0),
    (Ce = Se = le = null),
    (Va = !1),
    t)
  )
    throw Error($(300));
  return e;
}
function pf() {
  var e = ao !== 0;
  return (ao = 0), e;
}
function _t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ce === null ? (le.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce;
}
function ht() {
  if (Se === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Se.next;
  var t = Ce === null ? le.memoizedState : Ce.next;
  if (t !== null) (Ce = t), (Se = e);
  else {
    if (e === null) throw Error($(310));
    (Se = e),
      (e = {
        memoizedState: Se.memoizedState,
        baseState: Se.baseState,
        baseQueue: Se.baseQueue,
        queue: Se.queue,
        next: null,
      }),
      Ce === null ? (le.memoizedState = Ce = e) : (Ce = Ce.next = e);
  }
  return Ce;
}
function so(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Cl(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = Se,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((Yn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = r)) : (l = l.next = d),
          (le.lanes |= c),
          (Xn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (a = r) : (l.next = s),
      xt(r, t.memoizedState) || (Ke = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (le.lanes |= o), (Xn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Tl(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    xt(o, t.memoizedState) || (Ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Yv() {}
function Xv(e, t) {
  var n = le,
    r = ht(),
    i = t(),
    o = !xt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ke = !0)),
    (r = r.queue),
    mf(eg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ce !== null && Ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      lo(9, Jv.bind(null, n, r, i, t), void 0, null),
      Te === null)
    )
      throw Error($(349));
    Yn & 30 || Zv(n, t, i);
  }
  return i;
}
function Zv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Jv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), tg(t) && ng(e);
}
function eg(e, t, n) {
  return n(function () {
    tg(t) && ng(e);
  });
}
function tg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !xt(e, n);
  } catch {
    return !0;
  }
}
function ng(e) {
  var t = Gt(e, 1);
  t !== null && St(t, e, 1, -1);
}
function Ch(e) {
  var t = _t();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: so,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Kw.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function lo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function rg() {
  return ht().memoizedState;
}
function pa(e, t, n, r) {
  var i = _t();
  (le.flags |= e),
    (i.memoizedState = lo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Cs(e, t, n, r) {
  var i = ht();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Se !== null) {
    var a = Se.memoizedState;
    if (((o = a.destroy), r !== null && df(r, a.deps))) {
      i.memoizedState = lo(t, n, o, r);
      return;
    }
  }
  (le.flags |= e), (i.memoizedState = lo(1 | t, n, o, r));
}
function Th(e, t) {
  return pa(8390656, 8, e, t);
}
function mf(e, t) {
  return Cs(2048, 8, e, t);
}
function ig(e, t) {
  return Cs(4, 2, e, t);
}
function og(e, t) {
  return Cs(4, 4, e, t);
}
function ag(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function sg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Cs(4, 4, ag.bind(null, t, e), n)
  );
}
function yf() {}
function lg(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && df(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ug(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && df(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function cg(e, t, n) {
  return Yn & 21
    ? (xt(n, t) || ((n = hv()), (le.lanes |= n), (Xn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n));
}
function Ww(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = _l.transition;
  _l.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (_l.transition = r);
  }
}
function fg() {
  return ht().memoizedState;
}
function Gw(e, t, n) {
  var r = vn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dg(e))
  )
    hg(t, n);
  else if (((n = zv(e, t, n, r)), n !== null)) {
    var i = Fe();
    St(n, e, r, i), pg(n, t, r);
  }
}
function Kw(e, t, n) {
  var r = vn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dg(e)) hg(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = o(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), xt(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), sf(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = zv(e, t, i, r)),
      n !== null && ((i = Fe()), St(n, e, r, i), pg(n, t, r));
  }
}
function dg(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function hg(e, t) {
  Di = Va = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function pg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gc(e, n);
  }
}
var Ba = {
    readContext: dt,
    useCallback: be,
    useContext: be,
    useEffect: be,
    useImperativeHandle: be,
    useInsertionEffect: be,
    useLayoutEffect: be,
    useMemo: be,
    useReducer: be,
    useRef: be,
    useState: be,
    useDebugValue: be,
    useDeferredValue: be,
    useTransition: be,
    useMutableSource: be,
    useSyncExternalStore: be,
    useId: be,
    unstable_isNewReconciler: !1,
  },
  Qw = {
    readContext: dt,
    useCallback: function (e, t) {
      return (_t().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: dt,
    useEffect: Th,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        pa(4194308, 4, ag.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return pa(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return pa(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = _t();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = _t();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Gw.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = _t();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ch,
    useDebugValue: yf,
    useDeferredValue: function (e) {
      return (_t().memoizedState = e);
    },
    useTransition: function () {
      var e = Ch(!1),
        t = e[0];
      return (e = Ww.bind(null, e[1])), (_t().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        i = _t();
      if (re) {
        if (n === void 0) throw Error($(407));
        n = n();
      } else {
        if (((n = t()), Te === null)) throw Error($(349));
        Yn & 30 || Zv(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Th(eg.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        lo(9, Jv.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = _t(),
        t = Te.identifierPrefix;
      if (re) {
        var n = Ft,
          r = Nt;
        (n = (r & ~(1 << (32 - gt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ao++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Hw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qw = {
    readContext: dt,
    useCallback: lg,
    useContext: dt,
    useEffect: mf,
    useImperativeHandle: sg,
    useInsertionEffect: ig,
    useLayoutEffect: og,
    useMemo: ug,
    useReducer: Cl,
    useRef: rg,
    useState: function () {
      return Cl(so);
    },
    useDebugValue: yf,
    useDeferredValue: function (e) {
      var t = ht();
      return cg(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = Cl(so)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: Yv,
    useSyncExternalStore: Xv,
    useId: fg,
    unstable_isNewReconciler: !1,
  },
  Yw = {
    readContext: dt,
    useCallback: lg,
    useContext: dt,
    useEffect: mf,
    useImperativeHandle: sg,
    useInsertionEffect: ig,
    useLayoutEffect: og,
    useMemo: ug,
    useReducer: Tl,
    useRef: rg,
    useState: function () {
      return Tl(so);
    },
    useDebugValue: yf,
    useDeferredValue: function (e) {
      var t = ht();
      return Se === null ? (t.memoizedState = e) : cg(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = Tl(so)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: Yv,
    useSyncExternalStore: Xv,
    useId: fg,
    unstable_isNewReconciler: !1,
  };
function Wr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Cx(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function El(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Nu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Xw = typeof WeakMap == "function" ? WeakMap : Map;
function mg(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      za || ((za = !0), (Qu = r)), Nu(e, t);
    }),
    n
  );
}
function yg(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Nu(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Nu(e, t),
          typeof r != "function" &&
            (yn === null ? (yn = new Set([this])) : yn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Eh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xw();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = fP.bind(null, e, t, n)), t.then(e, e));
}
function $h(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ah(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Bt(-1, 1)), (t.tag = 2), mn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Zw = qt.ReactCurrentOwner,
  Ke = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? Qv(t, null, n, r) : zr(t, e.child, n, r);
}
function bh(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Ir(t, i),
    (r = hf(e, t, n, r, o, i)),
    (n = pf()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Kt(e, t, i))
      : (re && n && ef(t), (t.flags |= 1), Ne(e, t, r, i), t.child)
  );
}
function Oh(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Cf(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), vg(e, t, o, r, i))
      : ((e = ga(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : eo), n(a, r) && e.ref === t.ref)
    )
      return Kt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = gn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vg(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (eo(o, r) && e.ref === t.ref)
      if (((Ke = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ke = !0);
      else return (t.lanes = e.lanes), Kt(e, t, i);
  }
  return Fu(e, t, n, r, i);
}
function gg(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Z(Tr, Je),
        (Je |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Z(Tr, Je),
          (Je |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Z(Tr, Je),
        (Je |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Z(Tr, Je),
      (Je |= r);
  return Ne(e, t, i, n), t.child;
}
function Sg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Fu(e, t, n, r, i) {
  var o = qe(n) ? Qn : Re.current;
  return (
    (o = Br(t, o)),
    Ir(t, i),
    (n = hf(e, t, n, r, o, i)),
    (r = pf()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Kt(e, t, i))
      : (re && r && ef(t), (t.flags |= 1), Ne(e, t, n, i), t.child)
  );
}
function kh(e, t, n, r, i) {
  if (qe(n)) {
    var o = !0;
    Ra(t);
  } else o = !1;
  if ((Ir(t, i), t.stateNode === null))
    ma(e, t), Gv(t, n, r), ju(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = dt(u))
      : ((u = qe(n) ? Qn : Re.current), (u = Br(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || l !== u) && Ph(t, a, r, u)),
      (tn = !1);
    var f = t.memoizedState;
    (a.state = f),
      Na(t, r, a, i),
      (l = t.memoizedState),
      s !== r || f !== l || Qe.current || tn
        ? (typeof c == "function" && (Du(t, n, c, r), (l = t.memoizedState)),
          (s = tn || wh(t, n, s, r, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Hv(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : mt(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = dt(l))
        : ((l = qe(n) ? Qn : Re.current), (l = Br(t, l)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && Ph(t, a, r, l)),
      (tn = !1),
      (f = t.memoizedState),
      (a.state = f),
      Na(t, r, a, i);
    var p = t.memoizedState;
    s !== d || f !== p || Qe.current || tn
      ? (typeof m == "function" && (Du(t, n, m, r), (p = t.memoizedState)),
        (u = tn || wh(t, n, u, r, f, p, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, p, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, p, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (a.props = r),
        (a.state = p),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Vu(e, t, n, r, o, i);
}
function Vu(e, t, n, r, i, o) {
  Sg(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && yh(t, n, !1), Kt(e, t, o);
  (r = t.stateNode), (Zw.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = zr(t, e.child, null, o)), (t.child = zr(t, null, s, o)))
      : Ne(e, t, s, o),
    (t.memoizedState = r.state),
    i && yh(t, n, !0),
    t.child
  );
}
function xg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? mh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && mh(e, t.context, !1),
    uf(e, t.containerInfo);
}
function Mh(e, t, n, r, i) {
  return Ur(), nf(i), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var Bu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Uu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wg(e, t, n) {
  var r = t.pendingProps,
    i = ae.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Z(ae, i & 1),
    e === null)
  )
    return (
      Lu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = $s(a, r, 0, null)),
              (e = Wn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Uu(n)),
              (t.memoizedState = Bu),
              e)
            : vf(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return Jw(e, t, a, r, s, i, n);
  if (o) {
    (o = r.fallback), (a = t.mode), (i = e.child), (s = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = gn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = gn(s, o)) : ((o = Wn(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Uu(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Bu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = gn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function vf(e, t) {
  return (
    (t = $s({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Qo(e, t, n, r) {
  return (
    r !== null && nf(r),
    zr(t, e.child, null, n),
    (e = vf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Jw(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = El(Error($(422)))), Qo(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = $s({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Wn(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && zr(t, e.child, null, a),
        (t.child.memoizedState = Uu(a)),
        (t.memoizedState = Bu),
        o);
  if (!(t.mode & 1)) return Qo(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error($(419))), (r = El(o, r, void 0)), Qo(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), Ke || s)) {
    if (((r = Te), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Gt(e, i), St(r, e, i, -1));
    }
    return _f(), (r = El(Error($(421)))), Qo(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = dP.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (et = pn(i.nextSibling)),
      (tt = t),
      (re = !0),
      (vt = null),
      e !== null &&
        ((st[lt++] = Nt),
        (st[lt++] = Ft),
        (st[lt++] = qn),
        (Nt = e.id),
        (Ft = e.overflow),
        (qn = t)),
      (t = vf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Rh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Iu(e.return, t, n);
}
function $l(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Pg(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ne(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rh(e, n, t);
        else if (e.tag === 19) Rh(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Z(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Fa(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          $l(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Fa(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        $l(t, !0, n, null, o);
        break;
      case "together":
        $l(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ma(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Xn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error($(153));
  if (t.child !== null) {
    for (
      e = t.child, n = gn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = gn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function eP(e, t, n) {
  switch (t.tag) {
    case 3:
      xg(t), Ur();
      break;
    case 5:
      qv(t);
      break;
    case 1:
      qe(t.type) && Ra(t);
      break;
    case 4:
      uf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Z(Da, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Z(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? wg(e, t, n)
          : (Z(ae, ae.current & 1),
            (e = Kt(e, t, n)),
            e !== null ? e.sibling : null);
      Z(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Pg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Z(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gg(e, t, n);
  }
  return Kt(e, t, n);
}
var _g, zu, Cg, Tg;
_g = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
zu = function () {};
Cg = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Un(At.current);
    var o = null;
    switch (n) {
      case "input":
        (i = fu(e, i)), (r = fu(e, r)), (o = []);
        break;
      case "select":
        (i = ue({}, i, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = pu(e, i)), (r = pu(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ka);
    }
    yu(n, r);
    var a;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ki.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ki.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && J("scroll", e),
                  o || s === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Tg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gi(e, t) {
  if (!re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function tP(e, t, n) {
  var r = t.pendingProps;
  switch ((tf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Oe(t), null;
    case 1:
      return qe(t.type) && Ma(), Oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Hr(),
        te(Qe),
        te(Re),
        ff(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Go(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), vt !== null && (Xu(vt), (vt = null)))),
        zu(e, t),
        Oe(t),
        null
      );
    case 5:
      cf(t);
      var i = Un(oo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Cg(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error($(166));
          return Oe(t), null;
        }
        if (((e = Un(At.current)), Go(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Et] = t), (r[ro] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ai.length; i++) J(Ai[i], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J("error", r), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              Ud(r, o), J("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                J("invalid", r);
              break;
            case "textarea":
              Hd(r, o), J("invalid", r);
          }
          yu(n, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var s = o[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Wo(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Wo(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : Ki.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  J("scroll", r);
            }
          switch (n) {
            case "input":
              jo(r), zd(r, o, !0);
              break;
            case "textarea":
              jo(r), Wd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ka);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Zy(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Et] = t),
            (e[ro] = r),
            _g(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = vu(n, r)), n)) {
              case "dialog":
                J("cancel", e), J("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ai.length; i++) J(Ai[i], e);
                i = r;
                break;
              case "source":
                J("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                J("error", e), J("load", e), (i = r);
                break;
              case "details":
                J("toggle", e), (i = r);
                break;
              case "input":
                Ud(e, r), (i = fu(e, r)), J("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ue({}, r, { value: void 0 })),
                  J("invalid", e);
                break;
              case "textarea":
                Hd(e, r), (i = pu(e, r)), J("invalid", e);
                break;
              default:
                i = r;
            }
            yu(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var l = s[o];
                o === "style"
                  ? tv(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Jy(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Qi(e, l)
                    : typeof l == "number" && Qi(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ki.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && J("scroll", e)
                      : l != null && Vc(e, o, l, a));
              }
            switch (n) {
              case "input":
                jo(e), zd(e, r, !1);
                break;
              case "textarea":
                jo(e), Wd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Pn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? kr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      kr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ka);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) Tg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error($(166));
        if (((n = Un(oo.current)), Un(At.current), Go(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Et] = t),
            (o = r.nodeValue !== n) && ((e = tt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Wo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Wo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Et] = t),
            (t.stateNode = r);
      }
      return Oe(t), null;
    case 13:
      if (
        (te(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && et !== null && t.mode & 1 && !(t.flags & 128))
          Uv(), Ur(), (t.flags |= 98560), (o = !1);
        else if (((o = Go(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error($(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error($(317));
            o[Et] = t;
          } else
            Ur(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Oe(t), (o = !1);
        } else vt !== null && (Xu(vt), (vt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? we === 0 && (we = 3) : _f())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null);
    case 4:
      return (
        Hr(), zu(e, t), e === null && to(t.stateNode.containerInfo), Oe(t), null
      );
    case 10:
      return af(t.type._context), Oe(t), null;
    case 17:
      return qe(t.type) && Ma(), Oe(t), null;
    case 19:
      if ((te(ae), (o = t.memoizedState), o === null)) return Oe(t), null;
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) gi(o, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Fa(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    gi(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Z(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            pe() > Gr &&
            ((t.flags |= 128), (r = !0), gi(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Fa(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gi(o, !0),
              o.tail === null && o.tailMode === "hidden" && !a.alternate && !re)
            )
              return Oe(t), null;
          } else
            2 * pe() - o.renderingStartTime > Gr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gi(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = pe()),
          (t.sibling = null),
          (n = ae.current),
          Z(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null);
    case 22:
    case 23:
      return (
        Pf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Je & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, t.tag));
}
function nP(e, t) {
  switch ((tf(t), t.tag)) {
    case 1:
      return (
        qe(t.type) && Ma(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Hr(),
        te(Qe),
        te(Re),
        ff(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return cf(t), null;
    case 13:
      if (
        (te(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error($(340));
        Ur();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(ae), null;
    case 4:
      return Hr(), null;
    case 10:
      return af(t.type._context), null;
    case 22:
    case 23:
      return Pf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qo = !1,
  Me = !1,
  rP = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function Cr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        de(e, t, r);
      }
    else n.current = null;
}
function Hu(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var Lh = !1;
function iP(e, t) {
  if ((($u = Aa), (e = bv()), Jc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var m;
              d !== n || (i !== 0 && d.nodeType !== 3) || (s = a + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (m = d.firstChild) !== null;

            )
              (f = d), (d = m);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (s = a),
                f === o && ++c === r && (l = a),
                (m = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = m;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Au = { focusedElem: e, selectionRange: n }, Aa = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var p = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var g = p.memoizedProps,
                    S = p.memoizedState,
                    y = t.stateNode,
                    h = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : mt(t.type, g),
                      S
                    );
                  y.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error($(163));
            }
        } catch (x) {
          de(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (p = Lh), (Lh = !1), p;
}
function ji(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Hu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ts(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Wu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Eg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Eg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Et], delete t[ro], delete t[ku], delete t[Vw], delete t[Bw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function $g(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ih(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || $g(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Gu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ka));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gu(e, t, n), e = e.sibling; e !== null; ) Gu(e, t, n), (e = e.sibling);
}
function Ku(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ku(e, t, n), e = e.sibling; e !== null; ) Ku(e, t, n), (e = e.sibling);
}
var Ee = null,
  yt = !1;
function Zt(e, t, n) {
  for (n = n.child; n !== null; ) Ag(e, t, n), (n = n.sibling);
}
function Ag(e, t, n) {
  if ($t && typeof $t.onCommitFiberUnmount == "function")
    try {
      $t.onCommitFiberUnmount(vs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Me || Cr(n, t);
    case 6:
      var r = Ee,
        i = yt;
      (Ee = null),
        Zt(e, t, n),
        (Ee = r),
        (yt = i),
        Ee !== null &&
          (yt
            ? ((e = Ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ee.removeChild(n.stateNode));
      break;
    case 18:
      Ee !== null &&
        (yt
          ? ((e = Ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? xl(e.parentNode, n)
              : e.nodeType === 1 && xl(e, n),
            Zi(e))
          : xl(Ee, n.stateNode));
      break;
    case 4:
      (r = Ee),
        (i = yt),
        (Ee = n.stateNode.containerInfo),
        (yt = !0),
        Zt(e, t, n),
        (Ee = r),
        (yt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && Hu(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      Zt(e, t, n);
      break;
    case 1:
      if (
        !Me &&
        (Cr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          de(n, t, s);
        }
      Zt(e, t, n);
      break;
    case 21:
      Zt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Me = (r = Me) || n.memoizedState !== null), Zt(e, t, n), (Me = r))
        : Zt(e, t, n);
      break;
    default:
      Zt(e, t, n);
  }
}
function Dh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new rP()),
      t.forEach(function (r) {
        var i = hP.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function pt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Ee = s.stateNode), (yt = !1);
              break e;
            case 3:
              (Ee = s.stateNode.containerInfo), (yt = !0);
              break e;
            case 4:
              (Ee = s.stateNode.containerInfo), (yt = !0);
              break e;
          }
          s = s.return;
        }
        if (Ee === null) throw Error($(160));
        Ag(o, a, i), (Ee = null), (yt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        de(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) bg(t, e), (t = t.sibling);
}
function bg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pt(t, e), wt(e), r & 4)) {
        try {
          ji(3, e, e.return), Ts(3, e);
        } catch (g) {
          de(e, e.return, g);
        }
        try {
          ji(5, e, e.return);
        } catch (g) {
          de(e, e.return, g);
        }
      }
      break;
    case 1:
      pt(t, e), wt(e), r & 512 && n !== null && Cr(n, n.return);
      break;
    case 5:
      if (
        (pt(t, e),
        wt(e),
        r & 512 && n !== null && Cr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Qi(i, "");
        } catch (g) {
          de(e, e.return, g);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && Yy(i, o),
              vu(s, a);
            var u = vu(s, o);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? tv(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Jy(i, d)
                : c === "children"
                ? Qi(i, d)
                : Vc(i, c, d, u);
            }
            switch (s) {
              case "input":
                du(i, o);
                break;
              case "textarea":
                Xy(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? kr(i, !!o.multiple, m, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? kr(i, !!o.multiple, o.defaultValue, !0)
                      : kr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ro] = o;
          } catch (g) {
            de(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((pt(t, e), wt(e), r & 4)) {
        if (e.stateNode === null) throw Error($(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (g) {
          de(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (pt(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zi(t.containerInfo);
        } catch (g) {
          de(e, e.return, g);
        }
      break;
    case 4:
      pt(t, e), wt(e);
      break;
    case 13:
      pt(t, e),
        wt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (xf = pe())),
        r & 4 && Dh(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Me = (u = Me) || c), pt(t, e), (Me = u)) : pt(t, e),
        wt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (R = e, c = e.child; c !== null; ) {
            for (d = R = c; R !== null; ) {
              switch (((f = R), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ji(4, f, f.return);
                  break;
                case 1:
                  Cr(f, f.return);
                  var p = f.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (g) {
                      de(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Cr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Nh(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (R = m)) : Nh(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = ev("display", a)));
              } catch (g) {
                de(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                de(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      pt(t, e), wt(e), r & 4 && Dh(e);
      break;
    case 21:
      break;
    default:
      pt(t, e), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($g(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Qi(i, ""), (r.flags &= -33));
          var o = Ih(e);
          Ku(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = Ih(e);
          Gu(e, s, a);
          break;
        default:
          throw Error($(161));
      }
    } catch (l) {
      de(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function oP(e, t, n) {
  (R = e), Og(e);
}
function Og(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R,
      o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || qo;
      if (!a) {
        var s = i.alternate,
          l = (s !== null && s.memoizedState !== null) || Me;
        s = qo;
        var u = Me;
        if (((qo = a), (Me = l) && !u))
          for (R = i; R !== null; )
            (a = R),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Fh(i)
                : l !== null
                ? ((l.return = a), (R = l))
                : Fh(i);
        for (; o !== null; ) (R = o), Og(o), (o = o.sibling);
        (R = i), (qo = s), (Me = u);
      }
      jh(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (R = o)) : jh(e);
  }
}
function jh(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Me || Ts(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Me)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && xh(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                xh(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Zi(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error($(163));
          }
        Me || (t.flags & 512 && Wu(t));
      } catch (f) {
        de(t, t.return, f);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Nh(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Fh(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ts(4, t);
          } catch (l) {
            de(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              de(t, i, l);
            }
          }
          var o = t.return;
          try {
            Wu(t);
          } catch (l) {
            de(t, o, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Wu(t);
          } catch (l) {
            de(t, a, l);
          }
      }
    } catch (l) {
      de(t, t.return, l);
    }
    if (t === e) {
      R = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (R = s);
      break;
    }
    R = t.return;
  }
}
var aP = Math.ceil,
  Ua = qt.ReactCurrentDispatcher,
  gf = qt.ReactCurrentOwner,
  ct = qt.ReactCurrentBatchConfig,
  G = 0,
  Te = null,
  ge = null,
  $e = 0,
  Je = 0,
  Tr = $n(0),
  we = 0,
  uo = null,
  Xn = 0,
  Es = 0,
  Sf = 0,
  Ni = null,
  Ge = null,
  xf = 0,
  Gr = 1 / 0,
  It = null,
  za = !1,
  Qu = null,
  yn = null,
  Yo = !1,
  ln = null,
  Ha = 0,
  Fi = 0,
  qu = null,
  ya = -1,
  va = 0;
function Fe() {
  return G & 6 ? pe() : ya !== -1 ? ya : (ya = pe());
}
function vn(e) {
  return e.mode & 1
    ? G & 2 && $e !== 0
      ? $e & -$e
      : zw.transition !== null
      ? (va === 0 && (va = hv()), va)
      : ((e = Y),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xv(e.type))),
        e)
    : 1;
}
function St(e, t, n, r) {
  if (50 < Fi) throw ((Fi = 0), (qu = null), Error($(185)));
  xo(e, n, r),
    (!(G & 2) || e !== Te) &&
      (e === Te && (!(G & 2) && (Es |= n), we === 4 && an(e, $e)),
      Ye(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((Gr = pe() + 500), Ps && An()));
}
function Ye(e, t) {
  var n = e.callbackNode;
  zx(e, t);
  var r = $a(e, e === Te ? $e : 0);
  if (r === 0)
    n !== null && Qd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Qd(n), t === 1))
      e.tag === 0 ? Uw(Vh.bind(null, e)) : Fv(Vh.bind(null, e)),
        Nw(function () {
          !(G & 6) && An();
        }),
        (n = null);
    else {
      switch (pv(r)) {
        case 1:
          n = Wc;
          break;
        case 4:
          n = fv;
          break;
        case 16:
          n = Ea;
          break;
        case 536870912:
          n = dv;
          break;
        default:
          n = Ea;
      }
      n = Ng(n, kg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function kg(e, t) {
  if (((ya = -1), (va = 0), G & 6)) throw Error($(327));
  var n = e.callbackNode;
  if (Dr() && e.callbackNode !== n) return null;
  var r = $a(e, e === Te ? $e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Wa(e, r);
  else {
    t = r;
    var i = G;
    G |= 2;
    var o = Rg();
    (Te !== e || $e !== t) && ((It = null), (Gr = pe() + 500), Hn(e, t));
    do
      try {
        uP();
        break;
      } catch (s) {
        Mg(e, s);
      }
    while (1);
    of(),
      (Ua.current = o),
      (G = i),
      ge !== null ? (t = 0) : ((Te = null), ($e = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Pu(e)), i !== 0 && ((r = i), (t = Yu(e, i)))), t === 1)
    )
      throw ((n = uo), Hn(e, 0), an(e, r), Ye(e, pe()), n);
    if (t === 6) an(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !sP(i) &&
          ((t = Wa(e, r)),
          t === 2 && ((o = Pu(e)), o !== 0 && ((r = o), (t = Yu(e, o)))),
          t === 1))
      )
        throw ((n = uo), Hn(e, 0), an(e, r), Ye(e, pe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          In(e, Ge, It);
          break;
        case 3:
          if (
            (an(e, r), (r & 130023424) === r && ((t = xf + 500 - pe()), 10 < t))
          ) {
            if ($a(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Fe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ou(In.bind(null, e, Ge, It), t);
            break;
          }
          In(e, Ge, It);
          break;
        case 4:
          if ((an(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - gt(r);
            (o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o);
          }
          if (
            ((r = i),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * aP(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ou(In.bind(null, e, Ge, It), r);
            break;
          }
          In(e, Ge, It);
          break;
        case 5:
          In(e, Ge, It);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return Ye(e, pe()), e.callbackNode === n ? kg.bind(null, e) : null;
}
function Yu(e, t) {
  var n = Ni;
  return (
    e.current.memoizedState.isDehydrated && (Hn(e, t).flags |= 256),
    (e = Wa(e, t)),
    e !== 2 && ((t = Ge), (Ge = n), t !== null && Xu(t)),
    e
  );
}
function Xu(e) {
  Ge === null ? (Ge = e) : Ge.push.apply(Ge, e);
}
function sP(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!xt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function an(e, t) {
  for (
    t &= ~Sf,
      t &= ~Es,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - gt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Vh(e) {
  if (G & 6) throw Error($(327));
  Dr();
  var t = $a(e, 0);
  if (!(t & 1)) return Ye(e, pe()), null;
  var n = Wa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Pu(e);
    r !== 0 && ((t = r), (n = Yu(e, r)));
  }
  if (n === 1) throw ((n = uo), Hn(e, 0), an(e, t), Ye(e, pe()), n);
  if (n === 6) throw Error($(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    In(e, Ge, It),
    Ye(e, pe()),
    null
  );
}
function wf(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((Gr = pe() + 500), Ps && An());
  }
}
function Zn(e) {
  ln !== null && ln.tag === 0 && !(G & 6) && Dr();
  var t = G;
  G |= 1;
  var n = ct.transition,
    r = Y;
  try {
    if (((ct.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (ct.transition = n), (G = t), !(G & 6) && An();
  }
}
function Pf() {
  (Je = Tr.current), te(Tr);
}
function Hn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), jw(n)), ge !== null))
    for (n = ge.return; n !== null; ) {
      var r = n;
      switch ((tf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ma();
          break;
        case 3:
          Hr(), te(Qe), te(Re), ff();
          break;
        case 5:
          cf(r);
          break;
        case 4:
          Hr();
          break;
        case 13:
          te(ae);
          break;
        case 19:
          te(ae);
          break;
        case 10:
          af(r.type._context);
          break;
        case 22:
        case 23:
          Pf();
      }
      n = n.return;
    }
  if (
    ((Te = e),
    (ge = e = gn(e.current, null)),
    ($e = Je = t),
    (we = 0),
    (uo = null),
    (Sf = Es = Xn = 0),
    (Ge = Ni = null),
    Bn !== null)
  ) {
    for (t = 0; t < Bn.length; t++)
      if (((n = Bn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (r.next = a);
        }
        n.pending = r;
      }
    Bn = null;
  }
  return e;
}
function Mg(e, t) {
  do {
    var n = ge;
    try {
      if ((of(), (ha.current = Ba), Va)) {
        for (var r = le.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Va = !1;
      }
      if (
        ((Yn = 0),
        (Ce = Se = le = null),
        (Di = !1),
        (ao = 0),
        (gf.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (uo = t), (ge = null);
        break;
      }
      e: {
        var o = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = $e),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = $h(a);
          if (m !== null) {
            (m.flags &= -257),
              Ah(m, a, s, o, t),
              m.mode & 1 && Eh(o, u, t),
              (t = m),
              (l = u);
            var p = t.updateQueue;
            if (p === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else p.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Eh(o, u, t), _f();
              break e;
            }
            l = Error($(426));
          }
        } else if (re && s.mode & 1) {
          var S = $h(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Ah(S, a, s, o, t),
              nf(Wr(l, s));
            break e;
          }
        }
        (o = l = Wr(l, s)),
          we !== 4 && (we = 2),
          Ni === null ? (Ni = [o]) : Ni.push(o),
          (o = a);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var y = mg(o, l, t);
              Sh(o, y);
              break e;
            case 1:
              s = l;
              var h = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (yn === null || !yn.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = yg(o, s, t);
                Sh(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ig(n);
    } catch (w) {
      (t = w), ge === n && n !== null && (ge = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Rg() {
  var e = Ua.current;
  return (Ua.current = Ba), e === null ? Ba : e;
}
function _f() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    Te === null || (!(Xn & 268435455) && !(Es & 268435455)) || an(Te, $e);
}
function Wa(e, t) {
  var n = G;
  G |= 2;
  var r = Rg();
  (Te !== e || $e !== t) && ((It = null), Hn(e, t));
  do
    try {
      lP();
      break;
    } catch (i) {
      Mg(e, i);
    }
  while (1);
  if ((of(), (G = n), (Ua.current = r), ge !== null)) throw Error($(261));
  return (Te = null), ($e = 0), we;
}
function lP() {
  for (; ge !== null; ) Lg(ge);
}
function uP() {
  for (; ge !== null && !Lx(); ) Lg(ge);
}
function Lg(e) {
  var t = jg(e.alternate, e, Je);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ig(e) : (ge = t),
    (gf.current = null);
}
function Ig(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = nP(n, t)), n !== null)) {
        (n.flags &= 32767), (ge = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (ge = null);
        return;
      }
    } else if (((n = tP(n, t, Je)), n !== null)) {
      ge = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function In(e, t, n) {
  var r = Y,
    i = ct.transition;
  try {
    (ct.transition = null), (Y = 1), cP(e, t, n, r);
  } finally {
    (ct.transition = i), (Y = r);
  }
  return null;
}
function cP(e, t, n, r) {
  do Dr();
  while (ln !== null);
  if (G & 6) throw Error($(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error($(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Hx(e, o),
    e === Te && ((ge = Te = null), ($e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Yo ||
      ((Yo = !0),
      Ng(Ea, function () {
        return Dr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ct.transition), (ct.transition = null);
    var a = Y;
    Y = 1;
    var s = G;
    (G |= 4),
      (gf.current = null),
      iP(e, n),
      bg(n, e),
      Ow(Au),
      (Aa = !!$u),
      (Au = $u = null),
      (e.current = n),
      oP(n),
      Ix(),
      (G = s),
      (Y = a),
      (ct.transition = o);
  } else e.current = n;
  if (
    (Yo && ((Yo = !1), (ln = e), (Ha = i)),
    (o = e.pendingLanes),
    o === 0 && (yn = null),
    Nx(n.stateNode),
    Ye(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (za) throw ((za = !1), (e = Qu), (Qu = null), e);
  return (
    Ha & 1 && e.tag !== 0 && Dr(),
    (o = e.pendingLanes),
    o & 1 ? (e === qu ? Fi++ : ((Fi = 0), (qu = e))) : (Fi = 0),
    An(),
    null
  );
}
function Dr() {
  if (ln !== null) {
    var e = pv(Ha),
      t = ct.transition,
      n = Y;
    try {
      if (((ct.transition = null), (Y = 16 > e ? 16 : e), ln === null))
        var r = !1;
      else {
        if (((e = ln), (ln = null), (Ha = 0), G & 6)) throw Error($(331));
        var i = G;
        for (G |= 4, R = e.current; R !== null; ) {
          var o = R,
            a = o.child;
          if (R.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (R = u; R !== null; ) {
                  var c = R;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ji(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (R = d);
                  else
                    for (; R !== null; ) {
                      c = R;
                      var f = c.sibling,
                        m = c.return;
                      if ((Eg(c), c === u)) {
                        R = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (R = f);
                        break;
                      }
                      R = m;
                    }
                }
              }
              var p = o.alternate;
              if (p !== null) {
                var g = p.child;
                if (g !== null) {
                  p.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              R = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (R = a);
          else
            e: for (; R !== null; ) {
              if (((o = R), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ji(9, o, o.return);
                }
              var y = o.sibling;
              if (y !== null) {
                (y.return = o.return), (R = y);
                break e;
              }
              R = o.return;
            }
        }
        var h = e.current;
        for (R = h; R !== null; ) {
          a = R;
          var v = a.child;
          if (a.subtreeFlags & 2064 && v !== null) (v.return = a), (R = v);
          else
            e: for (a = h; R !== null; ) {
              if (((s = R), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ts(9, s);
                  }
                } catch (w) {
                  de(s, s.return, w);
                }
              if (s === a) {
                R = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (R = x);
                break e;
              }
              R = s.return;
            }
        }
        if (
          ((G = i), An(), $t && typeof $t.onPostCommitFiberRoot == "function")
        )
          try {
            $t.onPostCommitFiberRoot(vs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (ct.transition = t);
    }
  }
  return !1;
}
function Bh(e, t, n) {
  (t = Wr(n, t)),
    (t = mg(e, t, 1)),
    (e = mn(e, t, 1)),
    (t = Fe()),
    e !== null && (xo(e, 1, t), Ye(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) Bh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yn === null || !yn.has(r)))
        ) {
          (e = Wr(n, e)),
            (e = yg(t, e, 1)),
            (t = mn(t, e, 1)),
            (e = Fe()),
            t !== null && (xo(t, 1, e), Ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function fP(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Te === e &&
      ($e & n) === n &&
      (we === 4 || (we === 3 && ($e & 130023424) === $e && 500 > pe() - xf)
        ? Hn(e, 0)
        : (Sf |= n)),
    Ye(e, t);
}
function Dg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Vo), (Vo <<= 1), !(Vo & 130023424) && (Vo = 4194304))
      : (t = 1));
  var n = Fe();
  (e = Gt(e, t)), e !== null && (xo(e, t, n), Ye(e, n));
}
function dP(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Dg(e, n);
}
function hP(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error($(314));
  }
  r !== null && r.delete(t), Dg(e, n);
}
var jg;
jg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current) Ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ke = !1), eP(e, t, n);
      Ke = !!(e.flags & 131072);
    }
  else (Ke = !1), re && t.flags & 1048576 && Vv(t, Ia, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ma(e, t), (e = t.pendingProps);
      var i = Br(t, Re.current);
      Ir(t, n), (i = hf(null, t, r, e, i, n));
      var o = pf();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            qe(r) ? ((o = !0), Ra(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            lf(t),
            (i.updater = _s),
            (t.stateNode = i),
            (i._reactInternals = t),
            ju(t, r, e, n),
            (t = Vu(null, t, r, !0, o, n)))
          : ((t.tag = 0), re && o && ef(t), Ne(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ma(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = mP(r)),
          (e = mt(r, e)),
          i)
        ) {
          case 0:
            t = Fu(null, t, r, e, n);
            break e;
          case 1:
            t = kh(null, t, r, e, n);
            break e;
          case 11:
            t = bh(null, t, r, e, n);
            break e;
          case 14:
            t = Oh(null, t, r, mt(r.type, e), n);
            break e;
        }
        throw Error($(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        Fu(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        kh(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((xg(t), e === null)) throw Error($(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Hv(e, t),
          Na(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Wr(Error($(423)), t)), (t = Mh(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Wr(Error($(424)), t)), (t = Mh(e, t, r, n, i));
            break e;
          } else
            for (
              et = pn(t.stateNode.containerInfo.firstChild),
                tt = t,
                re = !0,
                vt = null,
                n = Qv(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ur(), r === i)) {
            t = Kt(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qv(t),
        e === null && Lu(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        bu(r, i) ? (a = null) : o !== null && bu(r, o) && (t.flags |= 32),
        Sg(e, t),
        Ne(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Lu(t), null;
    case 13:
      return wg(e, t, n);
    case 4:
      return (
        uf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = zr(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        bh(e, t, r, i, n)
      );
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          Z(Da, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (xt(o.value, a)) {
            if (o.children === i.children && !Qe.current) {
              t = Kt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                a = o.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = Bt(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Iu(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error($(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  Iu(a, n, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        Ne(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Ir(t, n),
        (i = dt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = mt(r, t.pendingProps)),
        (i = mt(r.type, i)),
        Oh(e, t, r, i, n)
      );
    case 15:
      return vg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        ma(e, t),
        (t.tag = 1),
        qe(r) ? ((e = !0), Ra(t)) : (e = !1),
        Ir(t, n),
        Gv(t, r, i),
        ju(t, r, i, n),
        Vu(null, t, r, !0, e, n)
      );
    case 19:
      return Pg(e, t, n);
    case 22:
      return gg(e, t, n);
  }
  throw Error($(156, t.tag));
};
function Ng(e, t) {
  return cv(e, t);
}
function pP(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ut(e, t, n, r) {
  return new pP(e, t, n, r);
}
function Cf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function mP(e) {
  if (typeof e == "function") return Cf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Uc)) return 11;
    if (e === zc) return 14;
  }
  return 2;
}
function gn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ga(e, t, n, r, i, o) {
  var a = 2;
  if (((r = e), typeof e == "function")) Cf(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case mr:
        return Wn(n.children, i, o, t);
      case Bc:
        (a = 8), (i |= 8);
        break;
      case su:
        return (
          (e = ut(12, n, t, i | 2)), (e.elementType = su), (e.lanes = o), e
        );
      case lu:
        return (e = ut(13, n, t, i)), (e.elementType = lu), (e.lanes = o), e;
      case uu:
        return (e = ut(19, n, t, i)), (e.elementType = uu), (e.lanes = o), e;
      case Ky:
        return $s(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Wy:
              a = 10;
              break e;
            case Gy:
              a = 9;
              break e;
            case Uc:
              a = 11;
              break e;
            case zc:
              a = 14;
              break e;
            case en:
              (a = 16), (r = null);
              break e;
          }
        throw Error($(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ut(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Wn(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function $s(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = Ky),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Al(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function bl(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function yP(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ul(0)),
    (this.expirationTimes = ul(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ul(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Tf(e, t, n, r, i, o, a, s, l) {
  return (
    (e = new yP(e, t, n, s, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ut(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    lf(o),
    e
  );
}
function vP(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: pr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fg(e) {
  if (!e) return _n;
  e = e._reactInternals;
  e: {
    if (tr(e) !== e || e.tag !== 1) throw Error($(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error($(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n)) return Nv(e, n, t);
  }
  return t;
}
function Vg(e, t, n, r, i, o, a, s, l) {
  return (
    (e = Tf(n, r, !0, e, i, o, a, s, l)),
    (e.context = Fg(null)),
    (n = e.current),
    (r = Fe()),
    (i = vn(n)),
    (o = Bt(r, i)),
    (o.callback = t ?? null),
    mn(n, o, i),
    (e.current.lanes = i),
    xo(e, i, r),
    Ye(e, r),
    e
  );
}
function As(e, t, n, r) {
  var i = t.current,
    o = Fe(),
    a = vn(i);
  return (
    (n = Fg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Bt(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = mn(i, t, a)),
    e !== null && (St(e, i, a, o), da(e, i, a)),
    a
  );
}
function Ga(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Uh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ef(e, t) {
  Uh(e, t), (e = e.alternate) && Uh(e, t);
}
function gP() {
  return null;
}
var Bg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function $f(e) {
  this._internalRoot = e;
}
bs.prototype.render = $f.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error($(409));
  As(e, t, null, null);
};
bs.prototype.unmount = $f.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zn(function () {
      As(null, e, null, null);
    }),
      (t[Wt] = null);
  }
};
function bs(e) {
  this._internalRoot = e;
}
bs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < on.length && t !== 0 && t < on[n].priority; n++);
    on.splice(n, 0, e), n === 0 && Sv(e);
  }
};
function Af(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Os(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function zh() {}
function SP(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Ga(a);
        o.call(u);
      };
    }
    var a = Vg(t, r, e, 0, null, !1, !1, "", zh);
    return (
      (e._reactRootContainer = a),
      (e[Wt] = a.current),
      to(e.nodeType === 8 ? e.parentNode : e),
      Zn(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Ga(l);
      s.call(u);
    };
  }
  var l = Tf(e, 0, !1, null, null, !1, !1, "", zh);
  return (
    (e._reactRootContainer = l),
    (e[Wt] = l.current),
    to(e.nodeType === 8 ? e.parentNode : e),
    Zn(function () {
      As(t, l, n, r);
    }),
    l
  );
}
function ks(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var l = Ga(a);
        s.call(l);
      };
    }
    As(t, a, e, i);
  } else a = SP(n, t, e, i, r);
  return Ga(a);
}
mv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $i(t.pendingLanes);
        n !== 0 &&
          (Gc(t, n | 1), Ye(t, pe()), !(G & 6) && ((Gr = pe() + 500), An()));
      }
      break;
    case 13:
      Zn(function () {
        var r = Gt(e, 1);
        if (r !== null) {
          var i = Fe();
          St(r, e, 1, i);
        }
      }),
        Ef(e, 1);
  }
};
Kc = function (e) {
  if (e.tag === 13) {
    var t = Gt(e, 134217728);
    if (t !== null) {
      var n = Fe();
      St(t, e, 134217728, n);
    }
    Ef(e, 134217728);
  }
};
yv = function (e) {
  if (e.tag === 13) {
    var t = vn(e),
      n = Gt(e, t);
    if (n !== null) {
      var r = Fe();
      St(n, e, t, r);
    }
    Ef(e, t);
  }
};
vv = function () {
  return Y;
};
gv = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
Su = function (e, t, n) {
  switch (t) {
    case "input":
      if ((du(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ws(r);
            if (!i) throw Error($(90));
            qy(r), du(r, i);
          }
        }
      }
      break;
    case "textarea":
      Xy(e, n);
      break;
    case "select":
      (t = n.value), t != null && kr(e, !!n.multiple, t, !1);
  }
};
iv = wf;
ov = Zn;
var xP = { usingClientEntryPoint: !1, Events: [Po, Sr, ws, nv, rv, wf] },
  Si = {
    findFiberByHostInstance: Vn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  wP = {
    bundleType: Si.bundleType,
    version: Si.version,
    rendererPackageName: Si.rendererPackageName,
    rendererConfig: Si.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = lv(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Si.findFiberByHostInstance || gP,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xo.isDisabled && Xo.supportsFiber)
    try {
      (vs = Xo.inject(wP)), ($t = Xo);
    } catch {}
}
it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xP;
it.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Af(t)) throw Error($(200));
  return vP(e, t, null, n);
};
it.createRoot = function (e, t) {
  if (!Af(e)) throw Error($(299));
  var n = !1,
    r = "",
    i = Bg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Tf(e, 1, !1, null, null, n, !1, r, i)),
    (e[Wt] = t.current),
    to(e.nodeType === 8 ? e.parentNode : e),
    new $f(t)
  );
};
it.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error($(188))
      : ((e = Object.keys(e).join(",")), Error($(268, e)));
  return (e = lv(t)), (e = e === null ? null : e.stateNode), e;
};
it.flushSync = function (e) {
  return Zn(e);
};
it.hydrate = function (e, t, n) {
  if (!Os(t)) throw Error($(200));
  return ks(null, e, t, !0, n);
};
it.hydrateRoot = function (e, t, n) {
  if (!Af(e)) throw Error($(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    a = Bg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Vg(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[Wt] = t.current),
    to(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new bs(t);
};
it.render = function (e, t, n) {
  if (!Os(t)) throw Error($(200));
  return ks(null, e, t, !1, n);
};
it.unmountComponentAtNode = function (e) {
  if (!Os(e)) throw Error($(40));
  return e._reactRootContainer
    ? (Zn(function () {
        ks(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Wt] = null);
        });
      }),
      !0)
    : !1;
};
it.unstable_batchedUpdates = wf;
it.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Os(n)) throw Error($(200));
  if (e == null || e._reactInternals === void 0) throw Error($(38));
  return ks(e, t, n, !1, r);
};
it.version = "18.2.0-next-9e3b772b8-20220608";
function Ug() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ug);
    } catch (e) {
      console.error(e);
    }
}
Ug(), (Vy.exports = it);
var PP = Vy.exports,
  Hh = PP;
(ou.createRoot = Hh.createRoot), (ou.hydrateRoot = Hh.hydrateRoot);
/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function co() {
  return (
    (co = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    co.apply(this, arguments)
  );
}
var un;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(un || (un = {}));
const Wh = "popstate";
function _P(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: a, hash: s } = r.location;
    return Zu(
      "",
      { pathname: o, search: a, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Ka(i);
  }
  return TP(t, n, null, e);
}
function me(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function bf(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function CP() {
  return Math.random().toString(36).substr(2, 8);
}
function Gh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Zu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    co(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ei(t) : t,
      { state: n, key: (t && t.key) || r || CP() }
    )
  );
}
function Ka(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ei(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function TP(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    a = i.history,
    s = un.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), a.replaceState(co({}, a.state, { idx: u }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    s = un.Pop;
    let S = c(),
      y = S == null ? null : S - u;
    (u = S), l && l({ action: s, location: g.location, delta: y });
  }
  function f(S, y) {
    s = un.Push;
    let h = Zu(g.location, S, y);
    n && n(h, S), (u = c() + 1);
    let v = Gh(h, u),
      x = g.createHref(h);
    try {
      a.pushState(v, "", x);
    } catch (w) {
      if (w instanceof DOMException && w.name === "DataCloneError") throw w;
      i.location.assign(x);
    }
    o && l && l({ action: s, location: g.location, delta: 1 });
  }
  function m(S, y) {
    s = un.Replace;
    let h = Zu(g.location, S, y);
    n && n(h, S), (u = c());
    let v = Gh(h, u),
      x = g.createHref(h);
    a.replaceState(v, "", x),
      o && l && l({ action: s, location: g.location, delta: 0 });
  }
  function p(S) {
    let y = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof S == "string" ? S : Ka(S);
    return (
      me(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, y)
    );
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(i, a);
    },
    listen(S) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Wh, d),
        (l = S),
        () => {
          i.removeEventListener(Wh, d), (l = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: p,
    encodeLocation(S) {
      let y = p(S);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: f,
    replace: m,
    go(S) {
      return a.go(S);
    },
  };
  return g;
}
var Kh;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Kh || (Kh = {}));
function EP(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? ei(t) : t,
    i = Of(r.pathname || "/", n);
  if (i == null) return null;
  let o = zg(e);
  $P(o);
  let a = null;
  for (let s = 0; a == null && s < o.length; ++s) a = DP(o[s], FP(i));
  return a;
}
function zg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, a, s) => {
    let l = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (me(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Sn([r, l.relativePath]),
      c = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (me(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      zg(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: LP(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, a) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) i(o, a);
      else for (let l of Hg(o.path)) i(o, a, l);
    }),
    t
  );
}
function Hg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let a = Hg(r.join("/")),
    s = [];
  return (
    s.push(...a.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && s.push(...a),
    s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function $P(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : IP(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const AP = /^:\w+$/,
  bP = 3,
  OP = 2,
  kP = 1,
  MP = 10,
  RP = -2,
  Qh = (e) => e === "*";
function LP(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Qh) && (r += RP),
    t && (r += OP),
    n
      .filter((i) => !Qh(i))
      .reduce((i, o) => i + (AP.test(o) ? bP : o === "" ? kP : MP), r)
  );
}
function IP(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function DP(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let a = 0; a < n.length; ++a) {
    let s = n[a],
      l = a === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = jP(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = s.route;
    o.push({
      params: r,
      pathname: Sn([i, c.pathname]),
      pathnameBase: zP(Sn([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (i = Sn([i, c.pathnameBase]));
  }
  return o;
}
function jP(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = NP(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    a = o.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      if (c === "*") {
        let f = s[d] || "";
        a = o.slice(0, o.length - f.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = VP(s[d] || "", c)), u;
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  };
}
function NP(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    bf(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (a, s) => (r.push(s), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function FP(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      bf(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function VP(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      bf(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Of(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function BP(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? ei(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : UP(n, t)) : t,
    search: HP(r),
    hash: WP(i),
  };
}
function UP(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ol(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function kf(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Mf(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = ei(e))
    : ((i = co({}, e)),
      me(
        !i.pathname || !i.pathname.includes("?"),
        Ol("?", "pathname", "search", i)
      ),
      me(
        !i.pathname || !i.pathname.includes("#"),
        Ol("#", "pathname", "hash", i)
      ),
      me(!i.search || !i.search.includes("#"), Ol("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    a = o ? "/" : i.pathname,
    s;
  if (r || a == null) s = n;
  else {
    let d = t.length - 1;
    if (a.startsWith("..")) {
      let f = a.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      i.pathname = f.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let l = BP(i, s),
    u = a && a !== "/" && a.endsWith("/"),
    c = (o || a === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Sn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  zP = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  HP = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  WP = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function GP(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Wg = ["post", "put", "patch", "delete"];
new Set(Wg);
const KP = ["get", ...Wg];
new Set(KP);
/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qa() {
  return (
    (Qa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qa.apply(this, arguments)
  );
}
const Rf = P.createContext(null),
  QP = P.createContext(null),
  ti = P.createContext(null),
  Ms = P.createContext(null),
  Yt = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Gg = P.createContext(null);
function qP(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ni() || me(!1);
  let { basename: r, navigator: i } = P.useContext(ti),
    { hash: o, pathname: a, search: s } = Qg(e, { relative: n }),
    l = a;
  return (
    r !== "/" && (l = a === "/" ? r : Sn([r, a])),
    i.createHref({ pathname: l, search: s, hash: o })
  );
}
function ni() {
  return P.useContext(Ms) != null;
}
function bn() {
  return ni() || me(!1), P.useContext(Ms).location;
}
function Kg(e) {
  P.useContext(ti).static || P.useLayoutEffect(e);
}
function Rs() {
  let { isDataRoute: e } = P.useContext(Yt);
  return e ? u_() : YP();
}
function YP() {
  ni() || me(!1);
  let e = P.useContext(Rf),
    { basename: t, navigator: n } = P.useContext(ti),
    { matches: r } = P.useContext(Yt),
    { pathname: i } = bn(),
    o = JSON.stringify(kf(r).map((l) => l.pathnameBase)),
    a = P.useRef(!1);
  return (
    Kg(() => {
      a.current = !0;
    }),
    P.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !a.current)) return;
        if (typeof l == "number") {
          n.go(l);
          return;
        }
        let c = Mf(l, JSON.parse(o), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : Sn([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, o, i, e]
    )
  );
}
function XP() {
  let { matches: e } = P.useContext(Yt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Qg(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = P.useContext(Yt),
    { pathname: i } = bn(),
    o = JSON.stringify(kf(r).map((a) => a.pathnameBase));
  return P.useMemo(() => Mf(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function ZP(e, t) {
  return JP(e, t);
}
function JP(e, t, n) {
  ni() || me(!1);
  let { navigator: r } = P.useContext(ti),
    { matches: i } = P.useContext(Yt),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let l = bn(),
    u;
  if (t) {
    var c;
    let g = typeof t == "string" ? ei(t) : t;
    s === "/" || ((c = g.pathname) != null && c.startsWith(s)) || me(!1),
      (u = g);
  } else u = l;
  let d = u.pathname || "/",
    f = s === "/" ? d : d.slice(s.length) || "/",
    m = EP(e, { pathname: f }),
    p = i_(
      m &&
        m.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, a, g.params),
            pathname: Sn([
              s,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? s
                : Sn([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && p
    ? P.createElement(
        Ms.Provider,
        {
          value: {
            location: Qa(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: un.Pop,
          },
        },
        p
      )
    : p;
}
function e_() {
  let e = l_(),
    t = GP(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: i }, n) : null,
    o
  );
}
const t_ = P.createElement(e_, null);
class n_ extends P.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? P.createElement(
          Yt.Provider,
          { value: this.props.routeContext },
          P.createElement(Gg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function r_(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = P.useContext(Rf);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(Yt.Provider, { value: t }, r)
  );
}
function i_(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    a = (r = n) == null ? void 0 : r.errors;
  if (a != null) {
    let s = o.findIndex(
      (l) => l.route.id && (a == null ? void 0 : a[l.route.id])
    );
    s >= 0 || me(!1), (o = o.slice(0, Math.min(o.length, s + 1)));
  }
  return o.reduceRight((s, l, u) => {
    let c = l.route.id ? (a == null ? void 0 : a[l.route.id]) : null,
      d = null;
    n && (d = l.route.errorElement || t_);
    let f = t.concat(o.slice(0, u + 1)),
      m = () => {
        let p;
        return (
          c
            ? (p = d)
            : l.route.Component
            ? (p = P.createElement(l.route.Component, null))
            : l.route.element
            ? (p = l.route.element)
            : (p = s),
          P.createElement(r_, {
            match: l,
            routeContext: { outlet: s, matches: f, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
      ? P.createElement(n_, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: c,
          children: m(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Ju;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(Ju || (Ju = {}));
var fo;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(fo || (fo = {}));
function o_(e) {
  let t = P.useContext(Rf);
  return t || me(!1), t;
}
function a_(e) {
  let t = P.useContext(QP);
  return t || me(!1), t;
}
function s_(e) {
  let t = P.useContext(Yt);
  return t || me(!1), t;
}
function qg(e) {
  let t = s_(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || me(!1), n.route.id;
}
function l_() {
  var e;
  let t = P.useContext(Gg),
    n = a_(fo.UseRouteError),
    r = qg(fo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function u_() {
  let { router: e } = o_(Ju.UseNavigateStable),
    t = qg(fo.UseNavigateStable),
    n = P.useRef(!1);
  return (
    Kg(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Qa({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function c_(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  ni() || me(!1);
  let { matches: o } = P.useContext(Yt),
    { pathname: a } = bn(),
    s = Rs(),
    l = Mf(
      t,
      kf(o).map((c) => c.pathnameBase),
      a,
      i === "path"
    ),
    u = JSON.stringify(l);
  return (
    P.useEffect(
      () => s(JSON.parse(u), { replace: n, state: r, relative: i }),
      [s, u, i, n, r]
    ),
    null
  );
}
function bi(e) {
  me(!1);
}
function f_(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = un.Pop,
    navigator: o,
    static: a = !1,
  } = e;
  ni() && me(!1);
  let s = t.replace(/^\/*/, "/"),
    l = P.useMemo(() => ({ basename: s, navigator: o, static: a }), [s, o, a]);
  typeof r == "string" && (r = ei(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: d = "",
      state: f = null,
      key: m = "default",
    } = r,
    p = P.useMemo(() => {
      let g = Of(u, s);
      return g == null
        ? null
        : {
            location: { pathname: g, search: c, hash: d, state: f, key: m },
            navigationType: i,
          };
    }, [s, u, c, d, f, m, i]);
  return p == null
    ? null
    : P.createElement(
        ti.Provider,
        { value: l },
        P.createElement(Ms.Provider, { children: n, value: p })
      );
}
function d_(e) {
  let { children: t, location: n } = e;
  return ZP(ec(t), n);
}
var qh;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(qh || (qh = {}));
new Promise(() => {});
function ec(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    P.Children.forEach(e, (r, i) => {
      if (!P.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === P.Fragment) {
        n.push.apply(n, ec(r.props.children, o));
        return;
      }
      r.type !== bi && me(!1), !r.props.index || !r.props.children || me(!1);
      let a = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = ec(r.props.children, o)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tc() {
  return (
    (tc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tc.apply(this, arguments)
  );
}
function h_(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function p_(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function m_(e, t) {
  return e.button === 0 && (!t || t === "_self") && !p_(e);
}
const y_ = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  v_ = "startTransition",
  Yh = dx[v_];
function g_(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = P.useRef();
  o.current == null && (o.current = _P({ window: i, v5Compat: !0 }));
  let a = o.current,
    [s, l] = P.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = r || {},
    c = P.useCallback(
      (d) => {
        u && Yh ? Yh(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    P.useLayoutEffect(() => a.listen(c), [a, c]),
    P.createElement(f_, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: a,
    })
  );
}
const S_ =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  x_ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Er = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: a,
        state: s,
        target: l,
        to: u,
        preventScrollReset: c,
      } = t,
      d = h_(t, y_),
      { basename: f } = P.useContext(ti),
      m,
      p = !1;
    if (typeof u == "string" && x_.test(u) && ((m = u), S_))
      try {
        let h = new URL(window.location.href),
          v = u.startsWith("//") ? new URL(h.protocol + u) : new URL(u),
          x = Of(v.pathname, f);
        v.origin === h.origin && x != null
          ? (u = x + v.search + v.hash)
          : (p = !0);
      } catch {}
    let g = qP(u, { relative: i }),
      S = w_(u, {
        replace: a,
        state: s,
        target: l,
        preventScrollReset: c,
        relative: i,
      });
    function y(h) {
      r && r(h), h.defaultPrevented || S(h);
    }
    return P.createElement(
      "a",
      tc({}, d, { href: m || g, onClick: p || o ? r : y, ref: n, target: l })
    );
  });
var Xh;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(Xh || (Xh = {}));
var Zh;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Zh || (Zh = {}));
function w_(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: a,
    } = t === void 0 ? {} : t,
    s = Rs(),
    l = bn(),
    u = Qg(e, { relative: a });
  return P.useCallback(
    (c) => {
      if (m_(c, n)) {
        c.preventDefault();
        let d = r !== void 0 ? r : Ka(l) === Ka(u);
        s(e, { replace: d, state: i, preventScrollReset: o, relative: a });
      }
    },
    [l, s, u, r, i, n, e, o, a]
  );
}
const Yg = P.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Ls = P.createContext({}),
  Is = P.createContext(null),
  Ds = typeof document < "u",
  qa = Ds ? P.useLayoutEffect : P.useEffect,
  Xg = P.createContext({ strict: !1 });
function P_(e, t, n, r) {
  const { visualElement: i } = P.useContext(Ls),
    o = P.useContext(Xg),
    a = P.useContext(Is),
    s = P.useContext(Yg).reducedMotion,
    l = P.useRef();
  (r = r || o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s,
      }));
  const u = l.current;
  return (
    P.useInsertionEffect(() => {
      u && u.update(n, a);
    }),
    qa(() => {
      u && u.render();
    }),
    P.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? qa : P.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function $r(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function __(e, t, n) {
  return P.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : $r(n) && (n.current = r));
    },
    [t]
  );
}
function ho(e) {
  return typeof e == "string" || Array.isArray(e);
}
function js(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Lf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  If = ["initial", ...Lf];
function Ns(e) {
  return js(e.animate) || If.some((t) => ho(e[t]));
}
function Zg(e) {
  return !!(Ns(e) || e.variants);
}
function C_(e, t) {
  if (Ns(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ho(n) ? n : void 0,
      animate: ho(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function T_(e) {
  const { initial: t, animate: n } = C_(e, P.useContext(Ls));
  return P.useMemo(() => ({ initial: t, animate: n }), [Jh(t), Jh(n)]);
}
function Jh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ep = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  po = {};
for (const e in ep) po[e] = { isEnabled: (t) => ep[e].some((n) => !!t[n]) };
function E_(e) {
  for (const t in e) po[t] = { ...po[t], ...e[t] };
}
const Df = P.createContext({}),
  Jg = P.createContext({}),
  $_ = Symbol.for("motionComponentSymbol");
function A_({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && E_(e);
  function o(s, l) {
    let u;
    const c = { ...P.useContext(Yg), ...s, layoutId: b_(s) },
      { isStatic: d } = c,
      f = T_(s),
      m = r(s, d);
    if (!d && Ds) {
      f.visualElement = P_(i, m, c, t);
      const p = P.useContext(Jg),
        g = P.useContext(Xg).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, g, e, p));
    }
    return P.createElement(
      Ls.Provider,
      { value: f },
      u && f.visualElement
        ? P.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      n(i, s, __(m, f.visualElement, l), m, d, f.visualElement)
    );
  }
  const a = P.forwardRef(o);
  return (a[$_] = i), a;
}
function b_({ layoutId: e }) {
  const t = P.useContext(Df).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function O_(e) {
  function t(r, i = {}) {
    return A_(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const k_ = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function jf(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(k_.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Ya = {};
function M_(e) {
  Object.assign(Ya, e);
}
const Co = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  nr = new Set(Co);
function e0(e, { layout: t, layoutId: n }) {
  return (
    nr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ya[e] || e === "opacity"))
  );
}
const Xe = (e) => !!(e && e.getVelocity),
  R_ = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  L_ = Co.length;
function I_(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let a = 0; a < L_; a++) {
    const s = Co[a];
    if (e[s] !== void 0) {
      const l = R_[s] || s;
      o += `${l}(${e[s]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const t0 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  n0 = t0("--"),
  nc = t0("var(--"),
  D_ =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  j_ = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Cn = (e, t, n) => Math.min(Math.max(n, e), t),
  rr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Vi = { ...rr, transform: (e) => Cn(0, 1, e) },
  Zo = { ...rr, default: 1 },
  Bi = (e) => Math.round(e * 1e5) / 1e5,
  Fs = /(-)?([\d]*\.?[\d])+/g,
  r0 =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  N_ =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function To(e) {
  return typeof e == "string";
}
const Eo = (e) => ({
    test: (t) => To(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Jt = Eo("deg"),
  bt = Eo("%"),
  D = Eo("px"),
  F_ = Eo("vh"),
  V_ = Eo("vw"),
  tp = {
    ...bt,
    parse: (e) => bt.parse(e) / 100,
    transform: (e) => bt.transform(e * 100),
  },
  np = { ...rr, transform: Math.round },
  i0 = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    size: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    rotate: Jt,
    rotateX: Jt,
    rotateY: Jt,
    rotateZ: Jt,
    scale: Zo,
    scaleX: Zo,
    scaleY: Zo,
    scaleZ: Zo,
    skew: Jt,
    skewX: Jt,
    skewY: Jt,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: Vi,
    originX: tp,
    originY: tp,
    originZ: D,
    zIndex: np,
    fillOpacity: Vi,
    strokeOpacity: Vi,
    numOctaves: np,
  };
function Nf(e, t, n, r) {
  const { style: i, vars: o, transform: a, transformOrigin: s } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (n0(d)) {
      o[d] = f;
      continue;
    }
    const m = i0[d],
      p = j_(f, m);
    if (nr.has(d)) {
      if (((l = !0), (a[d] = p), !c)) continue;
      f !== (m.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (s[d] = p)) : (i[d] = p);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = I_(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: m = 0 } = s;
    i.transformOrigin = `${d} ${f} ${m}`;
  }
}
const Ff = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function o0(e, t, n) {
  for (const r in t) !Xe(t[r]) && !e0(r, n) && (e[r] = t[r]);
}
function B_({ transformTemplate: e }, t, n) {
  return P.useMemo(() => {
    const r = Ff();
    return (
      Nf(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function U_(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    o0(i, r, e),
    Object.assign(i, B_(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function z_(e, t, n) {
  const r = {},
    i = U_(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const H_ = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function Xa(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    H_.has(e)
  );
}
let a0 = (e) => !Xa(e);
function W_(e) {
  e && (a0 = (t) => (t.startsWith("on") ? !Xa(t) : e(t)));
}
try {
  W_(require("@emotion/is-prop-valid").default);
} catch {}
function G_(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((a0(i) ||
        (n === !0 && Xa(i)) ||
        (!t && !Xa(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function rp(e, t, n) {
  return typeof e == "string" ? e : D.transform(t + n * e);
}
function K_(e, t, n) {
  const r = rp(t, e.x, e.width),
    i = rp(n, e.y, e.height);
  return `${r} ${i}`;
}
const Q_ = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  q_ = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Y_(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? Q_ : q_;
  e[o.offset] = D.transform(-r);
  const a = D.transform(t),
    s = D.transform(n);
  e[o.array] = `${a} ${s}`;
}
function Vf(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: a,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((Nf(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: p, dimensions: g } = e;
  m.transform && (g && (p.transform = m.transform), delete m.transform),
    g &&
      (i !== void 0 || o !== void 0 || p.transform) &&
      (p.transformOrigin = K_(
        g,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    a !== void 0 && Y_(m, a, s, l, !1);
}
const s0 = () => ({ ...Ff(), attrs: {} }),
  Bf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function X_(e, t, n, r) {
  const i = P.useMemo(() => {
    const o = s0();
    return (
      Vf(o, t, { enableHardwareAcceleration: !1 }, Bf(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    o0(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function Z_(e = !1) {
  return (n, r, i, { latestValues: o }, a) => {
    const l = (jf(n) ? X_ : z_)(r, o, a, n),
      c = { ...G_(r, typeof n == "string", e), ...l, ref: i },
      { children: d } = r,
      f = P.useMemo(() => (Xe(d) ? d.get() : d), [d]);
    return P.createElement(n, { ...c, children: f });
  };
}
const Uf = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function l0(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const u0 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function c0(e, t, n, r) {
  l0(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(u0.has(i) ? i : Uf(i), t.attrs[i]);
}
function zf(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (Xe(n[i]) || (t.style && Xe(t.style[i])) || e0(i, e)) && (r[i] = n[i]);
  return r;
}
function f0(e, t) {
  const n = zf(e, t);
  for (const r in e)
    if (Xe(e[r]) || Xe(t[r])) {
      const i =
        Co.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function Hf(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function d0(e) {
  const t = P.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Za = (e) => Array.isArray(e),
  J_ = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  eC = (e) => (Za(e) ? e[e.length - 1] || 0 : e);
function Sa(e) {
  const t = Xe(e) ? e.get() : e;
  return J_(t) ? t.toValue() : t;
}
function tC(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const a = { latestValues: nC(r, i, o, e), renderState: t() };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const h0 = (e) => (t, n) => {
  const r = P.useContext(Ls),
    i = P.useContext(Is),
    o = () => tC(e, t, r, i);
  return n ? o() : d0(o);
};
function nC(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const f in o) i[f] = Sa(o[f]);
  let { initial: a, animate: s } = e;
  const l = Ns(e),
    u = Zg(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return (
    d &&
      typeof d != "boolean" &&
      !js(d) &&
      (Array.isArray(d) ? d : [d]).forEach((m) => {
        const p = Hf(e, m);
        if (!p) return;
        const { transitionEnd: g, transition: S, ...y } = p;
        for (const h in y) {
          let v = y[h];
          if (Array.isArray(v)) {
            const x = c ? v.length - 1 : 0;
            v = v[x];
          }
          v !== null && (i[h] = v);
        }
        for (const h in g) i[h] = g[h];
      }),
    i
  );
}
const rC = {
    useVisualState: h0({
      scrapeMotionValuesFromProps: f0,
      createRenderState: s0,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        try {
          n.dimensions =
            typeof t.getBBox == "function"
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        Vf(
          n,
          r,
          { enableHardwareAcceleration: !1 },
          Bf(t.tagName),
          e.transformTemplate
        ),
          c0(t, n);
      },
    }),
  },
  iC = {
    useVisualState: h0({
      scrapeMotionValuesFromProps: zf,
      createRenderState: Ff,
    }),
  };
function oC(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(jf(e) ? rC : iC),
    preloadedFeatures: n,
    useRender: Z_(t),
    createVisualElement: r,
    Component: e,
  };
}
function Vt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const p0 = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Vs(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const aC = (e) => (t) => p0(t) && e(t, Vs(t));
function Ut(e, t, n, r) {
  return Vt(e, t, aC(n), r);
}
const sC = (e, t) => (n) => t(e(n)),
  xn = (...e) => e.reduce(sC);
function m0(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const ip = m0("dragHorizontal"),
  op = m0("dragVertical");
function y0(e) {
  let t = !1;
  if (e === "y") t = op();
  else if (e === "x") t = ip();
  else {
    const n = ip(),
      r = op();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function v0() {
  const e = y0(!0);
  return e ? (e(), !1) : !0;
}
class On {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function lC(e) {
  let t = [],
    n = [],
    r = 0,
    i = !1,
    o = !1;
  const a = new WeakSet(),
    s = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && i,
          f = d ? t : n;
        return (
          u && a.add(l),
          f.indexOf(l) === -1 && (f.push(l), d && i && (r = t.length)),
          l
        );
      },
      cancel: (l) => {
        const u = n.indexOf(l);
        u !== -1 && n.splice(u, 1), a.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
          for (let u = 0; u < r; u++) {
            const c = t[u];
            c(l), a.has(c) && (s.schedule(c), e());
          }
        (i = !1), o && ((o = !1), s.process(l));
      },
    };
  return s;
}
const oe = { delta: 0, timestamp: 0, isProcessing: !1 },
  uC = 40;
let rc = !0,
  mo = !1;
const Bs = ["read", "update", "preRender", "render", "postRender"],
  jr = Bs.reduce((e, t) => ((e[t] = lC(() => (mo = !0))), e), {}),
  cC = (e) => jr[e].process(oe),
  g0 = (e) => {
    (mo = !1),
      (oe.delta = rc ? 1e3 / 60 : Math.max(Math.min(e - oe.timestamp, uC), 1)),
      (oe.timestamp = e),
      (oe.isProcessing = !0),
      Bs.forEach(cC),
      (oe.isProcessing = !1),
      mo && ((rc = !1), requestAnimationFrame(g0));
  },
  fC = () => {
    (mo = !0), (rc = !0), oe.isProcessing || requestAnimationFrame(g0);
  },
  ie = Bs.reduce((e, t) => {
    const n = jr[t];
    return (e[t] = (r, i = !1, o = !1) => (mo || fC(), n.schedule(r, i, o))), e;
  }, {});
function Qt(e) {
  Bs.forEach((t) => jr[t].cancel(e));
}
function ap(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, a) => {
      if (o.type === "touch" || v0()) return;
      const s = e.getProps();
      e.animationState &&
        s.whileHover &&
        e.animationState.setActive("whileHover", t),
        s[r] && ie.update(() => s[r](o, a));
    };
  return Ut(e.current, n, i, { passive: !e.getProps()[r] });
}
class dC extends On {
  mount() {
    this.unmount = xn(ap(this.node, !0), ap(this.node, !1));
  }
  unmount() {}
}
class hC extends On {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = xn(
      Vt(this.node.current, "focus", () => this.onFocus()),
      Vt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const S0 = (e, t) => (t ? (e === t ? !0 : S0(e, t.parentElement)) : !1),
  xe = (e) => e;
function kl(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Vs(n));
}
class pC extends On {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = xe),
      (this.removeEndListeners = xe),
      (this.removeAccessibleListeners = xe),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          o = Ut(
            window,
            "pointerup",
            (s, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              ie.update(() => {
                S0(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          a = Ut(window, "pointercancel", (s, l) => this.cancelPress(s, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = xn(o, a)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const a = (s) => {
              s.key !== "Enter" ||
                !this.checkPressEnd() ||
                kl("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && ie.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Vt(this.node.current, "keyup", a)),
              kl("down", (s, l) => {
                this.startPress(s, l);
              });
          },
          n = Vt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && kl("cancel", (o, a) => this.cancelPress(o, a));
          },
          i = Vt(this.node.current, "blur", r);
        this.removeAccessibleListeners = xn(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && ie.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !v0()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && ie.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Ut(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = Vt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = xn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const ic = new WeakMap(),
  Ml = new WeakMap(),
  mC = (e) => {
    const t = ic.get(e.target);
    t && t(e);
  },
  yC = (e) => {
    e.forEach(mC);
  };
function vC({ root: e, ...t }) {
  const n = e || document;
  Ml.has(n) || Ml.set(n, {});
  const r = Ml.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(yC, { root: e, ...t })), r[i];
}
function gC(e, t, n) {
  const r = vC(t);
  return (
    ic.set(e, n),
    r.observe(e),
    () => {
      ic.delete(e), r.unobserve(e);
    }
  );
}
const SC = { some: 0, all: 1 };
class xC extends On {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      a = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : SC[i],
      },
      s = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return gC(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(wC(t, n)) && this.startObserver();
  }
  unmount() {}
}
function wC({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const PC = {
  inView: { Feature: xC },
  tap: { Feature: pC },
  focus: { Feature: hC },
  hover: { Feature: dC },
};
function x0(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function _C(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function CC(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Us(e, t, n) {
  const r = e.getProps();
  return Hf(r, t, n !== void 0 ? n : r.custom, _C(e), CC(e));
}
const TC = "framerAppearId",
  EC = "data-" + Uf(TC);
let $C = xe,
  Wf = xe;
const wn = (e) => e * 1e3,
  zt = (e) => e / 1e3,
  AC = { current: !1 },
  w0 = (e) => Array.isArray(e) && typeof e[0] == "number";
function P0(e) {
  return !!(
    !e ||
    (typeof e == "string" && _0[e]) ||
    w0(e) ||
    (Array.isArray(e) && e.every(P0))
  );
}
const Oi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  _0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Oi([0, 0.65, 0.55, 1]),
    circOut: Oi([0.55, 0, 1, 0.45]),
    backIn: Oi([0.31, 0.01, 0.66, -0.59]),
    backOut: Oi([0.33, 1.53, 0.69, 0.99]),
  };
function C0(e) {
  if (e) return w0(e) ? Oi(e) : Array.isArray(e) ? e.map(C0) : _0[e];
}
function bC(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: a = "loop",
    ease: s,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = C0(s);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
const sp = {
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  },
  Rl = {},
  T0 = {};
for (const e in sp)
  T0[e] = () => (Rl[e] === void 0 && (Rl[e] = sp[e]()), Rl[e]);
function OC(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const E0 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  kC = 1e-7,
  MC = 12;
function RC(e, t, n, r, i) {
  let o,
    a,
    s = 0;
  do (a = t + (n - t) / 2), (o = E0(a, r, i) - e), o > 0 ? (n = a) : (t = a);
  while (Math.abs(o) > kC && ++s < MC);
  return a;
}
function $o(e, t, n, r) {
  if (e === t && n === r) return xe;
  const i = (o) => RC(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : E0(i(o), t, r));
}
const LC = $o(0.42, 0, 1, 1),
  IC = $o(0, 0, 0.58, 1),
  $0 = $o(0.42, 0, 0.58, 1),
  DC = (e) => Array.isArray(e) && typeof e[0] != "number",
  A0 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  b0 = (e) => (t) => 1 - e(1 - t),
  O0 = (e) => 1 - Math.sin(Math.acos(e)),
  Gf = b0(O0),
  jC = A0(Gf),
  k0 = $o(0.33, 1.53, 0.69, 0.99),
  Kf = b0(k0),
  NC = A0(Kf),
  FC = (e) =>
    (e *= 2) < 1 ? 0.5 * Kf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  VC = {
    linear: xe,
    easeIn: LC,
    easeInOut: $0,
    easeOut: IC,
    circIn: O0,
    circInOut: jC,
    circOut: Gf,
    backIn: Kf,
    backInOut: NC,
    backOut: k0,
    anticipate: FC,
  },
  lp = (e) => {
    if (Array.isArray(e)) {
      Wf(e.length === 4);
      const [t, n, r, i] = e;
      return $o(t, n, r, i);
    } else if (typeof e == "string") return VC[e];
    return e;
  },
  Qf = (e, t) => (n) =>
    !!(
      (To(n) && N_.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  M0 = (e, t, n) => (r) => {
    if (!To(r)) return r;
    const [i, o, a, s] = r.match(Fs);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  BC = (e) => Cn(0, 255, e),
  Ll = { ...rr, transform: (e) => Math.round(BC(e)) },
  zn = {
    test: Qf("rgb", "red"),
    parse: M0("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ll.transform(e) +
      ", " +
      Ll.transform(t) +
      ", " +
      Ll.transform(n) +
      ", " +
      Bi(Vi.transform(r)) +
      ")",
  };
function UC(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const oc = { test: Qf("#"), parse: UC, transform: zn.transform },
  Ar = {
    test: Qf("hsl", "hue"),
    parse: M0("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      bt.transform(Bi(t)) +
      ", " +
      bt.transform(Bi(n)) +
      ", " +
      Bi(Vi.transform(r)) +
      ")",
  },
  De = {
    test: (e) => zn.test(e) || oc.test(e) || Ar.test(e),
    parse: (e) =>
      zn.test(e) ? zn.parse(e) : Ar.test(e) ? Ar.parse(e) : oc.parse(e),
    transform: (e) =>
      To(e) ? e : e.hasOwnProperty("red") ? zn.transform(e) : Ar.transform(e),
  },
  se = (e, t, n) => -n * e + n * t + e;
function Il(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function zC({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    a = 0;
  if (!t) i = o = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - s;
    (i = Il(l, s, e + 1 / 3)), (o = Il(l, s, e)), (a = Il(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
const Dl = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  HC = [oc, zn, Ar],
  WC = (e) => HC.find((t) => t.test(e));
function up(e) {
  const t = WC(e);
  let n = t.parse(e);
  return t === Ar && (n = zC(n)), n;
}
const R0 = (e, t) => {
  const n = up(e),
    r = up(t),
    i = { ...n };
  return (o) => (
    (i.red = Dl(n.red, r.red, o)),
    (i.green = Dl(n.green, r.green, o)),
    (i.blue = Dl(n.blue, r.blue, o)),
    (i.alpha = se(n.alpha, r.alpha, o)),
    zn.transform(i)
  );
};
function GC(e) {
  var t, n;
  return (
    isNaN(e) &&
    To(e) &&
    (((t = e.match(Fs)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(r0)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const L0 = { regex: D_, countKey: "Vars", token: "${v}", parse: xe },
  I0 = { regex: r0, countKey: "Colors", token: "${c}", parse: De.parse },
  D0 = { regex: Fs, countKey: "Numbers", token: "${n}", parse: rr.parse };
function jl(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o &&
    ((e["num" + n] = o.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...o.map(i)));
}
function Ja(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && jl(n, L0), jl(n, I0), jl(n, D0), n;
}
function j0(e) {
  return Ja(e).values;
}
function N0(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = Ja(e),
    o = t.length;
  return (a) => {
    let s = i;
    for (let l = 0; l < o; l++)
      l < r
        ? (s = s.replace(L0.token, a[l]))
        : l < r + n
        ? (s = s.replace(I0.token, De.transform(a[l])))
        : (s = s.replace(D0.token, Bi(a[l])));
    return s;
  };
}
const KC = (e) => (typeof e == "number" ? 0 : e);
function QC(e) {
  const t = j0(e);
  return N0(e)(t.map(KC));
}
const Tn = {
    test: GC,
    parse: j0,
    createTransformer: N0,
    getAnimatableNone: QC,
  },
  F0 = (e, t) => (n) => `${n > 0 ? t : e}`;
function V0(e, t) {
  return typeof e == "number"
    ? (n) => se(e, t, n)
    : De.test(e)
    ? R0(e, t)
    : e.startsWith("var(")
    ? F0(e, t)
    : U0(e, t);
}
const B0 = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, a) => V0(o, t[a]));
    return (o) => {
      for (let a = 0; a < r; a++) n[a] = i[a](o);
      return n;
    };
  },
  qC = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = V0(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  U0 = (e, t) => {
    const n = Tn.createTransformer(t),
      r = Ja(e),
      i = Ja(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? xn(B0(r.values, i.values), n)
      : F0(e, t);
  },
  yo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  cp = (e, t) => (n) => se(e, t, n);
function YC(e) {
  return typeof e == "number"
    ? cp
    : typeof e == "string"
    ? De.test(e)
      ? R0
      : U0
    : Array.isArray(e)
    ? B0
    : typeof e == "object"
    ? qC
    : cp;
}
function XC(e, t, n) {
  const r = [],
    i = n || YC(e[0]),
    o = e.length - 1;
  for (let a = 0; a < o; a++) {
    let s = i(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || xe : t;
      s = xn(l, s);
    }
    r.push(s);
  }
  return r;
}
function z0(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Wf(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = XC(t, r, i),
    s = a.length,
    l = (u) => {
      let c = 0;
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = yo(e[c], e[c + 1], u);
      return a[c](d);
    };
  return n ? (u) => l(Cn(e[0], e[o - 1], u)) : l;
}
function ZC(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = yo(0, t, r);
    e.push(se(n, 1, i));
  }
}
function JC(e) {
  const t = [0];
  return ZC(t, e.length - 1), t;
}
function eT(e, t) {
  return e.map((n) => n * t);
}
function tT(e, t) {
  return e.map(() => t || $0).splice(0, e.length - 1);
}
function es({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = DC(r) ? r.map(lp) : lp(r),
    o = { done: !1, value: t[0] },
    a = eT(n && n.length === t.length ? n : JC(t), e),
    s = z0(a, t, { ease: Array.isArray(i) ? i : tT(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = s(l)), (o.done = l >= e), o),
  };
}
function H0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const nT = 5;
function W0(e, t, n) {
  const r = Math.max(t - nT, 0);
  return H0(n - e(r), t - r);
}
const Nl = 0.001,
  rT = 0.01,
  fp = 10,
  iT = 0.05,
  oT = 1;
function aT({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  $C(e <= wn(fp));
  let a = 1 - t;
  (a = Cn(iT, oT, a)),
    (e = Cn(rT, fp, zt(e))),
    a < 1
      ? ((i = (u) => {
          const c = u * a,
            d = c * e,
            f = c - n,
            m = ac(u, a),
            p = Math.exp(-d);
          return Nl - (f / m) * p;
        }),
        (o = (u) => {
          const d = u * a * e,
            f = d * n + n,
            m = Math.pow(a, 2) * Math.pow(u, 2) * e,
            p = Math.exp(-d),
            g = ac(Math.pow(u, 2), a);
          return ((-i(u) + Nl > 0 ? -1 : 1) * ((f - m) * p)) / g;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Nl + c * d;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const s = 5 / e,
    l = lT(i, o, s);
  if (((e = wn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: e };
  }
}
const sT = 12;
function lT(e, t, n) {
  let r = n;
  for (let i = 1; i < sT; i++) r = r - e(r) / t(r);
  return r;
}
function ac(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const uT = ["duration", "bounce"],
  cT = ["stiffness", "damping", "mass"];
function dp(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function fT(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!dp(e, cT) && dp(e, uT)) {
    const n = aT(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function G0({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: s,
      damping: l,
      mass: u,
      velocity: c,
      duration: d,
      isResolvedFromDuration: f,
    } = fT(r),
    m = c ? -zt(c) : 0,
    p = l / (2 * Math.sqrt(s * u)),
    g = o - i,
    S = zt(Math.sqrt(s / u)),
    y = Math.abs(g) < 5;
  n || (n = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5);
  let h;
  if (p < 1) {
    const v = ac(S, p);
    h = (x) => {
      const w = Math.exp(-p * S * x);
      return (
        o - w * (((m + p * S * g) / v) * Math.sin(v * x) + g * Math.cos(v * x))
      );
    };
  } else if (p === 1) h = (v) => o - Math.exp(-S * v) * (g + (m + S * g) * v);
  else {
    const v = S * Math.sqrt(p * p - 1);
    h = (x) => {
      const w = Math.exp(-p * S * x),
        C = Math.min(v * x, 300);
      return (
        o - (w * ((m + p * S * g) * Math.sinh(C) + v * g * Math.cosh(C))) / v
      );
    };
  }
  return {
    calculatedDuration: (f && d) || null,
    next: (v) => {
      const x = h(v);
      if (f) a.done = v >= d;
      else {
        let w = m;
        v !== 0 && (p < 1 ? (w = W0(h, v, x)) : (w = 0));
        const C = Math.abs(w) <= n,
          T = Math.abs(o - x) <= t;
        a.done = C && T;
      }
      return (a.value = a.done ? o : x), a;
    },
  };
}
function hp({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    m = (_) => (s !== void 0 && _ < s) || (l !== void 0 && _ > l),
    p = (_) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - _) < Math.abs(l - _)
        ? s
        : l;
  let g = n * t;
  const S = d + g,
    y = a === void 0 ? S : a(S);
  y !== S && (g = y - d);
  const h = (_) => -g * Math.exp(-_ / r),
    v = (_) => y + h(_),
    x = (_) => {
      const O = h(_),
        b = v(_);
      (f.done = Math.abs(O) <= u), (f.value = f.done ? y : b);
    };
  let w, C;
  const T = (_) => {
    m(f.value) &&
      ((w = _),
      (C = G0({
        keyframes: [f.value, p(f.value)],
        velocity: W0(v, _, f.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (_) => {
        let O = !1;
        return (
          !C && w === void 0 && ((O = !0), x(_), T(_)),
          w !== void 0 && _ > w ? C.next(_ - w) : (!O && x(_), f)
        );
      },
    }
  );
}
const dT = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ie.update(t, !0),
      stop: () => Qt(t),
      now: () => (oe.isProcessing ? oe.timestamp : performance.now()),
    };
  },
  pp = 2e4;
function mp(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < pp; ) (t += n), (r = e.next(t));
  return t >= pp ? 1 / 0 : t;
}
const hT = { decay: hp, inertia: hp, tween: es, keyframes: es, spring: G0 };
function ts({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = dT,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: a = 0,
  repeatType: s = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...f
}) {
  let m = 1,
    p = !1,
    g,
    S;
  const y = () => {
    g && g(),
      (S = new Promise((A) => {
        g = A;
      }));
  };
  y();
  let h;
  const v = hT[i] || es;
  let x;
  v !== es &&
    typeof r[0] != "number" &&
    ((x = z0([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const w = v({ ...f, keyframes: r });
  let C;
  s === "mirror" &&
    (C = v({
      ...f,
      keyframes: [...r].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let T = "idle",
    _ = null,
    O = null,
    b = null;
  w.calculatedDuration === null && o && (w.calculatedDuration = mp(w));
  const { calculatedDuration: F } = w;
  let B = 1 / 0,
    U = 1 / 0;
  F !== null && ((B = F + a), (U = B * (o + 1) - a));
  let N = 0;
  const V = (A) => {
      if (O === null) return;
      m > 0 && (O = Math.min(O, A)),
        m < 0 && (O = Math.min(A - U / m, O)),
        _ !== null ? (N = _) : (N = Math.round(A - O) * m);
      const L = N - t * (m >= 0 ? 1 : -1),
        Q = m >= 0 ? L < 0 : L > U;
      (N = Math.max(L, 0)), T === "finished" && _ === null && (N = U);
      let K = N,
        fe = w;
      if (o) {
        const Ue = N / B;
        let ze = Math.floor(Ue),
          ne = Ue % 1;
        !ne && Ue >= 1 && (ne = 1),
          ne === 1 && ze--,
          (ze = Math.min(ze, o + 1));
        const Ie = !!(ze % 2);
        Ie &&
          (s === "reverse"
            ? ((ne = 1 - ne), a && (ne -= a / B))
            : s === "mirror" && (fe = C));
        let He = Cn(0, 1, ne);
        N > U && (He = s === "reverse" && Ie ? 1 : 0), (K = He * B);
      }
      const q = Q ? { done: !1, value: r[0] } : fe.next(K);
      x && (q.value = x(q.value));
      let { done: he } = q;
      !Q && F !== null && (he = m >= 0 ? N >= U : N <= 0);
      const Ze = _ === null && (T === "finished" || (T === "running" && he));
      return d && d(q.value), Ze && k(), q;
    },
    j = () => {
      h && h.stop(), (h = void 0);
    },
    ce = () => {
      (T = "idle"), j(), y(), (O = b = null);
    },
    k = () => {
      (T = "finished"), c && c(), j(), y();
    },
    I = () => {
      if (p) return;
      h || (h = n(V));
      const A = h.now();
      l && l(),
        _ !== null ? (O = A - _) : (!O || T === "finished") && (O = A),
        (b = O),
        (_ = null),
        (T = "running"),
        h.start();
    };
  e && I();
  const E = {
    then(A, L) {
      return S.then(A, L);
    },
    get time() {
      return zt(N);
    },
    set time(A) {
      (A = wn(A)),
        (N = A),
        _ !== null || !h || m === 0 ? (_ = A) : (O = h.now() - A / m);
    },
    get duration() {
      const A = w.calculatedDuration === null ? mp(w) : w.calculatedDuration;
      return zt(A);
    },
    get speed() {
      return m;
    },
    set speed(A) {
      A === m || !h || ((m = A), (E.time = zt(N)));
    },
    get state() {
      return T;
    },
    play: I,
    pause: () => {
      (T = "paused"), (_ = N);
    },
    stop: () => {
      (p = !0), T !== "idle" && ((T = "idle"), u && u(), ce());
    },
    cancel: () => {
      b !== null && V(b), ce();
    },
    complete: () => {
      T = "finished";
    },
    sample: (A) => ((O = 0), V(A)),
  };
  return E;
}
const pT = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Jo = 10,
  mT = 2e4,
  yT = (e, t) => t.type === "spring" || e === "backgroundColor" || !P0(t.ease);
function vT(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      T0.waapi() &&
      pT.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let a = !1,
    s,
    l;
  const u = () => {
    l = new Promise((y) => {
      s = y;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: m } = i;
  if (yT(t, i)) {
    const y = ts({ ...i, repeat: 0, delay: 0 });
    let h = { done: !1, value: c[0] };
    const v = [];
    let x = 0;
    for (; !h.done && x < mT; ) (h = y.sample(x)), v.push(h.value), (x += Jo);
    (m = void 0), (c = v), (d = x - Jo), (f = "linear");
  }
  const p = bC(e.owner.current, t, c, { ...i, duration: d, ease: f, times: m }),
    g = () => p.cancel(),
    S = () => {
      ie.update(g), s(), u();
    };
  return (
    (p.onfinish = () => {
      e.set(OC(c, i)), r && r(), S();
    }),
    {
      then(y, h) {
        return l.then(y, h);
      },
      get time() {
        return zt(p.currentTime || 0);
      },
      set time(y) {
        p.currentTime = wn(y);
      },
      get speed() {
        return p.playbackRate;
      },
      set speed(y) {
        p.playbackRate = y;
      },
      get duration() {
        return zt(d);
      },
      play: () => {
        a || (p.play(), Qt(g));
      },
      pause: () => p.pause(),
      stop: () => {
        if (((a = !0), p.playState === "idle")) return;
        const { currentTime: y } = p;
        if (y) {
          const h = ts({ ...i, autoplay: !1 });
          e.setWithVelocity(h.sample(y - Jo).value, h.sample(y).value, Jo);
        }
        S();
      },
      complete: () => p.finish(),
      cancel: S,
    }
  );
}
function gT({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: xe,
      pause: xe,
      stop: xe,
      then: (o) => (o(), Promise.resolve()),
      cancel: xe,
      complete: xe,
    }
  );
  return t
    ? ts({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const ST = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  xT = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  wT = { type: "keyframes", duration: 0.8 },
  PT = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  _T = (e, { keyframes: t }) =>
    t.length > 2
      ? wT
      : nr.has(e)
      ? e.startsWith("scale")
        ? xT(t[1])
        : ST
      : PT,
  sc = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (Tn.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  CT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function TT(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Fs) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = CT.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const ET = /([a-z-]*)\(.*?\)/g,
  lc = {
    ...Tn,
    getAnimatableNone: (e) => {
      const t = e.match(ET);
      return t ? t.map(TT).join(" ") : e;
    },
  },
  $T = {
    ...i0,
    color: De,
    backgroundColor: De,
    outlineColor: De,
    fill: De,
    stroke: De,
    borderColor: De,
    borderTopColor: De,
    borderRightColor: De,
    borderBottomColor: De,
    borderLeftColor: De,
    filter: lc,
    WebkitFilter: lc,
  },
  qf = (e) => $T[e];
function K0(e, t) {
  let n = qf(e);
  return (
    n !== lc && (n = Tn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Q0 = (e) => /^0[^.\s]+$/.test(e);
function AT(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || Q0(e);
}
function bT(e, t, n, r) {
  const i = sc(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? a : o[u - 1]),
      AT(o[u]) && l.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (s = o[u]);
  if (i && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      o[c] = K0(t, s);
    }
  return o;
}
function OT({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function q0(e, t) {
  return e[t] || e.default || e;
}
const Yf =
  (e, t, n, r = {}) =>
  (i) => {
    const o = q0(r, e) || {},
      a = o.delay || r.delay || 0;
    let { elapsed: s = 0 } = r;
    s = s - wn(a);
    const l = bT(t, e, n, o),
      u = l[0],
      c = l[l.length - 1],
      d = sc(e, u),
      f = sc(e, c);
    let m = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -s,
      onUpdate: (p) => {
        t.set(p), o.onUpdate && o.onUpdate(p);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (OT(o) || (m = { ...m, ..._T(e, m) }),
      m.duration && (m.duration = wn(m.duration)),
      m.repeatDelay && (m.repeatDelay = wn(m.repeatDelay)),
      !d || !f || AC.current || o.type === !1)
    )
      return gT(m);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const p = vT(t, e, m);
      if (p) return p;
    }
    return ts(m);
  };
function ns(e) {
  return !!(Xe(e) && e.add);
}
const kT = (e) => /^\-?\d*\.?\d+$/.test(e);
function Xf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Zf(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Jf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Xf(this.subscriptions, t), () => Zf(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const a = this.subscriptions[o];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const MT = (e) => !isNaN(parseFloat(e));
class RT {
  constructor(t, n = {}) {
    (this.version = "10.12.18"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: a } = oe;
        this.lastUpdated !== a &&
          ((this.timeDelta = o),
          (this.lastUpdated = a),
          ie.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => ie.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = MT(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Jf());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ie.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? H0(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Kr(e, t) {
  return new RT(e, t);
}
const Y0 = (e) => (t) => t.test(e),
  LT = { test: (e) => e === "auto", parse: (e) => e },
  X0 = [rr, D, bt, Jt, V_, F_, LT],
  xi = (e) => X0.find(Y0(e)),
  IT = [...X0, De, Tn],
  DT = (e) => IT.find(Y0(e));
function jT(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Kr(n));
}
function NT(e, t) {
  const n = Us(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const a in o) {
    const s = eC(o[a]);
    jT(e, a, s);
  }
}
function FT(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((s) => !e.hasValue(s)),
    a = o.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = o[s],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && i !== void 0
              ? i
              : t[l]),
        c != null &&
          (typeof c == "string" && (kT(c) || Q0(c))
            ? (c = parseFloat(c))
            : !DT(c) && Tn.test(u) && (c = K0(l, u)),
          e.addValue(l, Kr(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function VT(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function BT(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = VT(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const a = n.getValue(i);
      a && (r[i] = a.get());
    }
  }
  return r;
}
function UT({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Z0(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: a,
    ...s
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const d in s) {
    const f = e.getValue(d),
      m = s[d];
    if (!f || m === void 0 || (c && UT(c, d))) continue;
    const p = { delay: n, elapsed: 0, ...o };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const S = e.getProps()[EC];
      S && (p.elapsed = window.HandoffAppearAnimations(S, d, f, ie));
    }
    f.start(Yf(d, f, m, e.shouldReduceMotion && nr.has(d) ? { type: !1 } : p));
    const g = f.animation;
    ns(l) && (l.add(d), g.then(() => l.remove(d))), u.push(g);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && NT(e, a);
      }),
    u
  );
}
function uc(e, t, n = {}) {
  const r = Us(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Z0(e, r, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = i;
            return zT(e, t, u + l, c, d, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [o, a] : [a, o];
    return l().then(() => u());
  } else return Promise.all([o(), a(n.delay)]);
}
function zT(e, t, n = 0, r = 0, i = 1, o) {
  const a = [],
    s = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(HT)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          a.push(
            uc(u, t, { ...o, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(a)
  );
}
function HT(e, t) {
  return e.sortNodePosition(t);
}
function WT(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => uc(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = uc(e, t, n);
  else {
    const i = typeof t == "function" ? Us(e, t, n.custom) : t;
    r = Promise.all(Z0(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const GT = [...Lf].reverse(),
  KT = Lf.length;
function QT(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => WT(e, n, r)));
}
function qT(e) {
  let t = QT(e);
  const n = XT();
  let r = !0;
  const i = (l, u) => {
    const c = Us(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...m } = c;
      l = { ...l, ...m, ...f };
    }
    return l;
  };
  function o(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      m = new Set();
    let p = {},
      g = 1 / 0;
    for (let y = 0; y < KT; y++) {
      const h = GT[y],
        v = n[h],
        x = c[h] !== void 0 ? c[h] : d[h],
        w = ho(x),
        C = h === u ? v.isActive : null;
      C === !1 && (g = y);
      let T = x === d[h] && x !== c[h] && w;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (v.protectedKeys = { ...p }),
        (!v.isActive && C === null) ||
          (!x && !v.prevProp) ||
          js(x) ||
          typeof x == "boolean")
      )
        continue;
      const _ = YT(v.prevProp, x);
      let O = _ || (h === u && v.isActive && !T && w) || (y > g && w);
      const b = Array.isArray(x) ? x : [x];
      let F = b.reduce(i, {});
      C === !1 && (F = {});
      const { prevResolvedValues: B = {} } = v,
        U = { ...B, ...F },
        N = (V) => {
          (O = !0), m.delete(V), (v.needsAnimating[V] = !0);
        };
      for (const V in U) {
        const j = F[V],
          ce = B[V];
        p.hasOwnProperty(V) ||
          (j !== ce
            ? Za(j) && Za(ce)
              ? !x0(j, ce) || _
                ? N(V)
                : (v.protectedKeys[V] = !0)
              : j !== void 0
              ? N(V)
              : m.add(V)
            : j !== void 0 && m.has(V)
            ? N(V)
            : (v.protectedKeys[V] = !0));
      }
      (v.prevProp = x),
        (v.prevResolvedValues = F),
        v.isActive && (p = { ...p, ...F }),
        r && e.blockInitialAnimation && (O = !1),
        O &&
          !T &&
          f.push(
            ...b.map((V) => ({ animation: V, options: { type: h, ...l } }))
          );
    }
    if (m.size) {
      const y = {};
      m.forEach((h) => {
        const v = e.getBaseTarget(h);
        v !== void 0 && (y[h] = v);
      }),
        f.push({ animation: y });
    }
    let S = !!f.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (S = !1),
      (r = !1),
      S ? t(f) : Promise.resolve()
    );
  }
  function s(l, u, c) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((m) => {
        var p;
        return (p = m.animationState) === null || p === void 0
          ? void 0
          : p.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = a(c, l);
    for (const m in n) n[m].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function YT(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !x0(t, e) : !1;
}
function Rn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function XT() {
  return {
    animate: Rn(!0),
    whileInView: Rn(),
    whileHover: Rn(),
    whileTap: Rn(),
    whileDrag: Rn(),
    whileFocus: Rn(),
    exit: Rn(),
  };
}
class ZT extends On {
  constructor(t) {
    super(t), t.animationState || (t.animationState = qT(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), js(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let JT = 0;
class e2 extends On {
  constructor() {
    super(...arguments), (this.id = JT++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const t2 = { animation: { Feature: ZT }, exit: { Feature: e2 } },
  yp = (e, t) => Math.abs(e - t);
function n2(e, t) {
  const n = yp(e.x, t.x),
    r = yp(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class J0 {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Vl(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = n2(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !d) return;
        const { point: f } = u,
          { timestamp: m } = oe;
        this.history.push({ ...f, timestamp: m });
        const { onStart: p, onMove: g } = this.handlers;
        c ||
          (p && p(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Fl(c, this.transformPagePoint)),
          ie.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          m = Vl(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Fl(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && d && d(u, m), f && f(u, m);
      }),
      !p0(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = Vs(t),
      o = Fl(i, this.transformPagePoint),
      { point: a } = o,
      { timestamp: s } = oe;
    this.history = [{ ...a, timestamp: s }];
    const { onSessionStart: l } = n;
    l && l(t, Vl(o, this.history)),
      (this.removeListeners = xn(
        Ut(window, "pointermove", this.handlePointerMove),
        Ut(window, "pointerup", this.handlePointerUp),
        Ut(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Qt(this.updatePoint);
  }
}
function Fl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function vp(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Vl({ point: e }, t) {
  return {
    point: e,
    delta: vp(e, e1(t)),
    offset: vp(e, r2(t)),
    velocity: i2(t, 0.1),
  };
}
function r2(e) {
  return e[0];
}
function e1(e) {
  return e[e.length - 1];
}
function i2(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = e1(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > wn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = zt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function rt(e) {
  return e.max - e.min;
}
function cc(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function gp(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = se(t.min, t.max, e.origin)),
    (e.scale = rt(n) / rt(t)),
    (cc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = se(n.min, n.max, e.origin) - e.originPoint),
    (cc(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ui(e, t, n, r) {
  gp(e.x, t.x, n.x, r ? r.originX : void 0),
    gp(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Sp(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + rt(t));
}
function o2(e, t, n) {
  Sp(e.x, t.x, n.x), Sp(e.y, t.y, n.y);
}
function xp(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + rt(t));
}
function zi(e, t, n) {
  xp(e.x, t.x, n.x), xp(e.y, t.y, n.y);
}
function a2(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? se(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? se(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function wp(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function s2(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: wp(e.x, n, i), y: wp(e.y, t, r) };
}
function Pp(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function l2(e, t) {
  return { x: Pp(e.x, t.x), y: Pp(e.y, t.y) };
}
function u2(e, t) {
  let n = 0.5;
  const r = rt(e),
    i = rt(t);
  return (
    i > r
      ? (n = yo(t.min, t.max - r, e.min))
      : r > i && (n = yo(e.min, e.max - i, t.min)),
    Cn(0, 1, n)
  );
}
function c2(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const fc = 0.35;
function f2(e = fc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = fc),
    { x: _p(e, "left", "right"), y: _p(e, "top", "bottom") }
  );
}
function _p(e, t, n) {
  return { min: Cp(e, t), max: Cp(e, n) };
}
function Cp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Tp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  br = () => ({ x: Tp(), y: Tp() }),
  Ep = () => ({ min: 0, max: 0 }),
  ye = () => ({ x: Ep(), y: Ep() });
function Ct(e) {
  return [e("x"), e("y")];
}
function t1({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function d2({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function h2(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Bl(e) {
  return e === void 0 || e === 1;
}
function dc({ scale: e, scaleX: t, scaleY: n }) {
  return !Bl(e) || !Bl(t) || !Bl(n);
}
function Dn(e) {
  return dc(e) || n1(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function n1(e) {
  return $p(e.x) || $p(e.y);
}
function $p(e) {
  return e && e !== "0%";
}
function rs(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Ap(e, t, n, r, i) {
  return i !== void 0 && (e = rs(e, i, r)), rs(e, n, r) + t;
}
function hc(e, t = 0, n = 1, r, i) {
  (e.min = Ap(e.min, t, n, r, i)), (e.max = Ap(e.max, t, n, r, i));
}
function r1(e, { x: t, y: n }) {
  hc(e.x, t.translate, t.scale, t.originPoint),
    hc(e.y, n.translate, n.scale, n.originPoint);
}
function p2(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, a;
  for (let s = 0; s < i; s++) {
    (o = n[s]), (a = o.projectionDelta);
    const l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Or(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), r1(e, a)),
      r && Dn(o.latestValues) && Or(e, o.latestValues));
  }
  (t.x = bp(t.x)), (t.y = bp(t.y));
}
function bp(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function nn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Op(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    a = se(e.min, e.max, o);
  hc(e, t[n], t[r], a, t.scale);
}
const m2 = ["x", "scaleX", "originX"],
  y2 = ["y", "scaleY", "originY"];
function Or(e, t) {
  Op(e.x, t, m2), Op(e.y, t, y2);
}
function i1(e, t) {
  return t1(h2(e.getBoundingClientRect(), t));
}
function v2(e, t, n) {
  const r = i1(e, n),
    { scroll: i } = t;
  return i && (nn(r.x, i.offset.x), nn(r.y, i.offset.y)), r;
}
const g2 = new WeakMap();
class S2 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ye()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (l) => {
        this.stopAnimation(), n && this.snapToCursor(Vs(l, "page").point);
      },
      o = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = y0(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ct((p) => {
            let g = this.getAxisMotionValue(p).get() || 0;
            if (bt.test(g)) {
              const { projection: S } = this.visualElement;
              if (S && S.layout) {
                const y = S.layout.layoutBox[p];
                y && (g = rt(y) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[p] = g;
          }),
          f && ie.update(() => f(l, u), !1, !0);
        const { animationState: m } = this.visualElement;
        m && m.setActive("whileDrag", !0);
      },
      a = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: d,
          onDirectionLock: f,
          onDrag: m,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: p } = u;
        if (d && this.currentDirection === null) {
          (this.currentDirection = x2(p)),
            this.currentDirection !== null && f && f(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, p),
          this.updateAxis("y", u.point, p),
          this.visualElement.render(),
          m && m(l, u);
      },
      s = (l, u) => this.stop(l, u);
    this.panSession = new J0(
      t,
      { onSessionStart: i, onStart: o, onMove: a, onSessionEnd: s },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && ie.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !ea(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (a = a2(a, this.constraints[t], this.elastic[t])),
      o.set(a);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    t && $r(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = s2(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = f2(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ct((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = c2(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !$r(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = v2(r, i.root, this.visualElement.getTransformPagePoint());
    let a = l2(i.layout.layoutBox, o);
    if (n) {
      const s = n(d2(a));
      (this.hasMutatedConstraints = !!s), s && (a = t1(s));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = Ct((c) => {
        if (!ea(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        a && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          m = i ? 40 : 1e7,
          p = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...d,
          };
        return this.startAxisValueAnimation(c, p);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Yf(t, r, 0, n));
  }
  stopAnimation() {
    Ct((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Ct((n) => {
      const { drag: r } = this.getProps();
      if (!ea(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: a, max: s } = i.layout.layoutBox[n];
        o.set(t[n] - se(a, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!$r(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ct((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        i[a] = u2({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ct((a) => {
        if (!ea(a, t, null)) return;
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a];
        s.set(se(l, u, i[a]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    g2.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Ut(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        $r(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const a = Vt(window, "resize", () => this.scalePositionWithinConstraints()),
      s = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Ct((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), n(), o(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: a = fc,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: a,
      dragMomentum: s,
    };
  }
}
function ea(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function x2(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class w2 extends On {
  constructor(t) {
    super(t),
      (this.removeGroupControls = xe),
      (this.removeListeners = xe),
      (this.controls = new S2(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || xe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const kp = (e) => (t, n) => {
  e && ie.update(() => e(t, n));
};
class P2 extends On {
  constructor() {
    super(...arguments), (this.removePointerDownListener = xe);
  }
  onPointerDown(t) {
    this.session = new J0(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: kp(t),
      onStart: kp(n),
      onMove: r,
      onEnd: (o, a) => {
        delete this.session, i && ie.update(() => i(o, a));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ut(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function _2() {
  const e = P.useContext(Is);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = P.useId();
  return P.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const xa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Mp(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const wi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const n = Mp(e, t.target.x),
        r = Mp(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  C2 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Tn.parse(e);
      if (i.length > 5) return r;
      const o = Tn.createTransformer(e),
        a = typeof i[0] != "number" ? 1 : 0,
        s = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + a] /= s), (i[1 + a] /= l);
      const u = se(s, l, 0.5);
      return (
        typeof i[2 + a] == "number" && (i[2 + a] /= u),
        typeof i[3 + a] == "number" && (i[3 + a] /= u),
        o(i)
      );
    },
  };
class T2 extends je.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    M_(E2),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (xa.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      a = r.projection;
    return (
      a &&
        ((a.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? a.promote()
            : a.relegate() ||
              ie.postRender(() => {
                const s = a.getStack();
                (!s || !s.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function o1(e) {
  const [t, n] = _2(),
    r = P.useContext(Df);
  return je.createElement(T2, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: P.useContext(Jg),
    isPresent: t,
    safeToRemove: n,
  });
}
const E2 = {
    borderRadius: {
      ...wi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: wi,
    borderTopRightRadius: wi,
    borderBottomLeftRadius: wi,
    borderBottomRightRadius: wi,
    boxShadow: C2,
  },
  a1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  $2 = a1.length,
  Rp = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Lp = (e) => typeof e == "number" || D.test(e);
function A2(e, t, n, r, i, o) {
  i
    ? ((e.opacity = se(0, n.opacity !== void 0 ? n.opacity : 1, b2(r))),
      (e.opacityExit = se(t.opacity !== void 0 ? t.opacity : 1, 0, O2(r))))
    : o &&
      (e.opacity = se(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let a = 0; a < $2; a++) {
    const s = `border${a1[a]}Radius`;
    let l = Ip(t, s),
      u = Ip(n, s);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Lp(l) === Lp(u)
        ? ((e[s] = Math.max(se(Rp(l), Rp(u), r), 0)),
          (bt.test(u) || bt.test(l)) && (e[s] += "%"))
        : (e[s] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = se(t.rotate || 0, n.rotate || 0, r));
}
function Ip(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const b2 = s1(0, 0.5, Gf),
  O2 = s1(0.5, 0.95, xe);
function s1(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(yo(e, t, r)));
}
function Dp(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function at(e, t) {
  Dp(e.x, t.x), Dp(e.y, t.y);
}
function jp(e, t, n, r, i) {
  return (
    (e -= t), (e = rs(e, 1 / n, r)), i !== void 0 && (e = rs(e, 1 / i, r)), e
  );
}
function k2(e, t = 0, n = 1, r = 0.5, i, o = e, a = e) {
  if (
    (bt.test(t) &&
      ((t = parseFloat(t)), (t = se(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let s = se(o.min, o.max, r);
  e === o && (s -= t),
    (e.min = jp(e.min, t, n, s, i)),
    (e.max = jp(e.max, t, n, s, i));
}
function Np(e, t, [n, r, i], o, a) {
  k2(e, t[n], t[r], t[i], t.scale, o, a);
}
const M2 = ["x", "scaleX", "originX"],
  R2 = ["y", "scaleY", "originY"];
function Fp(e, t, n, r) {
  Np(e.x, t, M2, n ? n.x : void 0, r ? r.x : void 0),
    Np(e.y, t, R2, n ? n.y : void 0, r ? r.y : void 0);
}
function Vp(e) {
  return e.translate === 0 && e.scale === 1;
}
function l1(e) {
  return Vp(e.x) && Vp(e.y);
}
function pc(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Bp(e) {
  return rt(e.x) / rt(e.y);
}
class L2 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Xf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Zf(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Up(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x,
    s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
const I2 = (e, t) => e.depth - t.depth;
class D2 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Xf(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Zf(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(I2),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function j2(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Qt(r), e(o - t));
    };
  return ie.read(r, !0), () => Qt(r);
}
function N2(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function F2(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function V2(e, t, n) {
  const r = Xe(e) ? e : Kr(e);
  return r.start(Yf("", r, t, n)), r.animation;
}
const zp = ["", "X", "Y", "Z"],
  Hp = 1e3;
let B2 = 0;
const jn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function u1({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      (this.id = B2++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (jn.totalNodes =
            jn.resolvedTargetDeltas =
            jn.recalculatedProjection =
              0),
            this.nodes.forEach(H2),
            this.nodes.forEach(q2),
            this.nodes.forEach(Y2),
            this.nodes.forEach(W2),
            N2(jn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new D2());
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new Jf()),
        this.eventHandlers.get(a).add(s)
      );
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = F2(a)), (this.instance = a);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = j2(f, 250)),
            xa.hasAnimatedSinceResize &&
              ((xa.hasAnimatedSinceResize = !1), this.nodes.forEach(Gp));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: m,
              layout: p,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const g =
                  this.options.transition || c.getDefaultTransition() || tE,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: y } =
                  c.getProps(),
                h = !this.targetLayout || !pc(this.targetLayout, p) || m,
                v = !f && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                v ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, v);
                const x = { ...q0(g, "layout"), onPlay: S, onComplete: y };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                f || Gp(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = p;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Qt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(X2),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Wp);
        return;
      }
      this.isUpdating || this.nodes.forEach(K2),
        (this.isUpdating = !1),
        this.nodes.forEach(Q2),
        this.nodes.forEach(U2),
        this.nodes.forEach(z2),
        this.clearAllSnapshots();
      const s = performance.now();
      (oe.delta = Cn(0, 1e3 / 60, s - oe.timestamp)),
        (oe.timestamp = s),
        (oe.isProcessing = !0),
        jr.update.process(oe),
        jr.preRender.process(oe),
        jr.render.process(oe),
        (oe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(G2), this.sharedNodes.forEach(Z2);
    }
    scheduleUpdateProjection() {
      ie.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      ie.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ye()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s &&
        s.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0
        );
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (s = !1),
        s &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const a = this.isLayoutDirty || this.shouldResetTransform,
        s = this.projectionDelta && !l1(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      a &&
        (s || Dn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return (
        a && (l = this.removeTransform(l)),
        nE(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a) return ye();
      const s = a.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (nn(s.x, l.offset.x), nn(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = ye();
      at(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            at(s, a);
            const { scroll: f } = this.root;
            f && (nn(s.x, -f.offset.x), nn(s.y, -f.offset.y));
          }
          nn(s.x, c.offset.x), nn(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = ye();
      at(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Or(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Dn(c.latestValues) && Or(l, c.latestValues);
      }
      return Dn(this.latestValues) && Or(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = ye();
      at(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Dn(u.latestValues)) continue;
        dc(u.latestValues) && u.updateSnapshot();
        const c = ye(),
          d = u.measurePageBox();
        at(c, d),
          Fp(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Dn(this.latestValues) && Fp(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== oe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = oe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ye()),
              (this.relativeTargetOrigin = ye()),
              zi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              at(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ye()), (this.targetWithTransforms = ye())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                o2(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : at(this.target, this.layout.layoutBox),
                r1(this.target, this.targetDelta))
              : at(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ye()),
                (this.relativeTargetOrigin = ye()),
                zi(this.relativeTargetOrigin, this.target, m.target),
                at(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          jn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          dc(this.parent.latestValues) ||
          n1(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const s = this.getLead(),
        l = !!this.resumingFrom || this !== s;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === oe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      at(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        m = this.treeScale.y;
      p2(this.layoutCorrected, this.treeScale, this.path, l),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (s.target = s.layout.layoutBox);
      const { target: p } = s;
      if (!p) {
        this.projectionTransform &&
          ((this.projectionDelta = br()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = br()),
        (this.projectionDeltaWithTransform = br()));
      const g = this.projectionTransform;
      Ui(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.projectionTransform = Up(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== g ||
          this.treeScale.x !== f ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", p)),
        jn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = br();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const f = ye(),
        m = l ? l.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        g = m !== p,
        S = this.getStack(),
        y = !S || S.members.length <= 1,
        h = !!(g && !y && this.options.crossfade === !0 && !this.path.some(eE));
      this.animationProgress = 0;
      let v;
      (this.mixTargetDelta = (x) => {
        const w = x / 1e3;
        Kp(d.x, a.x, w),
          Kp(d.y, a.y, w),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (zi(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            J2(this.relativeTarget, this.relativeTargetOrigin, f, w),
            v && pc(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = ye()),
            at(v, this.relativeTarget)),
          g &&
            ((this.animationValues = c), A2(c, u, this.latestValues, w, h, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = w);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Qt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ie.update(() => {
          (xa.hasAnimatedSinceResize = !0),
            (this.currentAnimation = V2(0, Hp, {
              ...a,
              onUpdate: (s) => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Hp),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          c1(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ye();
          const d = rt(this.layout.layoutBox.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + d);
          const f = rt(this.layout.layoutBox.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + f);
        }
        at(s, l),
          Or(s, c),
          Ui(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new L2()),
        this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let s = !1;
      const { latestValues: l } = a;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s))
        return;
      const u = {};
      for (let c = 0; c < zp.length; c++) {
        const d = "rotate" + zp[c];
        l[d] && ((u[d] = l[d]), a.setStaticValue(d, 0));
      }
      a.render();
      for (const c in u) a.setStaticValue(c, u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a = {}) {
      var s, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Sa(a.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = Sa(a.pointerEvents) || "")),
          this.hasProjected &&
            !Dn(this.latestValues) &&
            ((g.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Up(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: m, y: p } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${p.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (s = f.opacity) !== null && s !== void 0
                      ? s
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const g in Ya) {
        if (f[g] === void 0) continue;
        const { correct: S, applyTo: y } = Ya[g],
          h = u.transform === "none" ? f[g] : S(f[g], d);
        if (y) {
          const v = y.length;
          for (let x = 0; x < v; x++) u[y[x]] = h;
        } else u[g] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? Sa(a.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(Wp),
        this.root.sharedNodes.clear();
    }
  };
}
function U2(e) {
  e.updateLayout();
}
function z2(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      a = n.source !== e.layout.source;
    o === "size"
      ? Ct((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            m = rt(f);
          (f.min = r[d].min), (f.max = f.min + m);
        })
      : c1(o, n.layoutBox, r) &&
        Ct((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            m = rt(r[d]);
          (f.max = f.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + m));
        });
    const s = br();
    Ui(s, r, n.layoutBox);
    const l = br();
    a ? Ui(l, e.applyTransform(i, !0), n.measuredBox) : Ui(l, r, n.layoutBox);
    const u = !l1(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: m } = d;
        if (f && m) {
          const p = ye();
          zi(p, n.layoutBox, f.layoutBox);
          const g = ye();
          zi(g, r, m.layoutBox),
            pc(p, g) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = p),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function H2(e) {
  jn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function W2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function G2(e) {
  e.clearSnapshot();
}
function Wp(e) {
  e.clearMeasurements();
}
function K2(e) {
  e.isLayoutDirty = !1;
}
function Q2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Gp(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function q2(e) {
  e.resolveTargetDelta();
}
function Y2(e) {
  e.calcProjection();
}
function X2(e) {
  e.resetRotation();
}
function Z2(e) {
  e.removeLeadSnapshot();
}
function Kp(e, t, n) {
  (e.translate = se(t.translate, 0, n)),
    (e.scale = se(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Qp(e, t, n, r) {
  (e.min = se(t.min, n.min, r)), (e.max = se(t.max, n.max, r));
}
function J2(e, t, n, r) {
  Qp(e.x, t.x, n.x, r), Qp(e.y, t.y, n.y, r);
}
function eE(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const tE = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function qp(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function nE(e) {
  qp(e.x), qp(e.y);
}
function c1(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !cc(Bp(t), Bp(n), 0.2))
  );
}
const rE = u1({
    attachResizeListener: (e, t) => Vt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ul = { current: void 0 },
  f1 = u1({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ul.current) {
        const e = new rE({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ul.current = e);
      }
      return Ul.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  iE = {
    pan: { Feature: P2 },
    drag: { Feature: w2, ProjectionNode: f1, MeasureLayout: o1 },
  },
  oE = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function aE(e) {
  const t = oE.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function mc(e, t, n = 1) {
  const [r, i] = aE(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  return o ? o.trim() : nc(i) ? mc(i, t, n + 1) : i;
}
function sE(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!nc(o)) return;
      const a = mc(o, r);
      a && i.set(a);
    });
  for (const i in t) {
    const o = t[i];
    if (!nc(o)) continue;
    const a = mc(o, r);
    a && ((t[i] = a), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const lE = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  d1 = (e) => lE.has(e),
  uE = (e) => Object.keys(e).some(d1),
  Yp = (e) => e === rr || e === D,
  Xp = (e, t) => parseFloat(e.split(", ")[t]),
  Zp =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return Xp(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? Xp(o[1], e) : 0;
      }
    },
  cE = new Set(["x", "y", "z"]),
  fE = Co.filter((e) => !cE.has(e));
function dE(e) {
  const t = [];
  return (
    fE.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Jp = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: Zp(4, 13),
    y: Zp(5, 14),
  },
  hE = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: a } = o,
      s = {};
    a === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        s[u] = Jp[u](r, o);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(s[u]), (e[u] = Jp[u](l, o));
      }),
      e
    );
  },
  pE = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(d1);
    let o = [],
      a = !1;
    const s = [];
    if (
      (i.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          d = xi(c);
        const f = t[l];
        let m;
        if (Za(f)) {
          const p = f.length,
            g = f[0] === null ? 1 : 0;
          (c = f[g]), (d = xi(c));
          for (let S = g; S < p && f[S] !== null; S++)
            m ? Wf(xi(f[S]) === m) : (m = xi(f[S]));
        } else m = xi(f);
        if (d !== m)
          if (Yp(d) && Yp(m)) {
            const p = u.get();
            typeof p == "string" && u.set(parseFloat(p)),
              typeof f == "string"
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && m === D && (t[l] = f.map(parseFloat));
          } else
            d != null &&
            d.transform &&
            m != null &&
            m.transform &&
            (c === 0 || f === 0)
              ? c === 0
                ? u.set(m.transform(c))
                : (t[l] = d.transform(f))
              : (a || ((o = dE(e)), (a = !0)),
                s.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(f));
      }),
      s.length)
    ) {
      const l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = hE(t, e, s);
      return (
        o.length &&
          o.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        Ds && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function mE(e, t, n, r) {
  return uE(t) ? pE(e, t, n, r) : { target: t, transitionEnd: r };
}
const yE = (e, t, n, r) => {
    const i = sE(e, t, r);
    return (t = i.target), (r = i.transitionEnd), mE(e, t, n, r);
  },
  yc = { current: null },
  h1 = { current: !1 };
function vE() {
  if (((h1.current = !0), !!Ds))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (yc.current = e.matches);
      e.addListener(t), t();
    } else yc.current = !1;
}
function gE(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      a = n[i];
    if (Xe(o)) e.addValue(i, o), ns(r) && r.add(i);
    else if (Xe(a)) e.addValue(i, Kr(o, { owner: e })), ns(r) && r.remove(i);
    else if (a !== o)
      if (e.hasValue(i)) {
        const s = e.getValue(i);
        !s.hasAnimated && s.set(o);
      } else {
        const s = e.getStaticValue(i);
        e.addValue(i, Kr(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const em = new WeakMap(),
  p1 = Object.keys(po),
  SE = p1.length,
  tm = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  xE = If.length;
class wE {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => ie.render(this.render, !1, !0));
    const { latestValues: s, renderState: l } = o;
    (this.latestValues = s),
      (this.baseTarget = { ...s }),
      (this.initialValues = n.initial ? { ...s } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.isControllingVariants = Ns(n)),
      (this.isVariantNode = Zg(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Xe(f) && (f.set(s[d], !1), ns(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      em.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      h1.current || vE(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : yc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    em.delete(this.current),
      this.projection && this.projection.unmount(),
      Qt(this.notifyUpdate),
      Qt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = nr.has(t),
      i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && ie.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let a, s;
    for (let l = 0; l < SE; l++) {
      const u = p1[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: m,
        } = po[u];
      f && (a = f),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          m && (s = m));
    }
    if (!this.projection && a) {
      this.projection = new a(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: m,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && $r(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: f,
        layoutRoot: m,
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ye();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < tm.length; r++) {
      const i = tm[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = gE(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < xE; r++) {
      const i = If[r],
        o = this.props[i];
      (ho(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Kr(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = Hf(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Xe(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Jf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class m1 extends wE {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    o
  ) {
    let a = BT(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), a && (a = i(a))), o)) {
      FT(this, r, a);
      const s = yE(this, r, a, n);
      (n = s.transitionEnd), (r = s.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function PE(e) {
  return window.getComputedStyle(e);
}
class _E extends m1 {
  readValueFromInstance(t, n) {
    if (nr.has(n)) {
      const r = qf(n);
      return (r && r.default) || 0;
    } else {
      const r = PE(t),
        i = (n0(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return i1(t, n);
  }
  build(t, n, r, i) {
    Nf(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return zf(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Xe(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    l0(t, n, r, i);
  }
}
class CE extends m1 {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (nr.has(n)) {
      const r = qf(n);
      return (r && r.default) || 0;
    }
    return (n = u0.has(n) ? n : Uf(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ye();
  }
  scrapeMotionValuesFromProps(t, n) {
    return f0(t, n);
  }
  build(t, n, r, i) {
    Vf(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    c0(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Bf(t.tagName)), super.mount(t);
  }
}
const TE = (e, t) =>
    jf(e)
      ? new CE(t, { enableHardwareAcceleration: !1 })
      : new _E(t, { enableHardwareAcceleration: !0 }),
  EE = { layout: { ProjectionNode: f1, MeasureLayout: o1 } },
  $E = { ...t2, ...PC, ...iE, ...EE },
  ve = O_((e, t) => oC(e, t, $E, TE));
function y1() {
  const e = P.useRef(!1);
  return (
    qa(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function AE() {
  const e = y1(),
    [t, n] = P.useState(0),
    r = P.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [P.useCallback(() => ie.postRender(r), [r]), t];
}
class bE extends P.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function OE({ children: e, isPresent: t }) {
  const n = P.useId(),
    r = P.useRef(null),
    i = P.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    P.useInsertionEffect(() => {
      const { width: o, height: a, top: s, left: l } = i.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    P.createElement(
      bE,
      { isPresent: t, childRef: r, sizeRef: i },
      P.cloneElement(e, { ref: r })
    )
  );
}
const zl = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: a,
}) => {
  const s = d0(kE),
    l = P.useId(),
    u = P.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          s.set(c, !0);
          for (const d of s.values()) if (!d) return;
          r && r();
        },
        register: (c) => (s.set(c, !1), () => s.delete(c)),
      }),
      o ? void 0 : [n]
    );
  return (
    P.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1));
    }, [n]),
    P.useEffect(() => {
      !n && !s.size && r && r();
    }, [n]),
    a === "popLayout" && (e = P.createElement(OE, { isPresent: n }, e)),
    P.createElement(Is.Provider, { value: u }, e)
  );
};
function kE() {
  return new Map();
}
function ME(e) {
  return P.useEffect(() => () => e(), []);
}
const fr = (e) => e.key || "";
function RE(e, t) {
  e.forEach((n) => {
    const r = fr(n);
    t.set(r, n);
  });
}
function LE(e) {
  const t = [];
  return (
    P.Children.forEach(e, (n) => {
      P.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const IE = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: a = "sync",
}) => {
  const s = P.useContext(Df).forceRender || AE()[0],
    l = y1(),
    u = LE(e);
  let c = u;
  const d = P.useRef(new Map()).current,
    f = P.useRef(c),
    m = P.useRef(new Map()).current,
    p = P.useRef(!0);
  if (
    (qa(() => {
      (p.current = !1), RE(u, m), (f.current = c);
    }),
    ME(() => {
      (p.current = !0), m.clear(), d.clear();
    }),
    p.current)
  )
    return P.createElement(
      P.Fragment,
      null,
      c.map((h) =>
        P.createElement(
          zl,
          {
            key: fr(h),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: a,
          },
          h
        )
      )
    );
  c = [...c];
  const g = f.current.map(fr),
    S = u.map(fr),
    y = g.length;
  for (let h = 0; h < y; h++) {
    const v = g[h];
    S.indexOf(v) === -1 && !d.has(v) && d.set(v, void 0);
  }
  return (
    a === "wait" && d.size && (c = []),
    d.forEach((h, v) => {
      if (S.indexOf(v) !== -1) return;
      const x = m.get(v);
      if (!x) return;
      const w = g.indexOf(v);
      let C = h;
      if (!C) {
        const T = () => {
          m.delete(v), d.delete(v);
          const _ = f.current.findIndex((O) => O.key === v);
          if ((f.current.splice(_, 1), !d.size)) {
            if (((f.current = u), l.current === !1)) return;
            s(), r && r();
          }
        };
        (C = P.createElement(
          zl,
          {
            key: fr(x),
            isPresent: !1,
            onExitComplete: T,
            custom: t,
            presenceAffectsLayout: o,
            mode: a,
          },
          x
        )),
          d.set(v, C);
      }
      c.splice(w, 0, C);
    }),
    (c = c.map((h) => {
      const v = h.key;
      return d.has(v)
        ? h
        : P.createElement(
            zl,
            { key: fr(h), isPresent: !0, presenceAffectsLayout: o, mode: a },
            h
          );
    })),
    P.createElement(
      P.Fragment,
      null,
      d.size ? c : c.map((h) => P.cloneElement(h))
    )
  );
};
const nm = "/assets/main-bangla-31a025ec.jpg";
const vc = ({ message: e, transition: t, small: n }) =>
    M.jsxs(ve.div, {
      initial: { translateX: "6000px" },
      animate: { translateX: "0px" },
      exit: { opacity: "0" },
      transition: t,
      className: "marquee fixed",
      style: { fontSize: n ? "1.5rem" : "3rem" },
      children: [
        M.jsxs("ul", {
          className: "marquee__content",
          children: [
            M.jsx("li", { children: e }),
            M.jsx("li", { children: e }),
            M.jsx("li", { children: e }),
            M.jsx("li", { children: e }),
          ],
        }),
        M.jsxs("ul", {
          className: "marquee__content",
          "aria-hidden": "true",
          children: [
            M.jsx("li", { children: e }),
            M.jsx("li", { children: e }),
            M.jsx("li", { children: e }),
            M.jsx("li", { children: e }),
          ],
        }),
      ],
    }),
  DE = (e) => {
    let t = e.getHours(),
      n = e.getMinutes(),
      r = t >= 12 ? "PM" : "AM";
    (t = t % 12), (t = t || 12);
    let i = n.toString().padStart(2, "0");
    return t + ":" + i + " " + r;
  },
  Hl = { duration: 0.65, ease: [0.43, 0.13, 0.23, 0.96] },
  jE = () =>
    M.jsxs("main", {
      className:
        "main-wrapper h-screen w-screen flex flex-col justify-center items-center overflow-hidden",
      children: [
        M.jsxs(ve.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "absolute top-0 mt-12 text-center",
          children: [
            M.jsx("p", { children: '"From The Orion Stars"' }),
            M.jsx("p", { children: "Shruberry ❤️" }),
          ],
        }),
        M.jsx(Er, {
          className:
            "w-50 md:w-72 overflow-hidden rounded-xl md:hidden select-none m-14",
          to: "/judy",
          children: M.jsx(ve.img, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            whileHover: { scale: 1.1 },
            transition: Hl,
            src: nm,
            alt: "Birthday person",
            className: "select-none cursor-pointer rounded-xl",
          }),
        }),
        M.jsx(Er, {
          className: "w-48 md:w-72 overflow-hidden rounded-xl hidden md:block",
          to: "/judy",
          children: M.jsx(ve.img, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            whileHover: { scale: 1.1 },
            transition: Hl,
            src: nm,
            alt: "Birthday person",
            className: "select-none cursor-pointer rounded-xl",
          }),
        }),
        M.jsx(vc, {
          transition: { ...Hl },
          message: "Happy Birthday",
          small: !1,
        }),
        M.jsxs(ve.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "absolute bottom-0 mb-12 text-center",
          children: [
            M.jsx("p", { children: DE(new Date()) }),
            M.jsx("p", { children: "15.07.2023" }),
          ],
        }),
      ],
    });
const rm = "/assets/angry.jpg",
  Pi = { duration: 0.65, ease: [0.43, 0.13, 0.23, 0.96] },
  NE = () =>
    M.jsxs(ve.main, {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      className:
        "main-wrapper h-screen w-screen flex flex-col justify-center items-center overflow-hidden",
      children: [
        M.jsxs(ve.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className:
            "absolute top-0 left-32 mt-12 text-center hidden md:flex flex-col justify-around h-32 ",
          children: [
            M.jsx("p", { className: " text-xl", children: "Shruberry ❤️" }),
            M.jsxs("div", {
              className: "flex flex-col text-left",
              children: [
                M.jsx(Er, {
                  to: "/wishes",
                  className: "hover:underline",
                  children: "My Wishes",
                }),
                M.jsx(Er, {
                  to: "https://github.com/Kunalsonar19/Happy-Birthday-2023-M4",
                  className: "hover:underline ",
                  children: "About This",
                }),
              ],
            }),
          ],
        }),
        M.jsx(ve.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "absolute top-0 mt-12 text-center md:hidden w-full",
          children: M.jsx(vc, {
            transition: { ...Pi },
            message: "Shruberry  ❤️",
            small: !0,
          }),
        }),
        M.jsx(ve.div, {
          className: "w-48 md:w-72 m-10 overflow-hidden rounded-xl md:hidden",
          children: M.jsx(ve.img, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: Pi,
            src: rm,
            alt: "Birthday person",
            className: "select-none rounded-xl w-full",
          }),
        }),
        M.jsxs(ve.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className:
            "absolute bottom-0 mb-12 text-center md:hidden w-full underline flex flex-col",
          children: [
            M.jsx(Er, { to: "/wishes", children: "My Wishes" }),
            M.jsx(Er, { to: "/about", children: "About This" }),
          ],
        }),
        M.jsx(ve.div, {
          initial: { height: "auto", width: "auto" },
          animate: {
            width: "100%",
            height: "40%",
            bottom: 0,
            display: window.screen.width <= 768 ? "none" : "block",
          },
          transition: { delay: 0.2, ...Pi },
          className:
            "absolute overflow-hidden rounded-xl md:block hidden h-full w-full",
          children: M.jsx(ve.img, {
            initial: { scale: 1.1, width: "288px" },
            animate: { scale: 1, width: "100%" },
            exit: { opacity: 0 },
            src: rm,
            alt: "Birthday person",
            className: "relative select-none rounded-xl h-full object-cover",
            style: { objectPosition: "50% 35%" },
            transition: { delay: 0.2, ...Pi },
          }),
        }),
        M.jsx(vc, {
          transition: { ...Pi },
          message: "Happy Birthday",
          small: !1,
        }),
      ],
    });
var ta = {},
  ri = {},
  Ao = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.getColorIndex =
      e.getColorDiffStatus =
      e.hexDiff =
      e.rgbDiff =
      e.deltaE94 =
      e.rgbToCIELab =
      e.xyzToCIELab =
      e.rgbToXyz =
      e.hslToRgb =
      e.rgbToHsl =
      e.rgbToHex =
      e.hexToRgb =
      e.defer =
      e.RSHIFT =
      e.SIGBITS =
      e.DELTAE94_DIFF_STATUS =
        void 0),
    (e.DELTAE94_DIFF_STATUS = {
      NA: 0,
      PERFECT: 1,
      CLOSE: 2,
      GOOD: 10,
      SIMILAR: 50,
    }),
    (e.SIGBITS = 5),
    (e.RSHIFT = 8 - e.SIGBITS);
  function t() {
    var p,
      g,
      S = new Promise(function (y, h) {
        (p = y), (g = h);
      });
    return { resolve: p, reject: g, promise: S };
  }
  e.defer = t;
  function n(p) {
    var g = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(p);
    return g === null
      ? null
      : [g[1], g[2], g[3]].map(function (S) {
          return parseInt(S, 16);
        });
  }
  e.hexToRgb = n;
  function r(p, g, S) {
    return (
      "#" + ((1 << 24) + (p << 16) + (g << 8) + S).toString(16).slice(1, 7)
    );
  }
  e.rgbToHex = r;
  function i(p, g, S) {
    (p /= 255), (g /= 255), (S /= 255);
    var y = Math.max(p, g, S),
      h = Math.min(p, g, S),
      v,
      x,
      w = (y + h) / 2;
    if (y === h) v = x = 0;
    else {
      var C = y - h;
      switch (((x = w > 0.5 ? C / (2 - y - h) : C / (y + h)), y)) {
        case p:
          v = (g - S) / C + (g < S ? 6 : 0);
          break;
        case g:
          v = (S - p) / C + 2;
          break;
        case S:
          v = (p - g) / C + 4;
          break;
      }
      v /= 6;
    }
    return [v, x, w];
  }
  e.rgbToHsl = i;
  function o(p, g, S) {
    var y, h, v;
    function x(T, _, O) {
      return (
        O < 0 && (O += 1),
        O > 1 && (O -= 1),
        O < 1 / 6
          ? T + (_ - T) * 6 * O
          : O < 1 / 2
          ? _
          : O < 2 / 3
          ? T + (_ - T) * (2 / 3 - O) * 6
          : T
      );
    }
    if (g === 0) y = h = v = S;
    else {
      var w = S < 0.5 ? S * (1 + g) : S + g - S * g,
        C = 2 * S - w;
      (y = x(C, w, p + 1 / 3)), (h = x(C, w, p)), (v = x(C, w, p - 1 / 3));
    }
    return [y * 255, h * 255, v * 255];
  }
  e.hslToRgb = o;
  function a(p, g, S) {
    (p /= 255),
      (g /= 255),
      (S /= 255),
      (p = p > 0.04045 ? Math.pow((p + 0.005) / 1.055, 2.4) : p / 12.92),
      (g = g > 0.04045 ? Math.pow((g + 0.005) / 1.055, 2.4) : g / 12.92),
      (S = S > 0.04045 ? Math.pow((S + 0.005) / 1.055, 2.4) : S / 12.92),
      (p *= 100),
      (g *= 100),
      (S *= 100);
    var y = p * 0.4124 + g * 0.3576 + S * 0.1805,
      h = p * 0.2126 + g * 0.7152 + S * 0.0722,
      v = p * 0.0193 + g * 0.1192 + S * 0.9505;
    return [y, h, v];
  }
  e.rgbToXyz = a;
  function s(p, g, S) {
    var y = 95.047,
      h = 100,
      v = 108.883;
    (p /= y),
      (g /= h),
      (S /= v),
      (p = p > 0.008856 ? Math.pow(p, 1 / 3) : 7.787 * p + 16 / 116),
      (g = g > 0.008856 ? Math.pow(g, 1 / 3) : 7.787 * g + 16 / 116),
      (S = S > 0.008856 ? Math.pow(S, 1 / 3) : 7.787 * S + 16 / 116);
    var x = 116 * g - 16,
      w = 500 * (p - g),
      C = 200 * (g - S);
    return [x, w, C];
  }
  e.xyzToCIELab = s;
  function l(p, g, S) {
    var y = a(p, g, S),
      h = y[0],
      v = y[1],
      x = y[2];
    return s(h, v, x);
  }
  e.rgbToCIELab = l;
  function u(p, g) {
    var S = 1,
      y = 1,
      h = 1,
      v = p[0],
      x = p[1],
      w = p[2],
      C = g[0],
      T = g[1],
      _ = g[2],
      O = v - C,
      b = x - T,
      F = w - _,
      B = Math.sqrt(x * x + w * w),
      U = Math.sqrt(T * T + _ * _),
      N = C - v,
      V = U - B,
      j = Math.sqrt(O * O + b * b + F * F),
      ce =
        Math.sqrt(j) > Math.sqrt(Math.abs(N)) + Math.sqrt(Math.abs(V))
          ? Math.sqrt(j * j - N * N - V * V)
          : 0,
      k = 1 + 0.045 * B,
      I = 1 + 0.015 * B;
    return (
      (N /= S), (V /= y * k), (ce /= h * I), Math.sqrt(N * N + V * V + ce * ce)
    );
  }
  e.deltaE94 = u;
  function c(p, g) {
    var S = l.apply(void 0, p),
      y = l.apply(void 0, g);
    return u(S, y);
  }
  e.rgbDiff = c;
  function d(p, g) {
    var S = n(p),
      y = n(g);
    return c(S, y);
  }
  e.hexDiff = d;
  function f(p) {
    return p < e.DELTAE94_DIFF_STATUS.NA
      ? "N/A"
      : p <= e.DELTAE94_DIFF_STATUS.PERFECT
      ? "Perfect"
      : p <= e.DELTAE94_DIFF_STATUS.CLOSE
      ? "Close"
      : p <= e.DELTAE94_DIFF_STATUS.GOOD
      ? "Good"
      : p < e.DELTAE94_DIFF_STATUS.SIMILAR
      ? "Similar"
      : "Wrong";
  }
  e.getColorDiffStatus = f;
  function m(p, g, S) {
    return (p << (2 * e.SIGBITS)) + (g << e.SIGBITS) + S;
  }
  e.getColorIndex = m;
})(Ao);
function FE(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (o[i++] = a);
  }
  return o;
}
var v1 = FE;
function VE(e) {
  return function (t, n, r) {
    for (var i = -1, o = Object(t), a = r(t), s = a.length; s--; ) {
      var l = a[e ? s : ++i];
      if (n(o[l], l, o) === !1) break;
    }
    return t;
  };
}
var BE = VE,
  UE = BE,
  zE = UE(),
  HE = zE;
function WE(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
}
var GE = WE,
  KE = typeof z == "object" && z && z.Object === Object && z,
  g1 = KE,
  QE = g1,
  qE = typeof self == "object" && self && self.Object === Object && self,
  YE = QE || qE || Function("return this")(),
  Ot = YE,
  XE = Ot,
  ZE = XE.Symbol,
  bo = ZE,
  im = bo,
  S1 = Object.prototype,
  JE = S1.hasOwnProperty,
  e$ = S1.toString,
  _i = im ? im.toStringTag : void 0;
function t$(e) {
  var t = JE.call(e, _i),
    n = e[_i];
  try {
    e[_i] = void 0;
    var r = !0;
  } catch {}
  var i = e$.call(e);
  return r && (t ? (e[_i] = n) : delete e[_i]), i;
}
var n$ = t$,
  r$ = Object.prototype,
  i$ = r$.toString;
function o$(e) {
  return i$.call(e);
}
var a$ = o$,
  om = bo,
  s$ = n$,
  l$ = a$,
  u$ = "[object Null]",
  c$ = "[object Undefined]",
  am = om ? om.toStringTag : void 0;
function f$(e) {
  return e == null
    ? e === void 0
      ? c$
      : u$
    : am && am in Object(e)
    ? s$(e)
    : l$(e);
}
var Oo = f$;
function d$(e) {
  return e != null && typeof e == "object";
}
var ir = d$,
  h$ = Oo,
  p$ = ir,
  m$ = "[object Arguments]";
function y$(e) {
  return p$(e) && h$(e) == m$;
}
var v$ = y$,
  sm = v$,
  g$ = ir,
  x1 = Object.prototype,
  S$ = x1.hasOwnProperty,
  x$ = x1.propertyIsEnumerable,
  w$ = sm(
    (function () {
      return arguments;
    })()
  )
    ? sm
    : function (e) {
        return g$(e) && S$.call(e, "callee") && !x$.call(e, "callee");
      },
  w1 = w$,
  P$ = Array.isArray,
  kt = P$,
  is = { exports: {} };
function _$() {
  return !1;
}
var C$ = _$;
is.exports;
(function (e, t) {
  var n = Ot,
    r = C$,
    i = t && !t.nodeType && t,
    o = i && !0 && e && !e.nodeType && e,
    a = o && o.exports === i,
    s = a ? n.Buffer : void 0,
    l = s ? s.isBuffer : void 0,
    u = l || r;
  e.exports = u;
})(is, is.exports);
var ed = is.exports,
  T$ = 9007199254740991,
  E$ = /^(?:0|[1-9]\d*)$/;
function $$(e, t) {
  var n = typeof e;
  return (
    (t = t ?? T$),
    !!t &&
      (n == "number" || (n != "symbol" && E$.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var td = $$,
  A$ = 9007199254740991;
function b$(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= A$;
}
var nd = b$,
  O$ = Oo,
  k$ = nd,
  M$ = ir,
  R$ = "[object Arguments]",
  L$ = "[object Array]",
  I$ = "[object Boolean]",
  D$ = "[object Date]",
  j$ = "[object Error]",
  N$ = "[object Function]",
  F$ = "[object Map]",
  V$ = "[object Number]",
  B$ = "[object Object]",
  U$ = "[object RegExp]",
  z$ = "[object Set]",
  H$ = "[object String]",
  W$ = "[object WeakMap]",
  G$ = "[object ArrayBuffer]",
  K$ = "[object DataView]",
  Q$ = "[object Float32Array]",
  q$ = "[object Float64Array]",
  Y$ = "[object Int8Array]",
  X$ = "[object Int16Array]",
  Z$ = "[object Int32Array]",
  J$ = "[object Uint8Array]",
  eA = "[object Uint8ClampedArray]",
  tA = "[object Uint16Array]",
  nA = "[object Uint32Array]",
  ee = {};
ee[Q$] =
  ee[q$] =
  ee[Y$] =
  ee[X$] =
  ee[Z$] =
  ee[J$] =
  ee[eA] =
  ee[tA] =
  ee[nA] =
    !0;
ee[R$] =
  ee[L$] =
  ee[G$] =
  ee[I$] =
  ee[K$] =
  ee[D$] =
  ee[j$] =
  ee[N$] =
  ee[F$] =
  ee[V$] =
  ee[B$] =
  ee[U$] =
  ee[z$] =
  ee[H$] =
  ee[W$] =
    !1;
function rA(e) {
  return M$(e) && k$(e.length) && !!ee[O$(e)];
}
var iA = rA;
function oA(e) {
  return function (t) {
    return e(t);
  };
}
var rd = oA,
  os = { exports: {} };
os.exports;
(function (e, t) {
  var n = g1,
    r = t && !t.nodeType && t,
    i = r && !0 && e && !e.nodeType && e,
    o = i && i.exports === r,
    a = o && n.process,
    s = (function () {
      try {
        var l = i && i.require && i.require("util").types;
        return l || (a && a.binding && a.binding("util"));
      } catch {}
    })();
  e.exports = s;
})(os, os.exports);
var id = os.exports,
  aA = iA,
  sA = rd,
  lm = id,
  um = lm && lm.isTypedArray,
  lA = um ? sA(um) : aA,
  P1 = lA,
  uA = GE,
  cA = w1,
  fA = kt,
  dA = ed,
  hA = td,
  pA = P1,
  mA = Object.prototype,
  yA = mA.hasOwnProperty;
function vA(e, t) {
  var n = fA(e),
    r = !n && cA(e),
    i = !n && !r && dA(e),
    o = !n && !r && !i && pA(e),
    a = n || r || i || o,
    s = a ? uA(e.length, String) : [],
    l = s.length;
  for (var u in e)
    (t || yA.call(e, u)) &&
      !(
        a &&
        (u == "length" ||
          (i && (u == "offset" || u == "parent")) ||
          (o && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
          hA(u, l))
      ) &&
      s.push(u);
  return s;
}
var _1 = vA,
  gA = Object.prototype;
function SA(e) {
  var t = e && e.constructor,
    n = (typeof t == "function" && t.prototype) || gA;
  return e === n;
}
var od = SA;
function xA(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var C1 = xA,
  wA = C1,
  PA = wA(Object.keys, Object),
  _A = PA,
  CA = od,
  TA = _A,
  EA = Object.prototype,
  $A = EA.hasOwnProperty;
function AA(e) {
  if (!CA(e)) return TA(e);
  var t = [];
  for (var n in Object(e)) $A.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var bA = AA;
function OA(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var or = OA,
  kA = Oo,
  MA = or,
  RA = "[object AsyncFunction]",
  LA = "[object Function]",
  IA = "[object GeneratorFunction]",
  DA = "[object Proxy]";
function jA(e) {
  if (!MA(e)) return !1;
  var t = kA(e);
  return t == LA || t == IA || t == RA || t == DA;
}
var T1 = jA,
  NA = T1,
  FA = nd;
function VA(e) {
  return e != null && FA(e.length) && !NA(e);
}
var zs = VA,
  BA = _1,
  UA = bA,
  zA = zs;
function HA(e) {
  return zA(e) ? BA(e) : UA(e);
}
var ko = HA,
  WA = HE,
  GA = ko;
function KA(e, t) {
  return e && WA(e, t, GA);
}
var QA = KA,
  qA = zs;
function YA(e, t) {
  return function (n, r) {
    if (n == null) return n;
    if (!qA(n)) return e(n, r);
    for (
      var i = n.length, o = t ? i : -1, a = Object(n);
      (t ? o-- : ++o < i) && r(a[o], o, a) !== !1;

    );
    return n;
  };
}
var XA = YA,
  ZA = QA,
  JA = XA,
  eb = JA(ZA),
  tb = eb,
  nb = tb;
function rb(e, t) {
  var n = [];
  return (
    nb(e, function (r, i, o) {
      t(r, i, o) && n.push(r);
    }),
    n
  );
}
var ib = rb;
function ob() {
  (this.__data__ = []), (this.size = 0);
}
var ab = ob;
function sb(e, t) {
  return e === t || (e !== e && t !== t);
}
var Mo = sb,
  lb = Mo;
function ub(e, t) {
  for (var n = e.length; n--; ) if (lb(e[n][0], t)) return n;
  return -1;
}
var Hs = ub,
  cb = Hs,
  fb = Array.prototype,
  db = fb.splice;
function hb(e) {
  var t = this.__data__,
    n = cb(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : db.call(t, n, 1), --this.size, !0;
}
var pb = hb,
  mb = Hs;
function yb(e) {
  var t = this.__data__,
    n = mb(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var vb = yb,
  gb = Hs;
function Sb(e) {
  return gb(this.__data__, e) > -1;
}
var xb = Sb,
  wb = Hs;
function Pb(e, t) {
  var n = this.__data__,
    r = wb(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
var _b = Pb,
  Cb = ab,
  Tb = pb,
  Eb = vb,
  $b = xb,
  Ab = _b;
function ii(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ii.prototype.clear = Cb;
ii.prototype.delete = Tb;
ii.prototype.get = Eb;
ii.prototype.has = $b;
ii.prototype.set = Ab;
var Ws = ii,
  bb = Ws;
function Ob() {
  (this.__data__ = new bb()), (this.size = 0);
}
var kb = Ob;
function Mb(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
var Rb = Mb;
function Lb(e) {
  return this.__data__.get(e);
}
var Ib = Lb;
function Db(e) {
  return this.__data__.has(e);
}
var jb = Db,
  Nb = Ot,
  Fb = Nb["__core-js_shared__"],
  Vb = Fb,
  Wl = Vb,
  cm = (function () {
    var e = /[^.]+$/.exec((Wl && Wl.keys && Wl.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function Bb(e) {
  return !!cm && cm in e;
}
var Ub = Bb,
  zb = Function.prototype,
  Hb = zb.toString;
function Wb(e) {
  if (e != null) {
    try {
      return Hb.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var E1 = Wb,
  Gb = T1,
  Kb = Ub,
  Qb = or,
  qb = E1,
  Yb = /[\\^$.*+?()[\]{}|]/g,
  Xb = /^\[object .+?Constructor\]$/,
  Zb = Function.prototype,
  Jb = Object.prototype,
  eO = Zb.toString,
  tO = Jb.hasOwnProperty,
  nO = RegExp(
    "^" +
      eO
        .call(tO)
        .replace(Yb, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function rO(e) {
  if (!Qb(e) || Kb(e)) return !1;
  var t = Gb(e) ? nO : Xb;
  return t.test(qb(e));
}
var iO = rO;
function oO(e, t) {
  return e == null ? void 0 : e[t];
}
var aO = oO,
  sO = iO,
  lO = aO;
function uO(e, t) {
  var n = lO(e, t);
  return sO(n) ? n : void 0;
}
var ar = uO,
  cO = ar,
  fO = Ot,
  dO = cO(fO, "Map"),
  ad = dO,
  hO = ar,
  pO = hO(Object, "create"),
  Gs = pO,
  fm = Gs;
function mO() {
  (this.__data__ = fm ? fm(null) : {}), (this.size = 0);
}
var yO = mO;
function vO(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var gO = vO,
  SO = Gs,
  xO = "__lodash_hash_undefined__",
  wO = Object.prototype,
  PO = wO.hasOwnProperty;
function _O(e) {
  var t = this.__data__;
  if (SO) {
    var n = t[e];
    return n === xO ? void 0 : n;
  }
  return PO.call(t, e) ? t[e] : void 0;
}
var CO = _O,
  TO = Gs,
  EO = Object.prototype,
  $O = EO.hasOwnProperty;
function AO(e) {
  var t = this.__data__;
  return TO ? t[e] !== void 0 : $O.call(t, e);
}
var bO = AO,
  OO = Gs,
  kO = "__lodash_hash_undefined__";
function MO(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = OO && t === void 0 ? kO : t),
    this
  );
}
var RO = MO,
  LO = yO,
  IO = gO,
  DO = CO,
  jO = bO,
  NO = RO;
function oi(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
oi.prototype.clear = LO;
oi.prototype.delete = IO;
oi.prototype.get = DO;
oi.prototype.has = jO;
oi.prototype.set = NO;
var FO = oi,
  dm = FO,
  VO = Ws,
  BO = ad;
function UO() {
  (this.size = 0),
    (this.__data__ = {
      hash: new dm(),
      map: new (BO || VO)(),
      string: new dm(),
    });
}
var zO = UO;
function HO(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var WO = HO,
  GO = WO;
function KO(e, t) {
  var n = e.__data__;
  return GO(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Ks = KO,
  QO = Ks;
function qO(e) {
  var t = QO(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var YO = qO,
  XO = Ks;
function ZO(e) {
  return XO(this, e).get(e);
}
var JO = ZO,
  ek = Ks;
function tk(e) {
  return ek(this, e).has(e);
}
var nk = tk,
  rk = Ks;
function ik(e, t) {
  var n = rk(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
var ok = ik,
  ak = zO,
  sk = YO,
  lk = JO,
  uk = nk,
  ck = ok;
function ai(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ai.prototype.clear = ak;
ai.prototype.delete = sk;
ai.prototype.get = lk;
ai.prototype.has = uk;
ai.prototype.set = ck;
var sd = ai,
  fk = Ws,
  dk = ad,
  hk = sd,
  pk = 200;
function mk(e, t) {
  var n = this.__data__;
  if (n instanceof fk) {
    var r = n.__data__;
    if (!dk || r.length < pk - 1)
      return r.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new hk(r);
  }
  return n.set(e, t), (this.size = n.size), this;
}
var yk = mk,
  vk = Ws,
  gk = kb,
  Sk = Rb,
  xk = Ib,
  wk = jb,
  Pk = yk;
function si(e) {
  var t = (this.__data__ = new vk(e));
  this.size = t.size;
}
si.prototype.clear = gk;
si.prototype.delete = Sk;
si.prototype.get = xk;
si.prototype.has = wk;
si.prototype.set = Pk;
var ld = si,
  _k = "__lodash_hash_undefined__";
function Ck(e) {
  return this.__data__.set(e, _k), this;
}
var Tk = Ck;
function Ek(e) {
  return this.__data__.has(e);
}
var $k = Ek,
  Ak = sd,
  bk = Tk,
  Ok = $k;
function as(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new Ak(); ++t < n; ) this.add(e[t]);
}
as.prototype.add = as.prototype.push = bk;
as.prototype.has = Ok;
var kk = as;
function Mk(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e)) return !0;
  return !1;
}
var Rk = Mk;
function Lk(e, t) {
  return e.has(t);
}
var Ik = Lk,
  Dk = kk,
  jk = Rk,
  Nk = Ik,
  Fk = 1,
  Vk = 2;
function Bk(e, t, n, r, i, o) {
  var a = n & Fk,
    s = e.length,
    l = t.length;
  if (s != l && !(a && l > s)) return !1;
  var u = o.get(e),
    c = o.get(t);
  if (u && c) return u == t && c == e;
  var d = -1,
    f = !0,
    m = n & Vk ? new Dk() : void 0;
  for (o.set(e, t), o.set(t, e); ++d < s; ) {
    var p = e[d],
      g = t[d];
    if (r) var S = a ? r(g, p, d, t, e, o) : r(p, g, d, e, t, o);
    if (S !== void 0) {
      if (S) continue;
      f = !1;
      break;
    }
    if (m) {
      if (
        !jk(t, function (y, h) {
          if (!Nk(m, h) && (p === y || i(p, y, n, r, o))) return m.push(h);
        })
      ) {
        f = !1;
        break;
      }
    } else if (!(p === g || i(p, g, n, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), f;
}
var $1 = Bk,
  Uk = Ot,
  zk = Uk.Uint8Array,
  A1 = zk;
function Hk(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r, i) {
      n[++t] = [i, r];
    }),
    n
  );
}
var Wk = Hk;
function Gk(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r) {
      n[++t] = r;
    }),
    n
  );
}
var Kk = Gk,
  hm = bo,
  pm = A1,
  Qk = Mo,
  qk = $1,
  Yk = Wk,
  Xk = Kk,
  Zk = 1,
  Jk = 2,
  eM = "[object Boolean]",
  tM = "[object Date]",
  nM = "[object Error]",
  rM = "[object Map]",
  iM = "[object Number]",
  oM = "[object RegExp]",
  aM = "[object Set]",
  sM = "[object String]",
  lM = "[object Symbol]",
  uM = "[object ArrayBuffer]",
  cM = "[object DataView]",
  mm = hm ? hm.prototype : void 0,
  Gl = mm ? mm.valueOf : void 0;
function fM(e, t, n, r, i, o, a) {
  switch (n) {
    case cM:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case uM:
      return !(e.byteLength != t.byteLength || !o(new pm(e), new pm(t)));
    case eM:
    case tM:
    case iM:
      return Qk(+e, +t);
    case nM:
      return e.name == t.name && e.message == t.message;
    case oM:
    case sM:
      return e == t + "";
    case rM:
      var s = Yk;
    case aM:
      var l = r & Zk;
      if ((s || (s = Xk), e.size != t.size && !l)) return !1;
      var u = a.get(e);
      if (u) return u == t;
      (r |= Jk), a.set(e, t);
      var c = qk(s(e), s(t), r, i, o, a);
      return a.delete(e), c;
    case lM:
      if (Gl) return Gl.call(e) == Gl.call(t);
  }
  return !1;
}
var dM = fM;
function hM(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
  return e;
}
var b1 = hM,
  pM = b1,
  mM = kt;
function yM(e, t, n) {
  var r = t(e);
  return mM(e) ? r : pM(r, n(e));
}
var O1 = yM;
function vM() {
  return [];
}
var k1 = vM,
  gM = v1,
  SM = k1,
  xM = Object.prototype,
  wM = xM.propertyIsEnumerable,
  ym = Object.getOwnPropertySymbols,
  PM = ym
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            gM(ym(e), function (t) {
              return wM.call(e, t);
            }));
      }
    : SM,
  ud = PM,
  _M = O1,
  CM = ud,
  TM = ko;
function EM(e) {
  return _M(e, TM, CM);
}
var M1 = EM,
  vm = M1,
  $M = 1,
  AM = Object.prototype,
  bM = AM.hasOwnProperty;
function OM(e, t, n, r, i, o) {
  var a = n & $M,
    s = vm(e),
    l = s.length,
    u = vm(t),
    c = u.length;
  if (l != c && !a) return !1;
  for (var d = l; d--; ) {
    var f = s[d];
    if (!(a ? f in t : bM.call(t, f))) return !1;
  }
  var m = o.get(e),
    p = o.get(t);
  if (m && p) return m == t && p == e;
  var g = !0;
  o.set(e, t), o.set(t, e);
  for (var S = a; ++d < l; ) {
    f = s[d];
    var y = e[f],
      h = t[f];
    if (r) var v = a ? r(h, y, f, t, e, o) : r(y, h, f, e, t, o);
    if (!(v === void 0 ? y === h || i(y, h, n, r, o) : v)) {
      g = !1;
      break;
    }
    S || (S = f == "constructor");
  }
  if (g && !S) {
    var x = e.constructor,
      w = t.constructor;
    x != w &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof x == "function" &&
        x instanceof x &&
        typeof w == "function" &&
        w instanceof w
      ) &&
      (g = !1);
  }
  return o.delete(e), o.delete(t), g;
}
var kM = OM,
  MM = ar,
  RM = Ot,
  LM = MM(RM, "DataView"),
  IM = LM,
  DM = ar,
  jM = Ot,
  NM = DM(jM, "Promise"),
  FM = NM,
  VM = ar,
  BM = Ot,
  UM = VM(BM, "Set"),
  zM = UM,
  HM = ar,
  WM = Ot,
  GM = HM(WM, "WeakMap"),
  KM = GM,
  gc = IM,
  Sc = ad,
  xc = FM,
  wc = zM,
  Pc = KM,
  R1 = Oo,
  li = E1,
  gm = "[object Map]",
  QM = "[object Object]",
  Sm = "[object Promise]",
  xm = "[object Set]",
  wm = "[object WeakMap]",
  Pm = "[object DataView]",
  qM = li(gc),
  YM = li(Sc),
  XM = li(xc),
  ZM = li(wc),
  JM = li(Pc),
  Nn = R1;
((gc && Nn(new gc(new ArrayBuffer(1))) != Pm) ||
  (Sc && Nn(new Sc()) != gm) ||
  (xc && Nn(xc.resolve()) != Sm) ||
  (wc && Nn(new wc()) != xm) ||
  (Pc && Nn(new Pc()) != wm)) &&
  (Nn = function (e) {
    var t = R1(e),
      n = t == QM ? e.constructor : void 0,
      r = n ? li(n) : "";
    if (r)
      switch (r) {
        case qM:
          return Pm;
        case YM:
          return gm;
        case XM:
          return Sm;
        case ZM:
          return xm;
        case JM:
          return wm;
      }
    return t;
  });
var Qs = Nn,
  Kl = ld,
  eR = $1,
  tR = dM,
  nR = kM,
  _m = Qs,
  Cm = kt,
  Tm = ed,
  rR = P1,
  iR = 1,
  Em = "[object Arguments]",
  $m = "[object Array]",
  na = "[object Object]",
  oR = Object.prototype,
  Am = oR.hasOwnProperty;
function aR(e, t, n, r, i, o) {
  var a = Cm(e),
    s = Cm(t),
    l = a ? $m : _m(e),
    u = s ? $m : _m(t);
  (l = l == Em ? na : l), (u = u == Em ? na : u);
  var c = l == na,
    d = u == na,
    f = l == u;
  if (f && Tm(e)) {
    if (!Tm(t)) return !1;
    (a = !0), (c = !1);
  }
  if (f && !c)
    return (
      o || (o = new Kl()),
      a || rR(e) ? eR(e, t, n, r, i, o) : tR(e, t, l, n, r, i, o)
    );
  if (!(n & iR)) {
    var m = c && Am.call(e, "__wrapped__"),
      p = d && Am.call(t, "__wrapped__");
    if (m || p) {
      var g = m ? e.value() : e,
        S = p ? t.value() : t;
      return o || (o = new Kl()), i(g, S, n, r, o);
    }
  }
  return f ? (o || (o = new Kl()), nR(e, t, n, r, i, o)) : !1;
}
var sR = aR,
  lR = sR,
  bm = ir;
function L1(e, t, n, r, i) {
  return e === t
    ? !0
    : e == null || t == null || (!bm(e) && !bm(t))
    ? e !== e && t !== t
    : lR(e, t, n, r, L1, i);
}
var I1 = L1,
  uR = ld,
  cR = I1,
  fR = 1,
  dR = 2;
function hR(e, t, n, r) {
  var i = n.length,
    o = i,
    a = !r;
  if (e == null) return !o;
  for (e = Object(e); i--; ) {
    var s = n[i];
    if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
  }
  for (; ++i < o; ) {
    s = n[i];
    var l = s[0],
      u = e[l],
      c = s[1];
    if (a && s[2]) {
      if (u === void 0 && !(l in e)) return !1;
    } else {
      var d = new uR();
      if (r) var f = r(u, c, l, e, t, d);
      if (!(f === void 0 ? cR(c, u, fR | dR, r, d) : f)) return !1;
    }
  }
  return !0;
}
var pR = hR,
  mR = or;
function yR(e) {
  return e === e && !mR(e);
}
var D1 = yR,
  vR = D1,
  gR = ko;
function SR(e) {
  for (var t = gR(e), n = t.length; n--; ) {
    var r = t[n],
      i = e[r];
    t[n] = [r, i, vR(i)];
  }
  return t;
}
var xR = SR;
function wR(e, t) {
  return function (n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var j1 = wR,
  PR = pR,
  _R = xR,
  CR = j1;
function TR(e) {
  var t = _R(e);
  return t.length == 1 && t[0][2]
    ? CR(t[0][0], t[0][1])
    : function (n) {
        return n === e || PR(n, e, t);
      };
}
var ER = TR,
  $R = Oo,
  AR = ir,
  bR = "[object Symbol]";
function OR(e) {
  return typeof e == "symbol" || (AR(e) && $R(e) == bR);
}
var cd = OR,
  kR = kt,
  MR = cd,
  RR = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  LR = /^\w*$/;
function IR(e, t) {
  if (kR(e)) return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || MR(e)
    ? !0
    : LR.test(e) || !RR.test(e) || (t != null && e in Object(t));
}
var fd = IR,
  N1 = sd,
  DR = "Expected a function";
function dd(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(DR);
  var n = function () {
    var r = arguments,
      i = t ? t.apply(this, r) : r[0],
      o = n.cache;
    if (o.has(i)) return o.get(i);
    var a = e.apply(this, r);
    return (n.cache = o.set(i, a) || o), a;
  };
  return (n.cache = new (dd.Cache || N1)()), n;
}
dd.Cache = N1;
var jR = dd,
  NR = jR,
  FR = 500;
function VR(e) {
  var t = NR(e, function (r) {
      return n.size === FR && n.clear(), r;
    }),
    n = t.cache;
  return t;
}
var BR = VR,
  UR = BR,
  zR =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  HR = /\\(\\)?/g,
  WR = UR(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(zR, function (n, r, i, o) {
        t.push(i ? o.replace(HR, "$1") : r || n);
      }),
      t
    );
  }),
  GR = WR;
function KR(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var QR = KR,
  Om = bo,
  qR = QR,
  YR = kt,
  XR = cd,
  ZR = 1 / 0,
  km = Om ? Om.prototype : void 0,
  Mm = km ? km.toString : void 0;
function F1(e) {
  if (typeof e == "string") return e;
  if (YR(e)) return qR(e, F1) + "";
  if (XR(e)) return Mm ? Mm.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ZR ? "-0" : t;
}
var JR = F1,
  eL = JR;
function tL(e) {
  return e == null ? "" : eL(e);
}
var nL = tL,
  rL = kt,
  iL = fd,
  oL = GR,
  aL = nL;
function sL(e, t) {
  return rL(e) ? e : iL(e, t) ? [e] : oL(aL(e));
}
var V1 = sL,
  lL = cd,
  uL = 1 / 0;
function cL(e) {
  if (typeof e == "string" || lL(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -uL ? "-0" : t;
}
var qs = cL,
  fL = V1,
  dL = qs;
function hL(e, t) {
  t = fL(t, e);
  for (var n = 0, r = t.length; e != null && n < r; ) e = e[dL(t[n++])];
  return n && n == r ? e : void 0;
}
var B1 = hL,
  pL = B1;
function mL(e, t, n) {
  var r = e == null ? void 0 : pL(e, t);
  return r === void 0 ? n : r;
}
var yL = mL;
function vL(e, t) {
  return e != null && t in Object(e);
}
var gL = vL,
  SL = V1,
  xL = w1,
  wL = kt,
  PL = td,
  _L = nd,
  CL = qs;
function TL(e, t, n) {
  t = SL(t, e);
  for (var r = -1, i = t.length, o = !1; ++r < i; ) {
    var a = CL(t[r]);
    if (!(o = e != null && n(e, a))) break;
    e = e[a];
  }
  return o || ++r != i
    ? o
    : ((i = e == null ? 0 : e.length),
      !!i && _L(i) && PL(a, i) && (wL(e) || xL(e)));
}
var EL = TL,
  $L = gL,
  AL = EL;
function bL(e, t) {
  return e != null && AL(e, t, $L);
}
var OL = bL,
  kL = I1,
  ML = yL,
  RL = OL,
  LL = fd,
  IL = D1,
  DL = j1,
  jL = qs,
  NL = 1,
  FL = 2;
function VL(e, t) {
  return LL(e) && IL(t)
    ? DL(jL(e), t)
    : function (n) {
        var r = ML(n, e);
        return r === void 0 && r === t ? RL(n, e) : kL(t, r, NL | FL);
      };
}
var BL = VL;
function UL(e) {
  return e;
}
var hd = UL;
function zL(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
var HL = zL,
  WL = B1;
function GL(e) {
  return function (t) {
    return WL(t, e);
  };
}
var KL = GL,
  QL = HL,
  qL = KL,
  YL = fd,
  XL = qs;
function ZL(e) {
  return YL(e) ? QL(XL(e)) : qL(e);
}
var JL = ZL,
  eI = ER,
  tI = BL,
  nI = hd,
  rI = kt,
  iI = JL;
function oI(e) {
  return typeof e == "function"
    ? e
    : e == null
    ? nI
    : typeof e == "object"
    ? rI(e)
      ? tI(e[0], e[1])
      : eI(e)
    : iI(e);
}
var aI = oI,
  sI = v1,
  lI = ib,
  uI = aI,
  cI = kt;
function fI(e, t) {
  var n = cI(e) ? sI : lI;
  return n(e, uI(t));
}
var dI = fI;
Object.defineProperty(ri, "__esModule", { value: !0 });
ri.Swatch = void 0;
var Rm = Ao,
  hI = dI,
  pI = (function () {
    function e(t, n) {
      (this._rgb = t), (this._population = n);
    }
    return (
      (e.applyFilter = function (t, n) {
        return typeof n == "function"
          ? hI(t, function (r) {
              var i = r.r,
                o = r.g,
                a = r.b;
              return n(i, o, a, 255);
            })
          : t;
      }),
      Object.defineProperty(e.prototype, "r", {
        get: function () {
          return this._rgb[0];
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "g", {
        get: function () {
          return this._rgb[1];
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "b", {
        get: function () {
          return this._rgb[2];
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "rgb", {
        get: function () {
          return this._rgb;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "hsl", {
        get: function () {
          if (!this._hsl) {
            var t = this._rgb,
              n = t[0],
              r = t[1],
              i = t[2];
            this._hsl = Rm.rgbToHsl(n, r, i);
          }
          return this._hsl;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "hex", {
        get: function () {
          if (!this._hex) {
            var t = this._rgb,
              n = t[0],
              r = t[1],
              i = t[2];
            this._hex = Rm.rgbToHex(n, r, i);
          }
          return this._hex;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "population", {
        get: function () {
          return this._population;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.toJSON = function () {
        return { rgb: this.rgb, population: this.population };
      }),
      (e.prototype.getRgb = function () {
        return this._rgb;
      }),
      (e.prototype.getHsl = function () {
        return this.hsl;
      }),
      (e.prototype.getPopulation = function () {
        return this._population;
      }),
      (e.prototype.getHex = function () {
        return this.hex;
      }),
      (e.prototype.getYiq = function () {
        if (!this._yiq) {
          var t = this._rgb;
          this._yiq = (t[0] * 299 + t[1] * 587 + t[2] * 114) / 1e3;
        }
        return this._yiq;
      }),
      Object.defineProperty(e.prototype, "titleTextColor", {
        get: function () {
          return (
            this._titleTextColor ||
              (this._titleTextColor = this.getYiq() < 200 ? "#fff" : "#000"),
            this._titleTextColor
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "bodyTextColor", {
        get: function () {
          return (
            this._bodyTextColor ||
              (this._bodyTextColor = this.getYiq() < 150 ? "#fff" : "#000"),
            this._bodyTextColor
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.getTitleTextColor = function () {
        return this.titleTextColor;
      }),
      (e.prototype.getBodyTextColor = function () {
        return this.bodyTextColor;
      }),
      e
    );
  })();
ri.Swatch = pI;
var ra = {};
function mI(e, t) {
  for (
    var n = -1, r = e == null ? 0 : e.length;
    ++n < r && t(e[n], n, e) !== !1;

  );
  return e;
}
var yI = mI,
  vI = ar,
  gI = (function () {
    try {
      var e = vI(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })(),
  U1 = gI,
  Lm = U1;
function SI(e, t, n) {
  t == "__proto__" && Lm
    ? Lm(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
var z1 = SI,
  xI = z1,
  wI = Mo,
  PI = Object.prototype,
  _I = PI.hasOwnProperty;
function CI(e, t, n) {
  var r = e[t];
  (!(_I.call(e, t) && wI(r, n)) || (n === void 0 && !(t in e))) && xI(e, t, n);
}
var H1 = CI,
  TI = H1,
  EI = z1;
function $I(e, t, n, r) {
  var i = !n;
  n || (n = {});
  for (var o = -1, a = t.length; ++o < a; ) {
    var s = t[o],
      l = r ? r(n[s], e[s], s, n, e) : void 0;
    l === void 0 && (l = e[s]), i ? EI(n, s, l) : TI(n, s, l);
  }
  return n;
}
var Ys = $I,
  AI = Ys,
  bI = ko;
function OI(e, t) {
  return e && AI(t, bI(t), e);
}
var kI = OI;
function MI(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
var RI = MI,
  LI = or,
  II = od,
  DI = RI,
  jI = Object.prototype,
  NI = jI.hasOwnProperty;
function FI(e) {
  if (!LI(e)) return DI(e);
  var t = II(e),
    n = [];
  for (var r in e) (r == "constructor" && (t || !NI.call(e, r))) || n.push(r);
  return n;
}
var VI = FI,
  BI = _1,
  UI = VI,
  zI = zs;
function HI(e) {
  return zI(e) ? BI(e, !0) : UI(e);
}
var Xs = HI,
  WI = Ys,
  GI = Xs;
function KI(e, t) {
  return e && WI(t, GI(t), e);
}
var QI = KI,
  ss = { exports: {} };
ss.exports;
(function (e, t) {
  var n = Ot,
    r = t && !t.nodeType && t,
    i = r && !0 && e && !e.nodeType && e,
    o = i && i.exports === r,
    a = o ? n.Buffer : void 0,
    s = a ? a.allocUnsafe : void 0;
  function l(u, c) {
    if (c) return u.slice();
    var d = u.length,
      f = s ? s(d) : new u.constructor(d);
    return u.copy(f), f;
  }
  e.exports = l;
})(ss, ss.exports);
var qI = ss.exports;
function YI(e, t) {
  var n = -1,
    r = e.length;
  for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
  return t;
}
var XI = YI,
  ZI = Ys,
  JI = ud;
function eD(e, t) {
  return ZI(e, JI(e), t);
}
var tD = eD,
  nD = C1,
  rD = nD(Object.getPrototypeOf, Object),
  W1 = rD,
  iD = b1,
  oD = W1,
  aD = ud,
  sD = k1,
  lD = Object.getOwnPropertySymbols,
  uD = lD
    ? function (e) {
        for (var t = []; e; ) iD(t, aD(e)), (e = oD(e));
        return t;
      }
    : sD,
  G1 = uD,
  cD = Ys,
  fD = G1;
function dD(e, t) {
  return cD(e, fD(e), t);
}
var hD = dD,
  pD = O1,
  mD = G1,
  yD = Xs;
function vD(e) {
  return pD(e, yD, mD);
}
var gD = vD,
  SD = Object.prototype,
  xD = SD.hasOwnProperty;
function wD(e) {
  var t = e.length,
    n = new e.constructor(t);
  return (
    t &&
      typeof e[0] == "string" &&
      xD.call(e, "index") &&
      ((n.index = e.index), (n.input = e.input)),
    n
  );
}
var PD = wD,
  Im = A1;
function _D(e) {
  var t = new e.constructor(e.byteLength);
  return new Im(t).set(new Im(e)), t;
}
var pd = _D,
  CD = pd;
function TD(e, t) {
  var n = t ? CD(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var ED = TD,
  $D = /\w*$/;
function AD(e) {
  var t = new e.constructor(e.source, $D.exec(e));
  return (t.lastIndex = e.lastIndex), t;
}
var bD = AD,
  Dm = bo,
  jm = Dm ? Dm.prototype : void 0,
  Nm = jm ? jm.valueOf : void 0;
function OD(e) {
  return Nm ? Object(Nm.call(e)) : {};
}
var kD = OD,
  MD = pd;
function RD(e, t) {
  var n = t ? MD(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var LD = RD,
  ID = pd,
  DD = ED,
  jD = bD,
  ND = kD,
  FD = LD,
  VD = "[object Boolean]",
  BD = "[object Date]",
  UD = "[object Map]",
  zD = "[object Number]",
  HD = "[object RegExp]",
  WD = "[object Set]",
  GD = "[object String]",
  KD = "[object Symbol]",
  QD = "[object ArrayBuffer]",
  qD = "[object DataView]",
  YD = "[object Float32Array]",
  XD = "[object Float64Array]",
  ZD = "[object Int8Array]",
  JD = "[object Int16Array]",
  e3 = "[object Int32Array]",
  t3 = "[object Uint8Array]",
  n3 = "[object Uint8ClampedArray]",
  r3 = "[object Uint16Array]",
  i3 = "[object Uint32Array]";
function o3(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case QD:
      return ID(e);
    case VD:
    case BD:
      return new r(+e);
    case qD:
      return DD(e, n);
    case YD:
    case XD:
    case ZD:
    case JD:
    case e3:
    case t3:
    case n3:
    case r3:
    case i3:
      return FD(e, n);
    case UD:
      return new r();
    case zD:
    case GD:
      return new r(e);
    case HD:
      return jD(e);
    case WD:
      return new r();
    case KD:
      return ND(e);
  }
}
var a3 = o3,
  s3 = or,
  Fm = Object.create,
  l3 = (function () {
    function e() {}
    return function (t) {
      if (!s3(t)) return {};
      if (Fm) return Fm(t);
      e.prototype = t;
      var n = new e();
      return (e.prototype = void 0), n;
    };
  })(),
  u3 = l3,
  c3 = u3,
  f3 = W1,
  d3 = od;
function h3(e) {
  return typeof e.constructor == "function" && !d3(e) ? c3(f3(e)) : {};
}
var p3 = h3,
  m3 = Qs,
  y3 = ir,
  v3 = "[object Map]";
function g3(e) {
  return y3(e) && m3(e) == v3;
}
var S3 = g3,
  x3 = S3,
  w3 = rd,
  Vm = id,
  Bm = Vm && Vm.isMap,
  P3 = Bm ? w3(Bm) : x3,
  _3 = P3,
  C3 = Qs,
  T3 = ir,
  E3 = "[object Set]";
function $3(e) {
  return T3(e) && C3(e) == E3;
}
var A3 = $3,
  b3 = A3,
  O3 = rd,
  Um = id,
  zm = Um && Um.isSet,
  k3 = zm ? O3(zm) : b3,
  M3 = k3,
  R3 = ld,
  L3 = yI,
  I3 = H1,
  D3 = kI,
  j3 = QI,
  N3 = qI,
  F3 = XI,
  V3 = tD,
  B3 = hD,
  U3 = M1,
  z3 = gD,
  H3 = Qs,
  W3 = PD,
  G3 = a3,
  K3 = p3,
  Q3 = kt,
  q3 = ed,
  Y3 = _3,
  X3 = or,
  Z3 = M3,
  J3 = ko,
  ej = Xs,
  tj = 1,
  nj = 2,
  rj = 4,
  K1 = "[object Arguments]",
  ij = "[object Array]",
  oj = "[object Boolean]",
  aj = "[object Date]",
  sj = "[object Error]",
  Q1 = "[object Function]",
  lj = "[object GeneratorFunction]",
  uj = "[object Map]",
  cj = "[object Number]",
  q1 = "[object Object]",
  fj = "[object RegExp]",
  dj = "[object Set]",
  hj = "[object String]",
  pj = "[object Symbol]",
  mj = "[object WeakMap]",
  yj = "[object ArrayBuffer]",
  vj = "[object DataView]",
  gj = "[object Float32Array]",
  Sj = "[object Float64Array]",
  xj = "[object Int8Array]",
  wj = "[object Int16Array]",
  Pj = "[object Int32Array]",
  _j = "[object Uint8Array]",
  Cj = "[object Uint8ClampedArray]",
  Tj = "[object Uint16Array]",
  Ej = "[object Uint32Array]",
  X = {};
X[K1] =
  X[ij] =
  X[yj] =
  X[vj] =
  X[oj] =
  X[aj] =
  X[gj] =
  X[Sj] =
  X[xj] =
  X[wj] =
  X[Pj] =
  X[uj] =
  X[cj] =
  X[q1] =
  X[fj] =
  X[dj] =
  X[hj] =
  X[pj] =
  X[_j] =
  X[Cj] =
  X[Tj] =
  X[Ej] =
    !0;
X[sj] = X[Q1] = X[mj] = !1;
function wa(e, t, n, r, i, o) {
  var a,
    s = t & tj,
    l = t & nj,
    u = t & rj;
  if ((n && (a = i ? n(e, r, i, o) : n(e)), a !== void 0)) return a;
  if (!X3(e)) return e;
  var c = Q3(e);
  if (c) {
    if (((a = W3(e)), !s)) return F3(e, a);
  } else {
    var d = H3(e),
      f = d == Q1 || d == lj;
    if (q3(e)) return N3(e, s);
    if (d == q1 || d == K1 || (f && !i)) {
      if (((a = l || f ? {} : K3(e)), !s))
        return l ? B3(e, j3(a, e)) : V3(e, D3(a, e));
    } else {
      if (!X[d]) return i ? e : {};
      a = G3(e, d, s);
    }
  }
  o || (o = new R3());
  var m = o.get(e);
  if (m) return m;
  o.set(e, a),
    Z3(e)
      ? e.forEach(function (S) {
          a.add(wa(S, t, n, S, e, o));
        })
      : Y3(e) &&
        e.forEach(function (S, y) {
          a.set(y, wa(S, t, n, y, e, o));
        });
  var p = u ? (l ? z3 : U3) : l ? ej : J3,
    g = c ? void 0 : p(e);
  return (
    L3(g || e, function (S, y) {
      g && ((y = S), (S = e[y])), I3(a, y, wa(S, t, n, y, e, o));
    }),
    a
  );
}
var $j = wa,
  Aj = $j,
  bj = 4;
function Oj(e) {
  return Aj(e, bj);
}
var kj = Oj,
  Hm;
function Mj() {
  if (Hm) return ra;
  Hm = 1;
  var e =
    (z && z.__importDefault) ||
    function (i) {
      return i && i.__esModule ? i : { default: i };
    };
  Object.defineProperty(ra, "__esModule", { value: !0 });
  var t = e(nS()),
    n = kj,
    r = (function () {
      function i(o, a) {
        a === void 0 && (a = {}),
          (this._src = o),
          (this._opts = a),
          (this._opts.filters = n(t.default.DefaultOpts.filters));
      }
      return (
        (i.prototype.maxColorCount = function (o) {
          return (this._opts.colorCount = o), this;
        }),
        (i.prototype.maxDimension = function (o) {
          return (this._opts.maxDimension = o), this;
        }),
        (i.prototype.addFilter = function (o) {
          return this._opts.filters.push(o), this;
        }),
        (i.prototype.removeFilter = function (o) {
          var a = this._opts.filters.indexOf(o);
          return a > 0 && this._opts.filters.splice(a), this;
        }),
        (i.prototype.clearFilters = function () {
          return (this._opts.filters = []), this;
        }),
        (i.prototype.quality = function (o) {
          return (this._opts.quality = o), this;
        }),
        (i.prototype.useImageClass = function (o) {
          return (this._opts.ImageClass = o), this;
        }),
        (i.prototype.useGenerator = function (o) {
          return (this._opts.generator = o), this;
        }),
        (i.prototype.useQuantizer = function (o) {
          return (this._opts.quantizer = o), this;
        }),
        (i.prototype.build = function () {
          return new t.default(this._src, this._opts);
        }),
        (i.prototype.getPalette = function (o) {
          return this.build().getPalette(o);
        }),
        (i.prototype.getSwatches = function (o) {
          return this.build().getPalette(o);
        }),
        i
      );
    })();
  return (ra.default = r), ra;
}
var Y1 = {},
  md = {},
  yd = {};
Object.defineProperty(yd, "__esModule", { value: !0 });
var We = Ao,
  Rj = (function () {
    function e(t, n, r, i, o, a, s) {
      (this._volume = -1),
        (this._count = -1),
        (this.dimension = { r1: t, r2: n, g1: r, g2: i, b1: o, b2: a }),
        (this.hist = s);
    }
    return (
      (e.build = function (t, n) {
        var r = 1 << (3 * We.SIGBITS),
          i = new Uint32Array(r),
          o,
          a,
          s,
          l,
          u,
          c,
          d,
          f,
          m,
          p;
        (o = s = u = 0), (a = l = c = Number.MAX_VALUE);
        for (var g = t.length / 4, S = 0; S < g; ) {
          var y = S * 4;
          if (
            (S++,
            (d = t[y + 0]),
            (f = t[y + 1]),
            (m = t[y + 2]),
            (p = t[y + 3]),
            p !== 0)
          ) {
            (d = d >> We.RSHIFT), (f = f >> We.RSHIFT), (m = m >> We.RSHIFT);
            var h = We.getColorIndex(d, f, m);
            (i[h] += 1),
              d > o && (o = d),
              d < a && (a = d),
              f > s && (s = f),
              f < l && (l = f),
              m > u && (u = m),
              m < c && (c = m);
          }
        }
        return new e(a, o, l, s, c, u, i);
      }),
      (e.prototype.invalidate = function () {
        (this._volume = this._count = -1), (this._avg = null);
      }),
      (e.prototype.volume = function () {
        if (this._volume < 0) {
          var t = this.dimension,
            n = t.r1,
            r = t.r2,
            i = t.g1,
            o = t.g2,
            a = t.b1,
            s = t.b2;
          this._volume = (r - n + 1) * (o - i + 1) * (s - a + 1);
        }
        return this._volume;
      }),
      (e.prototype.count = function () {
        if (this._count < 0) {
          for (
            var t = this.hist,
              n = this.dimension,
              r = n.r1,
              i = n.r2,
              o = n.g1,
              a = n.g2,
              s = n.b1,
              l = n.b2,
              u = 0,
              c = r;
            c <= i;
            c++
          )
            for (var d = o; d <= a; d++)
              for (var f = s; f <= l; f++) {
                var m = We.getColorIndex(c, d, f);
                u += t[m];
              }
          this._count = u;
        }
        return this._count;
      }),
      (e.prototype.clone = function () {
        var t = this.hist,
          n = this.dimension,
          r = n.r1,
          i = n.r2,
          o = n.g1,
          a = n.g2,
          s = n.b1,
          l = n.b2;
        return new e(r, i, o, a, s, l, t);
      }),
      (e.prototype.avg = function () {
        if (!this._avg) {
          var t = this.hist,
            n = this.dimension,
            r = n.r1,
            i = n.r2,
            o = n.g1,
            a = n.g2,
            s = n.b1,
            l = n.b2,
            u = 0,
            c = 1 << (8 - We.SIGBITS),
            d = void 0,
            f = void 0,
            m = void 0;
          d = f = m = 0;
          for (var p = r; p <= i; p++)
            for (var g = o; g <= a; g++)
              for (var S = s; S <= l; S++) {
                var y = We.getColorIndex(p, g, S),
                  h = t[y];
                (u += h),
                  (d += h * (p + 0.5) * c),
                  (f += h * (g + 0.5) * c),
                  (m += h * (S + 0.5) * c);
              }
          u
            ? (this._avg = [~~(d / u), ~~(f / u), ~~(m / u)])
            : (this._avg = [
                ~~((c * (r + i + 1)) / 2),
                ~~((c * (o + a + 1)) / 2),
                ~~((c * (s + l + 1)) / 2),
              ]);
        }
        return this._avg;
      }),
      (e.prototype.contains = function (t) {
        var n = t[0],
          r = t[1],
          i = t[2],
          o = this.dimension,
          a = o.r1,
          s = o.r2,
          l = o.g1,
          u = o.g2,
          c = o.b1,
          d = o.b2;
        return (
          (n >>= We.RSHIFT),
          (r >>= We.RSHIFT),
          (i >>= We.RSHIFT),
          n >= a && n <= s && r >= l && r <= u && i >= c && i <= d
        );
      }),
      (e.prototype.split = function () {
        var t = this.hist,
          n = this.dimension,
          r = n.r1,
          i = n.r2,
          o = n.g1,
          a = n.g2,
          s = n.b1,
          l = n.b2,
          u = this.count();
        if (!u) return [];
        if (u === 1) return [this.clone()];
        var c = i - r + 1,
          d = a - o + 1,
          f = l - s + 1,
          m = Math.max(c, d, f),
          p = null,
          g,
          S;
        g = S = 0;
        var y = null;
        if (m === c) {
          (y = "r"), (p = new Uint32Array(i + 1));
          for (var h = r; h <= i; h++) {
            g = 0;
            for (var v = o; v <= a; v++)
              for (var x = s; x <= l; x++) {
                var w = We.getColorIndex(h, v, x);
                g += t[w];
              }
            (S += g), (p[h] = S);
          }
        } else if (m === d) {
          (y = "g"), (p = new Uint32Array(a + 1));
          for (var v = o; v <= a; v++) {
            g = 0;
            for (var h = r; h <= i; h++)
              for (var x = s; x <= l; x++) {
                var w = We.getColorIndex(h, v, x);
                g += t[w];
              }
            (S += g), (p[v] = S);
          }
        } else {
          (y = "b"), (p = new Uint32Array(l + 1));
          for (var x = s; x <= l; x++) {
            g = 0;
            for (var h = r; h <= i; h++)
              for (var v = o; v <= a; v++) {
                var w = We.getColorIndex(h, v, x);
                g += t[w];
              }
            (S += g), (p[x] = S);
          }
        }
        for (
          var C = -1, T = new Uint32Array(p.length), _ = 0;
          _ < p.length;
          _++
        ) {
          var O = p[_];
          C < 0 && O > S / 2 && (C = _), (T[_] = S - O);
        }
        var b = this;
        function F(B) {
          var U = B + "1",
            N = B + "2",
            V = b.dimension[U],
            j = b.dimension[N],
            ce = b.clone(),
            k = b.clone(),
            I = C - V,
            E = j - C;
          for (
            I <= E
              ? ((j = Math.min(j - 1, ~~(C + E / 2))), (j = Math.max(0, j)))
              : ((j = Math.max(V, ~~(C - 1 - I / 2))),
                (j = Math.min(b.dimension[N], j)));
            !p[j];

          )
            j++;
          for (var A = T[j]; !A && p[j - 1]; ) A = T[--j];
          return (ce.dimension[N] = j), (k.dimension[U] = j + 1), [ce, k];
        }
        return F(y);
      }),
      e
    );
  })();
yd.default = Rj;
var vd = {};
Object.defineProperty(vd, "__esModule", { value: !0 });
var Lj = (function () {
  function e(t) {
    (this._comparator = t), (this.contents = []), (this._sorted = !1);
  }
  return (
    (e.prototype._sort = function () {
      this._sorted ||
        (this.contents.sort(this._comparator), (this._sorted = !0));
    }),
    (e.prototype.push = function (t) {
      this.contents.push(t), (this._sorted = !1);
    }),
    (e.prototype.peek = function (t) {
      return (
        this._sort(),
        (t = typeof t == "number" ? t : this.contents.length - 1),
        this.contents[t]
      );
    }),
    (e.prototype.pop = function () {
      return this._sort(), this.contents.pop();
    }),
    (e.prototype.size = function () {
      return this.contents.length;
    }),
    (e.prototype.map = function (t) {
      return this._sort(), this.contents.map(t);
    }),
    e
  );
})();
vd.default = Lj;
var X1 =
  (z && z.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(md, "__esModule", { value: !0 });
var Ij = ri,
  Dj = X1(yd),
  Wm = X1(vd),
  jj = 0.75;
function Gm(e, t) {
  for (var n = e.size(); e.size() < t; ) {
    var r = e.pop();
    if (r && r.count() > 0) {
      var i = r.split(),
        o = i[0],
        a = i[1];
      if ((e.push(o), a && a.count() > 0 && e.push(a), e.size() === n)) break;
      n = e.size();
    } else break;
  }
}
var Nj = function (e, t) {
  if (e.length === 0 || t.colorCount < 2 || t.colorCount > 256)
    throw new Error("Wrong MMCQ parameters");
  var n = Dj.default.build(e),
    r = n.hist;
  Object.keys(r).length;
  var i = new Wm.default(function (a, s) {
    return a.count() - s.count();
  });
  i.push(n), Gm(i, jj * t.colorCount);
  var o = new Wm.default(function (a, s) {
    return a.count() * a.volume() - s.count() * s.volume();
  });
  return (o.contents = i.contents), Gm(o, t.colorCount - o.size()), Fj(o);
};
function Fj(e) {
  for (var t = []; e.size(); ) {
    var n = e.pop(),
      r = n.avg();
    r[0], r[1], r[2], t.push(new Ij.Swatch(r, n.count()));
  }
  return t;
}
md.default = Nj;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.WebWorker = void 0);
  var t = md;
  Object.defineProperty(e, "MMCQ", {
    enumerable: !0,
    get: function () {
      return t.default;
    },
  }),
    (e.WebWorker = null);
})(Y1);
var Z1 = {},
  gd = {};
function Vj(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var Bj = Vj,
  Uj = Bj,
  Km = Math.max;
function zj(e, t, n) {
  return (
    (t = Km(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var r = arguments, i = -1, o = Km(r.length - t, 0), a = Array(o);
        ++i < o;

      )
        a[i] = r[t + i];
      i = -1;
      for (var s = Array(t + 1); ++i < t; ) s[i] = r[i];
      return (s[t] = n(a)), Uj(e, this, s);
    }
  );
}
var Hj = zj;
function Wj(e) {
  return function () {
    return e;
  };
}
var Gj = Wj,
  Kj = Gj,
  Qm = U1,
  Qj = hd,
  qj = Qm
    ? function (e, t) {
        return Qm(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Kj(t),
          writable: !0,
        });
      }
    : Qj,
  Yj = qj,
  Xj = 800,
  Zj = 16,
  Jj = Date.now;
function eN(e) {
  var t = 0,
    n = 0;
  return function () {
    var r = Jj(),
      i = Zj - (r - n);
    if (((n = r), i > 0)) {
      if (++t >= Xj) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var tN = eN,
  nN = Yj,
  rN = tN,
  iN = rN(nN),
  oN = iN,
  aN = hd,
  sN = Hj,
  lN = oN;
function uN(e, t) {
  return lN(sN(e, t, aN), e + "");
}
var cN = uN,
  fN = Mo,
  dN = zs,
  hN = td,
  pN = or;
function mN(e, t, n) {
  if (!pN(n)) return !1;
  var r = typeof t;
  return (r == "number" ? dN(n) && hN(t, n.length) : r == "string" && t in n)
    ? fN(n[t], e)
    : !1;
}
var yN = mN,
  vN = cN,
  gN = Mo,
  SN = yN,
  xN = Xs,
  J1 = Object.prototype,
  wN = J1.hasOwnProperty,
  PN = vN(function (e, t) {
    e = Object(e);
    var n = -1,
      r = t.length,
      i = r > 2 ? t[2] : void 0;
    for (i && SN(t[0], t[1], i) && (r = 1); ++n < r; )
      for (var o = t[n], a = xN(o), s = -1, l = a.length; ++s < l; ) {
        var u = a[s],
          c = e[u];
        (c === void 0 || (gN(c, J1[u]) && !wN.call(e, u))) && (e[u] = o[u]);
      }
    return e;
  }),
  eS = PN;
Object.defineProperty(gd, "__esModule", { value: !0 });
var Mt = ri,
  Rt = Ao,
  _N = eS,
  CN = {
    targetDarkLuma: 0.26,
    maxDarkLuma: 0.45,
    minLightLuma: 0.55,
    targetLightLuma: 0.74,
    minNormalLuma: 0.3,
    targetNormalLuma: 0.5,
    maxNormalLuma: 0.7,
    targetMutesSaturation: 0.3,
    maxMutesSaturation: 0.4,
    targetVibrantSaturation: 1,
    minVibrantSaturation: 0.35,
    weightSaturation: 3,
    weightLuma: 6.5,
    weightPopulation: 0.5,
  };
function TN(e) {
  var t = 0;
  return (
    e.forEach(function (n) {
      t = Math.max(t, n.getPopulation());
    }),
    t
  );
}
function EN(e, t) {
  return (
    e.Vibrant === t ||
    e.DarkVibrant === t ||
    e.LightVibrant === t ||
    e.Muted === t ||
    e.DarkMuted === t ||
    e.LightMuted === t
  );
}
function $N(e, t, n, r, i, o, a) {
  function s() {
    for (var u = [], c = 0; c < arguments.length; c++) u[c] = arguments[c];
    for (var d = 0, f = 0, m = 0; m < u.length; m += 2) {
      var p = u[m],
        g = u[m + 1];
      (d += p * g), (f += g);
    }
    return d / f;
  }
  function l(u, c) {
    return 1 - Math.abs(u - c);
  }
  return s(
    l(e, t),
    a.weightSaturation,
    l(n, r),
    a.weightLuma,
    i / o,
    a.weightPopulation
  );
}
function ur(e, t, n, r, i, o, a, s, l, u) {
  var c = null,
    d = 0;
  return (
    t.forEach(function (f) {
      var m = f.getHsl(),
        p = m[1],
        g = m[2];
      if (p >= s && p <= l && g >= i && g <= o && !EN(e, f)) {
        var S = $N(p, a, g, r, f.getPopulation(), n, u);
        (c === null || S > d) && ((c = f), (d = S));
      }
    }),
    c
  );
}
function AN(e, t, n) {
  var r = {};
  return (
    (r.Vibrant = ur(
      r,
      e,
      t,
      n.targetNormalLuma,
      n.minNormalLuma,
      n.maxNormalLuma,
      n.targetVibrantSaturation,
      n.minVibrantSaturation,
      1,
      n
    )),
    (r.LightVibrant = ur(
      r,
      e,
      t,
      n.targetLightLuma,
      n.minLightLuma,
      1,
      n.targetVibrantSaturation,
      n.minVibrantSaturation,
      1,
      n
    )),
    (r.DarkVibrant = ur(
      r,
      e,
      t,
      n.targetDarkLuma,
      0,
      n.maxDarkLuma,
      n.targetVibrantSaturation,
      n.minVibrantSaturation,
      1,
      n
    )),
    (r.Muted = ur(
      r,
      e,
      t,
      n.targetNormalLuma,
      n.minNormalLuma,
      n.maxNormalLuma,
      n.targetMutesSaturation,
      0,
      n.maxMutesSaturation,
      n
    )),
    (r.LightMuted = ur(
      r,
      e,
      t,
      n.targetLightLuma,
      n.minLightLuma,
      1,
      n.targetMutesSaturation,
      0,
      n.maxMutesSaturation,
      n
    )),
    (r.DarkMuted = ur(
      r,
      e,
      t,
      n.targetDarkLuma,
      0,
      n.maxDarkLuma,
      n.targetMutesSaturation,
      0,
      n.maxMutesSaturation,
      n
    )),
    r
  );
}
function bN(e, t, n) {
  if (e.Vibrant === null && e.DarkVibrant === null && e.LightVibrant === null) {
    if (e.DarkVibrant === null && e.DarkMuted !== null) {
      var r = e.DarkMuted.getHsl(),
        i = r[0],
        o = r[1],
        a = r[2];
      (a = n.targetDarkLuma),
        (e.DarkVibrant = new Mt.Swatch(Rt.hslToRgb(i, o, a), 0));
    }
    if (e.LightVibrant === null && e.LightMuted !== null) {
      var s = e.LightMuted.getHsl(),
        i = s[0],
        o = s[1],
        a = s[2];
      (a = n.targetDarkLuma),
        (e.DarkVibrant = new Mt.Swatch(Rt.hslToRgb(i, o, a), 0));
    }
  }
  if (e.Vibrant === null && e.DarkVibrant !== null) {
    var l = e.DarkVibrant.getHsl(),
      i = l[0],
      o = l[1],
      a = l[2];
    (a = n.targetNormalLuma),
      (e.Vibrant = new Mt.Swatch(Rt.hslToRgb(i, o, a), 0));
  } else if (e.Vibrant === null && e.LightVibrant !== null) {
    var u = e.LightVibrant.getHsl(),
      i = u[0],
      o = u[1],
      a = u[2];
    (a = n.targetNormalLuma),
      (e.Vibrant = new Mt.Swatch(Rt.hslToRgb(i, o, a), 0));
  }
  if (e.DarkVibrant === null && e.Vibrant !== null) {
    var c = e.Vibrant.getHsl(),
      i = c[0],
      o = c[1],
      a = c[2];
    (a = n.targetDarkLuma),
      (e.DarkVibrant = new Mt.Swatch(Rt.hslToRgb(i, o, a), 0));
  }
  if (e.LightVibrant === null && e.Vibrant !== null) {
    var d = e.Vibrant.getHsl(),
      i = d[0],
      o = d[1],
      a = d[2];
    (a = n.targetLightLuma),
      (e.LightVibrant = new Mt.Swatch(Rt.hslToRgb(i, o, a), 0));
  }
  if (e.Muted === null && e.Vibrant !== null) {
    var f = e.Vibrant.getHsl(),
      i = f[0],
      o = f[1],
      a = f[2];
    (a = n.targetMutesSaturation),
      (e.Muted = new Mt.Swatch(Rt.hslToRgb(i, o, a), 0));
  }
  if (e.DarkMuted === null && e.DarkVibrant !== null) {
    var m = e.DarkVibrant.getHsl(),
      i = m[0],
      o = m[1],
      a = m[2];
    (a = n.targetMutesSaturation),
      (e.DarkMuted = new Mt.Swatch(Rt.hslToRgb(i, o, a), 0));
  }
  if (e.LightMuted === null && e.LightVibrant !== null) {
    var p = e.LightVibrant.getHsl(),
      i = p[0],
      o = p[1],
      a = p[2];
    (a = n.targetMutesSaturation),
      (e.LightMuted = new Mt.Swatch(Rt.hslToRgb(i, o, a), 0));
  }
}
var ON = function (e, t) {
  t = _N({}, t, CN);
  var n = TN(e),
    r = AN(e, n, t);
  return bN(r, n, t), r;
};
gd.default = ON;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = gd;
  Object.defineProperty(e, "Default", {
    enumerable: !0,
    get: function () {
      return t.default;
    },
  });
})(Z1);
var tS = {},
  Sd = {};
Object.defineProperty(Sd, "__esModule", { value: !0 });
function kN(e, t, n, r) {
  return r >= 125 && !(e > 250 && t > 250 && n > 250);
}
Sd.default = kN;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.combineFilters = void 0);
  var t = Sd;
  Object.defineProperty(e, "Default", {
    enumerable: !0,
    get: function () {
      return t.default;
    },
  });
  function n(r) {
    return !Array.isArray(r) || r.length === 0
      ? null
      : function (i, o, a, s) {
          if (s === 0) return !1;
          for (var l = 0; l < r.length; l++) if (!r[l](i, o, a, s)) return !1;
          return !0;
        };
  }
  e.combineFilters = n;
})(tS);
var qm;
function nS() {
  if (qm) return ta;
  qm = 1;
  var e =
      (z && z.__createBinding) ||
      (Object.create
        ? function (f, m, p, g) {
            g === void 0 && (g = p),
              Object.defineProperty(f, g, {
                enumerable: !0,
                get: function () {
                  return m[p];
                },
              });
          }
        : function (f, m, p, g) {
            g === void 0 && (g = p), (f[g] = m[p]);
          }),
    t =
      (z && z.__setModuleDefault) ||
      (Object.create
        ? function (f, m) {
            Object.defineProperty(f, "default", { enumerable: !0, value: m });
          }
        : function (f, m) {
            f.default = m;
          }),
    n =
      (z && z.__importStar) ||
      function (f) {
        if (f && f.__esModule) return f;
        var m = {};
        if (f != null)
          for (var p in f)
            p !== "default" && Object.hasOwnProperty.call(f, p) && e(m, f, p);
        return t(m, f), m;
      },
    r =
      (z && z.__importDefault) ||
      function (f) {
        return f && f.__esModule ? f : { default: f };
      };
  Object.defineProperty(ta, "__esModule", { value: !0 });
  var i = ri,
    o = r(Mj()),
    a = n(Ao),
    s = n(Y1),
    l = n(Z1),
    u = n(tS),
    c = eS,
    d = (function () {
      function f(m, p) {
        (this._src = m),
          (this.opts = c({}, p, f.DefaultOpts)),
          (this.opts.combinedFilter = u.combineFilters(this.opts.filters));
      }
      return (
        (f.from = function (m) {
          return new o.default(m);
        }),
        (f.prototype._process = function (m, p) {
          var g = p.quantizer,
            S = p.generator;
          return (
            m.scaleDown(p),
            m
              .applyFilter(p.combinedFilter)
              .then(function (y) {
                return g(y.data, p);
              })
              .then(function (y) {
                return i.Swatch.applyFilter(y, p.combinedFilter);
              })
              .then(function (y) {
                return Promise.resolve(S(y));
              })
          );
        }),
        (f.prototype.palette = function () {
          return this.swatches();
        }),
        (f.prototype.swatches = function () {
          return this._palette;
        }),
        (f.prototype.getPalette = function (m) {
          var p = this,
            g = new this.opts.ImageClass(),
            S = g
              .load(this._src)
              .then(function (y) {
                return p._process(y, p.opts);
              })
              .then(
                function (y) {
                  return (p._palette = y), g.remove(), y;
                },
                function (y) {
                  throw (g.remove(), y);
                }
              );
          return (
            m &&
              S.then(
                function (y) {
                  return m(null, y);
                },
                function (y) {
                  return m(y);
                }
              ),
            S
          );
        }),
        (f.Builder = o.default),
        (f.Quantizer = s),
        (f.Generator = l),
        (f.Filter = u),
        (f.Util = a),
        (f.Swatch = i.Swatch),
        (f.DefaultOpts = {
          colorCount: 64,
          quality: 5,
          generator: l.Default,
          ImageClass: null,
          quantizer: s.MMCQ,
          filters: [u.Default],
        }),
        f
      );
    })();
  return (ta.default = d), ta;
}
var xd = {},
  Zs = {};
Object.defineProperty(Zs, "__esModule", { value: !0 });
Zs.ImageBase = void 0;
var MN = (function () {
  function e() {}
  return (
    (e.prototype.scaleDown = function (t) {
      var n = this.getWidth(),
        r = this.getHeight(),
        i = 1;
      if (t.maxDimension > 0) {
        var o = Math.max(n, r);
        o > t.maxDimension && (i = t.maxDimension / o);
      } else i = 1 / t.quality;
      i < 1 && this.resize(n * i, r * i, i);
    }),
    (e.prototype.applyFilter = function (t) {
      var n = this.getImageData();
      if (typeof t == "function")
        for (
          var r = n.data,
            i = r.length / 4,
            o = void 0,
            a = void 0,
            s = void 0,
            l = void 0,
            u = void 0,
            c = 0;
          c < i;
          c++
        )
          (o = c * 4),
            (a = r[o + 0]),
            (s = r[o + 1]),
            (l = r[o + 2]),
            (u = r[o + 3]),
            t(a, s, l, u) || (r[o + 3] = 0);
      return Promise.resolve(n);
    }),
    e
  );
})();
Zs.ImageBase = MN;
var ui = {},
  ls = { exports: {} };
/*! https://mths.be/punycode v1.4.1 by @mathias */ ls.exports;
(function (e, t) {
  (function (n) {
    var r = t && !t.nodeType && t,
      i = e && !e.nodeType && e,
      o = typeof z == "object" && z;
    (o.global === o || o.window === o || o.self === o) && (n = o);
    var a,
      s = 2147483647,
      l = 36,
      u = 1,
      c = 26,
      d = 38,
      f = 700,
      m = 72,
      p = 128,
      g = "-",
      S = /^xn--/,
      y = /[^\x20-\x7E]/,
      h = /[\x2E\u3002\uFF0E\uFF61]/g,
      v = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
      },
      x = l - u,
      w = Math.floor,
      C = String.fromCharCode,
      T;
    function _(E) {
      throw new RangeError(v[E]);
    }
    function O(E, A) {
      for (var L = E.length, Q = []; L--; ) Q[L] = A(E[L]);
      return Q;
    }
    function b(E, A) {
      var L = E.split("@"),
        Q = "";
      L.length > 1 && ((Q = L[0] + "@"), (E = L[1])), (E = E.replace(h, "."));
      var K = E.split("."),
        fe = O(K, A).join(".");
      return Q + fe;
    }
    function F(E) {
      for (var A = [], L = 0, Q = E.length, K, fe; L < Q; )
        (K = E.charCodeAt(L++)),
          K >= 55296 && K <= 56319 && L < Q
            ? ((fe = E.charCodeAt(L++)),
              (fe & 64512) == 56320
                ? A.push(((K & 1023) << 10) + (fe & 1023) + 65536)
                : (A.push(K), L--))
            : A.push(K);
      return A;
    }
    function B(E) {
      return O(E, function (A) {
        var L = "";
        return (
          A > 65535 &&
            ((A -= 65536),
            (L += C(((A >>> 10) & 1023) | 55296)),
            (A = 56320 | (A & 1023))),
          (L += C(A)),
          L
        );
      }).join("");
    }
    function U(E) {
      return E - 48 < 10
        ? E - 22
        : E - 65 < 26
        ? E - 65
        : E - 97 < 26
        ? E - 97
        : l;
    }
    function N(E, A) {
      return E + 22 + 75 * (E < 26) - ((A != 0) << 5);
    }
    function V(E, A, L) {
      var Q = 0;
      for (E = L ? w(E / f) : E >> 1, E += w(E / A); E > (x * c) >> 1; Q += l)
        E = w(E / x);
      return w(Q + ((x + 1) * E) / (E + d));
    }
    function j(E) {
      var A = [],
        L = E.length,
        Q,
        K = 0,
        fe = p,
        q = m,
        he,
        Ze,
        Ue,
        ze,
        ne,
        Ie,
        He,
        Xt,
        Mn;
      for (he = E.lastIndexOf(g), he < 0 && (he = 0), Ze = 0; Ze < he; ++Ze)
        E.charCodeAt(Ze) >= 128 && _("not-basic"), A.push(E.charCodeAt(Ze));
      for (Ue = he > 0 ? he + 1 : 0; Ue < L; ) {
        for (
          ze = K, ne = 1, Ie = l;
          Ue >= L && _("invalid-input"),
            (He = U(E.charCodeAt(Ue++))),
            (He >= l || He > w((s - K) / ne)) && _("overflow"),
            (K += He * ne),
            (Xt = Ie <= q ? u : Ie >= q + c ? c : Ie - q),
            !(He < Xt);
          Ie += l
        )
          (Mn = l - Xt), ne > w(s / Mn) && _("overflow"), (ne *= Mn);
        (Q = A.length + 1),
          (q = V(K - ze, Q, ze == 0)),
          w(K / Q) > s - fe && _("overflow"),
          (fe += w(K / Q)),
          (K %= Q),
          A.splice(K++, 0, fe);
      }
      return B(A);
    }
    function ce(E) {
      var A,
        L,
        Q,
        K,
        fe,
        q,
        he,
        Ze,
        Ue,
        ze,
        ne,
        Ie = [],
        He,
        Xt,
        Mn,
        rl;
      for (E = F(E), He = E.length, A = p, L = 0, fe = m, q = 0; q < He; ++q)
        (ne = E[q]), ne < 128 && Ie.push(C(ne));
      for (Q = K = Ie.length, K && Ie.push(g); Q < He; ) {
        for (he = s, q = 0; q < He; ++q)
          (ne = E[q]), ne >= A && ne < he && (he = ne);
        for (
          Xt = Q + 1,
            he - A > w((s - L) / Xt) && _("overflow"),
            L += (he - A) * Xt,
            A = he,
            q = 0;
          q < He;
          ++q
        )
          if (((ne = E[q]), ne < A && ++L > s && _("overflow"), ne == A)) {
            for (
              Ze = L, Ue = l;
              (ze = Ue <= fe ? u : Ue >= fe + c ? c : Ue - fe), !(Ze < ze);
              Ue += l
            )
              (rl = Ze - ze),
                (Mn = l - ze),
                Ie.push(C(N(ze + (rl % Mn), 0))),
                (Ze = w(rl / Mn));
            Ie.push(C(N(Ze, 0))), (fe = V(L, Xt, Q == K)), (L = 0), ++Q;
          }
        ++L, ++A;
      }
      return Ie.join("");
    }
    function k(E) {
      return b(E, function (A) {
        return S.test(A) ? j(A.slice(4).toLowerCase()) : A;
      });
    }
    function I(E) {
      return b(E, function (A) {
        return y.test(A) ? "xn--" + ce(A) : A;
      });
    }
    if (
      ((a = {
        version: "1.4.1",
        ucs2: { decode: F, encode: B },
        decode: j,
        encode: ce,
        toASCII: I,
        toUnicode: k,
      }),
      r && i)
    )
      if (e.exports == r) i.exports = a;
      else for (T in a) a.hasOwnProperty(T) && (r[T] = a[T]);
    else n.punycode = a;
  })(z);
})(ls, ls.exports);
var RN = ls.exports,
  LN = function () {
    if (
      typeof Symbol != "function" ||
      typeof Object.getOwnPropertySymbols != "function"
    )
      return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var t = {},
      n = Symbol("test"),
      r = Object(n);
    if (
      typeof n == "string" ||
      Object.prototype.toString.call(n) !== "[object Symbol]" ||
      Object.prototype.toString.call(r) !== "[object Symbol]"
    )
      return !1;
    var i = 42;
    t[n] = i;
    for (n in t) return !1;
    if (
      (typeof Object.keys == "function" && Object.keys(t).length !== 0) ||
      (typeof Object.getOwnPropertyNames == "function" &&
        Object.getOwnPropertyNames(t).length !== 0)
    )
      return !1;
    var o = Object.getOwnPropertySymbols(t);
    if (
      o.length !== 1 ||
      o[0] !== n ||
      !Object.prototype.propertyIsEnumerable.call(t, n)
    )
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a = Object.getOwnPropertyDescriptor(t, n);
      if (a.value !== i || a.enumerable !== !0) return !1;
    }
    return !0;
  },
  Ym = typeof Symbol < "u" && Symbol,
  IN = LN,
  DN = function () {
    return typeof Ym != "function" ||
      typeof Symbol != "function" ||
      typeof Ym("foo") != "symbol" ||
      typeof Symbol("bar") != "symbol"
      ? !1
      : IN();
  },
  Xm = { foo: {} },
  jN = Object,
  NN = function () {
    return (
      { __proto__: Xm }.foo === Xm.foo && !({ __proto__: null } instanceof jN)
    );
  },
  FN = "Function.prototype.bind called on incompatible ",
  Ql = Array.prototype.slice,
  VN = Object.prototype.toString,
  BN = "[object Function]",
  UN = function (t) {
    var n = this;
    if (typeof n != "function" || VN.call(n) !== BN)
      throw new TypeError(FN + n);
    for (
      var r = Ql.call(arguments, 1),
        i,
        o = function () {
          if (this instanceof i) {
            var c = n.apply(this, r.concat(Ql.call(arguments)));
            return Object(c) === c ? c : this;
          } else return n.apply(t, r.concat(Ql.call(arguments)));
        },
        a = Math.max(0, n.length - r.length),
        s = [],
        l = 0;
      l < a;
      l++
    )
      s.push("$" + l);
    if (
      ((i = Function(
        "binder",
        "return function (" +
          s.join(",") +
          "){ return binder.apply(this,arguments); }"
      )(o)),
      n.prototype)
    ) {
      var u = function () {};
      (u.prototype = n.prototype),
        (i.prototype = new u()),
        (u.prototype = null);
    }
    return i;
  },
  zN = UN,
  wd = Function.prototype.bind || zN,
  HN = wd,
  WN = HN.call(Function.call, Object.prototype.hasOwnProperty),
  H,
  Qr = SyntaxError,
  rS = Function,
  Nr = TypeError,
  ql = function (e) {
    try {
      return rS('"use strict"; return (' + e + ").constructor;")();
    } catch {}
  },
  Gn = Object.getOwnPropertyDescriptor;
if (Gn)
  try {
    Gn({}, "");
  } catch {
    Gn = null;
  }
var Yl = function () {
    throw new Nr();
  },
  GN = Gn
    ? (function () {
        try {
          return arguments.callee, Yl;
        } catch {
          try {
            return Gn(arguments, "callee").get;
          } catch {
            return Yl;
          }
        }
      })()
    : Yl,
  cr = DN(),
  KN = NN(),
  _e =
    Object.getPrototypeOf ||
    (KN
      ? function (e) {
          return e.__proto__;
        }
      : null),
  dr = {},
  QN = typeof Uint8Array > "u" || !_e ? H : _e(Uint8Array),
  Kn = {
    "%AggregateError%": typeof AggregateError > "u" ? H : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? H : ArrayBuffer,
    "%ArrayIteratorPrototype%": cr && _e ? _e([][Symbol.iterator]()) : H,
    "%AsyncFromSyncIteratorPrototype%": H,
    "%AsyncFunction%": dr,
    "%AsyncGenerator%": dr,
    "%AsyncGeneratorFunction%": dr,
    "%AsyncIteratorPrototype%": dr,
    "%Atomics%": typeof Atomics > "u" ? H : Atomics,
    "%BigInt%": typeof BigInt > "u" ? H : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? H : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? H : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? H : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? H : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? H : Float64Array,
    "%FinalizationRegistry%":
      typeof FinalizationRegistry > "u" ? H : FinalizationRegistry,
    "%Function%": rS,
    "%GeneratorFunction%": dr,
    "%Int8Array%": typeof Int8Array > "u" ? H : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? H : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? H : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": cr && _e ? _e(_e([][Symbol.iterator]())) : H,
    "%JSON%": typeof JSON == "object" ? JSON : H,
    "%Map%": typeof Map > "u" ? H : Map,
    "%MapIteratorPrototype%":
      typeof Map > "u" || !cr || !_e ? H : _e(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? H : Promise,
    "%Proxy%": typeof Proxy > "u" ? H : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? H : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? H : Set,
    "%SetIteratorPrototype%":
      typeof Set > "u" || !cr || !_e ? H : _e(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%":
      typeof SharedArrayBuffer > "u" ? H : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": cr && _e ? _e(""[Symbol.iterator]()) : H,
    "%Symbol%": cr ? Symbol : H,
    "%SyntaxError%": Qr,
    "%ThrowTypeError%": GN,
    "%TypedArray%": QN,
    "%TypeError%": Nr,
    "%Uint8Array%": typeof Uint8Array > "u" ? H : Uint8Array,
    "%Uint8ClampedArray%":
      typeof Uint8ClampedArray > "u" ? H : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? H : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? H : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? H : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? H : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? H : WeakSet,
  };
if (_e)
  try {
    null.error;
  } catch (e) {
    var qN = _e(_e(e));
    Kn["%Error.prototype%"] = qN;
  }
var YN = function e(t) {
    var n;
    if (t === "%AsyncFunction%") n = ql("async function () {}");
    else if (t === "%GeneratorFunction%") n = ql("function* () {}");
    else if (t === "%AsyncGeneratorFunction%") n = ql("async function* () {}");
    else if (t === "%AsyncGenerator%") {
      var r = e("%AsyncGeneratorFunction%");
      r && (n = r.prototype);
    } else if (t === "%AsyncIteratorPrototype%") {
      var i = e("%AsyncGenerator%");
      i && _e && (n = _e(i.prototype));
    }
    return (Kn[t] = n), n;
  },
  Zm = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": [
      "AsyncGeneratorFunction",
      "prototype",
      "prototype",
    ],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"],
  },
  Ro = wd,
  us = WN,
  XN = Ro.call(Function.call, Array.prototype.concat),
  ZN = Ro.call(Function.apply, Array.prototype.splice),
  Jm = Ro.call(Function.call, String.prototype.replace),
  cs = Ro.call(Function.call, String.prototype.slice),
  JN = Ro.call(Function.call, RegExp.prototype.exec),
  eF =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  tF = /\\(\\)?/g,
  nF = function (t) {
    var n = cs(t, 0, 1),
      r = cs(t, -1);
    if (n === "%" && r !== "%")
      throw new Qr("invalid intrinsic syntax, expected closing `%`");
    if (r === "%" && n !== "%")
      throw new Qr("invalid intrinsic syntax, expected opening `%`");
    var i = [];
    return (
      Jm(t, eF, function (o, a, s, l) {
        i[i.length] = s ? Jm(l, tF, "$1") : a || o;
      }),
      i
    );
  },
  rF = function (t, n) {
    var r = t,
      i;
    if ((us(Zm, r) && ((i = Zm[r]), (r = "%" + i[0] + "%")), us(Kn, r))) {
      var o = Kn[r];
      if ((o === dr && (o = YN(r)), typeof o > "u" && !n))
        throw new Nr(
          "intrinsic " +
            t +
            " exists, but is not available. Please file an issue!"
        );
      return { alias: i, name: r, value: o };
    }
    throw new Qr("intrinsic " + t + " does not exist!");
  },
  Pd = function (t, n) {
    if (typeof t != "string" || t.length === 0)
      throw new Nr("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof n != "boolean")
      throw new Nr('"allowMissing" argument must be a boolean');
    if (JN(/^%?[^%]*%?$/, t) === null)
      throw new Qr(
        "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
      );
    var r = nF(t),
      i = r.length > 0 ? r[0] : "",
      o = rF("%" + i + "%", n),
      a = o.name,
      s = o.value,
      l = !1,
      u = o.alias;
    u && ((i = u[0]), ZN(r, XN([0, 1], u)));
    for (var c = 1, d = !0; c < r.length; c += 1) {
      var f = r[c],
        m = cs(f, 0, 1),
        p = cs(f, -1);
      if (
        (m === '"' ||
          m === "'" ||
          m === "`" ||
          p === '"' ||
          p === "'" ||
          p === "`") &&
        m !== p
      )
        throw new Qr("property names with quotes must have matching quotes");
      if (
        ((f === "constructor" || !d) && (l = !0),
        (i += "." + f),
        (a = "%" + i + "%"),
        us(Kn, a))
      )
        s = Kn[a];
      else if (s != null) {
        if (!(f in s)) {
          if (!n)
            throw new Nr(
              "base intrinsic for " +
                t +
                " exists, but the property is not available."
            );
          return;
        }
        if (Gn && c + 1 >= r.length) {
          var g = Gn(s, f);
          (d = !!g),
            d && "get" in g && !("originalValue" in g.get)
              ? (s = g.get)
              : (s = s[f]);
        } else (d = us(s, f)), (s = s[f]);
        d && !l && (Kn[a] = s);
      }
    }
    return s;
  },
  iS = { exports: {} };
(function (e) {
  var t = wd,
    n = Pd,
    r = n("%Function.prototype.apply%"),
    i = n("%Function.prototype.call%"),
    o = n("%Reflect.apply%", !0) || t.call(i, r),
    a = n("%Object.getOwnPropertyDescriptor%", !0),
    s = n("%Object.defineProperty%", !0),
    l = n("%Math.max%");
  if (s)
    try {
      s({}, "a", { value: 1 });
    } catch {
      s = null;
    }
  e.exports = function (d) {
    var f = o(t, i, arguments);
    if (a && s) {
      var m = a(f, "length");
      m.configurable &&
        s(f, "length", { value: 1 + l(0, d.length - (arguments.length - 1)) });
    }
    return f;
  };
  var u = function () {
    return o(t, r, arguments);
  };
  s ? s(e.exports, "apply", { value: u }) : (e.exports.apply = u);
})(iS);
var iF = iS.exports,
  oS = Pd,
  aS = iF,
  oF = aS(oS("String.prototype.indexOf")),
  aF = function (t, n) {
    var r = oS(t, !!n);
    return typeof r == "function" && oF(t, ".prototype.") > -1 ? aS(r) : r;
  };
const sF = {},
  lF = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: sF },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  uF = YS(lF);
var _d = typeof Map == "function" && Map.prototype,
  Xl =
    Object.getOwnPropertyDescriptor && _d
      ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
      : null,
  fs = _d && Xl && typeof Xl.get == "function" ? Xl.get : null,
  ey = _d && Map.prototype.forEach,
  Cd = typeof Set == "function" && Set.prototype,
  Zl =
    Object.getOwnPropertyDescriptor && Cd
      ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
      : null,
  ds = Cd && Zl && typeof Zl.get == "function" ? Zl.get : null,
  ty = Cd && Set.prototype.forEach,
  cF = typeof WeakMap == "function" && WeakMap.prototype,
  Hi = cF ? WeakMap.prototype.has : null,
  fF = typeof WeakSet == "function" && WeakSet.prototype,
  Wi = fF ? WeakSet.prototype.has : null,
  dF = typeof WeakRef == "function" && WeakRef.prototype,
  ny = dF ? WeakRef.prototype.deref : null,
  hF = Boolean.prototype.valueOf,
  pF = Object.prototype.toString,
  mF = Function.prototype.toString,
  yF = String.prototype.match,
  Td = String.prototype.slice,
  cn = String.prototype.replace,
  vF = String.prototype.toUpperCase,
  ry = String.prototype.toLowerCase,
  sS = RegExp.prototype.test,
  iy = Array.prototype.concat,
  Tt = Array.prototype.join,
  gF = Array.prototype.slice,
  oy = Math.floor,
  _c = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
  Jl = Object.getOwnPropertySymbols,
  Cc =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? Symbol.prototype.toString
      : null,
  qr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
  Le =
    typeof Symbol == "function" &&
    Symbol.toStringTag &&
    (typeof Symbol.toStringTag === qr || "symbol")
      ? Symbol.toStringTag
      : null,
  lS = Object.prototype.propertyIsEnumerable,
  ay =
    (typeof Reflect == "function"
      ? Reflect.getPrototypeOf
      : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (e) {
          return e.__proto__;
        }
      : null);
function sy(e, t) {
  if (
    e === 1 / 0 ||
    e === -1 / 0 ||
    e !== e ||
    (e && e > -1e3 && e < 1e3) ||
    sS.call(/e/, t)
  )
    return t;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var r = e < 0 ? -oy(-e) : oy(e);
    if (r !== e) {
      var i = String(r),
        o = Td.call(t, i.length + 1);
      return (
        cn.call(i, n, "$&_") +
        "." +
        cn.call(cn.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
      );
    }
  }
  return cn.call(t, n, "$&_");
}
var Tc = uF,
  ly = Tc.custom,
  uy = cS(ly) ? ly : null,
  SF = function e(t, n, r, i) {
    var o = n || {};
    if (
      rn(o, "quoteStyle") &&
      o.quoteStyle !== "single" &&
      o.quoteStyle !== "double"
    )
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      rn(o, "maxStringLength") &&
      (typeof o.maxStringLength == "number"
        ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
        : o.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      );
    var a = rn(o, "customInspect") ? o.customInspect : !0;
    if (typeof a != "boolean" && a !== "symbol")
      throw new TypeError(
        "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
      );
    if (
      rn(o, "indent") &&
      o.indent !== null &&
      o.indent !== "	" &&
      !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
    )
      throw new TypeError(
        'option "indent" must be "\\t", an integer > 0, or `null`'
      );
    if (rn(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
      throw new TypeError(
        'option "numericSeparator", if provided, must be `true` or `false`'
      );
    var s = o.numericSeparator;
    if (typeof t > "u") return "undefined";
    if (t === null) return "null";
    if (typeof t == "boolean") return t ? "true" : "false";
    if (typeof t == "string") return dS(t, o);
    if (typeof t == "number") {
      if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
      var l = String(t);
      return s ? sy(t, l) : l;
    }
    if (typeof t == "bigint") {
      var u = String(t) + "n";
      return s ? sy(t, u) : u;
    }
    var c = typeof o.depth > "u" ? 5 : o.depth;
    if ((typeof r > "u" && (r = 0), r >= c && c > 0 && typeof t == "object"))
      return Ec(t) ? "[Array]" : "[Object]";
    var d = jF(o, r);
    if (typeof i > "u") i = [];
    else if (fS(i, t) >= 0) return "[Circular]";
    function f(U, N, V) {
      if ((N && ((i = gF.call(i)), i.push(N)), V)) {
        var j = { depth: o.depth };
        return (
          rn(o, "quoteStyle") && (j.quoteStyle = o.quoteStyle),
          e(U, j, r + 1, i)
        );
      }
      return e(U, o, r + 1, i);
    }
    if (typeof t == "function" && !cy(t)) {
      var m = AF(t),
        p = ia(t, f);
      return (
        "[Function" +
        (m ? ": " + m : " (anonymous)") +
        "]" +
        (p.length > 0 ? " { " + Tt.call(p, ", ") + " }" : "")
      );
    }
    if (cS(t)) {
      var g = qr
        ? cn.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
        : Cc.call(t);
      return typeof t == "object" && !qr ? Ci(g) : g;
    }
    if (LF(t)) {
      for (
        var S = "<" + ry.call(String(t.nodeName)),
          y = t.attributes || [],
          h = 0;
        h < y.length;
        h++
      )
        S += " " + y[h].name + "=" + uS(xF(y[h].value), "double", o);
      return (
        (S += ">"),
        t.childNodes && t.childNodes.length && (S += "..."),
        (S += "</" + ry.call(String(t.nodeName)) + ">"),
        S
      );
    }
    if (Ec(t)) {
      if (t.length === 0) return "[]";
      var v = ia(t, f);
      return d && !DF(v)
        ? "[" + $c(v, d) + "]"
        : "[ " + Tt.call(v, ", ") + " ]";
    }
    if (PF(t)) {
      var x = ia(t, f);
      return !("cause" in Error.prototype) &&
        "cause" in t &&
        !lS.call(t, "cause")
        ? "{ [" +
            String(t) +
            "] " +
            Tt.call(iy.call("[cause]: " + f(t.cause), x), ", ") +
            " }"
        : x.length === 0
        ? "[" + String(t) + "]"
        : "{ [" + String(t) + "] " + Tt.call(x, ", ") + " }";
    }
    if (typeof t == "object" && a) {
      if (uy && typeof t[uy] == "function" && Tc)
        return Tc(t, { depth: c - r });
      if (a !== "symbol" && typeof t.inspect == "function") return t.inspect();
    }
    if (bF(t)) {
      var w = [];
      return (
        ey &&
          ey.call(t, function (U, N) {
            w.push(f(N, t, !0) + " => " + f(U, t));
          }),
        fy("Map", fs.call(t), w, d)
      );
    }
    if (MF(t)) {
      var C = [];
      return (
        ty &&
          ty.call(t, function (U) {
            C.push(f(U, t));
          }),
        fy("Set", ds.call(t), C, d)
      );
    }
    if (OF(t)) return eu("WeakMap");
    if (RF(t)) return eu("WeakSet");
    if (kF(t)) return eu("WeakRef");
    if (CF(t)) return Ci(f(Number(t)));
    if (EF(t)) return Ci(f(_c.call(t)));
    if (TF(t)) return Ci(hF.call(t));
    if (_F(t)) return Ci(f(String(t)));
    if (!wF(t) && !cy(t)) {
      var T = ia(t, f),
        _ = ay
          ? ay(t) === Object.prototype
          : t instanceof Object || t.constructor === Object,
        O = t instanceof Object ? "" : "null prototype",
        b =
          !_ && Le && Object(t) === t && Le in t
            ? Td.call(kn(t), 8, -1)
            : O
            ? "Object"
            : "",
        F =
          _ || typeof t.constructor != "function"
            ? ""
            : t.constructor.name
            ? t.constructor.name + " "
            : "",
        B =
          F +
          (b || O
            ? "[" + Tt.call(iy.call([], b || [], O || []), ": ") + "] "
            : "");
      return T.length === 0
        ? B + "{}"
        : d
        ? B + "{" + $c(T, d) + "}"
        : B + "{ " + Tt.call(T, ", ") + " }";
    }
    return String(t);
  };
function uS(e, t, n) {
  var r = (n.quoteStyle || t) === "double" ? '"' : "'";
  return r + e + r;
}
function xF(e) {
  return cn.call(String(e), /"/g, "&quot;");
}
function Ec(e) {
  return (
    kn(e) === "[object Array]" && (!Le || !(typeof e == "object" && Le in e))
  );
}
function wF(e) {
  return (
    kn(e) === "[object Date]" && (!Le || !(typeof e == "object" && Le in e))
  );
}
function cy(e) {
  return (
    kn(e) === "[object RegExp]" && (!Le || !(typeof e == "object" && Le in e))
  );
}
function PF(e) {
  return (
    kn(e) === "[object Error]" && (!Le || !(typeof e == "object" && Le in e))
  );
}
function _F(e) {
  return (
    kn(e) === "[object String]" && (!Le || !(typeof e == "object" && Le in e))
  );
}
function CF(e) {
  return (
    kn(e) === "[object Number]" && (!Le || !(typeof e == "object" && Le in e))
  );
}
function TF(e) {
  return (
    kn(e) === "[object Boolean]" && (!Le || !(typeof e == "object" && Le in e))
  );
}
function cS(e) {
  if (qr) return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol") return !0;
  if (!e || typeof e != "object" || !Cc) return !1;
  try {
    return Cc.call(e), !0;
  } catch {}
  return !1;
}
function EF(e) {
  if (!e || typeof e != "object" || !_c) return !1;
  try {
    return _c.call(e), !0;
  } catch {}
  return !1;
}
var $F =
  Object.prototype.hasOwnProperty ||
  function (e) {
    return e in this;
  };
function rn(e, t) {
  return $F.call(e, t);
}
function kn(e) {
  return pF.call(e);
}
function AF(e) {
  if (e.name) return e.name;
  var t = yF.call(mF.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function fS(e, t) {
  if (e.indexOf) return e.indexOf(t);
  for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
  return -1;
}
function bF(e) {
  if (!fs || !e || typeof e != "object") return !1;
  try {
    fs.call(e);
    try {
      ds.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {}
  return !1;
}
function OF(e) {
  if (!Hi || !e || typeof e != "object") return !1;
  try {
    Hi.call(e, Hi);
    try {
      Wi.call(e, Wi);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {}
  return !1;
}
function kF(e) {
  if (!ny || !e || typeof e != "object") return !1;
  try {
    return ny.call(e), !0;
  } catch {}
  return !1;
}
function MF(e) {
  if (!ds || !e || typeof e != "object") return !1;
  try {
    ds.call(e);
    try {
      fs.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {}
  return !1;
}
function RF(e) {
  if (!Wi || !e || typeof e != "object") return !1;
  try {
    Wi.call(e, Wi);
    try {
      Hi.call(e, Hi);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {}
  return !1;
}
function LF(e) {
  return !e || typeof e != "object"
    ? !1
    : typeof HTMLElement < "u" && e instanceof HTMLElement
    ? !0
    : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function dS(e, t) {
  if (e.length > t.maxStringLength) {
    var n = e.length - t.maxStringLength,
      r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return dS(Td.call(e, 0, t.maxStringLength), t) + r;
  }
  var i = cn.call(cn.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, IF);
  return uS(i, "single", t);
}
function IF(e) {
  var t = e.charCodeAt(0),
    n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
  return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + vF.call(t.toString(16));
}
function Ci(e) {
  return "Object(" + e + ")";
}
function eu(e) {
  return e + " { ? }";
}
function fy(e, t, n, r) {
  var i = r ? $c(n, r) : Tt.call(n, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function DF(e) {
  for (var t = 0; t < e.length; t++)
    if (
      fS(
        e[t],
        `
`
      ) >= 0
    )
      return !1;
  return !0;
}
function jF(e, t) {
  var n;
  if (e.indent === "	") n = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    n = Tt.call(Array(e.indent + 1), " ");
  else return null;
  return { base: n, prev: Tt.call(Array(t + 1), n) };
}
function $c(e, t) {
  if (e.length === 0) return "";
  var n =
    `
` +
    t.prev +
    t.base;
  return (
    n +
    Tt.call(e, "," + n) +
    `
` +
    t.prev
  );
}
function ia(e, t) {
  var n = Ec(e),
    r = [];
  if (n) {
    r.length = e.length;
    for (var i = 0; i < e.length; i++) r[i] = rn(e, i) ? t(e[i], e) : "";
  }
  var o = typeof Jl == "function" ? Jl(e) : [],
    a;
  if (qr) {
    a = {};
    for (var s = 0; s < o.length; s++) a["$" + o[s]] = o[s];
  }
  for (var l in e)
    rn(e, l) &&
      ((n && String(Number(l)) === l && l < e.length) ||
        (qr && a["$" + l] instanceof Symbol) ||
        (sS.call(/[^\w$]/, l)
          ? r.push(t(l, e) + ": " + t(e[l], e))
          : r.push(l + ": " + t(e[l], e))));
  if (typeof Jl == "function")
    for (var u = 0; u < o.length; u++)
      lS.call(e, o[u]) && r.push("[" + t(o[u]) + "]: " + t(e[o[u]], e));
  return r;
}
var Ed = Pd,
  ci = aF,
  NF = SF,
  FF = Ed("%TypeError%"),
  oa = Ed("%WeakMap%", !0),
  aa = Ed("%Map%", !0),
  VF = ci("WeakMap.prototype.get", !0),
  BF = ci("WeakMap.prototype.set", !0),
  UF = ci("WeakMap.prototype.has", !0),
  zF = ci("Map.prototype.get", !0),
  HF = ci("Map.prototype.set", !0),
  WF = ci("Map.prototype.has", !0),
  $d = function (e, t) {
    for (var n = e, r; (r = n.next) !== null; n = r)
      if (r.key === t)
        return (n.next = r.next), (r.next = e.next), (e.next = r), r;
  },
  GF = function (e, t) {
    var n = $d(e, t);
    return n && n.value;
  },
  KF = function (e, t, n) {
    var r = $d(e, t);
    r ? (r.value = n) : (e.next = { key: t, next: e.next, value: n });
  },
  QF = function (e, t) {
    return !!$d(e, t);
  },
  qF = function () {
    var t,
      n,
      r,
      i = {
        assert: function (o) {
          if (!i.has(o)) throw new FF("Side channel does not contain " + NF(o));
        },
        get: function (o) {
          if (oa && o && (typeof o == "object" || typeof o == "function")) {
            if (t) return VF(t, o);
          } else if (aa) {
            if (n) return zF(n, o);
          } else if (r) return GF(r, o);
        },
        has: function (o) {
          if (oa && o && (typeof o == "object" || typeof o == "function")) {
            if (t) return UF(t, o);
          } else if (aa) {
            if (n) return WF(n, o);
          } else if (r) return QF(r, o);
          return !1;
        },
        set: function (o, a) {
          oa && o && (typeof o == "object" || typeof o == "function")
            ? (t || (t = new oa()), BF(t, o, a))
            : aa
            ? (n || (n = new aa()), HF(n, o, a))
            : (r || (r = { key: {}, next: null }), KF(r, o, a));
        },
      };
    return i;
  },
  YF = String.prototype.replace,
  XF = /%20/g,
  tu = { RFC1738: "RFC1738", RFC3986: "RFC3986" },
  Ad = {
    default: tu.RFC3986,
    formatters: {
      RFC1738: function (e) {
        return YF.call(e, XF, "+");
      },
      RFC3986: function (e) {
        return String(e);
      },
    },
    RFC1738: tu.RFC1738,
    RFC3986: tu.RFC3986,
  },
  ZF = Ad,
  nu = Object.prototype.hasOwnProperty,
  Fn = Array.isArray,
  Pt = (function () {
    for (var e = [], t = 0; t < 256; ++t)
      e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e;
  })(),
  JF = function (t) {
    for (; t.length > 1; ) {
      var n = t.pop(),
        r = n.obj[n.prop];
      if (Fn(r)) {
        for (var i = [], o = 0; o < r.length; ++o)
          typeof r[o] < "u" && i.push(r[o]);
        n.obj[n.prop] = i;
      }
    }
  },
  hS = function (t, n) {
    for (
      var r = n && n.plainObjects ? Object.create(null) : {}, i = 0;
      i < t.length;
      ++i
    )
      typeof t[i] < "u" && (r[i] = t[i]);
    return r;
  },
  eV = function e(t, n, r) {
    if (!n) return t;
    if (typeof n != "object") {
      if (Fn(t)) t.push(n);
      else if (t && typeof t == "object")
        ((r && (r.plainObjects || r.allowPrototypes)) ||
          !nu.call(Object.prototype, n)) &&
          (t[n] = !0);
      else return [t, n];
      return t;
    }
    if (!t || typeof t != "object") return [t].concat(n);
    var i = t;
    return (
      Fn(t) && !Fn(n) && (i = hS(t, r)),
      Fn(t) && Fn(n)
        ? (n.forEach(function (o, a) {
            if (nu.call(t, a)) {
              var s = t[a];
              s && typeof s == "object" && o && typeof o == "object"
                ? (t[a] = e(s, o, r))
                : t.push(o);
            } else t[a] = o;
          }),
          t)
        : Object.keys(n).reduce(function (o, a) {
            var s = n[a];
            return nu.call(o, a) ? (o[a] = e(o[a], s, r)) : (o[a] = s), o;
          }, i)
    );
  },
  tV = function (t, n) {
    return Object.keys(n).reduce(function (r, i) {
      return (r[i] = n[i]), r;
    }, t);
  },
  nV = function (e, t, n) {
    var r = e.replace(/\+/g, " ");
    if (n === "iso-8859-1") return r.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(r);
    } catch {
      return r;
    }
  },
  rV = function (t, n, r, i, o) {
    if (t.length === 0) return t;
    var a = t;
    if (
      (typeof t == "symbol"
        ? (a = Symbol.prototype.toString.call(t))
        : typeof t != "string" && (a = String(t)),
      r === "iso-8859-1")
    )
      return escape(a).replace(/%u[0-9a-f]{4}/gi, function (c) {
        return "%26%23" + parseInt(c.slice(2), 16) + "%3B";
      });
    for (var s = "", l = 0; l < a.length; ++l) {
      var u = a.charCodeAt(l);
      if (
        u === 45 ||
        u === 46 ||
        u === 95 ||
        u === 126 ||
        (u >= 48 && u <= 57) ||
        (u >= 65 && u <= 90) ||
        (u >= 97 && u <= 122) ||
        (o === ZF.RFC1738 && (u === 40 || u === 41))
      ) {
        s += a.charAt(l);
        continue;
      }
      if (u < 128) {
        s = s + Pt[u];
        continue;
      }
      if (u < 2048) {
        s = s + (Pt[192 | (u >> 6)] + Pt[128 | (u & 63)]);
        continue;
      }
      if (u < 55296 || u >= 57344) {
        s =
          s +
          (Pt[224 | (u >> 12)] +
            Pt[128 | ((u >> 6) & 63)] +
            Pt[128 | (u & 63)]);
        continue;
      }
      (l += 1),
        (u = 65536 + (((u & 1023) << 10) | (a.charCodeAt(l) & 1023))),
        (s +=
          Pt[240 | (u >> 18)] +
          Pt[128 | ((u >> 12) & 63)] +
          Pt[128 | ((u >> 6) & 63)] +
          Pt[128 | (u & 63)]);
    }
    return s;
  },
  iV = function (t) {
    for (
      var n = [{ obj: { o: t }, prop: "o" }], r = [], i = 0;
      i < n.length;
      ++i
    )
      for (
        var o = n[i], a = o.obj[o.prop], s = Object.keys(a), l = 0;
        l < s.length;
        ++l
      ) {
        var u = s[l],
          c = a[u];
        typeof c == "object" &&
          c !== null &&
          r.indexOf(c) === -1 &&
          (n.push({ obj: a, prop: u }), r.push(c));
      }
    return JF(n), t;
  },
  oV = function (t) {
    return Object.prototype.toString.call(t) === "[object RegExp]";
  },
  aV = function (t) {
    return !t || typeof t != "object"
      ? !1
      : !!(
          t.constructor &&
          t.constructor.isBuffer &&
          t.constructor.isBuffer(t)
        );
  },
  sV = function (t, n) {
    return [].concat(t, n);
  },
  lV = function (t, n) {
    if (Fn(t)) {
      for (var r = [], i = 0; i < t.length; i += 1) r.push(n(t[i]));
      return r;
    }
    return n(t);
  },
  pS = {
    arrayToObject: hS,
    assign: tV,
    combine: sV,
    compact: iV,
    decode: nV,
    encode: rV,
    isBuffer: aV,
    isRegExp: oV,
    maybeMap: lV,
    merge: eV,
  },
  mS = qF,
  Pa = pS,
  Gi = Ad,
  uV = Object.prototype.hasOwnProperty,
  dy = {
    brackets: function (t) {
      return t + "[]";
    },
    comma: "comma",
    indices: function (t, n) {
      return t + "[" + n + "]";
    },
    repeat: function (t) {
      return t;
    },
  },
  jt = Array.isArray,
  cV = Array.prototype.push,
  yS = function (e, t) {
    cV.apply(e, jt(t) ? t : [t]);
  },
  fV = Date.prototype.toISOString,
  hy = Gi.default,
  ke = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: Pa.encode,
    encodeValuesOnly: !1,
    format: hy,
    formatter: Gi.formatters[hy],
    indices: !1,
    serializeDate: function (t) {
      return fV.call(t);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  },
  dV = function (t) {
    return (
      typeof t == "string" ||
      typeof t == "number" ||
      typeof t == "boolean" ||
      typeof t == "symbol" ||
      typeof t == "bigint"
    );
  },
  ru = {},
  hV = function e(t, n, r, i, o, a, s, l, u, c, d, f, m, p, g, S) {
    for (var y = t, h = S, v = 0, x = !1; (h = h.get(ru)) !== void 0 && !x; ) {
      var w = h.get(t);
      if (((v += 1), typeof w < "u")) {
        if (w === v) throw new RangeError("Cyclic object value");
        x = !0;
      }
      typeof h.get(ru) > "u" && (v = 0);
    }
    if (
      (typeof l == "function"
        ? (y = l(n, y))
        : y instanceof Date
        ? (y = d(y))
        : r === "comma" &&
          jt(y) &&
          (y = Pa.maybeMap(y, function (j) {
            return j instanceof Date ? d(j) : j;
          })),
      y === null)
    ) {
      if (o) return s && !p ? s(n, ke.encoder, g, "key", f) : n;
      y = "";
    }
    if (dV(y) || Pa.isBuffer(y)) {
      if (s) {
        var C = p ? n : s(n, ke.encoder, g, "key", f);
        return [m(C) + "=" + m(s(y, ke.encoder, g, "value", f))];
      }
      return [m(n) + "=" + m(String(y))];
    }
    var T = [];
    if (typeof y > "u") return T;
    var _;
    if (r === "comma" && jt(y))
      p && s && (y = Pa.maybeMap(y, s)),
        (_ = [{ value: y.length > 0 ? y.join(",") || null : void 0 }]);
    else if (jt(l)) _ = l;
    else {
      var O = Object.keys(y);
      _ = u ? O.sort(u) : O;
    }
    for (
      var b = i && jt(y) && y.length === 1 ? n + "[]" : n, F = 0;
      F < _.length;
      ++F
    ) {
      var B = _[F],
        U = typeof B == "object" && typeof B.value < "u" ? B.value : y[B];
      if (!(a && U === null)) {
        var N = jt(y)
          ? typeof r == "function"
            ? r(b, B)
            : b
          : b + (c ? "." + B : "[" + B + "]");
        S.set(t, v);
        var V = mS();
        V.set(ru, S),
          yS(
            T,
            e(
              U,
              N,
              r,
              i,
              o,
              a,
              r === "comma" && p && jt(y) ? null : s,
              l,
              u,
              c,
              d,
              f,
              m,
              p,
              g,
              V
            )
          );
      }
    }
    return T;
  },
  pV = function (t) {
    if (!t) return ke;
    if (
      t.encoder !== null &&
      typeof t.encoder < "u" &&
      typeof t.encoder != "function"
    )
      throw new TypeError("Encoder has to be a function.");
    var n = t.charset || ke.charset;
    if (
      typeof t.charset < "u" &&
      t.charset !== "utf-8" &&
      t.charset !== "iso-8859-1"
    )
      throw new TypeError(
        "The charset option must be either utf-8, iso-8859-1, or undefined"
      );
    var r = Gi.default;
    if (typeof t.format < "u") {
      if (!uV.call(Gi.formatters, t.format))
        throw new TypeError("Unknown format option provided.");
      r = t.format;
    }
    var i = Gi.formatters[r],
      o = ke.filter;
    return (
      (typeof t.filter == "function" || jt(t.filter)) && (o = t.filter),
      {
        addQueryPrefix:
          typeof t.addQueryPrefix == "boolean"
            ? t.addQueryPrefix
            : ke.addQueryPrefix,
        allowDots: typeof t.allowDots > "u" ? ke.allowDots : !!t.allowDots,
        charset: n,
        charsetSentinel:
          typeof t.charsetSentinel == "boolean"
            ? t.charsetSentinel
            : ke.charsetSentinel,
        delimiter: typeof t.delimiter > "u" ? ke.delimiter : t.delimiter,
        encode: typeof t.encode == "boolean" ? t.encode : ke.encode,
        encoder: typeof t.encoder == "function" ? t.encoder : ke.encoder,
        encodeValuesOnly:
          typeof t.encodeValuesOnly == "boolean"
            ? t.encodeValuesOnly
            : ke.encodeValuesOnly,
        filter: o,
        format: r,
        formatter: i,
        serializeDate:
          typeof t.serializeDate == "function"
            ? t.serializeDate
            : ke.serializeDate,
        skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : ke.skipNulls,
        sort: typeof t.sort == "function" ? t.sort : null,
        strictNullHandling:
          typeof t.strictNullHandling == "boolean"
            ? t.strictNullHandling
            : ke.strictNullHandling,
      }
    );
  },
  mV = function (e, t) {
    var n = e,
      r = pV(t),
      i,
      o;
    typeof r.filter == "function"
      ? ((o = r.filter), (n = o("", n)))
      : jt(r.filter) && ((o = r.filter), (i = o));
    var a = [];
    if (typeof n != "object" || n === null) return "";
    var s;
    t && t.arrayFormat in dy
      ? (s = t.arrayFormat)
      : t && "indices" in t
      ? (s = t.indices ? "indices" : "repeat")
      : (s = "indices");
    var l = dy[s];
    if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var u = l === "comma" && t && t.commaRoundTrip;
    i || (i = Object.keys(n)), r.sort && i.sort(r.sort);
    for (var c = mS(), d = 0; d < i.length; ++d) {
      var f = i[d];
      (r.skipNulls && n[f] === null) ||
        yS(
          a,
          hV(
            n[f],
            f,
            l,
            u,
            r.strictNullHandling,
            r.skipNulls,
            r.encode ? r.encoder : null,
            r.filter,
            r.sort,
            r.allowDots,
            r.serializeDate,
            r.format,
            r.formatter,
            r.encodeValuesOnly,
            r.charset,
            c
          )
        );
    }
    var m = a.join(r.delimiter),
      p = r.addQueryPrefix === !0 ? "?" : "";
    return (
      r.charsetSentinel &&
        (r.charset === "iso-8859-1"
          ? (p += "utf8=%26%2310003%3B&")
          : (p += "utf8=%E2%9C%93&")),
      m.length > 0 ? p + m : ""
    );
  },
  Yr = pS,
  Ac = Object.prototype.hasOwnProperty,
  yV = Array.isArray,
  Pe = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: Yr.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1,
  },
  vV = function (e) {
    return e.replace(/&#(\d+);/g, function (t, n) {
      return String.fromCharCode(parseInt(n, 10));
    });
  },
  vS = function (e, t) {
    return e && typeof e == "string" && t.comma && e.indexOf(",") > -1
      ? e.split(",")
      : e;
  },
  gV = "utf8=%26%2310003%3B",
  SV = "utf8=%E2%9C%93",
  xV = function (t, n) {
    var r = { __proto__: null },
      i = n.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
      o = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
      a = i.split(n.delimiter, o),
      s = -1,
      l,
      u = n.charset;
    if (n.charsetSentinel)
      for (l = 0; l < a.length; ++l)
        a[l].indexOf("utf8=") === 0 &&
          (a[l] === SV ? (u = "utf-8") : a[l] === gV && (u = "iso-8859-1"),
          (s = l),
          (l = a.length));
    for (l = 0; l < a.length; ++l)
      if (l !== s) {
        var c = a[l],
          d = c.indexOf("]="),
          f = d === -1 ? c.indexOf("=") : d + 1,
          m,
          p;
        f === -1
          ? ((m = n.decoder(c, Pe.decoder, u, "key")),
            (p = n.strictNullHandling ? null : ""))
          : ((m = n.decoder(c.slice(0, f), Pe.decoder, u, "key")),
            (p = Yr.maybeMap(vS(c.slice(f + 1), n), function (g) {
              return n.decoder(g, Pe.decoder, u, "value");
            }))),
          p && n.interpretNumericEntities && u === "iso-8859-1" && (p = vV(p)),
          c.indexOf("[]=") > -1 && (p = yV(p) ? [p] : p),
          Ac.call(r, m) ? (r[m] = Yr.combine(r[m], p)) : (r[m] = p);
      }
    return r;
  },
  wV = function (e, t, n, r) {
    for (var i = r ? t : vS(t, n), o = e.length - 1; o >= 0; --o) {
      var a,
        s = e[o];
      if (s === "[]" && n.parseArrays) a = [].concat(i);
      else {
        a = n.plainObjects ? Object.create(null) : {};
        var l =
            s.charAt(0) === "[" && s.charAt(s.length - 1) === "]"
              ? s.slice(1, -1)
              : s,
          u = parseInt(l, 10);
        !n.parseArrays && l === ""
          ? (a = { 0: i })
          : !isNaN(u) &&
            s !== l &&
            String(u) === l &&
            u >= 0 &&
            n.parseArrays &&
            u <= n.arrayLimit
          ? ((a = []), (a[u] = i))
          : l !== "__proto__" && (a[l] = i);
      }
      i = a;
    }
    return i;
  },
  PV = function (t, n, r, i) {
    if (t) {
      var o = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
        a = /(\[[^[\]]*])/,
        s = /(\[[^[\]]*])/g,
        l = r.depth > 0 && a.exec(o),
        u = l ? o.slice(0, l.index) : o,
        c = [];
      if (u) {
        if (
          !r.plainObjects &&
          Ac.call(Object.prototype, u) &&
          !r.allowPrototypes
        )
          return;
        c.push(u);
      }
      for (
        var d = 0;
        r.depth > 0 && (l = s.exec(o)) !== null && d < r.depth;

      ) {
        if (
          ((d += 1),
          !r.plainObjects &&
            Ac.call(Object.prototype, l[1].slice(1, -1)) &&
            !r.allowPrototypes)
        )
          return;
        c.push(l[1]);
      }
      return l && c.push("[" + o.slice(l.index) + "]"), wV(c, n, r, i);
    }
  },
  _V = function (t) {
    if (!t) return Pe;
    if (
      t.decoder !== null &&
      t.decoder !== void 0 &&
      typeof t.decoder != "function"
    )
      throw new TypeError("Decoder has to be a function.");
    if (
      typeof t.charset < "u" &&
      t.charset !== "utf-8" &&
      t.charset !== "iso-8859-1"
    )
      throw new TypeError(
        "The charset option must be either utf-8, iso-8859-1, or undefined"
      );
    var n = typeof t.charset > "u" ? Pe.charset : t.charset;
    return {
      allowDots: typeof t.allowDots > "u" ? Pe.allowDots : !!t.allowDots,
      allowPrototypes:
        typeof t.allowPrototypes == "boolean"
          ? t.allowPrototypes
          : Pe.allowPrototypes,
      allowSparse:
        typeof t.allowSparse == "boolean" ? t.allowSparse : Pe.allowSparse,
      arrayLimit:
        typeof t.arrayLimit == "number" ? t.arrayLimit : Pe.arrayLimit,
      charset: n,
      charsetSentinel:
        typeof t.charsetSentinel == "boolean"
          ? t.charsetSentinel
          : Pe.charsetSentinel,
      comma: typeof t.comma == "boolean" ? t.comma : Pe.comma,
      decoder: typeof t.decoder == "function" ? t.decoder : Pe.decoder,
      delimiter:
        typeof t.delimiter == "string" || Yr.isRegExp(t.delimiter)
          ? t.delimiter
          : Pe.delimiter,
      depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Pe.depth,
      ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
      interpretNumericEntities:
        typeof t.interpretNumericEntities == "boolean"
          ? t.interpretNumericEntities
          : Pe.interpretNumericEntities,
      parameterLimit:
        typeof t.parameterLimit == "number"
          ? t.parameterLimit
          : Pe.parameterLimit,
      parseArrays: t.parseArrays !== !1,
      plainObjects:
        typeof t.plainObjects == "boolean" ? t.plainObjects : Pe.plainObjects,
      strictNullHandling:
        typeof t.strictNullHandling == "boolean"
          ? t.strictNullHandling
          : Pe.strictNullHandling,
    };
  },
  CV = function (e, t) {
    var n = _V(t);
    if (e === "" || e === null || typeof e > "u")
      return n.plainObjects ? Object.create(null) : {};
    for (
      var r = typeof e == "string" ? xV(e, n) : e,
        i = n.plainObjects ? Object.create(null) : {},
        o = Object.keys(r),
        a = 0;
      a < o.length;
      ++a
    ) {
      var s = o[a],
        l = PV(s, r[s], n, typeof e == "string");
      i = Yr.merge(i, l, n);
    }
    return n.allowSparse === !0 ? i : Yr.compact(i);
  },
  TV = mV,
  EV = CV,
  $V = Ad,
  AV = { formats: $V, parse: EV, stringify: TV },
  bV = RN;
function ft() {
  (this.protocol = null),
    (this.slashes = null),
    (this.auth = null),
    (this.host = null),
    (this.port = null),
    (this.hostname = null),
    (this.hash = null),
    (this.search = null),
    (this.query = null),
    (this.pathname = null),
    (this.path = null),
    (this.href = null);
}
var OV = /^([a-z0-9.+-]+:)/i,
  kV = /:[0-9]*$/,
  MV = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
  RV = [
    "<",
    ">",
    '"',
    "`",
    " ",
    "\r",
    `
`,
    "	",
  ],
  LV = ["{", "}", "|", "\\", "^", "`"].concat(RV),
  bc = ["'"].concat(LV),
  py = ["%", "/", "?", ";", "#"].concat(bc),
  my = ["/", "?", "#"],
  IV = 255,
  yy = /^[+a-z0-9A-Z_-]{0,63}$/,
  DV = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
  jV = { javascript: !0, "javascript:": !0 },
  Oc = { javascript: !0, "javascript:": !0 },
  Fr = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0,
  },
  kc = AV;
function Lo(e, t, n) {
  if (e && typeof e == "object" && e instanceof ft) return e;
  var r = new ft();
  return r.parse(e, t, n), r;
}
ft.prototype.parse = function (e, t, n) {
  if (typeof e != "string")
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  var r = e.indexOf("?"),
    i = r !== -1 && r < e.indexOf("#") ? "?" : "#",
    o = e.split(i),
    a = /\\/g;
  (o[0] = o[0].replace(a, "/")), (e = o.join(i));
  var s = e;
  if (((s = s.trim()), !n && e.split("#").length === 1)) {
    var l = MV.exec(s);
    if (l)
      return (
        (this.path = s),
        (this.href = s),
        (this.pathname = l[1]),
        l[2]
          ? ((this.search = l[2]),
            t
              ? (this.query = kc.parse(this.search.substr(1)))
              : (this.query = this.search.substr(1)))
          : t && ((this.search = ""), (this.query = {})),
        this
      );
  }
  var u = OV.exec(s);
  if (u) {
    u = u[0];
    var c = u.toLowerCase();
    (this.protocol = c), (s = s.substr(u.length));
  }
  if (n || u || s.match(/^\/\/[^@/]+@[^@/]+/)) {
    var d = s.substr(0, 2) === "//";
    d && !(u && Oc[u]) && ((s = s.substr(2)), (this.slashes = !0));
  }
  if (!Oc[u] && (d || (u && !Fr[u]))) {
    for (var f = -1, m = 0; m < my.length; m++) {
      var p = s.indexOf(my[m]);
      p !== -1 && (f === -1 || p < f) && (f = p);
    }
    var g, S;
    f === -1 ? (S = s.lastIndexOf("@")) : (S = s.lastIndexOf("@", f)),
      S !== -1 &&
        ((g = s.slice(0, S)),
        (s = s.slice(S + 1)),
        (this.auth = decodeURIComponent(g))),
      (f = -1);
    for (var m = 0; m < py.length; m++) {
      var p = s.indexOf(py[m]);
      p !== -1 && (f === -1 || p < f) && (f = p);
    }
    f === -1 && (f = s.length),
      (this.host = s.slice(0, f)),
      (s = s.slice(f)),
      this.parseHost(),
      (this.hostname = this.hostname || "");
    var y =
      this.hostname[0] === "[" &&
      this.hostname[this.hostname.length - 1] === "]";
    if (!y)
      for (var h = this.hostname.split(/\./), m = 0, v = h.length; m < v; m++) {
        var x = h[m];
        if (x && !x.match(yy)) {
          for (var w = "", C = 0, T = x.length; C < T; C++)
            x.charCodeAt(C) > 127 ? (w += "x") : (w += x[C]);
          if (!w.match(yy)) {
            var _ = h.slice(0, m),
              O = h.slice(m + 1),
              b = x.match(DV);
            b && (_.push(b[1]), O.unshift(b[2])),
              O.length && (s = "/" + O.join(".") + s),
              (this.hostname = _.join("."));
            break;
          }
        }
      }
    this.hostname.length > IV
      ? (this.hostname = "")
      : (this.hostname = this.hostname.toLowerCase()),
      y || (this.hostname = bV.toASCII(this.hostname));
    var F = this.port ? ":" + this.port : "",
      B = this.hostname || "";
    (this.host = B + F),
      (this.href += this.host),
      y &&
        ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)),
        s[0] !== "/" && (s = "/" + s));
  }
  if (!jV[c])
    for (var m = 0, v = bc.length; m < v; m++) {
      var U = bc[m];
      if (s.indexOf(U) !== -1) {
        var N = encodeURIComponent(U);
        N === U && (N = escape(U)), (s = s.split(U).join(N));
      }
    }
  var V = s.indexOf("#");
  V !== -1 && ((this.hash = s.substr(V)), (s = s.slice(0, V)));
  var j = s.indexOf("?");
  if (
    (j !== -1
      ? ((this.search = s.substr(j)),
        (this.query = s.substr(j + 1)),
        t && (this.query = kc.parse(this.query)),
        (s = s.slice(0, j)))
      : t && ((this.search = ""), (this.query = {})),
    s && (this.pathname = s),
    Fr[c] && this.hostname && !this.pathname && (this.pathname = "/"),
    this.pathname || this.search)
  ) {
    var F = this.pathname || "",
      ce = this.search || "";
    this.path = F + ce;
  }
  return (this.href = this.format()), this;
};
function NV(e) {
  return (
    typeof e == "string" && (e = Lo(e)),
    e instanceof ft ? e.format() : ft.prototype.format.call(e)
  );
}
ft.prototype.format = function () {
  var e = this.auth || "";
  e && ((e = encodeURIComponent(e)), (e = e.replace(/%3A/i, ":")), (e += "@"));
  var t = this.protocol || "",
    n = this.pathname || "",
    r = this.hash || "",
    i = !1,
    o = "";
  this.host
    ? (i = e + this.host)
    : this.hostname &&
      ((i =
        e +
        (this.hostname.indexOf(":") === -1
          ? this.hostname
          : "[" + this.hostname + "]")),
      this.port && (i += ":" + this.port)),
    this.query &&
      typeof this.query == "object" &&
      Object.keys(this.query).length &&
      (o = kc.stringify(this.query));
  var a = this.search || (o && "?" + o) || "";
  return (
    t && t.substr(-1) !== ":" && (t += ":"),
    this.slashes || ((!t || Fr[t]) && i !== !1)
      ? ((i = "//" + (i || "")), n && n.charAt(0) !== "/" && (n = "/" + n))
      : i || (i = ""),
    r && r.charAt(0) !== "#" && (r = "#" + r),
    a && a.charAt(0) !== "?" && (a = "?" + a),
    (n = n.replace(/[?#]/g, function (s) {
      return encodeURIComponent(s);
    })),
    (a = a.replace("#", "%23")),
    t + i + n + a + r
  );
};
function FV(e, t) {
  return Lo(e, !1, !0).resolve(t);
}
ft.prototype.resolve = function (e) {
  return this.resolveObject(Lo(e, !1, !0)).format();
};
function VV(e, t) {
  return e ? Lo(e, !1, !0).resolveObject(t) : t;
}
ft.prototype.resolveObject = function (e) {
  if (typeof e == "string") {
    var t = new ft();
    t.parse(e, !1, !0), (e = t);
  }
  for (var n = new ft(), r = Object.keys(this), i = 0; i < r.length; i++) {
    var o = r[i];
    n[o] = this[o];
  }
  if (((n.hash = e.hash), e.href === "")) return (n.href = n.format()), n;
  if (e.slashes && !e.protocol) {
    for (var a = Object.keys(e), s = 0; s < a.length; s++) {
      var l = a[s];
      l !== "protocol" && (n[l] = e[l]);
    }
    return (
      Fr[n.protocol] &&
        n.hostname &&
        !n.pathname &&
        ((n.pathname = "/"), (n.path = n.pathname)),
      (n.href = n.format()),
      n
    );
  }
  if (e.protocol && e.protocol !== n.protocol) {
    if (!Fr[e.protocol]) {
      for (var u = Object.keys(e), c = 0; c < u.length; c++) {
        var d = u[c];
        n[d] = e[d];
      }
      return (n.href = n.format()), n;
    }
    if (((n.protocol = e.protocol), !e.host && !Oc[e.protocol])) {
      for (
        var v = (e.pathname || "").split("/");
        v.length && !(e.host = v.shift());

      );
      e.host || (e.host = ""),
        e.hostname || (e.hostname = ""),
        v[0] !== "" && v.unshift(""),
        v.length < 2 && v.unshift(""),
        (n.pathname = v.join("/"));
    } else n.pathname = e.pathname;
    if (
      ((n.search = e.search),
      (n.query = e.query),
      (n.host = e.host || ""),
      (n.auth = e.auth),
      (n.hostname = e.hostname || e.host),
      (n.port = e.port),
      n.pathname || n.search)
    ) {
      var f = n.pathname || "",
        m = n.search || "";
      n.path = f + m;
    }
    return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
  }
  var p = n.pathname && n.pathname.charAt(0) === "/",
    g = e.host || (e.pathname && e.pathname.charAt(0) === "/"),
    S = g || p || (n.host && e.pathname),
    y = S,
    h = (n.pathname && n.pathname.split("/")) || [],
    v = (e.pathname && e.pathname.split("/")) || [],
    x = n.protocol && !Fr[n.protocol];
  if (
    (x &&
      ((n.hostname = ""),
      (n.port = null),
      n.host && (h[0] === "" ? (h[0] = n.host) : h.unshift(n.host)),
      (n.host = ""),
      e.protocol &&
        ((e.hostname = null),
        (e.port = null),
        e.host && (v[0] === "" ? (v[0] = e.host) : v.unshift(e.host)),
        (e.host = null)),
      (S = S && (v[0] === "" || h[0] === ""))),
    g)
  )
    (n.host = e.host || e.host === "" ? e.host : n.host),
      (n.hostname = e.hostname || e.hostname === "" ? e.hostname : n.hostname),
      (n.search = e.search),
      (n.query = e.query),
      (h = v);
  else if (v.length)
    h || (h = []),
      h.pop(),
      (h = h.concat(v)),
      (n.search = e.search),
      (n.query = e.query);
  else if (e.search != null) {
    if (x) {
      (n.host = h.shift()), (n.hostname = n.host);
      var w = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;
      w &&
        ((n.auth = w.shift()), (n.hostname = w.shift()), (n.host = n.hostname));
    }
    return (
      (n.search = e.search),
      (n.query = e.query),
      (n.pathname !== null || n.search !== null) &&
        (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
      (n.href = n.format()),
      n
    );
  }
  if (!h.length)
    return (
      (n.pathname = null),
      n.search ? (n.path = "/" + n.search) : (n.path = null),
      (n.href = n.format()),
      n
    );
  for (
    var C = h.slice(-1)[0],
      T =
        ((n.host || e.host || h.length > 1) && (C === "." || C === "..")) ||
        C === "",
      _ = 0,
      O = h.length;
    O >= 0;
    O--
  )
    (C = h[O]),
      C === "."
        ? h.splice(O, 1)
        : C === ".."
        ? (h.splice(O, 1), _++)
        : _ && (h.splice(O, 1), _--);
  if (!S && !y) for (; _--; _) h.unshift("..");
  S && h[0] !== "" && (!h[0] || h[0].charAt(0) !== "/") && h.unshift(""),
    T && h.join("/").substr(-1) !== "/" && h.push("");
  var b = h[0] === "" || (h[0] && h[0].charAt(0) === "/");
  if (x) {
    (n.hostname = b ? "" : h.length ? h.shift() : ""), (n.host = n.hostname);
    var w = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;
    w &&
      ((n.auth = w.shift()), (n.hostname = w.shift()), (n.host = n.hostname));
  }
  return (
    (S = S || (n.host && h.length)),
    S && !b && h.unshift(""),
    h.length > 0
      ? (n.pathname = h.join("/"))
      : ((n.pathname = null), (n.path = null)),
    (n.pathname !== null || n.search !== null) &&
      (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
    (n.auth = e.auth || n.auth),
    (n.slashes = n.slashes || e.slashes),
    (n.href = n.format()),
    n
  );
};
ft.prototype.parseHost = function () {
  var e = this.host,
    t = kV.exec(e);
  t &&
    ((t = t[0]),
    t !== ":" && (this.port = t.substr(1)),
    (e = e.substr(0, e.length - t.length))),
    e && (this.hostname = e);
};
ui.parse = Lo;
ui.resolve = FV;
ui.resolveObject = VV;
ui.format = NV;
ui.Url = ft;
var BV =
    (z && z.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var o in i) i.hasOwnProperty(o) && (r[o] = i[o]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  UV =
    (z && z.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          r === void 0 && (r = n),
            Object.defineProperty(e, r, {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            });
        }
      : function (e, t, n, r) {
          r === void 0 && (r = n), (e[r] = t[n]);
        }),
  zV =
    (z && z.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  HV =
    (z && z.__importStar) ||
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null)
        for (var n in e)
          n !== "default" && Object.hasOwnProperty.call(e, n) && UV(t, e, n);
      return zV(t, e), t;
    };
Object.defineProperty(xd, "__esModule", { value: !0 });
var WV = Zs,
  Mc = HV(ui);
function GV(e) {
  var t = Mc.parse(e);
  return t.protocol === null && t.host === null && t.port === null;
}
function KV(e, t) {
  var n = Mc.parse(e),
    r = Mc.parse(t);
  return (
    n.protocol === r.protocol && n.hostname === r.hostname && n.port === r.port
  );
}
var QV = (function (e) {
  BV(t, e);
  function t() {
    return (e !== null && e.apply(this, arguments)) || this;
  }
  return (
    (t.prototype._initCanvas = function () {
      var n = this.image,
        r = (this._canvas = document.createElement("canvas")),
        i = (this._context = r.getContext("2d"));
      (r.className = "vibrant-canvas"),
        (r.style.display = "none"),
        (this._width = r.width = n.width),
        (this._height = r.height = n.height),
        i.drawImage(n, 0, 0),
        document.body.appendChild(r);
    }),
    (t.prototype.load = function (n) {
      var r = this,
        i = null,
        o = null;
      if (typeof n == "string")
        (i = document.createElement("img")),
          !GV(n) &&
            !KV(window.location.href, n) &&
            (i.crossOrigin = "anonymous"),
          (o = i.src = n);
      else if (n instanceof HTMLImageElement) (i = n), (o = n.src);
      else
        return Promise.reject(
          new Error("Cannot load buffer as an image in browser")
        );
      return (
        (this.image = i),
        new Promise(function (a, s) {
          var l = function () {
            r._initCanvas(), a(r);
          };
          i.complete
            ? l()
            : ((i.onload = l),
              (i.onerror = function (u) {
                return s(new Error("Fail to load image: " + o));
              }));
        })
      );
    }),
    (t.prototype.clear = function () {
      this._context.clearRect(0, 0, this._width, this._height);
    }),
    (t.prototype.update = function (n) {
      this._context.putImageData(n, 0, 0);
    }),
    (t.prototype.getWidth = function () {
      return this._width;
    }),
    (t.prototype.getHeight = function () {
      return this._height;
    }),
    (t.prototype.resize = function (n, r, i) {
      var o = this,
        a = o._canvas,
        s = o._context,
        l = o.image;
      (this._width = a.width = n),
        (this._height = a.height = r),
        s.scale(i, i),
        s.drawImage(l, 0, 0);
    }),
    (t.prototype.getPixelCount = function () {
      return this._width * this._height;
    }),
    (t.prototype.getImageData = function () {
      return this._context.getImageData(0, 0, this._width, this._height);
    }),
    (t.prototype.remove = function () {
      this._canvas &&
        this._canvas.parentNode &&
        this._canvas.parentNode.removeChild(this._canvas);
    }),
    t
  );
})(WV.ImageBase);
xd.default = QV;
var gS =
    (z && z.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    },
  SS = gS(nS()),
  qV = gS(xd);
SS.default.DefaultOpts.ImageClass = qV.default;
var YV = SS.default;
const XV = ms(YV);
var ZV = 1 / 0,
  JV = "[object Symbol]",
  e4 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
  t4 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  Js = "\\ud800-\\udfff",
  xS = "\\u0300-\\u036f\\ufe20-\\ufe23",
  wS = "\\u20d0-\\u20f0",
  PS = "\\u2700-\\u27bf",
  _S = "a-z\\xdf-\\xf6\\xf8-\\xff",
  n4 = "\\xac\\xb1\\xd7\\xf7",
  r4 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
  i4 = "\\u2000-\\u206f",
  o4 =
    " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  CS = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  TS = "\\ufe0e\\ufe0f",
  ES = n4 + r4 + i4 + o4,
  bd = "['’]",
  a4 = "[" + Js + "]",
  vy = "[" + ES + "]",
  hs = "[" + xS + wS + "]",
  $S = "\\d+",
  s4 = "[" + PS + "]",
  AS = "[" + _S + "]",
  bS = "[^" + Js + ES + $S + PS + _S + CS + "]",
  Rc = "\\ud83c[\\udffb-\\udfff]",
  l4 = "(?:" + hs + "|" + Rc + ")",
  OS = "[^" + Js + "]",
  Od = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  kd = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  hr = "[" + CS + "]",
  kS = "\\u200d",
  gy = "(?:" + AS + "|" + bS + ")",
  u4 = "(?:" + hr + "|" + bS + ")",
  Sy = "(?:" + bd + "(?:d|ll|m|re|s|t|ve))?",
  xy = "(?:" + bd + "(?:D|LL|M|RE|S|T|VE))?",
  MS = l4 + "?",
  RS = "[" + TS + "]?",
  c4 = "(?:" + kS + "(?:" + [OS, Od, kd].join("|") + ")" + RS + MS + ")*",
  LS = RS + MS + c4,
  f4 = "(?:" + [s4, Od, kd].join("|") + ")" + LS,
  d4 = "(?:" + [OS + hs + "?", hs, Od, kd, a4].join("|") + ")",
  h4 = RegExp(bd, "g"),
  p4 = RegExp(hs, "g"),
  m4 = RegExp(Rc + "(?=" + Rc + ")|" + d4 + LS, "g"),
  y4 = RegExp(
    [
      hr + "?" + AS + "+" + Sy + "(?=" + [vy, hr, "$"].join("|") + ")",
      u4 + "+" + xy + "(?=" + [vy, hr + gy, "$"].join("|") + ")",
      hr + "?" + gy + "+" + Sy,
      hr + "+" + xy,
      $S,
      f4,
    ].join("|"),
    "g"
  ),
  v4 = RegExp("[" + kS + Js + xS + wS + TS + "]"),
  g4 = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
  S4 = {
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    Ç: "C",
    ç: "c",
    Ð: "D",
    ð: "d",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    Ñ: "N",
    ñ: "n",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    Ý: "Y",
    ý: "y",
    ÿ: "y",
    Æ: "Ae",
    æ: "ae",
    Þ: "Th",
    þ: "th",
    ß: "ss",
    Ā: "A",
    Ă: "A",
    Ą: "A",
    ā: "a",
    ă: "a",
    ą: "a",
    Ć: "C",
    Ĉ: "C",
    Ċ: "C",
    Č: "C",
    ć: "c",
    ĉ: "c",
    ċ: "c",
    č: "c",
    Ď: "D",
    Đ: "D",
    ď: "d",
    đ: "d",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    Ĝ: "G",
    Ğ: "G",
    Ġ: "G",
    Ģ: "G",
    ĝ: "g",
    ğ: "g",
    ġ: "g",
    ģ: "g",
    Ĥ: "H",
    Ħ: "H",
    ĥ: "h",
    ħ: "h",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    Ĵ: "J",
    ĵ: "j",
    Ķ: "K",
    ķ: "k",
    ĸ: "k",
    Ĺ: "L",
    Ļ: "L",
    Ľ: "L",
    Ŀ: "L",
    Ł: "L",
    ĺ: "l",
    ļ: "l",
    ľ: "l",
    ŀ: "l",
    ł: "l",
    Ń: "N",
    Ņ: "N",
    Ň: "N",
    Ŋ: "N",
    ń: "n",
    ņ: "n",
    ň: "n",
    ŋ: "n",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    ō: "o",
    ŏ: "o",
    ő: "o",
    Ŕ: "R",
    Ŗ: "R",
    Ř: "R",
    ŕ: "r",
    ŗ: "r",
    ř: "r",
    Ś: "S",
    Ŝ: "S",
    Ş: "S",
    Š: "S",
    ś: "s",
    ŝ: "s",
    ş: "s",
    š: "s",
    Ţ: "T",
    Ť: "T",
    Ŧ: "T",
    ţ: "t",
    ť: "t",
    ŧ: "t",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    Ŵ: "W",
    ŵ: "w",
    Ŷ: "Y",
    ŷ: "y",
    Ÿ: "Y",
    Ź: "Z",
    Ż: "Z",
    Ž: "Z",
    ź: "z",
    ż: "z",
    ž: "z",
    Ĳ: "IJ",
    ĳ: "ij",
    Œ: "Oe",
    œ: "oe",
    ŉ: "'n",
    ſ: "ss",
  },
  x4 = typeof z == "object" && z && z.Object === Object && z,
  w4 = typeof self == "object" && self && self.Object === Object && self,
  P4 = x4 || w4 || Function("return this")();
function _4(e, t, n, r) {
  var i = -1,
    o = e ? e.length : 0;
  for (r && o && (n = e[++i]); ++i < o; ) n = t(n, e[i], i, e);
  return n;
}
function C4(e) {
  return e.split("");
}
function T4(e) {
  return e.match(e4) || [];
}
function E4(e) {
  return function (t) {
    return e == null ? void 0 : e[t];
  };
}
var $4 = E4(S4);
function IS(e) {
  return v4.test(e);
}
function A4(e) {
  return g4.test(e);
}
function b4(e) {
  return IS(e) ? O4(e) : C4(e);
}
function O4(e) {
  return e.match(m4) || [];
}
function k4(e) {
  return e.match(y4) || [];
}
var M4 = Object.prototype,
  R4 = M4.toString,
  wy = P4.Symbol,
  Py = wy ? wy.prototype : void 0,
  _y = Py ? Py.toString : void 0;
function L4(e, t, n) {
  var r = -1,
    i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t),
    (n = n > i ? i : n),
    n < 0 && (n += i),
    (i = t > n ? 0 : (n - t) >>> 0),
    (t >>>= 0);
  for (var o = Array(i); ++r < i; ) o[r] = e[r + t];
  return o;
}
function I4(e) {
  if (typeof e == "string") return e;
  if (V4(e)) return _y ? _y.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ZV ? "-0" : t;
}
function D4(e, t, n) {
  var r = e.length;
  return (n = n === void 0 ? r : n), !t && n >= r ? e : L4(e, t, n);
}
function j4(e) {
  return function (t) {
    t = el(t);
    var n = IS(t) ? b4(t) : void 0,
      r = n ? n[0] : t.charAt(0),
      i = n ? D4(n, 1).join("") : t.slice(1);
    return r[e]() + i;
  };
}
function N4(e) {
  return function (t) {
    return _4(W4(z4(t).replace(h4, "")), e, "");
  };
}
function F4(e) {
  return !!e && typeof e == "object";
}
function V4(e) {
  return typeof e == "symbol" || (F4(e) && R4.call(e) == JV);
}
function el(e) {
  return e == null ? "" : I4(e);
}
var B4 = N4(function (e, t, n) {
  return (t = t.toLowerCase()), e + (n ? U4(t) : t);
});
function U4(e) {
  return H4(el(e).toLowerCase());
}
function z4(e) {
  return (e = el(e)), e && e.replace(t4, $4).replace(p4, "");
}
var H4 = j4("toUpperCase");
function W4(e, t, n) {
  return (
    (e = el(e)),
    (t = n ? void 0 : t),
    t === void 0 ? (A4(e) ? k4(e) : T4(e)) : e.match(t) || []
  );
}
var G4 = B4;
const K4 = ms(G4);
var Q4 = "Expected a function",
  DS = "__lodash_hash_undefined__",
  jS = 1 / 0,
  q4 = "[object Function]",
  Y4 = "[object GeneratorFunction]",
  X4 = "[object Symbol]",
  Z4 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  J4 = /^\w*$/,
  e5 = /^\./,
  t5 =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  n5 = /[\\^$.*+?()[\]{}|]/g,
  r5 = /\\(\\)?/g,
  i5 = /^\[object .+?Constructor\]$/,
  o5 = typeof z == "object" && z && z.Object === Object && z,
  a5 = typeof self == "object" && self && self.Object === Object && self,
  Md = o5 || a5 || Function("return this")();
function NS(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function s5(e, t) {
  return e == null ? void 0 : e[t];
}
function l5(e) {
  var t = !1;
  if (e != null && typeof e.toString != "function")
    try {
      t = !!(e + "");
    } catch {}
  return t;
}
var u5 = Array.prototype,
  c5 = Function.prototype,
  FS = Object.prototype,
  iu = Md["__core-js_shared__"],
  Cy = (function () {
    var e = /[^.]+$/.exec((iu && iu.keys && iu.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })(),
  VS = c5.toString,
  Rd = FS.hasOwnProperty,
  BS = FS.toString,
  f5 = RegExp(
    "^" +
      VS.call(Rd)
        .replace(n5, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  ),
  Ty = Md.Symbol,
  d5 = u5.splice,
  Ey = Math.max,
  h5 = zS(Md, "Map"),
  vo = zS(Object, "create"),
  $y = Ty ? Ty.prototype : void 0,
  Ay = $y ? $y.toString : void 0;
function Jn(e) {
  var t = -1,
    n = e ? e.length : 0;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
function p5() {
  this.__data__ = vo ? vo(null) : {};
}
function m5(e) {
  return this.has(e) && delete this.__data__[e];
}
function y5(e) {
  var t = this.__data__;
  if (vo) {
    var n = t[e];
    return n === DS ? void 0 : n;
  }
  return Rd.call(t, e) ? t[e] : void 0;
}
function v5(e) {
  var t = this.__data__;
  return vo ? t[e] !== void 0 : Rd.call(t, e);
}
function g5(e, t) {
  var n = this.__data__;
  return (n[e] = vo && t === void 0 ? DS : t), this;
}
Jn.prototype.clear = p5;
Jn.prototype.delete = m5;
Jn.prototype.get = y5;
Jn.prototype.has = v5;
Jn.prototype.set = g5;
function fi(e) {
  var t = -1,
    n = e ? e.length : 0;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
function S5() {
  this.__data__ = [];
}
function x5(e) {
  var t = this.__data__,
    n = tl(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : d5.call(t, n, 1), !0;
}
function w5(e) {
  var t = this.__data__,
    n = tl(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function P5(e) {
  return tl(this.__data__, e) > -1;
}
function _5(e, t) {
  var n = this.__data__,
    r = tl(n, e);
  return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
}
fi.prototype.clear = S5;
fi.prototype.delete = x5;
fi.prototype.get = w5;
fi.prototype.has = P5;
fi.prototype.set = _5;
function sr(e) {
  var t = -1,
    n = e ? e.length : 0;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
function C5() {
  this.__data__ = { hash: new Jn(), map: new (h5 || fi)(), string: new Jn() };
}
function T5(e) {
  return nl(this, e).delete(e);
}
function E5(e) {
  return nl(this, e).get(e);
}
function $5(e) {
  return nl(this, e).has(e);
}
function A5(e, t) {
  return nl(this, e).set(e, t), this;
}
sr.prototype.clear = C5;
sr.prototype.delete = T5;
sr.prototype.get = E5;
sr.prototype.has = $5;
sr.prototype.set = A5;
function tl(e, t) {
  for (var n = e.length; n--; ) if (B5(e[n][0], t)) return n;
  return -1;
}
function b5(e, t) {
  t = HS(t, e) ? [t] : US(t);
  for (var n = 0, r = t.length; e != null && n < r; ) e = e[WS(t[n++])];
  return n && n == r ? e : void 0;
}
function O5(e, t, n) {
  HS(t, e) || ((t = US(t)), (e = j5(e, t)), (t = V5(t)));
  var r = e == null ? e : e[WS(t)];
  return r == null ? void 0 : NS(r, e, n);
}
function k5(e) {
  if (!KS(e) || D5(e)) return !1;
  var t = U5(e) || l5(e) ? f5 : i5;
  return t.test(F5(e));
}
function M5(e, t) {
  return (
    (t = Ey(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var n = arguments, r = -1, i = Ey(n.length - t, 0), o = Array(i);
        ++r < i;

      )
        o[r] = n[t + r];
      r = -1;
      for (var a = Array(t + 1); ++r < t; ) a[r] = n[r];
      return (a[t] = o), NS(e, this, a);
    }
  );
}
function R5(e, t, n) {
  var r = -1,
    i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t),
    (n = n > i ? i : n),
    n < 0 && (n += i),
    (i = t > n ? 0 : (n - t) >>> 0),
    (t >>>= 0);
  for (var o = Array(i); ++r < i; ) o[r] = e[r + t];
  return o;
}
function L5(e) {
  if (typeof e == "string") return e;
  if (Id(e)) return Ay ? Ay.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -jS ? "-0" : t;
}
function US(e) {
  return GS(e) ? e : N5(e);
}
function nl(e, t) {
  var n = e.__data__;
  return I5(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function zS(e, t) {
  var n = s5(e, t);
  return k5(n) ? n : void 0;
}
function HS(e, t) {
  if (GS(e)) return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Id(e)
    ? !0
    : J4.test(e) || !Z4.test(e) || (t != null && e in Object(t));
}
function I5(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
function D5(e) {
  return !!Cy && Cy in e;
}
function j5(e, t) {
  return t.length == 1 ? e : b5(e, R5(t, 0, -1));
}
var N5 = Ld(function (e) {
  e = H5(e);
  var t = [];
  return (
    e5.test(e) && t.push(""),
    e.replace(t5, function (n, r, i, o) {
      t.push(i ? o.replace(r5, "$1") : r || n);
    }),
    t
  );
});
function WS(e) {
  if (typeof e == "string" || Id(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -jS ? "-0" : t;
}
function F5(e) {
  if (e != null) {
    try {
      return VS.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
function V5(e) {
  var t = e ? e.length : 0;
  return t ? e[t - 1] : void 0;
}
function Ld(e, t) {
  if (typeof e != "function" || (t && typeof t != "function"))
    throw new TypeError(Q4);
  var n = function () {
    var r = arguments,
      i = t ? t.apply(this, r) : r[0],
      o = n.cache;
    if (o.has(i)) return o.get(i);
    var a = e.apply(this, r);
    return (n.cache = o.set(i, a)), a;
  };
  return (n.cache = new (Ld.Cache || sr)()), n;
}
Ld.Cache = sr;
function B5(e, t) {
  return e === t || (e !== e && t !== t);
}
var GS = Array.isArray;
function U5(e) {
  var t = KS(e) ? BS.call(e) : "";
  return t == q4 || t == Y4;
}
function KS(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function z5(e) {
  return !!e && typeof e == "object";
}
function Id(e) {
  return typeof e == "symbol" || (z5(e) && BS.call(e) == X4);
}
function H5(e) {
  return e == null ? "" : L5(e);
}
var W5 = M5(O5),
  G5 = W5;
const K5 = ms(G5);
function go() {
  return (
    (go = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    go.apply(this, arguments)
  );
}
var Q5 = function (e) {
    try {
      return Promise.resolve(XV.from(e).getPalette()).then(function (t) {
        return Object.keys(t).reduce(function (n, r) {
          var i;
          return go({}, n, (((i = {})[K4(r)] = K5(t, [r, "getHex"])), i));
        }, {});
      });
    } catch (t) {
      return Promise.reject(t);
    }
  },
  QS = { loading: !0, data: {}, error: void 0 };
function q5(e, t) {
  switch (t.type) {
    case "getPalette":
      return QS;
    case "resolvePalette":
      return go({}, e, { data: t.payload, loading: !1 });
    case "rejectPalette":
      return go({}, e, { error: t.payload, loading: !1 });
  }
}
function Y5(e) {
  var t = je.useReducer(q5, QS),
    n = t[0],
    r = t[1];
  return (
    je.useEffect(
      function () {
        r({ type: "getPalette" }),
          Q5(e)
            .then(function (i) {
              r({ type: "resolvePalette", payload: i });
            })
            .catch(function (i) {
              r({ type: "rejectPalette", payload: i });
            });
      },
      [e]
    ),
    n
  );
}
const X5 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: 0.5,
      },
    },
    exit: { opacity: 0 },
  },
  Z5 = {
    hidden: { y: "-9000px" },
    show: {
      y: "0px",
      transition: { ease: [0.43, 0.13, 0.23, 0.96], duration: 0.5 },
    },
  },
  J5 = ({ primaryColor: e, secondaryColor: t, messageDataArrayLength: n }) => {
    const r = Rs(),
      i = bn(),
      o = {
        "--primary": e,
        "--secondary": t,
        "--pb-width": "100px",
        "--pb-duration": "5s",
      };
    return M.jsx(ve.div, {
      className: "progress-wrapper",
      initial: "hidden",
      animate: "show",
      exit: "exit",
      variants: X5,
      children: Array.from({ length: n }, (a, s) =>
        M.jsx(
          ve.div,
          {
            className: `progress-bar ${
              i.pathname == `/wishes/${s}` ? "passed" : ""
            }`,
            style: o,
            variants: Z5,
            onClick: () => r(`/wishes/${s}`),
          },
          s + 69
        )
      ),
    });
  };
const eB = "modulepreload",
  tB = function (e) {
    return "/" + e;
  },
  by = {},
  nB = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const i = document.getElementsByTagName("link");
    return Promise.all(
      n.map((o) => {
        if (((o = tB(o)), o in by)) return;
        by[o] = !0;
        const a = o.endsWith(".css"),
          s = a ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let c = i.length - 1; c >= 0; c--) {
            const d = i[c];
            if (d.href === o && (!a || d.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${s}`)) return;
        const u = document.createElement("link");
        if (
          ((u.rel = a ? "stylesheet" : eB),
          a || ((u.as = "script"), (u.crossOrigin = "")),
          (u.href = o),
          document.head.appendChild(u),
          a)
        )
          return new Promise((c, d) => {
            u.addEventListener("load", c),
              u.addEventListener("error", () =>
                d(new Error(`Unable to preload CSS for ${o}`))
              );
          });
      })
    )
      .then(() => t())
      .catch((o) => {
        const a = new Event("vite:preloadError", { cancelable: !0 });
        if (((a.payload = o), window.dispatchEvent(a), !a.defaultPrevented))
          throw o;
      });
  };
function ps() {
  return (
    (ps =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    ps.apply(this, arguments)
  );
}
function rB(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function iB(e) {
  P.useEffect(e, []);
}
function oB(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.volume,
    i = r === void 0 ? 1 : r,
    o = n.playbackRate,
    a = o === void 0 ? 1 : o,
    s = n.soundEnabled,
    l = s === void 0 ? !0 : s,
    u = n.interrupt,
    c = u === void 0 ? !1 : u,
    d = n.onload,
    f = rB(n, [
      "id",
      "volume",
      "playbackRate",
      "soundEnabled",
      "interrupt",
      "onload",
    ]),
    m = je.useRef(null),
    p = je.useRef(!1),
    g = je.useState(null),
    S = g[0],
    y = g[1],
    h = je.useState(null),
    v = h[0],
    x = h[1],
    w = function () {
      typeof d == "function" && d.call(this),
        p.current && y(this.duration() * 1e3),
        x(this);
    };
  iB(function () {
    return (
      nB(() => import("./howler-a16edf56.js").then((b) => b.h), []).then(
        function (b) {
          if (!p.current) {
            var F;
            (m.current =
              (F = b.Howl) !== null && F !== void 0 ? F : b.default.Howl),
              (p.current = !0),
              new m.current(
                ps(
                  {
                    src: Array.isArray(e) ? e : [e],
                    volume: i,
                    rate: a,
                    onload: w,
                  },
                  f
                )
              );
          }
        }
      ),
      function () {
        p.current = !1;
      }
    );
  }),
    je.useEffect(
      function () {
        m.current &&
          v &&
          x(
            new m.current(
              ps({ src: Array.isArray(e) ? e : [e], volume: i, onload: w }, f)
            )
          );
      },
      [JSON.stringify(e)]
    ),
    je.useEffect(
      function () {
        v && (v.volume(i), v.rate(a));
      },
      [i, a]
    );
  var C = je.useCallback(
      function (b) {
        typeof b > "u" && (b = {}),
          !(!v || (!l && !b.forceSoundEnabled)) &&
            (c && v.stop(),
            b.playbackRate && v.rate(b.playbackRate),
            v.play(b.id));
      },
      [v, l, c]
    ),
    T = je.useCallback(
      function (b) {
        v && v.stop(b);
      },
      [v]
    ),
    _ = je.useCallback(
      function (b) {
        v && v.pause(b);
      },
      [v]
    ),
    O = [C, { sound: v, stop: T, pause: _, duration: S }];
  return O;
}
const aB = ({
    albumArt: e,
    primaryColor: t,
    musicName: n,
    musicFilePath: r,
  }) => {
    const i = { "--primary": t },
      o = bn(),
      [a, { stop: s, pause: l }] = oB(r),
      [u, c] = P.useState(!1),
      d = () => {
        u ? (c(!1), l()) : (c(!0), a());
      };
    return (
      P.useEffect(() => {
        s(), c(!1);
      }, [o]),
      M.jsx("div", {
        className: "h-full m-2 p-2 md:p-0 wrapper-bg-full",
        children: M.jsxs(ve.div, {
          className:
            "wrapper-bg-card flex items-center md:flex-col md:w-80 gap-5 md:p-2 rounded-lg sticky top-0",
          initial: { translateY: "0px" },
          children: [
            M.jsx("img", {
              className:
                "album-art rounded-lg w-24 h-24 md:w-auto md:h-auto pointer-events-none select-none",
              src: e,
            }),
            M.jsxs("div", {
              className: "flex p-2",
              children: [
                M.jsx("p", { className: "music-name text-sm", children: n }),
                M.jsx("button", {
                  className:
                    "play-pause-btn border-white border-2 rounded-full w-24 text-center active:border-black text-sm p-2",
                  style: i,
                  onClick: () => d(),
                  children: u ? "Pause" : "Play",
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  sB = "/assets/boy-girl-e8dd0870.jpg",
  lB = "/assets/sing-7bc5dc3a.jpg",
  uB = "/assets/Muskurane-0971f420.mp3",
  cB = "/assets/Mere Liye Tum Kaafi Ho-20fed085.mp3",
  fB = { ease: [0.43, 0.13, 0.23, 0.96], duration: 0.5 },
  dB = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: 0.5,
      },
    },
  },
  hB = { hidden: { opacity: 0 }, show: { opacity: 1 } },
  Lt = [
    {
      albumArt: sB,
      musicName: "Muskurane Ki Wajah ❤️ :)",
      messageInParas: [
        "Hey there Judy Walker, it's your birthday! Wishing you the happiest of birthdays filled with all the things you love and cherish the most.",
        "May this year be filled with lots of laughter, love, and unforgettable memories. I hope you get to spend your special day surrounded by the people you care about, doing all the things that make you happy.",
        "Whether it's eating cake, opening presents, or just chilling out, I hope you have the best time ever. Here's to another year of being awesome, slaying the game, and living your best life.",
        "You're a true gem, Judy, and I feel lucky to know you. Happy birthday and cheers to a fantastic year ahead!",
      ],
      musicFilePath: uB,
    },
    {
      albumArt: lB,
      musicName: "Mere Liye Tum Kaafi Ho ❤️ :)",
      messageInParas: [
        "Happy Birthday! On this special day, I hope that all of your dreams come true and that you are surrounded by love and happiness. You are a wonderful person who deserves nothing but the best, and I feel honored to be able to celebrate this special day with you.",
        "As you reflect on the past year and look forward to the next, I hope that you remember all of the amazing things that you have accomplished and the obstacles that you have overcome. Your determination and hard work inspire those around you, and I am grateful to have you in my life.",
        "May this birthday be just the beginning of a happy journey that will lead you to an even more amazing future. Enjoy your day to the fullest, and know that you are loved and appreciated by so many.",
        "Once again, happy birthday, Judy! Cheers to another year of laughter, love, and wonderful memories.",
        "Warm regards,",
        "Anon",
      ],
      musicFilePath: cB,
    },
  ],
  pB = () => {
    const e = Rs(),
      { id: t = 0 } = XP();
    if (Number(t) < 0 || Lt[Number(t)] == null)
      return M.jsx("p", { children: "Invalid Wish Message Id" });
    const { data: n, loading: r, error: i } = Y5(Lt[Number(t)].albumArt);
    return i
      ? M.jsx("h1", { children: "Invalid Wish Message Id" })
      : M.jsxs(ve.main, {
          initial: "initial",
          animate: "animate",
          exit: "exit",
          className:
            "wishes-wrapper h-screen w-screen flex flex-col justify-between items-center",
          children: [
            M.jsx(J5, {
              primaryColor: n == null ? void 0 : n.vibrant,
              secondaryColor: n == null ? void 0 : n.darkVibrant,
              messageDataArrayLength: Lt.length,
            }),
            M.jsxs(ve.div, {
              className:
                "lg:w-11/12 rounded-t-2xl md:rounded-t-xl flex md:flex-row flex-col-reverse",
              style: {
                backgroundColor: r ? "#fff" : n == null ? void 0 : n.vibrant,
              },
              initial: { y: "1000px" },
              animate: { y: "0px" },
              exit: { y: "1000px" },
              transition: fB,
              drag: "x",
              dragConstraints: { left: 0, right: 0 },
              dragElastic: 0.1,
              onDragEnd: (o, a) => {
                a.offset.x > 50
                  ? Number(t) > 0 &&
                    Number(t) < Lt.length &&
                    (e(`/wishes/${Number(t) - 1}`),
                    window.scrollTo({ top: 0, behavior: "smooth" }))
                  : a.offset.x < -50
                  ? Number(t) >= 0 &&
                    Number(t) < Lt.length - 1 &&
                    (e(`/wishes/${Number(t) + 1}`),
                    window.scrollTo({ top: 0, behavior: "smooth" }))
                  : console.log(null);
              },
              children: [
                M.jsx(ve.div, {
                  className: "md:w-1/2",
                  initial: "hidden",
                  animate: "show",
                  variants: dB,
                  children: Lt[Number(t)].messageInParas.map((o, a) =>
                    M.jsx(
                      ve.p,
                      {
                        className: "p-8 message text-3xl",
                        variants: hB,
                        children: o,
                      },
                      a + 2045
                    )
                  ),
                }),
                M.jsx("div", {
                  className:
                    "md:w-1/2 h-1/2 md:h-auto flex justify-center items-center",
                  children: M.jsx(aB, {
                    albumArt: Lt[Number(t)].albumArt,
                    primaryColor: n == null ? void 0 : n.vibrant,
                    musicName: Lt[Number(t)].musicName,
                    musicFilePath: Lt[Number(t)].musicFilePath,
                  }),
                }),
              ],
            }),
          ],
        });
  },
  mB = () => {
    const e = bn();
    return M.jsx(IE, {
      initial: !1,
      mode: "wait",
      children: M.jsxs(
        d_,
        {
          location: e,
          children: [
            M.jsx(bi, { path: "/", element: M.jsx(jE, {}) }),
            M.jsx(bi, { path: "/judy", element: M.jsx(NE, {}) }),
            M.jsx(bi, {
              path: "/wishes",
              element: M.jsx(c_, { to: "/wishes/0", replace: !0 }),
            }),
            M.jsx(bi, { path: "/wishes/:id", element: M.jsx(pB, {}) }),
          ],
        },
        e.pathname
      ),
    });
  };
function yB() {
  return M.jsx(g_, { children: M.jsx(mB, {}) });
}
ou.createRoot(document.getElementById("root")).render(
  M.jsx(je.StrictMode, { children: M.jsx(yB, {}) })
);
export { z as c, ms as g };
