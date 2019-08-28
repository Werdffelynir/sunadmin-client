import html2canvas from 'html2canvas';


const URL_FILES_UPLOAD = 'http://localhost:3005/files';

class Screenshot {

    constructor (confList) {
        this.confList = confList;
        this.drawList = {};
    }

    shot () {
        Object.keys(this.confList).forEach((key) => {
            const selector = this.confList[key];

            html2canvas(document.querySelector(selector))
                .then(canvas => {
                    this.send(key, canvas);
                    this.drawList[key] = canvas;
                });
        });
    }

    send (key, canvas) {
        if (canvas instanceof HTMLCanvasElement) {
            const canvasData = canvas.toDataURL("image/png");
            const formData = new FormData();
            formData.append('name', key);
            formData.append('data', canvasData);

            fetch(URL_FILES_UPLOAD, {
                method: 'POST',
                body: formData,
            })  .then(response => {
                console.log(response);
            });
        }
    }

}

export default new Screenshot({
    'header': '#header',
    'card-1': '#three_cards',
    'card-2': '#three_cards',
    'card-3': '#three_cards',
    'mobileAdaptive': '#mobile',
    'applicationsCreators': '#applications',
    'environmentForApplication': '#environment',
});
