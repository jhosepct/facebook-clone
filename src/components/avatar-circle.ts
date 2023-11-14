import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('avatar-circle')
export class AvatarCircle extends LitElement {
    @property({ type: String }) src = '';
    @property({ type: String }) width = '56px';
    @property({ type: String }) height = '56px';

    static styles = [
        css`
            .avatar, .avatar img{
                border-radius: 50%;
            }

            .avatar img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        `
    ];

    render() {
        return html`
            <div class="avatar" style="width: ${this.width}; height: ${this.height}">
                <img src="${this.src}" alt="Avatar">
            </div>
        `;
    }
}
