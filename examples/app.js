console.log('--- Running ---');

var mSlack = require('./slackEnvelop');

//construct an slack notification envelop and wait for subscription
var notification1 = mSlack
					.getSlackEnvelop()
					.setTitle("My First Notification Title")
					.setDescription("This is just the description that stands behind the title")
					.setAttributes({
						Nome:  "Vinicius Lima",
						idade: 28
					})
					.exec();


// notification1
// 	.subscribe(function result(err,result) {
// 		// TODO
// 	});