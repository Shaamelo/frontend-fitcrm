interface EmergencyContact {
  name: string;
  email: string;
  phone: string;
  relationship: string;
}
interface MedicInformation {
  weight: number;
  height: number;
  gender: string;
  diseases: string[];
}

export interface Customer {
  id?: string;
  name: string;
  documentType: string;
  documentNumber: string;
  birthDate: string;
  age?: number;
  address: string;
  email: string;
  phone: number;
  remainingDays: number;
  emergencyContact: EmergencyContact;
  medicInformation: MedicInformation;
}
