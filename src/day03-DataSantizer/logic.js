export function capitalizeName(namee) {
    if(!namee) return "";
     const trimmed = namee.trim();
     return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();

}

export function toKebabCase(title) {
    let lowercased = title.toLowerCase();
    let perfectPara = lowercased.replaceAll(" ","-")
    return perfectPara ;
}

export function maskCreditCard(cardNumber) {
    const cradNum = cardNumber.replace(/\d(?=\d{4})/g, "*");
    return cradNum;
}