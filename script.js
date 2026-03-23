const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const btnCerrar   = document.getElementById('btn-cerrar-lightbox');
 
function abrirLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('activo');
    document.body.style.overflow = 'hidden';
}
 
function cerrarLightbox() {
    lightbox.classList.remove('activo');
    lightboxImg.src = '';
    document.body.style.overflow = '';
}
 
/* Cerrar con el botón X */
btnCerrar.addEventListener('click', cerrarLightbox);
 
/* Cerrar al hacer clic fuera de la imagen */
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) cerrarLightbox();
});
 
/* Cerrar con la tecla Escape */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarLightbox();
});