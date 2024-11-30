// https://stackoverflow.com/a/49837149/17781751
export function get_average_rgb(img: string | HTMLImageElement) {
    var context = document.createElement('canvas').getContext('2d');
    if (context == null) return "err";

    if (typeof img == 'string') {
        var src = img;
        img = new Image;
        img.setAttribute('crossOrigin', ''); 
        img.src = src;
    }
    context.imageSmoothingEnabled = true;
    context.drawImage(img, 0, 0, 1, 1);
    return context.getImageData(0, 0, 1, 1).data.slice(0,3);
}