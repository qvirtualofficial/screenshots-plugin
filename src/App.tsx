import { useTrackingDataQuery } from "@/hooks/useTrackingDataQuery.ts";
import { Header, HeaderStat } from "./components/header";
import { LoadingSpinner } from "@/components/loading-spinner.tsx";

function App() {
  const { data: trackingData, isLoading } = useTrackingDataQuery();

  const isTrackingAFlight = trackingData?.trackingState.status === "TRACKING";

  if (isLoading) return null;

  return (
    <div className="flex flex-col flex-1 h-screen">
      <AppHeader />
      {trackingData?.providerState.status !== "Connected" ? (
        <NotTrackingState />
      ) : !isTrackingAFlight ? (
        <LoadingSpinner title={"Awaiting flight to be started..."} />
      ) : (
        <div>Hello app</div>
      )}
    </div>
  );
}

const AppHeader = () => {
  const { data: trackingData, isLoading } = useTrackingDataQuery();
  const isTrackingAFlight = trackingData?.trackingState.status === "TRACKING";
  if (isLoading) return null;
  return (
    <Header
      title={`In-flight Screenshots`}
      subtitle={
        "Attach screenshots immediately after capture to ensure accurate in-flight location tagging"
      }
    >
      <HeaderStat
        value={trackingData?.trackingData?.currentFlightPhase || "N/A"}
        label={"Flight status"}
      />
      {isTrackingAFlight && (
        <>
          <HeaderStat
            value={trackingData?.flightPlanData?.departure.code}
            label={"Departure"}
          />
          <HeaderStat
            value={trackingData?.flightPlanData?.arrival.code}
            label={"Arrival"}
          />
          <HeaderStat
            value={
              trackingData?.flightPlanData?.code +
              "" +
              trackingData?.flightPlanData?.number
            }
            label={"Flight #"}
          />
          <HeaderStat
            value={trackingData?.trackingData?.simData.longitude.toFixed(6)}
            label={"Longitude"}
          />
          <HeaderStat
            value={trackingData?.trackingData?.simData.latitude.toFixed(6)}
            label={"Latitude"}
          />
        </>
      )}
    </Header>
  );
};

const NotTrackingState = () => {
  return (
    <div className={"h-screen"}>
      <div className={"grid place-content-center h-full"}>
        <h1 className={"text-3xl text-foreground font-bold"}>
          Simulator not detected!
        </h1>
        <p className={"text-muted-foreground"}>
          Please connect your simulator to upload screenshots
        </p>
      </div>
    </div>
  );
};

export default App;
