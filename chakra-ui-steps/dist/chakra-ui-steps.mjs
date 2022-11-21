import { jsx as i, jsxs as R, Fragment as X } from "react/jsx-runtime";
import { chakra as L, forwardRef as Z, omitThemingProps as Y } from "@chakra-ui/system";
import { useMultiStyleConfig as W, Flex as ee, chakra as I, forwardRef as te, Spinner as oe, createStylesContext as ne, useMediaQuery as re } from "@chakra-ui/react";
import { Collapse as ie } from "@chakra-ui/transition";
import { dataAttr as V, cx as se } from "@chakra-ui/utils";
import { motion as T, AnimatePresence as ce } from "framer-motion";
import D, { memo as le, useMemo as E, useCallback as ae, Children as $, isValidElement as N, cloneElement as de } from "react";
import { mode as y, anatomy as he, darken as pe, lighten as me } from "@chakra-ui/theme-tools";
import { createIcon as q } from "@chakra-ui/icon";
const G = D.createContext({
  activeStep: 0
}), H = () => D.useContext(G), fe = ({
  value: e,
  children: s
}) => {
  const [n, r] = D.useState([]), l = e.state === "error", a = e.state === "loading", o = e.orientation === "vertical", t = e.orientation !== "vertical" && e.labelOrientation === "vertical";
  return i(G.Provider, {
    value: {
      ...e,
      widths: n,
      setWidths: r,
      isError: l,
      isLoading: a,
      isVertical: o,
      isLabelVertical: t
    },
    children: s
  });
}, ge = le(({
  index: e,
  isCompletedStep: s,
  children: n,
  isLastStep: r,
  hasLabel: l
}) => {
  const {
    connector: a,
    stepIconContainer: o
  } = W("Steps"), {
    isVertical: t,
    isLabelVertical: d,
    widths: c
  } = H(), p = () => t ? `calc(${o == null ? void 0 : o.width} / 2)` : l ? 0 : 2, g = E(() => {
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
      top: `calc(${o == null ? void 0 : o.height} / 2  - ${h.height} / 2)`,
      left: `calc(((${c == null ? void 0 : c[e]}px + ${o == null ? void 0 : o.width}) / 2) + 8px)`,
      right: `calc((${c == null ? void 0 : c[e + 1]}px - ${o == null ? void 0 : o.width}) / -2 + 8px)`
    } : h;
  }, [c, d, t, o == null ? void 0 : o.height, o == null ? void 0 : o.width]);
  return i(L.div, {
    __css: {
      ...g,
      ...a
    },
    "data-highlighted": V(s),
    children: t && n
  });
}), ue = q({
  viewBox: "0 0 14 14",
  path: i("g", {
    fill: "currentColor",
    children: i("polygon", {
      points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
    })
  })
}), xe = q({
  displayName: "CloseIcon",
  d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
}), O = T(ee), B = T(xe), Se = T(I.span), A = {
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
}, be = te((e, s) => {
  const {
    icon: n,
    iconLabel: r,
    label: l
  } = W("Steps", e), {
    isCompletedStep: a,
    isCurrentStep: o,
    isError: t,
    isLoading: d,
    isKeepError: c,
    icon: p,
    index: g,
    checkIcon: h
  } = e, C = {
    fontWeight: "medium",
    color: y("gray.900", "gray.100")(e),
    textAlign: "center",
    fontSize: "md",
    ...l
  }, m = E(() => p || null, [p]), u = E(() => h || ue, [h]);
  return E(() => {
    if (a)
      return t && c ? i(B, {
        color: "white",
        ...A,
        style: n
      }, "icon") : i(O, {
        ...A,
        children: i(u, {
          color: "white",
          style: n
        })
      }, "check-icon");
    if (o) {
      if (t)
        return i(B, {
          color: "white",
          ...A,
          style: n
        }, "icon");
      if (d)
        return i(oe, {
          width: n.width,
          height: n.height
        });
    }
    return m ? i(O, {
      ...A,
      children: i(m, {
        style: n
      })
    }, "step-icon") : i(Se, {
      ref: s,
      style: r,
      __css: C,
      ...A,
      children: (g || 0) + 1
    }, "label");
  }, [a, o, t, d, m, n]);
}), ye = ({
  isCurrentStep: e,
  opacity: s,
  label: n,
  description: r
}) => {
  const {
    labelContainer: l,
    label: a,
    description: o
  } = W("Steps"), {
    isLabelVertical: t
  } = H();
  return !!n || !!r ? R(I.div, {
    "aria-current": e ? "step" : void 0,
    __css: {
      textAlign: t ? "center" : "left",
      alignItems: t ? "center" : "flex-start",
      ...l
    },
    children: [!!n && i(I.span, {
      __css: {
        mx: t ? 0 : 2,
        mt: t ? 1 : 0,
        opacity: s,
        ...a
      },
      children: n
    }), !!r && i(I.span, {
      __css: {
        mx: t ? 0 : 2,
        mt: t ? 2 : 0,
        opacity: s,
        ...o
      },
      children: r
    })]
  }) : null;
}, Fe = Z((e, s) => {
  const {
    children: n,
    description: r,
    icon: l,
    state: a,
    checkIcon: o,
    index: t,
    isCompletedStep: d,
    isCurrentStep: c,
    isLastStep: p,
    isKeepError: g,
    label: h,
    ...C
  } = e, {
    isVertical: m,
    isError: u,
    isLoading: k,
    isLabelVertical: z,
    checkIcon: M,
    onClickStep: P,
    clickable: b,
    setWidths: f,
    stepCount: x
  } = H(), {
    step: j,
    stepContainer: F,
    stepIconContainer: S
  } = W("Steps"), v = c || d, w = v ? 1 : 0.8, J = (_) => {
    b && P && P(_);
  }, U = ae((_) => {
    _ && f && f((K) => K.length === x ? [_.offsetWidth || 0] : [...K, _.offsetWidth || 0]);
  }, [S == null ? void 0 : S.width, S == null ? void 0 : S.height]);
  return i(X, {
    children: R(L.li, {
      ref: s,
      onClick: () => J(t),
      "aria-disabled": !v,
      __css: {
        opacity: w,
        flexDirection: m ? "column" : "row",
        alignItems: m || z ? "flex-start" : "center",
        flex: p && !m ? "0 0 auto" : "1 0 auto",
        justifyContent: p && !m ? "flex-end" : "flex-start",
        _hover: {
          cursor: b ? "pointer" : "default"
        },
        ...j
      },
      ...C,
      children: [R(L.div, {
        ref: U,
        __css: {
          flexDirection: z ? "column" : "row",
          ...F
        },
        children: [i(L.div, {
          __css: S,
          "aria-current": v && g || c ? "step" : void 0,
          "data-invalid": V((v && g || c) && (u || a === "error")),
          "data-highlighted": V(d),
          "data-clickable": V(b),
          children: i(ce, {
            mode: "wait",
            children: i(be, {
              index: t,
              isError: u || a === "error",
              isLoading: k || a === "loading",
              isCurrentStep: c,
              isCompletedStep: d,
              isKeepError: g,
              icon: l,
              checkIcon: o != null ? o : M
            })
          })
        }), i(ye, {
          label: h,
          description: r,
          isCurrentStep: c,
          opacity: w
        })]
      }), i(ge, {
        index: t,
        isLastStep: p,
        hasLabel: !!h || !!r,
        isCompletedStep: d || !1,
        children: i(ie, {
          style: {
            width: "100%"
          },
          in: c,
          children: (c || d) && n
        })
      })]
    })
  });
}), Ce = Z((e, s) => {
  const [n] = ne("Steps"), {
    className: r,
    activeStep: l,
    children: a,
    orientation: o,
    state: t,
    responsive: d,
    checkIcon: c,
    onClickStep: p,
    labelOrientation: g,
    ...h
  } = Y(e), C = W("Steps", h), m = {
    ...C.steps
  }, u = $.toArray(a), k = u.length, z = () => l <= u.length ? $.map(u[l], (f) => {
    if (!!N(f))
      return $.map(f.props.children, (x) => x);
  }) : null, M = !!p, [P] = re("(max-width: 43em)", {
    fallback: !1
  }), b = P && d ? "vertical" : o;
  return i(n, {
    value: C,
    children: R(fe, {
      value: {
        activeStep: l,
        orientation: b,
        state: t,
        responsive: d,
        checkIcon: c,
        onClickStep: p,
        labelOrientation: g,
        clickable: M,
        colorScheme: e.colorScheme,
        stepCount: k
      },
      children: [i(L.ol, {
        ref: s,
        __css: {
          justifyContent: k === 1 ? "flex-end" : "space-between",
          flexDirection: b === "vertical" ? "column" : "row",
          ...m
        },
        className: se("chakra-steps", r),
        ...h,
        children: $.map(a, (f, x) => {
          var w;
          const j = (w = N(f) && f.props.isCompletedStep) != null ? w : x < l, F = x === k - 1, v = {
            index: x,
            isCompletedStep: j,
            isCurrentStep: x === l,
            isLastStep: F
          };
          return N(f) ? de(f, v) : null;
        })
      }), b === "horizontal" && z()]
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
  const [s, n] = D.useState(e);
  return {
    nextStep: () => {
      n((t) => t + 1);
    },
    prevStep: () => {
      n((t) => t - 1);
    },
    reset: () => {
      n(e);
    },
    setStep: (t) => {
      n(t);
    },
    activeStep: s
  };
}
const ve = he("steps").parts("connector", "description", "icon", "iconLabel", "label", "labelContainer", "step", "stepContainer", "stepIconContainer", "steps"), ke = {
  strokeWidth: "2px"
}, Q = (e) => ({
  color: y("gray.900", "gray.100")(e),
  fontWeight: "medium",
  textAlign: "center",
  fontSize: "md"
}), we = (e) => ({
  color: y("gray.800", "gray.200")(e),
  marginTop: "-2px",
  textAlign: "center",
  fontSize: "sm"
}), _e = (e) => {
  const {
    colorScheme: s
  } = e, n = y("gray.200", "gray.700")(e), r = y(`${s}.500`, `${s}.200`)(e);
  return {
    flex: 1,
    display: "flex",
    borderColor: n,
    transitionProperty: "border-color",
    transitionDuration: "normal",
    _highlighted: {
      borderColor: r
    }
  };
}, Ae = (e) => {
  const {
    colorScheme: s
  } = e, n = y("gray.200", "gray.700")(e), r = `${s}.500`;
  return {
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    bg: n,
    borderColor: n,
    transitionProperty: "background, border-color",
    transitionDuration: "normal",
    _activeStep: {
      bg: y(pe(n, 0.5), me(n, 0.5))(e),
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
  iconLabel: Q(e),
  label: Q(e),
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
}, ze = {
  size: "md",
  colorScheme: "green"
}, Te = {
  parts: ve.keys,
  baseStyle: Le,
  sizes: We,
  defaultProps: ze
};
export {
  Fe as Step,
  Ce as Steps,
  Te as StepsStyleConfig,
  Ne as useSteps
};
