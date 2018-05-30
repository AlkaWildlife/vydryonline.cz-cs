exports.handler = function(event, context, callback) {
  console.log('Event:', event)
  console.log('Context:', context)
  callback()
}
