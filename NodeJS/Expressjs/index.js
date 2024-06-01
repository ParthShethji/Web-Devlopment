// why? => bcoz its more efficient than nodejs for creating restapi. Its framework of nodejs.  

const path = require("path")
const express = require("express")
const app = express();


// template engines are used to play with dynamic data   eg. ejs, pug, handlebar

// handlebar -- we need view engien to runthis that is hbs
// compulsary the name must be "views" folder in your main directory

// to set the view engine   note it must be ecactly the same
app.set('view engine', 'hbs')
const templatesPath = path.join(__dirname, "./templates/views")
app.set('views', templatesPath)

// to give engien route 
app.get("", (req, res) => {
    res.render('index', { name: "Parth" })     //this is index.hbs file  this is like html style but we can store dynamic, now pass that pass that dyna,iv content as an object here
})

// to add 404 error page
app.get('/index/*', (req, res)=>{                                     //must always be at bottom
    res.render('404', {
        errorcomment : "This index page couldnot be found"
    })                               
})

app.get('*', (req, res)=>{                                     //must always be at bottom
    res.render('404') , {
        errorcomment : "This couldnot be found"
    }                              
})

// these follow top to bottom rule once they get data the connection is closed


// ------------------------------------------------------------------------------------------------------------------

// we did the below things to serve static website , we are doing above for dynamic website

//-------------------------------------------------------------------------------------------------------------------


// always use aabsolute path
// console.log(path.join(__dirname, "./public:) //use .. to get out of folder
const staticPath = path.join(__dirname, "../public")
// it has builtin middleware i.e. express.static, its only for static pages
// app.use(express.static(staticPath))

// app.get("/", (req, res) => {
//     res.write("\hello from this side")
//     res.send("hello from this side")
// })

// app.get("/about", (req, res) => {
//     res.send("hello from about side")
// })


app.listen(8000, () => {
    console.log("hello world")
})


// what is partial  - for nav baar we need only 1 code we dint have to write code for page this is why we use partial
// const hbs = require("hbs")
// const PartialPath = path.join(__dirname, "./templates/partials")
// hbs.registerPartials(PartialPath)



// inorder to keep footer always at end all we have to do is play with css

// in body --- display - flex
        //    flex -direction - column
        //    min-height: 100vh

// in footer --- margin-top - auto 