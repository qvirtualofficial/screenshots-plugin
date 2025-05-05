export interface FlightTrackingData {
  userSettings?: UserSettings;
  trackingData?: TrackingData;
  flightPlanData?: FlightPlanData;
  trackingState: TrackingState;
  providerState: ProviderState;
}

export interface UserSettings {
  discordRichPresence: boolean;
  weightUnits: string;
  altitudeUnits: string;
  landingDistanceUnits: string;
  automaticPirepSubmission: boolean;
  abnormalFlightConditionsCausePause: boolean;
  pauseAtTd: boolean;
  trackingProvider: string;
  xPlaneLocalIp: string;
  xPlaneLocalPort: number;
  xPlaneRemoteIp: string;
  xPlaneRemotePort: number;
  simconnectRemotePort: number;
  playAnnouncements: boolean;
  playGpws: boolean;
}

export interface TrackingData {
  simData: SimData;
  lastSimData: LastSimData;
  blockTime: number;
  elapsedFlightTime: number;
  remainingFlightTime: number;
  currentFlightPhase: string;
  flightLog: FlightLog[];
  computedData: ComputedData;
  simVersion: string;
  flightBackup: boolean;
  historyReport: HistoryReport[];
  startTimestamp: number;
  elapsedTime: number;
  startingFuel: number;
  comments: string;
  initialLandingRate: unknown;
  lastFrameTime: number;
  timeStatus: unknown;
  fuelStatus: unknown;
  deltaTime: number;
  deltaFuel: number;
  lastWaypoint: unknown;
}

export interface SimData {
  isXPlane: boolean;
  latitude: number;
  longitude: number;
  altitude: number;
  altitudeAgl: number;
  altitudeCalibrated: number;
  bank: number;
  heading: number;
  pitch: number;
  gs: number;
  gearControl: number;
  flapsControl: number;
  vs: number;
  tas: number;
  planeOnground: boolean;
  engine1Firing: boolean;
  engine2Firing: boolean;
  engine3Firing: boolean;
  engine4Firing: boolean;
  ias: number;
  aircraftEmptyWeight: number;
  zeroWeightPlusPayload: number;
  simulationRate: number;
  engine1N1: number;
  engine2N1: number;
  engine3N1: number;
  engine4N1: number;
  engine1N2: number;
  engine2N2: number;
  engine3N2: number;
  engine4N2: number;
  fuelTotalQuantityWeight: number;
  flapsRightPosition: number;
  flapsLeftPosition: number;
  transponderFreq: number;
  com1Freq: number;
  com1StandbyFreq: number;
  com2Freq: number;
  com2StandbyFreq: number;
  nav1Freq: number;
  nav1StandbyFreq: number;
  nav2Freq: number;
  nav2StandbyFreq: number;
  windDirection: number;
  windSpeed: number;
  landingRate: number;
  pressureQNH: number;
  altimeterSettings: number;
  zuluMonthOfYear: unknown;
  zuluDayOfMonth: unknown;
  zuluYear: unknown;
  clockHour: number;
  clockMin: number;
  clockSec: number;
  localDayOfMonth: number;
  localMonthOfYear: number;
  localYear: unknown;
  zuluHour: number;
  zuluMin: number;
  zuluSec: number;
  gForce: number;
  pauseFlag: boolean;
  gForceTouchDown: number;
  enginesCount: number;
  aircraftType: string;
  stallWarning: boolean;
  overspeedWarning: boolean;
  slewMode: boolean;
  simulatorVersion: number;
  isInMenu: number;
  crashed: boolean;
  elapsedTime: number;
  elapsedFlightTime: number;
}

export interface LastSimData {
  isXPlane: boolean;
  latitude: number;
  longitude: number;
  altitude: number;
  altitudeAgl: number;
  altitudeCalibrated: number;
  bank: number;
  heading: number;
  pitch: number;
  gs: number;
  gearControl: number;
  flapsControl: number;
  vs: number;
  tas: number;
  planeOnground: boolean;
  engine1Firing: boolean;
  engine2Firing: boolean;
  engine3Firing: boolean;
  engine4Firing: boolean;
  ias: number;
  aircraftEmptyWeight: number;
  zeroWeightPlusPayload: number;
  simulationRate: number;
  engine1N1: number;
  engine2N1: number;
  engine3N1: number;
  engine4N1: number;
  engine1N2: number;
  engine2N2: number;
  engine3N2: number;
  engine4N2: number;
  fuelTotalQuantityWeight: number;
  flapsRightPosition: number;
  flapsLeftPosition: number;
  transponderFreq: number;
  com1Freq: number;
  com1StandbyFreq: number;
  com2Freq: number;
  com2StandbyFreq: number;
  nav1Freq: number;
  nav1StandbyFreq: number;
  nav2Freq: number;
  nav2StandbyFreq: number;
  windDirection: number;
  windSpeed: number;
  landingRate: number;
  pressureQNH: number;
  altimeterSettings: number;
  zuluMonthOfYear: unknown;
  zuluDayOfMonth: unknown;
  zuluYear: unknown;
  clockHour: number;
  clockMin: number;
  clockSec: number;
  localDayOfMonth: number;
  localMonthOfYear: number;
  localYear: unknown;
  zuluHour: number;
  zuluMin: number;
  zuluSec: number;
  gForce: number;
  pauseFlag: boolean;
  gForceTouchDown: number;
  enginesCount: number;
  aircraftType: string;
  stallWarning: boolean;
  overspeedWarning: boolean;
  slewMode: boolean;
  simulatorVersion: number;
  isInMenu: number;
  crashed: boolean;
  elapsedTime: number;
  elapsedFlightTime: number;
}

export interface FlightLog {
  eventId: string;
  eventElapsedTime: number;
  eventTimestamp: string;
  eventCondition: string;
  message: string;
}

export interface ComputedData {
  distanceFromDest: number;
  distanceFromDep: number;
  landingDistance: number;
  engineStatus: boolean;
  highestN1: number;
  diverted: boolean;
  cruiseAltitude: number;
}

export interface HistoryReport {
  isXPlane: boolean;
  latitude: number;
  longitude: number;
  altitude: number;
  altitudeAgl: number;
  altitudeCalibrated: number;
  bank: number;
  heading: number;
  pitch: number;
  gs: number;
  gearControl: number;
  flapsControl: number;
  vs: number;
  tas: number;
  planeOnground: boolean;
  engine1Firing: boolean;
  engine2Firing: boolean;
  engine3Firing: boolean;
  engine4Firing: boolean;
  ias: number;
  aircraftEmptyWeight: number;
  zeroWeightPlusPayload: number;
  simulationRate: number;
  engine1N1: number;
  engine2N1: number;
  engine3N1: number;
  engine4N1: number;
  engine1N2: number;
  engine2N2: number;
  engine3N2: number;
  engine4N2: number;
  fuelTotalQuantityWeight: number;
  flapsRightPosition: number;
  flapsLeftPosition: number;
  transponderFreq: number;
  com1Freq: number;
  com1StandbyFreq: number;
  com2Freq: number;
  com2StandbyFreq: number;
  nav1Freq: number;
  nav1StandbyFreq: number;
  nav2Freq: number;
  nav2StandbyFreq: number;
  windDirection: number;
  windSpeed: number;
  landingRate: number;
  pressureQNH: number;
  altimeterSettings: number;
  zuluMonthOfYear: unknown;
  zuluDayOfMonth: unknown;
  zuluYear: unknown;
  clockHour: number;
  clockMin: number;
  clockSec: number;
  localDayOfMonth: number;
  localMonthOfYear: number;
  localYear: unknown;
  zuluHour: number;
  zuluMin: number;
  zuluSec: number;
  gForce: number;
  pauseFlag: boolean;
  gForceTouchDown: number;
  enginesCount: number;
  aircraftType: string;
  stallWarning: boolean;
  overspeedWarning: boolean;
  slewMode: boolean;
  simulatorVersion: number;
  isInMenu: number;
  crashed: boolean;
  elapsedTime: number;
  elapsedFlightTime: number;
}

export interface FlightPlanData {
  guid: unknown;
  code: string;
  bidID: string;
  trackingId: string;
  departure: Departure;
  arrival: Arrival;
  network: string;
  route: unknown[];
  pirepID: unknown;
  number: string;
  type: string;
  distance: number;
  flightTime: string;
  departureTime: string;
  arrivalTime: string;
  cruise: number;
  currentAircraft: CurrentAircraft;
}

export interface Departure {
  id: number;
  code: string;
  name: string;
  latitude: string;
  longitude: string;
}

export interface Arrival {
  id: number;
  code: string;
  name: string;
  latitude: string;
  longitude: string;
}

export interface CurrentAircraft {
  id: number;
  code: string;
  name: string;
  serviceCeiling: number;
  registration: string;
  maximumPassengers: number;
  maximumCargo: number;
  minimumRank: string;
}

export interface TrackingState {
  status: string;
}

export interface ProviderState {
  status: string;
  simulatorName: string;
}
