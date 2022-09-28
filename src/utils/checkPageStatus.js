
function sendNotification(message) {
    const notification = new Notification("New message from Sendbird Chat", {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfd8vsiFqjy1D7t_l5xhzjjVLg86QSxdN1Ng&usqp=CAU",
      body: `${message}`
    })
    notification.onclick = ()=> function() {
      window.open("Sendbird Chat")
    }
}

export default function checkPageStatus(message){
    if(!("Notification" in window)) {
        alert("This browser does not support system notifications!")
      } 
      else if(Notification.permission === "granted") {
        sendNotification(message)
      }
      else if(Notification.permission !== "denied") {
         Notification.requestPermission((permission)=> {
            if (permission === "granted") {
              sendNotification(message)
            }
         })
      }
}