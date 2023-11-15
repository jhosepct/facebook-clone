import { LitElement, html, css } from 'lit-element';
import { User, UserType } from './mocks/user';
import { sections } from './mocks/sections';
import { customElement, property } from 'lit/decorators.js'
import { posts } from './mocks/post';

@customElement('lit-app')
export class App extends LitElement {
  @property({ type: Object }) user: UserType = User;

  static styles = css`
    *{
      color:white;
    }

    a{
      text-decoration:none;
    }
    
    .wrapper{
      display:flex;
      justify-content:space-between;
      width: 100%;
      height: calc(100vh - 72px);
      
    }

    .section {
      width: 20%;
      padding: 16px 8px;
      
      max-height: 100%;
      overflow: auto;
      scroll-behavior: smooth;
    }

    .section-posts{
      width: 40%;
      max-width: 680px;
      padding: 16px 8px;
      display:flex;
      flex-direction:column;
      gap: 16px;
      max-height: 100%;
      overflow: auto;
      scroll-behavior: smooth;
    }

    .section::-webkit-scrollbar, .section-posts::-webkit-scrollbar  {
      display: none;
    }

    .section-contacts{
      display:flex;
      flex-direction:column;
      gap: 8px;
    }

    .section-contacts .header{
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
    .section-contacts .header div{
      display:flex;
      gap: 8px;
    }

    .section-contacts .header h3{
      font-size: 14px;
      font-weight: 600;
    }
    .section-contacts .contacts{
      display:flex;
      flex-direction:column;
      gap: 8px;
    }
    .card{
      cursor:pointer;
      display:flex;
      align-items:center;
      gap: 8px;
      border-radius: 8px;
      padding: 8px;
    }
    .card:hover{
      background-color: #3a3b3c;
      /* background-color: #4d4e4f; */
    }

    .card span{
      font-size: 16px;
      font-weight: 600;
    }
  `;

  render() {
    return html`
      <div class="wrapper">
        <section class="section">
          <a href="/user">
            <div class="card">
              <avatar-circle width="36px" height="36px" src="${this.user.photo}"></avatar-circle>
              <span>${this.user.name}</span>
            </div>
          </a>
          ${sections.map(section => html`
          
            <a href="${section.href}">
              <div class="card">
                <div style="${section.style}"></div>
                <span>${section.name}</span>
              </div>
            </a>  
          `)}
        </section>
        
        <section class="section-posts">
          ${posts.map(post => html`
              <card-publication .post="${post}"></card-publication>`)
      }
        </section>

        <section class="section-contacts section">
          <div>
            <div class="header">
              <h3>Contacts</h3>
              <div>
                <button-nav type="variant-circle" icon="search" name="Search by name or group"></button-nav>
                <button-nav type="variant-circle" icon="ellipsis" name="Options"></button-nav>
              </div>
            </div>
            <div class="contacts">
              ${this.user.friends.map(friend => html`
                <div class="card">
                  ${friend.state ?
          html`<avatar-circle active width="36px" height="36px" src="${friend.photo}"></avatar-circle>`
          : html`<avatar-circle width="36px" height="36px" src="${friend.photo}"></avatar-circle>`
        }                  
                  <span>${friend.name}</span>
                </div>
              `)}
            </div>
          </div>
          <div>
            <div class="header">
              <h3>Group conversations</h3>
            </div>
            <div class="contacts">
              ${this.user.groups.map(group => html`
                <div class="card">
                  <avatar-circle width="36px" height="36px" src="${group.photo}"></avatar-circle>
                  <span>${group.name}</span>
                </div>
              `)}
            </div>
          </div>
        </section>
      </div>
    `;
  }
}