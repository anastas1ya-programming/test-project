let state = {
    profilePage: { posts: [
            {id:1, post: "Hi, I'm Shepard!"},
            {id:2, post: "I should go..."},
            {id:3, post: "Bye, my friends."},
            {id:4, post: "Oh, wait..."},

        ]},
   dialogPage: { messages: [
           {id: 1, message: "Hi"},
           {id: 2, message: "Bye..."},
           {id: 3, message: "What's up"},
           {id: 4, message: "I'm an engineer"},
       ],
       dialogs: [
           {id: 1, name: "Octavia"},
           {id: 2, name: "Clarke"},
           {id: 3, name: "Bellamy"},
           {id: 4, name: "Raven"},
           {id: 5, name: "Diyoza"},
           {id: 6, name: "Emory"},
       ]}

}
export let addPost = (postMessage) =>{
    let newPost={
        id: 5,
        post: postMessage
    };
    state.profilePage.posts.push(newPost);

}
export default state