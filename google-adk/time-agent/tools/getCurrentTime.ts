import { FunctionTool } from '@google/adk';
import {
    GetCurrentTimeInputSchema,
    GetCurrentTimeOutputSchema,
    type GetCurrentTimeInput,
    type GetCurrentTimeOutput,
} from '../types';

export const getCurrentTime = new FunctionTool({
    name: 'get_current_time',
    description:
        'Returns the current time in a specified IANA timezone (e.g., America/New_York, Europe/London, Asia/Tokyo).',

    // ADK uses this as the tool schema
    parameters: GetCurrentTimeInputSchema,

    execute: async (args: unknown): Promise<GetCurrentTimeOutput> => {
        // Explicit input validation
        const { timezone } = GetCurrentTimeInputSchema.parse(args) as GetCurrentTimeInput;

        try {
            // Use JavaScript's built-in Date and Intl APIs - no external calls needed!
            const now = new Date();
            
            // Validate timezone by attempting to format with it
            try {
                new Intl.DateTimeFormat('en-US', { timeZone: timezone }).format(now);
            } catch (e) {
                return GetCurrentTimeOutputSchema.parse({
                    status: 'error',
                    report: `Invalid timezone: ${timezone}. Please use a valid IANA timezone identifier (e.g., America/New_York, Europe/London).`,
                });
            }

            // Format the time nicely
            const formattedTime = now.toLocaleString('en-US', {
                timeZone: timezone,
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });

            // Get UTC offset for this timezone
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                timeZoneName: 'longOffset'
            });
            const parts = formatter.formatToParts(now);
            const offsetPart = parts.find(p => p.type === 'timeZoneName');
            const utcOffset = offsetPart?.value || 'UTC';

            // Get ISO string in the target timezone
            const isoString = now.toLocaleString('sv-SE', { timeZone: timezone }).replace(' ', 'T');

            return GetCurrentTimeOutputSchema.parse({
                status: 'success',
                report: formattedTime,
                timezone,
                utc_offset: utcOffset,
                iso: isoString,
            });
        } catch (error) {
            console.error('[getCurrentTime] Error:', error);
            return GetCurrentTimeOutputSchema.parse({
                status: 'error',
                report: `Failed to retrieve time: ${error instanceof Error ? error.message : 'Unknown error'}`,
            });
        }
    },
});
