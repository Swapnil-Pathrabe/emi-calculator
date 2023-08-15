export function numWithCommas(num) {
    if (num) return `₹ ${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};