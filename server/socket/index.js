
module.exports = function (io) {
  io.on('connection', function(socket) {
    console.log('connection has been established');

    socket.on('portfolio/subscribe', function(portfolioId) {
      console.log('joining portfolio ', `portfolio-${portfolioId}`);
      socket.join(`portfolio-${portfolioId}`);
    })

    socket.on('portfolio/unsubscribe', function(portfolioId) {
      console.log('leaving portfolio ', `portfolio-${portfolioId}`);
      socket.leave(`portfolio-${portfolioId}`);
    })

    socket.on('portfolio/postSaved', function(post) {
      console.log('emitting to portfolio', `portfolio-${post.portfolio}`)
      socket.to(`portfolio-${post.portfolio}`).emit('portfolio/postPublished', post)
    })
  })
}
