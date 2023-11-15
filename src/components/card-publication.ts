import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { PostType, post } from '../mocks/post';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { getIconByName } from '../utils/icons';

@customElement('card-publication')
export class CardPublication extends LitElement {

    @property({ type: Object }) post: PostType = post;

    static styles = [
        css`
            a{
                color: #5aa7ff;
            }
            .card-publication{
                display: flex;
                flex-direction: column;
                gap: 8px;
                background-color: #242526;
                border-radius: 8px;
                box-shadow: 0 0 8px rgba(0,0,0,.2);
            }
            .card-header{
                padding: 16px 16px 0;
                display: flex;
                justify-content: space-between;
            }
            .card-header .card-info{
                display: flex;
                gap: 8px;
                justify-content: center;
                align-items: center;
            }
            .header-info{
                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            .header-info .info-name{
                font-size: 16px;
                color: #fff;
            }
            .header-info .info-date{
                font-size: 14px;
                color: #8e8e8e;
            }
            .card-header .card-controls{
                display: flex;
                gap: 8px;
                margin-left: auto;
            }

            .card-contain{
                padding: 16px 0;
            }
            .card-contain .card-post{
                padding: 0 16px;
                margin-bottom: 16px;
            }
            .card-contain .card-media{
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax( 100px, 860px));
            }

            .card-contain .card-media iframe{
                width:100%;
                min-height: 307px;
            }

            .card-contain .card-media img{
                width:100%;
            }

            button{
                display: flex;
                align-items: center;
                gap: 8px;
                background-color: transparent;
                border: none;
                cursor: pointer;
                color: #8e8e8e;
                font-size: 14px;
            }
            .card-footer{
                padding: 0 16px 16px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .card-footer .footer-info{
                display: flex;
                gap: 8px;
                align-items: center;
                justify-content: space-between;
            }
            .card-footer .footer-controls{
                position: relative;
                width: 100%;
                display: flex;
                gap: 8px;
                justify-content: center;
            }
            .card-footer .footer-controls button{
                width: max-content;
                padding: 8px 8%;
                border-radius: 8px;
                /* background-color: #3a3b3c; */
            }

            .card-footer .footer-controls button:hover{
                background-color: #525355;
            }

            .card-footer .footer-controls span{
                font-size: 18px;
                color: #8e8e8e;
            }
        `
    ];

    render() {
        return html`
            <div class="card-publication">
                <div class="card-header">
                    <div class="card-info">
                        <avatar-circle src="${this.post.profile}"></avatar-circle>
                        <div class="header-info">
                            <span class="info-name" >${this.post.name}</span>
                            <span class="info-date" >${this.post.date}</span>	
                        </div>
                    </div>
                    <div class="card-controls">
                        <button-nav icon="ellipsis" width="20px" height="20px" type="variant-circle"></button-nav>
                        <button-nav icon="x" width="20px" height="20px" type="variant-circle"></button-nav>
                    </div>
                </div>
                <div class="card-contain">
                    <div class="card-post">
                        <span>${unsafeHTML(this.post.content)}</span>
                    </div>
                    <div class="card-media">
                        ${this.post.media.map(media => html`
                            <div>
                                ${media.type === 'img' ? html`
                                    <img src="${media.src}" alt="">
                                ` : html`
                                <iframe src=${media.src} style="border:none;overflow:hidden" scrolling="no" frameborder="0"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                `}
                            </div>
                        `)}
                    </div>
                </div>
                <div class="card-footer">
                    <div class="footer-info">
                    <button>
                        ${this.post.likes > 0 ? html`
                                <div>
                                     ${unsafeHTML(getIconByName('heart'))}
                                </div>
                                <span>${this.post.likes} likes</span>
                                ` : ''
            } </button>
                        
                       
                           
                        <div>
                            ${this.post.comments > 0 ? html`
                                    <span>${this.post.comments} comments</span>
                                ` : ''
            }
                            ${this.post.shares > 0 ? html`
                                    <span>${this.post.shares} shares</span>
                                ` : ''
            }
                        </div>
                    </div>
                    <div class="footer-controls">
                        <button>
                            <div>
                                ${unsafeHTML(getIconByName('heart'))}
                            </div>
                            <span>My Likes</span>
                        </button>
                        <button>
                            <div>
                                ${unsafeHTML(getIconByName('comment'))}
                            </div>
                            <span>Comment</span>
                        </button>
                        <button>
                            <div>
                                ${unsafeHTML(getIconByName('share'))}
                            </div>
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            </div>
            
        `;
    }
}
