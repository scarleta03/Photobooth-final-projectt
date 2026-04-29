// Lingyin Li
export interface Cat {
    code: number | null;
    photoTaken: boolean
    setRandomCode: (code: number) => void
}