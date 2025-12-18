import { useCallback } from 'react';
import type { FieldValues, UseFormReset } from 'react-hook-form';

interface ResetValuesOptions<TData, TFormData extends FieldValues> {
    reset: UseFormReset<TFormData>;
    mapper: (data: NonNullable<TData>) => TFormData;
    data?: NonNullable<TData>;
    disabled?: boolean;
}

const resetFormValues = <TData, TFormData extends FieldValues>(
    data: NonNullable<TData>,
    reset: UseFormReset<TFormData>,
    mapper: (data: NonNullable<TData>) => TFormData
) => {
    reset(mapper(data));
};

export const useAsyncFormData = <TData, TFormData extends FieldValues>() => {
    const resetValues = useCallback(
        ({
            reset,
            mapper,
            data,
            disabled,
        }: ResetValuesOptions<TData, TFormData>) => {
            if (!data || disabled) return;
            resetFormValues(data, reset, mapper);
        },
        []
    );

    return {
        resetValues,
    };
};
