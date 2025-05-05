import { useQuery } from "@tanstack/react-query";
import { localApi } from "@tfdidesign/smartcars3-ui-sdk";
import type { Identity } from "@/types/identity.ts";

export const useIdentityQuery = () => {
  return useQuery({
    queryKey: ["identity"],
    queryFn: async () => {
      return (await localApi("api/identity")) as Identity;
    },
  });
};
