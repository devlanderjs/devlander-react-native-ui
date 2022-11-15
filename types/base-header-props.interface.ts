   type titleStyleProps = {
    fontSize?: number;
    lineHeight?: number;
    alignItems?: string;
};

type headerStyleProps = {
    borderBottomWidth?: number;
};


export interface BaseHeaderPropsInterface  {
    title?: string;
    navigation?: any;
    route?: any;
    subTitle?: string;
    titleOnPress?: () => void;
    subHeader?: () => void;
    presentationModal?: boolean;
    titleFlex?: number;
    titleStyles?: titleStyleProps;
    headerStyles?: headerStyleProps;
    headerRightButton?: () => void;
    headerLeftButton?: () => void;
    nestedScreen?: boolean;
    applyGoBackToTitle?: boolean;
    children?: JSX.Element | JSX.Element[];
    
  };