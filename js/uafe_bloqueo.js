// ---------------------------------------------------------
// BLOQUEO UAFE – Función central del módulo proveedor
// ---------------------------------------------------------
function habilitarEstadoProveedor(bloquear) {
    const bloquearEstado = bloquear === true || bloquear === 'true' || bloquear === 1 || bloquear === '1';
    console.log("Ejecutando habilitarEstadoProveedor. bloquear=", bloquearEstado);

    const radios = document.querySelectorAll('input[name="estado"]');
    radios.forEach((r) => {
        r.disabled = bloquearEstado;
    });

    console.log("Radios " + (bloquearEstado ? "bloqueados" : "habilitados"));
}
