// Problema 2: Contador de stickers
document.addEventListener('DOMContentLoaded', function () {
    const stickerInputs = document.querySelectorAll('.sticker-input');
    const resultParagraph = document.getElementById('result');

    stickerInputs.forEach(input => {
        input.addEventListener('input', updateTotal);
    });

    function updateTotal() {
        let totalStickers = 0;
        stickerInputs.forEach(input => {
            totalStickers += parseInt(input.value) || 0;
        });

        if (totalStickers <= 10) {
            resultParagraph.textContent = `Llevas ${totalStickers} stickers`;
        } else {
            resultParagraph.textContent = 'Llevas demasiados stickers';
        }
    }
});
