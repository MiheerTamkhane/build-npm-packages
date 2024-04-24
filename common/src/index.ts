import { z } from "zod";

export const signUpInput = z.object({
  username: z.string().min(1),
  password: z.string(),
});

export type SignUpType = z.infer<typeof signUpInput>;
