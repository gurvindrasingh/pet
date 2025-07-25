import { z } from "zod/v4";

export const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});

export const signupSchema = loginSchema.extend({
  name: z.string().min(2, "Name required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
