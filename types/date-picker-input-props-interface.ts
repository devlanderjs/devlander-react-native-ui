import BasePickerInputFieldPropsInterface from './base-picker-input-field-props.interface';

interface DatePickerInputPropsInterface extends BasePickerInputFieldPropsInterface {
  selectedValue: Date,
  width?: string | number,
  mode: 'date' | 'time' | 'datetime',
  label?: string,
  placeholder?: string,
  setSelectedValue?: (value: any) => void,
}

export const DateInputGroupDefaultProps: DatePickerInputPropsInterface = {
    open: false,
    setOpen: () =>
      console.log('this is setOpen prop inside of DateInputGroup'),
    setSelectedValue: () =>
      console.log('this is setDate prop inside of DateInputGroup'),
    selectedValue: new Date(),
    width: '100%',
    mode:'date',
    label: 'label',
}


export default DatePickerInputPropsInterface