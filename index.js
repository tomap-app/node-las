const jBinary = require('jbinary');
const lasTypeset = require('./lib/las');

jBinary
  .load('data/1.0_0.las', lasTypeset)
  .then(function(jb /* : jBinary */) {
    // read everything using type aliased in lasTypeset['jBinary.all']
    var data = jb.readAll();

    // do something with data in las file
    // data....
    console.log(data);

    jb.seek(0); // reusing same instance (and memory buffer) by resetting pointer
    jb.writeAll(data); // writing entire content from data
    jb.saveAs('sample.new.las'); // saving file under given name
  })
  .catch(console.log.bind(console));
