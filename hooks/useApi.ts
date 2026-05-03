import { useState, useCallback } from "react";
import axios, { AxiosError } from "axios";

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: AxiosError) => void;
}

export const useApi = <T,>() => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const request = useCallback(
    async (
      url: string,
      method: "get" | "post" | "put" | "delete" = "get",
      payload?: any,
      options?: UseApiOptions<T>
    ) => {
      setIsLoading(true);
      setError(null);

      try {
        const config = {
          method,
          url,
          data: payload,
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axios(config);
        const result = response.data;

        setData(result);
        options?.onSuccess?.(result);

        return result;
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError);
        options?.onError?.(axiosError);
        throw axiosError;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    data,
    isLoading,
    error,
    request,
    reset,
  };
};
