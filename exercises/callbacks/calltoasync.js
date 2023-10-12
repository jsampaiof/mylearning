// import { error } from "console";

let users = [
  { 
    id: 1, 
    username: 'user1', 
    posts:{
      post1: 'post1', 
      post2: 'post2'
    } 
  },
  { 
    id: 2, 
    username: 'user2', 
    posts:{
      post3: 'post3', 
    } 
  }
];

function delay(ms){
  return new Promise(resolve => setTimeout(resolve(), ms));
};

async function fetchUserData(userId) {
    try{
      await delay(2000);
      return users.filter((user) => {
        return user.id === userId;
      }).map((user) => {
        return { id: user.id, username: user.username };
      });
    }catch(error){
      console.error(error);
    };
};

async function fetchUserPosts(userId) {
  try{
    await delay(1500);
    let allposts = [];
    users.filter((user)=>{
      return user.id === userId;
    }).map((user)=>{
      for (const post in user.posts){
        allposts.push(user.posts[post]);
      };
    });
    return allposts
  }catch(error){
    console.error(error);
  };
}

async function showresult(){
  try {
    const user = await fetchUserData(2);
    const posts = await fetchUserPosts(user[0].id);
    console.log(`id:${user[0].id}, username:${user[0].username}, Posts:${posts.join(', ')}`);
  } catch (error){
    console.error(error);
  }
}

showresult()

 
// fetchUserData(1, (error, user) => {
//   if (error) {
//     console.error('Error fetching user data:', error);
//   } else {
//     fetchUserPosts(user.id, (error, posts) => {
//       if (error) {
//         console.error('Error fetching user posts:', error);
//       } else {
//         console.log(`User: ${user.username}, Posts: ${posts.join(', ')}`);
//       }
//     });
//   }
// });
  