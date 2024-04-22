module.exports = ({ env }) => ({
    // ...
    io: {
        enabled: true,
        config: {
            contentTypes: [{ uid: 'api:blog.blog', actions: ['create', 'update', 'delete'] }],
            events: [
                {
                    name: 'connection',
                    handler: ({ strapi }, socket) => {
                        strapi.log.info(`[io] new connection with id ${socket.id}`);
                        
                        socket.on('clientPing', () => {
                            console.log("clientPing");
                            setTimeout(() => {
                                socket.emit('serverPing');
                            }, 60000);
                        });

                        socket.on('join', function(room) {
                            socket.join(room);
                        });
                    },
                },
                {
                    name: 'create', // Listen for the create event
                    handler: async ({ strapi }, data) => {
                        // Emit the created data to the 'create' room
                        strapi.io.to('create').emit('create', data);
                    },
                },
                {
                    name: 'update', // Listen for the update event
                    handler: async ({ strapi }, data) => {
                        // Emit the updated data to the 'update' room
                        strapi.io.to('update').emit('update', data);
                    },
                },
                {
                    name: 'delete', // Listen for the delete event
                    handler: async ({ strapi }, data) => {
                        // Emit the deleted data to the 'delete' room
                        strapi.io.to('delete').emit('delete', data);
                    },
                },
            ],
        },
    },
    // ...
});
