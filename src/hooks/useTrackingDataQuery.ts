import { useQuery } from "@tanstack/react-query";
import { localApi } from "@tfdidesign/smartcars3-ui-sdk";
import type { FlightTrackingData } from "@/types/flightTrackingData.ts";

export const useTrackingDataQuery = () => {
  return useQuery({
    queryKey: ["trackingData"],
    queryFn: async () => {
      return (await localApi(
        "api/com.tfdidesign.flight-tracking/data",
      )) as FlightTrackingData;
    },
    refetchInterval: 5000,
  });
};
