# puf - ultra-light pubsub module

usage:


	// subscribe to channel
	puf.subscribe('foo', function(a, b, c) {
	  console.log(a + b + c);
	})

	// another subscriber
	puf.subscribe('foo', function(a, b, c) {
	  console.log(a - b - c);
	})

	// publish
	puf.publish('foo', 1, 2, 3);