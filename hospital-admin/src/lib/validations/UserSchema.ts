import * as z from "zod";

export const userFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string().min(5, "Phone number is required"),
  role: z.enum(["User", "Doctor"]),
  gender: z.enum(["Male", "Female", "Other"]).optional(),
  address: z.string().min(2, "Address is required"),
  appointmentTime: z.string().optional(),
  assignedDoctor: z.string().optional(),
});

export type UserFormValues = z.infer<typeof userFormSchema>;
