export class Utilities {
    static generateRandomNumber(min, max, scaler) { return (Math.random() * (max - min) + min) * scaler; }
}
