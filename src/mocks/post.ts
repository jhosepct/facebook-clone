export interface PostType {
    name: string;
    profile: string;
    date: string;
    content: string;
    media: Media[];
    likes: number;
    comments: number;
    shares: number;
    liked: boolean;
    commentsList: Comment[];
}

interface Media {
    type: string;
    src: string;
}

interface Comment {
    name: string;
    profile: string;
    date: string;
    content: string;
    likes: number;
    liked: boolean;
}


export const post2: PostType = {
    name: 'Ubuntu Jóvenes Voluntarios Perú',
    profile: 'https://scontent.flim2-1.fna.fbcdn.net/v/t39.30808-6/344566890_215304347885258_4368041613548593973_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHYOYD1PfPeeVLfDr4IexaI3s6uAXIB3Ijezq4BcgHchJXw6HwSg_oZy9dfIhs4B3UMhsRaV8yM53Ow_66-Yy3&_nc_ohc=6g7q8WLqiZ8AX-jmXjv&_nc_ht=scontent.flim2-1.fna&oh=00_AfBOmsu4wqjq4APxtCktWxpsbdOUXU1K9ZQzSG3Tg9aYgA&oe=6559BFB0',
    date: '22 h',
    content: `<div class="" dir="auto"><div class="x1iorvi4 x1pi30zi x1l90r2v x1swvt13" data-ad-comet-preview="message" data-ad-preview="message" id=":r2o:"><div class="x78zum5 xdt5ytf xz62fqu x16ldp7u"><div class="xu06os2 x1ok221b"><span class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen xo1l8bm xzsf02u x1yc453h" dir="auto"><div class="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a"><div dir="auto" style="text-align: start;"><span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img height="16" width="16" alt="📢" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/t39/1/16/1f4e2.png"></span> CONVOCATORIA UBUNTU - CUSCO</div><div dir="auto" style="text-align: start;">Seguimos buscando personas que quieran unirse a la familia.</div></div><div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a"><div dir="auto" style="text-align: start;"><span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img height="16" width="16" alt="📝" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/tcc/1/16/1f4dd.png"></span>Link de inscripción:</div><div dir="auto" style="text-align: start;"><span><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1fey0fg" href="https://forms.office.com/r/Cxza0vqvZJ?fbclid=IwAR1gyElE2MY_vW24YbKC6xldt6Qbshu_Az1fmSYT0T-ZJeomAbg89lGZCjU" rel="nofollow noreferrer" role="link" tabindex="0" target="_blank">https://forms.office.com/r/Cxza0vqvZJ</a></span></div></div><div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a"><div dir="auto" style="text-align: start;"><span><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" href="https://www.facebook.com/hashtag/cusco?__eep__=6&amp;__cft__[0]=AZXfrFED4j50tiVscMldRBtVNvjKFVl0Kr-g2HgOu2fOLHTd0XeJbz6jKpsbh8m8VCt8oils3MKglDKDjEhZYfm7KMX4o5ipRvPBt02dGAPPCyqgr_3v2irTCs58K4t0M_9yrkjQ4PpBIWq4O4WGh2QkCCbuSnbtueKKpRLod_md26ey_IBKMAMmnaWVmReFgVc&amp;__tn__=*NK-R" role="link" tabindex="0">#Cusco</a></span> <span><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" href="https://www.facebook.com/hashtag/voluntariado?__eep__=6&amp;__cft__[0]=AZXfrFED4j50tiVscMldRBtVNvjKFVl0Kr-g2HgOu2fOLHTd0XeJbz6jKpsbh8m8VCt8oils3MKglDKDjEhZYfm7KMX4o5ipRvPBt02dGAPPCyqgr_3v2irTCs58K4t0M_9yrkjQ4PpBIWq4O4WGh2QkCCbuSnbtueKKpRLod_md26ey_IBKMAMmnaWVmReFgVc&amp;__tn__=*NK-R" role="link" tabindex="0">#Voluntariado</a></span> <span><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" href="https://www.facebook.com/hashtag/convocatoria?__eep__=6&amp;__cft__[0]=AZXfrFED4j50tiVscMldRBtVNvjKFVl0Kr-g2HgOu2fOLHTd0XeJbz6jKpsbh8m8VCt8oils3MKglDKDjEhZYfm7KMX4o5ipRvPBt02dGAPPCyqgr_3v2irTCs58K4t0M_9yrkjQ4PpBIWq4O4WGh2QkCCbuSnbtueKKpRLod_md26ey_IBKMAMmnaWVmReFgVc&amp;__tn__=*NK-R" role="link" tabindex="0">#Convocatoria</a></span> <span><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" href="https://www.facebook.com/hashtag/ubuntu?__eep__=6&amp;__cft__[0]=AZXfrFED4j50tiVscMldRBtVNvjKFVl0Kr-g2HgOu2fOLHTd0XeJbz6jKpsbh8m8VCt8oils3MKglDKDjEhZYfm7KMX4o5ipRvPBt02dGAPPCyqgr_3v2irTCs58K4t0M_9yrkjQ4PpBIWq4O4WGh2QkCCbuSnbtueKKpRLod_md26ey_IBKMAMmnaWVmReFgVc&amp;__tn__=*NK-R" role="link" tabindex="0">#Ubuntu</a></span></div></div></span></div></div></div></div>`,
    media: [
        {
            type: 'img',
            src: 'https://scontent.flim2-2.fna.fbcdn.net/v/t39.30808-6/400785271_768470148658766_7849467555248517153_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGyjCIsWGBaoUqFaUlTgzwznjIXApGm9xueMhcCkab3G4u9AfOOZdq5h3ampQ7RedBluVeFf01K57ZuOZOu_S-K&_nc_ohc=ZM4Vl-icH_cAX_ry_2t&_nc_ht=scontent.flim2-2.fna&oh=00_AfA3NBmz6cT_-1wF53NuvY7AFzsTnG-UHGmD2mr9ugOMdw&oe=65591D7F',
        }
    ],
    likes: 10,
    comments: 2,
    shares: 0,
    liked: false,
    commentsList: [
        {
            name: 'John Doe',
            profile: '',
            date: '2 hours ago',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            likes: 10,
            liked: false,
        },
        {
            name: 'John Doe',
            profile: '',
            date: '2 hours ago',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            likes: 10,
            liked: false,
        },
    ],
}

export const post: PostType = {
    name: 'Stefanini LATAM',
    profile: 'https://scontent.flim2-1.fna.fbcdn.net/v/t39.30808-6/358019584_755121013282437_8005870679504484716_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEoRFRP5SRCchzes1T7iXOXdsTW2-vjzLN2xNbb6-PMs1fkxN-4hf099uE9JbUUj8muWJLmltQ8bv5pGBcnNxi7&_nc_ohc=kbUjZ2KEgfoAX-rX7Qm&_nc_ht=scontent.flim2-1.fna&oh=00_AfCPAKV-JerMJmc6XYJYGQ4A6qytqPeEald3dSBJspYXEg&oe=655879B0',
    date: '4 d',
    content: `<div class="xu06os2 x1ok221b"><span class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen xo1l8bm xzsf02u x1yc453h" dir="auto"><div class="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a"><div dir="auto" style="text-align: start;">La inteligencia artificial no es solo una tendencia, ¡es una revolución! <span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img height="16" width="16" alt="🚀" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc6/1/16/1f680.png"></span></div></div><div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a"><div dir="auto" style="text-align: start;"><span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img height="16" width="16" alt="🤖" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/t36/1/16/1f916.png"></span> ¿Sabías que Stefanini utiliza IA para impulsar negocios de diversas industrias?</div></div><div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a"><div dir="auto" style="text-align: start;"><span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img height="16" width="16" alt="💡" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3c/1/16/1f4a1.png"></span> Descubre todos los casos en los que hemos co-creado soluciones con nuestros clientes para revolucionar sus procesos y mejorar la eficiencia <span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img height="16" width="16" alt="🔝" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/t60/1/16/1f51d.png"></span></div></div><div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a"><div dir="auto" style="text-align: start;"><span><a tabindex="-1"></a></span>Encuéntralos en nuestra web <span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img height="16" width="16" alt="👉🏼" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8d/1/16/1f449_1f3fc.png"></span> <span><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1fey0fg" href="https://l.facebook.com/l.php?u=https%3A%2F%2Fbit.ly%2F3MF98sa%3Ffbclid%3DIwAR1JGZ6VEuzwZnLglfmEtMYa29CWzNxJRnOo7-vpsThyQeQVJbxzm-_q8QI&amp;h=AT0-AQTuJL7NF6idnVS_CyLiCInmnImxeWGTS7N6CqhpOdLTOOXstAn6FKGFWVatiRppLYaZAUsDz68vMWF56fDcGi9NwIZ8vZkza-TBqIVDEOQl4GjI9SjLN3quUd0rNHx3&amp;__tn__=-UK-R&amp;c[0]=AT2-bVZ12cEu8Pik71Yy5Y7trrxPK1U_T_g61s9Ydyekd8dfQ0JInwDBTAjxwBIRLgcpeG1XLvhihtK4kIGDEgkBw-F1oeynyHJGk1Q_qKZ1hbjq7mIpab_wQU-6dX8rPb5v1uH-U_jhAD9Sff2F9wOO7zr8aWC-gtM9ZWhOjPImQXi0q0Y6ZmhsroeL7ga0JiRcTUmSinRa2fY3joyu02mJ" rel="nofollow noreferrer" role="link" tabindex="0" target="_blank">https://bit.ly/3MF98sa</a></span></div></div><div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a"><div dir="auto" style="text-align: start;"><span><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" href="https://www.facebook.com/hashtag/inteligenciaartificial?__eep__=6&amp;__cft__[0]=AZXZarvYsOd4AsmU94s-bWQTg5R94HyePhIEtF922lyODbOYptBQUcu0zzhfD3iJFJ9SjtOwBi9A9bXrkjajUX_OqLazou2IZogBL-nTiIp5hY1VAF3aGPlR0gIvAtZDmdUwII0CRwPf159zhYPHIsJIH0aPPGXWrB4uVhksO6WwhBPzYAYFmmbi0lPCY_cGVjM&amp;__tn__=*NK-R" role="link" tabindex="0">#InteligenciaArtificial</a></span> <span><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" href="https://www.facebook.com/hashtag/imagina?__eep__=6&amp;__cft__[0]=AZXZarvYsOd4AsmU94s-bWQTg5R94HyePhIEtF922lyODbOYptBQUcu0zzhfD3iJFJ9SjtOwBi9A9bXrkjajUX_OqLazou2IZogBL-nTiIp5hY1VAF3aGPlR0gIvAtZDmdUwII0CRwPf159zhYPHIsJIH0aPPGXWrB4uVhksO6WwhBPzYAYFmmbi0lPCY_cGVjM&amp;__tn__=*NK-R" role="link" tabindex="0">#Imagina</a></span> <span><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" href="https://www.facebook.com/hashtag/stefaninigroup?__eep__=6&amp;__cft__[0]=AZXZarvYsOd4AsmU94s-bWQTg5R94HyePhIEtF922lyODbOYptBQUcu0zzhfD3iJFJ9SjtOwBi9A9bXrkjajUX_OqLazou2IZogBL-nTiIp5hY1VAF3aGPlR0gIvAtZDmdUwII0CRwPf159zhYPHIsJIH0aPPGXWrB4uVhksO6WwhBPzYAYFmmbi0lPCY_cGVjM&amp;__tn__=*NK-R" role="link" tabindex="0">#StefaniniGroup</a></span> <span><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" href="https://www.facebook.com/hashtag/somosstefanini?__eep__=6&amp;__cft__[0]=AZXZarvYsOd4AsmU94s-bWQTg5R94HyePhIEtF922lyODbOYptBQUcu0zzhfD3iJFJ9SjtOwBi9A9bXrkjajUX_OqLazou2IZogBL-nTiIp5hY1VAF3aGPlR0gIvAtZDmdUwII0CRwPf159zhYPHIsJIH0aPPGXWrB4uVhksO6WwhBPzYAYFmmbi0lPCY_cGVjM&amp;__tn__=*NK-R" role="link" tabindex="0">#SomosStefanini</a></span></div></div></span></div>`,
    media: [
        {
            type: 'video',
            src: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FStefaniniLATAM%2Fvideos%2F1742508079546919%2F&show_text=false&width=560&t=0',
        },
    ],
    likes: 10,
    comments: 3,
    shares: 0,
    liked: false,
    commentsList: [
        {
            name: 'John Doe',
            profile: '',
            date: '2 hours ago',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            likes: 10,
            liked: false,
        },
        {
            name: 'John Doe',
            profile: '',
            date: '2 hours ago',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            likes: 10,
            liked: false,
        },
        {
            name: 'John Doe',
            profile: '',
            date: '2 hours ago',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            likes: 10,
            liked: false,
        },
    ],
}

export const post3: PostType = {
    name: 'Stefanini LATAM',
    profile: 'https://scontent.flim2-1.fna.fbcdn.net/v/t39.30808-6/358019584_755121013282437_8005870679504484716_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEoRFRP5SRCchzes1T7iXOXdsTW2-vjzLN2xNbb6-PMs1fkxN-4hf099uE9JbUUj8muWJLmltQ8bv5pGBcnNxi7&_nc_ohc=kbUjZ2KEgfoAX-rX7Qm&_nc_ht=scontent.flim2-1.fna&oh=00_AfCPAKV-JerMJmc6XYJYGQ4A6qytqPeEald3dSBJspYXEg&oe=655879B0',
    date: '4 d',
    content: `<div class="xu06os2 x1ok221b"><span class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen xo1l8bm xzsf02u x1yc453h" dir="auto"><div class="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a"><div dir="auto" style="text-align: start;">¡Celebramos juntos, crecemos juntos! <span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img height="16" width="16" alt="🎉" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8c/1/16/1f389.png"></span></div></div><div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a"><div dir="auto" style="text-align: start;"><span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img height="16" width="16" alt="☕" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/t91/1/16/2615.png"></span> Hoy por la mañana, durante la visita de Graça Sajovic y Rodrigo Stefanini en nuestras oficinas de Buenos Aires, compartimos un desayuno para celebrar a aquellos que están cumpliendo 5 y 10 años en nuestra familia Stefanini. Porque aquí, cada logro se vive en conjunto, y cada paso adelante se festeja entre todos. <span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img height="16" width="16" alt="💪🏽" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/te9/1/16/1f4aa_1f3fd.png"></span></div></div><div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a"><div dir="auto" style="text-align: start;"><span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img height="16" width="16" alt="⭐" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb4/1/16/2b50.png"></span> Además, fue un momento para reconocer a quienes han brillado con las Actitudes Stefanini y que han recibido más <span><a tabindex="-1"></a></span>estrellas de sus colegas a lo largo del año. <span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img height="16" width="16" alt="🚀" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc6/1/16/1f680.png"></span></div></div><div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a"><div dir="auto" style="text-align: start;"><span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img height="16" width="16" alt="🙌🏽" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/tba/1/16/1f64c_1f3fd.png"></span> Fue una mañana llena de historias de crecimiento, aplausos y palabras de afecto y gratitud. Agradecemos a quienes pudieron estar presentes, y felicitamos a todos los que día a día siguen dando lo mejor. <span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img height="16" width="16" alt="👏🏽" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/tfb/1/16/1f44f_1f3fd.png"></span></div></div><div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a"><div dir="auto" style="text-align: start;"><span><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" href="https://www.facebook.com/hashtag/tiempoencasa?__eep__=6&amp;__cft__[0]=AZV7Zo5dvQENkTyGH7mGiYY0mCX4ybyOLh7vEZmrJJ-GRwyenIw_JKNUk-pDKcjXgdC9IsGxOyO1Il26AwAWQmredjpEC3_tMrHb7U6YbjrHrquUXXNANODlJg2dtbKGAx4xHhO0quPK0ncG_O8lYq3Dm2JzERl8pmn9RZUGOp7NqBgvdGYPERw-W42FM3Xv9kQ&amp;__tn__=*NK-R" role="link" tabindex="0">#TiempoEnCasa</a></span> <span><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" href="https://www.facebook.com/hashtag/stefaniniargentina?__eep__=6&amp;__cft__[0]=AZV7Zo5dvQENkTyGH7mGiYY0mCX4ybyOLh7vEZmrJJ-GRwyenIw_JKNUk-pDKcjXgdC9IsGxOyO1Il26AwAWQmredjpEC3_tMrHb7U6YbjrHrquUXXNANODlJg2dtbKGAx4xHhO0quPK0ncG_O8lYq3Dm2JzERl8pmn9RZUGOp7NqBgvdGYPERw-W42FM3Xv9kQ&amp;__tn__=*NK-R" role="link" tabindex="0">#StefaniniArgentina</a></span> <span><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" href="https://www.facebook.com/hashtag/soystefaniner?__eep__=6&amp;__cft__[0]=AZV7Zo5dvQENkTyGH7mGiYY0mCX4ybyOLh7vEZmrJJ-GRwyenIw_JKNUk-pDKcjXgdC9IsGxOyO1Il26AwAWQmredjpEC3_tMrHb7U6YbjrHrquUXXNANODlJg2dtbKGAx4xHhO0quPK0ncG_O8lYq3Dm2JzERl8pmn9RZUGOp7NqBgvdGYPERw-W42FM3Xv9kQ&amp;__tn__=*NK-R" role="link" tabindex="0">#SoyStefaniner</a></span> <span><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" href="https://www.facebook.com/hashtag/mestf?__eep__=6&amp;__cft__[0]=AZV7Zo5dvQENkTyGH7mGiYY0mCX4ybyOLh7vEZmrJJ-GRwyenIw_JKNUk-pDKcjXgdC9IsGxOyO1Il26AwAWQmredjpEC3_tMrHb7U6YbjrHrquUXXNANODlJg2dtbKGAx4xHhO0quPK0ncG_O8lYq3Dm2JzERl8pmn9RZUGOp7NqBgvdGYPERw-W42FM3Xv9kQ&amp;__tn__=*NK-R" role="link" tabindex="0">#MESTF</a></span> <span><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" href="https://www.facebook.com/hashtag/stefaninigroup?__eep__=6&amp;__cft__[0]=AZV7Zo5dvQENkTyGH7mGiYY0mCX4ybyOLh7vEZmrJJ-GRwyenIw_JKNUk-pDKcjXgdC9IsGxOyO1Il26AwAWQmredjpEC3_tMrHb7U6YbjrHrquUXXNANODlJg2dtbKGAx4xHhO0quPK0ncG_O8lYq3Dm2JzERl8pmn9RZUGOp7NqBgvdGYPERw-W42FM3Xv9kQ&amp;__tn__=*NK-R" role="link" tabindex="0">#StefaniniGroup</a></span></div></div></span></div>`,
    media: [
        {
            type: 'img',
            src: 'https://scontent.flim2-2.fna.fbcdn.net/v/t39.30808-6/401679061_841998947927976_3466952771172708759_n.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHcaV4QfDzFC1AJxkiFGC1yPC8TVX4b13U8LxNVfhvXdSaqq_xSEcOhzQIvOn2KOwZAJ_6P0V0PG9hy_mW-HiKc&_nc_ohc=nWuPcc_0tBwAX9Sdx3z&_nc_ht=scontent.flim2-2.fna&oh=00_AfD_uMyjtkEEj976OpzIZYDJqsJwJXbg5x2yQ4Jf3moZxg&oe=6559E90B',
        },
    ],
    likes: 0,
    comments: 0,
    shares: 0,
    liked: false,
    commentsList: [],
}

export const posts: PostType[] = [
    post, post2, post3
]