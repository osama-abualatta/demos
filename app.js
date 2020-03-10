const listElement = document.querySelector(".posts");
 const postTemplate = document.getElementById("single-post");
 const getTitle=document.getElementById("m");

 const btn=document.getElementById("btn");

 const myName = document.getElementById('name');
 const myJob = document.getElementById('job');
 
 //const axios = require('axios');

 // Make a request for a user with a given ID
 
// function click() {
//     console.log(name)


// }

// axios.delete('url', { data: payload }).then(
//     // Observe the data keyword this time. Very important
//     // payload is the request body
//     // Do something
//   )
                        /*** delete axios ***/
                    const myData=(event)=>{
                                event.preventDefault();
                                axios.delete('https://reqres.in/api/users/2',
                                {
                                id: myName.value,
                                // job:  myJob.value
                                }
                                )
                                .then(function (response) {
                                    // handle success
                                    console.log(response);
                                })
                            }
                             btn.addEventListener('click',myData);

                                    /***** post  axios****/
                            // const myData=(event)=>{
                            //     event.preventDefault();
                            //     axios.post('https://reqres.in/api/users',
                            //     {
                            //     name: myName.value,
                            //     job:  myJob.value
                            //     }
                            //     )
                            //     .then(function (response) {
                            //         // handle success
                            //         console.log(response);
                            //     })
                            //     .catch(function (error) {
                            //         // handle error
                            //         console.log(error);
                            //     })
                            //     .then(function () {
                            //         // always executed
                            //     });

                            // }
                            // btn.addEventListener('click',myData);


                            /***** put axios ****/
                            
                            // const myData=(event)=>{
                            //     event.preventDefault();
                            //     axios.put('https://reqres.in/api/users',
                            //     {
                            //        name: myName.value,
                            //        job:  myJob.value
                            //      }
                            //     )
                            //       .then(function (response) {
                            //         // handle success
                            //         console.log(response);
                            //       })
                            //       .catch(function (error) {
                            //         // handle error
                            //         console.log(error);
                            //       })
                            //       .then(function () {
                            //         // always executed
                            //       });


                                    /***** patch  axios****/
                    
                    // const myData=(event)=>{
                    //     event.preventDefault();
                    //     axios.patch('https://reqres.in/api/users',
                    //     {
                    //        name: myName.value,
                    //        job:  myJob.value
                    //      }
                    //     )
                    //       .then(function (response) {
                    //         // handle success
                    //         console.log(response);
                    //       })
                    //       .catch(function (error) {
                    //         // handle error
                    //         console.log(error);
                    //       })
                    //       .then(function () {
                    //         // always executed
                    //       });



                                    /***** delete axios ****/
 
     
// }
// btn.addEventListener('click',myData);

// const xhr = new XMLHttpRequest();

// xhr.open('GET', '1.json');

// xhr.responseType = 'json';

// xhr.onload = function() {
//   // const listOfPosts = JSON.parse(xhr.response);
//   const listOfPosts = xhr.response;
//   //getTitle.textContent=listOfPosts.glossary.title;
 
//     for (const post in listOfPosts.glossary.GlossDiv.GlossList.GlossEntry) {
//         let data='';
//         data +="<li>"+ listOfPosts.glossary.GlossDiv.GlossList.GlossEntry[post]+"</li>";//.GlossDef.GlossSeeAlso[1];
    
//    }
//    getTitle.innerHTML=data;
// //console.log(listOfPosts);
// }

// xhr.send();

// fetch("1.json")
//   .then(function(resp) {
//     return resp.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });
//   fetch('1.json')
//   .then(function(response) {
//     return response.json()
//   }).then(function(json) {
//     console.log('parsed json', json)
//   }).catch(function(ex) {
//     console.log('parsing failed', ex)
//   })


