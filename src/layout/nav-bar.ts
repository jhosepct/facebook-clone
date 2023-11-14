import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { Header, HeaderType } from '../mocks/navigation';
import { User, UserType } from '../mocks/user';


@customElement('nav-bar')
export class NavBar extends LitElement {

    @property({ type: Array }) navigation: HeaderType['navigation'];
    @property({ type: Array }) info: HeaderType['info'];
    @property({ type: Object }) user: UserType = User;

    constructor() {
        super();
        this.navigation = Header.navigation;
        this.info = Header.info;
    }

    render() {
        return html`
            <header class="header-container">
                <div class="search-bar">
                    <avatar-circle width="55px" height="55px" src="https://www.quinneysbush.co.nz/wp-content/uploads/2021/04/cropped-Facebook-logo.png"></avatar-circle>
                    <custom-input type="search" placeholder="Search Facebook" class="search-input"></custom-input>
                </div>
                <nav class="navigation">
                    <ul class="nav-list">
                        ${this.navigation.map(item => html`
                            <li><a href="${item.url}">
                                <button-nav name="${item.name}" type="rect" icon="${item.icon}"></button-nav>
                            </a></li>
                        `)}
                    </ul>
                </nav>
                <div class="user-info">
                    ${this.info.map(item => html`
                        <button-nav count="${item.count ? item.count : 0}" icon="${item.icon}"></button-nav>
                    `)}
                    <avatar-circle src="${this.user.photo}"></avatar-circle>
                </div>
            </header>
        `;
    }

    static styles = [
        css`
           .header-container {
                /* position: fixed; */
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 8px 16px;
                background-color: #242526;
            }

            /* Estilos de la barra de búsqueda */
            .search-bar {
                display: flex;
                gap:8px;
                align-items: center;
            }

            /* Estilos de la barra de navegación */
            .navigation {
                display: flex;
                align-items: center;
            }

            .nav-list {
                display: flex;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .nav-list li {
                margin-right: 16px;
            }

            .nav-list a {
                text-decoration: none;
                color: #333;
                font-weight: bold;
            }

            /* Estilos de la información del usuario */
            .user-info {
                display: flex;
                align-items: center;
                margin-left: 16px;
                gap:8px;
            }
        `
    ];
}
