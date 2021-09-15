export default class Mediator {
    constructor() {
        this.handlers = new Map();
        this.components = [];
    }
    add(component) {
        component.attach(this);
        this.components.push(component);
        return component;
    }
    beNotified(target, event, data) {
        const handlers = this.handlers.get(target);
        if (handlers !== undefined && event in handlers) {
            handlers[event](data);
        }
    }
    addEventHandler(target, event, handler) {
        let handlers = this.handlers.get(target);
        if (handlers === undefined) {
            handlers = { [event]: handler };
        } else {
            handlers[event] = handler;
            this.handlers.set(target, handlers);
        }
        this.handlers.set(target, handlers);
    }
}

class Component extends Mediator {
    attach(mediator) {
        this.mediator = mediator;
    }
    notify(event, data) {
        this.mediator?.beNotified(this, event, data);
        if (!this.mediator) {
            console.warn('no mediator attached');
        }
    }
}

Mediator.Component = Component;
