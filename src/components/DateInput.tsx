import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { FC, memo } from "react";
import { Control, Controller, ControllerProps, FieldPath } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormValues } from "./types";

export interface DateTimeInputControllerProps<
  TName extends FieldPath<FormValues> = FieldPath<FormValues>,
> extends Omit<ControllerProps<FormValues>, 'render' | 'rules'> {
  name: TName;
  control: Control<FormValues>;
  label: string;
}

const MuiDatePicker: FC<DateTimeInputControllerProps> = memo(function MuiDatePicker(
  props: DateTimeInputControllerProps
) {
  const { control, name: fieldName, label } = props;
  return (
    <Controller
      control={control}
      name={fieldName}
      defaultValue={''}
      render={({ field: { onChange, value, name }, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            name={name}
            label={label}
            format="DD/MM/YYYY"
            value={value}
            onChange={(event) => onChange(event)}
            slotProps={{
              textField: { error: !!error, helperText: error?.message },
            }}
            sx={{width: '100%'}}
          />
        </LocalizationProvider>
      )}
    />
  );
});

export default MuiDatePicker;
