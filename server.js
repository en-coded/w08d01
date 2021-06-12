// Load express
const express = require('express');

// Create express app
const app = express();
const fs = require('fs');
// Set new templates

app.engine('abcz', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      return callback(err)
    }
    const rendered = content.toString()
      .replace('#title#', `<title>${options.title}</title>`)
     .replace('#message#', '<h1>' + options.message + '</h1>')
     .replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views')
app.set('view engine', 'abcz')

// Define a "root" route directly on app

app.get('/', (req, res) => {
  res.render('template1', { title: 'Hey', message: 'Hello there', content: 'This is my homepage'})
})

//About me
app.get('/about', (req, res) => {
  res.render('template2', { title: 'Change', message: 'I am changed', content: 'This is the new me'})
})

//DAIX
app.get('/daix', (req, res) => {
  res.render('template1', { title: 'Best Crypto Analytics', message: 'We provide best analytics', content: 'Trade and make money'})
})

//Tennis Channel
app.get('/tennis', (req, res) => {
  res.render('template2', { title: 'Tennis Channel', message: 'Ready to Pay?', content: 'We show old matches'})
})

//BBC
app.get('/bbc', (req, res) => {
  res.render('template2', { title: 'BBC News', message: 'This is BBC', content: 'We dont give the right news'})
})

//ESPN
app.get('/expn', (req, res) => {
  res.render('template1', { title: 'ESPN', message: 'This is ESPN', content: 'Sports News of the hour'})
})

//cnbc
app.get('/cnbc', (req, res) => {
  res.render('template1', { title: 'CNBC', message: 'This is CNBC', content: 'News of the hour'})
})

//NBC
app.get('/nbc', (req, res) => {
  res.render('template1', { title: 'Bloomberg News', message: 'This is Bloomberg', content: 'News of the hour'})
})

//Bloomberg
app.get('/bloomberg', (req, res) => {
  res.render('template1', { title: 'Bloomberg News', message: 'This is Bloomberg', content: 'News of the hour'})
})

//cnn
app.get('/cnn', (req, res) => {
  res.render('template1', { title: 'CNN News', message: 'This is CNN', content: 'News of the hour'})
})

//Links
app.get('/Link', (req, res) => {
  res.render('template2', { title: 'Checkout the Links!!', message: 'I am clickable', content: 'I should be in blue'})
})


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});
