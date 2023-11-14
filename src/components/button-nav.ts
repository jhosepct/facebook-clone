import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { TypeIcons, getIconByName } from '../utils/icons';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

@customElement('button-nav')
export class ButtonNav extends LitElement {
    @property({ type: Number }) count = 0;
    @property({ type: String }) type = 'circle';
    @property({ type: String }) icon: TypeIcons = 'default';
    @property({ type: String }) name: String = 'default';



    static styles = [
        css`

            .button {
                position: relative;
                display: flex;
                justify-content: center;
                font-size: 24px;
            }

            .button::before{
                content: attr(data-name) " ";
                text-transform: capitalize;
                padding: 8px 16px;
                background-color: red;
                display: none;
                position: absolute;
                bottom:-44px;
                background-color: rgba(237, 237, 237, .7);
                font-size: 1rem;
                border-radius: 8px;
                opacity: 1;
                font-weight: 400;
                color: #3a3b3c;
                transition: display 1s ease;
            }

            .button:hover::before{
                display: block;
            }

            .circle{
                width: 40px;
                height: 40px;
                background-color: #3a3b3c;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                padding: 8px;
            }

            .circle:hover{
                background-color: #4d4e4f;
            }

            .circle .notification{
                position: absolute;
                min-width: 19px;
                min-height: 19px;
                right: -5px;
                top:-5px;
                background-color: #e41e3f;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
            }

            .circle:hover{
                cursor: pointer;
            }

            .rect{
                border-radius: 8px;
                padding: 16px 44px;
            }

            .rect:hover{
                background-color: #3a3b3c;
            }

            .rect.active{
                border-bottom: 2px solid #0866ff;
            }
        `
    ];



    render() {
        return html`
        <div class="button ${this.type === "circle" ? "circle" : "rect"}" data-name="${this.name}" >
            ${this.count > 0 ? html`<div class="notification">${this.count}</div>` : ''}
            ${unsafeHTML(getIconByName(this.icon))}
        </div>
        `;
    }
}