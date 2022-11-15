import { OptionSelectItem } from './option-select-item-type';

interface BasePickerInputFieldPropsInterface { 
  textInputOpacity?: number;
  disabled?: boolean;
  dense?: boolean;
  maskForSelectedValue?: [string, number],
  pickerItemFontSize?: number;
  errorText?: string,
  open?: boolean,
  setOpen?: (open: boolean) => void,
  hideTitle?: boolean,
  setSelectedValue?: (value: any) => void,
  options?: OptionSelectItem[],
  selectedValue?: string | number | Date,
  title?: string,
  finishedText?: string,
}

export const DefaultBasePickerInputFieldPropsInterface: BasePickerInputFieldPropsInterface = {
    textInputOpacity: 1,
    disabled: false,
    dense: true,
    open: false,
    setOpen: () => {},
    hideTitle: false,
    setSelectedValue: (value: any) => console.log(value),
    options:[],
    selectedValue: '',
    title: '',
    finishedText: '',
}





export default BasePickerInputFieldPropsInterface