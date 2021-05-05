import { dom_element} from "./constant.js";
import { edit_nav, launch_modal, close_modal} from "./function.js";
import { send_data } from "./valid_form.js";

dom_element.btnNav.addEventListener("click", () => edit_nav(dom_element.actionModal));

dom_element.modalBtn.forEach((btn) => btn.addEventListener("click", () => launch_modal(dom_element.modalbg)));

dom_element.btnCloseModal.addEventListener("click", () => close_modal(dom_element.modalbg));

document.forms[0].addEventListener("submit",send_data);

