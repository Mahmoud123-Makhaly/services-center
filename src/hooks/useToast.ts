'use client';
import { useCallback, useEffect, useMemo } from 'react';
import { ToastOptions, ToastContent, toast } from 'react-toastify';

const useToast = () => {
  const defaultOptions: ToastOptions = useMemo(
    () => ({
      position: 'top-right',
      autoClose: 7000,
      theme: 'colored',
    }),
    [],
  );
  const defaultClassName = 'text-white mt-auto';
  useEffect(() => toast.dismiss(), []);
  //toast.clearWaitingQueue();
  const success = useCallback(
    (content: ToastContent, options?: ToastOptions) => {
      toast(content, {
        ...options,
        ...defaultOptions,
        type: 'success',
        className: `bg-success ${defaultClassName}`,
      });
    },
    [defaultOptions],
  );
  const info = useCallback(
    (content: ToastContent, options?: ToastOptions) => {
      toast(content, {
        ...options,
        ...defaultOptions,
        type: 'info',
        className: `bg-primary ${defaultClassName}`,
      });
    },
    [defaultOptions],
  );
  const error = useCallback(
    (content: ToastContent, options?: ToastOptions) => {
      toast(content, {
        ...options,
        ...defaultOptions,
        autoClose: false,
        closeButton: true,
        closeOnClick: false,
        type: 'error',
        className: `bg-danger ${defaultClassName}`,
      });
    },
    [defaultOptions],
  );
  const warn = useCallback(
    (content: ToastContent, options?: ToastOptions) => {
      toast(content, {
        ...options,
        ...defaultOptions,
        type: 'warning',
        className: `bg-warning ${defaultClassName}`,
      });
    },
    [defaultOptions],
  );
  return useMemo(() => ({ success, info, error, warn }), [error, info, success, warn]);
  //toast.success('Company Added Successfully', { autoClose: 3000 });
};
export default useToast;
