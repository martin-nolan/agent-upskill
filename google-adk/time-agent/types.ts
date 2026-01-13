import { z } from 'zod';

/**
 * Tool input (what the LLM passes to the tool)
 */
export const GetCurrentTimeInputSchema = z.object({
    timezone: z
        .string()
        .min(1)
        .describe("The IANA timezone identifier (e.g., 'America/New_York')"),
});

export type GetCurrentTimeInput = z.infer<typeof GetCurrentTimeInputSchema>;

/**
 * Tool output (what your tool returns back to the LLM)
 * Use a discriminated union so success/error are well-defined.
 */
export const GetCurrentTimeOutputSchema = z.discriminatedUnion('status', [
    z.object({
        status: z.literal('success'),
        report: z.string(),
        timezone: z.string(),
        utc_offset: z.string(),
        iso: z.string(),
    }),
    z.object({
        status: z.literal('error'),
        report: z.string(),
    }),
]);

export type GetCurrentTimeOutput = z.infer<typeof GetCurrentTimeOutputSchema>;
