import { useEffect, useState } from "react";
import { useGetAddress } from "@/utils/custom_hooks/useGetAddress";

export const useGetConfig = (
  fileName: string
): { [key: string]: any[] | { [key: string]: any } } => {
  const [config, setConfig] = useState<any | any[]>([]);

  const address = useGetAddress();

  useEffect(() => {
    if (address) {
      (async () => {
        try {
          const data = await import(
            `@/utils/config/${address}/${fileName}.config.ts`
          );
          if (module) {
            setConfig(data);
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [address]);

  return config;
};
