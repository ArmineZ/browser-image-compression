// Type definitions for browser-image-compression 1.0
// Project: https://github.com/Donaldcwl/browser-image-compression
// Definitions by: Donald <https://github.com/Donaldcwl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    /** @default Number.POSITIVE_INFINITY */
    maxSizeMB?: number;
    /** @default undefined */
    maxWidthOrHeight?: number;
    /** @default false */
    useWebWorker?: boolean;
    /** @default 10 */
    maxIteration?: number;
    /** Default to be the exif orientation from the image file */
    exifOrientation?: number;
    /** A function takes one progress argument (progress from 0 to 100) */
    onProgress?: (progress: number) => void;
    /** Default to be the original mime type from the image file */
    fileType?: string;
}

declare function imageCompression (image: File | Blob, options: Options): Promise<File | Blob>;

declare namespace imageCompression {
    export function getDataUrlFromFile (file: File): Promise<string>
    export function getFilefromDataUrl (dataurl: string, filename: string, lastModified?: number): Promise<File | Blob>
    export function loadImage (src: string): Promise<HTMLImageElement>
    export function drawImageInCanvas (img: HTMLImageElement): HTMLCanvasElement | OffscreenCanvas
    export function drawFileInCanvas (file: File): Promise<[ImageBitmap | HTMLImageElement, HTMLCanvasElement | OffscreenCanvas]>
    export function canvasToFile (canvas: HTMLCanvasElement | OffscreenCanvas, fileType: string, fileName: string, fileLastModified: number, quality?: number): Promise<File | Blob>
    export function getExifOrientation (file: File): Promise<number>
}

export as namespace imageCompression;

export = imageCompression;
