// for each

const coding = ["js", "ruby", "java", "python", "cpp", "php"]

coding.forEach(function (item) {
    // console.log(item);
})
coding.forEach((val) => {
    // console.log(val);
})

function printMe(item) {
    console.log(item);
}
// coding.forEach(printMe);


const myObj = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
]

myObj.forEach((item) => {

    console.log(item.languageName);
})