import PropTypes from 'prop-types';


export const unitPropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

export const columnStylePropTypes = PropTypes.shape({
    width:  unitPropType,
    paddingLeft:  unitPropType,
    paddingRight:  unitPropType,
})

export const animationModalTypes = ['slide', 'fade', 'none']



export const animationModalPropTypes = PropTypes.oneOfType(animationModalPropTypes);



