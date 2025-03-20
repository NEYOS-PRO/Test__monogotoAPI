import __nuxt_component_0$3 from './index-l7dAlW1Z.mjs';
import * as e$2 from 'vue';
import { ref, computed, watch, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, defineComponent, resolveComponent, resolveDynamicComponent, renderSlot, createCommentVNode, Transition, toRef, toRaw, onMounted, onUnmounted, watchEffect, nextTick, provide, h as h$1, inject, useAttrs, toValue, getCurrentInstance, normalizeClass, reactive, useId as useId$1, Teleport, cloneVNode, shallowRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderSlot, ssrRenderStyle, ssrLooseContain, ssrGetDynamicModelProps } from 'vue/server-renderer';
import { _ as _export_sfc, c as useRuntimeConfig, m as mergeConfig, t as twMerge, b as appConfig, g as get, a as useAppConfig, o as omit } from './server.mjs';
import { twJoin } from 'tailwind-merge';
import { useVirtualizer } from '@tanstack/vue-virtual';
import { computedAsync, useDebounceFn, useVModel } from '@vueuse/core';
import { o as defu, C as isEqual, D as diff } from '../_/nitro.mjs';
import { _ as __nuxt_component_0$4 } from './nuxt-link-tBTbBUdk.mjs';
import { sub, format, isSameDay } from 'date-fns';
import { DatePicker } from 'v-calendar';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'node:http';
import 'node:https';
import '@unhead/shared';
import 'unhead';
import 'vue-router';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';

function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}

const nuxtLinkProps = {
  to: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  href: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  // Attributes
  target: {
    type: String,
    default: void 0,
    required: false
  },
  rel: {
    type: String,
    default: void 0,
    required: false
  },
  noRel: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Prefetching
  prefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  noPrefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Styling
  activeClass: {
    type: String,
    default: void 0,
    required: false
  },
  exactActiveClass: {
    type: String,
    default: void 0,
    required: false
  },
  prefetchedClass: {
    type: String,
    default: void 0,
    required: false
  },
  // Vue Router's `<RouterLink>` additional props
  replace: {
    type: Boolean,
    default: void 0,
    required: false
  },
  ariaCurrentValue: {
    type: String,
    default: void 0,
    required: false
  },
  // Edge cases handling
  external: {
    type: Boolean,
    default: void 0,
    required: false
  }
};
const getNuxtLinkProps = (props) => {
  const keys = Object.keys(nuxtLinkProps);
  return keys.reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
};
const _sfc_main$c = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: [Number, String],
      required: false,
      default: null
    },
    customize: {
      type: Function,
      required: false,
      default: null
    }
  }
});
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$3;
  _push(ssrRenderComponent(_component_Icon, mergeProps(_ctx.$props, _attrs), null, _parent));
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$b]]);
const useUI = (key, $ui, $config, $wrapperClass, withAppConfig = false) => {
  const $attrs = useAttrs();
  const appConfig2 = useAppConfig();
  const ui = computed(() => {
    var _a;
    const _ui = toValue($ui);
    const _config = toValue($config);
    const _wrapperClass = toValue($wrapperClass);
    return mergeConfig(
      (_ui == null ? void 0 : _ui.strategy) || ((_a = appConfig2.ui) == null ? void 0 : _a.strategy),
      _wrapperClass ? { wrapper: _wrapperClass } : {},
      _ui || {},
      withAppConfig ? get(appConfig2.ui, key, {}) : {},
      _config || {}
    );
  });
  const attrs = computed(() => omit($attrs, ["class"]));
  return {
    ui,
    attrs
  };
};
const table = {
  wrapper: "relative overflow-x-auto",
  base: "min-w-full table-fixed",
  divide: "divide-y divide-gray-300 dark:divide-gray-700",
  thead: "relative",
  tbody: "divide-y divide-gray-200 dark:divide-gray-800",
  caption: "sr-only",
  tr: {
    base: "",
    selected: "bg-gray-50 dark:bg-gray-800/50",
    expanded: "bg-gray-50 dark:bg-gray-800/50",
    active: "hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"
  },
  th: {
    base: "text-left rtl:text-right",
    padding: "px-4 py-3.5",
    color: "text-gray-900 dark:text-white",
    font: "font-semibold",
    size: "text-sm"
  },
  td: {
    base: "whitespace-nowrap",
    padding: "px-4 py-4",
    color: "text-gray-500 dark:text-gray-400",
    font: "",
    size: "text-sm"
  },
  checkbox: {
    padding: "ps-4"
  },
  loadingState: {
    wrapper: "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"
  },
  emptyState: {
    wrapper: "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"
  },
  expand: {
    icon: "transform transition-transform duration-200"
  },
  progress: {
    wrapper: "absolute inset-x-0 -bottom-[0.5px] p-0"
  },
  default: {
    sortAscIcon: "i-heroicons-bars-arrow-up-20-solid",
    sortDescIcon: "i-heroicons-bars-arrow-down-20-solid",
    sortButton: {
      icon: "i-heroicons-arrows-up-down-20-solid",
      trailing: true,
      square: true,
      color: "gray",
      variant: "ghost",
      class: "-m-1.5"
    },
    expandButton: {
      icon: "i-heroicons-chevron-down",
      color: "gray",
      variant: "ghost",
      size: "xs",
      class: "-my-1.5 align-middle"
    },
    checkbox: {
      color: "primary"
    },
    progress: {
      color: "primary",
      animation: "carousel"
    },
    loadingState: {
      icon: "i-heroicons-arrow-path-20-solid",
      label: "Loading..."
    },
    emptyState: {
      icon: "i-heroicons-circle-stack-20-solid",
      label: "No items."
    }
  }
};
const avatar = {
  wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
  background: "bg-gray-100 dark:bg-gray-800",
  rounded: "rounded-full",
  text: "font-medium leading-none text-gray-900 dark:text-white truncate",
  placeholder: "font-medium leading-none text-gray-500 dark:text-gray-400 truncate",
  size: {
    "3xs": "h-4 w-4 text-[8px]",
    "2xs": "h-5 w-5 text-[10px]",
    "xs": "h-6 w-6 text-xs",
    "sm": "h-8 w-8 text-sm",
    "md": "h-10 w-10 text-base",
    "lg": "h-12 w-12 text-lg",
    "xl": "h-14 w-14 text-xl",
    "2xl": "h-16 w-16 text-2xl",
    "3xl": "h-20 w-20 text-3xl"
  },
  chip: {
    base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",
    background: "bg-{color}-500 dark:bg-{color}-400",
    position: {
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-left": "bottom-0 left-0"
    },
    size: {
      "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
      "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
      "xs": "h-1.5 min-w-[0.375rem] text-[6px] p-px",
      "sm": "h-2 min-w-[0.5rem] text-[7px] p-0.5",
      "md": "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
      "lg": "h-3 min-w-[0.75rem] text-[10px] p-0.5",
      "xl": "h-3.5 min-w-[0.875rem] text-[11px] p-1",
      "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
      "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1"
    }
  },
  icon: {
    base: "text-gray-500 dark:text-gray-400 flex-shrink-0",
    size: {
      "3xs": "h-2 w-2",
      "2xs": "h-2.5 w-2.5",
      "xs": "h-3 w-3",
      "sm": "h-4 w-4",
      "md": "h-5 w-5",
      "lg": "h-6 w-6",
      "xl": "h-7 w-7",
      "2xl": "h-8 w-8",
      "3xl": "h-10 w-10"
    }
  },
  default: {
    size: "sm",
    icon: null,
    chipColor: null,
    chipPosition: "top-right"
  }
};
const button = {
  base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",
  font: "font-medium",
  rounded: "rounded-md",
  truncate: "text-left break-all line-clamp-1",
  block: "w-full flex justify-center items-center",
  inline: "inline-flex items-center",
  size: {
    "2xs": "text-xs",
    "xs": "text-xs",
    "sm": "text-sm",
    "md": "text-sm",
    "lg": "text-sm",
    "xl": "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    "xs": "gap-x-1.5",
    "sm": "gap-x-1.5",
    "md": "gap-x-2",
    "lg": "gap-x-2.5",
    "xl": "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    "xs": "px-2.5 py-1.5",
    "sm": "px-2.5 py-1.5",
    "md": "px-3 py-2",
    "lg": "px-3.5 py-2.5",
    "xl": "px-3.5 py-2.5"
  },
  square: {
    "2xs": "p-1",
    "xs": "p-1.5",
    "sm": "p-1.5",
    "md": "p-2",
    "lg": "p-2.5",
    "xl": "p-2.5"
  },
  color: {
    white: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    gray: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    black: {
      solid: "shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    }
  },
  variant: {
    solid: "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
    outline: "ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    soft: "text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    ghost: "text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    link: "text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"
  },
  icon: {
    base: "flex-shrink-0",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      "xs": "h-4 w-4",
      "sm": "h-5 w-5",
      "md": "h-5 w-5",
      "lg": "h-5 w-5",
      "xl": "h-6 w-6"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const arrow$1 = {
  base: "invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",
  ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",
  rounded: "before:rounded-sm",
  background: "before:bg-gray-200 dark:before:bg-gray-800",
  shadow: "before:shadow",
  placement: `group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1`
};
({
  arrow: {
    ...arrow$1
  }
});
const progress = {
  wrapper: "w-full flex flex-col gap-2",
  indicator: {
    container: {
      base: "flex flex-row justify-end",
      width: "min-w-fit",
      transition: "transition-all"
    },
    align: "text-end",
    width: "w-fit",
    color: "text-gray-400 dark:text-gray-500",
    size: {
      "2xs": "text-xs",
      "xs": "text-xs",
      "sm": "text-sm",
      "md": "text-sm",
      "lg": "text-sm",
      "xl": "text-base",
      "2xl": "text-base"
    }
  },
  progress: {
    base: "block appearance-none border-none overflow-hidden",
    width: "w-full [&::-webkit-progress-bar]:w-full",
    size: {
      "2xs": "h-px",
      "xs": "h-0.5",
      "sm": "h-1",
      "md": "h-2",
      "lg": "h-3",
      "xl": "h-4",
      "2xl": "h-5"
    },
    rounded: "rounded-full [&::-webkit-progress-bar]:rounded-full",
    track: "[&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:dark:bg-gray-700 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:dark:bg-gray-700",
    bar: "[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full",
    color: "text-{color}-500 dark:text-{color}-400",
    background: "[&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current",
    indeterminate: {
      base: "indeterminate:relative",
      rounded: "indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
    }
  },
  steps: {
    base: "grid grid-cols-1",
    color: "text-{color}-500 dark:text-{color}-400",
    size: {
      "2xs": "text-xs",
      "xs": "text-xs",
      "sm": "text-sm",
      "md": "text-sm",
      "lg": "text-sm",
      "xl": "text-base",
      "2xl": "text-base"
    }
  },
  step: {
    base: "transition-all opacity-0 truncate row-start-1 col-start-1",
    align: "text-end",
    active: "opacity-100",
    first: "text-gray-500 dark:text-gray-400"
  },
  animation: {
    "carousel": "bar-animation-carousel",
    "carousel-inverse": "bar-animation-carousel-inverse",
    "swing": "bar-animation-swing",
    "elastic": "bar-animation-elastic"
  },
  default: {
    color: "primary",
    size: "md",
    animation: "carousel"
  }
};
const input = {
  wrapper: "relative",
  base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
  form: "form-input",
  rounded: "rounded-md",
  placeholder: "placeholder-gray-400 dark:placeholder-gray-500",
  file: {
    base: "file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none"
  },
  size: {
    "2xs": "text-xs",
    "xs": "text-xs",
    "sm": "text-sm",
    "md": "text-sm",
    "lg": "text-sm",
    "xl": "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    "xs": "gap-x-1.5",
    "sm": "gap-x-1.5",
    "md": "gap-x-2",
    "lg": "gap-x-2.5",
    "xl": "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    "xs": "px-2.5 py-1.5",
    "sm": "px-2.5 py-1.5",
    "md": "px-3 py-2",
    "lg": "px-3.5 py-2.5",
    "xl": "px-3.5 py-2.5"
  },
  leading: {
    padding: {
      "2xs": "ps-7",
      "xs": "ps-8",
      "sm": "ps-9",
      "md": "ps-10",
      "lg": "ps-11",
      "xl": "ps-12"
    }
  },
  trailing: {
    padding: {
      "2xs": "pe-7",
      "xs": "pe-8",
      "sm": "pe-9",
      "md": "pe-10",
      "lg": "pe-11",
      "xl": "pe-12"
    }
  },
  color: {
    white: {
      outline: "shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    },
    gray: {
      outline: "shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    }
  },
  variant: {
    outline: "shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",
    none: "bg-transparent focus:ring-0 focus:shadow-none"
  },
  icon: {
    base: "flex-shrink-0 text-gray-400 dark:text-gray-500",
    color: "text-{color}-500 dark:text-{color}-400",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      "xs": "h-4 w-4",
      "sm": "h-5 w-5",
      "md": "h-5 w-5",
      "lg": "h-5 w-5",
      "xl": "h-6 w-6"
    },
    leading: {
      wrapper: "absolute inset-y-0 start-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "px-2",
        "xs": "px-2.5",
        "sm": "px-2.5",
        "md": "px-3",
        "lg": "px-3.5",
        "xl": "px-3.5"
      }
    },
    trailing: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "px-2",
        "xs": "px-2.5",
        "sm": "px-2.5",
        "md": "px-3",
        "lg": "px-3.5",
        "xl": "px-3.5"
      }
    }
  },
  default: {
    size: "sm",
    color: "white",
    variant: "outline",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const inputMenu = {
  container: "z-20 group",
  trigger: "flex items-center w-full",
  width: "w-full",
  height: "max-h-60",
  base: "relative focus:outline-none overflow-y-auto scroll-py-1",
  background: "bg-white dark:bg-gray-800",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  padding: "p-1",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
  option: {
    base: "cursor-default select-none relative flex items-center justify-between gap-1",
    rounded: "rounded-md",
    padding: "px-1.5 py-1.5",
    size: "text-sm",
    color: "text-gray-900 dark:text-white",
    container: "flex items-center gap-1.5 min-w-0",
    active: "bg-gray-100 dark:bg-gray-900",
    inactive: "",
    selected: "pe-7",
    disabled: "cursor-not-allowed opacity-50",
    empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
    icon: {
      base: "flex-shrink-0 h-5 w-5",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-400 dark:text-gray-500"
    },
    selectedIcon: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      padding: "pe-2",
      base: "h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"
    },
    avatar: {
      base: "flex-shrink-0",
      size: "2xs"
    },
    chip: {
      base: "flex-shrink-0 w-2 h-2 mx-1 rounded-full"
    }
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid",
    empty: {
      label: "No options."
    },
    optionEmpty: {
      label: 'No results for "{query}".'
    }
  },
  arrow: {
    ...arrow$1,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
const select = {
  ...input,
  form: "form-select",
  placeholder: "text-gray-400 dark:text-gray-500",
  default: {
    size: "sm",
    color: "white",
    variant: "outline",
    loadingIcon: "i-heroicons-arrow-path-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid"
  }
};
const selectMenu = {
  ...inputMenu,
  select: "inline-flex items-center text-left cursor-default",
  input: "block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",
  required: "absolute inset-0 w-px opacity-0 cursor-default",
  label: "block truncate",
  option: {
    ...inputMenu.option,
    create: "block truncate"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    clearSearchOnClose: false,
    showCreateOptionWhen: "empty",
    searchablePlaceholder: {
      label: "Search..."
    },
    empty: {
      label: "No options."
    },
    optionEmpty: {
      label: 'No results for "{query}".'
    }
  },
  arrow: {
    ...arrow$1,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
const checkbox = {
  wrapper: "relative flex items-start",
  container: "flex items-center h-5",
  base: "h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",
  form: "form-checkbox",
  rounded: "rounded",
  color: "text-{color}-500 dark:text-{color}-400",
  background: "bg-white dark:bg-gray-900",
  border: "border border-gray-300 dark:border-gray-700",
  ring: "focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
  inner: "ms-3 flex flex-col",
  label: "text-sm font-medium text-gray-700 dark:text-gray-200",
  required: "text-sm text-red-500 dark:text-red-400",
  help: "text-sm text-gray-500 dark:text-gray-400",
  default: {
    color: "primary"
  }
};
const card = {
  base: "",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6"
  },
  header: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:px-6"
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6"
  }
};
const pagination = {
  wrapper: "flex items-center -space-x-px",
  base: "",
  rounded: "first:rounded-s-md last:rounded-e-md",
  default: {
    size: "sm",
    activeButton: {
      color: "primary"
    },
    inactiveButton: {
      color: "white"
    },
    firstButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-double-left-20-solid"
    },
    lastButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-double-right-20-solid"
    },
    prevButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-left-20-solid"
    },
    nextButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-right-20-solid"
    }
  }
};
const modal = {
  wrapper: "relative z-50",
  inner: "fixed inset-0 overflow-y-auto",
  container: "flex min-h-full items-end sm:items-center justify-center text-center",
  padding: "p-4 sm:p-0",
  margin: "sm:my-8",
  base: "relative text-left rtl:text-right flex flex-col",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
    transition: {
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "rounded-lg",
  shadow: "shadow-xl",
  width: "w-full sm:max-w-lg",
  height: "",
  fullscreen: "w-screen h-screen",
  // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
  transition: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }
};
({
  arrow: {
    ...arrow$1
  }
});
const popover = {
  wrapper: "relative",
  container: "z-50 group",
  trigger: "inline-flex w-full",
  width: "",
  background: "bg-white dark:bg-gray-900",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  base: "overflow-hidden focus:outline-none relative",
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transition ease-out duration-200",
    enterFromClass: "opacity-0 translate-y-1",
    enterToClass: "opacity-100 translate-y-0",
    leaveActiveClass: "transition ease-in duration-150",
    leaveFromClass: "opacity-100 translate-y-0",
    leaveToClass: "opacity-0 translate-y-1"
  },
  overlay: {
    base: "fixed inset-0 transition-opacity z-50",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    transition: {
      enterActiveClass: "ease-out duration-200",
      enterFromClass: "opacity-0",
      enterToClass: "opacity-100",
      leaveActiveClass: "ease-in duration-150",
      leaveFromClass: "opacity-100",
      leaveToClass: "opacity-0"
    }
  },
  popper: {
    strategy: "fixed"
  },
  default: {
    openDelay: 0,
    closeDelay: 0
  },
  arrow: arrow$1
};
const config$9 = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const _sfc_main$b = defineComponent({
  components: {
    UIcon: __nuxt_component_7
  },
  inheritAttrs: false,
  props: {
    as: {
      type: [String, Object],
      default: "img"
    },
    src: {
      type: [String, Boolean],
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$9.default.icon
    },
    size: {
      type: String,
      default: () => config$9.default.size,
      validator(value) {
        return Object.keys(config$9.size).includes(value);
      }
    },
    chipColor: {
      type: String,
      default: () => config$9.default.chipColor,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    chipPosition: {
      type: String,
      default: () => config$9.default.chipPosition,
      validator(value) {
        return Object.keys(config$9.chip.position).includes(value);
      }
    },
    chipText: {
      type: [String, Number],
      default: null
    },
    imgClass: {
      type: String,
      default: ""
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("avatar", toRef(props, "ui"), config$9);
    const url = computed(() => {
      if (typeof props.src === "boolean") {
        return null;
      }
      return props.src;
    });
    const placeholder = computed(() => {
      return (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2);
    });
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        (error.value || !url.value) && ui.value.background,
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.class);
    });
    const imgClass = computed(() => {
      return twMerge(twJoin(
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.imgClass);
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[props.size]
      );
    });
    const chipClass = computed(() => {
      return twJoin(
        ui.value.chip.base,
        ui.value.chip.size[props.size],
        ui.value.chip.position[props.chipPosition],
        ui.value.chip.background.replaceAll("{color}", props.chipColor)
      );
    });
    const error = ref(false);
    watch(() => props.src, () => {
      if (error.value) {
        error.value = false;
      }
    });
    function onError() {
      error.value = true;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      imgClass,
      iconClass,
      chipClass,
      url,
      placeholder,
      error,
      onError
    };
  }
});
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_7;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}>`);
  if (_ctx.url && !_ctx.error) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      class: _ctx.imgClass,
      alt: _ctx.alt,
      src: _ctx.url
    }, _ctx.attrs, { onError: _ctx.onError }), null), _parent);
  } else if (_ctx.text) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.text)}">${ssrInterpolate(_ctx.text)}</span>`);
  } else if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else if (_ctx.placeholder) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.placeholder)}">${ssrInterpolate(_ctx.placeholder)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.chipColor) {
    _push(`<span class="${ssrRenderClass(_ctx.chipClass)}">${ssrInterpolate(_ctx.chipText)}</span>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Avatar.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$a]]);
function d$5(u2, e2, r2) {
  let i2 = ref(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i2.value), function(t2) {
    return f2.value || (i2.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
function t$5(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o$5() {
  let a2 = [], s3 = { addEventListener(e2, t2, r2, i2) {
    return e2.addEventListener(t2, r2, i2), s3.add(() => e2.removeEventListener(t2, r2, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    s3.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    s3.requestAnimationFrame(() => {
      s3.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    s3.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$5(() => {
      t2.current && e2[0]();
    }), s3.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, r2) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: r2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o$5();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0) for (let r2 of a2.splice(t2, 1)) r2();
    };
  }, dispose() {
    for (let e2 of a2.splice(0)) e2();
  } };
  return s3;
}
function i$7() {
  let o2 = o$5();
  return onUnmounted(() => o2.dispose()), o2;
}
function t$4() {
  let e2 = i$7();
  return (o2) => {
    e2.dispose(), e2.nextFrame(o2);
  };
}
var r$2;
let n$4 = Symbol("headlessui.useid"), o$4 = 0;
const i$6 = (r$2 = e$2.useId) != null ? r$2 : function() {
  return e$2.inject(n$4, () => `${++o$4}`)();
};
function s$5(t2) {
  e$2.provide(n$4, t2);
}
function o$3(e2) {
  var l2;
  if (e2 == null || e2.value == null) return null;
  let n2 = (l2 = e2.value.$el) != null ? l2 : e2.value;
  return n2 instanceof Node ? n2 : null;
}
function u$7(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$7), t2;
}
var i$5 = Object.defineProperty;
var d$4 = (t2, e2, r2) => e2 in t2 ? i$5(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
var n$3 = (t2, e2, r2) => (d$4(t2, typeof e2 != "symbol" ? e2 + "" : e2, r2), r2);
let s$4 = class s {
  constructor() {
    n$3(this, "current", this.detect());
    n$3(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
};
let c$3 = new s$4();
function i$4(r2) {
  if (c$3.isServer) return null;
  if (r2 instanceof Node) return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n2 = o$3(r2);
    if (n2) return n2.ownerDocument;
  }
  return void 0;
}
let c$2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$4 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$4 || {}), T$2 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$2 || {}), F$1 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F$1 || {});
function E$3(e2 = (void 0).body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c$2)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function w$4(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = i$4(e2)) == null ? void 0 : t2.body) ? false : u$7(r2, { [0]() {
    return e2.matches(c$2);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(c$2)) return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
var y$2 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$2 || {});
function S$1(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let H$2 = ["textarea", "input"].join(",");
function I(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, H$2)) != null ? t2 : false;
}
function O(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o2 = r2(t2), i2 = r2(l2);
    if (o2 === null || i2 === null) return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P(e2, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
  var m2;
  let i2 = (m2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : void 0 : e2 == null ? void 0 : e2.ownerDocument) != null ? m2 : void 0, n2 = Array.isArray(e2) ? t2 ? O(e2) : e2 : E$3(e2);
  o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s3) => !o2.includes(s3))), l2 = l2 != null ? l2 : i2.activeElement;
  let x2 = (() => {
    if (r2 & 5) return 1;
    if (r2 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = (() => {
    if (r2 & 1) return 0;
    if (r2 & 2) return Math.max(0, n2.indexOf(l2)) - 1;
    if (r2 & 4) return Math.max(0, n2.indexOf(l2)) + 1;
    if (r2 & 8) return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L2 = r2 & 32 ? { preventScroll: true } : {}, a2 = 0, d2 = n2.length, u2;
  do {
    if (a2 >= d2 || a2 + d2 <= 0) return 0;
    let s3 = p2 + a2;
    if (r2 & 16) s3 = (s3 + d2) % d2;
    else {
      if (s3 < 0) return 3;
      if (s3 >= d2) return 1;
    }
    u2 = n2[s3], u2 == null || u2.focus(L2), a2 += x2;
  } while (u2 !== i2.activeElement);
  return r2 & 6 && I(u2) && u2.select(), 2;
}
function t$3() {
  return /iPhone/gi.test((void 0).navigator.platform) || /Mac/gi.test((void 0).navigator.platform) && (void 0).navigator.maxTouchPoints > 0;
}
function i$3() {
  return /Android/gi.test((void 0).navigator.userAgent);
}
function n$2() {
  return t$3() || i$3();
}
function u$6(e2, t2, n2) {
  c$3.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, t2, n2), o2(() => (void 0).removeEventListener(e2, t2, n2));
  });
}
function w$3(e2, n2, t2) {
  c$3.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, n2, t2), o2(() => (void 0).removeEventListener(e2, n2, t2));
  });
}
function w$2(f2, m2, l2 = computed(() => true)) {
  function a2(e2, r2) {
    if (!l2.value || e2.defaultPrevented) return;
    let t2 = r2(e2);
    if (t2 === null || !t2.getRootNode().contains(t2)) return;
    let c2 = function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(f2);
    for (let o2 of c2) {
      if (o2 === null) continue;
      let n2 = o2 instanceof HTMLElement ? o2 : o$3(o2);
      if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2)) return;
    }
    return !w$4(t2, h.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m2(e2, t2);
  }
  let u2 = ref(null);
  u$6("pointerdown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$6("mousedown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$6("click", (e2) => {
    n$2() || u2.value && (a2(e2, () => u2.value), u2.value = null);
  }, true), u$6("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$3("blur", (e2) => a2(e2, () => (void 0).document.activeElement instanceof HTMLIFrameElement ? (void 0).document.activeElement : null), true);
}
function r$1(t2, e2) {
  if (t2) return t2;
  let n2 = e2 != null ? e2 : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button") return "button";
}
function s$3(t2, e2) {
  let n2 = ref(r$1(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r$1(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var u2;
    n2.value || o$3(e2) && o$3(e2) instanceof HTMLButtonElement && !((u2 = o$3(e2)) != null && u2.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
function r(e2) {
  return [e2.screenX, e2.screenY];
}
function u$5() {
  let e2 = ref([-1, -1]);
  return { wasMoved(n2) {
    let t2 = r(n2);
    return e2.value[0] === t2[0] && e2.value[1] === t2[1] ? false : (e2.value = t2, true);
  }, update(n2) {
    e2.value = r(n2);
  } };
}
function i$2({ container: e2, accept: t2, walk: d2, enabled: o2 }) {
  watchEffect(() => {
    let r2 = e2.value;
    if (!r2 || o2 !== void 0 && !o2.value) return;
    let l2 = i$4(e2);
    if (!l2) return;
    let c2 = Object.assign((f2) => t2(f2), { acceptNode: t2 }), n2 = l2.createTreeWalker(r2, NodeFilter.SHOW_ELEMENT, c2, false);
    for (; n2.nextNode(); ) d2(n2.currentNode);
  });
}
var N$3 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$3 || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function A$3({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
  if (r2 || t2 & 2 && n2.static) return y$1(l2);
  if (t2 & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$7(d2, { [0]() {
      return null;
    }, [1]() {
      return y$1({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y$1(l2);
}
function y$1({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m2, h2;
  let { as: n2, ...l2 } = T$1(r2, ["unmount", "static"]), a2 = (m2 = e2.default) == null ? void 0 : m2.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p2, f2] of Object.entries(o2)) typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p2);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a2 != null ? a2 : [];
      if (!v$1(u2) || c2.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g2, R2) => R2.indexOf(s3) === g2).sort((s3, g2) => s3.localeCompare(g2)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p2 = j((h2 = u2.props) != null ? h2 : {}, l2, d2), f2 = cloneVNode(u2, p2, true);
      for (let s3 in p2) s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p2[s3]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h$1(n2, Object.assign({}, l2, d2), { default: () => a2 });
}
function b(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0) return {};
  if (r2.length === 1) return r2[0];
  let t2 = {}, e2 = {};
  for (let i2 of r2) for (let n2 in i2) n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"]) return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2) Object.assign(t2, { [i2](n2, ...l2) {
    let a2 = e2[i2];
    for (let d2 of a2) {
      if (n2 instanceof Event && n2.defaultPrevented) return;
      d2(n2, ...l2);
    }
  } });
  return t2;
}
function E$2(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2) t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function T$1(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2) o2 in e2 && delete e2[o2];
  return e2;
}
function v$1(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
var u$4 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(u$4 || {});
let f$3 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t2, { slots: n2, attrs: i2 }) {
  return () => {
    var r2;
    let { features: e2, ...d2 } = t2, o2 = { "aria-hidden": (e2 & 2) === 2 ? true : (r2 = d2["aria-hidden"]) != null ? r2 : void 0, hidden: (e2 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A$3({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n2, name: "Hidden" });
  };
} });
let n$1 = Symbol("Context");
var i$1 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i$1 || {});
function s$2() {
  return l$2() !== null;
}
function l$2() {
  return inject(n$1, null);
}
function t$2(o2) {
  provide(n$1, o2);
}
var o$2 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$2 || {});
var g$3 = ((f2) => (f2[f2.Left = 0] = "Left", f2[f2.Right = 2] = "Right", f2))(g$3 || {});
let t$1 = [];
function u$3(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c$1 = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c$1 || {});
function f$2(l2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0) return null;
  let r2 = n2.resolveActiveIndex(), s3 = r2 != null ? r2 : -1;
  switch (l2.focus) {
    case 0: {
      for (let e2 = 0; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 1: {
      s3 === -1 && (s3 = t2.length);
      for (let e2 = s3 - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 2: {
      for (let e2 = s3 + 1; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 3: {
      for (let e2 = t2.length - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 4: {
      for (let e2 = 0; e2 < t2.length; ++e2) if (n2.resolveId(t2[e2], e2, t2) === l2.id) return e2;
      return r2;
    }
    case 5:
      return null;
    default:
      u$3(l2);
  }
}
function e$1(i2 = {}, s3 = null, t2 = []) {
  for (let [r2, n2] of Object.entries(i2)) o$1(t2, f$1(s3, r2), n2);
  return t2;
}
function f$1(i2, s3) {
  return i2 ? i2 + "[" + s3 + "]" : s3;
}
function o$1(i2, s3, t2) {
  if (Array.isArray(t2)) for (let [r2, n2] of t2.entries()) o$1(i2, f$1(s3, r2.toString()), n2);
  else t2 instanceof Date ? i2.push([s3, t2.toISOString()]) : typeof t2 == "boolean" ? i2.push([s3, t2 ? "1" : "0"]) : typeof t2 == "string" ? i2.push([s3, t2]) : typeof t2 == "number" ? i2.push([s3, `${t2}`]) : t2 == null ? i2.push([s3, ""]) : e$1(t2, s3, i2);
}
function De(a2, h2) {
  return a2 === h2;
}
var Ee = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(Ee || {}), Ve = ((r2) => (r2[r2.Single = 0] = "Single", r2[r2.Multi = 1] = "Multi", r2))(Ve || {}), ke = ((y2) => (y2[y2.Pointer = 0] = "Pointer", y2[y2.Focus = 1] = "Focus", y2[y2.Other = 2] = "Other", y2))(ke || {});
let ne = Symbol("ComboboxContext");
function K(a2) {
  let h2 = inject(ne, null);
  if (h2 === null) {
    let r2 = new Error(`<${a2} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, K), r2;
  }
  return h2;
}
let ie = Symbol("VirtualContext"), Ae$1 = defineComponent({ name: "VirtualProvider", setup(a2, { slots: h2 }) {
  let r2 = K("VirtualProvider"), y2 = computed(() => {
    let c2 = o$3(r2.optionsRef);
    if (!c2) return { start: 0, end: 0 };
    let f2 = (void 0).getComputedStyle(c2);
    return { start: parseFloat(f2.paddingBlockStart || f2.paddingTop), end: parseFloat(f2.paddingBlockEnd || f2.paddingBottom) };
  }), o2 = useVirtualizer(computed(() => ({ scrollPaddingStart: y2.value.start, scrollPaddingEnd: y2.value.end, count: r2.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return o$3(r2.optionsRef);
  }, overscan: 12 }))), u2 = computed(() => {
    var c2;
    return (c2 = r2.virtual.value) == null ? void 0 : c2.options;
  }), e2 = ref(0);
  return watch([u2], () => {
    e2.value += 1;
  }), provide(ie, r2.virtual.value ? o2 : null), () => [h$1("div", { style: { position: "relative", width: "100%", height: `${o2.value.getTotalSize()}px` }, ref: (c2) => {
    if (c2) {
      if (typeof process != "undefined" && process.env.JEST_WORKER_ID !== void 0 || r2.activationTrigger.value === 0) return;
      r2.activeOptionIndex.value !== null && r2.virtual.value.options.length > r2.activeOptionIndex.value && o2.value.scrollToIndex(r2.activeOptionIndex.value);
    }
  } }, o2.value.getVirtualItems().map((c2) => cloneVNode(h2.default({ option: r2.virtual.value.options[c2.index], open: r2.comboboxState.value === 0 })[0], { key: `${e2.value}-${c2.index}`, "data-index": c2.index, "aria-setsize": r2.virtual.value.options.length, "aria-posinset": c2.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${c2.start}px)`, overflowAnchor: "none" } })))];
} }), lt = defineComponent({ name: "Combobox", emits: { "update:modelValue": (a2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], nullable: true, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false }, immediate: { type: [Boolean], default: false }, virtual: { type: Object, default: null } }, inheritAttrs: false, setup(a2, { slots: h2, attrs: r2, emit: y2 }) {
  let o2 = ref(1), u2 = ref(null), e2 = ref(null), c2 = ref(null), f2 = ref(null), S2 = ref({ static: false, hold: false }), v2 = ref([]), d2 = ref(null), D = ref(2), E2 = ref(false);
  function w2(t2 = (n2) => n2) {
    let n2 = d2.value !== null ? v2.value[d2.value] : null, s3 = t2(v2.value.slice()), b2 = s3.length > 0 && s3[0].dataRef.order.value !== null ? s3.sort((C, A2) => C.dataRef.order.value - A2.dataRef.order.value) : O(s3, (C) => o$3(C.dataRef.domRef)), O$1 = n2 ? b2.indexOf(n2) : null;
    return O$1 === -1 && (O$1 = null), { options: b2, activeOptionIndex: O$1 };
  }
  let M2 = computed(() => a2.multiple ? 1 : 0), $2 = computed(() => a2.nullable), [B2, p2] = d$5(computed(() => a2.modelValue), (t2) => y2("update:modelValue", t2), computed(() => a2.defaultValue)), R2 = computed(() => B2.value === void 0 ? u$7(M2.value, { [1]: [], [0]: void 0 }) : B2.value), V = null, i2 = null;
  function I2(t2) {
    return u$7(M2.value, { [0]() {
      return p2 == null ? void 0 : p2(t2);
    }, [1]: () => {
      let n2 = toRaw(l2.value.value).slice(), s3 = toRaw(t2), b2 = n2.findIndex((O2) => l2.compare(s3, toRaw(O2)));
      return b2 === -1 ? n2.push(s3) : n2.splice(b2, 1), p2 == null ? void 0 : p2(n2);
    } });
  }
  let T2 = computed(() => {
  });
  watch([T2], ([t2], [n2]) => {
    if (l2.virtual.value && t2 && n2 && d2.value !== null) {
      let s3 = t2.indexOf(n2[d2.value]);
      s3 !== -1 ? d2.value = s3 : d2.value = null;
    }
  });
  let l2 = { comboboxState: o2, value: R2, mode: M2, compare(t2, n2) {
    if (typeof a2.by == "string") {
      let s3 = a2.by;
      return (t2 == null ? void 0 : t2[s3]) === (n2 == null ? void 0 : n2[s3]);
    }
    return a2.by === null ? De(t2, n2) : a2.by(t2, n2);
  }, calculateIndex(t2) {
    return l2.virtual.value ? a2.by === null ? l2.virtual.value.options.indexOf(t2) : l2.virtual.value.options.findIndex((n2) => l2.compare(n2, t2)) : v2.value.findIndex((n2) => l2.compare(n2.dataRef.value, t2));
  }, defaultValue: computed(() => a2.defaultValue), nullable: $2, immediate: computed(() => false), virtual: computed(() => null), inputRef: e2, labelRef: u2, buttonRef: c2, optionsRef: f2, disabled: computed(() => a2.disabled), options: v2, change(t2) {
    p2(t2);
  }, activeOptionIndex: computed(() => {
    if (E2.value && d2.value === null && (l2.virtual.value ? l2.virtual.value.options.length > 0 : v2.value.length > 0)) {
      if (l2.virtual.value) {
        let n2 = l2.virtual.value.options.findIndex((s3) => {
          var b2;
          return !((b2 = l2.virtual.value) != null && b2.disabled(s3));
        });
        if (n2 !== -1) return n2;
      }
      let t2 = v2.value.findIndex((n2) => !n2.dataRef.disabled);
      if (t2 !== -1) return t2;
    }
    return d2.value;
  }), activationTrigger: D, optionsPropsRef: S2, closeCombobox() {
    E2.value = false, !a2.disabled && o2.value !== 1 && (o2.value = 1, d2.value = null);
  }, openCombobox() {
    if (E2.value = true, !a2.disabled && o2.value !== 0) {
      if (l2.value.value) {
        let t2 = l2.calculateIndex(l2.value.value);
        t2 !== -1 && (d2.value = t2);
      }
      o2.value = 0;
    }
  }, setActivationTrigger(t2) {
    D.value = t2;
  }, goToOption(t2, n2, s3) {
    E2.value = false, V !== null && cancelAnimationFrame(V), V = requestAnimationFrame(() => {
      if (a2.disabled || f2.value && !S2.value.static && o2.value === 1) return;
      if (l2.virtual.value) {
        d2.value = t2 === c$1.Specific ? n2 : f$2({ focus: t2 }, { resolveItems: () => l2.virtual.value.options, resolveActiveIndex: () => {
          var C, A2;
          return (A2 = (C = l2.activeOptionIndex.value) != null ? C : l2.virtual.value.options.findIndex((j2) => {
            var q2;
            return !((q2 = l2.virtual.value) != null && q2.disabled(j2));
          })) != null ? A2 : null;
        }, resolveDisabled: (C) => l2.virtual.value.disabled(C), resolveId() {
          throw new Error("Function not implemented.");
        } }), D.value = s3 != null ? s3 : 2;
        return;
      }
      let b2 = w2();
      if (b2.activeOptionIndex === null) {
        let C = b2.options.findIndex((A2) => !A2.dataRef.disabled);
        C !== -1 && (b2.activeOptionIndex = C);
      }
      let O2 = t2 === c$1.Specific ? n2 : f$2({ focus: t2 }, { resolveItems: () => b2.options, resolveActiveIndex: () => b2.activeOptionIndex, resolveId: (C) => C.id, resolveDisabled: (C) => C.dataRef.disabled });
      d2.value = O2, D.value = s3 != null ? s3 : 2, v2.value = b2.options;
    });
  }, selectOption(t2) {
    let n2 = v2.value.find((b2) => b2.id === t2);
    if (!n2) return;
    let { dataRef: s3 } = n2;
    I2(s3.value);
  }, selectActiveOption() {
    if (l2.activeOptionIndex.value !== null) {
      if (l2.virtual.value) I2(l2.virtual.value.options[l2.activeOptionIndex.value]);
      else {
        let { dataRef: t2 } = v2.value[l2.activeOptionIndex.value];
        I2(t2.value);
      }
      l2.goToOption(c$1.Specific, l2.activeOptionIndex.value);
    }
  }, registerOption(t2, n2) {
    let s3 = reactive({ id: t2, dataRef: n2 });
    if (l2.virtual.value) {
      v2.value.push(s3);
      return;
    }
    i2 && cancelAnimationFrame(i2);
    let b2 = w2((O2) => (O2.push(s3), O2));
    d2.value === null && l2.isSelected(n2.value.value) && (b2.activeOptionIndex = b2.options.indexOf(s3)), v2.value = b2.options, d2.value = b2.activeOptionIndex, D.value = 2, b2.options.some((O2) => !o$3(O2.dataRef.domRef)) && (i2 = requestAnimationFrame(() => {
      let O2 = w2();
      v2.value = O2.options, d2.value = O2.activeOptionIndex;
    }));
  }, unregisterOption(t2, n2) {
    if (V !== null && cancelAnimationFrame(V), n2 && (E2.value = true), l2.virtual.value) {
      v2.value = v2.value.filter((b2) => b2.id !== t2);
      return;
    }
    let s3 = w2((b2) => {
      let O2 = b2.findIndex((C) => C.id === t2);
      return O2 !== -1 && b2.splice(O2, 1), b2;
    });
    v2.value = s3.options, d2.value = s3.activeOptionIndex, D.value = 2;
  }, isSelected(t2) {
    return u$7(M2.value, { [0]: () => l2.compare(toRaw(l2.value.value), toRaw(t2)), [1]: () => toRaw(l2.value.value).some((n2) => l2.compare(toRaw(n2), toRaw(t2))) });
  }, isActive(t2) {
    return d2.value === l2.calculateIndex(t2);
  } };
  w$2([e2, c2, f2], () => l2.closeCombobox(), computed(() => o2.value === 0)), provide(ne, l2), t$2(computed(() => u$7(o2.value, { [0]: i$1.Open, [1]: i$1.Closed })));
  let g2 = computed(() => {
    var t2;
    return (t2 = o$3(e2)) == null ? void 0 : t2.closest("form");
  });
  return onMounted(() => {
    watch([g2], () => {
      if (!g2.value || a2.defaultValue === void 0) return;
      function t2() {
        l2.change(a2.defaultValue);
      }
      return g2.value.addEventListener("reset", t2), () => {
        var n2;
        (n2 = g2.value) == null || n2.removeEventListener("reset", t2);
      };
    }, { immediate: true });
  }), () => {
    var C, A2, j2;
    let { name: t2, disabled: n2, form: s3, ...b2 } = a2, O2 = { open: o2.value === 0, disabled: n2, activeIndex: l2.activeOptionIndex.value, activeOption: l2.activeOptionIndex.value === null ? null : l2.virtual.value ? l2.virtual.value.options[(C = l2.activeOptionIndex.value) != null ? C : 0] : (j2 = (A2 = l2.options.value[l2.activeOptionIndex.value]) == null ? void 0 : A2.dataRef.value) != null ? j2 : null, value: R2.value };
    return h$1(Fragment, [...t2 != null && R2.value != null ? e$1({ [t2]: R2.value }).map(([q2, ue2]) => h$1(f$3, E$2({ features: u$4.Hidden, key: q2, as: "input", type: "hidden", hidden: true, readOnly: true, form: s3, disabled: n2, name: q2, value: ue2 }))) : [], A$3({ theirProps: { ...r2, ...T$1(b2, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: O2, slots: h2, attrs: r2, name: "Combobox" })]);
  };
} });
defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(a2, { attrs: h2, slots: r2 }) {
  var e2;
  let y2 = (e2 = a2.id) != null ? e2 : `headlessui-combobox-label-${i$6()}`, o2 = K("ComboboxLabel");
  function u2() {
    var c2;
    (c2 = o$3(o2.inputRef)) == null || c2.focus({ preventScroll: true });
  }
  return () => {
    let c2 = { open: o2.comboboxState.value === 0, disabled: o2.disabled.value }, { ...f2 } = a2, S2 = { id: y2, ref: o2.labelRef, onClick: u2 };
    return A$3({ ourProps: S2, theirProps: f2, slot: c2, attrs: h2, slots: r2, name: "ComboboxLabel" });
  };
} });
let nt = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(a2, { attrs: h2, slots: r2, expose: y2 }) {
  var S2;
  let o2 = (S2 = a2.id) != null ? S2 : `headlessui-combobox-button-${i$6()}`, u2 = K("ComboboxButton");
  y2({ el: u2.buttonRef, $el: u2.buttonRef });
  function e2(v2) {
    u2.disabled.value || (u2.comboboxState.value === 0 ? u2.closeCombobox() : (v2.preventDefault(), u2.openCombobox()), nextTick(() => {
      var d2;
      return (d2 = o$3(u2.inputRef)) == null ? void 0 : d2.focus({ preventScroll: true });
    }));
  }
  function c2(v2) {
    switch (v2.key) {
      case o$2.ArrowDown:
        v2.preventDefault(), v2.stopPropagation(), u2.comboboxState.value === 1 && u2.openCombobox(), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
      case o$2.ArrowUp:
        v2.preventDefault(), v2.stopPropagation(), u2.comboboxState.value === 1 && (u2.openCombobox(), nextTick(() => {
          u2.value.value || u2.goToOption(c$1.Last);
        })), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
      case o$2.Escape:
        if (u2.comboboxState.value !== 0) return;
        v2.preventDefault(), u2.optionsRef.value && !u2.optionsPropsRef.value.static && v2.stopPropagation(), u2.closeCombobox(), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
    }
  }
  let f2 = s$3(computed(() => ({ as: a2.as, type: h2.type })), u2.buttonRef);
  return () => {
    var E2, w2;
    let v2 = { open: u2.comboboxState.value === 0, disabled: u2.disabled.value, value: u2.value.value }, { ...d2 } = a2, D = { ref: u2.buttonRef, id: o2, type: f2.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (E2 = o$3(u2.optionsRef)) == null ? void 0 : E2.id, "aria-expanded": u2.comboboxState.value === 0, "aria-labelledby": u2.labelRef.value ? [(w2 = o$3(u2.labelRef)) == null ? void 0 : w2.id, o2].join(" ") : void 0, disabled: u2.disabled.value === true ? true : void 0, onKeydown: c2, onClick: e2 };
    return A$3({ ourProps: D, theirProps: d2, slot: v2, attrs: h2, slots: r2, name: "ComboboxButton" });
  };
} }), it = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: null } }, emits: { change: (a2) => true }, setup(a2, { emit: h2, attrs: r2, slots: y2, expose: o2 }) {
  var V;
  let u2 = (V = a2.id) != null ? V : `headlessui-combobox-input-${i$6()}`, e2 = K("ComboboxInput"), c2 = computed(() => i$4(o$3(e2.inputRef))), f2 = { value: false };
  o2({ el: e2.inputRef, $el: e2.inputRef });
  function S2() {
    e2.change(null);
    let i2 = o$3(e2.optionsRef);
    i2 && (i2.scrollTop = 0), e2.goToOption(c$1.Nothing);
  }
  let v2 = computed(() => {
    var I2;
    let i2 = e2.value.value;
    return o$3(e2.inputRef) ? typeof a2.displayValue != "undefined" && i2 !== void 0 ? (I2 = a2.displayValue(i2)) != null ? I2 : "" : typeof i2 == "string" ? i2 : "" : "";
  });
  onMounted(() => {
    watch([v2, e2.comboboxState, c2], ([i2, I2], [T2, l2]) => {
      if (f2.value) return;
      let g2 = o$3(e2.inputRef);
      g2 && ((l2 === 0 && I2 === 1 || i2 !== T2) && (g2.value = i2), requestAnimationFrame(() => {
        var s3;
        if (f2.value || !g2 || ((s3 = c2.value) == null ? void 0 : s3.activeElement) !== g2) return;
        let { selectionStart: t2, selectionEnd: n2 } = g2;
        Math.abs((n2 != null ? n2 : 0) - (t2 != null ? t2 : 0)) === 0 && t2 === 0 && g2.setSelectionRange(g2.value.length, g2.value.length);
      }));
    }, { immediate: true }), watch([e2.comboboxState], ([i2], [I2]) => {
      if (i2 === 0 && I2 === 1) {
        if (f2.value) return;
        let T2 = o$3(e2.inputRef);
        if (!T2) return;
        let l2 = T2.value, { selectionStart: g2, selectionEnd: t2, selectionDirection: n2 } = T2;
        T2.value = "", T2.value = l2, n2 !== null ? T2.setSelectionRange(g2, t2, n2) : T2.setSelectionRange(g2, t2);
      }
    });
  });
  let d2 = ref(false);
  function D() {
    d2.value = true;
  }
  function E2() {
    o$5().nextFrame(() => {
      d2.value = false;
    });
  }
  let w2 = t$4();
  function M2(i2) {
    switch (f2.value = true, w2(() => {
      f2.value = false;
    }), i2.key) {
      case o$2.Enter:
        if (f2.value = false, e2.comboboxState.value !== 0 || d2.value) return;
        if (i2.preventDefault(), i2.stopPropagation(), e2.activeOptionIndex.value === null) {
          e2.closeCombobox();
          return;
        }
        e2.selectActiveOption(), e2.mode.value === 0 && e2.closeCombobox();
        break;
      case o$2.ArrowDown:
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), u$7(e2.comboboxState.value, { [0]: () => e2.goToOption(c$1.Next), [1]: () => e2.openCombobox() });
      case o$2.ArrowUp:
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), u$7(e2.comboboxState.value, { [0]: () => e2.goToOption(c$1.Previous), [1]: () => {
          e2.openCombobox(), nextTick(() => {
            e2.value.value || e2.goToOption(c$1.Last);
          });
        } });
      case o$2.Home:
        if (i2.shiftKey) break;
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.First);
      case o$2.PageUp:
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.First);
      case o$2.End:
        if (i2.shiftKey) break;
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.Last);
      case o$2.PageDown:
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.Last);
      case o$2.Escape:
        if (f2.value = false, e2.comboboxState.value !== 0) return;
        i2.preventDefault(), e2.optionsRef.value && !e2.optionsPropsRef.value.static && i2.stopPropagation(), e2.nullable.value && e2.mode.value === 0 && e2.value.value === null && S2(), e2.closeCombobox();
        break;
      case o$2.Tab:
        if (f2.value = false, e2.comboboxState.value !== 0) return;
        e2.mode.value === 0 && e2.activationTrigger.value !== 1 && e2.selectActiveOption(), e2.closeCombobox();
        break;
    }
  }
  function $2(i2) {
    h2("change", i2), e2.nullable.value && e2.mode.value === 0 && i2.target.value === "" && S2(), e2.openCombobox();
  }
  function B2(i2) {
    var T2, l2, g2;
    let I2 = (T2 = i2.relatedTarget) != null ? T2 : t$1.find((t2) => t2 !== i2.currentTarget);
    if (f2.value = false, !((l2 = o$3(e2.optionsRef)) != null && l2.contains(I2)) && !((g2 = o$3(e2.buttonRef)) != null && g2.contains(I2)) && e2.comboboxState.value === 0) return i2.preventDefault(), e2.mode.value === 0 && (e2.nullable.value && e2.value.value === null ? S2() : e2.activationTrigger.value !== 1 && e2.selectActiveOption()), e2.closeCombobox();
  }
  function p2(i2) {
    var T2, l2, g2;
    let I2 = (T2 = i2.relatedTarget) != null ? T2 : t$1.find((t2) => t2 !== i2.currentTarget);
    (l2 = o$3(e2.buttonRef)) != null && l2.contains(I2) || (g2 = o$3(e2.optionsRef)) != null && g2.contains(I2) || e2.disabled.value || e2.immediate.value && e2.comboboxState.value !== 0 && (e2.openCombobox(), o$5().nextFrame(() => {
      e2.setActivationTrigger(1);
    }));
  }
  let R2 = computed(() => {
    var i2, I2, T2, l2;
    return (l2 = (T2 = (I2 = a2.defaultValue) != null ? I2 : e2.defaultValue.value !== void 0 ? (i2 = a2.displayValue) == null ? void 0 : i2.call(a2, e2.defaultValue.value) : null) != null ? T2 : e2.defaultValue.value) != null ? l2 : "";
  });
  return () => {
    var t2, n2, s3, b2, O2, C, A2;
    let i2 = { open: e2.comboboxState.value === 0 }, { displayValue: I2, onChange: T2, ...l2 } = a2, g2 = { "aria-controls": (t2 = e2.optionsRef.value) == null ? void 0 : t2.id, "aria-expanded": e2.comboboxState.value === 0, "aria-activedescendant": e2.activeOptionIndex.value === null ? void 0 : e2.virtual.value ? (n2 = e2.options.value.find((j2) => !e2.virtual.value.disabled(j2.dataRef.value) && e2.compare(j2.dataRef.value, e2.virtual.value.options[e2.activeOptionIndex.value]))) == null ? void 0 : n2.id : (s3 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : s3.id, "aria-labelledby": (C = (b2 = o$3(e2.labelRef)) == null ? void 0 : b2.id) != null ? C : (O2 = o$3(e2.buttonRef)) == null ? void 0 : O2.id, "aria-autocomplete": "list", id: u2, onCompositionstart: D, onCompositionend: E2, onKeydown: M2, onInput: $2, onFocus: p2, onBlur: B2, role: "combobox", type: (A2 = r2.type) != null ? A2 : "text", tabIndex: 0, ref: e2.inputRef, defaultValue: R2.value, disabled: e2.disabled.value === true ? true : void 0 };
    return A$3({ ourProps: g2, theirProps: l2, slot: i2, attrs: r2, slots: y2, features: N$3.RenderStrategy | N$3.Static, name: "ComboboxInput" });
  };
} }), ut = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(a2, { attrs: h2, slots: r2, expose: y2 }) {
  let o2 = K("ComboboxOptions"), u2 = `headlessui-combobox-options-${i$6()}`;
  y2({ el: o2.optionsRef, $el: o2.optionsRef }), watchEffect(() => {
    o2.optionsPropsRef.value.static = a2.static;
  }), watchEffect(() => {
    o2.optionsPropsRef.value.hold = a2.hold;
  });
  let e2 = l$2(), c2 = computed(() => e2 !== null ? (e2.value & i$1.Open) === i$1.Open : o2.comboboxState.value === 0);
  i$2({ container: computed(() => o$3(o2.optionsRef)), enabled: computed(() => o2.comboboxState.value === 0), accept(S2) {
    return S2.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : S2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(S2) {
    S2.setAttribute("role", "none");
  } });
  function f2(S2) {
    S2.preventDefault();
  }
  return () => {
    var D, E2, w2;
    let S2 = { open: o2.comboboxState.value === 0 }, v2 = { "aria-labelledby": (w2 = (D = o$3(o2.labelRef)) == null ? void 0 : D.id) != null ? w2 : (E2 = o$3(o2.buttonRef)) == null ? void 0 : E2.id, id: u2, ref: o2.optionsRef, role: "listbox", "aria-multiselectable": o2.mode.value === 1 ? true : void 0, onMousedown: f2 }, d2 = T$1(a2, ["hold"]);
    return A$3({ ourProps: v2, theirProps: d2, slot: S2, attrs: h2, slots: o2.virtual.value && o2.comboboxState.value === 0 ? { ...r2, default: () => [h$1(Ae$1, {}, r2.default)] } : r2, features: N$3.RenderStrategy | N$3.Static, visible: c2.value, name: "ComboboxOptions" });
  };
} }), rt = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, order: { type: [Number], default: null } }, setup(a2, { slots: h2, attrs: r2, expose: y2 }) {
  let o2 = K("ComboboxOption"), u2 = `headlessui-combobox-option-${i$6()}`, e2 = ref(null), c2 = computed(() => a2.disabled);
  y2({ el: e2, $el: e2 });
  let f2 = computed(() => {
    var p2;
    return o2.virtual.value ? o2.activeOptionIndex.value === o2.calculateIndex(a2.value) : o2.activeOptionIndex.value === null ? false : ((p2 = o2.options.value[o2.activeOptionIndex.value]) == null ? void 0 : p2.id) === u2;
  }), S2 = computed(() => o2.isSelected(a2.value)), v2 = inject(ie, null), d2 = computed(() => ({ disabled: a2.disabled, value: a2.value, domRef: e2, order: computed(() => a2.order) }));
  onMounted(() => o2.registerOption(u2, d2)), onUnmounted(() => o2.unregisterOption(u2, f2.value)), watchEffect(() => {
    let p2 = o$3(e2);
    p2 && (v2 == null || v2.value.measureElement(p2));
  }), watchEffect(() => {
    o2.comboboxState.value === 0 && f2.value && (o2.virtual.value || o2.activationTrigger.value !== 0 && nextTick(() => {
      var p2, R2;
      return (R2 = (p2 = o$3(e2)) == null ? void 0 : p2.scrollIntoView) == null ? void 0 : R2.call(p2, { block: "nearest" });
    }));
  });
  function D(p2) {
    p2.preventDefault(), p2.button === g$3.Left && (c2.value || (o2.selectOption(u2), n$2() || requestAnimationFrame(() => {
      var R2;
      return (R2 = o$3(o2.inputRef)) == null ? void 0 : R2.focus({ preventScroll: true });
    }), o2.mode.value === 0 && o2.closeCombobox()));
  }
  function E2() {
    var R2;
    if (a2.disabled || (R2 = o2.virtual.value) != null && R2.disabled(a2.value)) return o2.goToOption(c$1.Nothing);
    let p2 = o2.calculateIndex(a2.value);
    o2.goToOption(c$1.Specific, p2);
  }
  let w2 = u$5();
  function M2(p2) {
    w2.update(p2);
  }
  function $2(p2) {
    var V;
    if (!w2.wasMoved(p2) || a2.disabled || (V = o2.virtual.value) != null && V.disabled(a2.value) || f2.value) return;
    let R2 = o2.calculateIndex(a2.value);
    o2.goToOption(c$1.Specific, R2, 0);
  }
  function B2(p2) {
    var R2;
    w2.wasMoved(p2) && (a2.disabled || (R2 = o2.virtual.value) != null && R2.disabled(a2.value) || f2.value && (o2.optionsPropsRef.value.hold || o2.goToOption(c$1.Nothing)));
  }
  return () => {
    let { disabled: p2 } = a2, R2 = { active: f2.value, selected: S2.value, disabled: p2 }, V = { id: u2, ref: e2, role: "option", tabIndex: p2 === true ? void 0 : -1, "aria-disabled": p2 === true ? true : void 0, "aria-selected": S2.value, disabled: void 0, onMousedown: D, onFocus: E2, onPointerenter: M2, onMouseenter: M2, onPointermove: $2, onMousemove: $2, onPointerleave: B2, onMouseleave: B2 }, i2 = T$1(a2, ["order", "value"]);
    return A$3({ ourProps: V, theirProps: i2, slot: R2, attrs: r2, slots: h2, name: "ComboboxOption" });
  };
} });
function E$1(n2, e2, o2, r2) {
  c$3.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r2), t2(() => n2.removeEventListener(e2, o2, r2));
  });
}
var d$3 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(d$3 || {});
function n() {
  let o2 = ref(0);
  return w$3("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function B(t2) {
  if (!t2) return /* @__PURE__ */ new Set();
  if (typeof t2 == "function") return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r2 of t2.value) {
    let l2 = o$3(r2);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$2 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.InitialFocus = 2] = "InitialFocus", e2[e2.TabLock = 4] = "TabLock", e2[e2.FocusLock = 8] = "FocusLock", e2[e2.RestoreFocus = 16] = "RestoreFocus", e2[e2.All = 30] = "All", e2))(A$2 || {});
let ue$1 = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t2, { attrs: n$12, slots: r2, expose: l2 }) {
  let o2 = ref(null);
  l2({ el: o2, $el: o2 });
  let i2 = computed(() => i$4(o2)), e2 = ref(false);
  onMounted(() => e2.value = true), onUnmounted(() => e2.value = false), $$2({ ownerDocument: i2 }, computed(() => e2.value && Boolean(t2.features & 16)));
  let m2 = z$1({ ownerDocument: i2, container: o2, initialFocus: computed(() => t2.initialFocus) }, computed(() => e2.value && Boolean(t2.features & 2)));
  J({ ownerDocument: i2, container: o2, containers: t2.containers, previousActiveElement: m2 }, computed(() => e2.value && Boolean(t2.features & 8)));
  let f2 = n();
  function a2(u2) {
    let T2 = o$3(o2);
    if (!T2) return;
    ((w2) => w2())(() => {
      u$7(f2.value, { [d$3.Forwards]: () => {
        P(T2, N$4.First, { skipElements: [u2.relatedTarget] });
      }, [d$3.Backwards]: () => {
        P(T2, N$4.Last, { skipElements: [u2.relatedTarget] });
      } });
    });
  }
  let s3 = ref(false);
  function F2(u2) {
    u2.key === "Tab" && (s3.value = true, requestAnimationFrame(() => {
      s3.value = false;
    }));
  }
  function H2(u2) {
    if (!e2.value) return;
    let T2 = B(t2.containers);
    o$3(o2) instanceof HTMLElement && T2.add(o$3(o2));
    let d2 = u2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N$2(T2, d2) || (s3.value ? P(o$3(o2), u$7(f2.value, { [d$3.Forwards]: () => N$4.Next, [d$3.Backwards]: () => N$4.Previous }) | N$4.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S$1(u2.target)));
  }
  return () => {
    let u2 = {}, T2 = { ref: o2, onKeydown: F2, onFocusout: H2 }, { features: d2, initialFocus: w2, containers: Q2, ...O2 } = t2;
    return h$1(Fragment, [Boolean(d2 & 4) && h$1(f$3, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$4.Focusable }), A$3({ ourProps: T2, theirProps: { ...n$12, ...O2 }, slot: u2, attrs: n$12, slots: r2, name: "FocusTrap" }), Boolean(d2 & 4) && h$1(f$3, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$4.Focusable })]);
  };
} }), { features: A$2 });
function W$1(t2) {
  let n2 = ref(t$1.slice());
  return watch([t2], ([r2], [l2]) => {
    l2 === true && r2 === false ? t$5(() => {
      n2.value.splice(0);
    }) : l2 === false && r2 === true && (n2.value = t$1.slice());
  }, { flush: "post" }), () => {
    var r2;
    return (r2 = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r2 : null;
  };
}
function $$2({ ownerDocument: t2 }, n2) {
  let r2 = W$1(n2);
  onMounted(() => {
    watchEffect(() => {
      var l2, o2;
      n2.value || ((l2 = t2.value) == null ? void 0 : l2.activeElement) === ((o2 = t2.value) == null ? void 0 : o2.body) && S$1(r2());
    }, { flush: "post" });
  }), onUnmounted(() => {
    n2.value && S$1(r2());
  });
}
function z$1({ ownerDocument: t2, container: n2, initialFocus: r2 }, l2) {
  let o2 = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([n2, r2, l2], (e2, m2) => {
      if (e2.every((a2, s3) => (m2 == null ? void 0 : m2[s3]) === a2) || !l2.value) return;
      let f2 = o$3(n2);
      f2 && t$5(() => {
        var F2, H2;
        if (!i2.value) return;
        let a2 = o$3(r2), s3 = (F2 = t2.value) == null ? void 0 : F2.activeElement;
        if (a2) {
          if (a2 === s3) {
            o2.value = s3;
            return;
          }
        } else if (f2.contains(s3)) {
          o2.value = s3;
          return;
        }
        a2 ? S$1(a2) : P(f2, N$4.First | N$4.NoScroll) === T$2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o2.value = (H2 = t2.value) == null ? void 0 : H2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), o2;
}
function J({ ownerDocument: t2, container: n2, containers: r2, previousActiveElement: l2 }, o2) {
  var i2;
  E$1((i2 = t2.value) == null ? void 0 : i2.defaultView, "focus", (e2) => {
    if (!o2.value) return;
    let m2 = B(r2);
    o$3(n2) instanceof HTMLElement && m2.add(o$3(n2));
    let f2 = l2.value;
    if (!f2) return;
    let a2 = e2.target;
    a2 && a2 instanceof HTMLElement ? N$2(m2, a2) ? (l2.value = a2, S$1(a2)) : (e2.preventDefault(), e2.stopPropagation(), S$1(f2)) : S$1(l2.value);
  }, true);
}
function N$2(t2, n2) {
  for (let r2 of t2) if (r2.contains(n2)) return true;
  return false;
}
function m$2(t2) {
  let e2 = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e2.value = t2.getSnapshot();
  })), e2;
}
function a$2(o2, r2) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s3) {
    let i2 = r2[e2].call(t2, ...s3);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e2 }) {
    var l2;
    let n2 = e2.documentElement;
    o2 = ((l2 = e2.defaultView) != null ? l2 : void 0).innerWidth - n2.clientWidth;
  }, after({ doc: e2, d: n2 }) {
    let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r2 = o2 - l2;
    n2.style(t2, "paddingRight", `${r2}px`);
  } };
}
function w$1() {
  return t$3() ? { before({ doc: r2, d: n2, meta: c2 }) {
    function a2(o2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(o2));
    }
    n2.microTask(() => {
      var s3;
      if ((void 0).getComputedStyle(r2.documentElement).scrollBehavior !== "auto") {
        let t2 = o$5();
        t2.style(r2.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let o2 = (s3 = (void 0).scrollY) != null ? s3 : (void 0).pageYOffset, l2 = null;
      n2.addEventListener(r2, "click", (t2) => {
        if (t2.target instanceof HTMLElement) try {
          let e2 = t2.target.closest("a");
          if (!e2) return;
          let { hash: f2 } = new URL(e2.href), i2 = r2.querySelector(f2);
          i2 && !a2(i2) && (l2 = i2);
        } catch {
        }
      }, true), n2.addEventListener(r2, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement) if (a2(t2.target)) {
          let e2 = t2.target;
          for (; e2.parentElement && a2(e2.parentElement); ) e2 = e2.parentElement;
          n2.style(e2, "overscrollBehavior", "contain");
        } else n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r2, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement) {
          if (t2.target.tagName === "INPUT") return;
          if (a2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); ) e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else t2.preventDefault();
        }
      }, { passive: false }), n2.add(() => {
        var e2;
        let t2 = (e2 = (void 0).scrollY) != null ? e2 : (void 0).pageYOffset;
        o2 !== t2 && (void 0).scrollTo(0, o2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l$1() {
  return { before({ doc: e2, d: o2 }) {
    o2.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m$1(e2) {
  let n2 = {};
  for (let t2 of e2) Object.assign(n2, t2(n2));
  return n2;
}
let a$1 = a$2(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o2;
  let t2 = (o2 = this.get(e2)) != null ? o2 : { doc: e2, count: 0, d: o$5(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o2 = { doc: e2, d: n2, meta: m$1(t2) }, c$12 = [w$1(), c(), l$1()];
  c$12.forEach(({ before: r2 }) => r2 == null ? void 0 : r2(o2)), c$12.forEach(({ after: r2 }) => r2 == null ? void 0 : r2(o2));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a$1.subscribe(() => {
  let e2 = a$1.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2) n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a$1.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a$1.dispatch("TEARDOWN", t2);
  }
});
function d$2(t2, a2, n2) {
  let i2 = m$2(a$1), l2 = computed(() => {
    let e2 = t2.value ? i2.value.get(t2.value) : void 0;
    return e2 ? e2.count > 0 : false;
  });
  return watch([t2, a2], ([e2, m2], [r2], o2) => {
    if (!e2 || !m2) return;
    a$1.dispatch("PUSH", e2, n2);
    let f2 = false;
    o2(() => {
      f2 || (a$1.dispatch("POP", r2 != null ? r2 : e2, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o2) => {
    var a2;
    if (!f2.value) return;
    let e2 = o$3(d2);
    if (!e2) return;
    o2(function() {
      var u2;
      if (!e2) return;
      let r2 = (u2 = t.get(e2)) != null ? u2 : 1;
      if (r2 === 1 ? t.delete(e2) : t.set(e2, r2 - 1), r2 !== 1) return;
      let n2 = i.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, i.delete(e2));
    });
    let l2 = (a2 = t.get(e2)) != null ? a2 : 0;
    t.set(e2, l2 + 1), l2 === 0 && (i.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true);
  });
}
function N$1({ defaultContainers: o2 = [], portals: i2, mainTreeNodeRef: H2 } = {}) {
  let t2 = ref(null), r2 = i$4(t2);
  function u2() {
    var l2, f2, a2;
    let n2 = [];
    for (let e2 of o2) e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i2 != null && i2.value) for (let e2 of i2.value) n2.push(e2);
    for (let e2 of (l2 = r2 == null ? void 0 : r2.querySelectorAll("html > *, body > *")) != null ? l2 : []) e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$3(t2)) || e2.contains((a2 = (f2 = o$3(t2)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a2.host) || n2.some((M2) => e2.contains(M2)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: t2, MainTreeNode() {
    return H2 != null ? null : h$1(f$3, { features: u$4.Hidden, ref: t2 });
  } };
}
function v() {
  let o2 = ref(null);
  return { mainTreeNodeRef: o2, MainTreeNode() {
    return h$1(f$3, { features: u$4.Hidden, ref: o2 });
  } };
}
let e = Symbol("ForcePortalRootContext");
function s$1() {
  return inject(e, false);
}
let u$2 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r2 }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A$3({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r2, name: "ForcePortalRoot" });
  };
} });
let u$1 = Symbol("StackContext");
var s2 = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s2 || {});
function y() {
  return inject(u$1, () => {
  });
}
function R$1({ type: o2, enabled: r2, element: e2, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r2, (n2, d2) => {
      n2 ? t2(0, o2, e2) : d2 === true && t2(1, o2, e2);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r2.value && t2(1, o2, e2);
  }), provide(u$1, t2);
}
let u = Symbol("DescriptionContext");
function w() {
  let t2 = inject(u, null);
  if (t2 === null) throw new Error("Missing parent");
  return t2;
}
function k({ slot: t2 = ref({}), name: o2 = "Description", props: s3 = {} } = {}) {
  let e2 = ref([]);
  function r2(n2) {
    return e2.value.push(n2), () => {
      let i2 = e2.value.indexOf(n2);
      i2 !== -1 && e2.value.splice(i2, 1);
    };
  }
  return provide(u, { register: r2, slot: t2, name: o2, props: s3 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t2, { attrs: o2, slots: s3 }) {
  var n2;
  let e2 = (n2 = t2.id) != null ? n2 : `headlessui-description-${i$6()}`, r2 = w();
  return onMounted(() => onUnmounted(r2.register(e2))), () => {
    let { name: i2 = "Description", slot: l2 = ref({}), props: d2 = {} } = r2, { ...c2 } = t2, f2 = { ...Object.entries(d2).reduce((a2, [g2, m2]) => Object.assign(a2, { [g2]: unref(m2) }), {}), id: e2 };
    return A$3({ ourProps: f2, theirProps: c2, slot: l2.value, attrs: o2, slots: s3, name: i2 });
  };
} });
function x(e2) {
  let t2 = i$4(e2);
  if (!t2) {
    if (e2 === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e2}`);
  }
  let l2 = t2.getElementById("headlessui-portal-root");
  if (l2) return l2;
  let r2 = t2.createElement("div");
  return r2.setAttribute("id", "headlessui-portal-root"), t2.body.appendChild(r2);
}
const f = /* @__PURE__ */ new WeakMap();
function U$1(e2) {
  var t2;
  return (t2 = f.get(e2)) != null ? t2 : 0;
}
function M(e2, t2) {
  let l2 = t2(U$1(e2));
  return l2 <= 0 ? f.delete(e2) : f.set(e2, l2), l2;
}
let $$1 = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e2, { slots: t2, attrs: l2 }) {
  let r2 = ref(null), i2 = computed(() => i$4(r2)), o2 = s$1(), u2 = inject(H$1, null), n2 = ref(o2 === true || u2 == null ? x(r2.value) : u2.resolveTarget());
  n2.value && M(n2.value, (a2) => a2 + 1);
  let c2 = ref(false);
  onMounted(() => {
    c2.value = true;
  }), watchEffect(() => {
    o2 || u2 != null && (n2.value = u2.resolveTarget());
  });
  let v2 = inject(d$1, null), g2 = false, b2 = getCurrentInstance();
  return watch(r2, () => {
    if (g2 || !v2) return;
    let a2 = o$3(r2);
    a2 && (onUnmounted(v2.register(a2), b2), g2 = true);
  }), onUnmounted(() => {
    var P2, T2;
    let a2 = (P2 = i2.value) == null ? void 0 : P2.getElementById("headlessui-portal-root");
    !a2 || n2.value !== a2 || M(n2.value, (L2) => L2 - 1) || n2.value.children.length > 0 || (T2 = n2.value.parentElement) == null || T2.removeChild(n2.value);
  }), () => {
    if (!c2.value || n2.value === null) return null;
    let a2 = { ref: r2, "data-headlessui-portal": "" };
    return h$1(Teleport, { to: n2.value }, A$3({ ourProps: a2, theirProps: e2, slot: {}, attrs: l2, slots: t2, name: "Portal" }));
  };
} }), d$1 = Symbol("PortalParentContext");
function q() {
  let e2 = inject(d$1, null), t2 = ref([]);
  function l2(o2) {
    return t2.value.push(o2), e2 && e2.register(o2), () => r2(o2);
  }
  function r2(o2) {
    let u2 = t2.value.indexOf(o2);
    u2 !== -1 && t2.value.splice(u2, 1), e2 && e2.unregister(o2);
  }
  let i2 = { register: l2, unregister: r2, portals: t2 };
  return [t2, defineComponent({ name: "PortalWrapper", setup(o2, { slots: u2 }) {
    return provide(d$1, i2), () => {
      var n2;
      return (n2 = u2.default) == null ? void 0 : n2.call(u2);
    };
  } })];
}
let H$1 = Symbol("PortalGroupContext"), z = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e2, { attrs: t2, slots: l2 }) {
  let r2 = reactive({ resolveTarget() {
    return e2.target;
  } });
  return provide(H$1, r2), () => {
    let { target: i2, ...o2 } = e2;
    return A$3({ theirProps: o2, ourProps: {}, slot: {}, attrs: t2, slots: l2, name: "PortalGroup" });
  };
} });
var Te$1 = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Te$1 || {});
let H = Symbol("DialogContext");
function T(t2) {
  let i2 = inject(H, null);
  if (i2 === null) {
    let l2 = new Error(`<${t2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T), l2;
  }
  return i2;
}
let A$1 = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ye = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: A$1 }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (t2) => true }, setup(t2, { emit: i2, attrs: l2, slots: p2, expose: s$12 }) {
  var q$1, W2;
  let n2 = (q$1 = t2.id) != null ? q$1 : `headlessui-dialog-${i$6()}`, u2 = ref(false);
  onMounted(() => {
    u2.value = true;
  });
  let r2 = false, g2 = computed(() => t2.role === "dialog" || t2.role === "alertdialog" ? t2.role : (r2 || (r2 = true, console.warn(`Invalid role [${g2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S2 = l$2(), R2 = computed(() => t2.open === A$1 && S2 !== null ? (S2.value & i$1.Open) === i$1.Open : t2.open), m2 = ref(null), E$22 = computed(() => i$4(m2));
  if (s$12({ el: m2, $el: m2 }), !(t2.open !== A$1 || S2 !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R2.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R2.value === A$1 ? void 0 : t2.open}`);
  let c2 = computed(() => u2.value && R2.value ? 0 : 1), k$1 = computed(() => c2.value === 0), w2 = computed(() => D.value > 1), N2 = inject(H, null) !== null, [Q2, X] = q(), { resolveContainers: B2, mainTreeNodeRef: K2, MainTreeNode: Z } = N$1({ portals: Q2, defaultContainers: [computed(() => {
    var e2;
    return (e2 = h2.panelRef.value) != null ? e2 : m2.value;
  })] }), ee = computed(() => w2.value ? "parent" : "leaf"), U2 = computed(() => S2 !== null ? (S2.value & i$1.Closing) === i$1.Closing : false), te = computed(() => N2 || U2.value ? false : k$1.value), le2 = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? void 0 : e2.querySelectorAll("body > *")) != null ? a2 : []).find((f2) => f2.id === "headlessui-portal-root" ? false : f2.contains(o$3(K2)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(le2, te);
  let ae2 = computed(() => w2.value ? true : k$1.value), oe = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? void 0 : e2.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((f2) => f2.contains(o$3(K2)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(oe, ae2), R$1({ type: "Dialog", enabled: computed(() => c2.value === 0), element: m2, onUpdate: (e2, a2) => {
    if (a2 === "Dialog") return u$7(e2, { [s2.Add]: () => D.value += 1, [s2.Remove]: () => D.value -= 1 });
  } });
  let re2 = k({ name: "DialogDescription", slot: computed(() => ({ open: R2.value })) }), M2 = ref(null), h2 = { titleId: M2, panelRef: ref(null), dialogState: c2, setTitleId(e2) {
    M2.value !== e2 && (M2.value = e2);
  }, close() {
    i2("close", false);
  } };
  provide(H, h2);
  let ne2 = computed(() => !(!k$1.value || w2.value));
  w$2(B2, (e2, a2) => {
    e2.preventDefault(), h2.close(), nextTick(() => a2 == null ? void 0 : a2.focus());
  }, ne2);
  let ie2 = computed(() => !(w2.value || c2.value !== 0));
  E$1((W2 = E$22.value) == null ? void 0 : W2.defaultView, "keydown", (e2) => {
    ie2.value && (e2.defaultPrevented || e2.key === o$2.Escape && (e2.preventDefault(), e2.stopPropagation(), h2.close()));
  });
  let ue2 = computed(() => !(U2.value || c2.value !== 0 || N2));
  return d$2(E$22, ue2, (e2) => {
    var a2;
    return { containers: [...(a2 = e2.containers) != null ? a2 : [], B2] };
  }), watchEffect((e2) => {
    if (c2.value !== 0) return;
    let a2 = o$3(m2);
    if (!a2) return;
    let d2 = new ResizeObserver((f2) => {
      for (let L2 of f2) {
        let x2 = L2.target.getBoundingClientRect();
        x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && h2.close();
      }
    });
    d2.observe(a2), e2(() => d2.disconnect());
  }), () => {
    let { open: e2, initialFocus: a2, ...d2 } = t2, f2 = { ...l2, ref: m2, id: n2, role: g2.value, "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": M2.value, "aria-describedby": re2.value }, L2 = { open: c2.value === 0 };
    return h$1(u$2, { force: true }, () => [h$1($$1, () => h$1(z, { target: m2.value }, () => h$1(u$2, { force: false }, () => h$1(ue$1, { initialFocus: a2, containers: B2, features: k$1.value ? u$7(ee.value, { parent: ue$1.features.RestoreFocus, leaf: ue$1.features.All & ~ue$1.features.FocusLock }) : ue$1.features.None }, () => h$1(X, {}, () => A$3({ ourProps: f2, theirProps: { ...d2, ...l2 }, slot: L2, attrs: l2, slots: p2, visible: c2.value === 0, features: N$3.RenderStrategy | N$3.Static, name: "Dialog" })))))), h$1(Z)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var u2;
  let p2 = (u2 = t2.id) != null ? u2 : `headlessui-dialog-overlay-${i$6()}`, s3 = T("DialogOverlay");
  function n2(r2) {
    r2.target === r2.currentTarget && (r2.preventDefault(), r2.stopPropagation(), s3.close());
  }
  return () => {
    let { ...r2 } = t2;
    return A$3({ ourProps: { id: p2, "aria-hidden": true, onClick: n2 }, theirProps: r2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: false, setup(t2, { attrs: i2, slots: l2, expose: p2 }) {
  var r2;
  let s3 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-backdrop-${i$6()}`, n2 = T("DialogBackdrop"), u2 = ref(null);
  return p2({ el: u2, $el: u2 }), onMounted(() => {
    if (n2.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...g2 } = t2, D = { id: s3, ref: u2, "aria-hidden": true };
    return h$1(u$2, { force: true }, () => h$1($$1, () => A$3({ ourProps: D, theirProps: { ...i2, ...g2 }, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogBackdrop" })));
  };
} });
let Ge$1 = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2, expose: p2 }) {
  var r2;
  let s3 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-panel-${i$6()}`, n2 = T("DialogPanel");
  p2({ el: n2.panelRef, $el: n2.panelRef });
  function u2(g2) {
    g2.stopPropagation();
  }
  return () => {
    let { ...g2 } = t2, D = { id: s3, ref: n2.panelRef, onClick: u2 };
    return A$3({ ourProps: D, theirProps: g2, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var n2;
  let p2 = (n2 = t2.id) != null ? n2 : `headlessui-dialog-title-${i$6()}`, s3 = T("DialogTitle");
  return onMounted(() => {
    s3.setTitleId(p2), onUnmounted(() => s3.setTitleId(null));
  }), () => {
    let { ...u2 } = t2;
    return A$3({ ourProps: { id: p2 }, theirProps: u2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogTitle" });
  };
} });
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e2) {
  var r2, i2;
  let n2 = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(true);
  if (!(t2 instanceof HTMLElement)) return n2;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) f2.remove(), u2 = true;
  let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g$2(e2) {
  let n2 = e2.getAttribute("aria-label");
  if (typeof n2 == "string") return n2.trim();
  let t2 = e2.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = (void 0).getElementById(l2);
      if (r2) {
        let i2 = r2.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0) return u2.join(", ");
  }
  return o(e2).trim();
}
function p(a2) {
  let t2 = ref(""), r2 = ref("");
  return () => {
    let e2 = o$3(a2);
    if (!e2) return "";
    let l2 = e2.innerText;
    if (t2.value === l2) return r2.value;
    let u2 = g$2(e2).trim().toLowerCase();
    return t2.value = l2, r2.value = u2, u2;
  };
}
function pe$1(o2, b2) {
  return o2 === b2;
}
var ce$1 = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(ce$1 || {}), ve = ((r2) => (r2[r2.Single = 0] = "Single", r2[r2.Multi = 1] = "Multi", r2))(ve || {}), be = ((r2) => (r2[r2.Pointer = 0] = "Pointer", r2[r2.Other = 1] = "Other", r2))(be || {});
function me$1(o2) {
  requestAnimationFrame(() => requestAnimationFrame(o2));
}
let $ = Symbol("ListboxContext");
function A(o2) {
  let b2 = inject($, null);
  if (b2 === null) {
    let r2 = new Error(`<${o2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, A), r2;
  }
  return b2;
}
let Ie = defineComponent({ name: "Listbox", emits: { "update:modelValue": (o2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe$1 }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(o2, { slots: b2, attrs: r2, emit: w2 }) {
  let n2 = ref(1), e2 = ref(null), f2 = ref(null), v2 = ref(null), s3 = ref([]), m2 = ref(""), p2 = ref(null), a2 = ref(1);
  function u2(t2 = (i2) => i2) {
    let i2 = p2.value !== null ? s3.value[p2.value] : null, l2 = O(t2(s3.value.slice()), (O2) => o$3(O2.dataRef.domRef)), d2 = i2 ? l2.indexOf(i2) : null;
    return d2 === -1 && (d2 = null), { options: l2, activeOptionIndex: d2 };
  }
  let D = computed(() => o2.multiple ? 1 : 0), [y2, L2] = d$5(computed(() => o2.modelValue), (t2) => w2("update:modelValue", t2), computed(() => o2.defaultValue)), M2 = computed(() => y2.value === void 0 ? u$7(D.value, { [1]: [], [0]: void 0 }) : y2.value), k2 = { listboxState: n2, value: M2, mode: D, compare(t2, i2) {
    if (typeof o2.by == "string") {
      let l2 = o2.by;
      return (t2 == null ? void 0 : t2[l2]) === (i2 == null ? void 0 : i2[l2]);
    }
    return o2.by(t2, i2);
  }, orientation: computed(() => o2.horizontal ? "horizontal" : "vertical"), labelRef: e2, buttonRef: f2, optionsRef: v2, disabled: computed(() => o2.disabled), options: s3, searchQuery: m2, activeOptionIndex: p2, activationTrigger: a2, closeListbox() {
    o2.disabled || n2.value !== 1 && (n2.value = 1, p2.value = null);
  }, openListbox() {
    o2.disabled || n2.value !== 0 && (n2.value = 0);
  }, goToOption(t2, i2, l2) {
    if (o2.disabled || n2.value === 1) return;
    let d2 = u2(), O2 = f$2(t2 === c$1.Specific ? { focus: c$1.Specific, id: i2 } : { focus: t2 }, { resolveItems: () => d2.options, resolveActiveIndex: () => d2.activeOptionIndex, resolveId: (h2) => h2.id, resolveDisabled: (h2) => h2.dataRef.disabled });
    m2.value = "", p2.value = O2, a2.value = l2 != null ? l2 : 1, s3.value = d2.options;
  }, search(t2) {
    if (o2.disabled || n2.value === 1) return;
    let l2 = m2.value !== "" ? 0 : 1;
    m2.value += t2.toLowerCase();
    let O2 = (p2.value !== null ? s3.value.slice(p2.value + l2).concat(s3.value.slice(0, p2.value + l2)) : s3.value).find((I2) => I2.dataRef.textValue.startsWith(m2.value) && !I2.dataRef.disabled), h2 = O2 ? s3.value.indexOf(O2) : -1;
    h2 === -1 || h2 === p2.value || (p2.value = h2, a2.value = 1);
  }, clearSearch() {
    o2.disabled || n2.value !== 1 && m2.value !== "" && (m2.value = "");
  }, registerOption(t2, i2) {
    let l2 = u2((d2) => [...d2, { id: t2, dataRef: i2 }]);
    s3.value = l2.options, p2.value = l2.activeOptionIndex;
  }, unregisterOption(t2) {
    let i2 = u2((l2) => {
      let d2 = l2.findIndex((O2) => O2.id === t2);
      return d2 !== -1 && l2.splice(d2, 1), l2;
    });
    s3.value = i2.options, p2.value = i2.activeOptionIndex, a2.value = 1;
  }, theirOnChange(t2) {
    o2.disabled || L2(t2);
  }, select(t2) {
    o2.disabled || L2(u$7(D.value, { [0]: () => t2, [1]: () => {
      let i2 = toRaw(k2.value.value).slice(), l2 = toRaw(t2), d2 = i2.findIndex((O2) => k2.compare(l2, toRaw(O2)));
      return d2 === -1 ? i2.push(l2) : i2.splice(d2, 1), i2;
    } }));
  } };
  w$2([f2, v2], (t2, i2) => {
    var l2;
    k2.closeListbox(), w$4(i2, h.Loose) || (t2.preventDefault(), (l2 = o$3(f2)) == null || l2.focus());
  }, computed(() => n2.value === 0)), provide($, k2), t$2(computed(() => u$7(n2.value, { [0]: i$1.Open, [1]: i$1.Closed })));
  let C = computed(() => {
    var t2;
    return (t2 = o$3(f2)) == null ? void 0 : t2.closest("form");
  });
  return onMounted(() => {
    watch([C], () => {
      if (!C.value || o2.defaultValue === void 0) return;
      function t2() {
        k2.theirOnChange(o2.defaultValue);
      }
      return C.value.addEventListener("reset", t2), () => {
        var i2;
        (i2 = C.value) == null || i2.removeEventListener("reset", t2);
      };
    }, { immediate: true });
  }), () => {
    let { name: t2, modelValue: i2, disabled: l2, form: d2, ...O2 } = o2, h2 = { open: n2.value === 0, disabled: l2, value: M2.value };
    return h$1(Fragment, [...t2 != null && M2.value != null ? e$1({ [t2]: M2.value }).map(([I2, Q2]) => h$1(f$3, E$2({ features: u$4.Hidden, key: I2, as: "input", type: "hidden", hidden: true, readOnly: true, form: d2, disabled: l2, name: I2, value: Q2 }))) : [], A$3({ ourProps: {}, theirProps: { ...r2, ...T$1(O2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: h2, slots: b2, attrs: r2, name: "Listbox" })]);
  };
} });
defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(o2, { attrs: b2, slots: r2 }) {
  var f2;
  let w2 = (f2 = o2.id) != null ? f2 : `headlessui-listbox-label-${i$6()}`, n2 = A("ListboxLabel");
  function e2() {
    var v2;
    (v2 = o$3(n2.buttonRef)) == null || v2.focus({ preventScroll: true });
  }
  return () => {
    let v2 = { open: n2.listboxState.value === 0, disabled: n2.disabled.value }, { ...s3 } = o2, m2 = { id: w2, ref: n2.labelRef, onClick: e2 };
    return A$3({ ourProps: m2, theirProps: s3, slot: v2, attrs: b2, slots: r2, name: "ListboxLabel" });
  };
} });
let je$1 = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(o2, { attrs: b2, slots: r2, expose: w2 }) {
  var p2;
  let n2 = (p2 = o2.id) != null ? p2 : `headlessui-listbox-button-${i$6()}`, e2 = A("ListboxButton");
  w2({ el: e2.buttonRef, $el: e2.buttonRef });
  function f2(a2) {
    switch (a2.key) {
      case o$2.Space:
      case o$2.Enter:
      case o$2.ArrowDown:
        a2.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$3(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c$1.First);
        });
        break;
      case o$2.ArrowUp:
        a2.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$3(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c$1.Last);
        });
        break;
    }
  }
  function v2(a2) {
    switch (a2.key) {
      case o$2.Space:
        a2.preventDefault();
        break;
    }
  }
  function s3(a2) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var u2;
      return (u2 = o$3(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })) : (a2.preventDefault(), e2.openListbox(), me$1(() => {
      var u2;
      return (u2 = o$3(e2.optionsRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })));
  }
  let m2 = s$3(computed(() => ({ as: o2.as, type: b2.type })), e2.buttonRef);
  return () => {
    var y2, L2;
    let a2 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { ...u2 } = o2, D = { ref: e2.buttonRef, id: n2, type: m2.value, "aria-haspopup": "listbox", "aria-controls": (y2 = o$3(e2.optionsRef)) == null ? void 0 : y2.id, "aria-expanded": e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(L2 = o$3(e2.labelRef)) == null ? void 0 : L2.id, n2].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: f2, onKeyup: v2, onClick: s3 };
    return A$3({ ourProps: D, theirProps: u2, slot: a2, attrs: b2, slots: r2, name: "ListboxButton" });
  };
} }), Ae = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(o2, { attrs: b2, slots: r2, expose: w2 }) {
  var p2;
  let n2 = (p2 = o2.id) != null ? p2 : `headlessui-listbox-options-${i$6()}`, e2 = A("ListboxOptions"), f2 = ref(null);
  w2({ el: e2.optionsRef, $el: e2.optionsRef });
  function v2(a2) {
    switch (f2.value && clearTimeout(f2.value), a2.key) {
      case o$2.Space:
        if (e2.searchQuery.value !== "") return a2.preventDefault(), a2.stopPropagation(), e2.search(a2.key);
      case o$2.Enter:
        if (a2.preventDefault(), a2.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let u2 = e2.options.value[e2.activeOptionIndex.value];
          e2.select(u2.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$3(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        }));
        break;
      case u$7(e2.orientation.value, { vertical: o$2.ArrowDown, horizontal: o$2.ArrowRight }):
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.Next);
      case u$7(e2.orientation.value, { vertical: o$2.ArrowUp, horizontal: o$2.ArrowLeft }):
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.Previous);
      case o$2.Home:
      case o$2.PageUp:
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.First);
      case o$2.End:
      case o$2.PageDown:
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.Last);
      case o$2.Escape:
        a2.preventDefault(), a2.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$3(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        });
        break;
      case o$2.Tab:
        a2.preventDefault(), a2.stopPropagation();
        break;
      default:
        a2.key.length === 1 && (e2.search(a2.key), f2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let s3 = l$2(), m2 = computed(() => s3 !== null ? (s3.value & i$1.Open) === i$1.Open : e2.listboxState.value === 0);
  return () => {
    var y2, L2;
    let a2 = { open: e2.listboxState.value === 0 }, { ...u2 } = o2, D = { "aria-activedescendant": e2.activeOptionIndex.value === null || (y2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : y2.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (L2 = o$3(e2.buttonRef)) == null ? void 0 : L2.id, "aria-orientation": e2.orientation.value, id: n2, onKeydown: v2, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return A$3({ ourProps: D, theirProps: u2, slot: a2, attrs: b2, slots: r2, features: N$3.RenderStrategy | N$3.Static, visible: m2.value, name: "ListboxOptions" });
  };
} }), Fe = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(o2, { slots: b2, attrs: r2, expose: w2 }) {
  var C;
  let n2 = (C = o2.id) != null ? C : `headlessui-listbox-option-${i$6()}`, e2 = A("ListboxOption"), f2 = ref(null);
  w2({ el: f2, $el: f2 });
  let v2 = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === n2 : false), s3 = computed(() => u$7(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(o2.value)), [1]: () => toRaw(e2.value.value).some((t2) => e2.compare(toRaw(t2), toRaw(o2.value))) })), m2 = computed(() => u$7(e2.mode.value, { [1]: () => {
    var i2;
    let t2 = toRaw(e2.value.value);
    return ((i2 = e2.options.value.find((l2) => t2.some((d2) => e2.compare(toRaw(d2), toRaw(l2.dataRef.value))))) == null ? void 0 : i2.id) === n2;
  }, [0]: () => s3.value })), p$1 = p(f2), a2 = computed(() => ({ disabled: o2.disabled, value: o2.value, get textValue() {
    return p$1();
  }, domRef: f2 }));
  onMounted(() => e2.registerOption(n2, a2)), onUnmounted(() => e2.unregisterOption(n2)), onMounted(() => {
    watch([e2.listboxState, s3], () => {
      e2.listboxState.value === 0 && s3.value && u$7(e2.mode.value, { [1]: () => {
        m2.value && e2.goToOption(c$1.Specific, n2);
      }, [0]: () => {
        e2.goToOption(c$1.Specific, n2);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && v2.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var t2, i2;
      return (i2 = (t2 = o$3(f2)) == null ? void 0 : t2.scrollIntoView) == null ? void 0 : i2.call(t2, { block: "nearest" });
    });
  });
  function u2(t2) {
    if (o2.disabled) return t2.preventDefault();
    e2.select(o2.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var i2;
      return (i2 = o$3(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    }));
  }
  function D() {
    if (o2.disabled) return e2.goToOption(c$1.Nothing);
    e2.goToOption(c$1.Specific, n2);
  }
  let y2 = u$5();
  function L2(t2) {
    y2.update(t2);
  }
  function M2(t2) {
    y2.wasMoved(t2) && (o2.disabled || v2.value || e2.goToOption(c$1.Specific, n2, 0));
  }
  function k2(t2) {
    y2.wasMoved(t2) && (o2.disabled || v2.value && e2.goToOption(c$1.Nothing));
  }
  return () => {
    let { disabled: t2 } = o2, i2 = { active: v2.value, selected: s3.value, disabled: t2 }, { value: l2, disabled: d2, ...O2 } = o2, h2 = { id: n2, ref: f2, role: "option", tabIndex: t2 === true ? void 0 : -1, "aria-disabled": t2 === true ? true : void 0, "aria-selected": s3.value, disabled: void 0, onClick: u2, onFocus: D, onPointerenter: L2, onMouseenter: L2, onPointermove: M2, onMousemove: M2, onPointerleave: k2, onMouseleave: k2 };
    return A$3({ ourProps: h2, theirProps: O2, slot: i2, attrs: r2, slots: b2, name: "ListboxOption" });
  };
} });
var Se$1 = ((s3) => (s3[s3.Open = 0] = "Open", s3[s3.Closed = 1] = "Closed", s3))(Se$1 || {});
let re = Symbol("PopoverContext");
function U(d2) {
  let P2 = inject(re, null);
  if (P2 === null) {
    let s3 = new Error(`<${d2} /> is missing a parent <${ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s3, U), s3;
  }
  return P2;
}
let le = Symbol("PopoverGroupContext");
function ae() {
  return inject(le, null);
}
let ue = Symbol("PopoverPanelContext");
function ge$1() {
  return inject(ue, null);
}
let ye = defineComponent({ name: "Popover", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d2, { slots: P2, attrs: s3, expose: h$2 }) {
  var u2;
  let f2 = ref(null);
  h$2({ el: f2, $el: f2 });
  let t2 = ref(1), o2 = ref(null), y2 = ref(null), v2 = ref(null), m2 = ref(null), b2 = computed(() => i$4(f2)), E2 = computed(() => {
    var L2, $2;
    if (!o$3(o2) || !o$3(m2)) return false;
    for (let x2 of (void 0).querySelectorAll("body > *")) if (Number(x2 == null ? void 0 : x2.contains(o$3(o2))) ^ Number(x2 == null ? void 0 : x2.contains(o$3(m2)))) return true;
    let e2 = E$3(), r2 = e2.indexOf(o$3(o2)), l2 = (r2 + e2.length - 1) % e2.length, g2 = (r2 + 1) % e2.length, G = e2[l2], C = e2[g2];
    return !((L2 = o$3(m2)) != null && L2.contains(G)) && !(($2 = o$3(m2)) != null && $2.contains(C));
  }), a2 = { popoverState: t2, buttonId: ref(null), panelId: ref(null), panel: m2, button: o2, isPortalled: E2, beforePanelSentinel: y2, afterPanelSentinel: v2, togglePopover() {
    t2.value = u$7(t2.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    t2.value !== 1 && (t2.value = 1);
  }, close(e2) {
    a2.closePopover();
    let r2 = (() => e2 ? e2 instanceof HTMLElement ? e2 : e2.value instanceof HTMLElement ? o$3(e2) : o$3(a2.button) : o$3(a2.button))();
    r2 == null || r2.focus();
  } };
  provide(re, a2), t$2(computed(() => u$7(t2.value, { [0]: i$1.Open, [1]: i$1.Closed })));
  let S2 = { buttonId: a2.buttonId, panelId: a2.panelId, close() {
    a2.closePopover();
  } }, c2 = ae(), I2 = c2 == null ? void 0 : c2.registerPopover, [F2, w2] = q(), i2 = N$1({ mainTreeNodeRef: c2 == null ? void 0 : c2.mainTreeNodeRef, portals: F2, defaultContainers: [o2, m2] });
  function p2() {
    var e2, r2, l2, g2;
    return (g2 = c2 == null ? void 0 : c2.isFocusWithinPopoverGroup()) != null ? g2 : ((e2 = b2.value) == null ? void 0 : e2.activeElement) && (((r2 = o$3(o2)) == null ? void 0 : r2.contains(b2.value.activeElement)) || ((l2 = o$3(m2)) == null ? void 0 : l2.contains(b2.value.activeElement)));
  }
  return watchEffect(() => I2 == null ? void 0 : I2(S2)), E$1((u2 = b2.value) == null ? void 0 : u2.defaultView, "focus", (e2) => {
    var r2, l2;
    e2.target !== void 0 && e2.target instanceof HTMLElement && t2.value === 0 && (p2() || o2 && m2 && (i2.contains(e2.target) || (r2 = o$3(a2.beforePanelSentinel)) != null && r2.contains(e2.target) || (l2 = o$3(a2.afterPanelSentinel)) != null && l2.contains(e2.target) || a2.closePopover()));
  }, true), w$2(i2.resolveContainers, (e2, r2) => {
    var l2;
    a2.closePopover(), w$4(r2, h.Loose) || (e2.preventDefault(), (l2 = o$3(o2)) == null || l2.focus());
  }, computed(() => t2.value === 0)), () => {
    let e2 = { open: t2.value === 0, close: a2.close };
    return h$1(Fragment, [h$1(w2, {}, () => A$3({ theirProps: { ...d2, ...s3 }, ourProps: { ref: f2 }, slot: e2, slots: P2, attrs: s3, name: "Popover" })), h$1(i2.MainTreeNode)]);
  };
} }), Ge = defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d2, { attrs: P$1, slots: s3, expose: h2 }) {
  var u2;
  let f2 = (u2 = d2.id) != null ? u2 : `headlessui-popover-button-${i$6()}`, t2 = U("PopoverButton"), o2 = computed(() => i$4(t2.button));
  h2({ el: t2.button, $el: t2.button }), onMounted(() => {
    t2.buttonId.value = f2;
  }), onUnmounted(() => {
    t2.buttonId.value = null;
  });
  let y2 = ae(), v2 = y2 == null ? void 0 : y2.closeOthers, m2 = ge$1(), b2 = computed(() => m2 === null ? false : m2.value === t2.panelId.value), E2 = ref(null), a2 = `headlessui-focus-sentinel-${i$6()}`;
  b2.value || watchEffect(() => {
    t2.button.value = o$3(E2);
  });
  let S2 = s$3(computed(() => ({ as: d2.as, type: P$1.type })), E2);
  function c2(e2) {
    var r2, l2, g2, G, C;
    if (b2.value) {
      if (t2.popoverState.value === 1) return;
      switch (e2.key) {
        case o$2.Space:
        case o$2.Enter:
          e2.preventDefault(), (l2 = (r2 = e2.target).click) == null || l2.call(r2), t2.closePopover(), (g2 = o$3(t2.button)) == null || g2.focus();
          break;
      }
    } else switch (e2.key) {
      case o$2.Space:
      case o$2.Enter:
        e2.preventDefault(), e2.stopPropagation(), t2.popoverState.value === 1 && (v2 == null || v2(t2.buttonId.value)), t2.togglePopover();
        break;
      case o$2.Escape:
        if (t2.popoverState.value !== 0) return v2 == null ? void 0 : v2(t2.buttonId.value);
        if (!o$3(t2.button) || (G = o2.value) != null && G.activeElement && !((C = o$3(t2.button)) != null && C.contains(o2.value.activeElement))) return;
        e2.preventDefault(), e2.stopPropagation(), t2.closePopover();
        break;
    }
  }
  function I2(e2) {
    b2.value || e2.key === o$2.Space && e2.preventDefault();
  }
  function F2(e2) {
    var r2, l2;
    d2.disabled || (b2.value ? (t2.closePopover(), (r2 = o$3(t2.button)) == null || r2.focus()) : (e2.preventDefault(), e2.stopPropagation(), t2.popoverState.value === 1 && (v2 == null || v2(t2.buttonId.value)), t2.togglePopover(), (l2 = o$3(t2.button)) == null || l2.focus()));
  }
  function w2(e2) {
    e2.preventDefault(), e2.stopPropagation();
  }
  let i2 = n();
  function p2() {
    let e2 = o$3(t2.panel);
    if (!e2) return;
    function r2() {
      u$7(i2.value, { [d$3.Forwards]: () => P(e2, N$4.First), [d$3.Backwards]: () => P(e2, N$4.Last) }) === T$2.Error && P(E$3().filter((g2) => g2.dataset.headlessuiFocusGuard !== "true"), u$7(i2.value, { [d$3.Forwards]: N$4.Next, [d$3.Backwards]: N$4.Previous }), { relativeTo: o$3(t2.button) });
    }
    r2();
  }
  return () => {
    let e2 = t2.popoverState.value === 0, r2 = { open: e2 }, { ...l2 } = d2, g2 = b2.value ? { ref: E2, type: S2.value, onKeydown: c2, onClick: F2 } : { ref: E2, id: f2, type: S2.value, "aria-expanded": t2.popoverState.value === 0, "aria-controls": o$3(t2.panel) ? t2.panelId.value : void 0, disabled: d2.disabled ? true : void 0, onKeydown: c2, onKeyup: I2, onClick: F2, onMousedown: w2 };
    return h$1(Fragment, [A$3({ ourProps: g2, theirProps: { ...P$1, ...l2 }, slot: r2, attrs: P$1, slots: s3, name: "PopoverButton" }), e2 && !b2.value && t2.isPortalled.value && h$1(f$3, { id: a2, features: u$4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: p2 })]);
  };
} });
defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(d2, { attrs: P2, slots: s3 }) {
  let h2 = U("PopoverOverlay"), f2 = `headlessui-popover-overlay-${i$6()}`, t2 = l$2(), o2 = computed(() => t2 !== null ? (t2.value & i$1.Open) === i$1.Open : h2.popoverState.value === 0);
  function y2() {
    h2.closePopover();
  }
  return () => {
    let v2 = { open: h2.popoverState.value === 0 };
    return A$3({ ourProps: { id: f2, "aria-hidden": true, onClick: y2 }, theirProps: d2, slot: v2, attrs: P2, slots: s3, features: N$3.RenderStrategy | N$3.Static, visible: o2.value, name: "PopoverOverlay" });
  };
} });
let je = defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d2, { attrs: P$1, slots: s3, expose: h2 }) {
  var w2;
  let f2 = (w2 = d2.id) != null ? w2 : `headlessui-popover-panel-${i$6()}`, { focus: t2 } = d2, o2 = U("PopoverPanel"), y2 = computed(() => i$4(o2.panel)), v2 = `headlessui-focus-sentinel-before-${i$6()}`, m2 = `headlessui-focus-sentinel-after-${i$6()}`;
  h2({ el: o2.panel, $el: o2.panel }), onMounted(() => {
    o2.panelId.value = f2;
  }), onUnmounted(() => {
    o2.panelId.value = null;
  }), provide(ue, o2.panelId), watchEffect(() => {
    var p2, u2;
    if (!t2 || o2.popoverState.value !== 0 || !o2.panel) return;
    let i2 = (p2 = y2.value) == null ? void 0 : p2.activeElement;
    (u2 = o$3(o2.panel)) != null && u2.contains(i2) || P(o$3(o2.panel), N$4.First);
  });
  let b2 = l$2(), E2 = computed(() => b2 !== null ? (b2.value & i$1.Open) === i$1.Open : o2.popoverState.value === 0);
  function a2(i2) {
    var p2, u2;
    switch (i2.key) {
      case o$2.Escape:
        if (o2.popoverState.value !== 0 || !o$3(o2.panel) || y2.value && !((p2 = o$3(o2.panel)) != null && p2.contains(y2.value.activeElement))) return;
        i2.preventDefault(), i2.stopPropagation(), o2.closePopover(), (u2 = o$3(o2.button)) == null || u2.focus();
        break;
    }
  }
  function S2(i2) {
    var u2, e2, r2, l2, g2;
    let p2 = i2.relatedTarget;
    p2 && o$3(o2.panel) && ((u2 = o$3(o2.panel)) != null && u2.contains(p2) || (o2.closePopover(), ((r2 = (e2 = o$3(o2.beforePanelSentinel)) == null ? void 0 : e2.contains) != null && r2.call(e2, p2) || (g2 = (l2 = o$3(o2.afterPanelSentinel)) == null ? void 0 : l2.contains) != null && g2.call(l2, p2)) && p2.focus({ preventScroll: true })));
  }
  let c2 = n();
  function I2() {
    let i2 = o$3(o2.panel);
    if (!i2) return;
    function p2() {
      u$7(c2.value, { [d$3.Forwards]: () => {
        var e2;
        P(i2, N$4.First) === T$2.Error && ((e2 = o$3(o2.afterPanelSentinel)) == null || e2.focus());
      }, [d$3.Backwards]: () => {
        var u2;
        (u2 = o$3(o2.button)) == null || u2.focus({ preventScroll: true });
      } });
    }
    p2();
  }
  function F2() {
    let i2 = o$3(o2.panel);
    if (!i2) return;
    function p2() {
      u$7(c2.value, { [d$3.Forwards]: () => {
        let u2 = o$3(o2.button), e2 = o$3(o2.panel);
        if (!u2) return;
        let r2 = E$3(), l2 = r2.indexOf(u2), g2 = r2.slice(0, l2 + 1), C = [...r2.slice(l2 + 1), ...g2];
        for (let L2 of C.slice()) if (L2.dataset.headlessuiFocusGuard === "true" || e2 != null && e2.contains(L2)) {
          let $2 = C.indexOf(L2);
          $2 !== -1 && C.splice($2, 1);
        }
        P(C, N$4.First, { sorted: false });
      }, [d$3.Backwards]: () => {
        var e2;
        P(i2, N$4.Previous) === T$2.Error && ((e2 = o$3(o2.button)) == null || e2.focus());
      } });
    }
    p2();
  }
  return () => {
    let i2 = { open: o2.popoverState.value === 0, close: o2.close }, { focus: p2, ...u2 } = d2, e2 = { ref: o2.panel, id: f2, onKeydown: a2, onFocusout: t2 && o2.popoverState.value === 0 ? S2 : void 0, tabIndex: -1 };
    return A$3({ ourProps: e2, theirProps: { ...P$1, ...u2 }, attrs: P$1, slot: i2, slots: { ...s3, default: (...r2) => {
      var l2;
      return [h$1(Fragment, [E2.value && o2.isPortalled.value && h$1(f$3, { id: v2, ref: o2.beforePanelSentinel, features: u$4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: I2 }), (l2 = s3.default) == null ? void 0 : l2.call(s3, ...r2), E2.value && o2.isPortalled.value && h$1(f$3, { id: m2, ref: o2.afterPanelSentinel, features: u$4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: F2 })])];
    } }, features: N$3.RenderStrategy | N$3.Static, visible: E2.value, name: "PopoverPanel" });
  };
} });
defineComponent({ name: "PopoverGroup", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d2, { attrs: P2, slots: s3, expose: h2 }) {
  let f2 = ref(null), t2 = shallowRef([]), o2 = computed(() => i$4(f2)), y2 = v();
  h2({ el: f2, $el: f2 });
  function v$12(a2) {
    let S2 = t2.value.indexOf(a2);
    S2 !== -1 && t2.value.splice(S2, 1);
  }
  function m2(a2) {
    return t2.value.push(a2), () => {
      v$12(a2);
    };
  }
  function b2() {
    var c2;
    let a2 = o2.value;
    if (!a2) return false;
    let S2 = a2.activeElement;
    return (c2 = o$3(f2)) != null && c2.contains(S2) ? true : t2.value.some((I2) => {
      var F2, w2;
      return ((F2 = a2.getElementById(I2.buttonId.value)) == null ? void 0 : F2.contains(S2)) || ((w2 = a2.getElementById(I2.panelId.value)) == null ? void 0 : w2.contains(S2));
    });
  }
  function E2(a2) {
    for (let S2 of t2.value) S2.buttonId.value !== a2 && S2.close();
  }
  return provide(le, { registerPopover: m2, unregisterPopover: v$12, isFocusWithinPopoverGroup: b2, closeOthers: E2, mainTreeNodeRef: y2.mainTreeNodeRef }), () => h$1(Fragment, [A$3({ ourProps: { ref: f2 }, theirProps: { ...d2, ...P2 }, slot: {}, attrs: P2, slots: s3, name: "PopoverGroup" }), h$1(y2.MainTreeNode)]);
} });
function l(r2) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called) return e2.called = true, r2(...t2);
  };
}
function m(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.add(...t2);
}
function d(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e2, t2) {
  let i2 = o$5();
  if (!e2) return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e2), [l2, s3] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r2) => r2.includes("ms") ? parseFloat(r2) : parseFloat(r2) * 1e3).sort((r2, c2) => c2 - r2);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s3) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e2, t2, i2, n2, a2, l$12) {
  let s3 = o$5(), o2 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e2, ...a2), m(e2, ...t2, ...i2), s3.nextFrame(() => {
    d(e2, ...i2), m(e2, ...n2), s3.add(F(e2, (u2) => (d(e2, ...n2, ...t2), m(e2, ...a2), o2(u2))));
  }), s3.add(() => d(e2, ...t2, ...i2, ...n2, ...a2)), s3.add(() => o2("cancelled")), s3.dispose;
}
function g(e2 = "") {
  return e2.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e2 = inject(R, null);
  if (e2 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function ge() {
  let e2 = inject(N, null);
  if (e2 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let N = Symbol("NestingContext");
function L(e2) {
  return "children" in e2 ? L(e2.children) : e2.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e2) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s3(n2, r2 = S.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$7(r2, { [S.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e2 == null || e2()));
  }
  function h2(n2) {
    let r2 = t2.value.find(({ id: l2 }) => l2 === n2);
    return r2 ? r2.state !== "visible" && (r2.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s3(n2, S.Unmount);
  }
  return { children: t2, register: h2, unregister: s3 };
}
let W = N$3.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3, expose: h2 }) {
  let n2 = ref(0);
  function r2() {
    n2.value |= i$1.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~i$1.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= i$1.Closing, t2("beforeLeave");
  }
  function S$12() {
    n2.value &= ~i$1.Closing, t2("afterLeave");
  }
  if (!me() && s$2()) return () => h$1(Se, { ...e2, onBeforeEnter: r2, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S$12 }, s3);
  let d2 = ref(null), y2 = computed(() => e2.unmount ? S.Unmount : S.Hidden);
  h2({ el: d2, $el: d2 });
  let { show: v2, appear: A2 } = Te(), { register: D, unregister: H2 } = ge(), i2 = ref(v2.value ? "visible" : "hidden"), I2 = { value: true }, c2 = i$6(), b2 = { value: false }, P2 = Q(() => {
    !b2.value && i2.value !== "hidden" && (i2.value = "hidden", H2(c2), S$12());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (y2.value === S.Hidden && c2) {
      if (v2.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$7(i2.value, { ["hidden"]: () => H2(c2), ["visible"]: () => D(c2) });
    }
  });
  let j2 = g(e2.enter), M2 = g(e2.enterFrom), X = g(e2.enterTo), _ = g(e2.entered), Y = g(e2.leave), Z = g(e2.leaveFrom), ee = g(e2.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o2 = o$3(d2);
        if (o2 instanceof Comment && o2.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o2) {
    let E2 = I2.value && !A2.value, p2 = o$3(d2);
    !p2 || !(p2 instanceof HTMLElement) || E2 || (b2.value = true, v2.value && r2(), v2.value || f2(), o2(v2.value ? L$1(p2, j2, M2, X, _, (V) => {
      b2.value = false, V === g$1.Finished && l2();
    }) : L$1(p2, Y, Z, ee, _, (V) => {
      b2.value = false, V === g$1.Finished && (L(P2) || (i2.value = "hidden", H2(c2), S$12()));
    })));
  }
  return onMounted(() => {
    watch([v2], (o2, E2, p2) => {
      te(p2), I2.value = false;
    }, { immediate: true });
  }), provide(N, P2), t$2(computed(() => u$7(i2.value, { ["visible"]: i$1.Open, ["hidden"]: i$1.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p2, enterFrom: V, enterTo: Ce, entered: ye2, leave: be2, leaveFrom: Ee2, leaveTo: Ve2, ...U2 } = e2, ne2 = { ref: d2 }, re2 = { ...U2, ...A2.value && v2.value && c$3.isServer ? { class: normalizeClass([a2.class, U2.class, ...j2, ...M2]) } : {} };
    return A$3({ theirProps: re2, ourProps: ne2, slot: {}, slots: s3, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3 }) {
  let h2 = l$2(), n2 = computed(() => e2.show === null && h2 !== null ? (h2.value & i$1.Open) === i$1.Open : e2.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r2 = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r2.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e2.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r2.value = "visible" : L(l2) || (r2.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$1(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y2 = { unmount: e2.unmount };
    return A$3({ ourProps: { ...y2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s3, default: () => [h$1(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...y2, ...d2 }, s3.default)] }, attrs: {}, features: W, visible: r2.value === "visible", name: "Transition" });
  };
} });
function getWindow(node) {
  if (node == null) {
    return void 0;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || void 0 : void 0;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = (void 0).userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return (void 0).userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : void 0, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x2 + width,
    bottom: y2 + height,
    left: x2,
    x: x2,
    y: y2
  };
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || (void 0).document).documentElement;
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y: y2
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function getVariation(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var passive = {
  passive: true
};
function effect$2(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window.removeEventListener("resize", instance.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect$2,
  data: {}
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x2 = _ref.x, y2 = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = void 0;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y2
  }, getWindow(popper2)) : {
    x: x2,
    y: y2
  };
  x2 = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$1,
  requires: ["computeStyles"]
};
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b2) {
    return overflows[a2] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrowModifier = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
popperGenerator({
  defaultModifiers: [...defaultModifiers, offset$1, flip$1, preventOverflow$1, computeStyles$1, eventListeners, arrowModifier]
});
function usePopper({
  locked = false,
  overflowPadding = 8,
  offsetDistance = 8,
  offsetSkid = 0,
  gpuAcceleration = true,
  adaptive = true,
  scroll = true,
  resize = true,
  arrow: arrow2 = false,
  placement,
  strategy
}, virtualReference) {
  const reference2 = ref(null);
  const popper2 = ref(null);
  const instance = ref(null);
  return [reference2, popper2, instance];
}
const useFormGroup = (inputProps, config2, bind = true) => {
  const formBus = inject("form-events", void 0);
  const formGroup = inject("form-group", void 0);
  const formInputs = inject("form-inputs", void 0);
  if (formGroup) {
    if (!bind || (inputProps == null ? void 0 : inputProps.legend)) {
      formGroup.inputId.value = void 0;
    } else if (inputProps == null ? void 0 : inputProps.id) {
      formGroup.inputId.value = inputProps == null ? void 0 : inputProps.id;
    }
    if (formInputs) {
      formInputs.value[formGroup.name.value] = formGroup.inputId.value;
    }
  }
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup == null ? void 0 : formGroup.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup == null ? void 0 : formGroup.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value || (formGroup == null ? void 0 : formGroup.eagerValidation.value)) {
      emitFormEvent("input", formGroup == null ? void 0 : formGroup.name.value);
    }
  }, 300);
  return {
    inputId: computed(() => {
      var _a;
      return (_a = inputProps == null ? void 0 : inputProps.id) != null ? _a : formGroup == null ? void 0 : formGroup.inputId.value;
    }),
    name: computed(() => {
      var _a;
      return (_a = inputProps == null ? void 0 : inputProps.name) != null ? _a : formGroup == null ? void 0 : formGroup.name.value;
    }),
    size: computed(() => {
      var _a2, _b;
      var _a;
      const formGroupSize = config2.size[formGroup == null ? void 0 : formGroup.size.value] ? formGroup == null ? void 0 : formGroup.size.value : null;
      return (_b = (_a2 = inputProps == null ? void 0 : inputProps.size) != null ? _a2 : formGroupSize) != null ? _b : (_a = config2.default) == null ? void 0 : _a.size;
    }),
    color: computed(() => {
      var _a;
      return ((_a = formGroup == null ? void 0 : formGroup.error) == null ? void 0 : _a.value) ? "red" : inputProps == null ? void 0 : inputProps.color;
    }),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};
function useInjectButtonGroup({ ui, props }) {
  const instance = getCurrentInstance();
  provide("ButtonGroupContextConsumer", true);
  const isParentPartOfGroup = inject("ButtonGroupContextConsumer", false);
  if (isParentPartOfGroup) {
    return {
      size: computed(() => props.size),
      rounded: computed(() => ui.value.rounded)
    };
  }
  let parent = instance.parent;
  let groupContext;
  while (parent && !groupContext) {
    if (parent.type.name === "ButtonGroup") {
      groupContext = inject(`group-${parent.uid}`);
      break;
    }
    parent = parent.parent;
  }
  const positionInGroup = computed(() => groupContext == null ? void 0 : groupContext.value.children.indexOf(instance));
  return {
    size: computed(() => {
      var _a;
      if (!(groupContext == null ? void 0 : groupContext.value)) return props.size;
      return (_a = groupContext == null ? void 0 : groupContext.value.size) != null ? _a : ui.value.default.size;
    }),
    rounded: computed(() => {
      if (!groupContext || positionInGroup.value === -1) return ui.value.rounded;
      if (groupContext.value.children.length === 1) return groupContext.value.ui.rounded;
      if (positionInGroup.value === 0) return groupContext.value.rounded.start;
      if (positionInGroup.value === groupContext.value.children.length - 1) return groupContext.value.rounded.end;
      return "rounded-none";
    })
  };
}
const config$8 = mergeConfig(appConfig.ui.strategy, appConfig.ui.select, select);
const configMenu = mergeConfig(appConfig.ui.strategy, appConfig.ui.selectMenu, selectMenu);
const _sfc_main$a = defineComponent({
  components: {
    HCombobox: lt,
    HComboboxButton: nt,
    HComboboxOptions: ut,
    HComboboxOption: rt,
    HComboboxInput: it,
    HListbox: Ie,
    HListboxButton: je$1,
    HListboxOptions: Ae,
    HListboxOption: Fe,
    UIcon: __nuxt_component_7,
    UAvatar: __nuxt_component_1$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array, Boolean],
      default: ""
    },
    query: {
      type: String,
      default: null
    },
    by: {
      type: String,
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$8.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: () => config$8.default.trailingIcon
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    selectedIcon: {
      type: String,
      default: () => configMenu.default.selectedIcon
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: [Boolean, Function],
      default: false
    },
    searchablePlaceholder: {
      type: String,
      default: () => configMenu.default.searchablePlaceholder.label
    },
    searchableLazy: {
      type: Boolean,
      default: false
    },
    clearSearchOnClose: {
      type: Boolean,
      default: () => configMenu.default.clearSearchOnClose
    },
    debounce: {
      type: Number,
      default: 200
    },
    creatable: {
      type: Boolean,
      default: false
    },
    showCreateOptionWhen: {
      type: [String, Function],
      default: () => configMenu.default.showCreateOptionWhen
    },
    placeholder: {
      type: String,
      default: null
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$8.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$8.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$8.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$8.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$8.variant),
          ...Object.values(config$8.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: null
    },
    searchAttributes: {
      type: Array,
      default: null
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    selectClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    uiMenu: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "update:query", "open", "close", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("select", toRef(props, "ui"), config$8, toRef(props, "class"));
    const { ui: uiMenu } = useUI("selectMenu", toRef(props, "uiMenu"), configMenu);
    const popper2 = computed(() => defu({}, props.popper, uiMenu.value.popper));
    const [trigger, container] = usePopper(popper2.value);
    const by = computed(() => {
      if (!props.by) return void 0;
      if (typeof props.by === "function") {
        return props.by;
      }
      const key = props.by;
      const hasDot = key.indexOf(".");
      if (hasDot > 0) {
        return (a2, z2) => {
          return accessor2(a2, key) === accessor2(z2, key);
        };
      }
      return key;
    });
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config$8);
    const size = computed(() => {
      var _a;
      return (_a = sizeButtonGroup.value) != null ? _a : sizeFormGroup.value;
    });
    const internalQuery = ref("");
    const query = computed({
      get() {
        var _a;
        return (_a = props.query) != null ? _a : internalQuery.value;
      },
      set(value) {
        internalQuery.value = value;
        emit("update:query", value);
      }
    });
    const selected = computed(() => {
      var _a;
      function compareValues(value1, value2) {
        if (by.value && typeof by.value !== "function" && typeof value1 === "object" && typeof value2 === "object") {
          return isEqual(value1[by.value], value2[by.value]);
        }
        return isEqual(value1, value2);
      }
      function getValue(value) {
        if (props.valueAttribute) {
          return accessor2(value, props.valueAttribute);
        }
        return value;
      }
      if (props.multiple) {
        const modelValue = props.modelValue;
        if (!Array.isArray(modelValue) || !modelValue.length) {
          return [];
        }
        return options.value.filter((option) => {
          const optionValue = getValue(option);
          return modelValue.some((value) => compareValues(value, optionValue));
        });
      }
      return (_a = options.value.find((option) => {
        const optionValue = getValue(option);
        return compareValues(optionValue, toRaw(props.modelValue));
      })) != null ? _a : props.modelValue;
    });
    const label = computed(() => {
      if (!props.modelValue) return null;
      if (Array.isArray(props.modelValue) && props.modelValue.length) {
        return `${props.modelValue.length} selected`;
      } else if (["string", "number"].includes(typeof props.modelValue)) {
        return props.valueAttribute ? accessor2(selected.value, props.optionAttribute) : props.modelValue;
      }
      return accessor2(props.modelValue, props.optionAttribute);
    });
    const selectClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        uiMenu.value.select,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.placeholder && (!props.modelValue || Array.isArray(props.modelValue) && !props.modelValue.length) && ui.value.placeholder, props.selectClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const debouncedSearch = props.searchable && typeof props.searchable === "function" ? useDebounceFn(props.searchable, props.debounce) : void 0;
    const options = computedAsync(async () => {
      if (debouncedSearch) {
        return await debouncedSearch(query.value);
      }
      return props.options || [];
    }, [], {
      lazy: props.searchableLazy
    });
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, (match) => `\\${match}`);
    }
    function accessor2(obj, key) {
      return get(obj, key);
    }
    const filteredOptions = computed(() => {
      if (!query.value || debouncedSearch) {
        return options.value;
      }
      const escapedQuery = escapeRegExp(query.value);
      return options.value.filter((option) => {
        var _a;
        return (((_a = props.searchAttributes) == null ? void 0 : _a.length) ? props.searchAttributes : [props.optionAttribute]).some((searchAttribute) => {
          if (["string", "number"].includes(typeof option)) {
            return String(option).search(new RegExp(escapedQuery, "i")) !== -1;
          }
          const child = get(option, searchAttribute);
          return child !== null && child !== void 0 && String(child).search(new RegExp(escapedQuery, "i")) !== -1;
        });
      });
    });
    const createOption = computed(() => {
      if (query.value === "") {
        return null;
      }
      if (props.showCreateOptionWhen === "empty" && filteredOptions.value.length) {
        return null;
      }
      if (props.showCreateOptionWhen === "always") {
        const existingOption = filteredOptions.value.find((option) => ["string", "number"].includes(typeof option) ? option === query.value : accessor2(option, props.optionAttribute) === query.value);
        if (existingOption) {
          return null;
        }
      }
      if (typeof props.showCreateOptionWhen === "function") {
        if (!props.showCreateOptionWhen(query.value, filteredOptions.value)) {
          return null;
        }
      }
      return ["string", "number"].includes(typeof props.modelValue) ? query.value : { [props.optionAttribute]: query.value };
    });
    function clearOnClose() {
      if (props.clearSearchOnClose) {
        query.value = "";
      }
    }
    watch(container, (value) => {
      if (value) {
        emit("open");
      } else {
        clearOnClose();
        emit("close");
        emitFormBlur();
      }
    });
    function onUpdate(value) {
      if (toRaw(props.modelValue) === value) {
        return;
      }
      emit("update:modelValue", value);
      emit("change", value);
      emitFormChange();
    }
    function onQueryChange(event) {
      query.value = event.target.value;
    }
    s$5(() => useId$1());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      // eslint-disable-next-line vue/no-dupe-keys
      uiMenu,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      popper: popper2,
      trigger,
      container,
      selected,
      label,
      accessor: accessor2,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      filteredOptions,
      createOption,
      // eslint-disable-next-line vue/no-dupe-keys
      query,
      onUpdate,
      onQueryChange,
      // eslint-disable-next-line vue/no-dupe-keys
      by
    };
  }
});
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_7;
  const _component_HComboboxInput = resolveComponent("HComboboxInput");
  const _component_UAvatar = __nuxt_component_1$1;
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.searchable ? "HCombobox" : "HListbox"), mergeProps({
    by: _ctx.by,
    name: _ctx.name,
    "model-value": _ctx.multiple ? Array.isArray(_ctx.modelValue) ? _ctx.modelValue : [] : _ctx.modelValue,
    multiple: _ctx.multiple,
    disabled: _ctx.disabled,
    as: "div",
    class: _ctx.ui.wrapper,
    "onUpdate:modelValue": _ctx.onUpdate
  }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.required) {
          _push2(`<input${ssrRenderAttr("value", _ctx.modelValue)}${ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""} class="${ssrRenderClass(_ctx.uiMenu.required)}" tabindex="-1" aria-hidden="true"${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
          ref: "trigger",
          as: "div",
          role: "button",
          class: _ctx.uiMenu.trigger
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => {
                _push3(`<button${ssrRenderAttrs(mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs))}${_scopeId2}>`);
                if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
                  _push3(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "leading", {
                    selected: _ctx.selected,
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.leadingIconName,
                      class: _ctx.leadingIconClass
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                ssrRenderSlot(_ctx.$slots, "label", { selected: _ctx.selected }, () => {
                  if (_ctx.label) {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.label)}</span>`);
                  } else {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.placeholder || "\xA0")}</span>`);
                  }
                }, _push3, _parent3, _scopeId2);
                if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
                  _push3(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "trailing", {
                    selected: _ctx.selected,
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.trailingIconName,
                      class: _ctx.trailingIconClass,
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled,
                  loading: _ctx.loading
                }, () => [
                  createVNode("button", mergeProps({
                    id: _ctx.inputId,
                    class: _ctx.selectClass,
                    disabled: _ctx.disabled,
                    type: "button"
                  }, _ctx.attrs), [
                    _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.leadingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        selected: _ctx.selected,
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.leadingIconName,
                          class: _ctx.leadingIconClass
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "label", { selected: _ctx.selected }, () => [
                      _ctx.label ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.label), 3)) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                    ]),
                    _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.trailingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "trailing", {
                        selected: _ctx.selected,
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.trailingIconName,
                          class: _ctx.trailingIconClass,
                          "aria-hidden": "true"
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 16, ["id", "disabled"])
                ])
              ];
            }
          }),
          _: 2
        }), _parent2, _scopeId);
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.uiMenu.container, _ctx.uiMenu.width])}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.uiMenu.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
            static: "",
            class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              var _a, _b, _c, _d;
              if (_push3) {
                if (_ctx.searchable) {
                  _push3(ssrRenderComponent(_component_HComboboxInput, {
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onQueryChange
                  }, null, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.filteredOptions, (option, index) => {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: index,
                    as: "template",
                    value: _ctx.valueAttribute ? _ctx.accessor(option, _ctx.valueAttribute) : option,
                    disabled: option.disabled
                  }, {
                    default: withCtx(({ active, selected: optionSelected, disabled: optionDisabled }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option", {
                          option,
                          active,
                          selected: optionSelected
                        }, () => {
                          if (option.icon) {
                            _push4(ssrRenderComponent(_component_UIcon, {
                              name: option.icon,
                              class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                              "aria-hidden": "true"
                            }, null, _parent4, _scopeId3));
                          } else if (option.avatar) {
                            _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                              class: _ctx.uiMenu.option.avatar.base,
                              "aria-hidden": "true"
                            }), null, _parent4, _scopeId3));
                          } else if (option.chip) {
                            _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.chip.base)}" style="${ssrRenderStyle({ background: `#${option.chip}` })}"${_scopeId3}></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(["string", "number"].includes(typeof option) ? option : _ctx.accessor(option, _ctx.optionAttribute))}</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        if (optionSelected) {
                          _push4(`<span class="${ssrRenderClass([_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding])}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: _ctx.selectedIcon,
                            class: _ctx.uiMenu.option.selectedIcon.base,
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option", {
                                option,
                                active,
                                selected: optionSelected
                              }, () => [
                                option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: option.icon,
                                  class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                  key: 1,
                                  ref_for: true
                                }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                  class: _ctx.uiMenu.option.avatar.base,
                                  "aria-hidden": "true"
                                }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: _ctx.uiMenu.option.chip.base,
                                  style: { background: `#${option.chip}` }
                                }, null, 6)) : createCommentVNode("", true),
                                createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : _ctx.accessor(option, _ctx.optionAttribute)), 1)
                              ])
                            ], 2),
                            optionSelected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                            }, [
                              createVNode(_component_UIcon, {
                                name: _ctx.selectedIcon,
                                class: _ctx.uiMenu.option.selectedIcon.base,
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                });
                _push3(`<!--]-->`);
                if (_ctx.creatable && _ctx.createOption) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected: optionSelected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option-create", {
                          option: _ctx.createOption,
                          active,
                          selected: optionSelected
                        }, () => {
                          _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.create)}"${_scopeId3}>Create &quot;${ssrInterpolate(typeof _ctx.createOption === "string" ? _ctx.createOption : _ctx.accessor(_ctx.createOption, _ctx.optionAttribute))}&quot;</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div></li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.createOption,
                                active,
                                selected: optionSelected
                              }, () => [
                                createVNode("span", {
                                  class: _ctx.uiMenu.option.create
                                }, 'Create "' + toDisplayString(typeof _ctx.createOption === "string" ? _ctx.createOption : _ctx.accessor(_ctx.createOption, _ctx.optionAttribute)) + '"', 3)
                              ])
                            ], 2)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                } else if (_ctx.searchable && _ctx.query && !((_a = _ctx.filteredOptions) == null ? void 0 : _a.length)) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.option.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => {
                    _push3(`${ssrInterpolate(_ctx.uiMenu.default.optionEmpty.label.replace("{query}", _ctx.query))}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else if (!((_b = _ctx.filteredOptions) == null ? void 0 : _b.length)) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => {
                    _push3(`${ssrInterpolate(_ctx.uiMenu.default.empty.label)}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                    key: 0,
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onQueryChange
                  }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                    return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                      key: index,
                      as: "template",
                      value: _ctx.valueAttribute ? _ctx.accessor(option, _ctx.valueAttribute) : option,
                      disabled: option.disabled
                    }, {
                      default: withCtx(({ active, selected: optionSelected, disabled: optionDisabled }) => [
                        createVNode("li", {
                          class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                        }, [
                          createVNode("div", {
                            class: _ctx.uiMenu.option.container
                          }, [
                            renderSlot(_ctx.$slots, "option", {
                              option,
                              active,
                              selected: optionSelected
                            }, () => [
                              option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                key: 0,
                                name: option.icon,
                                class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                key: 1,
                                ref_for: true
                              }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                class: _ctx.uiMenu.option.avatar.base,
                                "aria-hidden": "true"
                              }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: _ctx.uiMenu.option.chip.base,
                                style: { background: `#${option.chip}` }
                              }, null, 6)) : createCommentVNode("", true),
                              createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : _ctx.accessor(option, _ctx.optionAttribute)), 1)
                            ])
                          ], 2),
                          optionSelected ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                          }, [
                            createVNode(_component_UIcon, {
                              name: _ctx.selectedIcon,
                              class: _ctx.uiMenu.option.selectedIcon.base,
                              "aria-hidden": "true"
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]);
                  }), 128)),
                  _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: 1,
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected: optionSelected }) => [
                      createVNode("li", {
                        class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                      }, [
                        createVNode("div", {
                          class: _ctx.uiMenu.option.container
                        }, [
                          renderSlot(_ctx.$slots, "option-create", {
                            option: _ctx.createOption,
                            active,
                            selected: optionSelected
                          }, () => [
                            createVNode("span", {
                              class: _ctx.uiMenu.option.create
                            }, 'Create "' + toDisplayString(typeof _ctx.createOption === "string" ? _ctx.createOption : _ctx.accessor(_ctx.createOption, _ctx.optionAttribute)) + '"', 3)
                          ])
                        ], 2)
                      ], 2)
                    ]),
                    _: 3
                  }, 8, ["value"])) : _ctx.searchable && _ctx.query && !((_c = _ctx.filteredOptions) == null ? void 0 : _c.length) ? (openBlock(), createBlock("p", {
                    key: 2,
                    class: _ctx.uiMenu.option.empty
                  }, [
                    renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                      createTextVNode(toDisplayString(_ctx.uiMenu.default.optionEmpty.label.replace("{query}", _ctx.query)), 1)
                    ])
                  ], 2)) : !((_d = _ctx.filteredOptions) == null ? void 0 : _d.length) ? (openBlock(), createBlock("p", {
                    key: 3,
                    class: _ctx.uiMenu.empty
                  }, [
                    renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                      createTextVNode(toDisplayString(_ctx.uiMenu.default.empty.label), 1)
                    ])
                  ], 2)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }), _parent2, _scopeId);
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.required ? (openBlock(), createBlock("input", {
            key: 0,
            value: _ctx.modelValue,
            required: _ctx.required,
            class: _ctx.uiMenu.required,
            tabindex: "-1",
            "aria-hidden": "true"
          }, null, 10, ["value", "required"])) : createCommentVNode("", true),
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
            ref: "trigger",
            as: "div",
            role: "button",
            class: _ctx.uiMenu.trigger
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => [
                createVNode("button", mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs), [
                  _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: _ctx.leadingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "leading", {
                      selected: _ctx.selected,
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.leadingIconName,
                        class: _ctx.leadingIconClass
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "label", { selected: _ctx.selected }, () => [
                    _ctx.label ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.label), 3)) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                  ]),
                  _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: _ctx.trailingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "trailing", {
                      selected: _ctx.selected,
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.trailingIconName,
                        class: _ctx.trailingIconClass,
                        "aria-hidden": "true"
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true)
                ], 16, ["id", "disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["class"])),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.uiMenu.container, _ctx.uiMenu.width]
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.uiMenu.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.uiMenu.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
                    static: "",
                    class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
                  }, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                          key: 0,
                          "display-value": () => _ctx.query,
                          name: "q",
                          placeholder: _ctx.searchablePlaceholder,
                          autofocus: "",
                          autocomplete: "off",
                          class: _ctx.uiMenu.input,
                          onChange: _ctx.onQueryChange
                        }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                          return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                            key: index,
                            as: "template",
                            value: _ctx.valueAttribute ? _ctx.accessor(option, _ctx.valueAttribute) : option,
                            disabled: option.disabled
                          }, {
                            default: withCtx(({ active, selected: optionSelected, disabled: optionDisabled }) => [
                              createVNode("li", {
                                class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                              }, [
                                createVNode("div", {
                                  class: _ctx.uiMenu.option.container
                                }, [
                                  renderSlot(_ctx.$slots, "option", {
                                    option,
                                    active,
                                    selected: optionSelected
                                  }, () => [
                                    option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                      key: 0,
                                      name: option.icon,
                                      class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                      "aria-hidden": "true"
                                    }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                      key: 1,
                                      ref_for: true
                                    }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                      class: _ctx.uiMenu.option.avatar.base,
                                      "aria-hidden": "true"
                                    }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                      key: 2,
                                      class: _ctx.uiMenu.option.chip.base,
                                      style: { background: `#${option.chip}` }
                                    }, null, 6)) : createCommentVNode("", true),
                                    createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : _ctx.accessor(option, _ctx.optionAttribute)), 1)
                                  ])
                                ], 2),
                                optionSelected ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                                }, [
                                  createVNode(_component_UIcon, {
                                    name: _ctx.selectedIcon,
                                    class: _ctx.uiMenu.option.selectedIcon.base,
                                    "aria-hidden": "true"
                                  }, null, 8, ["name", "class"])
                                ], 2)) : createCommentVNode("", true)
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value", "disabled"]);
                        }), 128)),
                        _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                          key: 1,
                          value: _ctx.createOption,
                          as: "template"
                        }, {
                          default: withCtx(({ active, selected: optionSelected }) => [
                            createVNode("li", {
                              class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                            }, [
                              createVNode("div", {
                                class: _ctx.uiMenu.option.container
                              }, [
                                renderSlot(_ctx.$slots, "option-create", {
                                  option: _ctx.createOption,
                                  active,
                                  selected: optionSelected
                                }, () => [
                                  createVNode("span", {
                                    class: _ctx.uiMenu.option.create
                                  }, 'Create "' + toDisplayString(typeof _ctx.createOption === "string" ? _ctx.createOption : _ctx.accessor(_ctx.createOption, _ctx.optionAttribute)) + '"', 3)
                                ])
                              ], 2)
                            ], 2)
                          ]),
                          _: 3
                        }, 8, ["value"])) : _ctx.searchable && _ctx.query && !((_a = _ctx.filteredOptions) == null ? void 0 : _a.length) ? (openBlock(), createBlock("p", {
                          key: 2,
                          class: _ctx.uiMenu.option.empty
                        }, [
                          renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                            createTextVNode(toDisplayString(_ctx.uiMenu.default.optionEmpty.label.replace("{query}", _ctx.query)), 1)
                          ])
                        ], 2)) : !((_b = _ctx.filteredOptions) == null ? void 0 : _b.length) ? (openBlock(), createBlock("p", {
                          key: 3,
                          class: _ctx.uiMenu.empty
                        }, [
                          renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                            createTextVNode(toDisplayString(_ctx.uiMenu.default.empty.label), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ];
                    }),
                    _: 3
                  }, 8, ["class"]))
                ])
              ]),
              _: 3
            }, 16)
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/forms/SelectMenu.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$9 = defineComponent({
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    as: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: null
    },
    active: {
      type: Boolean,
      default: void 0
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactQuery: {
      type: [Boolean, String],
      default: false
    },
    exactHash: {
      type: Boolean,
      default: false
    },
    inactiveClass: {
      type: String,
      default: void 0
    }
  },
  setup(props) {
    function isPartiallyEqual(item1, item2) {
      const diffedKeys = diff(item1, item2).reduce((filtered, q2) => {
        if (q2.type === "added") {
          filtered.push(q2.key);
        }
        return filtered;
      }, []);
      return isEqual(item1, item2, { excludeKeys: (key) => diffedKeys.includes(key) });
    }
    function resolveLinkClass(route, $route, { isActive, isExactActive }) {
      if (props.exactQuery === "partial") {
        if (!isPartiallyEqual(route.query, $route.query)) return props.inactiveClass;
      } else if (props.exactQuery === true) {
        if (!isEqual(route.query, $route.query)) return props.inactiveClass;
      }
      if (props.exactHash && route.hash !== $route.hash) {
        return props.inactiveClass;
      }
      if (props.exact && isExactActive) {
        return props.activeClass;
      }
      if (!props.exact && isActive) {
        return props.activeClass;
      }
      return props.inactiveClass;
    }
    return {
      resolveLinkClass
    };
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$4;
  if (!_ctx.to) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      type: _ctx.type,
      disabled: _ctx.disabled
    }, _ctx.$attrs, {
      class: _ctx.active ? _ctx.activeClass : _ctx.inactiveClass
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active }, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default", { isActive: _ctx.active })
          ];
        }
      }),
      _: 3
    }), _parent);
  } else {
    _push(ssrRenderComponent(_component_NuxtLink, mergeProps(_ctx.$props, { custom: "" }, _attrs), {
      default: withCtx(({ route, href, target, rel, navigate, isActive, isExactActive, isExternal }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<a${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
            href: !_ctx.disabled ? href : void 0,
            "aria-disabled": _ctx.disabled ? "true" : void 0,
            role: _ctx.disabled ? "link" : void 0,
            rel,
            target,
            class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
            tabindex: _ctx.disabled ? -1 : void 0
          }))}${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive }, null, _push2, _parent2, _scopeId);
          _push2(`</a>`);
        } else {
          return [
            createVNode("a", mergeProps(_ctx.$attrs, {
              href: !_ctx.disabled ? href : void 0,
              "aria-disabled": _ctx.disabled ? "true" : void 0,
              role: _ctx.disabled ? "link" : void 0,
              rel,
              target,
              class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
              tabindex: _ctx.disabled ? -1 : void 0,
              onClick: (e2) => !isExternal && !_ctx.disabled && navigate(e2)
            }), [
              renderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive })
            ], 16, ["href", "aria-disabled", "role", "rel", "target", "tabindex", "onClick"])
          ];
        }
      }),
      _: 3
    }, _parent));
  }
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Link.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$8]]);
const config$7 = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$8 = defineComponent({
  components: {
    UIcon: __nuxt_component_7,
    ULink: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    type: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => config$7.default.size,
      validator(value) {
        return Object.keys(config$7.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$7.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$7.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$7.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$7.variant),
          ...Object.values(config$7.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$7.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    truncate: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const { ui, attrs } = useUI("button", toRef(props, "ui"), config$7);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const isSquare = computed(() => props.square || !slots.default && !props.label);
    const buttonClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded && ui.value[isSquare.value ? "square" : "padding"][size.value],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color),
        props.block ? ui.value.block : ui.value.inline
      ), props.class);
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const linkProps = computed(() => getNuxtLinkProps(props));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isLeading,
      isTrailing,
      isSquare,
      buttonClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass,
      linkProps
    };
  }
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0$1;
  const _component_UIcon = __nuxt_component_7;
  _push(ssrRenderComponent(_component_ULink, mergeProps({
    type: _ctx.type,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.buttonClass
  }, { ..._ctx.linkProps, ..._ctx.attrs }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "leading", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isLeading && _ctx.leadingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          if (_ctx.label) {
            _push2(`<span class="${ssrRenderClass([_ctx.truncate ? _ctx.ui.truncate : ""])}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "trailing", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isTrailing && _ctx.trailingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "leading", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isLeading && _ctx.leadingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.label ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.truncate ? _ctx.ui.truncate : ""]
            }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "trailing", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isTrailing && _ctx.trailingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const config$6 = mergeConfig(appConfig.ui.strategy, appConfig.ui.popover, popover);
const _sfc_main$7 = defineComponent({
  components: {
    HPopover: ye,
    HPopoverButton: Ge,
    HPopoverPanel: je
  },
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
      default: "click",
      validator: (value) => ["click", "hover"].includes(value)
    },
    open: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    openDelay: {
      type: Number,
      default: () => config$6.default.openDelay
    },
    closeDelay: {
      type: Number,
      default: () => config$6.default.closeDelay
    },
    overlay: {
      type: Boolean,
      default: false
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:open"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("popover", toRef(props, "ui"), config$6, toRef(props, "class"));
    const popper2 = computed(() => defu(props.mode === "hover" ? { offsetDistance: 0 } : {}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper2.value);
    const popover2 = ref(null);
    const popoverApi = ref(null);
    let openTimeout = null;
    let closeTimeout = null;
    const containerStyle = computed(() => {
      var _a, _b, _c;
      if (props.mode !== "hover") {
        return {};
      }
      const offsetDistance = ((_a = props.popper) == null ? void 0 : _a.offsetDistance) || ((_b = ui.value.popper) == null ? void 0 : _b.offsetDistance) || 8;
      const placement = (_c = popper2.value.placement) == null ? void 0 : _c.split("-")[0];
      const padding = `${offsetDistance}px`;
      if (placement === "top" || placement === "bottom") {
        return {
          paddingTop: padding,
          paddingBottom: padding
        };
      } else if (placement === "left" || placement === "right") {
        return {
          paddingLeft: padding,
          paddingRight: padding
        };
      } else {
        return {
          paddingTop: padding,
          paddingBottom: padding,
          paddingLeft: padding,
          paddingRight: padding
        };
      }
    });
    function onTouchStart(event) {
      if (!event.cancelable || !popoverApi.value || props.mode === "click") {
        return;
      }
      if (popoverApi.value.popoverState === 0) {
        popoverApi.value.closePopover();
      } else {
        popoverApi.value.togglePopover();
      }
    }
    function onMouseEnter() {
      if (props.mode !== "hover" || !popoverApi.value) {
        return;
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (popoverApi.value.popoverState === 0) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        if (popoverApi.value.togglePopover) {
          popoverApi.value.togglePopover();
        }
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (props.mode !== "hover" || !popoverApi.value) {
        return;
      }
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (popoverApi.value.popoverState === 1) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        if (popoverApi.value.closePopover) {
          popoverApi.value.closePopover();
        }
        closeTimeout = null;
      }, props.closeDelay);
    }
    watch(() => props.open, (newValue, oldValue) => {
      if (!popoverApi.value) return;
      if (oldValue === void 0 || newValue === oldValue) return;
      if (newValue) {
        popoverApi.value.popoverState = 0;
      } else {
        popoverApi.value.closePopover();
      }
    });
    watch(() => {
      var _a;
      return (_a = popoverApi.value) == null ? void 0 : _a.popoverState;
    }, (newValue, oldValue) => {
      if (oldValue === void 0 || newValue === oldValue) return;
      emit("update:open", newValue === 0);
    });
    s$5(() => useId$1());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      popover: popover2,
      // eslint-disable-next-line vue/no-dupe-keys
      popper: popper2,
      trigger,
      container,
      containerStyle,
      onTouchStart,
      onMouseEnter,
      onMouseLeave
    };
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HPopover = resolveComponent("HPopover");
  const _component_HPopoverButton = resolveComponent("HPopoverButton");
  const _component_HPopoverPanel = resolveComponent("HPopoverPanel");
  _push(ssrRenderComponent(_component_HPopover, mergeProps({
    ref: "popover",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { onMouseleave: _ctx.onMouseLeave }, _attrs), {
    default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HPopoverButton, {
          ref: "trigger",
          as: "div",
          disabled: _ctx.disabled,
          class: _ctx.ui.trigger,
          role: "button",
          onMouseenter: _ctx.onMouseEnter,
          onTouchstart: _ctx.onTouchStart
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                close
              }, () => {
                _push3(`<button${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${_scopeId2}> Open </button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  close
                }, () => [
                  createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        if (_ctx.overlay) {
          _push2(`<template>`);
          if (open) {
            _push2(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</template>`);
        } else {
          _push2(`<!---->`);
        }
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}" style="${ssrRenderStyle(_ctx.containerStyle)}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_HPopoverPanel, {
            class: [_ctx.ui.base, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow],
            static: ""
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "panel", {
                  open,
                  close
                }, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "panel", {
                    open,
                    close
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_HPopoverButton, {
            ref: "trigger",
            as: "div",
            disabled: _ctx.disabled,
            class: _ctx.ui.trigger,
            role: "button",
            onMouseenter: _ctx.onMouseEnter,
            onTouchstartPassive: _ctx.onTouchStart
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                close
              }, () => [
                createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["disabled", "class", "onMouseenter", "onTouchstartPassive"]),
          _ctx.overlay ? (openBlock(), createBlock(Transition, mergeProps({
            key: 0,
            appear: ""
          }, _ctx.ui.overlay.transition), {
            default: withCtx(() => [
              open ? (openBlock(), createBlock("div", {
                key: 0,
                class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
              }, null, 2)) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1040)) : createCommentVNode("", true),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.ui.container, _ctx.ui.width],
            style: _ctx.containerStyle,
            onMouseenter: _ctx.onMouseEnter
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.ui.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.ui.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  createVNode(_component_HPopoverPanel, {
                    class: [_ctx.ui.base, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow],
                    static: ""
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "panel", {
                        open,
                        close
                      })
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ])
              ]),
              _: 2
            }, 1040)
          ], 46, ["onMouseenter"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/overlays/Popover.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const useId = useId$1;
const config$5 = mergeConfig(appConfig.ui.strategy, appConfig.ui.checkbox, checkbox);
const _sfc_main$6 = defineComponent({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: () => null
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    modelValue: {
      type: [Boolean, Array],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: void 0
    },
    help: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: () => config$5.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    inputClass: {
      type: String,
      default: ""
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    var _a;
    const { ui, attrs } = useUI("checkbox", toRef(props, "ui"), config$5, toRef(props, "class"));
    const { emitFormChange, color, name, inputId: _inputId } = useFormGroup(props);
    const inputId = (_a = _inputId.value) != null ? _a : useId();
    const toggle = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const onChange = (event) => {
      emit("change", event.target.checked);
      emitFormChange();
    };
    const inputClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        ui.value.rounded,
        ui.value.background,
        ui.value.border,
        color.value && ui.value.ring.replaceAll("{color}", color.value),
        color.value && ui.value.color.replaceAll("{color}", color.value)
      ), props.inputClass);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      toggle,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      onChange
    };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper,
    "data-n-ids": _ctx.attrs["data-n-ids"]
  }, _attrs))}><div class="${ssrRenderClass(_ctx.ui.container)}"><input${ssrRenderAttrs((_temp0 = mergeProps({
    id: _ctx.inputId,
    checked: Array.isArray(_ctx.toggle) ? ssrLooseContain(_ctx.toggle, _ctx.value) : _ctx.toggle,
    name: _ctx.name,
    required: _ctx.required,
    value: _ctx.value,
    disabled: _ctx.disabled,
    indeterminate: _ctx.indeterminate,
    type: "checkbox",
    class: _ctx.inputClass
  }, _ctx.attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, _ctx.toggle))))}></div>`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.inner)}"><label${ssrRenderAttr("for", _ctx.inputId)} class="${ssrRenderClass(_ctx.ui.label)}">`);
    ssrRenderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => {
      _push(`${ssrInterpolate(_ctx.label)}`);
    }, _push, _parent);
    if (_ctx.required) {
      _push(`<span class="${ssrRenderClass(_ctx.ui.required)}">*</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</label>`);
    if (_ctx.help || _ctx.$slots.help) {
      _push(`<p class="${ssrRenderClass(_ctx.ui.help)}">`);
      ssrRenderSlot(_ctx.$slots, "help", { help: _ctx.help }, () => {
        _push(`${ssrInterpolate(_ctx.help)}`);
      }, _push, _parent);
      _push(`</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/forms/Checkbox.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const config$4 = mergeConfig(appConfig.ui.strategy, appConfig.ui.progress, progress);
const _sfc_main$5 = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: Number,
      default: null
    },
    max: {
      type: [Number, Array],
      default: 100
    },
    indicator: {
      type: Boolean,
      default: false
    },
    animation: {
      type: String,
      default: () => config$4.default.animation,
      validator(value) {
        return Object.keys(config$4.animation).includes(value);
      }
    },
    size: {
      type: String,
      default: () => config$4.default.size,
      validator(value) {
        return Object.keys(config$4.progress.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$4.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("progress", toRef(props, "ui"), config$4, toRef(props, "class"));
    const indicatorContainerClass = computed(() => {
      return twJoin(
        ui.value.indicator.container.base,
        ui.value.indicator.container.width,
        ui.value.indicator.container.transition
      );
    });
    const indicatorClass = computed(() => {
      return twJoin(
        ui.value.indicator.align,
        ui.value.indicator.width,
        ui.value.indicator.color,
        ui.value.indicator.size[props.size]
      );
    });
    const progressClass = computed(() => {
      var _a;
      const classes = [
        ui.value.progress.base,
        ui.value.progress.width,
        ui.value.progress.size[props.size],
        ui.value.progress.rounded,
        ui.value.progress.track,
        ui.value.progress.bar,
        // Intermediate class to allow thumb ring or background color (set to `current`) as it's impossible to safelist with arbitrary values
        (_a = ui.value.progress.color) == null ? void 0 : _a.replaceAll("{color}", props.color),
        ui.value.progress.background,
        ui.value.progress.indeterminate.base,
        ui.value.progress.indeterminate.rounded
      ];
      if (isIndeterminate.value) {
        classes.push(ui.value.animation[props.animation]);
      }
      return twJoin(...classes);
    });
    const stepsClass = computed(() => {
      var _a;
      return twJoin(
        ui.value.steps.base,
        (_a = ui.value.steps.color) == null ? void 0 : _a.replaceAll("{color}", props.color),
        ui.value.steps.size[props.size]
      );
    });
    const stepClass = computed(() => {
      return twJoin(
        ui.value.step.base,
        ui.value.step.align
      );
    });
    const stepActiveClass = computed(() => {
      return twJoin(
        ui.value.step.active
      );
    });
    const stepFirstClass = computed(() => {
      return twJoin(
        ui.value.step.first
      );
    });
    function isActive(index) {
      return index === Number(props.value);
    }
    function isFirst(index) {
      return index === 0;
    }
    function stepClasses(index) {
      index = Number(index);
      const classes = [stepClass.value];
      if (isFirst(index)) {
        classes.push(stepFirstClass.value);
      }
      if (isActive(index)) {
        classes.push(stepActiveClass.value);
      }
      return classes.join(" ");
    }
    const isIndeterminate = computed(() => props.value === void 0 || props.value === null);
    const isSteps = computed(() => Array.isArray(props.max));
    const realMax = computed(() => {
      if (isIndeterminate.value) {
        return null;
      }
      if (Array.isArray(props.max)) {
        return props.max.length - 1;
      }
      return Number(props.max);
    });
    const percent = computed(() => {
      if (isIndeterminate.value) {
        return void 0;
      }
      switch (true) {
        case props.value < 0:
          return 0;
        case props.value > realMax.value:
          return 100;
        default:
          return props.value / realMax.value * 100;
      }
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      indicatorContainerClass,
      indicatorClass,
      progressClass,
      stepsClass,
      stepClasses,
      isIndeterminate,
      isSteps,
      realMax,
      percent
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper,
    role: "progressbar"
  }, _attrs))} data-v-916eeb3a>`);
  if (_ctx.indicator || _ctx.$slots.indicator) {
    ssrRenderSlot(_ctx.$slots, "indicator", { percent: _ctx.percent }, () => {
      if (!_ctx.isSteps) {
        _push(`<div class="${ssrRenderClass(_ctx.indicatorContainerClass)}" style="${ssrRenderStyle({ width: `${_ctx.percent}%` })}" data-v-916eeb3a><div class="${ssrRenderClass(_ctx.indicatorClass)}" data-v-916eeb3a>${ssrInterpolate(Math.round(_ctx.percent))}% </div></div>`);
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`<progress${ssrRenderAttrs(mergeProps({
    "aria-valuemax": _ctx.realMax,
    "aria-valuenow": _ctx.value,
    class: _ctx.progressClass
  }, { value: _ctx.value, max: _ctx.realMax, ..._ctx.attrs }))} data-v-916eeb3a>${ssrInterpolate(_ctx.percent !== void 0 ? `${Math.round(_ctx.percent)}%` : void 0)}</progress>`);
  if (_ctx.isSteps) {
    _push(`<div class="${ssrRenderClass(_ctx.stepsClass)}" data-v-916eeb3a><!--[-->`);
    ssrRenderList(_ctx.max, (step, index) => {
      _push(`<div class="${ssrRenderClass(_ctx.stepClasses(index))}" data-v-916eeb3a>`);
      ssrRenderSlot(_ctx.$slots, `step-${index}`, mergeProps({ ref_for: true }, { step }), () => {
        _push(`${ssrInterpolate(step)}`);
      }, _push, _parent);
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/elements/Progress.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-916eeb3a"]]);
const config$3 = mergeConfig(appConfig.ui.strategy, appConfig.ui.table, table);
function defaultComparator(a2, z2) {
  return isEqual(a2, z2);
}
function defaultSort(a2, b2, direction) {
  if (a2 === b2) {
    return 0;
  }
  if (direction === "asc") {
    return a2 < b2 ? -1 : 1;
  } else {
    return a2 > b2 ? -1 : 1;
  }
}
function getStringifiedSet(arr) {
  return new Set(arr.map((item) => JSON.stringify(item)));
}
function accessor(key) {
  return (obj) => get(obj, key);
}
const _sfc_main$4 = defineComponent({
  components: {
    UIcon: __nuxt_component_7,
    UButton: __nuxt_component_1,
    UProgress: __nuxt_component_2,
    UCheckbox: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Array,
      default: null
    },
    by: {
      type: [String, Function],
      default: () => defaultComparator
    },
    rows: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: null
    },
    columnAttribute: {
      type: String,
      default: "label"
    },
    sort: {
      type: Object,
      default: () => ({})
    },
    sortMode: {
      type: String,
      default: "auto"
    },
    sortButton: {
      type: Object,
      default: () => config$3.default.sortButton
    },
    sortAscIcon: {
      type: String,
      default: () => config$3.default.sortAscIcon
    },
    sortDescIcon: {
      type: String,
      default: () => config$3.default.sortDescIcon
    },
    expandButton: {
      type: Object,
      default: () => config$3.default.expandButton
    },
    expand: {
      type: Object,
      default: () => null
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingState: {
      type: Object,
      default: () => config$3.default.loadingState
    },
    emptyState: {
      type: Object,
      default: () => config$3.default.emptyState
    },
    caption: {
      type: String,
      default: null
    },
    progress: {
      type: Object,
      default: () => config$3.default.progress
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    multipleExpand: {
      type: Boolean,
      default: true
    },
    singleSelect: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "update:sort", "update:expand", "select:all"],
  setup(props, { emit, attrs: $attrs }) {
    const { ui, attrs } = useUI("table", toRef(props, "ui"), config$3, toRef(props, "class"));
    const columns = computed(() => {
      var _a;
      const defaultColumns = (_a = props.columns) != null ? _a : Object.keys(props.rows[0]).map((key) => ({
        key,
        label: upperFirst(key),
        sortable: false,
        class: void 0,
        sort: defaultSort
      }));
      const hasColumnSelect = defaultColumns.find((v2) => v2.key === "select");
      if (hasColumnSelect || !props.modelValue) {
        return defaultColumns;
      }
      return [{
        key: "select",
        sortable: false,
        class: void 0,
        sort: defaultSort
      }, ...defaultColumns];
    });
    const sort = useVModel(props, "sort", emit, { passive: true, defaultValue: defu({}, props.sort, { column: null, direction: "asc" }) });
    const expand = useVModel(props, "expand", emit, {
      passive: true,
      defaultValue: defu({}, props.expand, {
        openedRows: [],
        row: null
      })
    });
    const retriggerSlot = ref(null);
    const savedSort = { column: sort.value.column, direction: null };
    const rows = computed(() => {
      var _a;
      if (!((_a = sort.value) == null ? void 0 : _a.column) || props.sortMode === "manual") {
        return props.rows;
      }
      const { column, direction } = sort.value;
      return props.rows.slice().sort((a2, b2) => {
        var _a3;
        var _a2;
        const aValue = get(a2, column);
        const bValue = get(b2, column);
        const sort2 = (_a3 = (_a2 = columns.value.find((col) => col.key === column)) == null ? void 0 : _a2.sort) != null ? _a3 : defaultSort;
        return sort2(aValue, bValue, direction);
      });
    });
    const selected = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const totalRows = computed(() => props.rows.length);
    const countCheckedRow = computed(() => {
      const selectedData = getStringifiedSet(selected.value);
      const rowsData = getStringifiedSet(props.rows);
      return Array.from(selectedData).filter((item) => rowsData.has(item)).length;
    });
    const indeterminate = computed(() => {
      if (!selected.value || !props.rows) return false;
      return countCheckedRow.value > 0 && countCheckedRow.value < totalRows.value;
    });
    const isAllRowChecked = computed(() => countCheckedRow.value === totalRows.value);
    const emptyState = computed(() => {
      if (props.emptyState === null) return null;
      return { ...ui.value.default.emptyState, ...props.emptyState };
    });
    const loadingState = computed(() => {
      if (props.loadingState === null) return null;
      return { ...ui.value.default.loadingState, ...props.loadingState };
    });
    function compare(a2, z2) {
      if (typeof props.by === "string") {
        const accesorFn = accessor(props.by);
        return accesorFn(a2) === accesorFn(z2);
      }
      return props.by(a2, z2);
    }
    function isSelected(row) {
      if (!props.modelValue) {
        return false;
      }
      return selected.value.some((item) => compare(toRaw(item), toRaw(row)));
    }
    function onSort(column) {
      if (sort.value.column === column.key) {
        const direction = !column.direction || column.direction === "asc" ? "desc" : "asc";
        if (sort.value.direction === direction) {
          sort.value = defu({}, savedSort, { column: null, direction: "asc" });
        } else {
          sort.value = { column: sort.value.column, direction: sort.value.direction === "asc" ? "desc" : "asc" };
        }
      } else {
        sort.value = { column: column.key, direction: column.direction || "asc" };
      }
    }
    function onSelect(row) {
      const selection = (void 0).getSelection();
      if (selection && selection.toString().length > 0) {
        return;
      }
      if (!$attrs.onSelect) {
        return;
      }
      $attrs.onSelect(row);
    }
    function onContextmenu(event, row) {
      if (!$attrs.onContextmenu) {
        return;
      }
      $attrs.onContextmenu(event, row);
    }
    function selectAllRows() {
      const newSelected = [...selected.value];
      props.rows.forEach((row) => {
        if (!isSelected(row)) {
          newSelected.push(row);
        }
      });
      selected.value = newSelected;
    }
    function onChange(checked) {
      if (checked) {
        selectAllRows();
      } else {
        selected.value = [];
      }
      emit("select:all", checked);
    }
    function onChangeCheckbox(checked, row) {
      if (checked) {
        selected.value = props.singleSelect ? [row] : [...selected.value, row];
      } else {
        selected.value = selected.value.filter((value) => !compare(toRaw(value), toRaw(row)));
      }
    }
    function getRowData(row, rowKey, defaultValue = "") {
      return get(row, rowKey, defaultValue);
    }
    function isExpanded(row) {
      var _a;
      return ((_a = expand.value) == null ? void 0 : _a.openedRows) ? expand.value.openedRows.some((openedRow) => compare(openedRow, row)) : false;
    }
    function toggleOpened(row) {
      expand.value = {
        openedRows: isExpanded(row) ? expand.value.openedRows.filter((v2) => !compare(v2, row)) : props.multipleExpand ? [...expand.value.openedRows, row] : [row],
        row
      };
    }
    function getAriaSort(column) {
      if (!column.sortable) {
        return void 0;
      }
      if (sort.value.column !== column.key) {
        return "none";
      }
      if (sort.value.direction === "asc") {
        return "ascending";
      }
      if (sort.value.direction === "desc") {
        return "descending";
      }
      return void 0;
    }
    watch(rows, () => {
      retriggerSlot.value = /* @__PURE__ */ new Date();
    }, {
      deep: true
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      sort,
      // eslint-disable-next-line vue/no-dupe-keys
      columns,
      // eslint-disable-next-line vue/no-dupe-keys
      rows,
      selected,
      indeterminate,
      // eslint-disable-next-line vue/no-dupe-keys
      emptyState,
      // eslint-disable-next-line vue/no-dupe-keys
      loadingState,
      isAllRowChecked,
      onChangeCheckbox,
      isSelected,
      onSort,
      onSelect,
      onContextmenu,
      onChange,
      getRowData,
      toggleOpened,
      getAriaSort,
      isExpanded,
      retriggerSlot
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UCheckbox = __nuxt_component_0;
  const _component_UButton = __nuxt_component_1;
  const _component_UProgress = __nuxt_component_2;
  const _component_UIcon = __nuxt_component_7;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><table class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.divide])}">`);
  if (_ctx.$slots.caption || _ctx.caption) {
    ssrRenderSlot(_ctx.$slots, "caption", {}, () => {
      _push(`<caption class="${ssrRenderClass(_ctx.ui.caption)}">${ssrInterpolate(_ctx.caption)}</caption>`);
    }, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`<thead class="${ssrRenderClass(_ctx.ui.thead)}"><tr class="${ssrRenderClass(_ctx.ui.tr.base)}">`);
  if (_ctx.expand) {
    _push(`<th scope="col" class="${ssrRenderClass(_ctx.ui.tr.base)}"><span class="sr-only">Expand</span></th>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList(_ctx.columns, (column, index) => {
    _push(`<th scope="col" class="${ssrRenderClass([_ctx.ui.th.base, _ctx.ui.th.padding, _ctx.ui.th.color, _ctx.ui.th.font, _ctx.ui.th.size, column.key === "select" && _ctx.ui.checkbox.padding, column.class])}"${ssrRenderAttr("aria-sort", _ctx.getAriaSort(column))}>`);
    if (!_ctx.singleSelect && _ctx.modelValue && column.key === "select") {
      ssrRenderSlot(_ctx.$slots, "select-header", {
        indeterminate: _ctx.indeterminate,
        checked: _ctx.isAllRowChecked,
        change: _ctx.onChange
      }, () => {
        _push(ssrRenderComponent(_component_UCheckbox, mergeProps({
          "model-value": _ctx.isAllRowChecked,
          indeterminate: _ctx.indeterminate,
          ref_for: true
        }, _ctx.ui.default.checkbox, {
          "aria-label": "Select all",
          onChange: _ctx.onChange
        }), null, _parent));
      }, _push, _parent);
    } else {
      ssrRenderSlot(_ctx.$slots, `${column.key}-header`, {
        column,
        sort: _ctx.sort,
        onSort: _ctx.onSort
      }, () => {
        if (column.sortable) {
          _push(ssrRenderComponent(_component_UButton, mergeProps({ ref_for: true }, { ..._ctx.ui.default.sortButton || {}, ..._ctx.sortButton }, {
            icon: !_ctx.sort.column || _ctx.sort.column !== column.key ? _ctx.sortButton.icon || _ctx.ui.default.sortButton.icon : _ctx.sort.direction === "asc" ? _ctx.sortAscIcon : _ctx.sortDescIcon,
            label: column[_ctx.columnAttribute],
            onClick: ($event) => _ctx.onSort(column)
          }), null, _parent));
        } else {
          _push(`<span>${ssrInterpolate(column[_ctx.columnAttribute])}</span>`);
        }
      }, _push, _parent);
    }
    _push(`</th>`);
  });
  _push(`<!--]--></tr>`);
  if (_ctx.loading && _ctx.progress) {
    _push(`<tr><td${ssrRenderAttr("colspan", 0)} class="${ssrRenderClass(_ctx.ui.progress.wrapper)}">`);
    _push(ssrRenderComponent(_component_UProgress, mergeProps({ ..._ctx.ui.default.progress || {}, ..._ctx.progress }, { size: "2xs" }), null, _parent));
    _push(`</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</thead><tbody class="${ssrRenderClass(_ctx.ui.tbody)}">`);
  if (_ctx.loadingState && _ctx.loading && !_ctx.rows.length) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0) + (_ctx.expand ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "loading-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.loadingState.wrapper)}">`);
      if (_ctx.loadingState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.loadingState.icon,
          class: _ctx.ui.loadingState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.loadingState.label)}">${ssrInterpolate(_ctx.loadingState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else if (_ctx.emptyState && !_ctx.rows.length) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0) + (_ctx.expand ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "empty-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.emptyState.wrapper)}">`);
      if (_ctx.emptyState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.emptyState.icon,
          class: _ctx.ui.emptyState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.emptyState.label)}">${ssrInterpolate(_ctx.emptyState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.rows, (row, index) => {
      _push(`<!--[--><tr class="${ssrRenderClass([_ctx.ui.tr.base, _ctx.isSelected(row) && _ctx.ui.tr.selected, _ctx.isExpanded(row) && _ctx.ui.tr.expanded, _ctx.$attrs.onSelect && _ctx.ui.tr.active, row == null ? void 0 : row.class])}">`);
      if (_ctx.expand) {
        _push(`<td class="${ssrRenderClass([_ctx.ui.td.base, _ctx.ui.td.padding, _ctx.ui.td.color, _ctx.ui.td.font, _ctx.ui.td.size])}">`);
        if (_ctx.$slots["expand-action"]) {
          ssrRenderSlot(_ctx.$slots, "expand-action", {
            row,
            isExpanded: _ctx.isExpanded(row),
            toggle: () => _ctx.toggleOpened(row)
          }, null, _push, _parent);
        } else {
          _push(ssrRenderComponent(_component_UButton, mergeProps({
            disabled: row.disabledExpand,
            ref_for: true
          }, { ..._ctx.ui.default.expandButton || {}, ..._ctx.expandButton }, {
            ui: { icon: { base: [_ctx.ui.expand.icon, _ctx.isExpanded(row) && "rotate-180"].join(" ") } },
            onClick: ($event) => _ctx.toggleOpened(row)
          }), null, _parent));
        }
        _push(`</td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.columns, (column, subIndex) => {
        var _a;
        _push(`<td class="${ssrRenderClass([_ctx.ui.td.base, _ctx.ui.td.padding, _ctx.ui.td.color, _ctx.ui.td.font, _ctx.ui.td.size, column == null ? void 0 : column.rowClass, (_a = row[column.key]) == null ? void 0 : _a.class, column.key === "select" && _ctx.ui.checkbox.padding])}">`);
        if (_ctx.modelValue && column.key === "select") {
          ssrRenderSlot(_ctx.$slots, "select-data", {
            checked: _ctx.isSelected(row),
            change: (ev) => _ctx.onChangeCheckbox(ev, row)
          }, () => {
            _push(ssrRenderComponent(_component_UCheckbox, mergeProps({
              "model-value": _ctx.isSelected(row),
              ref_for: true
            }, _ctx.ui.default.checkbox, {
              "aria-label": "Select row",
              onChange: ($event) => _ctx.onChangeCheckbox($event, row)
            }), null, _parent));
          }, _push, _parent);
        } else {
          ssrRenderSlot(_ctx.$slots, `${column.key}-data`, {
            key: _ctx.retriggerSlot,
            column,
            row,
            index,
            getRowData: (defaultValue) => _ctx.getRowData(row, column.key, defaultValue)
          }, () => {
            _push(`${ssrInterpolate(_ctx.getRowData(row, column.key))}`);
          }, _push, _parent);
        }
        _push(`</td>`);
      });
      _push(`<!--]--></tr>`);
      if (_ctx.isExpanded(row)) {
        _push(`<tr><td colspan="100%">`);
        ssrRenderSlot(_ctx.$slots, "expand", {
          row,
          index
        }, null, _push, _parent);
        _push(`</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]-->`);
  }
  _push(`</tbody></table></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/data/Table.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.pagination, pagination);
const buttonConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$3 = defineComponent({
  components: {
    UButton: __nuxt_component_1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 7,
      validate(value) {
        return value >= 5 && value < Number.MAX_VALUE;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: () => config$2.default.size,
      validator(value) {
        return Object.keys(buttonConfig.size).includes(value);
      }
    },
    to: {
      type: Function,
      default: null
    },
    activeButton: {
      type: Object,
      default: () => config$2.default.activeButton
    },
    inactiveButton: {
      type: Object,
      default: () => config$2.default.inactiveButton
    },
    showFirst: {
      type: Boolean,
      default: false
    },
    showLast: {
      type: Boolean,
      default: false
    },
    firstButton: {
      type: Object,
      default: () => config$2.default.firstButton
    },
    lastButton: {
      type: Object,
      default: () => config$2.default.lastButton
    },
    prevButton: {
      type: Object,
      default: () => config$2.default.prevButton
    },
    nextButton: {
      type: Object,
      default: () => config$2.default.nextButton
    },
    divider: {
      type: String,
      default: "\u2026"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("pagination", toRef(props, "ui"), config$2, toRef(props, "class"));
    const currentPage = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const pages = computed(() => Array.from({ length: Math.ceil(props.total / props.pageCount) }, (_, i2) => i2 + 1));
    const displayedPages = computed(() => {
      const totalPages = pages.value.length;
      const current = currentPage.value;
      const maxDisplayedPages = Math.max(props.max, 5);
      const r2 = Math.floor((Math.min(maxDisplayedPages, totalPages) - 5) / 2);
      const r1 = current - r2;
      const r22 = current + r2;
      const beforeWrapped = r1 - 1 > 1;
      const afterWrapped = r22 + 1 < totalPages;
      const items = [];
      if (totalPages <= maxDisplayedPages) {
        for (let i2 = 1; i2 <= totalPages; i2++) {
          items.push(i2);
        }
        return items;
      }
      items.push(1);
      if (beforeWrapped) items.push(props.divider);
      if (!afterWrapped) {
        const addedItems = current + r2 + 2 - totalPages;
        for (let i2 = current - r2 - addedItems; i2 <= current - r2 - 1; i2++) {
          items.push(i2);
        }
      }
      for (let i2 = Math.max(2, r1); i2 <= Math.min(totalPages, r22); i2++) {
        items.push(i2);
      }
      if (!beforeWrapped) {
        const addedItems = 1 - (current - r2 - 2);
        for (let i2 = current + r2 + 1; i2 <= current + r2 + addedItems; i2++) {
          items.push(i2);
        }
      }
      if (afterWrapped) items.push(props.divider);
      if (r22 < totalPages) {
        items.push(totalPages);
      }
      if (items.length >= 3 && items[1] === props.divider && items[2] === 3) {
        items[1] = 2;
      }
      if (items.length >= 3 && items[items.length - 2] === props.divider && items[items.length - 1] === items.length) {
        items[items.length - 2] = items.length - 1;
      }
      return items;
    });
    const canGoFirstOrPrev = computed(() => currentPage.value > 1);
    const canGoLastOrNext = computed(() => currentPage.value < pages.value.length);
    function onClickFirst() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value = 1;
    }
    function onClickLast() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value = pages.value.length;
    }
    function onClickPage(page) {
      if (typeof page === "string") {
        return;
      }
      currentPage.value = page;
    }
    function onClickPrev() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value--;
    }
    function onClickNext() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value++;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      currentPage,
      pages,
      displayedPages,
      canGoLastOrNext,
      canGoFirstOrPrev,
      onClickPrev,
      onClickNext,
      onClickPage,
      onClickFirst,
      onClickLast
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UButton = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "first", {
    onClick: _ctx.onClickFirst,
    canGoFirst: _ctx.canGoFirstOrPrev
  }, () => {
    var _a;
    if (_ctx.firstButton && _ctx.showFirst) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        to: (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, 1),
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.firstButton || {}, ..._ctx.firstButton }, {
        ui: { rounded: "" },
        "aria-label": "First",
        onClick: _ctx.onClickFirst
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "prev", {
    onClick: _ctx.onClickPrev,
    canGoPrev: _ctx.canGoFirstOrPrev
  }, () => {
    var _a;
    if (_ctx.prevButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        to: (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, _ctx.currentPage - 1),
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.prevButton || {}, ..._ctx.prevButton }, {
        ui: { rounded: "" },
        "aria-label": "Prev",
        onClick: _ctx.onClickPrev
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`<!--[-->`);
  ssrRenderList(_ctx.displayedPages, (page, index) => {
    var _a;
    _push(ssrRenderComponent(_component_UButton, mergeProps({
      key: `${page}-${index}`,
      to: typeof page === "number" ? (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, page) : null,
      size: _ctx.size,
      disabled: _ctx.disabled,
      label: `${page}`,
      ref_for: true
    }, page === _ctx.currentPage ? { ..._ctx.ui.default.activeButton || {}, ..._ctx.activeButton } : { ..._ctx.ui.default.inactiveButton || {}, ..._ctx.inactiveButton }, {
      class: [{ "pointer-events-none": typeof page === "string", "z-[1]": page === _ctx.currentPage }, _ctx.ui.base, _ctx.ui.rounded],
      ui: { rounded: "" },
      onClick: () => _ctx.onClickPage(page)
    }), null, _parent));
  });
  _push(`<!--]-->`);
  ssrRenderSlot(_ctx.$slots, "next", {
    onClick: _ctx.onClickNext,
    canGoNext: _ctx.canGoLastOrNext
  }, () => {
    var _a;
    if (_ctx.nextButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        to: (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, _ctx.currentPage + 1),
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.nextButton || {}, ..._ctx.nextButton }, {
        ui: { rounded: "" },
        "aria-label": "Next",
        onClick: _ctx.onClickNext
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "last", {
    onClick: _ctx.onClickLast,
    canGoLast: _ctx.canGoLastOrNext
  }, () => {
    var _a;
    if (_ctx.lastButton && _ctx.showLast) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        to: (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, _ctx.pages.length),
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.lastButton || {}, ..._ctx.lastButton }, {
        ui: { rounded: "" },
        "aria-label": "Last",
        onClick: _ctx.onClickLast
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/navigation/Pagination.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.modal, modal);
const _sfc_main$2 = defineComponent({
  components: {
    HDialog: Ye,
    HDialogPanel: Ge$1,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "close", "close-prevented", "after-leave"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("modal", toRef(props, "ui"), config$1, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      return {
        ...ui.value.transition
      };
    });
    function close(value) {
      if (props.preventClose) {
        emit("close-prevented");
        return;
      }
      isOpen.value = value;
      emit("close");
    }
    const onAfterLeave = () => {
      emit("after-leave");
    };
    s$5(() => useId$1());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      onAfterLeave,
      close
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    appear: _ctx.appear,
    show: _ctx.isOpen,
    as: "template",
    onAfterLeave: _ctx.onAfterLeave
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: _ctx.ui.wrapper
        }, _ctx.attrs, { onClose: _ctx.close }), {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition, {
                  class: _ctx.ui.overlay.transition.enterFrom
                }), {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="${ssrRenderClass(_ctx.ui.inner)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding])}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass, {
                class: _ctx.transitionClass.enterFrom
              }), {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [
                        _ctx.ui.base,
                        _ctx.ui.background,
                        _ctx.ui.ring,
                        _ctx.ui.shadow,
                        _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                      ]
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition, {
                  class: _ctx.ui.overlay.transition.enterFrom
                }), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear", "class"])) : createCommentVNode("", true),
                createVNode("div", {
                  class: _ctx.ui.inner
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                  }, [
                    createVNode(_component_TransitionChild, mergeProps({
                      as: "template",
                      appear: _ctx.appear
                    }, _ctx.transitionClass, {
                      class: _ctx.transitionClass.enterFrom
                    }), {
                      default: withCtx(() => [
                        createVNode(_component_HDialogPanel, {
                          class: [
                            _ctx.ui.base,
                            _ctx.ui.background,
                            _ctx.ui.ring,
                            _ctx.ui.shadow,
                            _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                          ]
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          _: 3
                        }, 8, ["class"])
                      ]),
                      _: 3
                    }, 16, ["appear", "class"])
                  ], 2)
                ], 2)
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: _ctx.ui.wrapper
          }, _ctx.attrs, { onClose: _ctx.close }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition, {
                class: _ctx.ui.overlay.transition.enterFrom
              }), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear", "class"])) : createCommentVNode("", true),
              createVNode("div", {
                class: _ctx.ui.inner
              }, [
                createVNode("div", {
                  class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                }, [
                  createVNode(_component_TransitionChild, mergeProps({
                    as: "template",
                    appear: _ctx.appear
                  }, _ctx.transitionClass, {
                    class: _ctx.transitionClass.enterFrom
                  }), {
                    default: withCtx(() => [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ]),
                    _: 3
                  }, 16, ["appear", "class"])
                ], 2)
              ], 2)
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/overlays/Modal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.card, card);
const _sfc_main$1 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("card", toRef(props, "ui"), config);
    const cardClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.divide,
        ui.value.ring,
        ui.value.shadow,
        ui.value.background
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      cardClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.$attrs.onSubmit ? "form" : _ctx.as), mergeProps({ class: _ctx.cardClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$slots.header) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.default) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.footer) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.$slots.header ? (openBlock(), createBlock("div", {
            key: 0,
            class: [_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background]
          }, [
            renderSlot(_ctx.$slots, "header")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.default ? (openBlock(), createBlock("div", {
            key: 1,
            class: [_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background]
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.footer ? (openBlock(), createBlock("div", {
            key: 2,
            class: [_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background]
          }, [
            renderSlot(_ctx.$slots, "footer")
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/layout/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const pageCount = 5;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const runtimeConfig = useRuntimeConfig();
    const selected = ref([]);
    const data = ref([]);
    const start_date = ref(new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 7)).toISOString());
    const end_date = ref((/* @__PURE__ */ new Date()).toISOString());
    const page = ref(1);
    const items = ref(data);
    const loading = ref("pending");
    const expand = ref({
      openedRows: [data[0]],
      row: {}
    });
    const rows = computed(() => {
      const start2 = (page.value - 1) * pageCount;
      const end2 = start2 + pageCount;
      return items.value.slice(start2, end2);
    });
    function select2(row) {
      const index = selected.value.findIndex((item) => item.id === row.id);
      if (index === -1) {
        selected.value.push(row);
      } else {
        selected.value.splice(index, 1);
      }
    }
    const columns = [
      { key: "ICCID", label: "ICCID", sortable: true },
      { key: "IMSI", label: "IMSI", sortable: true },
      { key: "Status", label: "Status", sortable: true },
      { key: "lastOperators", label: "Last Operators", sortable: true },
      // New column
      { key: "lastData", label: "Last Data", sortable: true },
      // New column
      // { key: 'SMS', label: 'SMS', sortable: true },
      { key: "totalData", label: "Total Data", sortable: true }
      // New column
    ];
    const selectedColumns = ref([...columns]);
    const secondaryColumns = [
      { key: "Operators", label: "Operators" },
      // Add Operators column
      { key: "Data", label: "Data" }
      // { key: 'Total', label: 'Total' }
    ];
    const ranges = [
      { label: "Last 7 days", duration: { days: 7 } },
      { label: "Last 14 days", duration: { days: 14 } },
      { label: "Last 30 days", duration: { days: 30 } },
      { label: "Last 3 months", duration: { months: 3 } },
      { label: "Last 6 months", duration: { months: 6 } },
      { label: "Last year", duration: { years: 1 } }
    ];
    const selectedDate = ref({ start: sub(/* @__PURE__ */ new Date(), { days: 7 }), end: /* @__PURE__ */ new Date() });
    function isRangeSelected(duration) {
      return isSameDay(selectedDate.value.start, sub(/* @__PURE__ */ new Date(), duration)) && isSameDay(selectedDate.value.end, /* @__PURE__ */ new Date());
    }
    function selectRange(duration) {
      selectedDate.value = { start: sub(/* @__PURE__ */ new Date(), duration), end: /* @__PURE__ */ new Date() };
      start_date.value = selectedDate.value.start.toISOString();
      end_date.value = selectedDate.value.end.toISOString();
    }
    async function fetchReport() {
      loading.value = "pending";
      try {
        const response = await fetch(`${runtimeConfig.public.URL_REQUEST}/get_things_report/${start_date.value}/${end_date.value}`);
        const jsonData = await response.json();
        console.log("Data => ", jsonData);
        if (response.ok) {
          const transformedData = jsonData.map((item) => {
            const operators = item["Operators"];
            const lastOperator = operators.length > 0 ? operators[operators.length - 1] : "";
            const secondLastOperator = operators.length > 1 ? operators[operators.length - 2] : "";
            const iccidMatch = item["Thing Name"].match(/ICCID (\d+)/);
            const iccid = iccidMatch ? iccidMatch[1] : "N/A";
            const lastOperatorData = item["Consumption"][lastOperator];
            const totalData = item["Consumption"][""] ? item["Consumption"][""]["Data"] : "N/A";
            return {
              "Thing Name": item["Thing Name"],
              "IMSI": item["IMSI"],
              "ICCID": iccid,
              // Extracted ICCID
              "lastOperators": lastOperator || secondLastOperator,
              // Use last operator or second last if last is empty
              "allOperators": operators,
              // Store all operators
              "Consumption": item["Consumption"],
              // Store all consumption data
              // 'Data': lastOperatorData['Data'] || 'N/A',
              "SMS": lastOperatorData["Total"] || "N/A",
              // Assuming 'Total' represents SMS consumption
              "Credit": lastOperatorData["Credit"] || "N/A",
              "Total Before Credit": lastOperatorData["Total Before Credit"] || "N/A",
              "Total": lastOperatorData["Total"] || "N/A",
              "Status": item["Status"],
              "lastData": lastOperatorData["Data"] || "N/A",
              // New field
              "totalData": totalData
              // New field
            };
          });
          data.value = transformedData;
        }
        loading.value = "idle";
      } catch (error) {
        console.log(error);
      }
    }
    watch([start_date, end_date], fetchReport);
    const isModalOpen = ref(false);
    const modalMEssage = ref(null);
    const modalMessageOpen = ref(false);
    const ActivateSim = async () => {
      const ICCID = selected.value[0]["ICCID"];
      try {
        const response = await fetch(`${runtimeConfig.public.URL_REQUEST}/update_thing_status/${ICCID}/ACTIVE`);
        if (response.ok) {
          console.log("SIMs Activated successfully");
          modalMEssage.value = "SIMs Activated successfully";
          selected.value = [];
          modalMessageOpen.value = true;
          setTimeout(() => {
            modalMessageOpen.value = false;
            selected.value = [];
          }, 2e3);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const DesactivateSim = async () => {
      const ICCID = selected.value[0]["ICCID"];
      console.log("ICCID:", ICCID);
      try {
        const response = await fetch(`${runtimeConfig.public.URL_REQUEST}/update_thing_status/${ICCID}/SUSPENDED`);
        if (response.ok) {
          console.log("SIMs Desactivate successfully");
          selected.value = [];
          modalMessageOpen.value = true;
          setTimeout(() => {
            modalMessageOpen.value = false;
            selected.value = [];
          }, 2e3);
        } else {
          const errorText = await response.text();
          console.log("Failed to desactivate SIM:", errorText);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelectMenu = __nuxt_component_0$2;
      const _component_UButton = __nuxt_component_1;
      const _component_UPopover = __nuxt_component_2$1;
      const _component_UTable = __nuxt_component_3;
      const _component_UPagination = __nuxt_component_4;
      const _component_UModal = __nuxt_component_5;
      const _component_UCard = __nuxt_component_6;
      const _component_UIcon = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="flex flex-col md:flex-row md:justify-between items-center mx-3"><div class="flex space-x-3 justify-end md:space-x-3 px-3 py-3.5 dark:border-gray-700">`);
      _push(ssrRenderComponent(_component_USelectMenu, {
        modelValue: selectedColumns.value,
        "onUpdate:modelValue": ($event) => selectedColumns.value = $event,
        options: columns,
        multiple: "",
        placeholder: "Columns"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        size: "xs",
        color: "blue",
        variant: "solid",
        label: "Activate",
        disabled: selected.value.length === 0,
        trailing: false,
        onClick: ActivateSim
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        size: "xs",
        color: "red",
        variant: "solid",
        label: "Desactivate",
        disabled: selected.value.length === 0,
        trailing: false,
        onClick: ($event) => isModalOpen.value = true
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UPopover, { popper: { placement: "bottom-start" } }, {
        panel: withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><div class="hidden sm:flex flex-col py-4"${_scopeId}><!--[-->`);
            ssrRenderList(ranges, (range, index) => {
              _push2(ssrRenderComponent(_component_UButton, {
                key: index,
                label: range.label,
                color: "gray",
                variant: "ghost",
                class: ["rounded-none px-6", [isRangeSelected(range.duration) ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-50 dark:hover:bg-gray-800/50"]],
                truncate: "",
                onClick: ($event) => selectRange(range.duration)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(unref(DatePicker), {
              modelValue: selectedDate.value,
              "onUpdate:modelValue": ($event) => selectedDate.value = $event,
              onClose: close
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("div", { class: "hidden sm:flex flex-col py-4" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(ranges, (range, index) => {
                    return createVNode(_component_UButton, {
                      key: index,
                      label: range.label,
                      color: "gray",
                      variant: "ghost",
                      class: ["rounded-none px-6", [isRangeSelected(range.duration) ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-50 dark:hover:bg-gray-800/50"]],
                      truncate: "",
                      onClick: ($event) => selectRange(range.duration)
                    }, null, 8, ["label", "class", "onClick"]);
                  }), 64))
                ]),
                createVNode(unref(DatePicker), {
                  modelValue: selectedDate.value,
                  "onUpdate:modelValue": ($event) => selectedDate.value = $event,
                  onClose: close
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onClose"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, { icon: "i-heroicons-calendar-days-20-solid" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(format)(selectedDate.value.start, "d MMM, yyy"))} - ${ssrInterpolate(unref(format)(selectedDate.value.end, "d MMM, yyy"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(format)(selectedDate.value.start, "d MMM, yyy")) + " - " + toDisplayString(unref(format)(selectedDate.value.end, "d MMM, yyy")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, { icon: "i-heroicons-calendar-days-20-solid" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(format)(selectedDate.value.start, "d MMM, yyy")) + " - " + toDisplayString(unref(format)(selectedDate.value.end, "d MMM, yyy")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UTable, {
        class: "txt-xs",
        "loading-state": { icon: "i-heroicons-arrow-path-20-solid", size: 56, label: "Generating report, please wait..." },
        progress: { color: "info", animation: "swing" },
        columns: selectedColumns.value,
        rows: rows.value,
        modelValue: selected.value,
        "onUpdate:modelValue": ($event) => selected.value = $event,
        onSelect: select2,
        expand: expand.value,
        "onUpdate:expand": ($event) => expand.value = $event,
        loading: loading.value === "pending"
      }, {
        expand: withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UTable, {
              columns: secondaryColumns,
              rows: row.allOperators.filter((operator) => operator !== "").map((operator) => {
                var _a, _b;
                return {
                  Operators: operator,
                  Data: ((_a = row.Consumption[operator]) == null ? void 0 : _a.Data) || "N/A",
                  Total: ((_b = row.Consumption[operator]) == null ? void 0 : _b.Total) || "N/A"
                };
              }),
              class: "bg-slate-100 dark:bg-slate-800 dark:text-slate-50"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_UTable, {
                  columns: secondaryColumns,
                  rows: row.allOperators.filter((operator) => operator !== "").map((operator) => {
                    var _a, _b;
                    return {
                      Operators: operator,
                      Data: ((_a = row.Consumption[operator]) == null ? void 0 : _a.Data) || "N/A",
                      Total: ((_b = row.Consumption[operator]) == null ? void 0 : _b.Total) || "N/A"
                    };
                  }),
                  class: "bg-slate-100 dark:bg-slate-800 dark:text-slate-50"
                }, null, 8, ["rows"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UPagination, {
        class: "flex justify-center mt-3",
        size: "xs",
        modelValue: page.value,
        "onUpdate:modelValue": ($event) => page.value = $event,
        "page-count": 5,
        total: items.value.length
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: isModalOpen.value,
        "onUpdate:modelValue": ($event) => isModalOpen.value = $event,
        "prevent-close": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}> Souhaitez-vous vraiment d\xE9sactiver cette SIM ? </h3>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-x-mark-20-solid",
                    class: "-my-1",
                    onClick: ($event) => isModalOpen.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Souhaitez-vous vraiment d\xE9sactiver cette SIM ? "),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "ghost",
                        icon: "i-heroicons-x-mark-20-solid",
                        class: "-my-1",
                        onClick: ($event) => isModalOpen.value = false
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div calss="p-4"${_scopeId2}><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId2}> Vous \xEAtes sur le point de d\xE9sactiver la SIM s\xE9lectionn\xE9e. Voulez-vous continuer ? </p><div class="flex justify-end mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    label: "Annuler",
                    onClick: ($event) => isModalOpen.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "red",
                    variant: "solid",
                    label: "D\xE9sactiver",
                    onClick: DesactivateSim
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { calss: "p-4" }, [
                      createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Vous \xEAtes sur le point de d\xE9sactiver la SIM s\xE9lectionn\xE9e. Voulez-vous continuer ? "),
                      createVNode("div", { class: "flex justify-end mt-4" }, [
                        createVNode(_component_UButton, {
                          color: "gray",
                          variant: "ghost",
                          label: "Annuler",
                          onClick: ($event) => isModalOpen.value = false
                        }, null, 8, ["onClick"]),
                        createVNode(_component_UButton, {
                          color: "red",
                          variant: "solid",
                          label: "D\xE9sactiver",
                          onClick: DesactivateSim
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Souhaitez-vous vraiment d\xE9sactiver cette SIM ? "),
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-x-mark-20-solid",
                      class: "-my-1",
                      onClick: ($event) => isModalOpen.value = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { calss: "p-4" }, [
                    createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Vous \xEAtes sur le point de d\xE9sactiver la SIM s\xE9lectionn\xE9e. Voulez-vous continuer ? "),
                    createVNode("div", { class: "flex justify-end mt-4" }, [
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "ghost",
                        label: "Annuler",
                        onClick: ($event) => isModalOpen.value = false
                      }, null, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "red",
                        variant: "solid",
                        label: "D\xE9sactiver",
                        onClick: DesactivateSim
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: modalMessageOpen.value,
        "onUpdate:modelValue": ($event) => modalMessageOpen.value = $event,
        transition: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 flex justify-between items-center flex-row space-y-2"${_scopeId}><p${_scopeId}>${ssrInterpolate(modalMEssage.value)}</p>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-rocket-launch",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 flex justify-between items-center flex-row space-y-2" }, [
                createVNode("p", null, toDisplayString(modalMEssage.value), 1),
                createVNode(_component_UIcon, {
                  name: "i-heroicons-rocket-launch",
                  class: "w-5 h-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BvkptffJ.mjs.map
