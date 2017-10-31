#response bridge typescript library

```
"dependencies": {
    ...
    "ts-response-bridgre" : "1.0.8"
}
```

##usage set data
```typescript

    let message = new Message();
    message.setKey("xinput")
      .setType(Message.TYPE_ERROR)
      .setText("this is error text");

    let bridge = new Bridge();
    bridge.addData("users", [])
      .setStatus(1)
      .addMessage(message);

//OR

    let json = {
      "status":"1",
      "messages": [{"type":"success", "key":"xkey", "message":"this is success message"},
        {"type":"error", "key":"ykey", "message":"this is error message"},
        {"type":"notice", "key":"wkey", "message":"this is notice message"}],
      "data" : {"users":[], "gifts":[], }
    };

    let bridge2 = Bridge.parse(json);

    if(bridge2.getStatus() == 1){
        ///
        console.log(bridge2.getMessage("xkey").getText());
    }

    bridge2.getMessages().forEach((item)=>{
      console.log(item.getText())
    });

```