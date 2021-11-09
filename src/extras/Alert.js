import swal from "sweetalert";

const Alert = (alertText) => {
    const swalOptions = { 
        title: "Campos faltantes",
        text: alertText,
        icon: "error",
    };
    swal(swalOptions);
}

export default Alert