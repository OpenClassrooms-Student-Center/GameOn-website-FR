import { DOM_ELEMENT} from "./constant.js";
import { edit_nav, launch_modal, close_modal} from "./function.js";
import { send_data } from "./valid_form.js";

DOM_ELEMENT.btnNav.addEventListener("click", () => edit_nav(DOM_ELEMENT.actionModal));

DOM_ELEMENT.modalBtn.forEach((btn) => btn.addEventListener("click", () => launch_modal(DOM_ELEMENT.modalbg)));

DOM_ELEMENT.btnCloseModal.addEventListener("click", () => close_modal(DOM_ELEMENT.modalbg));

document.forms[0].addEventListener("submit",send_data);
