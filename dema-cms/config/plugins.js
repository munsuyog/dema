module.exports = ({ env }) => ({
	// ...
	io: {
		enabled: true,
		config: {
			// This will listen for all supported events on the article content type
            contentTypes: ['api::blog'],
              "events":[
          {
            "name": "connection",
            "handler": ({ strapi }, socket) => {
              strapi.log.info(`[io] new connection with id ${socket.id}`);
              socket.on('clientPing', ()=>{
                console.log("clientPing");
                setTimeout(()=> {
                  socket.emit('serverPing')}, 60000);
              })
              
              socket.on('join', function(room) {
                  socket.join(room);
              });
            },
          },
        ]
		},
	},
	// ...
});