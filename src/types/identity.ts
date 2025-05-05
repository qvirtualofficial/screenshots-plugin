export interface Identity {
  va_user: VaUser;
  airline: Airline;
}

export interface VaUser {
  dbID: number;
  pilotID: string;
  firstName: string;
  lastName: string;
  email: string;
  rank: string;
  rankLevel: number;
  rankImage: string;
  avatar: string;
  session: string;
  expiry: number;
}

export interface Airline {
  id: number;
  isPartner: boolean;
  settings: Settings;
  plugins: Plugin[];
}

export interface Settings {
  airlineName: string;
  airlineICAO: string;
  discordURL: string;
  accentBackgroundColor: string;
  accentForegroundColor: string;
  welcomeMessage: string;
  maintenanceMode: boolean;
  maintenanceModeMessage: string;
  logo: string;
  logoDark: string;
  icon: string;
  scriptURL: string;
  vaURL: string;
  ico: string;
  scriptVersion: string;
  scriptHandler: string;
}

export interface Plugin {
  id: string;
  name: string;
  verified: boolean;
  downloads: number;
  rating: number;
  totalReviews: number;
  author: string;
  description: string;
  lastUpdated: string;
  version: string;
  type: string;
  availableSettings: AvailableSettings;
  appliedSettings: AppliedSettings;
}

export interface AvailableSettings {
  enable_booking?: EnableBooking;
  charter_flights?: CharterFlights;
  allow_fleet_substitution?: AllowFleetSubstitution;
  allow_any_aircraft_in_fleet?: AllowAnyAircraftInFleet;
  local_port?: LocalPort;
  refresh_rate?: RefreshRate;
  x_plane_port?: XPlanePort;
  flight_logger?: FlightLogger;
  time_tracking?: TimeTracking;
  simconnect_port?: SimconnectPort;
  local_ip_address?: LocalIpAddress;
  tracking_provider?: TrackingProvider;
  x_plane_ip_address?: XPlaneIpAddress;
  simconnect_ip_address?: SimconnectIpAddress;
  automatic_pirep_submission?: AutomaticPirepSubmission;
}

export interface EnableBooking {
  name: string;
  type: string;
  default: boolean;
  description: string;
  settingType: string;
}

export interface CharterFlights {
  name: string;
  type: string;
  default: boolean;
  description: string;
  settingType: string;
}

export interface AllowFleetSubstitution {
  name: string;
  type: string;
  default: boolean;
  description: string;
  settingType: string;
}

export interface AllowAnyAircraftInFleet {
  name: string;
  type: string;
  default: boolean;
  description: string;
  settingType: string;
}

export interface LocalPort {
  name: string;
  type: string;
  when: When;
  order: number;
  default: number;
  advanced: boolean;
  settingType: string;
}

export interface When {
  key: string;
  value: string;
}

export interface RefreshRate {
  name: string;
  type: string;
  default: string;
  options: Options;
  required: boolean;
  description: string;
  settingType: string;
}

export interface Options {
  "15": string;
  "30": string;
  "60": string;
}

export interface XPlanePort {
  name: string;
  type: string;
  when: When2;
  order: number;
  default: number;
  advanced: boolean;
  required: boolean;
  settingType: string;
}

export interface When2 {
  key: string;
  value: string;
}

export interface FlightLogger {
  name: string;
  type: string;
  default: string;
  required: boolean;
  minLength: number;
  description: string;
  settingType: string;
}

export interface TimeTracking {
  name: string;
  type: string;
  default: string;
  options: string[];
  required: boolean;
  description: string;
  settingType: string;
}

export interface SimconnectPort {
  name: string;
  type: string;
  when: When3;
  order: number;
  default: number;
  advanced: boolean;
  settingType: string;
}

export interface When3 {
  key: string;
  value: string;
}

export interface LocalIpAddress {
  name: string;
  type: string;
  when: When4;
  order: number;
  default: string;
  advanced: boolean;
  settingType: string;
}

export interface When4 {
  key: string;
  value: string;
}

export interface TrackingProvider {
  name: string;
  type: string;
  order: number;
  default: string;
  options: string[];
  required: boolean;
  settingType: string;
}

export interface XPlaneIpAddress {
  name: string;
  type: string;
  when: When5;
  order: number;
  default: string;
  advanced: boolean;
  required: boolean;
  minLength: number;
  settingType: string;
}

export interface When5 {
  key: string;
  value: string;
}

export interface SimconnectIpAddress {
  name: string;
  type: string;
  when: When6;
  order: number;
  default: string;
  advanced: boolean;
  settingType: string;
}

export interface When6 {
  key: string;
  value: string;
}

export interface AutomaticPirepSubmission {
  name: string;
  type: string;
  order: number;
  default: boolean;
  required: boolean;
  description: string;
  settingType: string;
}

export interface AppliedSettings {
  enable_booking?: boolean;
  charter_flights?: boolean;
  allow_fleet_substitution?: boolean;
  refresh_rate?: string;
  flight_logger?: string;
  time_tracking?: string;
}
