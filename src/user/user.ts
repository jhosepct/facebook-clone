import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('lit-user')
export class User extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
