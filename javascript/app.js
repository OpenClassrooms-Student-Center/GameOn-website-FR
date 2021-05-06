import { DOM_ELEMENT} from "./constant.js";
import { EDIT_NAV, LAUNCH_MODAL, CLODE_MODAL} from "./function.js";
import { SEND_DATA } from "./valid_form.js";

DOM_ELEMENT.btnNav.addEventListener("click", () => EDIT_NAV(DOM_ELEMENT.actionModal));

DOM_ELEMENT.modalBtn.forEach((btn) => btn.addEventListener("click", () => LAUNCH_MODAL(DOM_ELEMENT.modalbg)));

DOM_ELEMENT.btnCloseModal.addEventListener("click", () => CLODE_MODAL(DOM_ELEMENT.modalbg));

document.forms[0].addEventListener("submit",SEND_DATA);

