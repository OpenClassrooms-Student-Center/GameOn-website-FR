import Mediator from "./mediator.mjs";

class FormData extends Mediator.Component {
    constructor(element) {
        super();
        this.element = element;
        this.input = element.querySelector('input');
        this.input.addEventListener('input', this.handleValueChange);
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
    clear() {
        this.input.value = '';
        this.setState();
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
