module.exports = ({ env }) => ({
    // ...
    io: {
      enabled: true,
      config: {
        contentTypes: ['api::blog.blog'],
        events: [
          {
            name: 'connection',
            handler: ({ strapi }, socket) => {
              strapi.log.info(`[io] new connection with id ${socket.id}`);
  
              // Handle client ping
              socket.on('clientPing', () => {
                console.log("clientPing");
                setTimeout(() => {
                  socket.emit('serverPing');
                }, 60000);
              });
  
              // Handle joining rooms
              socket.on('join', (room) => {
                socket.join(room);
              });
            },
          },
          {
            name: 'afterSave', // Listen for the afterSave event
            handler: async ({ strapi }, entry) => {
              // Check if the saved entry is of type 'blog.blog'
              if (entry && entry.contentTypeId === 'blog.blog') {
                // Get the updated blog entry
                const updatedBlog = await strapi.query('blog').findOne({ id: entry.id });
                // Emit the updated blog to the 'blogUpdates' room
                strapi.io.to('blogUpdates').emit('blogUpdate', updatedBlog);
              }
            },
          },
        ],
      },
    },
    // ...
  });
  