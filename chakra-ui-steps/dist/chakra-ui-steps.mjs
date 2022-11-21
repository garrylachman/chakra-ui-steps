import { jsx as i, jsxs as E, Fragment as Y } from "react/jsx-runtime";
import { chakra as A, forwardRef as q, omitThemingProps as ee } from "@chakra-ui/system";
import { useMultiStyleConfig as W, Flex as te, chakra as $, forwardRef as ne, Spinner as oe, createStylesContext as re, useMediaQuery as ie } from "@chakra-ui/react";
import { Collapse as se } from "@chakra-ui/transition";
import { dataAttr as V, cx as ce } from "@chakra-ui/utils";
import { motion as T, AnimatePresence as le } from "framer-motion";
import R, { memo as ae, useMemo as L, useCallback as N, Children as P, isValidElement as F, cloneElement as de } from "react";
import { mode as b, anatomy as he, darken as pe, lighten as me } from "@chakra-ui/theme-tools";
import { createIcon as G } from "@chakra-ui/icon";
const J = R.createContext({
  activeStep: 0
}), H = () => R.useContext(J), fe = ({
  value: e,
  children: s
}) => {
  const [o, r] = R.useState([]), l = e.state === "error", a = e.state === "loading", n = e.orientation === "vertical", t = e.orientation !== "vertical" && e.labelOrientation === "vertical";
  return i(J.Provider, {
    value: {
      ...e,
      widths: o,
      setWidths: r,
      isError: l,
      isLoading: a,
      isVertical: n,
      isLabelVertical: t
    },
    children: s
  });
}, ge = ae(({
  index: e,
  isCompletedStep: s,
  children: o,
  isLastStep: r,
  hasLabel: l
}) => {
  const {
    connector: a,
    stepIconContainer: n
  } = W("Steps"), {
    isVertical: t,
    isLabelVertical: d,
    widths: c
  } = H(), p = () => t ? `calc(${n == null ? void 0 : n.width} / 2)` : l ? 0 : 2, g = L(() => {
    const h = {
      ms: p(),
      my: t ? 2 : 0,
      ps: t ? 4 : 0,
      me: t || d ? 0 : 2,
      height: t ? "auto" : "2px",
      alignSelf: t ? "stretch" : "auto",
      borderTopWidth: r || t ? 0 : "2px",
      borderInlineStartWidth: r || !t ? 0 : "2px",
      minHeight: r || !t ? "auto" : "1.5rem"
    };
    return d ? {
      ...h,
      position: "absolute",
      top: `calc(${n == null ? void 0 : n.height} / 2  - ${h.height} / 2)`,
      left: `calc(((${c == null ? void 0 : c[e]}px + ${n == null ? void 0 : n.width}) / 2) + 8px)`,
      right: `calc((${c == null ? void 0 : c[e + 1]}px - ${n == null ? void 0 : n.width}) / -2 + 8px)`
    } : h;
  }, [c, d, t, n == null ? void 0 : n.height, n == null ? void 0 : n.width]);
  return i(A.div, {
    __css: {
      ...g,
      ...a
    },
    "data-highlighted": V(s),
    children: t && o
  });
}), ue = G({
  viewBox: "0 0 14 14",
  path: i("g", {
    fill: "currentColor",
    children: i("polygon", {
      points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
    })
  })
}), xe = G({
  displayName: "CloseIcon",
  d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
}), B = T(te), Q = T(xe), Se = T($.span), _ = {
  transition: {
    duration: 0.25
  },
  exit: {
    scale: 0.5,
    opacity: 0
  },
  initial: {
    scale: 0.5,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1
  }
}, be = ne((e, s) => {
  const {
    icon: o,
    iconLabel: r,
    label: l
  } = W("Steps", e), {
    isCompletedStep: a,
    isCurrentStep: n,
    isError: t,
    isLoading: d,
    isKeepError: c,
    icon: p,
    index: g,
    checkIcon: h
  } = e, y = {
    fontWeight: "medium",
    color: b("gray.900", "gray.100")(e),
    textAlign: "center",
    fontSize: "md",
    ...l
  }, m = L(() => p || null, [p]), u = L(() => h || ue, [h]);
  return L(() => {
    if (a)
      return t && c ? i(Q, {
        color: "white",
        ..._,
        style: o
      }, "icon") : i(B, {
        ..._,
        children: i(u, {
          color: "white",
          style: o
        })
      }, "check-icon");
    if (n) {
      if (t)
        return i(Q, {
          color: "white",
          ..._,
          style: o
        }, "icon");
      if (d)
        return i(oe, {
          width: o.width,
          height: o.height
        });
    }
    return m ? i(B, {
      ..._,
      children: i(m, {
        style: o
      })
    }, "step-icon") : i(Se, {
      ref: s,
      style: r,
      __css: y,
      ..._,
      children: (g || 0) + 1
    }, "label");
  }, [a, n, t, d, m, o]);
}), ye = ({
  isCurrentStep: e,
  opacity: s,
  label: o,
  description: r
}) => {
  const {
    labelContainer: l,
    label: a,
    description: n
  } = W("Steps"), {
    isLabelVertical: t
  } = H();
  return !!o || !!r ? E($.div, {
    "aria-current": e ? "step" : void 0,
    __css: {
      textAlign: t ? "center" : "left",
      alignItems: t ? "center" : "flex-start",
      ...l
    },
    children: [!!o && i($.span, {
      __css: {
        mx: t ? 0 : 2,
        mt: t ? 1 : 0,
        opacity: s,
        ...a
      },
      children: o
    }), !!r && i($.span, {
      __css: {
        mx: t ? 0 : 2,
        mt: t ? 2 : 0,
        opacity: s,
        ...n
      },
      children: r
    })]
  }) : null;
}, Fe = q((e, s) => {
  const {
    children: o,
    description: r,
    icon: l,
    state: a,
    checkIcon: n,
    index: t,
    isCompletedStep: d,
    isCurrentStep: c,
    isLastStep: p,
    isKeepError: g,
    label: h,
    ...y
  } = e, {
    isVertical: m,
    isError: u,
    isLoading: C,
    isLabelVertical: I,
    checkIcon: D,
    onClickStep: z,
    clickable: S,
    setWidths: f,
    stepCount: x
  } = H(), {
    step: M,
    stepContainer: j,
    stepIconContainer: K
  } = W("Steps"), v = c || d, k = v ? 1 : 0.8, U = (w) => {
    S && z && z(w);
  }, X = N((w) => {
    w && f && f((O) => O.length === x ? [w.offsetWidth || 0] : [...O, w.offsetWidth || 0]);
  }, [x]);
  return i(Y, {
    children: E(A.li, {
      ref: s,
      onClick: () => U(t),
      "aria-disabled": !v,
      __css: {
        opacity: k,
        flexDirection: m ? "column" : "row",
        alignItems: m || I ? "flex-start" : "center",
        flex: p && !m ? "0 0 auto" : "1 0 auto",
        justifyContent: p && !m ? "flex-end" : "flex-start",
        _hover: {
          cursor: S ? "pointer" : "default"
        },
        ...M
      },
      ...y,
      children: [E(A.div, {
        ref: X,
        __css: {
          flexDirection: I ? "column" : "row",
          ...j
        },
        children: [i(A.div, {
          __css: K,
          "aria-current": v && g || c ? "step" : void 0,
          "data-invalid": V((v && g || c) && (u || a === "error")),
          "data-highlighted": V(d),
          "data-clickable": V(S),
          children: i(le, {
            mode: "wait",
            children: i(be, {
              index: t,
              isError: u || a === "error",
              isLoading: C || a === "loading",
              isCurrentStep: c,
              isCompletedStep: d,
              isKeepError: g,
              icon: l,
              checkIcon: n != null ? n : D
            })
          })
        }), i(ye, {
          label: h,
          description: r,
          isCurrentStep: c,
          opacity: k
        })]
      }), i(ge, {
        index: t,
        isLastStep: p,
        hasLabel: !!h || !!r,
        isCompletedStep: d || !1,
        children: i(se, {
          style: {
            width: "100%"
          },
          in: c,
          children: (c || d) && o
        })
      })]
    })
  });
}), Ce = q((e, s) => {
  const [o] = re("Steps"), {
    className: r,
    activeStep: l,
    children: a,
    orientation: n,
    state: t,
    responsive: d,
    checkIcon: c,
    onClickStep: p,
    labelOrientation: g,
    ...h
  } = ee(e), y = W("Steps", h), m = {
    ...y.steps
  }, u = L(() => P.toArray(a), [a]), C = u.length, I = N(() => l <= u.length ? P.map(u[l], (f) => {
    if (!!F(f))
      return P.map(f.props.children, (x) => x);
  }) : null, [l, u]), D = !!p, [z] = ie("(max-width: 43em)"), S = z && d ? "vertical" : n;
  return i(o, {
    value: y,
    children: E(fe, {
      value: {
        activeStep: l,
        orientation: S,
        state: t,
        responsive: d,
        checkIcon: c,
        onClickStep: p,
        labelOrientation: g,
        clickable: D,
        colorScheme: e.colorScheme,
        stepCount: C
      },
      children: [i(A.ol, {
        ref: s,
        __css: {
          justifyContent: C === 1 ? "flex-end" : "space-between",
          flexDirection: S === "vertical" ? "column" : "row",
          ...m
        },
        className: ce("chakra-steps", r),
        ...h,
        children: P.map(a, N((f, x) => {
          var k;
          const M = (k = F(f) && f.props.isCompletedStep) != null ? k : x < l, j = x === C - 1, v = {
            index: x,
            isCompletedStep: M,
            isCurrentStep: x === l,
            isLastStep: j
          };
          return F(f) ? de(f, v) : null;
        }, [l, C]))
      }), S === "horizontal" && I()]
    })
  });
});
Ce.defaultProps = {
  activeStep: 0,
  colorScheme: "green",
  orientation: "horizontal",
  responsive: !0
};
function Ne({
  initialStep: e
}) {
  const [s, o] = R.useState(e);
  return {
    nextStep: () => {
      o((t) => t + 1);
    },
    prevStep: () => {
      o((t) => t - 1);
    },
    reset: () => {
      o(e);
    },
    setStep: (t) => {
      o(t);
    },
    activeStep: s
  };
}
const ve = he("steps").parts("connector", "description", "icon", "iconLabel", "label", "labelContainer", "step", "stepContainer", "stepIconContainer", "steps"), ke = {
  strokeWidth: "2px"
}, Z = (e) => ({
  color: b("gray.900", "gray.100")(e),
  fontWeight: "medium",
  textAlign: "center",
  fontSize: "md"
}), we = (e) => ({
  color: b("gray.800", "gray.200")(e),
  marginTop: "-2px",
  textAlign: "center",
  fontSize: "sm"
}), _e = (e) => {
  const {
    colorScheme: s
  } = e, o = b("gray.200", "gray.700")(e), r = b(`${s}.500`, `${s}.200`)(e);
  return {
    flex: 1,
    display: "flex",
    borderColor: o,
    transitionProperty: "border-color",
    transitionDuration: "normal",
    _highlighted: {
      borderColor: r
    }
  };
}, Ae = (e) => {
  const {
    colorScheme: s
  } = e, o = b("gray.200", "gray.700")(e), r = `${s}.500`;
  return {
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    bg: o,
    borderColor: o,
    transitionProperty: "background, border-color",
    transitionDuration: "normal",
    _activeStep: {
      bg: b(pe(o, 0.5), me(o, 0.5))(e),
      borderColor: r,
      _invalid: {
        bg: "red.500",
        borderColor: "red.500"
      }
    },
    _highlighted: {
      bg: r,
      borderColor: r
    },
    "&[data-clickable]:hover": {
      borderColor: r
    }
  };
}, Le = (e) => ({
  connector: _e(e),
  description: we(e),
  icon: ke,
  iconLabel: Z(e),
  label: Z(e),
  labelContainer: {
    display: "flex",
    flexDir: "column",
    justifyContent: "center"
  },
  step: {
    display: "flex",
    position: "relative"
  },
  stepContainer: {
    display: "flex",
    alignItems: "center"
  },
  stepIconContainer: Ae(e),
  steps: {
    fontFamily: "heading",
    textAlign: "center",
    width: "100%",
    display: "flex",
    flex: 1
  }
}), We = {
  sm: {
    stepIconContainer: {
      width: "32px",
      height: "32px",
      borderWidth: "2px"
    },
    icon: {
      width: "14px",
      height: "14px"
    },
    label: {
      fontWeight: "medium",
      textAlign: "center",
      fontSize: "sm"
    },
    description: {
      fontWeight: "300",
      textAlign: "center",
      fontSize: "xs"
    }
  },
  md: {
    stepIconContainer: {
      width: "40px",
      height: "40px",
      borderWidth: "2px"
    },
    icon: {
      width: "18px",
      height: "18px"
    },
    label: {
      fontWeight: "medium",
      textAlign: "center",
      fontSize: "md"
    },
    description: {
      fontWeight: "300",
      textAlign: "center",
      fontSize: "sm"
    }
  },
  lg: {
    stepIconContainer: {
      width: "48px",
      height: "48px",
      borderWidth: "2px"
    },
    icon: {
      width: "22px",
      height: "22px"
    },
    label: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "lg"
    },
    description: {
      fontWeight: "300",
      textAlign: "center",
      fontSize: "md"
    }
  }
}, Ie = {
  size: "md",
  colorScheme: "green"
}, Te = {
  parts: ve.keys,
  baseStyle: Le,
  sizes: We,
  defaultProps: Ie
};
export {
  Fe as Step,
  Ce as Steps,
  Te as StepsStyleConfig,
  Ne as useSteps
};
