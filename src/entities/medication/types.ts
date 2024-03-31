export interface IMedication {
  name: string;
  description: string;
  intakesCount: number;
  destinationCount: number;
  uuid: string;
  updated: string;
  isFulfilled: boolean;
  notes: IMedicationNote[];
}

export interface IMedicationNote {
  note: string;
  uuid: string;
}
