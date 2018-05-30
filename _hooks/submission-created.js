exports.handler = function(event, context, callback) {
  setTimeout(function() {
    console.log('<<< Context start')
    console.log(context)
    console.log('>>> Context end')
    console.log('<<< Event start')
    console.log(event)
    console.log('>>> Event end')
    callback()
  }, 250)
}
