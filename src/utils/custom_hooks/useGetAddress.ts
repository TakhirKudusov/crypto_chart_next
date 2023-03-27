import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useGetAddress = () => {
  const [address, setAddress] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (typeof router.query.id === "string") {
      setAddress(router.query.id);
    }
  }, [router.asPath]);

  return address;
};
