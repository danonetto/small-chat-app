    const WebSocket=require("ws");
    const wss=new WebSocket.Server({port:8082});
let clients=[];
    wss.on("connection",(ws)=>{
    console.log("kapcsolat megtermtve a kliensel");
    clients.push(ws);
    let clientId=null;
    ws.on("message",(data)=>{
        if(!clientId){
            clientId=data;
        ws.id=clientId;
    console.log(`a kliens id je:${ws.id}`);
        }
        else{
            console.log(`uzenet ${ws.id} tol: ${data}`);
            clients.forEach((client) => {
            
            if (client.readyState === WebSocket.OPEN) {
                client.send(`${clientId} : ${data}`);
            }
        });    
        }
    });
    

    ws.on("close",()=>{
    console.log("kapcsolat bezarva a kliensel");
    });


    });
    console.log("a szerver fut");