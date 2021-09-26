import Mediator from "./mediator.mjs";

class FormData extends Mediator.Component {
    constructor(element) {
        super();
        this.element = element;
        this.input = element.querySelector('input');
        this.input.addEventListener('input', this.handleValueChange);
        this.input.addEventListener('focus', this.resetBackground);
        this.input.addEventListener('input', this.resetBackground);
    }
    getValue() {
        return this.input.value;
    }
    setValue(value) {
        this.input.value = value;
    }
    setState(state = '') {
        switch (state) {
            case 'valid':
                delete this.element.dataset.errorVisible;
                break;
            case 'invalid':
                this.element.dataset.errorVisible = true;
                break;
            default:
                this.element.dataset.errorVisible = false;
        }
    }
    sayNo() {
        this.element.classList.add('say-no');
        this.setBackground();
        setTimeout(this.resetSayNo, 500);
    }
    resetSayNo = () => {
        this.element.classList.remove('say-no');
    }
    setBackground() {
        this.input.classList.add('red');
    }
    resetBackground = () => {
        this.input.classList.remove('red');
    }
    clear() {
        this.input.value = '';
        this.setState();
        this.resetBackground();
    }
    handleValueChange = () => {
        this.notify('change', [this, this.getValue()]);
    }
}

class Checkbox extends FormData {
    getValue() {
        return this.input.checked;
    }
    clear() {
        this.input.checked = false;
        this.setState();
    }
    handleValueChange = () => {
        this.notify('change', [this, this.getValue()]);
    }
}

class NumberInput extends FormData {
    clear() {
        this.input.value = 0;
        this.setState();
    }
}

export { FormData, Checkbox, NumberInput };
