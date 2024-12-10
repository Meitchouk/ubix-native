const dateTimeUtils = {
    /**
     * Formatea una fecha en un formato amigable para el usuario.
     * @param dateString Fecha en formato ISO (e.g., '2024-11-26')
     * @param locale Idioma y región (por defecto 'en-US')
     * @param options Opciones personalizadas de Intl.DateTimeFormat
     * @returns Fecha formateada como string
     */
    formatDate: (dateString: string, locale: string = 'en-US', options?: Intl.DateTimeFormatOptions): string => {
        const date = new Date(dateString);
        const defaultOptions: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        };
        return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options }).format(date);
    },

    /**
     * Formatea una hora en un formato amigable para el usuario.
     * @param timeString Hora en formato 'HH:mm' (e.g., '14:30')
     * @param locale Idioma y región (por defecto 'en-US')
     * @returns Hora formateada como string (e.g., '2:30 PM')
     */
    formatTime: (timeString: string, locale: string = 'en-US'): string => {
        const [hours, minutes] = timeString.split(':').map(Number);
        const date = new Date();
        date.setHours(hours, minutes);

        return new Intl.DateTimeFormat(locale, {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        }).format(date);
    },

    /**
     * Combina una fecha y hora en un formato amigable.
     * @param dateString Fecha en formato ISO (e.g., '2024-11-26')
     * @param timeString Hora en formato 'HH:mm' (e.g., '14:30')
     * @param locale Idioma y región (por defecto 'en-US')
     * @returns Fecha y hora combinadas como string
     */
    formatDateTime: (
        dateString: string,
        timeString: string,
        locale: string = 'en-US'
    ): string => {
        const formattedDate = dateTimeUtils.formatDate(dateString, locale);
        const formattedTime = dateTimeUtils.formatTime(timeString, locale);

        return `${formattedDate} at ${formattedTime}`;
    },
};

export default dateTimeUtils;
