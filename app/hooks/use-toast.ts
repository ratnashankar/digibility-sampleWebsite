"use client";

import * as React from "react";

/* ----------------------------------------------------
   Types
---------------------------------------------------- */

export type ToastProps = {
  id?: string;
  title?: string;
  description?: string;
  open?: boolean;
  duration?: number;
  onOpenChange?: (open: boolean) => void;
  action?: React.ReactNode;
};

export type ToastState = {
  toasts: ToastProps[];
};

type ToastAction =
  | { type: "ADD_TOAST"; toast: ToastProps }
  | { type: "UPDATE_TOAST"; toast: ToastProps }
  | { type: "DISMISS_TOAST"; toastId?: string }
  | { type: "REMOVE_TOAST"; toastId?: string };

/* ----------------------------------------------------
   Constants
---------------------------------------------------- */

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000; // long delay so transitions finish

/* ----------------------------------------------------
   ID Generator
---------------------------------------------------- */

let count = 0;
function genId(): string {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

/* ----------------------------------------------------
   Toast Timeout Manager
---------------------------------------------------- */

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

/* ----------------------------------------------------
   Reducer
---------------------------------------------------- */

export const reducer = (state: ToastState, action: ToastAction): ToastState => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      if (toastId) addToRemoveQueue(toastId);
      else state.toasts.forEach((t) => addToRemoveQueue(t.id!));

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          toastId === undefined || t.id === toastId ? { ...t, open: false } : t
        ),
      };
    }

    case "REMOVE_TOAST":
      if (!action.toastId) {
        return { ...state, toasts: [] };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };

    default:
      return state;
  }
};

/* ----------------------------------------------------
   Global State Store
---------------------------------------------------- */

let memoryState: ToastState = { toasts: [] };
const listeners: ((state: ToastState) => void)[] = [];

function dispatch(action: ToastAction) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

/* ----------------------------------------------------
   Toast API
---------------------------------------------------- */

export function toast(props: ToastProps) {
  const id = genId();

  const update = (updateProps: Partial<ToastProps>) =>
    dispatch({ type: "UPDATE_TOAST", toast: { ...updateProps, id } });

  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => !open && dismiss(),
    },
  });

  return { id, dismiss, update };
}

/* ----------------------------------------------------
   Hook
---------------------------------------------------- */

export function useToast() {
  const [state, setState] = React.useState<ToastState>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) =>
      dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}
