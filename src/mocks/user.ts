export interface UserType {
    name: string;
    photo: string;
    frontPage?: string;
    nickname: string;
    email: string;
    password: string;
    state: boolean;
    friends: UserType[];
    groups: GroupType[];
}

export interface GroupType {
    name: string;
    photo: string;
    members: UserType[];
}

export const User2: UserType = {
    name: 'Jho Doe 1',
    state: true,
    photo: 'https://i.pravatar.cc/150?img=1',
    nickname: 'jhoDoe2',
    email: 'john@gmail.com',
    password: '123456',
    friends: [],
    groups: [],
}

export const User3: UserType = {
    name: 'Jho Doe 2',
    state: true,
    photo: 'https://i.pravatar.cc/150?img=2',
    nickname: 'jhoDoe3',
    email: 'john@gmail.com',
    password: '123456',
    friends: [],
    groups: [],
}

export const User4: UserType = {
    name: 'Jho Doe 3',
    state: false,
    photo: 'https://i.pravatar.cc/150?img=3',
    nickname: 'jhoDoe2',
    email: 'john@gmail.com',
    password: '123456',
    friends: [],
    groups: [],
}

export const User5: UserType = {
    name: 'Jho Doe 4',
    state: true,
    photo: 'https://i.pravatar.cc/150?img=4',
    nickname: 'jhoDoe3',
    email: 'john@gmail.com',
    password: '123456',
    friends: [],
    groups: [],
}

export const User6: UserType = {
    name: 'Jho Doe 5',
    state: false,
    photo: 'https://i.pravatar.cc/150?img=5',
    nickname: 'jhoDoe2',
    email: 'john@gmail.com',
    password: '123456',
    friends: [],
    groups: [],
}

export const User7: UserType = {
    name: 'Jho Doe 6',
    state: true,
    photo: 'https://i.pravatar.cc/150?img=6',
    nickname: 'jhoDoe3',
    email: 'john@gmail.com',
    password: '123456',
    friends: [],
    groups: [],
}

export const User8: UserType = {
    name: 'Jho Doe 7',
    state: true,
    photo: 'https://i.pravatar.cc/150?img=7',
    nickname: 'jhoDoe2',
    email: 'john@gmail.com',
    password: '123456',
    friends: [],
    groups: [],
}

export const User9: UserType = {
    name: 'Jho Doe 8',
    state: true,
    photo: 'https://i.pravatar.cc/150?img=8',
    nickname: 'jhoDoe3',
    email: 'john@gmail.com',
    password: '123456',
    friends: [],
    groups: [],
}

export const User10: UserType = {
    name: 'Jho Doe 9',
    state: true,
    photo: 'https://i.pravatar.cc/150?img=9',
    nickname: 'jhoDoe2',
    email: 'john@gmail.com',
    password: '123456',
    friends: [],
    groups: [],
}

export const User11: UserType = {
    name: 'Jho Doe 10',
    state: false,
    photo: 'https://i.pravatar.cc/150?img=10',
    nickname: 'jhoDoe3',
    email: 'john@gmail.com',
    password: '123456',
    friends: [],
    groups: [],
}

export const Group: GroupType = {
    name: 'Group 1',
    photo: 'https://i.pravatar.cc/150?img=7',
    members: [User2, User3, User4, User5, User6, User7],
}

export const Group2: GroupType = {
    name: 'Group 2',
    photo: 'https://i.pravatar.cc/150?img=8',
    members: [User2, User3, User4, User5, User6, User7],
}


export const User: UserType = {
    name: 'Kevin Ct',

    state: true, photo: 'https://scontent.flim2-2.fna.fbcdn.net/v/t39.30808-6/274302494_3289237511310774_8075116471719732765_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF86gjwB-ZZI4oQ3JSjLyKlWC8dM01Q8_pYLx0zTVDz-lAoAu_omG6IMPB5NPi7IKdKXJzEzzVLx9bCiphwvuUT&_nc_ohc=EWMA49MCQSoAX8vuoUh&_nc_ht=scontent.flim2-2.fna&oh=00_AfCKpro0dL7t4dPmgwjO_RsP4UjYk_bg1RaGQafIguvwCA&oe=6557ADCF',
    nickname: 'nickname',
    frontPage: 'https://scontent.flim2-2.fna.fbcdn.net/v/t39.30808-6/387811188_3718962865004901_7036779608492060713_n.jpg?stp=dst-jpg_p720x720&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGopSgU-LzS6a9R3-MOFYNEBi5foCiwQgUGLl-gKLBCBYOK55T1Dor4ylBvxbMwhF666nmPjbvPNSP6dmJrKnQn&_nc_ohc=ufeQyTgGTL4AX-4en7-&_nc_ht=scontent.flim2-2.fna&oh=00_AfAKBTkxHZxKwkPoFx1TxvtxViF8NrXSBEVp9G62tdKl8g&oe=6557DF7B',
    email: 'kevin@gmail.com',
    password: '123456',
    friends: [User2, User3, User4, User5, User6, User7, User8, User9, User10, User11],
    groups: [Group, Group2],
}

