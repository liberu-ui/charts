import { shortNumber } from '@liberu-ui/mixins';

export default (number, { chart: { options: { precision = 2 } } }) => {
    return shortNumber(number, precision)
};
