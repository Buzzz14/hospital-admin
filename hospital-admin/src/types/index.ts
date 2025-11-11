export interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  role: "User" | "Doctor";
  gender: "Male" | "Female" | "Other";
  address: string;
  appointmentTime?: string;
  assignedDoctor?: string;
}
