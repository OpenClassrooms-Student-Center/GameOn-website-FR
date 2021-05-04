import { domElement} from "./constant.js";
import { editNav, launchModal, closeModal} from "./function.js";
import { sendData } from "./valid_Form.js";

domElement.btnNav.addEventListener("click", () => editNav(domElement.actionModal));

domElement.modalBtn.forEach((btn) => btn.addEventListener("click", () => launchModal(domElement.modalbg)));

domElement.btnCloseModal.addEventListener("click", () => closeModal(domElement.modalbg));

document.forms[0].addEventListener("submit",sendData);

