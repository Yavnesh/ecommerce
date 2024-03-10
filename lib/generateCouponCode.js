export const generateCouponCode = (title, expiryDate) => {

    // title to uppercase and remove all spaces.
    const formattedTitle = title.toUpperCase().replace(/\s+/g, '');

    // format of date is DDMMYYYY
    const formattedExpiryDate = expiryDate.split('-').reverse().join('');

    // Combine the formattedTitle and formattedExpiryDate to create the coupon
    const couponCode = `${formattedTitle}-${formattedExpiryDate}`;

    return couponCode;
}