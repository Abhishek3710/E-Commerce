import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6,{
        message:"password must be atleast 6 characters"
    })
});

export type LoginSchema = z.infer<typeof loginSchema>
//The infer utility in TypeScript, when used with Zod, extracts the TypeScript type from a Zod schema.

