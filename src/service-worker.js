// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('/sw.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }


export default function swDev(){
let swDev=`${process.env.PUBLIC_URL}/sw.js`
navigator.serviceWorker.register(swDev).then((result)=>{
  console.log(result,"result")
} )
}