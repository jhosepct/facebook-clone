import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('avatar-circle')
export class AvatarCircle extends LitElement {
    @property({ type: String }) src = '';
    @property({ type: String }) width = '56px';
    @property({ type: String }) height = '56px';
    @property({ type: Boolean }) active = false;

    static styles = [
        css`
            .avatar{
                position: relative;
            }
            .avatar, .avatar img{
                border-radius: 50%;
            }

            .avatar img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .avatar .notification{
                position: absolute;
                min-width: 8px;
                min-height: 8px;
                right:  0px;
                bottom: 0px;
                background-color: #31a24c;
                border: 3px solid #1a1b1c;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
            }
        `
    ];

    render() {
        return html`
            <div class="avatar" style="width: ${this.width}; height: ${this.height}">
                ${this.active ? html`<div class="notification"></div>` : ''}
                <img src="${this.src}" alt="Avatar">
            </div>
        `;
    }
}
