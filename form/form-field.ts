export class FormField<T> {
    value: T;
    name: string;
    label: string;
    required: boolean;
    order: number;
    type: string;

    constructor(options: {
        value?: T,
        name?: string,
        label?: string,
        required?: boolean,
        order?: number,
        type?: string
    } = {}) {
        this.value = options.value;
        this.name = options.name;
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.type = options.type || '';
    }
}
