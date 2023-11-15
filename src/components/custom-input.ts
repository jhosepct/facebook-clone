import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { getIconByName } from '../utils/icons';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

enum InputType {
    Text = 'text',
    Search = 'search',
    Number = 'number',
}

@customElement('custom-input')
export class CustomInput extends LitElement {

    @property({ type: String }) placeholder = '';
    @property({ type: String }) value = '';
    @property({ type: String }) type: InputType = InputType.Text;

    render() {
        if (this.type === InputType.Search) {
            return html`
                <div class="search-input">
                    <div class="input-icon">
                        ${unsafeHTML(getIconByName('search'))}
                    </div>
                    <input type="text" placeholder="${this.placeholder}">
                </div>
            `;
        }
        return html`
            <input type="${this.type}" placeholder="${this.placeholder}" class="default-input">
        `;
    }


    static styles = [
        css`
            .search-input {
                display:flex;
                gap: 8px;
                align-items: center;
                border-radius: 32px;
                border: none;
                padding: 12px ;
                background-color: #3a3b3c;
            }
            .search-input input{
                border: none;
                background-color: transparent;
                color: white;
                font-size: 16px;
            }
            .search-input input:focus{
                outline: none;
            }
        `
    ];
}
